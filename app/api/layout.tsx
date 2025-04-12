import type React from "react";
import "../globals.css"; // Import global styles
import { Inter } from "next/font/google"; // Import font
import { NextIntlClientProvider } from "next-intl"; // Import Intl provider
import { Navbar, NavbarSpacer } from "@/components/navbar"; // Import Navbar
import Footer from "@/components/footer"; // Import Footer
import { notFound } from "next/navigation"; // Import notFound for message loading

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RAG Consulting API",
  description: "Access RAG Consulting Services programmatically via our API",
};

// Function to load messages (similar to main layout, but fixed to 'en')
async function getMessages() {
  try {
    return (await import(`../../messages/en.json`)).default;
  } catch (error) {
    console.error("Error loading 'en' messages for API layout:", error);
    // Optional: Implement a fallback or throw an error if messages are crucial
    // For now, we'll return an empty object to avoid crashing
    return {};
    // Or uncomment the next line to show a 404 if messages fail
    // notFound();
  }
}

export default async function ApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages(); // Load messages

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider locale="en" messages={messages}>
          {" "}
          {/* Add Intl Provider */}
          <Navbar /> {/* Add Navbar */}
          <NavbarSpacer /> {/* Add Spacer */}
          {children}
          <Footer /> {/* Add Footer */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
