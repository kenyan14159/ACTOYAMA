import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'クラブ 歴代記録集',
  description: 'A.C.TOYAMAクラブ員の歴代記録を掲載しています。各種目の最高記録、県記録、全国大会での記録をご覧いただけます。',
  openGraph: {
    title: 'クラブ 歴代記録集 | A.C.TOYAMA',
    description: 'A.C.TOYAMAクラブ員の歴代記録を掲載しています。',
  },
}

export default function RecordsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

