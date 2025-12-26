import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '入会案内',
  description: 'A.C.TOYAMAへの入会をご希望の方へ。対象者、活動内容、会費、お問い合わせ方法をご案内しています。小学生から一般まで幅広く募集しています。',
  openGraph: {
    title: '入会案内 | A.C.TOYAMA',
    description: 'A.C.TOYAMAへの入会をご希望の方へ。対象者、活動内容、会費をご案内しています。',
  },
}

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

