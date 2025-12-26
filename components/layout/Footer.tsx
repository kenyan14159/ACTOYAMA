import Link from 'next/link'

const FOOTER_LINKS = [
    { name: 'HOME', href: '/' },
    { name: 'SCHEDULE', href: '/schedule' },
    { name: 'STAFF', href: '/staff' },
    { name: 'RECORDS', href: '/records' },
    { name: 'JOIN US', href: '/join' },
]

export default function Footer() {
    return (
        <footer className="bg-pure-white pt-32 pb-12 px-6 border-t border-gray-100">
            <div className="container mx-auto max-w-6xl">

                <div className="grid md:grid-cols-2 gap-20 mb-20">
                    {/* Left: Brand & Address */}
                    <div>
                        <Link href="/" className="inline-block font-display text-4xl font-bold text-stride-blue tracking-tighter mb-8">
                            A.C.TOYAMA
                        </Link>
                        <address className="not-italic text-gray-500 leading-relaxed font-sans text-sm">
                            Toyama, Japan<br />
                            Track & Field Club for Youth
                        </address>

                        {/* KID Section Link (Mini) */}
                        <div className="mt-8">
                            <Link href="/kid" className="inline-flex items-center text-sm font-bold text-soot-black hover:text-stride-blue transition-colors group">
                                <span className="w-2 h-2 rounded-full bg-stride-blue mr-3 group-hover:scale-150 transition-transform" />
                                FOR KIDS (Show Detail)
                            </Link>
                        </div>
                    </div>

                    {/* Right: Navigation */}
                    <div className="flex flex-col items-start md:items-end gap-4">
                        {FOOTER_LINKS.map(link => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-3xl md:text-5xl font-display font-bold text-gray-200 hover:text-stride-blue transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-end border-t border-gray-100 pt-8">
                    <p className="text-xs text-gray-400 font-sans tracking-wide">
                        © 2025 A.C.TOYAMA. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/contact" className="text-xs font-bold text-soot-black hover:text-stride-blue">CONTACT</Link>
                        <Link href="#" className="text-xs font-bold text-soot-black hover:text-stride-blue">INSTAGRAM</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
