import { Trophy, AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';
import { readFile } from 'fs/promises';
import { join } from 'path';

type RecordItem = {
    rank: string;
    name: string;
    grade: string;
    gender: string;
    tournament: string;
    record: string;
    wind: string;
    note: string;
}

type RecordCategory = {
    category: string;
    records: RecordItem[];
}

export const metadata: Metadata = {
    title: 'クラブ 歴代記録集',
    description: 'A.C.TOYAMAクラブの歴代記録集を掲載しています。小学生から一般まで、各種目のクラブ記録をご覧いただけます。',
    openGraph: {
        title: 'クラブ 歴代記録集 | A.C.TOYAMA',
        description: 'A.C.TOYAMAクラブの歴代記録集を掲載しています。',
    },
}

// サーバーサイドでデータを取得
async function getRecords(): Promise<RecordCategory[]> {
    try {
        // サーバーサイドからpublicフォルダのファイルを直接読み込む
        const filePath = join(process.cwd(), 'public', 'data', 'records.json')
        const fileContents = await readFile(filePath, 'utf8')
        const data = JSON.parse(fileContents) as RecordCategory[]
        return data
    } catch (error) {
        console.error('Failed to load records:', error)
        // エラーを再スローして、エラーバウンダリーで処理できるようにする
        throw error
    }
}

export default async function RecordsPage() {
    let data: RecordCategory[] = []

    try {
        data = await getRecords()
    } catch (error) {
        // エラー時は空配列を返す（エラーメッセージは表示しない）
        // エラーバウンダリーで処理される想定
        data = []
    }

    return (
        <main className="w-full min-h-screen bg-pure-white pb-20 pt-32">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex items-center gap-4 mb-12">
                    <Trophy className="w-8 h-8 text-stride-blue" />
                    <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-soot-black">
                        RECORDS
                        <span className="block text-xl md:text-2xl mt-2 text-gray-400 font-sans font-normal">クラブ 歴代記録集（R7.11.23 現在）</span>
                    </h1>
                </div>

                {data.length === 0 ? (
                    <div className="text-center py-20">
                        <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">データを読み込めませんでした</p>
                        <p className="text-sm text-gray-400">しばらく時間をおいてから再度お試しください</p>
                    </div>
                ) : (
                    <div className="space-y-16">
                        {data.map((cat, index) => (
                        <section key={index} id={`cat-${index}`} className="scroll-mt-32">
                            <h2 className="text-2xl font-bold text-stride-blue border-l-4 border-stride-blue pl-4 mb-6">
                                {cat.category || "その他記録"}
                            </h2>

                            <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
                                <table className="w-full text-left border-collapse whitespace-nowrap md:whitespace-normal">
                                    <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase">
                                        <tr>
                                            {/* Dynamic headers based on content content type (Relay vs Standard) */}
                                            {cat.category?.includes('リレー') ? (
                                                <>
                                                    <th scope="col" className="p-4 border-b">記録</th>
                                                    <th scope="col" className="p-4 border-b">大会名・メンバー等</th>
                                                </>
                                            ) : (
                                                <>
                                                    <th scope="col" className="p-4 border-b w-12">No</th>
                                                    <th scope="col" className="p-4 border-b w-32">氏名</th>
                                                    <th scope="col" className="p-4 border-b w-16">学年</th>
                                                    <th scope="col" className="p-4 border-b w-16">男女</th>
                                                    <th scope="col" className="p-4 border-b">大会名</th>
                                                    <th scope="col" className="p-4 border-b">記録</th>
                                                    <th scope="col" className="p-4 border-b">備考/風</th>
                                                </>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 font-sans text-sm">
                                        {cat.records.map((item, rIndex) => (
                                            <tr key={rIndex} className="hover:bg-blue-50/30 transition-colors">
                                                {cat.category?.includes('リレー') ? (
                                                    <>
                                                        <td className="p-4 font-bold text-stride-blue">{item.record}</td>
                                                        <td className="p-4 text-soot-black">{item.note}</td>
                                                    </>
                                                ) : (
                                                    <>
                                                        <td className="p-4 font-bold text-gray-400">{item.rank}</td>
                                                        <td className="p-4 font-bold text-soot-black">{item.name}</td>
                                                        <td className="p-4 text-gray-600">{item.grade}</td>
                                                        <td className="p-4 text-gray-600">{item.gender}</td>
                                                        <td className="p-4 text-gray-600">{item.tournament}</td>
                                                        <td className="p-4 font-bold text-stride-blue">{item.record}</td>
                                                        <td className="p-4 text-xs text-gray-500">
                                                            {item.wind || item.note}
                                                        </td>
                                                    </>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        ))}
                    </div>
                )}
            </div>
        </main>
    )
}
