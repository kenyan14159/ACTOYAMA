import type { Metadata } from "next";
import { Sora, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ScrollManager from "@/components/ui/ScrollManager";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { env } from "@/lib/env";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'arial'],
});

const siteUrl = env.NEXT_PUBLIC_SITE_URL;

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
  metadataBase: new URL(siteUrl),
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    ...(env.NEXT_PUBLIC_CONTACT_EMAIL && {
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: env.NEXT_PUBLIC_CONTACT_EMAIL,
      },
    }),
  };

  return (
    <html lang="ja" className="lenis">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.notion.com" />
        <link rel="prefetch" href="/news" />
        <link rel="prefetch" href="/results" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sora.variable} ${notoSansJP.variable} antialiased bg-pure-white text-soot-black font-sans overflow-x-hidden selection:bg-stride-blue selection:text-pure-white`}
      >
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-stride-blue focus:text-white focus:rounded focus:font-bold"
        >
          メインコンテンツへスキップ
        </a>
        <ScrollManager>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ScrollManager>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
