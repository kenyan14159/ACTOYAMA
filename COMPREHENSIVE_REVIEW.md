# 🔍 A.C.TOYAMA ウェブサイト 包括的レビューレポート

**レビュー日**: 2025年1月  
**対象**: Next.js 16.0.5 + React 19.2.0 + TypeScript + Tailwind CSS 4  
**レビュアー**: シニア・リードエンジニア

---

## 🔍 総合評価スコア

**[78 / 100]** - モダンな技術スタックと洗練されたUIデザインが評価できるが、パフォーマンス最適化、クライアントサイドの効率化、アクセシビリティの改善が急務。特に画像最適化の欠如とクライアントコンポーネントの過剰使用が顕著。

---

## 🛠️ 重点修正項目 (High Priority)

### 1. **画像最適化の完全欠如**

**問題点**: 
- `next/image`コンポーネントが一切使用されていない
- 現在は画像がないが、将来的に画像を追加する際、LCP（Largest Contentful Paint）が悪化する可能性が高い
- `next.config.ts`には画像設定があるが、実際に使用されていない

**理由**: 
- Next.jsの画像最適化機能を活用しないと、モバイルユーザーの離脱率が上昇
- Core Web Vitalsのスコア低下により、SEO順位に悪影響
- 帯域幅の無駄遣い（特にモバイル環境）
- WebP/AVIF形式への自動変換が行われない

**改善案**:
```typescript
// 画像を使用する際は必ずnext/imageを使用
import Image from 'next/image'

// 例: ヒーロー画像やニュース画像
<Image
  src="/hero-image.jpg"
  alt="A.C.TOYAMA クラブ活動"
  width={1920}
  height={1080}
  priority // ファーストビュー画像にはpriorityを設定
  placeholder="blur" // ぼかしプレースホルダー
  sizes="100vw"
/>
```

**優先度**: 🔴 **High** - 画像追加前に必ず実装

---

### 2. **クライアントコンポーネントの過剰使用**

**問題点**: 
- `app/page.tsx`がサーバーコンポーネントだが、`VisualHero`がクライアントコンポーネント
- `app/records/page.tsx`が完全にクライアントコンポーネントで、データ取得もクライアントサイド
- 不要なJavaScriptバンドルサイズの増加
- 初期レンダリングが遅延

**理由**: 
- サーバーサイドレンダリングの利点を活かせていない
- 初期ロード時間の増加
- SEOへの悪影響（特にrecordsページ）
- データ取得の非効率性

**改善案**:
```typescript
// app/records/page.tsx - サーバーコンポーネントに変更
import { readFile } from 'fs/promises'
import { join } from 'path'

export default async function RecordsPage() {
    // サーバーサイドでデータを読み込む
    const filePath = join(process.cwd(), 'public', 'data', 'records.json')
    const fileContents = await readFile(filePath, 'utf8')
    const data: RecordCategory[] = JSON.parse(fileContents)

    return (
        <main className="w-full min-h-screen bg-pure-white pb-20 pt-32">
            {/* ... */}
        </main>
    )
}
```

**優先度**: 🔴 **High** - パフォーマンスに直接影響

---

### 3. **ローディング状態とエラーハンドリングの不足**

**問題点**: 
- `app/records/page.tsx`でデータ取得時のローディング状態がない
- エラー時のユーザーフィードバックが不十分（console.errorのみ）
- Notion API失敗時のフォールバックはあるが、ローディング中の表示がない

**理由**: 
- ユーザー体験の悪化
- エラー発生時の対応が困難
- アクセシビリティの問題（スクリーンリーダーユーザー）

**改善案**:
```typescript
// app/records/page.tsx
'use client'
import { useState, useEffect } from 'react'
import { Trophy, Loader2, AlertCircle } from 'lucide-react'

export default function RecordsPage() {
    const [data, setData] = useState<RecordCategory[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetch('/data/records.json')
            .then(res => {
                if (!res.ok) throw new Error('データの取得に失敗しました')
                return res.json()
            })
            .then(setData)
            .catch(err => {
                setError(err.message)
                console.error('Failed to load records:', err)
            })
            .finally(() => setIsLoading(false))
    }, [])

    if (isLoading) {
        return (
            <main className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-stride-blue mx-auto mb-4" />
                    <p className="text-gray-600">データを読み込んでいます...</p>
                </div>
            </main>
        )
    }

    if (error) {
        return (
            <main className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center max-w-md">
                    <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">エラーが発生しました</h2>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-stride-blue text-white px-6 py-2 rounded-full"
                    >
                        再読み込み
                    </button>
                </div>
            </main>
        )
    }

    // ... 既存のレンダリングロジック
}
```

**優先度**: 🔴 **High** - UXに直接影響

---

### 4. **アクセシビリティ: キーボードナビゲーションとフォーカス管理**

**問題点**: 
- モバイルメニューが開いている時のフォーカストラップがない
- モバイルメニュー内のキーボードナビゲーションが不完全
- スキップリンクは実装されているが、フォーカス管理が不十分

**理由**: 
- WCAG 2.1 Level A準拠のため必須
- キーボードユーザーのアクセシビリティ
- スクリーンリーダーユーザーの体験

**改善案**:
```typescript
// components/layout/Header.tsx に追加
useEffect(() => {
    if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'
        // フォーカストラップの実装
        const firstFocusable = document.querySelector('#mobile-menu a, #mobile-menu button') as HTMLElement
        const focusableElements = document.querySelectorAll('#mobile-menu a, #mobile-menu button')
        const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return

            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault()
                    lastFocusable?.focus()
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault()
                    firstFocusable?.focus()
                }
            }
        }

        document.addEventListener('keydown', handleTabKey)
        firstFocusable?.focus()

        return () => {
            document.removeEventListener('keydown', handleTabKey)
        }
    } else {
        document.body.style.overflow = ''
    }
}, [isMobileMenuOpen])
```

**優先度**: 🔴 **High** - アクセシビリティ違反

---

### 5. **パフォーマンス: 不要な再レンダリング**

**問題点**: 
- `VisualHero`コンポーネントで`SLIDES`配列が毎回再作成される
- `app/page.tsx`の`NEWS_DATA`がコンポーネント内で定義されている
- メモ化が使用されていない

**理由**: 
- 不要な再レンダリングによるパフォーマンス低下
- メモリ使用量の増加

**改善案**:
```typescript
// components/hero/VisualHero.tsx
const SLIDES = [
    "bg-gradient-to-br from-blue-900 via-stride-blue to-black",
    "bg-gradient-to-tl from-cyan-500 via-blue-600 to-blue-900",
    "bg-gradient-to-r from-blue-800 to-indigo-900"
] as const

export default function VisualHero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % SLIDES.length)
        }, 5000)
        return () => clearInterval(timer)
    }, []) // SLIDESを依存配列から除外

    // ...
}
```

**優先度**: 🟡 **Medium** - パフォーマンス改善

---

### 6. **セキュリティ: CSP設定の改善**

**問題点**: 
- `next.config.ts`のCSPで`'unsafe-eval'`と`'unsafe-inline'`が許可されている
- GSAPやLenisが原因の可能性があるが、より厳格な設定が可能

**理由**: 
- XSS攻撃のリスク増加
- セキュリティベストプラクティス違反

**改善案**:
```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://fonts.googleapis.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https:;
      font-src 'self' data: https://fonts.gstatic.com;
      connect-src 'self' https://api.notion.com;
      frame-ancestors 'none';
    `.replace(/\s{2,}/g, ' ').trim()
  },
  // ... 既存のヘッダー
]
```

**優先度**: 🟡 **Medium** - セキュリティ強化

---

## 📈 中長期的な改善提案 (Medium/Low Priority)

### Medium Priority

#### 7. **パフォーマンス: コード分割と動的インポート**

**問題点**: 
- `MagneticCursor`コンポーネントが使用されていない（未使用コード）
- 重いコンポーネントが静的にインポートされている

**改善案**:
```typescript
// 使用されていないコンポーネントを削除、または条件付きで読み込む
import dynamic from 'next/dynamic'

const VisualHero = dynamic(() => import('@/components/hero/VisualHero'), {
  loading: () => <div className="h-screen bg-soot-black animate-pulse" />,
  ssr: false, // クライアントサイドのみでレンダリング
})
```

---

#### 8. **型安全性の向上**

**問題点**: 
- `lib/notion.ts`で型アサーション（`as`）を使用している
- より厳密な型定義が可能

**改善案**:
```typescript
// lib/notion.ts - より厳密な型定義
import { Client } from '@notionhq/client'
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

// 型ガード関数の追加
function isPageObjectResponse(page: any): page is PageObjectResponse {
  return page && page.object === 'page' && 'properties' in page
}

// 使用箇所で型ガードを使用
const typedPages = response.results.filter(isPageObjectResponse)
```

---

#### 9. **パフォーマンス: ISR（Incremental Static Regeneration）の最適化**

**問題点**: 
- `revalidate: 60`が短すぎる可能性
- Notion APIのレート制限を考慮していない

**改善案**:
```typescript
// app/news/page.tsx
export const revalidate = 3600 // 1時間ごとに再検証

// または、On-Demand Revalidationを使用
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')
  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  try {
    revalidatePath('/news')
    revalidatePath('/results')
    return Response.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return Response.json({ revalidated: false, error: String(err) }, { status: 500 })
  }
}
```

---

#### 10. **エラーハンドリング: エラーバウンダリーの実装**

**問題点**: 
- コンポーネントレベルのエラーハンドリングが不十分
- エラーの詳細情報がユーザーに表示されていない

**改善案**:
```typescript
// app/error.tsx は既に実装されているが、より詳細な情報を追加
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // エラートラッキングサービスに送信（例: Sentry）
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-pure-white px-6">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-display font-bold text-stride-blue mb-4">
          エラーが発生しました
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          申し訳ございませんが、予期しないエラーが発生しました。
          しばらく時間をおいてから再度お試しください。
        </p>
        {process.env.NODE_ENV === 'development' && (
          <pre className="text-xs text-left bg-gray-100 p-4 rounded mb-4 overflow-auto">
            {error.message}
          </pre>
        )}
        {/* ... 既存のボタン */}
      </div>
    </div>
  )
}
```

---

### Low Priority

#### 11. **PWA対応**

**改善案**:
- `next-pwa`を使用してPWA化
- マニフェストファイルの作成
- サービスワーカーの実装
- オフライン対応

---

#### 12. **アナリティクス統合**

**改善案**:
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

---

#### 13. **パフォーマンスモニタリング: Web Vitalsの測定**

**改善案**:
```typescript
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

// または、カスタム実装
// lib/web-vitals.ts
export function reportWebVitals(metric: any) {
  // Google Analytics 4に送信
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
    })
  }
}
```

---

#### 14. **多言語対応の準備**

**改善案**:
- `next-intl`の導入を検討
- 将来的な英語対応への準備
- 言語切り替えUIの設計

---

## 💡 プロのエンジニアとしてのプラスアルファ

### 1. **パフォーマンス: リソースヒントの最適化**

**現在の実装**: 基本的な`preconnect`と`dns-prefetch`は実装済み

**追加提案**:
```typescript
// app/layout.tsx
<head>
  {/* 既存のリソースヒント */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="dns-prefetch" href="https://api.notion.com" />
  
  {/* 追加: クリティカルリソースのプリロード */}
  <link rel="preload" href="/fonts/noto-sans-jp.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
  
  {/* 追加: 重要なページのプリフェッチ */}
  <link rel="prefetch" href="/news" />
  <link rel="prefetch" href="/results" />
</head>
```

---

### 2. **パフォーマンス: フォント最適化の高度な設定**

**現在の実装**: 基本的な設定は実装済み

**追加提案**:
```typescript
// app/layout.tsx
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"], // 日本語サブセットを追加する場合は "latin" を削除
  display: "swap",
  weight: ["400", "700"],
  preload: true,
  adjustFontFallback: true, // フォールバックフォントの自動調整
  fallback: ['system-ui', 'arial'],
  // 追加: フォントのサブセット化
  // 使用する文字のみを読み込むことでパフォーマンス向上
})
```

---

### 3. **SEO: 構造化データの拡張**

**現在の実装**: 基本的な`SportsOrganization`スキーマは実装済み

**追加提案**:
```typescript
// app/layout.tsx に追加
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  name: 'A.C.TOYAMA',
  description: '富山県のジュニア陸上競技クラブ',
  url: siteUrl,
  sport: 'Track and Field',
  address: {
    '@type': 'PostalAddress',
    addressLocality: '富山県',
    addressCountry: 'JP',
  },
  // 追加: より詳細な情報
  foundingDate: '2020', // 実際の設立年を設定
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  },
  sameAs: [
    'https://www.instagram.com/actoyama', // SNSアカウントがあれば追加
  ],
}
```

---

### 4. **パフォーマンス: バンドルサイズの最適化**

**改善案**:
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  // ... 既存の設定
  
  // 追加: バンドルアナライザー
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // GSAPを別チャンクに
          gsap: {
            name: 'gsap',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]gsap[\\/]/,
            priority: 20,
          },
          // Lenisを別チャンクに
          lenis: {
            name: 'lenis',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]lenis[\\/]/,
            priority: 20,
          },
        },
      }
    }
    return config
  },
}
```

---

### 5. **セキュリティ: 環境変数の検証**

**改善案**:
```typescript
// lib/env.ts
import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().optional(),
  NOTION_API_KEY: z.string().optional(),
  NOTION_NEWS_DATABASE_ID: z.string().optional(),
  NOTION_RESULTS_DATABASE_ID: z.string().optional(),
})

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  NOTION_API_KEY: process.env.NOTION_API_KEY,
  NOTION_NEWS_DATABASE_ID: process.env.NOTION_NEWS_DATABASE_ID,
  NOTION_RESULTS_DATABASE_ID: process.env.NOTION_RESULTS_DATABASE_ID,
})
```

---

### 6. **UX: スムーズなページ遷移**

**改善案**:
```typescript
// app/layout.tsx に追加
'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // ページ遷移時のスクロール位置をリセット
    window.scrollTo(0, 0)
  }, [pathname])

  // ...
}
```

---

## 📊 優先度別アクションプラン

### 🔴 即座に対応（1週間以内）
1. ✅ モバイルメニューの実装（既に実装済み）
2. ✅ SEOメタデータの追加（既に実装済み）
3. ✅ フォント設定（既に実装済み）
4. ✅ スキップリンク（既に実装済み）
5. 🔴 **ローディング状態とエラーハンドリングの追加**
6. 🔴 **recordsページをサーバーコンポーネントに変更**
7. 🔴 **アクセシビリティ: フォーカストラップの実装**

### 🟡 短期対応（1ヶ月以内）
1. 🟡 **画像最適化設定の準備（next/imageの使用準備）**
2. 🟡 **不要な再レンダリングの最適化**
3. 🟡 **CSP設定の改善**
4. 🟡 **型安全性の向上**
5. 🟡 **未使用コードの削除（MagneticCursor）**

### 🟢 中長期対応（3ヶ月以内）
1. 🟢 **PWA対応**
2. 🟢 **アナリティクス統合**
3. 🟢 **パフォーマンスモニタリング**
4. 🟢 **ISRの最適化**
5. 🟢 **バンドルサイズの最適化**

---

## 📝 まとめ

現在のコードベースは、**モダンな技術スタック**と**洗練されたUIデザイン**を持っており、基本的なSEO対策やアクセシビリティ機能も実装されています。

しかし、以下の3つの領域で改善の余地があります：

1. **パフォーマンス最適化**: クライアントコンポーネントの過剰使用、ローディング状態の不足
2. **ユーザー体験**: エラーハンドリング、ローディング状態の視覚的フィードバック
3. **アクセシビリティ**: キーボードナビゲーション、フォーカス管理の改善

特に、**recordsページのサーバーコンポーネント化**と**ローディング/エラー状態の実装**は、ユーザー体験とパフォーマンスに直接影響するため、最優先で対応すべき項目です。

上記の改善を実施することで、**総合評価スコアを78点から90点以上**に引き上げることが可能です。

---

## 🎯 技術的根拠とベストプラクティス

### Next.js 16 App Router のベストプラクティス
- デフォルトでサーバーコンポーネントを使用
- クライアントコンポーネントは必要最小限に
- データフェッチングはサーバーサイドで実行

### React 19 の新機能活用
- サーバーコンポーネントの積極的な使用
- ストリーミングとSuspenseの活用
- エラーバウンダリーの適切な配置

### Core Web Vitals の最適化
- LCP: 画像最適化、クリティカルリソースのプリロード
- FID: JavaScriptバンドルサイズの削減
- CLS: フォント最適化、画像サイズの指定

### WCAG 2.1 Level AA 準拠
- キーボードナビゲーション
- フォーカス管理
- スクリーンリーダー対応
- コントラスト比の確保

---

**レビュー完了日**: 2025年1月  
**次回レビュー推奨日**: 改善実装後1ヶ月

