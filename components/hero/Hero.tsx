'use client'

import HeroContent from './HeroContent'

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-pure-white overflow-hidden">
            {/* Background Decor - Minimalist Blue Shape */}
            <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-b from-sky-mist to-transparent opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-stride-blue blur-[120px] opacity-10 rounded-full pointer-events-none" />

            {/* Content Layer */}
            <HeroContent />

        </section>
    )
}
