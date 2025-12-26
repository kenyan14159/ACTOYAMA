import { Newspaper, Calendar } from 'lucide-react'
import { getNews, NewsItem } from '@/lib/notion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ニュース',
  description: 'A.C.TOYAMAの最新ニュース・お知らせを掲載しています。練習会、大会情報、クラブ活動の最新情報をお届けします。',
  openGraph: {
    title: 'ニュース | A.C.TOYAMA',
    description: 'A.C.TOYAMAの最新ニュース・お知らせを掲載しています。',
  },
}

// テスト用のフォールバックデータ（Notion未設定時に使用）
const FALLBACK_NEWS: NewsItem[] = [
    {
        id: '1',
        date: '2024.12.22',
        category: 'お知らせ',
        title: 'ウェブサイトをリニューアルしました',
        excerpt: 'A.C.TOYAMAの公式ウェブサイトをリニューアルしました。より見やすく、情報を発信してまいります。',
    },
    {
        id: '2',
        date: '2024.12.15',
        category: '大会情報',
        title: '令和7年度 富山県小学生陸上大会の参加者募集',
        excerpt: '来年度の富山県小学生陸上大会の参加者を募集しています。参加希望の方は練習時にコーチまでお声がけください。',
    },
    {
        id: '3',
        date: '2024.12.01',
        category: '練習',
        title: '冬季練習スケジュールについて',
        excerpt: '12月〜2月の冬季練習スケジュールを更新しました。寒い時期ですが、体調管理をしっかりして練習に参加しましょう。',
    },
    {
        id: '4',
        date: '2024.11.20',
        category: '結果報告',
        title: '富山県秋季小学生陸上大会で好成績！',
        excerpt: '11月に開催された富山県秋季小学生陸上大会にて、クラブ員が優秀な成績を収めました。詳細は大会結果ページをご覧ください。',
    },
]

export const revalidate = 3600 // 1時間ごとに再検証

export default async function NewsPage() {
    // Notionからデータ取得を試みる、失敗時はフォールバック
    let newsItems = await getNews()
    if (newsItems.length === 0) {
        newsItems = FALLBACK_NEWS
    }

    return (
        <main className="min-h-screen bg-pure-white pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header */}
                <section className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-stride-blue mb-4 tracking-tighter">
                        NEWS
                        <span className="block text-xl md:text-2xl text-soot-black mt-4 font-sans font-bold">お知らせ</span>
                    </h1>
                    <div className="w-20 h-1 bg-stride-blue mt-6"></div>
                </section>

                {/* News List */}
                <section className="space-y-6">
                    {newsItems.length > 0 ? (
                        newsItems.map((news) => (
                            <article
                                key={news.id}
                                className="group bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-stride-blue/20 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                                    <div className="flex items-center gap-3 text-sm text-gray-500 md:w-40 flex-shrink-0">
                                        <Calendar size={16} />
                                        <time dateTime={news.date.replace(/\./g, '-')}>{news.date}</time>
                                    </div>
                                    <div className="flex-1">
                                        <span className="inline-block bg-stride-blue/10 text-stride-blue text-xs font-bold px-3 py-1 rounded-full mb-3">
                                            {news.category}
                                        </span>
                                        <h2 className="text-xl font-bold text-soot-black mb-3 group-hover:text-stride-blue transition-colors">
                                            {news.title}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {news.excerpt}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="text-center py-20 text-gray-400">
                            <Newspaper size={48} className="mx-auto mb-4 opacity-50" />
                            <p>現在、お知らせはありません</p>
                        </div>
                    )}
                </section>

            </div>
        </main>
    )
}
