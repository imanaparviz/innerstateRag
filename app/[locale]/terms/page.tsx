import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

// SEO Metadata for the Terms of Service page
export const metadata: Metadata = {
  title: "Terms of Service | RAG Consulting Services",
  description:
    "Review the Terms of Service for using RAG Consulting Services' website and offerings. Understand your rights and obligations. Full terms coming soon.",
  keywords:
    "Terms of Service, RAG consulting terms, legal, usage agreement, service conditions, RAG consulting services",
  openGraph: {
    title: "Terms of Service | RAG Consulting Services",
    description:
      "Review the Terms of Service for RAG Consulting Services. Full terms coming soon.",
    url: "https://innerstaterag.com/terms",
    siteName: "RAG Consulting Services",
    images: [
      {
        url: "/og-image.png", // Use your main OG image
        width: 1200,
        height: 630,
        alt: "RAG Consulting Services Terms of Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | RAG Consulting Services",
    description:
      "Understand the Terms of Service for RAG Consulting Services. Full details coming soon.",
    images: ["/twitter-image.png"], // Use your main Twitter image
  },
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to RAG Consulting Services. These Terms of Service govern
              your use of our website and the services we offer. Please read
              them carefully. The full, detailed terms are currently being
              finalized and will be published here soon.
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl font-semibold text-gray-800">
                Key Areas (Summary - Full Details Coming Soon):
              </p>

              <h2 className="!text-xl !font-semibold !mt-6">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing our website or using our services, you agree to be
                bound by these Terms of Service and our Privacy Policy. If you
                do not agree, please do not use our site or services.
              </p>

              <h2 className="!text-xl !font-semibold">
                2. Service Description
              </h2>
              <p>
                RAG Consulting Services provides expert consulting and
                implementation services related to Retrieval Augmented
                Generation (RAG) technology. Specific service details, scope,
                and deliverables will be outlined in individual service
                agreements or statements of work.
              </p>

              <h2 className="!text-xl !font-semibold">
                3. User Responsibilities
              </h2>
              <p>
                You agree to provide accurate information when requested and to
                use our services lawfully and ethically. You are responsible for
                maintaining the confidentiality of any account information and
                for all activities that occur under your account.
              </p>

              <h2 className="!text-xl !font-semibold">
                4. Intellectual Property
              </h2>
              <p>
                The content on our website, including text, graphics, logos, and
                software, is the property of RAG Consulting Services or its
                licensors and is protected by intellectual property laws. Our
                service deliverables may be subject to specific licensing terms
                outlined in your service agreement.
              </p>

              <h2 className="!text-xl !font-semibold">
                5. Limitation of Liability & Disclaimer of Warranties
              </h2>
              <p>
                Our services are provided "as is." We make no warranties
                regarding the results or outcomes of our services. Our liability
                will be limited to the extent permitted by law. Full disclaimers
                and limitations will be detailed in the complete Terms of
                Service.
              </p>

              <h2 className="!text-xl !font-semibold">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any
                time. We will notify users of significant changes. Continued use
                of our services after changes constitutes acceptance.
              </p>

              <p className="mt-8 italic">
                <strong>Please Note:</strong> This is a preliminary summary. The
                complete and legally binding Terms of Service will be posted
                here soon. Please check back for the full document.
              </p>
            </div>

            <div className="mt-10 text-center">
              <a
                href="/"
                className="inline-block text-blue-600 hover:underline"
              >
                &larr; Back to Homepage
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
