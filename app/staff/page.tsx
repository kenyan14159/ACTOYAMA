import { Users } from 'lucide-react';

export const metadata = {
    title: 'スタッフ紹介 | A.C.TOYAMA',
    description: 'A.C.TOYAMAのコーチ・スタッフ紹介ページです。',
};

const STAFF_DATA = [
    { name: "宮前 代表", role: "クラブ代表・中長距離コーチ", desc: "＊指導者資格保有", highlight: true },
    { name: "成瀬 コーチ", role: "短距離小学生ヘッドコーチ", desc: "＊指導者資格保有" },
    { name: "前田 コーチ", role: "短距離中学生ヘッドコーチ", desc: "＊指導者資格保有" },
    { name: "大島 コーチ", role: "小学生短距離コーチ", desc: "" },
    { name: "清水 コーチ", role: "小学生短距離コーチ", desc: "元、10秒台スプリンター" },
    { name: "中川 コーチ", role: "小学生短距離コーチ", desc: "クラブOB。短距離組のお兄さん的な存在。＊指導者資格保有" },
    { name: "高野 コーチ", role: "短距離コーチ・ハードルコーチ", desc: "＊指導者資格保有" },
    { name: "谷 コーチ", role: "小学生短距離", desc: "子供達と一緒に汗を流し、指導してくれます。＊指導者資格保有" },
    { name: "田村 コーチ", role: "長距離コーチ", desc: "クラブOB。長距離組のお兄さん的な存在。" },
    { name: "佐渡 コーチ", role: "KIDS担当コーチ", desc: "サブ3のエリート市民ランナー。＊指導者資格保有" },
    { name: "金子 コーチ", role: "KIDS担当コーチ", desc: "元県内屈指の市民ランナー。未来ある子供達を指導してくれます。" },
    { name: "岩山 コーチ", role: "KIDS担当コーチ", desc: "クラブOG。多忙の中、子供達をみてくれてます。" },
    { name: "宮崎 コーチ", role: "長距離兼マラソン部ヘッドコーチ", desc: "各レースで快走中。高山100kmの優勝者でもあり、ランニング界のレジェンド。" },
    { name: "杉谷 コーチ", role: "長距離コーチ", desc: "クラブOG。IHや全国駅伝を快走した実力者。長距離組のお姉さん的な存在。＊管理栄養士" },
];

export default function StaffPage() {
    return (
        <main className="w-full min-h-screen bg-pure-white pb-20 pt-32">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex items-center gap-4 mb-20">
                    <Users className="w-8 h-8 text-stride-blue" />
                    <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-soot-black">
                        STAFF
                        <span className="block text-xl md:text-2xl mt-2 text-gray-400 font-sans font-normal">コーチ・スタッフ紹介</span>
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {STAFF_DATA.map((staff, index) => (
                        <div
                            key={index}
                            className={`group p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1 ${staff.highlight ? 'bg-stride-blue text-white ring-4 ring-offset-4 ring-stride-blue/20' : 'bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5'}`}
                        >
                            <h3 className={`text-2xl font-bold font-display mb-2 ${staff.highlight ? 'text-white' : 'text-stride-blue'}`}>
                                {staff.name}
                            </h3>
                            <p className={`text-sm font-bold mb-4 ${staff.highlight ? 'text-blue-200' : 'text-gray-500'}`}>
                                {staff.role}
                            </p>
                            <p className={`text-sm leading-relaxed ${staff.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                                {staff.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Club Representative Info */}
                <div className="border-t border-gray-100 pt-16 mt-16 text-center">
                    <p className="text-sm font-bold text-gray-400 mb-2">CLUB REPRESENTATIVE</p>
                    <h2 className="text-xl md:text-3xl font-bold font-display text-soot-black">
                        クラブ代表　宮前　仁
                        <span className="block text-sm md:text-lg text-gray-400 mt-1 font-sans font-normal">（みやまえ　ひとし）</span>
                    </h2>
                </div>

            </div>
        </main>
    );
}
