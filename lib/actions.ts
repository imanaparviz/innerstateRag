"use server";

import { supabase } from "./supabaseClient";

type LeadFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  companySize: string;
  message: string;
};

export async function submitLeadForm(formData: LeadFormData) {
  try {
    // Check if Supabase environment variables are available
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      console.warn(
        "Supabase environment variables are missing. Form submission will be simulated."
      );

      // Simulate a successful submission for development/preview
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      return { success: true, simulated: true };
    }

    // Insert the new record, letting the database assign the ID
    const { error: insertError } = await supabase.from("innerstate").insert([
      {
        full_name: formData.name,
        email_address: formData.email,
        company_name: formData.company,
        phone_number: formData.phone || null,
        company_size: formData.companySize || null,
        message: formData.message || null,
        created_at: new Date().toISOString(),
      },
    ]);

    // Use the specific insertError variable here
    if (insertError) {
      // Log the detailed error for server-side debugging
      console.error("Error inserting lead form data:", insertError);
      // Throw a new error with a generic message for the client,
      // but include the original error's details if needed for richer client-side handling (optional)
      // throw new Error(`Failed to submit form. Supabase error: ${insertError.message}`);
      // Or just re-throw the original error if the client doesn't need details
      throw insertError;
    }

    return { success: true, simulated: false }; // Ensure simulated is false on successful DB insert
  } catch (error) {
    // This will catch errors from inserting
    console.error("Error submitting lead form:", error);
    // Keep a generic error message for the user, but log the specific error above
    throw new Error("Failed to submit form");
  }
}
