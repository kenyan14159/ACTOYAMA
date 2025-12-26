import dynamic from 'next/dynamic';
import Topics from "@/components/sections/Topics";
import NewsItem from "@/components/news/NewsItem";
import Link from 'next/link';

// VisualHeroを動的インポート
const VisualHero = dynamic(() => import('@/components/hero/VisualHero'), {
    loading: () => <div className="h-screen bg-soot-black animate-pulse" />,
});

// NEWS_DATAをコンポーネント外に定義して、再レンダリング時に再作成されないようにする
const NEWS_DATA = [
    {
        date: "2022.01.01",
        title: "次の定期練習会は、１２月２５日（木）１８：３０～　県総合ﾒｲﾝです。",
        content: "◆今後のスケジュール◆（◎定期練習、＊臨時練習、☆大会・イベント等、★会議）\n☆１２月２０日（土）　　　県総合フェスティバル　９時～10時　　　　　　　　  於：県総合メイン\n☆１２月20～21日　　　　  滋賀・京都 […]"
    },
    {
        date: "2022.01.01",
        title: "クラブ員の記録集・・・県中長記録会（11/23）　自己ﾍﾞｽﾄが沢山出ました。",
        content: "◆２０２５ 第４回 富山県中長距離記録会（11/23）　　  於：県総合メイン\n松永　こころ 5 １０００ｍ 3分13秒38 74 入りは良かったんですが・・・。練習が大切ですね。\n内山　勇人 6 １０００ｍ 3分23秒 […]"
    },
    {
        date: "2022.01.01",
        title: "クラブ活動日誌・・・夏ﾐﾆ合宿・合同合宿（妙高高原）",
        content: "◆クラブ夏合宿（R7.8.10～11）　　於：妙高高原\n【長距離組】1日目 AM（2.4㎞ｺｰｽ）1周JOG＋3周（小学生2周）JOG・PM（池の平スポーツ広場芝ｺｰｽ）　250m×40本　２日目 朝練習（約4㎞JOG） […]"
    },
    {
        date: "2021.04.01",
        title: "クラブ内練習・記録会・・・（12/13）長距離記録会",
        content: "◆長距離記録会（12/13）　　於：空港スポーツ緑地\n種目 記録 ﾗｯﾌﾟ\n新村  玲空 中2 男 ２０００ｍ 7分14秒 334 340\n松永　こころ 5 女 ２０００ｍ 7分15秒8 333 342 ハ […]"
    }
] as const;

export default function Home() {

    return (
        <main className="w-full min-h-screen bg-pure-white pb-20">

            {/* 1. Visual Hero (No Text) */}
            <VisualHero />

            {/* 2. Topics (Highlights from Slider) */}
            <Topics />

            {/* 3. News Section */}
            <section className="py-10 container mx-auto px-6 max-w-5xl">
                <div className="flex items-center justify-between mb-12 border-b-2 border-soot-black pb-4">
                    <h3 className="text-4xl font-bold font-display tracking-tighter">NEWS</h3>
                    <Link href="/news" className="text-sm font-bold hover:text-stride-blue transition-colors">VIEW ALL →</Link>
                </div>

                <div className="flex flex-col">
                    {NEWS_DATA.map((item, index) => (
                        <NewsItem key={index} {...item} />
                    ))}
                </div>
            </section>

            {/* 4. KID Section */}
            <section className="py-20 container mx-auto px-6">
                <div className="relative overflow-hidden rounded-[3rem] bg-stride-blue text-pure-white p-12 md:p-24 text-center group transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20">
                    {/* Background Decoration */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_70%)]" />
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-400 blur-3xl opacity-30 rounded-full group-hover:scale-150 transition-transform duration-700" />

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-8xl font-bold font-display tracking-tighter mb-6">
                            A.C.TOYAMA KID
                        </h2>
                        <p className="text-xl md:text-2xl font-bold opacity-90 mb-12">
                            小学生1年〜2年生対象のページです。
                        </p>
                        <Link
                            href="/kid"
                            className="inline-flex items-center justify-center px-12 py-4 bg-pure-white text-stride-blue text-lg font-bold rounded-full hover:bg-cyan-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
                        >
                            KIDページを見る
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
