import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { UseCases } from "@/components/sections/use-cases";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta-section";
import Footer from "@/components/footer";
import { MarketStats } from "@/components/sections/market-stats";
import { FaqSection } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "RAG Consulting Services | Reduce AI Hallucinations",
  description:
    "Boost AI performance with RAG Consulting. Reduce hallucinations by 50% and effectively leverage your enterprise knowledge. Inquire now!",
  // Weitere Metadaten wie openGraph könnten hier spezifisch für die Seite überschrieben werden, falls nötig
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RAG Consulting Services",
  url: "https://innerstaterag.com/",
  logo: "https://innerstaterag.com/logo.png",
  description:
    "Expert Retrieval Augmented Generation (RAG) consulting to unlock your proprietary knowledge, reduce AI hallucinations, and deliver measurable ROI.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX", // TODO: Telefonnummer anpassen
    contactType: "Customer Service",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://innerstaterag.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  service: {
    "@type": "Service",
    serviceType: "RAG Consulting",
    description:
      "Consulting for the implementation and optimization of Retrieval Augmented Generation (RAG) systems to enhance AI applications by leveraging proprietary knowledge bases.",
    provider: {
      "@type": "Organization",
      name: "RAG Consulting Services",
    },
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <Hero />
        <MarketStats />
        <WhyChooseUs />
        <UseCases />
        <Process />
        <Testimonials />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </>
  );
}
