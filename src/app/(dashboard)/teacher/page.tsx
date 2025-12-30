import DashboardLayout from '@/components/layout/DashboardLayout'

export default function TeacherDashboard() {
  return (
    <DashboardLayout title="Teacher Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Welcome, Teacher!</h2>
        <p className="text-gray-600">Manage your classes, students, and teaching materials.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Classes', value: '4', icon: '🏫', color: 'bg-blue-100 text-blue-800' },
          { label: 'Total Students', value: '120', icon: '👨‍🎓', color: 'bg-green-100 text-green-800' },
          { label: 'Pending Grading', value: '15', icon: '📝', color: 'bg-yellow-100 text-yellow-800' },
          { label: 'Avg. Attendance', value: '92%', icon: '📊', color: 'bg-purple-100 text-purple-800' }
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

      {/* My Classes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">My Classes</h3>
          <div className="space-y-4">
            {[
              { class: '10 A - Mathematics', students: 30, time: '9:00 AM', room: 'Room 201' },
              { class: '9 B - Mathematics', students: 28, time: '11:00 AM', room: 'Room 105' },
              { class: '11 Science - Calculus', students: 25, time: '1:00 PM', room: 'Room 305' },
              { class: '8 C - Basic Math', students: 32, time: '3:00 PM', room: 'Room 108' }
            ].map((cls, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition duration-200">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-gray-800">{cls.class}</h4>
                  <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                    {cls.students} Students
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>⏰ {cls.time}</span>
                  <span>🏫 {cls.room}</span>
                </div>
                <div className="mt-3 flex space-x-2">
                  <button className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">
                    Attendance
                  </button>
                  <button className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200">
                    Assignments
                  </button>
                  <button className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded hover:bg-purple-200">
                    Grades
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Schedule */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            {[
              { time: '9:00 - 10:00', class: '10 A - Mathematics', type: 'Lecture' },
              { time: '10:00 - 11:00', class: '9 B - Mathematics', type: 'Practice' },
              { time: '11:00 - 12:00', class: 'Staff Meeting', type: 'Meeting' },
              { time: '1:00 - 2:00', class: '11 Science - Calculus', type: 'Lecture' },
              { time: '3:00 - 4:00', class: '8 C - Basic Math', type: 'Test' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium text-gray-800">{item.class}</span>
                    <span className="ml-3 text-sm px-2 py-1 rounded bg-gray-100 text-gray-700">
                      {item.type}
                    </span>
                  </div>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{item.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pending Tasks */}
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pending Tasks</h3>
            <div className="space-y-3">
              {[
                { task: 'Grade 10A Math Test', priority: 'High', due: 'Today' },
                { task: 'Prepare Lesson Plan - Calculus', priority: 'Medium', due: 'Tomorrow' },
                { task: 'Submit Monthly Report', priority: 'High', due: 'Dec 15' },
                { task: 'Parent Meeting Preparation', priority: 'Low', due: 'Dec 18' }
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      task.priority === 'High' ? 'bg-red-500' :
                      task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <span className="font-medium">{task.task}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Due: {task.due}</span>
                    <button className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200">
                      Mark Done
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}