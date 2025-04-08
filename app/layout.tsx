import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RAG Consulting Services | Reduce AI Hallucinations by 50%",
  description:
    "Expert Retrieval Augmented Generation (RAG) consulting to unlock your proprietary knowledge, reduce AI hallucinations, and deliver measurable ROI. Join the 44.7% CAGR market growth.",
  keywords:
    "RAG consulting, Retrieval Augmented Generation, AI hallucinations, knowledge base integration, enterprise AI, LLM optimization, vector database, semantic search",
  openGraph: {
    title: "RAG Consulting Services | Reduce AI Hallucinations by 50%",
    description:
      "Expert Retrieval Augmented Generation (RAG) consulting to unlock your proprietary knowledge, reduce AI hallucinations, and deliver measurable ROI.",
    url: "https://your-rag-consulting-domain.com",
    siteName: "RAG Consulting Services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RAG Consulting Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG Consulting Services | Reduce AI Hallucinations by 50%",
    description:
      "Expert Retrieval Augmented Generation (RAG) consulting to unlock your proprietary knowledge and deliver measurable ROI.",
    images: ["/twitter-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'