'use client'

import { useState } from 'react'
import { LoginFormData, User } from '@/types'
import LoginForm from '../../../components/Auth/LoginForm'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (formData: LoginFormData) => {
    setIsLoading(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Mock authentication - in real app, this would be an API call
      const mockUsers: Record<string, User> = {
        'admin@bhrikuti.edu.np': { id: 1, email: 'admin@bhrikuti.edu.np', name: 'School Admin', role: 'admin' },
        'teacher@bhrikuti.edu.np': { id: 2, email: 'teacher@bhrikuti.edu.np', name: 'John Teacher', role: 'teacher' },
        'student@bhrikuti.edu.np': { id: 3, email: 'student@bhrikuti.edu.np', name: 'Alice Student', role: 'student' },
        'parent@bhrikuti.edu.np': { id: 4, email: 'parent@bhrikuti.edu.np', name: 'Bob Parent', role: 'parent' }
      }

      const user = mockUsers[formData.email]
      
      if (user && formData.password === 'password123') {
        // Store user data in localStorage (in real app, use secure method)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('isAuthenticated', 'true')
        
        // Redirect based on user role
        switch (user.role) {
          case 'admin':
            router.push('/admin/dashboard')
            break
          case 'teacher':
            router.push('/teacher/dashboard')
            break
          case 'student':
            router.push('/student/dashboard')
            break
          case 'parent':
            router.push('/parent/dashboard')
            break
          default:
            router.push('/')
        }
      } else {
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