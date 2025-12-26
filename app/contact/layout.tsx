import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'A.C.TOYAMAへのお問い合わせはこちらから。入会希望やご質問等、お気軽にお問い合わせください。',
  openGraph: {
    title: 'お問い合わせ | A.C.TOYAMA',
    description: 'A.C.TOYAMAへのお問い合わせはこちらから。',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

