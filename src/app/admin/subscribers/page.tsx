import { Mail, Trash2, Download } from "lucide-react"

const subscribers = [
  { id: "1", email: "user1@example.com", date: "2024-03-15", status: "active" },
  { id: "2", email: "user2@example.com", date: "2024-03-14", status: "active" },
  { id: "3", email: "user3@example.com", date: "2024-03-10", status: "unsubscribed" },
]

export default function SubscribersPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">
          Newsletter Subscribers
        </h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-walnut rounded-lg hover:bg-gray-50 transition-colors">
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Email
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Subscribed
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
            {subscribers.map((sub) => (
              <tr key={sub.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="font-medium text-walnut">{sub.email}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{sub.date}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      sub.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {sub.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
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
