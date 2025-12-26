import Link from 'next/link'

export default function Topics() {
    return (
        <section className="py-20 container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-stride-blue mb-16 text-center">
                TOPICS
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Topic 1: Hakuba */}
                <Link href="/news" className="group">
                    <article className="h-full">
                        <div className="overflow-hidden rounded-2xl mb-6 shadow-lg">
                            <div className="w-full h-64 bg-gradient-to-br from-blue-900 to-slate-800 transform group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-xs font-bold text-stride-blue border border-stride-blue px-2 py-1 rounded-full">RACE REPORT</span>
                            <time dateTime="2025-07-27" className="text-sm text-gray-400 font-display">2025.07.27</time>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-stride-blue transition-colors">
                            2025 白馬クロカン遠征
                        </h3>
                        <div className="text-gray-600 leading-relaxed space-y-2">
                            <p className="font-bold">【駅伝の部】中学生男女 優勝・ 小学生第10位</p>
                            <p className="text-sm">
                                個人の部でも多数入賞！<br />
                                ★5・6年女子1.5㎞：松永 こころ 第１位<br />
                                ★中学男子4㎞：岩本 泉來 第2位 他
                            </p>
                        </div>
                    </article>
                </Link>

                {/* Topic 2: Season Start */}
                <Link href="/news" className="group">
                    <article className="h-full">
                        <div className="overflow-hidden rounded-2xl mb-6 shadow-lg">
                            <div className="w-full h-64 bg-gradient-to-br from-cyan-500 to-blue-600 transform group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-xs font-bold text-stride-blue border border-stride-blue px-2 py-1 rounded-full">INFO</span>
                            <time dateTime="2025-04-01" className="text-sm text-gray-400 font-display">2025.04.01</time>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-stride-blue transition-colors">
                            2025年シーズン開幕
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            2025年シーズンも各自の目標をしっかり持って頑張ろう！<br />
                            GOAL SETTING
                        </p>
                    </article>
                </Link>
            </div>
        </section>
    )
}
