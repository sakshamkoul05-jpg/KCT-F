"use client"

import { useEffect, useState } from "react"
import { Music, Trash2 } from "lucide-react"
import { getAudioLessons, deleteAudioLesson } from "@/lib/actions"

interface Lesson {
  id: string
  title: string
  part: number
  lessonNumber: number
  duration: string | null
}

export default function AudioPage() {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const data = await getAudioLessons()
      setLessons(data)
    } catch { /* empty */ }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this lesson?")) return
    await deleteAudioLesson(id)
    setLessons((prev) => prev.filter((l) => l.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">Audio Lessons</h2>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">Loading...</div>
        ) : lessons.length === 0 ? (
          <div className="p-12 text-center text-gray-400">No audio lessons yet.</div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Lesson</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Part</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Duration</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {lessons.map((lesson) => (
                <tr key={lesson.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-chinar/10 flex items-center justify-center">
                        <Music className="h-5 w-5 text-chinar" />
                      </div>
                      <div>
                        <p className="font-medium text-walnut">{lesson.title}</p>
                        <p className="text-xs text-gray-400">Lesson {lesson.lessonNumber}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      Part {lesson.part}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{lesson.duration || "—"}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleDelete(lesson.id)}
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
