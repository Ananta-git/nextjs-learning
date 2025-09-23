// Simple homepage example - replace the content in src/app/page.tsx
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import { NavItem } from '../types'
import {newsItems, featureItems} from '../data/news'

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features'},
  // { label: 'Academics', href: '/academics' },
  // { label: 'Admissions', href: '/admissions' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' }
]


export default function Home() {
  return (
    <div className='min-h-screen flex flex-col '>
      <Header navItems={navItems}  />
      <main className='flex-grow'>
        <HeroSection />
        <FeaturesSection features={featureItems} />
        <NewsSection news={newsItems} />
      </main>
      <Footer />
    </div>
  )
}