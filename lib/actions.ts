"use server"

import { supabase } from "./supabaseClient"

type LeadFormData = {
  name: string
  email: string
  company: string
  phone: string
  companySize: string
  message: string
}

export async function submitLeadForm(formData: LeadFormData) {
  try {
    // Check if Supabase environment variables are available
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn("Supabase environment variables are missing. Form submission will be simulated.")

      // Simulate a successful submission for development/preview
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay
      return { success: true, simulated: true }
    }

    const { error } = await supabase.from("leads").insert([
      {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone || null,
        company_size: formData.companySize || null,
        message: formData.message || null,
        source: "website",
        created_at: new Date().toISOString(),
      },
    ])

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error("Error submitting lead form:", error)
    throw new Error("Failed to submit form")
  }
}

