'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function HeroContent() {
    const containerRef = useRef<HTMLDivElement>(null)
    const mainTextRef = useRef<HTMLHeadingElement>(null)
    const subTextRef = useRef<HTMLParagraphElement>(null)
    const lineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Simple, elegant fade-up Reveal
        tl.fromTo(mainTextRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
        )
            .fromTo(lineRef.current,
                { width: 0 },
                { width: '4rem', duration: 1, ease: 'power2.out' },
                '-=0.8'
            )
            .fromTo(subTextRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                '-=0.8'
            )

    }, [])

    return (
        <div ref={containerRef} className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-20 max-w-[1400px] mx-auto">

            <div className="flex flex-col items-start">
                <h1 ref={mainTextRef} className="font-display text-[15vw] md:text-[12vw] leading-[0.9] tracking-tighter text-stride-blue font-bold opacity-0">
                    ACTOYAMA
                </h1>

                <div className="mt-8 flex flex-col gap-4">
                    <div ref={lineRef} className="h-[2px] bg-soot-black w-0" />
                    <p ref={subTextRef} className="font-sans text-sm md:text-lg tracking-[0.2em] text-soot-black uppercase opacity-0">
                        Purity of Speed
                        <br />
                        <span className="text-xs md:text-sm text-gray-500 normal-case tracking-normal block mt-1">
                            Track & Field Club for Youth
                        </span>
                    </p>
                </div>
            </div>

        </div>
    )
}
