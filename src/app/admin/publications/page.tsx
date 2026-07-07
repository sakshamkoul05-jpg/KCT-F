import Link from "next/link"
import { Plus, BookOpen, Edit, Trash2, Download } from "lucide-react"

const publications = [
  {
    id: "1",
    title: "Cultural Heritage of Kashmir",
    author: "Dr. Roop Krishen Bhat",
    type: "Book",
    year: "2018",
    status: "published",
    downloads: 1234,
  },
  {
    id: "2",
    title: "Kashmiri Grammar",
    author: "Dr. R.K. Bhat",
    type: "Book",
    year: "2019",
    status: "published",
    downloads: 892,
  },
]

export default function PublicationsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">
          Publications
        </h2>
        <Link
          href="/admin/publications/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Publication
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Publication
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Type
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Year
              </th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">
                Downloads
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
            {publications.map((pub) => (
              <tr key={pub.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-chinar" />
                    <div>
                      <p className="font-medium text-walnut">{pub.title}</p>
                      <p className="text-sm text-gray-500">{pub.author}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    {pub.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{pub.year}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Download className="h-4 w-4" />
                    {pub.downloads.toLocaleString()}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    {pub.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/publications/${pub.id}`}
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
