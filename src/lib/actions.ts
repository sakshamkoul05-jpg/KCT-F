"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

// ============================================================
// ARTICLES
// ============================================================

export async function getArticles(status?: string) {
  const supabase = await createClient()
  let query = supabase.from("Article").select("*").order("createdAt", { ascending: false })
  if (status) query = query.eq("published", status === "published")
  const { data, error } = await query
  if (error) throw new Error(error.message)
  return data
}

export async function getArticle(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.from("Article").select("*").eq("id", id).single()
  if (error) throw new Error(error.message)
  return data
}

export async function createArticle(formData: {
  title: string
  slug: string
  content: string
  author?: string
  category?: string
  tags?: string[]
  coverImage?: string
  locale?: string
  published?: boolean
  seoTitle?: string
  seoDescription?: string
}) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("Article")
    .insert({
      title: formData.title,
      slug: formData.slug,
      content: formData.content,
      author: formData.author || null,
      category: formData.category || null,
      tags: formData.tags || [],
      coverImage: formData.coverImage || null,
      locale: formData.locale || "en",
      published: formData.published ?? false,
      publishedAt: formData.published ? new Date().toISOString() : null,
      seoTitle: formData.seoTitle || null,
      seoDescription: formData.seoDescription || null,
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  revalidatePath("/admin/articles")
  revalidatePath("/admin")
  return data
}

export async function updateArticle(
  id: string,
  formData: {
    title?: string
    slug?: string
    content?: string
    author?: string
    category?: string
    tags?: string[]
    coverImage?: string
    published?: boolean
    seoTitle?: string
    seoDescription?: string
  }
) {
  const supabase = await createClient()
  const updateData: Record<string, unknown> = { ...formData }
  if (formData.published !== undefined) {
    updateData.publishedAt = formData.published ? new Date().toISOString() : null
  }
  const { data, error } = await supabase
    .from("Article")
    .update(updateData)
    .eq("id", id)
    .select()
    .single()
  if (error) throw new Error(error.message)
  revalidatePath("/admin/articles")
  revalidatePath("/admin")
  return data
}

export async function deleteArticle(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from("Article").delete().eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/admin/articles")
  revalidatePath("/admin")
}

// ============================================================
// EVENTS
// ============================================================

export async function getEvents() {
  const supabase = await createClient()
  const { data, error } = await supabase.from("Event").select("*").order("date", { ascending: false })
  if (error) throw new Error(error.message)
  return data
}

export async function getEvent(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.from("Event").select("*").eq("id", id).single()
  if (error) throw new Error(error.message)
  return data
}

export async function createEvent(formData: {
  title: string
  slug: string
  date: string
  location: string
  content: string
  type?: string
  images?: string[]
  featured?: boolean
  locale?: string
}) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("Event")
    .insert({
      title: formData.title,
      slug: formData.slug,
      date: formData.date,
      location: formData.location,
      content: formData.content,
      type: formData.type || null,
      images: formData.images || [],
      featured: formData.featured ?? false,
      locale: formData.locale || "en",
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  revalidatePath("/admin/events")
  revalidatePath("/admin")
  return data
}

export async function updateEvent(
  id: string,
  formData: {
    title?: string
    slug?: string
    date?: string
    location?: string
    content?: string
    type?: string
    images?: string[]
    featured?: boolean
  }
) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("Event")
    .update(formData)
    .eq("id", id)
    .select()
    .single()
  if (error) throw new Error(error.message)
  revalidatePath("/admin/events")
  revalidatePath("/admin")
  return data
}

export async function deleteEvent(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from("Event").delete().eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/admin/events")
  revalidatePath("/admin")
}

// ============================================================
// PUBLICATIONS
// ============================================================

export async function getPublications() {
  const supabase = await createClient()
  const { data, error } = await supabase.from("Publication").select("*").order("createdAt", { ascending: false })
  if (error) throw new Error(error.message)
  return data
}

export async function getPublication(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase.from("Publication").select("*").eq("id", id).single()
  if (error) throw new Error(error.message)
  return data
}

export async function createPublication(formData: {
  title: string
  author?: string
  description?: string
  coverImage?: string
  pdfUrl: string
  category?: string
  year?: number
  locale?: string
}) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("Publication")
    .insert({
      title: formData.title,
      author: formData.author || null,
      description: formData.description || null,
      coverImage: formData.coverImage || null,
      pdfUrl: formData.pdfUrl,
      category: formData.category || null,
      year: formData.year || null,
      locale: formData.locale || "en",
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  revalidatePath("/admin/publications")
  revalidatePath("/admin")
  return data
}

export async function deletePublication(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from("Publication").delete().eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/admin/publications")
  revalidatePath("/admin")
}

// ============================================================
// GALLERY
// ============================================================

export async function getGalleryPhotos(category?: string) {
  const supabase = await createClient()
  let query = supabase.from("GalleryPhoto").select("*").order("createdAt", { ascending: false })
  if (category && category !== "All") query = query.eq("category", category)
  const { data, error } = await query
  if (error) throw new Error(error.message)
  return data
}

export async function createGalleryPhoto(formData: {
  imageUrl: string
  caption?: string
  description?: string
  category?: string
  tags?: string[]
}) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("GalleryPhoto")
    .insert({
      imageUrl: formData.imageUrl,
      caption: formData.caption || null,
      description: formData.description || null,
      category: formData.category || null,
      tags: formData.tags || [],
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  revalidatePath("/admin/gallery")
  revalidatePath("/admin")
  revalidatePath("/gallery")
  return data
}

export async function deleteGalleryPhoto(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from("GalleryPhoto").delete().eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/admin/gallery")
  revalidatePath("/admin")
  revalidatePath("/gallery")
}

// ============================================================
// AUDIO LESSONS
// ============================================================

export async function getAudioLessons() {
  const supabase = await createClient()
  const { data, error } = await supabase.from("AudioLesson").select("*").order("part").order("lessonNumber")
  if (error) throw new Error(error.message)
  return data
}

export async function createAudioLesson(formData: {
  title: string
  part: number
  lessonNumber: number
  mp3Url: string
  duration?: string
  description?: string
  order?: number
}) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("AudioLesson")
    .insert({
      title: formData.title,
      part: formData.part,
      lessonNumber: formData.lessonNumber,
      mp3Url: formData.mp3Url,
      duration: formData.duration || null,
      description: formData.description || null,
      order: formData.order ?? 0,
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  revalidatePath("/admin/audio")
  revalidatePath("/admin")
  return data
}

export async function deleteAudioLesson(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from("AudioLesson").delete().eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/admin/audio")
  revalidatePath("/admin")
}

// ============================================================
// TRUSTEES
// ============================================================

export async function getTrustees() {
  const supabase = await createClient()
  const { data, error } = await supabase.from("Trustee").select("*").order("order")
  if (error) throw new Error(error.message)
  return data
}

export async function createTrustee(formData: {
  name: string
  role: string
  photoUrl?: string
  bio?: string
  order?: number
  active?: boolean
}) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("Trustee")
    .insert({
      name: formData.name,
      role: formData.role,
      photoUrl: formData.photoUrl || null,
      bio: formData.bio || null,
      order: formData.order ?? 0,
      active: formData.active ?? true,
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  revalidatePath("/admin/trustees")
  revalidatePath("/admin")
  return data
}

export async function deleteTrustee(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from("Trustee").delete().eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/admin/trustees")
  revalidatePath("/admin")
}

// ============================================================
// MESSAGES
// ============================================================

export async function getMessages() {
  const supabase = await createClient()
  const { data, error } = await supabase.from("Message").select("*").order("createdAt", { ascending: false })
  if (error) throw new Error(error.message)
  return data
}

export async function markMessageRead(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from("Message").update({ read: true }).eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/admin/messages")
  revalidatePath("/admin")
}

export async function deleteMessage(id: string) {
  const supabase = await createClient()
  const { error } = await supabase.from("Message").delete().eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/admin/messages")
  revalidatePath("/admin")
}

// ============================================================
// SUBSCRIBERS
// ============================================================

export async function getSubscribers() {
  const supabase = await createClient()
  const { data, error } = await supabase.from("Subscriber").select("*").order("subscribedAt", { ascending: false })
  if (error) throw new Error(error.message)
  return data
}

export async function subscribeToNewsletter(email: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("Subscriber")
    .upsert({ email, active: true }, { onConflict: "email" })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

export async function unsubscribe(id: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from("Subscriber")
    .update({ active: false, unsubscribedAt: new Date().toISOString() })
    .eq("id", id)
  if (error) throw new Error(error.message)
  revalidatePath("/admin/subscribers")
  revalidatePath("/admin")
}

// ============================================================
// CONTACT FORM
// ============================================================

export async function submitContactForm(formData: {
  name: string
  email: string
  subject?: string
  message: string
}) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("Message")
    .insert({
      name: formData.name,
      email: formData.email,
      subject: formData.subject || null,
      message: formData.message,
    })
    .select()
    .single()
  if (error) throw new Error(error.message)
  return data
}

// ============================================================
// DASHBOARD STATS
// ============================================================

export async function getDashboardStats() {
  const supabase = await createClient()
  const [articles, events, publications, photos, lessons, trustees, messages, subscribers] =
    await Promise.all([
      supabase.from("Article").select("id", { count: "exact", head: true }),
      supabase.from("Event").select("id", { count: "exact", head: true }),
      supabase.from("Publication").select("id", { count: "exact", head: true }),
      supabase.from("GalleryPhoto").select("id", { count: "exact", head: true }),
      supabase.from("AudioLesson").select("id", { count: "exact", head: true }),
      supabase.from("Trustee").select("id", { count: "exact", head: true }),
      supabase.from("Message").select("id", { count: "exact", head: true }),
      supabase.from("Subscriber").select("id", { count: "exact", head: true }),
    ])

  return {
    articles: articles.count ?? 0,
    events: events.count ?? 0,
    publications: publications.count ?? 0,
    photos: photos.count ?? 0,
    lessons: lessons.count ?? 0,
    trustees: trustees.count ?? 0,
    messages: messages.count ?? 0,
    subscribers: subscribers.count ?? 0,
  }
}
