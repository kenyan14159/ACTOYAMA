import { Client } from '@notionhq/client'
import type { QueryDatabaseResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { env } from './env'

// 環境変数の取得
const NOTION_API_KEY = env.NOTION_API_KEY
const NEWS_DATABASE_ID = env.NOTION_NEWS_DATABASE_ID || ''
const RESULTS_DATABASE_ID = env.NOTION_RESULTS_DATABASE_ID || ''

// Notion APIクライアントの初期化（APIキーがある場合のみ）
function getNotionClient(): Client | null {
    if (!NOTION_API_KEY) {
        return null
    }
    return new Client({ auth: NOTION_API_KEY })
}

// 日付フォーマット
function formatDate(dateString: string | null): string {
    if (!dateString) return ''
    const date = new Date(dateString)
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
}

// Notionページのプロパティ型定義
interface NotionPageProperties {
    '日付'?: { date?: { start: string | null } }
    'カテゴリ'?: { select?: { name: string | null } }
    'タイトル'?: { title?: Array<{ plain_text: string }> }
    '概要'?: { rich_text?: Array<{ plain_text: string }> }
    '大会名'?: { title?: Array<{ plain_text: string }> }
    '会場'?: { rich_text?: Array<{ plain_text: string }> }
    '結果'?: { rich_text?: Array<{ plain_text: string }> }
}

// 型ガード関数
function isPageObjectResponse(page: any): page is PageObjectResponse {
    return page && page.object === 'page' && 'properties' in page
}

// ニュース記事の型定義
export type NewsItem = {
    id: string
    date: string
    category: string
    title: string
    excerpt: string
}

// 大会結果の型定義
export type ResultItem = {
    event: string
    name: string
    grade: string
    record: string
    place: string
}

export type ResultEvent = {
    id: string
    date: string
    name: string
    venue: string
    results: ResultItem[]
}

// ニュース一覧を取得
export async function getNews(): Promise<NewsItem[]> {
    if (!NEWS_DATABASE_ID) {
        console.warn('NOTION_NEWS_DATABASE_ID is not set')
        return []
    }

    const notion = getNotionClient()
    if (!notion) {
        console.warn('NOTION_API_KEY is not set')
        return []
    }

    try {
        const response = await notion.databases.query({
            database_id: NEWS_DATABASE_ID,
            sorts: [
                {
                    property: '日付',
                    direction: 'descending',
                },
            ],
        }) as QueryDatabaseResponse

        // 型安全にフィルタリング
        const typedPages = response.results.filter(isPageObjectResponse)

        return typedPages.map((page) => {
            const properties = page.properties as NotionPageProperties
            return {
                id: page.id,
                date: formatDate(properties['日付']?.date?.start || null),
                category: properties['カテゴリ']?.select?.name || 'お知らせ',
                title: properties['タイトル']?.title?.[0]?.plain_text || '',
                excerpt: properties['概要']?.rich_text?.[0]?.plain_text || '',
            }
        })
    } catch (error) {
        console.error('Failed to fetch news from Notion:', error)
        return []
    }
}

// 大会結果一覧を取得
export async function getResults(): Promise<ResultEvent[]> {
    if (!RESULTS_DATABASE_ID) {
        console.warn('NOTION_RESULTS_DATABASE_ID is not set')
        return []
    }

    const notion = getNotionClient()
    if (!notion) {
        console.warn('NOTION_API_KEY is not set')
        return []
    }

    try {
        const response = await notion.databases.query({
            database_id: RESULTS_DATABASE_ID,
            sorts: [
                {
                    property: '日付',
                    direction: 'descending',
                },
            ],
        }) as QueryDatabaseResponse

        // 型安全にフィルタリング
        const typedPages = response.results.filter(isPageObjectResponse)

        return typedPages.map((page) => {
            const properties = page.properties as NotionPageProperties

            // 結果はテキストで「種目|名前|学年|記録|順位」の形式で入力
            const resultsText = properties['結果']?.rich_text?.[0]?.plain_text || ''
            const results: ResultItem[] = resultsText.split('\n').filter((line: string) => line.trim()).map((line: string) => {
                const [event, name, grade, record, place] = line.split('|').map((s: string) => s.trim())
                return { event: event || '', name: name || '', grade: grade || '', record: record || '', place: place || '' }
            })

            return {
                id: page.id,
                date: formatDate(properties['日付']?.date?.start || null),
                name: properties['大会名']?.title?.[0]?.plain_text || '',
                venue: properties['会場']?.rich_text?.[0]?.plain_text || '',
                results,
            }
        })
    } catch (error) {
        console.error('Failed to fetch results from Notion:', error)
        return []
    }
}
