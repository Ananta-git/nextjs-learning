import FeaturesSection from '../components/FeaturesSection'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { featureItems } from '@/data/news'
import { NavItem } from '@/types'

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
//   { label: 'Academics', href: '/academics' },
//   { label: 'Admissions', href: '/admissions' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' }
]

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