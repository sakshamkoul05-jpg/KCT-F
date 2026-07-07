"use client"

import { useState } from "react"
import { Save, Globe, Mail, Phone, MapPin } from "lucide-react"

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false)
  const [form, setForm] = useState({
    siteName: "Kashmir Cultural Trust",
    siteDescription:
      "Preserving and promoting the rich cultural heritage of Kashmir",
    contactEmail: "kmshr.heritage@gmail.com",
    contactPhone: "+91 9419279044",
    address: "471-Vinayak Nagar, Muthi, Jammu-181205",
    facebook: "https://facebook.com/kashmirculturaltrust",
    instagram: "",
    youtube: "",
    twitter: "",
    primaryColor: "#7B2D26",
    secondaryColor: "#5C4033",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">Settings</h2>
        <button
          onClick={handleSubmit}
          disabled={isSaving}
          className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
          {isSaving ? "Saving..." : "Save Settings"}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-medium text-walnut mb-4 flex items-center gap-2">
            <Globe className="h-5 w-5 text-chinar" />
            General Settings
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Site Name
              </label>
              <input
                type="text"
                value={form.siteName}
                onChange={(e) =>
                  setForm({ ...form, siteName: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Site Description
              </label>
              <textarea
                value={form.siteDescription}
                onChange={(e) =>
                  setForm({ ...form, siteDescription: e.target.value })
                }
                rows={3}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar resize-none"
              />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-medium text-walnut mb-4 flex items-center gap-2">
            <Phone className="h-5 w-5 text-chinar" />
            Contact Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={form.contactEmail}
                onChange={(e) =>
                  setForm({ ...form, contactEmail: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={form.contactPhone}
                onChange={(e) =>
                  setForm({ ...form, contactPhone: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Address
              </label>
              <textarea
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar resize-none"
              />
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-medium text-walnut mb-4">Social Media</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Facebook URL
              </label>
              <input
                type="url"
                value={form.facebook}
                onChange={(e) => setForm({ ...form, facebook: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Instagram URL
              </label>
              <input
                type="url"
                value={form.instagram}
                onChange={(e) =>
                  setForm({ ...form, instagram: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                YouTube URL
              </label>
              <input
                type="url"
                value={form.youtube}
                onChange={(e) => setForm({ ...form, youtube: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Twitter URL
              </label>
              <input
                type="url"
                value={form.twitter}
                onChange={(e) => setForm({ ...form, twitter: e.target.value })}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
              />
            </div>
          </div>
        </div>

        {/* Branding */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="font-medium text-walnut mb-4">Branding</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Primary Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={form.primaryColor}
                  onChange={(e) =>
                    setForm({ ...form, primaryColor: e.target.value })
                  }
                  className="h-10 w-10 rounded border border-gray-200 cursor-pointer"
                />
                <input
                  type="text"
                  value={form.primaryColor}
                  onChange={(e) =>
                    setForm({ ...form, primaryColor: e.target.value })
                  }
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">
                Secondary Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={form.secondaryColor}
                  onChange={(e) =>
                    setForm({ ...form, secondaryColor: e.target.value })
                  }
                  className="h-10 w-10 rounded border border-gray-200 cursor-pointer"
                />
                <input
                  type="text"
                  value={form.secondaryColor}
                  onChange={(e) =>
                    setForm({ ...form, secondaryColor: e.target.value })
                  }
                  className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-chinar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
