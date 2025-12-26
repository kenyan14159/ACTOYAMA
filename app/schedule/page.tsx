import { Calendar } from 'lucide-react';

export const metadata = {
    title: '令和7年度予定 | A.C.TOYAMA',
    description: 'A.C.TOYAMAの2025年度大会スケジュール一覧です。',
};

const SCHEDULE_DATA = [
    { date: "4/6（日）", event: "長距離練習会", venue: "県総合メイン", note: "" },
    { date: "4/27（日）", event: "魚津しんきろうマラソン", venue: "魚津市", note: "各自で申込" },
    { date: "4/29（火）", event: "富山市中学生記録会", venue: "五福競技場", note: "各学校から" },
    { date: "5/3（土）", event: "県中学生記録会", venue: "五福競技場", note: "各学校から" },
    { date: "5/4・5（日・月）", event: "富山県陸上競技選手権", venue: "県総合メイン", note: "クラブで申込" },
    { date: "5/10（土）", event: "県小学生記録会（3年生以上）", venue: "県総合メイン", note: "クラブで申込" },
    { date: "5/17（土）PM", event: "長距離練習会", venue: "県総合メイン", note: "クラブで申込" },
    { date: "5/18（日）", event: "射水市民スポーツ大会", venue: "高岡城光寺", note: "" },
    { date: "5/30～6/2", event: "県高校総体", venue: "県総合メイン", note: "" },
    { date: "5/24（土）・25（日）", event: "黒部名水マラソン", venue: "黒部市", note: "各自で申込" },
    { date: "5/25（日）", event: "射水市小学生陸上（県大会予選）", venue: "高岡城光寺", note: "" },
    { date: "5/31・6/1", event: "富山市民体育大会", venue: "五福競技場", note: "各学校で" },
    { date: "5/31・6/1", event: "高岡地区中学陸上", venue: "高岡城光寺", note: "各学校で" },
    { date: "6/7（土）", event: "富山市小学生陸上", venue: "県総合メイン", note: "クラブで申込" },
    { date: "6/13（金）・14（土）", event: "富山地区中学生陸上", venue: "五福競技場", note: "各学校で" },
    { date: "6/14（土）・15（日）", event: "新川地区中学生陸上", venue: "魚津桃山", note: "各学校で" },
    { date: "6/28（土）", event: "県中長距離記録会", venue: "五福陸上競技場", note: "" },
    { date: "6/28（土）", event: "県実業団陸上", venue: "魚津桃山", note: "クラブで申込" },
    { date: "6/29（日）", event: "県小学生陸上", venue: "県総合メイン", note: "＊予選通過者" },
    { date: "7/5（土）・6（日）", event: "県中学選手権", venue: "県総合メイン", note: "各学校から" },
    { date: "7/12（土）・13（日）", event: "県体一部", venue: "県総合メイン", note: "高校生以上" },
    { date: "7/19（土）・20（日）", event: "県通信陸上", venue: "県総合メイン", note: "各学校から" },
    { date: "7/26（土）・27（日）", event: "白馬ｸﾛｽｶﾝﾄﾘｰ大会（遠征）", venue: "長野県白馬村", note: "クラブで申込" },
    { date: "7/25（金）～29（火）", event: "全国高校総体", venue: "広島県", note: "" },
    { date: "8/3（日）", event: "桃山チャレンジ", venue: "魚津桃山競技場", note: "クラブで申込" },
    { date: "8/8（金）", event: "北信越中学陸上", venue: "福井県", note: "県通過者" },
    { date: "8/10（日）～11（月）", event: "クラブ夏合宿", venue: "妙高高原", note: "" },
    { date: "8/17（土）～20（水）", event: "全国中学陸上", venue: "沖縄県", note: "標準突破者" },
    { date: "8/31（日）", event: "県中学・高校夏季記録会", venue: "県総合メイン", note: "各学校で" },
    { date: "9/7（日）", event: "桃山チャレンジ", venue: "魚津桃山競技場", note: "クラブで申込" },
    { date: "9/7（日）", event: "県中長距離記録会", venue: "県総合メイン", note: "" },
    { date: "9/13～21日", event: "世界陸上東京大会", venue: "国立競技場", note: "" },
    { date: "9/13（土）", event: "富山・高岡地区中学新人陸上", venue: "五福・城光寺", note: "各学校で" },
    { date: "9/14（日）", event: "とやまマラソン練習会", venue: "県総合ｸﾛｶﾝｺｰｽ", note: "" },
    { date: "9/15（月・祝）", event: "ダッシュ王選手権", venue: "県総合メイン", note: "各自で申込" },
    { date: "9/20（土）", event: "新川地区中学新人陸上", venue: "桃山競技場", note: "各学校で" },
    { date: "9/21（日）", event: "とやまｸﾗｲﾑﾗﾝIN牛岳ｽｷｰ場", venue: "牛岳ｽｷｰ場", note: "クラブで申込" },
    { date: "9/20（土）～22（月）", event: "県高校新人大会", venue: "県総合メイン", note: "各学校で" },
    { date: "9/28（日）", event: "小学生ｸﾗﾌﾞ対抗陸上", venue: "能美市（石川県）", note: "クラブで申込" },
    { date: "10/4（土）", event: "県中学駅伝", venue: "県総合メイン", note: "各学校で" },
    { date: "10/5（日）", event: "県中長距離記録会", venue: "五福陸上競技場", note: "" },
    { date: "10/5（日）", event: "とやまマラソン練習会", venue: "県総合ｸﾛｶﾝｺｰｽ", note: "" },
    { date: "10/11（土）", event: "県ジュニアオリンピック", venue: "五福陸上競技場", note: "各学校で" },
    { date: "10/12（日）", event: "滑川ほたるいかマラソン", venue: "滑川市", note: "各自で申込" },
    { date: "10/13（月）", event: "富山県秋季小学生陸上", venue: "県総合メイン", note: "クラブで申込" },
    { date: "10/17（金）～19（日）", event: "全国U16・U18 陸上", venue: "三重県", note: "県選抜者" },
    { date: "10/18（土）", event: "ちびっこ健康マラソン", venue: "太閤山ランド", note: "各自で申込" },
    { date: "10/19（日）", event: "立山アルペンマラソン", venue: "立山町総合公園", note: "クラブで申込" },
    { date: "10/26（日）", event: "魚津カップジュニア駅伝", venue: "魚津桃山", note: "クラブで申込" },
    { date: "10/26（日）", event: "県高校駅伝・ｸﾗﾌﾞ対抗駅伝", venue: "県総合特設ｺｰｽ", note: "" },
    { date: "11/2（日）", event: "2025富山マラソン", venue: "高岡市⇒富山市", note: "" },
    { date: "11/2（日）", event: "全国小学生陸上", venue: "日産スタジアム", note: "県大会優勝者" },
    { date: "11/9（日）", event: "陸王選手権", venue: "滑川市陸上競技場", note: "" },
    { date: "11/16（日）", event: "入善扇状地マラソン", venue: "入善町", note: "各自で申込" },
    { date: "11/23（日）", event: "県中長距離記録会", venue: "県総合メイン", note: "クラブで申込" },
    { date: "12/14（日）", event: "全国中学駅伝", venue: "滋賀県", note: "" },
    { date: "12/21（日）", event: "全国高校駅伝", venue: "京都市", note: "" },
    { date: "1/11（日）", event: "全国都道府県対抗女子駅伝", venue: "京都市", note: "" },
    { date: "1/18（日）", event: "全国都道府県対抗男子駅伝", venue: "広島市", note: "" },
    { date: "（調整中）", event: "びわ湖クロカン", venue: "滋賀県", note: "" },
];

export default function SchedulePage() {
    return (
        <main className="w-full min-h-screen bg-pure-white pb-20 pt-32">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex items-center gap-4 mb-16">
                    <Calendar className="w-8 h-8 text-stride-blue" />
                    <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-soot-black">
                        SCHEDULE
                        <span className="block text-xl md:text-2xl mt-2 text-gray-400 font-sans font-normal">令和7年度 大会等予定</span>
                    </h1>
                </div>

                <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wider">
                            <tr>
                                <th className="p-4 md:p-6 border-b border-gray-200 min-w-[120px]">日程</th>
                                <th className="p-4 md:p-6 border-b border-gray-200 w-full">大会名・行事</th>
                                <th className="p-4 md:p-6 border-b border-gray-200 min-w-[150px]">会場</th>
                                <th className="p-4 md:p-6 border-b border-gray-200 min-w-[150px]">備考</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 font-sans">
                            {SCHEDULE_DATA.map((row, index) => (
                                <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-4 md:p-6 font-bold text-stride-blue whitespace-nowrap">{row.date}</td>
                                    <td className="p-4 md:p-6 font-medium text-soot-black">{row.event}</td>
                                    <td className="p-4 md:p-6 text-sm text-gray-600">{row.venue}</td>
                                    <td className="p-4 md:p-6 text-xs font-bold text-gray-500 whitespace-nowrap">
                                        {row.note && (
                                            <span className="bg-gray-100 px-2 py-1 rounded inline-block">
                                                {row.note}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-8 text-xs text-gray-400 text-right">※日程・会場は変更になる場合があります。</p>
            </div>
        </main>
    );
}
