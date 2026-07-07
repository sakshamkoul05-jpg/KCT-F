import Link from "next/link"
import { Plus, FileText, Edit, Trash2 } from "lucide-react"

// Demo data - will be replaced with Supabase queries
const articles = [
  {
    id: "1",
    title: "Cultural Heritage of Kashmir",
    category: "Heritage",
    status: "published",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Preserving Kashmiri Language in Diaspora",
    category: "Language",
    status: "published",
    createdAt: "2024-02-20",
  },
  {
    id: "3",
    title: "The Legacy of Lal Ded",
    category: "Heritage",
    status: "draft",
    createdAt: "2024-03-10",
  },
]

export default function ArticlesPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">
          Articles
        </h2>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Article
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Title
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Category
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Created
              </th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {articles.map((article) => (
              <tr key={article.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <span className="font-medium text-walnut">
                      {article.title}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {article.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      article.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {article.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {article.createdAt}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/articles/${article.id}`}
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
