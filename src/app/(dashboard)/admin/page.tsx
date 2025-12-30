import DashboardLayout from '@/components/layout/DashboardLayout'

export default function ParentDashboard() {
  return (
    <DashboardLayout title="Parent Dashboard">
          <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">School Management Dashboard</h2>
        <p className="text-gray-600">Manage all aspects of Bhrikuti Secondary School</p>
      </div>

      {/* Admin specific content */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Add New Student', icon: '➕', color: 'bg-green-100 hover:bg-green-200 text-green-800' },
            { label: 'Register Teacher', icon: '👨‍🏫', color: 'bg-blue-100 hover:bg-blue-200 text-blue-800' },
            { label: 'Create Class', icon: '🏫', color: 'bg-purple-100 hover:bg-purple-200 text-purple-800' },
            { label: 'Generate Reports', icon: '📊', color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800' }
          ].map((action, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg transition duration-200 ${action.color} flex flex-col items-center justify-center`}
            >
              <span className="text-2xl mb-2">{action.icon}</span>
              <span className="text-sm font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}







  
