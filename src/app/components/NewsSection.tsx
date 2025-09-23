import Link from 'next/link';
import { NewsItem } from '@/types';

interface NewsSectionProps{
    news: NewsItem[]
}   

export default function NewsSection({news}: NewsSectionProps){
    return(
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-300"> Latest News & Announcements</h2>
                    <Link href="/news" className="text-blue-600 hover:text-blue-800 font-semibold">
                        View All →
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {news.map((item) => (
                        <article 
                            key={item.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200"
                        >
                            <div className="p-6">
                                <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
                                    {item.category}
                                </span>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>.
                                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <Link
                                        href={'/news/${item.id}'}
                                        className="text-blue-600 hover:text-blue-800 font-semibold"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}