'use client'

import { Mail } from 'lucide-react'
import { env } from '@/lib/env'

export default function ContactPage() {
    const email = env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@actoyama.jp"

    return (
        <main className="min-h-screen bg-pure-white pt-32 pb-20">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-stride-blue mb-12 tracking-tighter opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
                    CONTACT
                    <span className="block text-xl text-soot-black mt-2 font-sans font-normal opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>お問い合わせ</span>
                </h1>

                <div className="max-w-2xl mx-auto bg-sky-mist/30 p-10 rounded-3xl border border-sky-mist opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    <div className="text-center">
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-stride-blue">
                            <Mail size={32} />
                        </div>
                        <h2 className="text-xl font-bold mb-4">メールでのお問い合わせ</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            入会希望やご質問等は、下記メールアドレスまでお気軽にお問い合わせください。<br />
                            クラブ代表の宮前が対応いたします。
                        </p>

                        <a
                            href={`mailto:${email}`}
                            className="inline-flex items-center gap-3 bg-stride-blue text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-stride-blue/20 break-all"
                        >
                            <Mail size={20} />
                            {email}
                        </a>

                        <p className="mt-6 text-sm text-gray-400">
                            ※ メールソフトが起動します
                        </p>
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
        </main>
    )
}
