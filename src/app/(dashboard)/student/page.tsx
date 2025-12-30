import DashboardLayout from '@/components/layout/DashboardLayout'

export default function StudentDashboard() {
  return (
    <DashboardLayout title="Student Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Welcome back, Student!</h2>
        <p className="text-gray-600">Check your schedule, assignments, and grades.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Attendance', value: '94%', icon: '📝', color: 'bg-blue-100 text-blue-800' },
          { label: 'Avg. Grade', value: 'A-', icon: '📊', color: 'bg-green-100 text-green-800' },
          { label: 'Pending Assignments', value: '3', icon: '📚', color: 'bg-yellow-100 text-yellow-800' },
          { label: 'Next Exam', value: 'Dec 18', icon: '📝', color: 'bg-purple-100 text-purple-800' }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Today's Classes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            {[
              { time: '9:00 - 10:00', subject: 'Mathematics', teacher: 'Mr. Joshi', room: 'Room 201' },
              { time: '10:00 - 11:00', subject: 'Science', teacher: 'Ms. Patel', room: 'Lab 3' },
              { time: '11:00 - 12:00', subject: 'English', teacher: 'Mr. Sharma', room: 'Room 105' },
              { time: '1:00 - 2:00', subject: 'Computer Science', teacher: 'Mr. Gupta', room: 'Comp Lab' }
            ].map((cls, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition duration-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">{cls.subject}</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{cls.time}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>👨‍🏫 {cls.teacher}</span>
                  <span>🏫 {cls.room}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Grades */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Grades</h3>
          <div className="space-y-3">
            {[
              { subject: 'Mathematics', grade: 'A', score: '92%', date: 'Dec 10, 2023' },
              { subject: 'Science', grade: 'B+', score: '87%', date: 'Dec 8, 2023' },
              { subject: 'English', grade: 'A-', score: '90%', date: 'Dec 5, 2023' },
              { subject: 'Social Studies', grade: 'A', score: '94%', date: 'Dec 3, 2023' }
            ].map((grade, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-800">{grade.subject}</span>
                  <span className="text-xl font-bold text-green-600">{grade.grade}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Score: {grade.score}</span>
                  <span className="text-gray-500">{grade.date}</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: grade.score }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Assignments */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Upcoming Assignments</h3>
          <button className="text-blue-600 hover:text-blue-800 font-medium">View All →</button>
        </div>
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-yellow-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Assignment</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Due Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { subject: 'Science', assignment: 'Lab Report: Chemical Reactions', dueDate: 'Dec 15, 2023', status: 'Pending' },
                  { subject: 'English', assignment: 'Essay: My Favorite Book', dueDate: 'Dec 18, 2023', status: 'In Progress' },
                  { subject: 'Mathematics', assignment: 'Chapter 5 Exercises', dueDate: 'Dec 20, 2023', status: 'Not Started' }
                ].map((item, index) => (
                  <tr key={index} className="border-b border-yellow-100">
                    <td className="px-4 py-3 text-sm font-medium">{item.subject}</td>
                    <td className="px-4 py-3 text-sm">{item.assignment}</td>
                    <td className="px-4 py-3 text-sm">{item.dueDate}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === 'Pending' ? 'bg-red-100 text-red-800' :
                        item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}