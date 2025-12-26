'use client'

import { Heart, AlertCircle, Shirt, GlassWater, Apple, BookOpen, Quote } from 'lucide-react'

export default function ParentsPage() {
    return (
        <main className="min-h-screen bg-pure-white pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header */}
                <section className="mb-20">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-stride-blue mb-8 tracking-tighter opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
                        FOR PARENTS
                        <span className="block text-xl md:text-2xl text-soot-black mt-4 font-sans font-bold opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>保護者の方へ</span>
                    </h1>
                    <div className="w-20 h-1 bg-stride-blue mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}></div>

                    <div className="bg-sky-mist/30 p-8 rounded-2xl border-l-4 border-stride-blue opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                        <p className="text-lg leading-relaxed mb-4 font-medium">
                            令和７年度は、会費を見直しさせて頂きました。近年はクラブ員も減少しており、会費収入のみで運営している会計では、厳しい現状ですので、ご理解下さい。（コーチ陣は無報酬で指導してくれております）
                        </p>
                        <p className="text-lg leading-relaxed text-soot-black font-bold">
                            子供達が、各自の目標を持って継続して活動してくれる、クラブ運営を目指しています。
                        </p>
                        <p className="mt-4 text-gray-600">
                            大会や記録会出場は、目的ではなく子供達が成長するための手段だと考え、色々な事に挑戦してもらいたいと考えて活動しております。
                        </p>
                    </div>
                </section>

                {/* Core Guidelines */}
                <section className="mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-soot-black">
                        <Heart className="text-stride-blue" />
                        <span>大切にしてほしいこと</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "休息と栄養",
                                text: "『トレーニング・栄養・休養』を経て、身体が「超回復」してゆく事の繰り返しで、子供達の運動能力は向上していきます。バランスのとれた食事や十分な睡眠を心がけて下さい。",
                                num: "01"
                            },
                            {
                                title: "見守りと称賛",
                                text: "時々で結構ですのでお子さんの練習している姿をみてあげて下さい。きっと頑張っている姿があるはずですので、それをまた褒めてあげて下さい。",
                                num: "02"
                            },
                            {
                                title: "長い目での成長",
                                text: "子供達の能力はいつ伸びるか分かりません。直ぐに結果が出なくても継続する事が大切です。大人が子供達の伸びしろに線を引いてはいけません。自分で満足したり、活動を止めた時点で成長は止まってしまいます。自分のできる事で良いので、続ける癖を付けてもらいたいと思っています。",
                                num: "03"
                            },
                            {
                                title: "身体のケア",
                                text: "成長期ですので、練習を積んでゆくと、何処かに痛みが出たりする事があります。ちょっとした痛み、違和感があれば、保護者やクラブ指導者に言うようにしましょう。",
                                num: "04"
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                                <span className="absolute -right-4 -top-6 text-9xl font-display font-bold text-gray-50 opacity-50 group-hover:text-sky-mist transition-colors duration-500 select-none">{item.num}</span>
                                <h3 className="text-xl font-bold mb-4 text-stride-blue relative z-10">{item.title}</h3>
                                <p className="text-gray-600 leading-loose relative z-10 text-sm md:text-base">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Practice Items */}
                <section className="mb-24 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                    <div className="bg-soot-black text-white rounded-3xl p-8 md:p-12 shadow-xl">
                        <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
                            <AlertCircle className="text-yellow-400" />
                            <span>練習時の持ち物・注意点</span>
                        </h2>

                        <div className="space-y-10">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-16 flex-shrink-0">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-yellow-400">
                                        <Shirt />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-yellow-400">① 着替え（Tシャツやランパン等）</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        多少の雨でも外で練習する事もありますし、汗を沢山かく事もあります。必ず用意してください。<br />
                                        濡れた衣類が乾く時に熱を奪い、筋肉が冷えてしまう場合や、体が冷える事で体調を崩す事がありますので、濡れた衣類を着続ける事は良い事ではありません。
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-16 flex-shrink-0">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-yellow-400">
                                        <GlassWater />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-yellow-400">② 給水用飲み物</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        汗で失われた塩分、ミネラル等を補給する必要がありますので、スポーツドリンク（味が濃いようなら少し水で薄めてもOKです）が良いと思います。（お茶は好ましくありません。）
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-16 flex-shrink-0">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-yellow-400">
                                        <Apple />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-yellow-400">③ 練習後の補給</h3>
                                    <p className="text-gray-300 leading-relaxed text-sm mb-4">
                                        練習後（30分以内）速やかにエネルギー等を補給をする事は非常に大切な事です。タンパク質・炭水化物・ビタミン等を補給する事が、トレーニング効果の向上には必要な事です。<br />
                                        帰りの車中で、軽食を食べたり、帰宅前にプロテイン系の飲み物を飲むのも良いと思われます。ちょっとした事の積み重ねで、大きな力差になる事があります。
                                    </p>
                                    <div className="bg-white/10 p-4 rounded-xl">
                                        <span className="block text-xs font-bold text-gray-400 mb-2">練習後30分以内の栄養摂取の例</span>
                                        <p className="text-sm font-medium text-white">
                                            「バナナと牛乳」「レモンの蜂蜜漬け」「おにぎりと果汁100％ジュース」「豆乳と菓子パン」「小さな幕の内弁当」
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Educational Article */}
                <section className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-soot-black">
                        <BookOpen className="text-stride-blue" />
                        <span>発育・発達にあわせた少年期のスポーツ（遊び）について</span>
                    </h2>
                    <p className="text-sm text-gray-500 mb-8 ml-9">著：尾原元副代表</p>

                    <div className="bg-sky-mist/20 rounded-3xl p-8 md:p-12 border border-sky-mist space-y-8">
                        {[
                            "A.C.TOYAMAは陸上専門のクラブです。正直言って、活動時間が限られており、内容が走ることに偏らざるを得ない状況です。しかし、それだけでは子供達の運動能力を伸ばすには不十分なので、クラブでのトレーニング以外でも身体を使って遊んでほしいと思っています。",
                            "家族でスポーツについて話す機会が多いとスポーツクラブに入っていなくても身体を動かす時間が長く体力テストの成績も良い傾向があります。",
                            "幼少時に身体を使ってたくさん遊んでいると小学校進学後もスポーツ活動をよく行う傾向にあるそうです。また、学生時代に運動部に所属していると、その後の運動習慣につながり、大人になっても体力が高い傾向にあるそうです。例えスポーツ選手を目指していなくても、若い頃に運動部などで身体を鍛えておくと生涯にわたって高い体力を維持できると言われています。",
                            "物事を理解するということは、静的な知識（紙に書いたような知識）の羅列が脳に入り、それを検索することではなく、身体（感覚能力、運動能力、情報処理能力の総合体）を通じた物事との関わり合い（多様な経験）があってはじめて出来ることであります。つまり、物事の意味を理解できるのは、身体があるからといっても過言ではありません。センスや運動神経は体験や記憶の組み合わせです。生まれつきではなく学べるものだと考えられています。子供たちには身体を使って色々経験してほしいと思っています。",
                            "身体活動は、脳から身体にトップダウンで指令を発しているのではなく、種々の器官がリンクし、全身を一つのネットワークとして絶え間なく調節している。この調節のことをコーディネーション（＝協調）と言います。",
                            "小学生はまだ論理的な思考が未熟なので、理屈よりもいろいろな経験をすることが大事です。スポーツクラブでの活動だけでなく、親子で身体を使った遊びやスポーツをたくさん経験してほしいと思います。それがスポーツの成績アップにもつながると考えられています。"
                        ].map((text, i) => (
                            <div key={i} className="flex gap-4">
                                <Quote className="flex-shrink-0 text-stride-blue/30 w-6 h-6 rotate-180" />
                                <p className="text-gray-700 leading-loose text-sm md:text-base font-medium">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

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
