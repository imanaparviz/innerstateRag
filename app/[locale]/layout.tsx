import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

// Definiere die unterstützten Locales
const locales = ["en", "de", "sv", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Funktion zum Generieren von sprachspezifischen Metadaten
export async function generateMetadata(props: {
  params: { locale: string };
}): Promise<Metadata> {
  const params = await props.params;
  const locale = params.locale;

  // Validate locale
  if (!locales.includes(locale)) notFound();

  return {
    title: "Inner State RAG Consulting | RAG Technology Experts",
    description:
      "Expert Inner State RAG Consulting Services - Optimize your Retrieval Augmented Generation systems with our proprietary inner state methodology. Reduce AI hallucinations and improve knowledge retrieval.",
    metadataBase: new URL("https://innerstaterag.com"),
    keywords: [
      "inner state RAG",
      "RAG",
      "inner state",
      "Retrieval Augmented Generation",
      "AI consulting",
      "knowledge base",
      "LLM optimization",
      "reduce hallucinations",
      "vector search",
      "semantic retrieval",
    ],
    openGraph: {
      title: "Inner State RAG Consulting | RAG Technology Experts",
      description:
        "Expert Inner State RAG Consulting Services - Optimize your Retrieval Augmented Generation systems with our proprietary inner state methodology. Reduce AI hallucinations and improve knowledge retrieval.",
      url: `https://innerstaterag.com/${locale}`,
      siteName: "Inner State RAG Consulting",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Inner State RAG Consulting",
        },
      ],
      locale:
        locale === "de"
          ? "de_DE"
          : locale === "sv"
          ? "sv_SE"
          : locale === "es"
          ? "es_ES"
          : "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://innerstaterag.com/${locale}`,
      languages: {
        en: "https://innerstaterag.com/en",
        de: "https://innerstaterag.com/de",
        sv: "https://innerstaterag.com/sv",
        es: "https://innerstaterag.com/es",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Inner State RAG Consulting | RAG Technology Experts",
      description:
        "Expert Inner State RAG Consulting - Optimize your Retrieval Augmented Generation systems with our proprietary inner state methodology.",
      images: ["/og-image.png"],
    },
    verification: {
      google: "google-site-verification-code", // Ersetze mit deinem tatsächlichen Verifizierungscode
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
    authors: [
      { name: "Inner State RAG Team", url: "https://innerstaterag.com/team" },
    ],
    category: "AI Technology",
    applicationName: "Inner State RAG",
  };
}

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}): Promise<React.ReactElement> {
  // Extrahiere Parameter und sicherstelle, dass sie definiert sind
  const params = await props.params;
  const locale = params?.locale || "en";
  const children = props.children;

  // Validate locale
  if (!locales.includes(locale)) notFound();

  // Lade Übersetzungen für den Client
  let messages = {};
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
    console.log("Loaded messages for locale:", locale);
  } catch (error) {
    console.error(`Error loading messages for locale ${locale}:`, error);
    // Bei Fehler: Versuche die Standard-Sprache zu laden
    try {
      messages = (await import("../../messages/en.json")).default;
      console.log("Fallback to EN messages");
    } catch (fallbackError) {
      console.error("Could not load fallback messages:", fallbackError);
    }
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Preload wichtiger Assets für bessere Performance */}
        <link rel="preload" href="/og-image.png" as="image" />
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Script src="/shared-scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
