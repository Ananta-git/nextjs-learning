export interface NavItem {
  label: string
  href: string
}

export interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
}

export interface FeatureItem {
  title: string
  description: string
  icon: string
}

export interface User {
  id: number
  email: string
  name: string
  role: 'admin' | 'teacher' | 'student' | 'parent'
}

export interface LoginFormData {
  email: string
  password: string
  userType: string
  rememberMe: boolean
}