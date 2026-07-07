import { Plus, Users, Edit, Trash2 } from "lucide-react"

const trustees = [
  {
    id: "1",
    name: "Dr. Roop Krishen Bhat",
    role: "Managing Trustee",
    category: "Trustee",
  },
  {
    id: "2",
    name: "Sh. RajINDER CHANDER DHAR",
    role: "Treasurer",
    category: "Trustee",
  },
  {
    id: "3",
    name: "Prof. A.N. KHOURO",
    role: "Member",
    category: "Advisory",
  },
]

export default function TrusteesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">
          Trustees & Advisory Committee
        </h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors">
          <Plus className="h-4 w-4" />
          Add Member
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Role
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Category
              </th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {trustees.map((person) => (
              <tr key={person.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-chinar/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-chinar" />
                    </div>
                    <span className="font-medium text-walnut">{person.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{person.role}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      person.category === "Trustee"
                        ? "bg-chinar/10 text-chinar"
                        : "bg-teal-100 text-teal-700"
                    }`}
                  >
                    {person.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
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
