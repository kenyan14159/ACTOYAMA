import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '保護者の方へ',
  description: 'A.C.TOYAMA保護者の方へのお知らせ。練習時の持ち物、注意点、子供の成長をサポートするための情報を掲載しています。',
  openGraph: {
    title: '保護者の方へ | A.C.TOYAMA',
    description: 'A.C.TOYAMA保護者の方へのお知らせ。練習時の持ち物、注意点をご案内しています。',
  },
}

export default function ParentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

