// Simple homepage example - replace the content in src/app/page.tsx
import Header from './components/Header'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-100 '>
      <Header />
      <main className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold text-center my-8'>Welcome to My Website!</h1>
        <p className="text-lg text-center">This is my first Next.js page.</p>
      </main>
    </div>
  )
}