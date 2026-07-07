"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save, Calendar } from "lucide-react"
import Link from "next/link"

export default function NewEventPage() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    date: "",
    endDate: "",
    location: "",
    category: "Festival",
    image: "",
    status: "draft",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    router.push("/admin/events")
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/events"
            className="p-2 text-gray-400 hover:text-walnut transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <h2 className="font-display text-2xl font-bold text-walnut">
            New Event
          </h2>
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSaving}
          className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
          {isSaving ? "Saving..." : "Save Event"}
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
              placeholder="Event title"
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
              rows={12}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-chinar focus:border-transparent resize-none"
              placeholder="Event description"
            />
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-sm font-medium text-walnut mb-2">
              Featured Image
            </label>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-chinar transition-colors">
              <Calendar className="h-10 w-10 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-500">
                Drag and drop an image, or click to select
              </p>
              <p className="text-xs text-gray-400 mt-1">
                PNG, JPG up to 5MB
              </p>
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
            <h3 className="font-medium text-walnut mb-4">Event Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) =>
                    setForm({ ...form, endDate: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                  placeholder="Event location"
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
                  <option value="Festival">Festival</option>
                  <option value="Workshop">Workshop</option>
                  <option value="Lecture">Lecture</option>
                  <option value="Exhibition">Exhibition</option>
                  <option value="Conference">Conference</option>
                  <option value="Cultural">Cultural</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Slug</label>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                  placeholder="event-slug"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
