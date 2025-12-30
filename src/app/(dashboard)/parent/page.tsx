import DashboardLayout from '@/components/layout/DashboardLayout'

export default function ParentDashboard() {
  return (
    <DashboardLayout title="Parent Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Welcome, Parent!</h2>
        <p className="text-gray-600">Monitor your child's progress and school activities.</p>
      </div>

      {/* Children Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Your Children</h3>
          <div className="space-y-4">
            {[
              { name: 'Rahul Sharma', class: '10 A', attendance: '95%', lastTest: 'Math: 92%' },
              { name: 'Priya Sharma', class: '8 B', attendance: '88%', lastTest: 'Science: 85%' }
            ].map((child, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-800">{child.name}</h4>
                  <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">Class {child.class}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-600">Attendance:</span>
                    <span className="font-medium ml-2">{child.attendance}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Last Test:</span>
                    <span className="font-medium ml-2">{child.lastTest}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {[
              { event: 'Parent-Teacher Meeting', date: 'Dec 15, 2023', time: '10:00 AM' },
              { event: 'Annual Sports Day', date: 'Dec 20, 2023', time: '9:00 AM' },
              { event: 'Science Exhibition', date: 'Dec 25, 2023', time: '11:00 AM' }
            ].map((event, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-1">{event.event}</h4>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fee Status */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Fee Status</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Child</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Term</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Due Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { child: 'Rahul Sharma', term: 'Term III', amount: 'Rs. 15,000', dueDate: 'Dec 30, 2023', status: 'Pending' },
                { child: 'Priya Sharma', term: 'Term III', amount: 'Rs. 12,000', dueDate: 'Dec 30, 2023', status: 'Paid' }
              ].map((fee, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="px-4 py-3 text-sm">{fee.child}</td>
                  <td className="px-4 py-3 text-sm">{fee.term}</td>
                  <td className="px-4 py-3 text-sm font-medium">{fee.amount}</td>
                  <td className="px-4 py-3 text-sm">{fee.dueDate}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${fee.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {fee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}