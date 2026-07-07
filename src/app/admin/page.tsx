"use client"

import { useEffect, useState } from "react"
import {
  FileText,
  Calendar,
  BookOpen,
  Image,
  Music,
  Users,
  MessageSquare,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { getDashboardStats } from "@/lib/actions"

const statConfigs = [
  { label: "Articles", icon: FileText, href: "/admin/articles", color: "bg-blue-500" },
  { label: "Events", icon: Calendar, href: "/admin/events", color: "bg-green-500" },
  { label: "Publications", icon: BookOpen, href: "/admin/publications", color: "bg-purple-500" },
  { label: "Gallery Photos", icon: Image, href: "/admin/gallery", color: "bg-pink-500" },
  { label: "Audio Lessons", icon: Music, href: "/admin/audio", color: "bg-orange-500" },
  { label: "Trustees", icon: Users, href: "/admin/trustees", color: "bg-teal-500" },
  { label: "Messages", icon: MessageSquare, href: "/admin/messages", color: "bg-red-500" },
  { label: "Subscribers", icon: Mail, href: "/admin/subscribers", color: "bg-indigo-500" },
]

const quickActions = [
  { label: "New Article", href: "/admin/articles/new", icon: FileText },
  { label: "New Event", href: "/admin/events/new", icon: Calendar },
  { label: "New Publication", href: "/admin/publications/new", icon: BookOpen },
  { label: "Upload Media", href: "/admin/gallery", icon: Image },
]

export default function AdminDashboard() {
  const [stats, setStats] = useState<Record<string, number> | null>(null)

  useEffect(() => {
    getDashboardStats()
      .then(setStats)
      .catch(() => setStats(null))
  }, [])

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statConfigs.map((stat) => {
          const key = stat.label.toLowerCase().replace(/\s/g, "_").replace("gallery_photos", "photos").replace("audio_lessons", "lessons")
          const countMap: Record<string, string> = {
            Articles: "articles",
            Events: "events",
            Publications: "publications",
            "Gallery Photos": "photos",
            "Audio Lessons": "lessons",
            Trustees: "trustees",
            Messages: "messages",
            Subscribers: "subscribers",
          }
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-3xl font-display font-bold text-walnut mt-1">
                    {stats !== null ? (stats[countMap[stat.label]] ?? 0) : "—"}
                  </p>
                </div>
                <div
                  className={`h-12 w-12 rounded-xl ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
        <h2 className="font-display text-lg font-semibold text-walnut mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:border-chinar hover:bg-chinar/5 transition-colors"
            >
              <action.icon className="h-5 w-5 text-chinar" />
              <span className="text-sm font-medium text-walnut">
                {action.label}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="font-display text-lg font-semibold text-walnut mb-4">
          Recent Activity
        </h2>
        <div className="text-center py-12 text-gray-400">
          {stats && Object.values(stats).every((v) => v === 0) ? (
            <>
              <p>No content yet.</p>
              <p className="text-sm mt-2">
                Start by adding articles, events, or uploading media.
              </p>
            </>
          ) : (
            <p className="text-sm">Dashboard loaded successfully.</p>
          )}
        </div>
      </div>
    </div>
  )
}
