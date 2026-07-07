"use client"

import { useEffect, useState } from "react"
import { Mail, Trash2 } from "lucide-react"
import { getMessages, markMessageRead, deleteMessage } from "@/lib/actions"

interface Message {
  id: string
  name: string
  email: string
  subject: string | null
  message: string
  read: boolean
  createdAt: string
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<Message | null>(null)

  const load = async () => {
    setLoading(true)
    try {
      const data = await getMessages()
      setMessages(data)
    } catch { /* empty */ }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleRead = async (msg: Message) => {
    setSelected(msg)
    if (!msg.read) {
      await markMessageRead(msg.id)
      setMessages((prev) => prev.map((m) => (m.id === msg.id ? { ...m, read: true } : m)))
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return
    await deleteMessage(id)
    setMessages((prev) => prev.filter((m) => m.id !== id))
    if (selected?.id === id) setSelected(null)
  }

  const unreadCount = messages.filter((m) => !m.read).length

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">Messages</h2>
        {unreadCount > 0 && (
          <span className="px-3 py-1 bg-chinar text-white text-sm rounded-full">
            {unreadCount} unread
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`${selected ? "lg:col-span-1" : "lg:col-span-3"}`}>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {loading ? (
              <div className="p-12 text-center text-gray-400">Loading...</div>
            ) : messages.length === 0 ? (
              <div className="p-12 text-center text-gray-400">No messages yet.</div>
            ) : (
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">From</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Subject</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Date</th>
                    <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {messages.map((msg) => (
                    <tr
                      key={msg.id}
                      className={`hover:bg-gray-50 cursor-pointer ${!msg.read ? "bg-chinar/5" : ""} ${selected?.id === msg.id ? "bg-chinar/10" : ""}`}
                      onClick={() => handleRead(msg)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Mail className={`h-5 w-5 ${msg.read ? "text-gray-400" : "text-chinar"}`} />
                          <div>
                            <p className={`font-medium text-sm ${msg.read ? "text-gray-600" : "text-walnut"}`}>{msg.name}</p>
                            <p className="text-xs text-gray-500">{msg.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm ${msg.read ? "text-gray-600" : "font-medium text-walnut"}`}>
                          {msg.subject || "No subject"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={(e) => { e.stopPropagation(); handleDelete(msg.id) }}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {selected && (
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-walnut">{selected.subject || "No subject"}</h3>
                  <p className="text-sm text-gray-500">From: {selected.name} &lt;{selected.email}&gt;</p>
                  <p className="text-xs text-gray-400">{new Date(selected.createdAt).toLocaleString()}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-walnut text-sm">
                  Close
                </button>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-body text-walnut/70 whitespace-pre-wrap">{selected.message}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
