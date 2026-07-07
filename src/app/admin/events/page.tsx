import Link from "next/link"
import { Plus, Calendar, Edit, Trash2, Eye } from "lucide-react"

const events = [
  {
    id: "1",
    title: "Heritage Festival 2024",
    date: "2024-03-15",
    location: "Srinagar",
    status: "published",
    category: "Festival",
  },
  {
    id: "2",
    title: "Kashmiri Language Workshop",
    date: "2024-04-20",
    location: "Jammu",
    status: "draft",
    category: "Workshop",
  },
]

export default function EventsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">Events</h2>
        <Link
          href="/admin/events/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Event
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Event
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Location
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Category
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
            {events.map((event) => (
              <tr key={event.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-chinar" />
                    <span className="font-medium text-walnut">{event.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{event.date}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{event.location}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-chinar/10 text-chinar text-xs rounded-full">
                    {event.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      event.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/events/${event.id}`}
                      target="_blank"
                      className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`/admin/events/${event.id}`}
                      className="p-2 text-gray-400 hover:text-chinar transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
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
