"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Plus, BookOpen, Trash2 } from "lucide-react"
import { getPublications, deletePublication } from "@/lib/actions"

interface Publication {
  id: string
  title: string
  author: string | null
  category: string | null
  year: number | null
  createdAt: string
}

export default function PublicationsPage() {
  const [pubs, setPubs] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const data = await getPublications()
      setPubs(data)
    } catch { /* empty */ }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this publication?")) return
    await deletePublication(id)
    setPubs((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">Publications</h2>
        <Link
          href="/admin/publications/new"
          className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Publication
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading...</div>
        ) : pubs.length === 0 ? (
          <div className="p-12 text-center text-gray-400">No publications yet.</div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Publication</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Category</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Year</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {pubs.map((pub) => (
                <tr key={pub.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-chinar" />
                      <div>
                        <p className="font-medium text-walnut">{pub.title}</p>
                        <p className="text-sm text-gray-500">{pub.author || "—"}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {pub.category || "—"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{pub.year || "—"}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleDelete(pub.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
