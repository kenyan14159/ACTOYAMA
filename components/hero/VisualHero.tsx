'use client'
import { useState, useEffect, useMemo } from 'react'

// SLIDES配列をコンポーネント外に定義して、再レンダリング時に再作成されないようにする
const SLIDES = [
    "bg-gradient-to-br from-blue-900 via-stride-blue to-black",
    "bg-gradient-to-tl from-cyan-500 via-blue-600 to-blue-900",
    "bg-gradient-to-r from-blue-800 to-indigo-900"
] as const

export default function VisualHero() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % SLIDES.length)
        }, 5000)
        return () => clearInterval(timer)
    }, []) // SLIDESは依存配列に含めない（コンポーネント外で定義されているため）

    return (
        <div className="relative w-full h-screen overflow-hidden bg-soot-black">
            {/* Slides */}
            {SLIDES.map((bgClass, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${bgClass} ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}

            {/* Content: ACTOYAMA Centered */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <h1 className="text-white font-display font-bold text-[15vw] md:text-[18vw] tracking-tighter leading-none opacity-90 select-none mix-blend-overlay">
                    ACTOYAMA
                </h1>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 text-white">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
            </div>
        </div>
    )
}
