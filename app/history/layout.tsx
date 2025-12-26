import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'クラブのあしあと',
  description: 'A.C.TOYAMAの歴史と主な戦績を掲載しています。クラブの沿革、全国大会出場実績、県新記録などの歴史をご覧いただけます。',
  openGraph: {
    title: 'クラブのあしあと | A.C.TOYAMA',
    description: 'A.C.TOYAMAの歴史と主な戦績を掲載しています。',
  },
}

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

