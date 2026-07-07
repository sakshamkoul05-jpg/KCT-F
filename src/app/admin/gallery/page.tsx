"use client"

import { useEffect, useState } from "react"
import { Image, Trash2, Upload } from "lucide-react"
import { getGalleryPhotos, deleteGalleryPhoto } from "@/lib/actions"

interface Photo {
  id: string
  imageUrl: string
  caption: string | null
  category: string | null
}

export default function GalleryAdminPage() {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const data = await getGalleryPhotos()
      setPhotos(data)
    } catch { /* empty */ }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this photo?")) return
    await deleteGalleryPhoto(id)
    setPhotos((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-walnut">Gallery</h2>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-chinar text-white rounded-lg hover:bg-chinar-dark transition-colors">
          <Upload className="h-4 w-4" />
          Upload Photos
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        <div className="border-2 border-dashed border-gray-200 rounded-lg p-12 text-center hover:border-chinar transition-colors">
          <Image className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-lg text-gray-500">Drag and drop photos here, or click to select</p>
          <p className="text-sm text-gray-400 mt-2">PNG, JPG, WebP up to 10MB each</p>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading...</div>
      ) : photos.length === 0 ? (
        <div className="text-center py-12 text-gray-400">No photos yet.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-gray-100 rounded-xl overflow-hidden aspect-square"
            >
              {photo.imageUrl ? (
                <img src={photo.imageUrl} alt={photo.caption || ""} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <Image className="h-8 w-8" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-white text-sm font-medium truncate">{photo.caption || "Untitled"}</p>
                  <p className="text-white/70 text-xs">{photo.category || "—"}</p>
                </div>
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => handleDelete(photo.id)}
                    className="p-1 bg-white/20 rounded hover:bg-red-500/80"
                  >
                    <Trash2 className="h-3 w-3 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
