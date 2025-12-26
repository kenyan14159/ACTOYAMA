'use client'

import { useEffect, useState } from 'react'
import Lenis from 'lenis'

export default function ScrollManager({ children }: { children: React.ReactNode }) {
  const [shouldUseLenis, setShouldUseLenis] = useState(false)

  useEffect(() => {
    // モバイルデバイスや低性能デバイスでは無効化
    const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const isLowEndDevice = typeof window !== 'undefined' && navigator.hardwareConcurrency < 4
    
    if (!isMobile && !isLowEndDevice) {
      setShouldUseLenis(true)
      
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      return () => {
        lenis.destroy()
      }
    }
  }, [])

  return <>{children}</>
}
