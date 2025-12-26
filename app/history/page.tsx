'use client'

import { Clock, Trophy, History } from 'lucide-react'

export default function HistoryPage() {

    const timeline = [
        { year: "平成9年〜", title: "活動開始", details: ["婦中町陸上教室として活動開始"] },
        { year: "2000年", title: "クラブ結成", details: ["婦中ジュニア陸上競技クラブ」結成 (H12.12.11)"] },
        { year: "2007年", title: "改名・KIDS開始", details: ["4月: クラブ名を「Ａ.Ｃ.ＴＯＹＡＭＡ」（アスリートクラブトヤマ）に改名", "6月: KIDSの活動スタート"] },
        { year: "2008年", title: "初優勝・全国出場", details: ["富山県小学生クロカン初優勝（男女）", "全国小学生クロスカントリーリレー初出場（26位）"] },
        { year: "2011年", title: "全国入賞", details: ["全国小学生クロスカントリーリレー6位入賞"] },
        { year: "2012年", title: "全中初出場・県新記録", details: ["全国中学陸上初出場(男女1500m各1名)", "女子3000m県中学新記録(宝田彩香(中3):9分28秒25)"] },
        { year: "2013年", title: "県小新記録・全国入賞", details: ["男子1000m県小学生新記録(藤田健人(小6)2分57秒98 於:五福)", "全国小学生クロスカントリーリレー入賞（5位）"] },
        { year: "2014年", title: "全国大会", details: ["全国小学生陸上大会 (6年女子100m:日影柚月:県(13秒71))"] },
        { year: "2016年", title: "IH出場・連覇", details: ["OB(1500m:日影君, 競歩:花崎君, 400mリレー:冨永君) インターハイ出場", "県小学生たすきリレー男子9連覇。女子第2位。"] },
        { year: "2017年", title: "IH出場・連覇", details: ["OB(3000mSC:榎本君, 5000m競歩:花崎君, 女子ハンマー投:飴井さん) 山形IH出場", "県小学生たすきリレー男子10連覇。女子第3位"] },
        { year: "2018年", title: "IH出場・全中出場", details: ["OG(3000m:谷口さん) 三重IHへ", "二村君(OB)・中才さん(OG) 岡山全中出場", "県小学生たすきリレー男子11連覇。女子第2位"] },
        { year: "2019年", title: "IH出場・優勝", details: ["OG(宝田さん(女子W杯サッカー出場), 谷口さん3000m) 沖縄IHへ", "県小学生たすきリレー優勝", "宮崎コーチ 台湾澎湖マラソン優勝"] },
        { year: "2020年", title: "全国高校駅伝・箱根駅伝", details: ["日影さん(OG) 全国高校駅伝2区快走", "花崎君(OB) 箱根駅伝6区区間賞, 日影君(OB) 6区10位"] },
        { year: "2021年", title: "全国出場・五輪出場", details: ["全国小学生陸上出場（6年男子100m：細川君）", "長森さん（小6）1000m富山県小学生新記録（3分4秒16）", "宝田沙織選手（OG）なでしこジャパンで東京五輪出場"] },
        { year: "2022年", title: "日本選手権・全国出場", details: ["谷コーチ（日本選手権：100m出場）", "全国中学陸上出場（南部中400mリレー・女子1500m）", "全国小学生陸上出場（6年女子100m：渋谷さん）"] },
        { year: "2023年", title: "県新記録・全中駅伝準優勝", details: ["長森さん：富山県中学新記録（女子1500m、800m）", "全国中学陸上出場（女子1500m：長森さん(6位)・黒川さん）", "大沢野中（女子）全国中学駅伝 準優勝"] },
        { year: "2024年", title: "県新記録・IH出場", details: ["長森さん、黒川さん：富山県中学新記録（女子1500m）", "志田先輩（富商1年）福岡IH 出場（800m）"] },
        { year: "2025年", title: "インターハイへ", details: ["長森先輩、黒川先輩（仙台育英高1年）、志田先輩（富商2年）、氷見先輩（富商3年）広島IHへ"] },
    ]

    const tableData = [
        { year: 2001, prefElem: "2 (2)", prefJhs: "7 (7)", hoku: "6 (3)", jrOly: "3 (0)", prefEki: "1 (女)", tasuki: "男7位・女4位", natXc: "-" },
        { year: 2002, prefElem: "8 (3)", prefJhs: "9 (5)", hoku: "2 (1)", jrOly: "1 (1)", prefEki: "1 (女)", tasuki: "-", natXc: "-" },
        { year: 2003, prefElem: "0", prefJhs: "8 (8)", hoku: "4 (1)", jrOly: "1 (0)", prefEki: "-", tasuki: "-", natXc: "-" },
        { year: 2004, prefElem: "1 (1)", prefJhs: "4 (4)", hoku: "3 (0)", jrOly: "1 (0)", prefEki: "1 (女)", tasuki: "-", natXc: "-" },
        { year: 2005, prefElem: "3 (1)", prefJhs: "8 (5)", hoku: "3 (2)", jrOly: "2 (0)", prefEki: "2 (女)", tasuki: "-", natXc: "-" },
        { year: 2006, prefElem: "5 (1)", prefJhs: "1 (1)", hoku: "1 (0)", jrOly: "1 (0)", prefEki: "-", tasuki: "男2位・女12位", natXc: "-" },
        { year: 2007, prefElem: "4 (3)", prefJhs: "0", hoku: "0", jrOly: "0", prefEki: "-", tasuki: "男3位・女7位", natXc: "-" },
        { year: 2008, prefElem: "7 (3)", prefJhs: "7 (6)", hoku: "4 (1)", jrOly: "1 (0)", prefEki: "-", tasuki: "男女優勝", natXc: "26位" },
        { year: 2009, prefElem: "5 (3)", prefJhs: "7 (6)", hoku: "3 (1)", jrOly: "1 (0)", prefEki: "-", tasuki: "男女優勝", natXc: "15位" },
        { year: 2010, prefElem: "9 (4)", prefJhs: "12 (10)", hoku: "6 (3)", jrOly: "3 (0)", prefEki: "1 (男)", tasuki: "男女優勝", natXc: "震災の為中止" },
        { year: 2011, prefElem: "11 (5)", prefJhs: "10 (9)", hoku: "8 (2)", jrOly: "4 (1)", prefEki: "1 (女)", tasuki: "男女優勝", natXc: "6位(1)" },
        { year: 2012, prefElem: "17 (8)", prefJhs: "13 (9)", hoku: "6 (5)", jrOly: "4 (1)", prefEki: "1 (女)", tasuki: "男女優勝", natXc: "18位" },
        { year: 2013, prefElem: "17 (9)", prefJhs: "11 (6)", hoku: "4 (1)", jrOly: "3 (0)", prefEki: "2 (男女)", tasuki: "男女優勝", natXc: "5位(2)" },
        { year: 2014, prefElem: "18 (11)*", prefJhs: "13 (12)", hoku: "5 (2)", jrOly: "3 (0)", prefEki: "2 (男)", tasuki: "男女優勝", natXc: "17位" },
        { year: 2015, prefElem: "18 (7)", prefJhs: "9 (5)", hoku: "2 (1)", jrOly: "0", prefEki: "1 (女)", tasuki: "男女優勝", natXc: "11位" },
        { year: 2016, prefElem: "16 (4)", prefJhs: "13 (10)", hoku: "7 (3)", jrOly: "0", prefEki: "1 (男)", tasuki: "男優勝・女2位", natXc: "県予選敗退" },
        { year: 2017, prefElem: "14 (8)", prefJhs: "13 (7)", hoku: "5 (2)", jrOly: "1 (0)", prefEki: "-", tasuki: "男優勝・女3位", natXc: "18位" },
        { year: 2018, prefElem: "15 (5)", prefJhs: "10 (8)", hoku: "5 (2)", jrOly: "0", prefEki: "-", tasuki: "男優勝・女2位", natXc: "県予選敗退" },
        { year: 2019, prefElem: "25 (5)", prefJhs: "13 (7)", hoku: "4 (0)", jrOly: "0", prefEki: "", tasuki: "総合優勝", natXc: "34位" },
        { year: 2020, prefElem: "中止", prefJhs: "中止", hoku: "中止", jrOly: "0", prefEki: "中止", tasuki: "男女優勝", natXc: "" },
        { year: 2021, prefElem: "18 (7)*", prefJhs: "12 (8)", hoku: "5 (4)", jrOly: "0", prefEki: "0", tasuki: "中止", natXc: "" },
        { year: 2022, prefElem: "14 (4)*", prefJhs: "14 (11)", hoku: "11 (7)", jrOly: "0", prefEki: "2 (女)", tasuki: "男2位・女優勝", natXc: "" },
        { year: 2023, prefElem: "13 (4)", prefJhs: "8 (6)", hoku: "4 (4)", jrOly: "0", prefEki: "3 (女)", tasuki: "男4位・女優勝", natXc: "" },
        { year: 2024, prefElem: "11 (2)", prefJhs: "11 (9)", hoku: "6 (4)", jrOly: "男1k", prefEki: "男1・女3", tasuki: "男4位・女2位", natXc: "" },
        { year: 2025, prefElem: "12 (4)", prefJhs: "15 (11)", hoku: "7", jrOly: "", prefEki: "", tasuki: "廃止", natXc: "" },
    ]

    return (
        <main className="min-h-screen bg-pure-white pt-32 pb-20">
            <div className="container mx-auto px-6">

                {/* Header */}
                <section className="mb-20">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-stride-blue mb-8 tracking-tighter opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
                        HISTORY
                        <span className="block text-xl md:text-2xl text-soot-black mt-4 font-sans font-bold opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>クラブのあしあと</span>
                    </h1>
                    <div className="w-20 h-1 bg-stride-blue mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}></div>
                </section>

                {/* Timeline */}
                <section className="mb-32 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                    <h2 className="text-2xl font-bold mb-12 flex items-center gap-3 text-soot-black">
                        <Clock className="text-stride-blue" />
                        <span>沿革・主な戦績</span>
                    </h2>

                    <div className="relative border-l-2 border-dashed border-gray-200 ml-4 md:ml-12 space-y-12 pb-12">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-16">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-stride-blue shadow-sm"></div>
                                <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
                                    <span className="text-2xl font-display font-bold text-stride-blue w-32 flex-shrink-0">{item.year}</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-soot-black mb-3">{item.title}</h3>
                                        <ul className="space-y-2">
                                            {item.details.map((detail, dIndex) => (
                                                <li key={dIndex} className="text-gray-600 leading-relaxed text-sm md:text-base flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-2 flex-shrink-0"></span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats Table */}
                <section className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-soot-black">
                        <Trophy className="text-stride-blue" />
                        <span>主な大会の出場（ ）は入賞者数</span>
                    </h2>

                    <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-xl bg-white">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-soot-black text-white text-xs uppercase font-bold tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 whitespace-nowrap">年度</th>
                                    <th className="px-6 py-4 whitespace-nowrap">県小学生陸上</th>
                                    <th className="px-6 py-4 whitespace-nowrap">県中学選手権</th>
                                    <th className="px-6 py-4 whitespace-nowrap">北信越中学</th>
                                    <th className="px-6 py-4 whitespace-nowrap">全国Jr五輪</th>
                                    <th className="px-6 py-4 whitespace-nowrap">全国都道府県駅伝</th>
                                    <th className="px-6 py-4 whitespace-nowrap">県小たすきリレー</th>
                                    <th className="px-6 py-4 whitespace-nowrap">全国小クロカン</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {tableData.map((row, index) => (
                                    <tr key={index} className={`hover:bg-sky-mist/30 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                                        <td className="px-6 py-4 font-bold text-stride-blue font-display">{row.year}</td>
                                        <td className="px-6 py-4 text-gray-700 font-medium">{row.prefElem}</td>
                                        <td className="px-6 py-4 text-gray-700">{row.prefJhs}</td>
                                        <td className="px-6 py-4 text-gray-700">{row.hoku}</td>
                                        <td className="px-6 py-4 text-gray-700">{row.jrOly}</td>
                                        <td className="px-6 py-4 text-gray-700">{row.prefEki}</td>
                                        <td className="px-6 py-4 text-gray-700">{row.tasuki}</td>
                                        <td className="px-6 py-4 text-gray-700">{row.natXc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-xs text-gray-400 text-right">※ *印は何らかの注釈あり（詳細は過去の記録等を参照）</p>
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
