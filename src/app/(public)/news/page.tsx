import Header from '../../../components/layout/Header';
import {navItems} from '@/data/navItems'
import NewsSection from '../../../components/sections/NewsSection';
import {newsItems} from '@/data/news'
import Footer from '../../../components/layout/Footer';

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
