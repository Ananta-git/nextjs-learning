import FeaturesSection from '../components/FeaturesSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { featureItems } from '@/data/news'
import { navItems } from '@/data/navItems'


export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />
      <main className="flex-grow">
        <FeaturesSection 
          features={featureItems} 
          showAll={true} 
        />
      </main>
      <Footer />
    </div>
  )
}