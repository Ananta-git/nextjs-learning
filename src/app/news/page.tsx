import Header from '../components/Header';
import {navItems} from '@/data/navItems'
import NewsSection from '../components/NewsSection';
import {newsItems} from '@/data/news'
import Footer from '../components/Footer';

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />
      <main className="flex-grow">
        <NewsSection
         news={newsItems}
         showAll={true} 
        />
      </main>
      <Footer />
    </div>
  );
}
