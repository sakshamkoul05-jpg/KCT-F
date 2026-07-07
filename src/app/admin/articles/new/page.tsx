"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save, Eye } from "lucide-react"
import Link from "next/link"

export default function NewArticlePage() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)
  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    author: "",
    category: "Heritage",
    tags: "",
    seoTitle: "",
    seoDescription: "",
    status: "draft",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    // TODO: Implement API call to save article
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    router.push("/admin/articles")
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "")
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/articles"
            className="p-2 text-gray-400 hover:text-walnut transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h2 className="font-display text-2xl font-bold text-walnut">
            New Article
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-walnut rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Eye className="h-4 w-4" />
            Preview
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSaving}
            className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {isSaving ? "Saving..." : "Save Article"}
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-walnut mb-2">
              Title
            </label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => {
                setForm({ ...form, title: e.target.value })
                if (!form.slug) {
                  setForm((prev) => ({
                    ...prev,
                    slug: generateSlug(e.target.value),
                  }))
                }
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent"
              placeholder="Article title"
            />
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-walnut mb-2">
              Content
            </label>
            <textarea
              value={form.content}
              onChange={(e) =>
                setForm({ ...form, content: e.target.value })
              }
              rows={20}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent resize-none"
              placeholder="Write your article content here... (Markdown supported)"
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
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

          {/* Meta */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-medium text-walnut mb-4">Meta Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Slug</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                />
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
                  <option value="Events">Events</option>
                  <option value="Research">Research</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Author
                </label>
                <input
                  type="text"
                  value={form.author}
                  onChange={(e) =>
                    setForm({ ...form, author: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                  placeholder="Author name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(e) => setForm({ ...form, tags: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                  placeholder="kashmir, heritage, culture"
                />
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-medium text-walnut mb-4">SEO</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  SEO Title
                </label>
                <input
                  type="text"
                  value={form.seoTitle}
                  onChange={(e) =>
                    setForm({ ...form, seoTitle: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                  placeholder="SEO title"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  SEO Description
                </label>
                <textarea
                  value={form.seoDescription}
                  onChange={(e) =>
                    setForm({ ...form, seoDescription: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar resize-none"
                  placeholder="SEO description"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
