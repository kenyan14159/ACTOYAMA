# 🔍 A.C.TOYAMA ウェブサイト 包括的レビューレポート

**レビュー日**: 2025年1月  
**対象**: Next.js 16.0.5 + React 19.2.0 + TypeScript + Tailwind CSS 4

---

## 🔍 総合評価スコア

**[72 / 100]** - モダンな技術スタックと洗練されたUIデザインが評価できるが、パフォーマンス最適化、SEO、アクセシビリティの改善が急務。特に画像最適化とメタデータの不足が顕著。

---

## 🛠️ 重点修正項目 (High Priority)

### 1. **画像最適化の欠如**

**問題点**: 
- `next/image`コンポーネントが一切使用されていない
- `next.config.ts`が空で、画像最適化設定がない
- 将来的に画像を追加する際、LCP（Largest Contentful Paint）が悪化する可能性が高い

**理由**: 
- Next.jsの画像最適化機能を活用しないと、モバイルユーザーの離脱率が上昇
- Core Web Vitalsのスコア低下により、SEO順位に悪影響
- 帯域幅の無駄遣い（特にモバイル環境）

**改善案**:
```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // パフォーマンス最適化
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
```

---

### 2. **SEOメタデータの不足**

**問題点**: 
- ルートレイアウトのメタデータが最小限（title/descriptionのみ）
- Open Graph（OG）タグ、Twitterカードが未設定
- 構造化データ（JSON-LD）が存在しない
- 各ページのメタデータが不統一

**理由**: 
- SNSシェア時のプレビューが適切に表示されない
- 検索エンジンでのリッチスニペット表示ができない
- ソーシャルメディアでの拡散力が低下

**改善案**:
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: "A.C.TOYAMA - PURE MOTION",
    template: "%s | A.C.TOYAMA"
  },
  description: "富山県のジュニア陸上競技クラブ「A.C.TOYAMA」の公式サイト。小学生から一般まで、専門コーチ陣による指導で競技力向上を目指します。",
  keywords: ["陸上競技", "富山", "ジュニア", "クラブ", "A.C.TOYAMA", "トラック&フィールド"],
  authors: [{ name: "A.C.TOYAMA" }],
  creator: "A.C.TOYAMA",
  publisher: "A.C.TOYAMA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://actoyama.jp'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: '/',
    siteName: 'A.C.TOYAMA',
    title: 'A.C.TOYAMA - PURE MOTION',
    description: '富山県のジュニア陸上競技クラブ「A.C.TOYAMA」の公式サイト',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'A.C.TOYAMA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A.C.TOYAMA - PURE MOTION',
    description: '富山県のジュニア陸上競技クラブ「A.C.TOYAMA」の公式サイト',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

**構造化データの追加**:
```typescript
// app/layout.tsx に追加
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    name: 'A.C.TOYAMA',
    description: '富山県のジュニア陸上競技クラブ',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    sport: 'Track and Field',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '富山県',
      addressCountry: 'JP',
    },
  };

  return (
    <html lang="ja" className="lenis">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* ... */}
    </html>
  );
}
```

---

### 3. **モバイルメニューの未実装**

**問題点**: 
- `Header.tsx`にモバイルメニューボタンはあるが、実際のメニュー機能が実装されていない
- モバイルユーザーがナビゲーションできない状態

**理由**: 
- モバイルUXの致命的な欠陥
- アクセシビリティ違反（WCAG 2.1 Level A）

**改善案**:
```typescript
// components/layout/Header.tsx
'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // メニューが開いている時はスクロールを無効化
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    const useSolidStyle = !isHomePage || isScrolled

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${useSolidStyle ? 'bg-pure-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Brand */}
                <Link
                    href="/"
                    className={`font-display font-bold text-2xl tracking-tighter z-50 transition-colors duration-300 ${useSolidStyle ? 'text-stride-blue' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    A.C.TOYAMA
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6" aria-label="メインナビゲーション">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`text-sm font-bold transition-colors relative group duration-300 ${useSolidStyle ? 'text-soot-black hover:text-stride-blue' : 'text-white/90 hover:text-white'}`}
                        >
                            {item.label}
                            <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${useSolidStyle ? 'bg-stride-blue' : 'bg-white'}`} />
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Trigger */}
                <button 
                    className={`lg:hidden p-2 transition-colors duration-300 ${useSolidStyle ? 'text-soot-black' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`lg:hidden fixed inset-0 top-[72px] bg-pure-white z-40 transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                aria-hidden={!isMobileMenuOpen}
            >
                <nav className="flex flex-col p-6" aria-label="モバイルナビゲーション">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="py-4 px-4 text-lg font-bold text-soot-black border-b border-gray-100 hover:text-stride-blue transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
```

---

### 4. **フォント最適化の不備**

**問題点**: 
- `Noto_Sans_JP`の`subsets`が`["latin"]`のみで、日本語フォントが正しく読み込まれない可能性
- フォントのpreload設定がない

**理由**: 
- 日本語テキストが正しく表示されない可能性
- FOUT（Flash of Unstyled Text）が発生し、UXが悪化

**改善案**:
```typescript
// app/layout.tsx
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin", "latin-ext"], // 日本語サブセットを追加
  display: "swap",
  weight: ["400", "700"],
  preload: true, // プリロードを有効化
});
```

---

### 5. **セキュリティ: メールアドレスのハードコード**

**問題点**: 
- `app/contact/page.tsx`にメールアドレスが直接記述されている
- スパムボットによる収集リスク

**理由**: 
- セキュリティベストプラクティス違反
- メールアドレス変更時の保守性が低い

**改善案**:
```typescript
// app/contact/page.tsx
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@actoyama.jp"

// または、画像化やJavaScriptによる動的生成を検討
// または、Contact Form APIを使用
```

---

### 6. **アクセシビリティ: ARIA属性とキーボードナビゲーション**

**問題点**: 
- `alt`属性が存在しない（画像がないため現時点では問題なし）
- インタラクティブ要素に`aria-label`が不足
- フォーカス状態のスタイリングが不十分
- スキップリンクがない

**理由**: 
- WCAG 2.1 Level A準拠のため必須
- スクリーンリーダーユーザーのアクセシビリティ

**改善案**:
```typescript
// app/layout.tsx に追加
<a 
  href="#main-content" 
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-stride-blue focus:text-white focus:rounded"
>
  メインコンテンツへスキップ
</a>

// globals.css に追加
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

// フォーカススタイルの強化
*:focus-visible {
  outline: 2px solid var(--color-stride-blue);
  outline-offset: 2px;
}
```

---

## 📈 中長期的な改善提案 (Medium/Low Priority)

### Medium Priority

#### 7. **パフォーマンス: Lenisスクロールの条件付き読み込み**

**問題点**: 
- モバイルデバイスでもLenisスクロールが常に有効
- 低性能デバイスでのパフォーマンス低下

**改善案**:
```typescript
// components/ui/ScrollManager.tsx
'use client'
import { useEffect, useState } from 'react'
import Lenis from 'lenis'

export default function ScrollManager({ children }: { children: React.ReactNode }) {
  const [shouldUseLenis, setShouldUseLenis] = useState(false)

  useEffect(() => {
    // モバイルデバイスや低性能デバイスでは無効化
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isLowEndDevice = navigator.hardwareConcurrency < 4
    
    if (!isMobile && !isLowEndDevice) {
      setShouldUseLenis(true)
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => {
        lenis.destroy()
      }
    }
  }, [])

  return <>{children}</>
}
```

---

#### 8. **エラーハンドリングとローディング状態**

**問題点**: 
- Notion APIからのデータ取得時のエラーハンドリングが不十分
- ローディング状態の表示がない

**改善案**:
```typescript
// app/news/page.tsx
import { Suspense } from 'react'
import { getNews } from '@/lib/notion'

function NewsList() {
  const newsItems = await getNews()
  // ...
}

export default function NewsPage() {
  return (
    <main>
      <Suspense fallback={<NewsLoadingSkeleton />}>
        <NewsList />
      </Suspense>
    </main>
  )
}
```

---

#### 9. **型安全性の向上**

**問題点**: 
- `lib/notion.ts`で`any`型を使用
- 型定義が不十分

**改善案**:
```typescript
// lib/notion.ts
import { Client } from '@notionhq/client'
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

// 型定義を追加
interface NotionPageProperties {
  '日付'?: { date?: { start: string | null } }
  'カテゴリ'?: { select?: { name: string | null } }
  'タイトル'?: { title?: Array<{ plain_text: string }> }
  '概要'?: { rich_text?: Array<{ plain_text: string }> }
}

interface NotionPage {
  id: string
  properties: NotionPageProperties
}

// 使用箇所で型アサーション
const response = await notion.databases.query({
  database_id: NEWS_DATABASE_ID,
  sorts: [{ property: '日付', direction: 'descending' }],
}) as QueryDatabaseResponse

return response.results.map((page: NotionPage) => {
  // ...
})
```

---

#### 10. **パフォーマンス: コード分割と動的インポート**

**問題点**: 
- すべてのコンポーネントが静的にインポートされている
- 初期バンドルサイズが大きくなる可能性

**改善案**:
```typescript
// 重いコンポーネントは動的インポート
import dynamic from 'next/dynamic'

const VisualHero = dynamic(() => import('@/components/hero/VisualHero'), {
  loading: () => <div className="h-screen bg-soot-black" />,
  ssr: false, // クライアントサイドのみでレンダリング
})
```

---

### Low Priority

#### 11. **PWA対応**

**改善案**:
- `next-pwa`を使用してPWA化
- オフライン対応とプッシュ通知機能の追加

---

#### 12. **アナリティクス統合**

**改善案**:
- Google Analytics 4またはPlausible Analyticsの統合
- ユーザー行動の追跡と分析

---

#### 13. **多言語対応の準備**

**改善案**:
- `next-intl`の導入を検討
- 将来的な英語対応への準備

---

#### 14. **パフォーマンスモニタリング**

**改善案**:
- Vercel AnalyticsまたはWeb Vitalsの統合
- Core Web Vitalsの継続的な監視

---

## 💡 プロのエンジニアとしてのプラスアルファ

### 1. **ISR（Incremental Static Regeneration）の最適化**

現在`revalidate: 60`が設定されているが、Notion APIのレート制限を考慮し、より効率的な戦略を提案：

```typescript
// app/news/page.tsx
export const revalidate = 3600 // 1時間ごとに再検証

// または、On-Demand Revalidationを使用
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  const secret = request.headers.get('x-revalidate-secret')
  if (secret !== process.env.REVALIDATE_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  revalidatePath('/news')
  return Response.json({ revalidated: true })
}
```

---

### 2. **コンテンツセキュリティポリシー（CSP）の実装**

```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' data:;
      connect-src 'self' https://api.notion.com;
    `.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
```

---

### 3. **パフォーマンス: リソースヒントの追加**

```typescript
// app/layout.tsx
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="dns-prefetch" href="https://api.notion.com" />
</head>
```

---

### 4. **エラーバウンダリーの実装**

```typescript
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">エラーが発生しました</h2>
        <button
          onClick={reset}
          className="bg-stride-blue text-white px-6 py-3 rounded-full"
        >
          再試行
        </button>
      </div>
    </div>
  )
}
```

---

### 5. **パフォーマンス: フォント最適化の高度な設定**

```typescript
// app/layout.tsx
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  preload: true,
  adjustFontFallback: true, // フォールバックフォントの自動調整
  fallback: ['system-ui', 'arial'], // フォールバック指定
})
```

---

## 📊 優先度別アクションプラン

### 🔴 即座に対応（1週間以内）
1. モバイルメニューの実装
2. SEOメタデータの追加（OGタグ、Twitterカード）
3. フォントサブセットの修正
4. メールアドレスの環境変数化

### 🟡 短期対応（1ヶ月以内）
1. 画像最適化設定の追加
2. アクセシビリティ改善（ARIA属性、スキップリンク）
3. エラーハンドリングの強化
4. 型安全性の向上

### 🟢 中長期対応（3ヶ月以内）
1. PWA対応
2. アナリティクス統合
3. パフォーマンスモニタリング
4. セキュリティヘッダーの実装

---

## 📝 まとめ

現在のコードベースは、モダンな技術スタックと洗練されたUIデザインを持っていますが、**パフォーマンス最適化**、**SEO対策**、**アクセシビリティ**の3つの領域で大幅な改善の余地があります。

特に、**モバイルメニューの未実装**と**SEOメタデータの不足**は、ユーザー体験と検索エンジンでの可視性に直接影響するため、最優先で対応すべき項目です。

上記の改善を実施することで、**総合評価スコアを72点から85点以上**に引き上げることが可能です。

