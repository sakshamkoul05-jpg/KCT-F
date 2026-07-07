import { Mail, Eye, Trash2, Reply } from "lucide-react"

const messages = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    subject: "Inquiry about heritage",
    date: "2024-03-15",
    read: false,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    subject: "Volunteer opportunity",
    date: "2024-03-14",
    read: true,
  },
]

export default function MessagesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">
          Messages
        </h2>
        <span className="px-3 py-1 bg-chinar text-white text-sm rounded-full">
          {messages.filter((m) => !m.read).length} unread
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                From
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Subject
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {messages.map((msg) => (
              <tr
                key={msg.id}
                className={`hover:bg-gray-50 ${!msg.read ? "bg-chinar/5" : ""}`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Mail
                      className={`h-5 w-5 ${msg.read ? "text-gray-400" : "text-chinar"}`}
                    />
                    <div>
                      <p className={`font-medium ${msg.read ? "text-gray-600" : "text-walnut"}`}>
                        {msg.name}
                      </p>
                      <p className="text-sm text-gray-500">{msg.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm ${msg.read ? "text-gray-600" : "font-medium text-walnut"}`}>
                    {msg.subject}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{msg.date}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-chinar transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                      <Reply className="h-4 w-4" />
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
