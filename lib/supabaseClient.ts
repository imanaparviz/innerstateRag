import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Check if environment variables are available
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Throw an error during initialization if variables are missing
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Supabase URL or Anon Key is missing. Cannot initialize Supabase client."
  );
}

// Create the Supabase client - explicitly type it
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
