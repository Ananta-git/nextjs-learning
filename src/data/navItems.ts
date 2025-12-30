import { NavItem } from '@/types'

export const publicNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
  // { label: 'Login', href: '/login', icon: '🔐' }
]

// Admin Navigation Items
export const adminNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: '📊' },
  { label: 'Students', href: '/admin/students', icon: '👨‍🎓' },
  { label: 'Teachers', href: '/admin/teachers', icon: '👨‍🏫' },
  { label: 'Parents', href: '/admin/parents', icon: '👨‍👩‍👧‍👦' },
  { label: 'Classes', href: '/admin/classes', icon: '🏫' },
  { label: 'Subjects', href: '/admin/subjects', icon: '📚' },
  { label: 'Attendance', href: '/admin/attendance', icon: '📝' },
  { label: 'Exams', href: '/admin/exams', icon: '📝' },
  { label: 'Timetable', href: '/admin/timetable', icon: '📅' },
  { label: 'Reports', href: '/admin/reports', icon: '📈' },
  { label: 'Notifications', href: '/admin/notifications', icon: '🔔' },
  { label: 'Settings', href: '/admin/settings', icon: '⚙️' },
  { label: 'Logout', href: '/logout', icon: '🚪' }
]

export const teacherNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/teacher', icon: '📊' },
  { label: 'My Classes', href: '/teacher/classes', icon: '📚' },
  { label: 'Attendance', href: '/teacher/attendance', icon: '📝' },
  { label: 'Grades', href: '/teacher/grades', icon: '📊' },
  { label: 'Schedule', href: '/teacher/schedule', icon: '📅' },
  { label: 'Logout', href: '/logout', icon: '🚪' }
]

export const studentNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/student', icon: '📊' },
  { label: 'My Classes', href: '/student/classes', icon: '📚' },
  { label: 'Attendance', href: '/student/attendance', icon: '📝' },
  { label: 'Grades', href: '/student/grades', icon: '📊' },
  { label: 'Schedule', href: '/student/schedule', icon: '📅' },
  { label: 'Resources', href: '/student/resources', icon: '📁' },
  { label: 'Logout', href: '/logout', icon: '🚪' }
]

export const parentNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/parent', icon: '📊' },
  { label: 'Children', href: '/parent/children', icon: '👨‍👩‍👧‍👦' },
  { label: 'Attendance', href: '/parent/attendance', icon: '📝' },
  { label: 'Grades', href: '/parent/grades', icon: '📊' },
  { label: 'Fee Status', href: '/parent/fees', icon: '💰' },
  { label: 'Messages', href: '/parent/messages', icon: '💬' },
  { label: 'Logout', href: '/logout', icon: '🚪' }
]
// Helper function to get navigation based on user role
export function getNavItemsByRole(role: string): NavItem[] {
  switch (role) {
    case 'admin':
      return adminNavItems
    case 'teacher':
      return teacherNavItems
    case 'student':
      return studentNavItems
    case 'parent':
      return parentNavItems
    default:
      return publicNavItems
  }
}

// All navigation items for reference
export const allNavItems = {
  public: publicNavItems,
  admin: adminNavItems,
  teacher: teacherNavItems,
  student: studentNavItems,
  parent: parentNavItems
}