import { Trophy, Calendar, MapPin } from 'lucide-react'
import { getResults, ResultEvent, ResultItem } from '@/lib/notion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '大会結果',
  description: 'A.C.TOYAMAクラブ員の大会出場結果を掲載しています。県大会、全国大会など各種大会での記録と順位をご覧いただけます。',
  openGraph: {
    title: '大会結果 | A.C.TOYAMA',
    description: 'A.C.TOYAMAクラブ員の大会出場結果を掲載しています。',
  },
}

// テスト用のフォールバックデータ（Notion未設定時に使用）
const FALLBACK_RESULTS: ResultEvent[] = [
    {
        id: '1',
        date: '2024.11.17',
        name: '令和6年度 富山県秋季小学生陸上大会',
        venue: '富山県総合運動公園陸上競技場',
        results: [
            { event: '100m（6年男子）', name: '佐々木 信哉', grade: '小6', record: '13秒14', place: '1位' },
            { event: '100m（6年男子）', name: '河合 琉寿', grade: '小6', record: '13秒64', place: '3位' },
            { event: '1000m（5年女子）', name: '松永 こころ', grade: '小5', record: '3分10秒46', place: '2位' },
            { event: '4×100mリレー', name: 'A.C.TOYAMA', grade: '小学生', record: '56秒82', place: '2位' },
        ]
    },
    {
        id: '2',
        date: '2024.10.20',
        name: '第15回 富山市小学生リレーカーニバル',
        venue: '富山市五福陸上競技場',
        results: [
            { event: '1000m（6年男子）', name: '田中 瑶樹', grade: '小6', record: '3分05秒22', place: '4位' },
            { event: '1000m（4年女子）', name: '松永 こころ', grade: '小4', record: '3分16秒98', place: '1位' },
            { event: '100m（5年男子）', name: '下田 穂積', grade: '小5', record: '14秒72', place: '5位' },
        ]
    },
    {
        id: '3',
        date: '2024.07.14',
        name: '令和6年度 富山県中学選手権',
        venue: '富山県総合運動公園陸上競技場',
        results: [
            { event: '1500m（3年女子）', name: '長森 結愛', grade: '中3', record: '4分20秒89', place: '1位' },
            { event: '3000m（3年男子）', name: '中川 悠晴', grade: '中3', record: '8分59秒35', place: '2位' },
            { event: '800m（2年女子）', name: '松永 悠', grade: '中2', record: '2分14秒58', place: '3位' },
        ]
    },
]

export const revalidate = 3600 // 1時間ごとに再検証

export default async function ResultsPage() {
    // Notionからデータ取得を試みる、失敗時はフォールバック
    let resultsItems = await getResults()
    if (resultsItems.length === 0) {
        resultsItems = FALLBACK_RESULTS
    }

    return (
        <main className="min-h-screen bg-pure-white pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-5xl">

                {/* Header */}
                <section className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-stride-blue mb-4 tracking-tighter">
                        RESULTS
                        <span className="block text-xl md:text-2xl text-soot-black mt-4 font-sans font-bold">大会結果</span>
                    </h1>
                    <div className="w-20 h-1 bg-stride-blue mt-6"></div>
                    <p className="mt-6 text-gray-600">
                        クラブ員の大会出場結果を掲載しています。
                    </p>
                </section>

                {/* Results List */}
                <section className="space-y-8">
                    {resultsItems.length > 0 ? (
                        resultsItems.map((event) => (
                            <article
                                key={event.id}
                                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="bg-soot-black text-white p-6">
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                                        <span className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            {event.date}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin size={14} />
                                            {event.venue}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold">{event.name}</h2>
                                </div>

                                <div className="p-6 overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead className="text-xs text-gray-500 uppercase border-b">
                                            <tr>
                                                <th scope="col" className="py-2 text-left">種目</th>
                                                <th scope="col" className="py-2 text-left">氏名</th>
                                                <th scope="col" className="py-2 text-left">学年</th>
                                                <th scope="col" className="py-2 text-left">記録</th>
                                                <th scope="col" className="py-2 text-left">順位</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {event.results.map((result: ResultItem, idx: number) => (
                                                <tr key={idx} className="hover:bg-sky-mist/30">
                                                    <td className="py-3 font-medium whitespace-nowrap">{result.event}</td>
                                                    <td className="py-3 font-bold text-soot-black whitespace-nowrap">{result.name}</td>
                                                    <td className="py-3 text-gray-600">{result.grade}</td>
                                                    <td className="py-3 font-bold text-stride-blue">{result.record}</td>
                                                    <td className="py-3">
                                                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${result.place.includes('1位') ? 'bg-yellow-100 text-yellow-700' :
                                                            result.place.includes('2位') ? 'bg-gray-100 text-gray-700' :
                                                                result.place.includes('3位') ? 'bg-orange-100 text-orange-700' :
                                                                    'bg-gray-50 text-gray-600'
                                                            }`}>
                                                            {result.place}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="text-center py-20 text-gray-400 bg-sky-mist/20 rounded-3xl">
                            <Trophy size={48} className="mx-auto mb-4 opacity-50" />
                            <p className="text-lg font-medium mb-2">大会結果はまだ登録されていません</p>
                            <p className="text-sm">大会出場後に結果を掲載します</p>
                        </div>
                    )}
                </section>

            </div>
        </main>
    )
}
