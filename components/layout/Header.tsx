'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
    { label: 'ホーム', href: '/' },
    { label: 'ニュース', href: '/news' },
    { label: '大会結果', href: '/results' },
    { label: '令和７年度予定', href: '/schedule' },
    { label: 'スタッフ', href: '/staff' },
    { label: 'クラブ 歴代記録集', href: '/records' },
    { label: '入会案内', href: '/join' },
    { label: 'お問い合わせ', href: '/contact' },
    { label: '保護者の方へ', href: '/parents' },
    { label: 'クラブのあしあと', href: '/history' },
]

export default function Header() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Set initial state based on window position to avoid flash
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        // Check initially
        handleScroll()

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // メニューが開いている時はスクロールを無効化し、フォーカストラップを実装
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
            
            // フォーカストラップの実装
            const mobileMenu = document.getElementById('mobile-menu')
            if (!mobileMenu) return

            const focusableElements = mobileMenu.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )
            
            if (focusableElements.length === 0) return

            const firstFocusable = focusableElements[0]
            const lastFocusable = focusableElements[focusableElements.length - 1]

            // 最初の要素にフォーカス
            firstFocusable.focus()

            const handleTabKey = (e: KeyboardEvent) => {
                if (e.key !== 'Tab') return

                if (e.shiftKey) {
                    // Shift + Tab: 前の要素へ
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault()
                        lastFocusable.focus()
                    }
                } else {
                    // Tab: 次の要素へ
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault()
                        firstFocusable.focus()
                    }
                }
            }

            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    setIsMobileMenuOpen(false)
                }
            }

            document.addEventListener('keydown', handleTabKey)
            document.addEventListener('keydown', handleEscape)

            return () => {
                document.removeEventListener('keydown', handleTabKey)
                document.removeEventListener('keydown', handleEscape)
                document.body.style.overflow = ''
            }
        } else {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    // On subpages, always use the solid header style
    const useSolidStyle = !isHomePage || isScrolled

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${useSolidStyle ? 'bg-pure-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">

                {/* Brand */}
                <Link
                    href="/"
                    className={`font-display font-bold text-2xl tracking-tighter z-50 transition-colors duration-300 ${useSolidStyle ? 'text-stride-blue' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="A.C.TOYAMA ホームページへ"
                >
                    A.C.TOYAMA
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6" aria-label="メインナビゲーション">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`text-sm font-bold transition-colors relative group duration-300 ${useSolidStyle ? 'text-soot-black hover:text-stride-blue' : 'text-white/90 hover:text-white'}`}
                            aria-label={item.label}
                        >
                            {item.label}
                            <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${useSolidStyle ? 'bg-stride-blue' : 'bg-white'}`} />
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Trigger */}
                <button 
                    className={`lg:hidden p-2 transition-colors duration-300 ${useSolidStyle ? 'text-soot-black' : 'text-white'}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div 
                id="mobile-menu"
                className={`lg:hidden fixed inset-0 top-[72px] bg-pure-white z-40 transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                aria-hidden={!isMobileMenuOpen}
            >
                <nav className="flex flex-col p-6" aria-label="モバイルナビゲーション">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="py-4 px-4 text-lg font-bold text-soot-black border-b border-gray-100 hover:text-stride-blue transition-colors focus:outline-none focus:ring-2 focus:ring-stride-blue focus:ring-inset"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label={item.label}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}
