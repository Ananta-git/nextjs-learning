export interface NavItem {
  label: string
  href: string
  icon?: string
  roles?: string[] // Roles that can access this item
}

export interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  author?: string
}

export interface FeatureItem {
  id: number
  title: string
  description: string
  icon: string
}

export interface DisplayOptions {
    showAll?: boolean;
    maxDisplay?: number;
    // any other options...
}

export interface User {
  id: number
  email: string
  name: string
  role: 'admin' | 'teacher' | 'student' | 'parent'
  avatar?: string
}

export interface LoginFormData {
  email: string
  password: string
  userType: User['role']
  rememberMe: boolean
}

export interface DashboardStats {
  label: string
  value: number | string
  icon: string
  change?: string
}