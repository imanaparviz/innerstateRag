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

    // 1. Build the query to find the max ID
    const maxIdQuery = supabase
      .from("innerstate")
      .select("id")
      .order("id", { ascending: false })
      .limit(1)
      .maybeSingle();

    // 2. Execute the query
    const { data: maxIdData, error: maxIdError } = await maxIdQuery;

    // 3. Check for errors fetching the max ID
    if (maxIdError) {
      console.error("Error fetching max ID:", maxIdError);
      throw new Error("Failed to determine next ID");
    }

    // 4. Calculate the next ID
    const nextId = maxIdData ? maxIdData.id + 1 : 1;

    // 5. Insert the new record with the calculated ID
    const { error: insertError } = await supabase.from("innerstate").insert([
      {
        id: nextId, // Add the calculated ID
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
      console.error("Error inserting lead form data:", insertError); // More specific console error
      throw insertError; // Re-throw the actual Supabase error for better debugging
    }

    return { success: true };
  } catch (error) {
    // This will now catch errors from both fetching max ID and inserting
    console.error("Error submitting lead form:", error);
    // Keep a generic error message for the user, but log the specific error above
    throw new Error("Failed to submit form");
  }
}
