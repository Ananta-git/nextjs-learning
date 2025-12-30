import Header from '../../../components/layout/Header';
import {publicNavItems} from '@/data/navItems'
import NewsSection from '../../../components/sections/NewsSection';
import {newsItems} from '@/data/news'
import Footer from '../../../components/layout/Footer';

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={publicNavItems} />
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
