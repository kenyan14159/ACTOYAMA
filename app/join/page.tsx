'use client'

import { Mail, MapPin, Users, Calendar, Target, Award, Info, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function JoinPage() {
    return (
        <main className="min-h-screen bg-pure-white pt-32 pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-20 relative">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-stride-blue mb-8 tracking-tighter opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
                        JOIN US
                        <span className="block text-xl md:text-3xl text-soot-black mt-4 font-sans font-bold opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>入会案内</span>
                    </h1>
                    <div className="w-20 h-1 bg-stride-blue mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}></div>

                    {/* Purpose */}
                    <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-soot-black">
                            <Target className="text-stride-blue" strokeWidth={2.5} />
                            <span>目的</span>
                        </h2>
                        <p className="text-gray-700 leading-loose text-lg font-medium">
                            陸上競技に取り組みたいと思っている人を対象に、学校や居住地域の枠を超えた活動を通し、競技の普及や競技力の向上、生涯スポーツとしての陸上競技の普及を目指した活動を心がけています。また、富山県の陸上競技発展の為の一助になるような活動も目指しています。
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="container mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>

                {/* Target Audience */}
                <div className="bg-sky-mist/50 p-8 md:p-10 rounded-3xl border border-sky-mist hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-stride-blue">
                        <Users />
                        <span className="text-soot-black">対象者</span>
                    </h3>
                    <div className="space-y-4">
                        <p className="text-2xl font-bold text-soot-black">小学1年生 ～ 大人</p>
                        <div className="flex items-start gap-2 text-gray-600 bg-white/50 p-4 rounded-xl">
                            <Info size={18} className="mt-0.5 flex-shrink-0 text-stride-blue" />
                            <p className="text-sm font-medium">小中学生は、保護者の送迎が可能な人に限ります。</p>
                        </div>
                    </div>
                </div>

                {/* Practice Time */}
                <div className="bg-sky-mist/50 p-8 md:p-10 rounded-3xl border border-sky-mist hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-stride-blue">
                        <Calendar />
                        <span className="text-soot-black">活動内容・日時</span>
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <span className="text-sm font-bold text-stride-blue bg-white px-3 py-1 rounded-full border border-sky-mist mb-2 inline-block">定期練習会</span>
                            <p className="text-lg font-bold text-soot-black">毎週 木曜日 <span className="ml-2 text-2xl">18:30 ～</span></p>
                        </div>
                        <ul className="space-y-2 text-gray-600 pl-4 py-2 border-l-2 border-stride-blue/20">
                            <li className="text-sm">※ 週末等に臨時練習あり</li>
                            <li className="text-sm">※ 活動中のけがについては、スポーツ安全保険に加入します</li>
                        </ul>
                    </div>
                </div>

                {/* Location */}
                <div className="bg-sky-mist/50 p-8 md:p-10 rounded-3xl border border-sky-mist hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-stride-blue">
                        <MapPin />
                        <span className="text-soot-black">練習場所</span>
                    </h3>
                    <p className="text-xl font-bold text-soot-black leading-relaxed">
                        富山県総合運動公園<br />
                        陸上競技場 メイン競技場 ほか
                    </p>
                </div>

                {/* Staff */}
                <div className="bg-sky-mist/50 p-8 md:p-10 rounded-3xl border border-sky-mist hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-stride-blue">
                        <Award />
                        <span className="text-soot-black">スタッフ</span>
                    </h3>
                    <p className="text-lg font-bold text-soot-black mb-2">専門コーチ陣が在籍</p>
                    <p className="text-gray-600 mb-4">短距離・跳躍・中長距離等</p>
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-sky-mist text-sm font-bold text-stride-blue">
                        <span>有資格指導者 約10名</span>
                    </div>
                </div>

            </section>

            {/* Fees Section */}
            <section className="container mx-auto px-6 mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 tracking-tight text-soot-black">
                    令和７年度 会費
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Fee Cards */}
                    {[
                        { title: "小学 1～3年生", price: "24,000", highlight: false },
                        { title: "小学 4～6年生", price: "36,000", highlight: true },
                        { title: "中学 1・2年生", price: "36,000", highlight: true },
                        { title: "中学 3年生", price: "18,000", highlight: false },
                        { title: "高校生・一般", price: "6,000", highlight: false },
                    ].map((plan, i) => (
                        <div key={i} className={`group relative p-6 rounded-2xl transition-all duration-300 border flex flex-col items-center justify-center text-center min-h-[180px] hover:-translate-y-1 hover:shadow-xl
                    ${plan.highlight ? 'bg-soot-black text-white border-soot-black z-10 scale-105 shadow-lg' : 'bg-white text-soot-black border-gray-100 shadow-sm hover:border-gray-200'}`}>
                            <h4 className={`text-sm font-bold mb-3 ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>{plan.title}</h4>
                            <div className="flex items-baseline gap-1">
                                <span className={`text-3xl font-display font-bold ${plan.highlight ? 'text-white' : 'text-stride-blue'}`}>{plan.price}</span>
                                <span className={`text-xs ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>円 / 年</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500 bg-gray-50 inline-block px-4 py-2 rounded-lg">
                        ＊大会エントリー費・遠征費用等は、別途集金します。
                    </p>
                </div>
            </section>

            {/* Additional Info & Contact */}
            <section className="container mx-auto px-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                <div className="bg-soot-black text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                    <Info className="text-stride-blue" />
                                    その他のお知らせ
                                </h3>
                                <ul className="space-y-6">
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 bg-stride-blue rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-gray-300 leading-relaxed">種目や大会日程に応じ練習日が増える場合があります。</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 bg-stride-blue rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-gray-300 leading-relaxed">年度途中での入退会も可能です。（会費については別途ご連絡します）</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 bg-stride-blue rounded-full mt-2.5 flex-shrink-0"></div>
                                        <p className="text-gray-300 leading-relaxed">中学生は部活動の代わりにはなりませんので、各自のプラスになるようご利用ください。</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <h4 className="font-bold text-lg mb-4 text-stride-blue">一般の選手も募集中</h4>
                                <div className="text-sm text-gray-400 leading-relaxed space-y-2">
                                    <p>短距離・跳躍組、長距離組など幅広く募集しています。</p>
                                    <p>障害保険に加入します。定期練習会（木曜日 18:30～）時は自由に競技場（トレーニング室含む）が利用できます。</p>
                                    <p className="text-white">希望者は陸連登録も可能です。</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:justify-center">
                            <div className="mb-10 lg:text-right">
                                <p className="text-sm text-gray-500 mb-2 font-medium tracking-wide">CLUB REPRESENTATIVE</p>
                                <p className="text-3xl font-bold">宮前 仁<span className="text-sm font-normal ml-3 text-gray-500">（みやまえ ひとし）</span></p>
                            </div>

                            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                <p className="text-xl font-bold mb-6 text-center">入会希望・お問い合わせ</p>
                                <p className="text-sm text-gray-400 text-center mb-8 leading-relaxed">
                                    詳しくは下記よりお問い合わせください。<br />
                                    入会希望の旨を記載の上、ご連絡いただけますとスムーズです。
                                </p>
                                <Link
                                    href="/contact"
                                    className="group bg-stride-blue hover:scale-[1.02] active:scale-[0.98] text-white font-bold py-5 px-8 rounded-full w-full flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-stride-blue/25"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>お問い合わせフォームへ</span>
                                    <ChevronRight className="w-4 h-4 ml-1 opacity-50 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-stride-blue/20 to-purple-500/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                </div>
            </section>

            {/* Simple Animation Styles */}
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
