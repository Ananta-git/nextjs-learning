import { User } from '@/types'

const STORAGE_KEY = 'bhrikuti_school_user'

export const auth = {
  // Store user data
  setUser: (user: User) => {
    if (typeof window !== 'undefined') {
      console.log('Setting user in localStorage:', user)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    }
  },

  // Get current user
  getUser: (): User | null => {
    if (typeof window !== 'undefined') {
      try {
        const userStr = localStorage.getItem(STORAGE_KEY)
        console.log('Getting user from localStorage:', userStr)
        return userStr ? JSON.parse(userStr) : null
      } catch (error) {
        console.error('Error parsing user from localStorage:', error)
        return null
      }
    }
    return null
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return auth.getUser() !== null
  },

  // Clear user data
  clearUser: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY)
    }
  },

  // Get user dashboard path
  getDashboardPath: (): string => {
    const user = auth.getUser()
    if (!user) return '/login'

    switch (user.role) {
      case 'admin': return '/admin'
      case 'teacher': return '/teacher'
      case 'student': return '/student'
      case 'parent': return '/parent'
      default: return '/'
    }
  }
}