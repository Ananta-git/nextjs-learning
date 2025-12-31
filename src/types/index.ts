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

export interface Teacher {
  id: string
  email: string
  full_name: string
  phone?: string
  address?: string
  qualification?: string
  specialization?: string
  date_of_birth?: string
  hire_date?: string
  salary?: number
  is_active: boolean
  created_at: string
  updated_at: string
  last_login?: string
}

export interface TeacherSubject {
  id: string
  teacher_id: string
  subject_name: string
  grade: string
  section?: string
  academic_year: string
  created_at: string
}

export interface LoginFormData {
  email: string
  password: string
  rememberMe: boolean
}