'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// SLIDES配列をコンポーネント外に定義して、再レンダリング時に再作成されないようにする
type Slide = {
    title: string
    subtitle: string
    details: string
    subDetail?: string
    imageColor: string
}

const SLIDES: Slide[] = [
    {
        title: "2025 白馬クロカン遠征\n(7/26~27)",
        subtitle: "駅伝の部\n中学生男女 優勝・ 小学生第10位",
        details: "【個人の部】\n★5・6年女子1.5㎞：松永 こころ 第１位\n★中学男子4㎞：岩本 泉來 第2位・幸村 颯大 第7位・寺崎 晴仁 第8位\n★中学女子4㎞：谷口 小麦 第4位・松永 未来 第7位",
        subDetail: "やっぱり駅伝は面白い！",
        imageColor: "from-blue-900 to-slate-900"
    },
    {
        title: "2025年シーズン開幕",
        subtitle: "GOAL SETTING",
        details: "2025年シーズンも各自の目標をしっかり持って頑張ろう！",
        imageColor: "from-stride-blue to-cyan-600"
    }
]

export default function MainSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)

    return (
        <div className="relative w-full min-h-[85vh] overflow-hidden bg-soot-black text-pure-white rounded-b-[40px] shadow-2xl">
            {/* Slides */}
            <div className="relative w-full h-full">
                <div className={`absolute inset-0 w-full h-full flex flex-col justify-center items-center p-6 md:p-20 transition-all duration-700 bg-gradient-to-br ${SLIDES[currentSlide].imageColor}`}>
                    <div className="max-w-5xl w-full z-10 pt-20">
                        <span className="inline-block py-1 px-4 border border-white/20 rounded-full text-xs tracking-[0.2em] uppercase mb-8 backdrop-blur-md bg-white/5">
                            LATEST TOPICS
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold font-display mb-6 leading-[1.1] whitespace-pre-wrap">
                            {SLIDES[currentSlide].title}
                        </h2>
                        <p className="text-xl md:text-3xl font-bold text-volt-green mb-8 whitespace-pre-wrap leading-relaxed">
                            {SLIDES[currentSlide].subtitle}
                        </p>
                        <div className="text-base md:text-lg leading-loose opacity-90 whitespace-pre-wrap border-l-2 border-white/20 pl-6 max-w-3xl">
                            {SLIDES[currentSlide].details}
                        </div>
                        {SLIDES[currentSlide].subDetail && (
                            <p className="mt-8 text-xl font-bold italic text-sky-200">
                                {SLIDES[currentSlide].subDetail}
                            </p>
                        )}
                    </div>

                    {/* Background Text Decor */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold opacity-[0.03] pointer-events-none select-none whitespace-nowrap font-display">
                        ACTOYAMA
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-10 right-6 md:right-10 flex gap-4 z-20">
                <button
                    onClick={prevSlide}
                    aria-label="前のスライドへ"
                    className="group relative w-14 h-14 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-stride-blue transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                >
                    <ChevronLeft size={24} />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Previous</span>
                </button>
                <button
                    onClick={nextSlide}
                    aria-label="次のスライドへ"
                    className="group relative w-14 h-14 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-stride-blue transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                >
                    <ChevronRight size={24} />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Next</span>
                </button>
            </div>
        </div>
    )
}
