import DashboardLayout from '@/components/layout/DashboardLayout'
import { adminNavItems } from '@/data/navItems'
import { DashboardStats } from '@/types'

const stats: DashboardStats[] = [
  { label: 'Total Students', value: '1,245', icon: '👨‍🎓', change: '+5%' },
  { label: 'Total Teachers', value: '68', icon: '👨‍🏫', change: '+2%' },
  { label: 'Active Classes', value: '42', icon: '🏫', change: '+3' },
  { label: 'Pending Tasks', value: '12', icon: '📋', change: '-4' },
  { label: 'Today\'s Attendance', value: '94%', icon: '📝', change: '+1.2%' },
  { label: 'Fee Collection', value: '92%', icon: '💰', change: '+3.5%' }
]

export default function AdminDashboard() {
  return (
    <DashboardLayout navItems={adminNavItems} title="Admin Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Welcome back, Administrator!</h2>
        <p className="text-gray-600">Here's what's happening with your school today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{stat.icon}</div>
              <span className={`px-2 py-1 rounded text-sm font-medium ${
                stat.change?.startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'New student registration', time: '10 minutes ago', user: 'Rahul Sharma' },
            { action: 'Fee payment received', time: '1 hour ago', user: 'Priya Patel' },
            { action: 'Teacher assigned to Class 10', time: '2 hours ago', user: 'Mr. Joshi' },
            { action: 'Exam schedule updated', time: '4 hours ago', user: 'System' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
              <div>
                <p className="font-medium text-gray-800">{activity.action}</p>
                <p className="text-sm text-gray-600">By {activity.user}</p>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}