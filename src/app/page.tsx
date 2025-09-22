// Simple homepage example - replace the content in src/app/page.tsx
import Header from './components/Header'
import Counter from './components/Counter'
import { NavItem } from '../types'

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' }
]


export default function Home() {
  return (
    <div className='min-h-screen '>
      <Header navItems={navItems}  />
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center my-8'>Welcome to My Website!</h1>
        <p className="text-lg text-center">This is my first Next.js page.</p>
        <Counter />
      </main>
    </div>
  )
}