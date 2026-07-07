import { Plus, Music, Edit, Trash2, Play, Upload } from "lucide-react"

const lessons = [
  { id: "1", title: "Lesson 1: Introduction", part: 1, duration: "5:30", status: "published" },
  { id: "2", title: "Lesson 2: Basic Phrases", part: 1, duration: "4:45", status: "published" },
  { id: "3", title: "Lesson 3: Greetings", part: 1, duration: "6:15", status: "draft" },
]

export default function AudioPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">
          Audio Lessons
        </h2>
        <div className="flex gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-walnut rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="h-4 w-4" />
            Upload Audio
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors">
            <Plus className="h-4 w-4" />
            New Lesson
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Lesson
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Part
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Duration
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {lessons.map((lesson) => (
              <tr key={lesson.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-chinar/10 flex items-center justify-center">
                      <Music className="h-5 w-5 text-chinar" />
                    </div>
                    <div>
                      <p className="font-medium text-walnut">{lesson.title}</p>
                      <p className="text-xs text-gray-400">Spoken Kashmiri</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    Part {lesson.part}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {lesson.duration}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      lesson.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {lesson.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-chinar transition-colors">
                      <Play className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-chinar transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
