"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save, Upload } from "lucide-react"
import Link from "next/link"

export default function NewPublicationPage() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    type: "Book",
    year: "",
    isbn: "",
    pages: "",
    language: "English",
    category: "Heritage",
    coverImage: "",
    fileUrl: "",
    status: "draft",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    router.push("/admin/publications")
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/publications"
            className="p-2 text-gray-400 hover:text-walnut transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h2 className="font-display text-2xl font-bold text-walnut">
            New Publication
          </h2>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSaving}
          className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
          {isSaving ? "Saving..." : "Save Publication"}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-walnut mb-2">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent"
              placeholder="Publication title"
            />
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-walnut mb-2">
              Description
            </label>
            <textarea
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              rows={10}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent resize-none"
              placeholder="Publication description"
            />
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-walnut mb-2">
              Cover Image
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-chinar transition-colors">
              <Upload className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">
                Drag and drop cover image, or click to select
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-walnut mb-2">
              PDF File
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-chinar transition-colors">
              <Upload className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">
                Upload PDF file for download
              </p>
              <p className="text-xs text-gray-400 mt-1">PDF up to 50MB</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-walnut mb-2">
              Status
            </label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-chinar"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-medium text-walnut mb-4">Publication Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Author(s)
                </label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) => setForm({ ...form, author: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                  placeholder="Author names"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Type</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                >
                  <option value="Book">Book</option>
                  <option value="Journal">Journal</option>
                  <option value="Article">Article</option>
                  <option value="Report">Report</option>
                  <option value="Newsletter">Newsletter</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Year</label>
                <input
                  type="number"
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                  placeholder="2024"
                  min="1900"
                  max="2030"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  ISBN/ISSN
                </label>
                <input
                  type="text"
                  value={form.isbn}
                  onChange={(e) => setForm({ ...form, isbn: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                  placeholder="ISBN number"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Pages</label>
                <input
                  type="number"
                  value={form.pages}
                  onChange={(e) => setForm({ ...form, pages: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                  placeholder="Number of pages"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Language
                </label>
                <select
                  value={form.language}
                  onChange={(e) =>
                    setForm({ ...form, language: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                >
                  <option value="English">English</option>
                  <option value="Kashmiri">Kashmiri</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Urdu">Urdu</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Category
                </label>
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                >
                  <option value="Heritage">Heritage</option>
                  <option value="Language">Language</option>
                  <option value="Culture">Culture</option>
                  <option value="Literature">Literature</option>
                  <option value="Music">Music</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
