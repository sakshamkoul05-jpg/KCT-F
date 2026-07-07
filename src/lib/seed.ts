// Seed script: npx tsx src/lib/seed.ts
// Creates the initial admin user in Supabase

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Simple cuid generator
function cuid(): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789"
  let id = "clx"
  for (let i = 0; i < 24; i++) {
    id += chars[Math.floor(Math.random() * chars.length)]
  }
  return id
}

async function seed() {
  const email = "admin@kct.org"
  const password = "kct-admin-2024"
  const name = "KCT Administrator"

  // Check if user already exists
  const { data: existing } = await supabase
    .from("User")
    .select("id")
    .eq("email", email)
    .single()

  if (existing) {
    console.log("Admin user already exists:", email)
    return
  }

  // Insert admin user (password stored as plaintext for demo - use bcrypt in production)
  const now = new Date().toISOString()
  const { data, error } = await supabase
    .from("User")
    .insert({
      id: cuid(),
      email,
      name,
      passwordHash: password,
      role: "admin",
      createdAt: now,
      updatedAt: now,
    })
    .select()
    .single()

  if (error) {
    console.error("Error creating admin user:", error.message)
    return
  }

  console.log("Admin user created successfully!")
  console.log("Email:", email)
  console.log("Password:", password)
  console.log("User ID:", data.id)
}

seed()
