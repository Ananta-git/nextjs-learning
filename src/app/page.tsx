// Simple homepage example - replace the content in src/app/page.tsx
import Header from './components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Welcome to My Website!</h1>
      <p>This is my first Next.js page.</p>
      <button>Click Me</button>
    </div>
  )
}