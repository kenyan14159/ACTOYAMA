interface NewsItemProps {
    date: string
    title: string
    content: string
}

export default function NewsItem({ date, title, content }: NewsItemProps) {
    return (
        <article className="group py-8 border-b border-gray-100 hover:bg-sky-50/30 transition-colors px-4">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4">
                <time className="text-stride-blue font-bold font-display tracking-widest text-sm shrink-0 w-32">
                    {date}
                </time>
                <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-stride-blue transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">
                        {content}
                    </p>
                </div>
            </div>
        </article>
    )
}
