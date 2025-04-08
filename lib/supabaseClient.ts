import { createClient } from "@supabase/supabase-js"

// Check if environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Only create the client if both URL and key are available
let supabase

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  // For development/preview environments where env vars might not be available
  console.warn("Supabase URL or Anon Key is missing. Supabase client will not be initialized.")

  // Create a mock client that won't throw errors when methods are called
  supabase = {
    from: () => ({
      insert: async () => ({ error: new Error("Supabase client not initialized") }),
      select: async () => ({ error: new Error("Supabase client not initialized"), data: null }),
    }),
    auth: {
      signIn: async () => ({ error: new Error("Supabase client not initialized") }),
      signUp: async () => ({ error: new Error("Supabase client not initialized") }),
    },
  }
}

export { supabase }

