import { User } from '@/types'

const STORAGE_KEY = 'bhrikuti_school_auth'

export const auth = {
  // Store user data
  setUser: (user: User) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    }
  },

  // Get current user
  getUser: (): User | null => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem(STORAGE_KEY)
      return userStr ? JSON.parse(userStr) : null
    }
    return null
  },

  // Check if user is authenticated
  isAuthenticated: (): boolean => {
    return auth.getUser() !== null
  },

  // Check if user has specific role
  hasRole: (role: User['role']): boolean => {
    const user = auth.getUser()
    return user?.role === role
  },

  // Logout user
  logout: () => {
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