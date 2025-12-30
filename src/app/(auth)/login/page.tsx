'use client'

import { useState } from 'react'
import { LoginFormData, User } from '@/types'
import LoginForm from '@/components/Auth/LoginForm'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/auth'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

const handleLogin = async (formData: LoginFormData) => {
  setIsLoading(true)
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const mockUsers: Record<string, User> = {
      'admin@bhrikuti.edu.np': { id: 1, email: 'admin@bhrikuti.edu.np', name: 'School Admin', role: 'admin' },
      'teacher@bhrikuti.edu.np': { id: 2, email: 'teacher@bhrikuti.edu.np', name: 'John Teacher', role: 'teacher' },
      'student@bhrikuti.edu.np': { id: 3, email: 'student@bhrikuti.edu.np', name: 'Alice Student', role: 'student' },
      'parent@bhrikuti.edu.np': { id: 4, email: 'parent@bhrikuti.edu.np', name: 'Bob Parent', role: 'parent' }
    }

    const user = mockUsers[formData.email]
    
    console.log('Login attempt:', { email: formData.email, userFound: !!user })
    
    if (user && formData.password === 'password123') {
      console.log('Login successful:', user)
      
      // // Store user data
      // localStorage.setItem('user', JSON.stringify(user))
      // localStorage.setItem('isAuthenticated', 'true')


      // Use auth.setUser instead of localStorage directly
      auth.setUser(user)
       
      console.log('Stored user in localStorage:', localStorage.getItem('user'))
      
      // Redirect based on user role
      switch (user.role) {
        case 'admin':
          console.log('Redirecting to /admin')
          router.push('/admin')
          break
        case 'teacher':
          console.log('Redirecting to /teacher')
          router.push('/teacher')
          break
        case 'student':
          console.log('Redirecting to /student')
          router.push('/student')
          break
        case 'parent':
          console.log('Redirecting to /parent')
          router.push('/parent')
          break
        default:
          router.push('/')
      }
    } else {
      console.log('Login failed: Invalid credentials')
      alert('Invalid credentials. Use demo accounts provided.')
    }
  } catch (error) {
    console.error('Login error:', error)
    alert('Login failed. Please try again.')
  } finally {
    setIsLoading(false)
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <LoginForm onLogin={handleLogin} isLoading={isLoading} />
    </div>
  )
}