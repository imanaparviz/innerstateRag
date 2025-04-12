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
  title:
    "Inner State RAG: AI Consulting for Optimized Knowledge Retrieval & Reduced Hallucinations",
  description:
    "Unlock your proprietary data with Inner State RAG. Expert consulting in Retrieval Augmented Generation using our unique inner state methodology to enhance LLMs, improve accuracy, and deliver ROI.",
  // Keep alternates from layout or redefine if specific needed
  alternates: {
    canonical: `/`, // Assuming root path for default locale homepage
    languages: {
      en: "/en",
      de: "/de",
      sv: "/sv",
    },
  },
  // Other homepage-specific metadata can be added here if needed
  // openGraph and twitter will inherit or can be specifically overridden
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Inner State RAG Consulting",
  url: "https://innerstaterag.com/",
  logo: "https://innerstaterag.com/logo.png",
  description:
    "Expert Inner State Retrieval Augmented Generation (RAG) consulting to unlock proprietary knowledge with our unique inner state approach, reduce AI hallucinations, and deliver measurable ROI.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX", // TODO: Telefonnummer hier eintragen oder Platzhalter lassen?
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
  service: [
    {
      "@type": "Service",
      serviceType: "Inner State RAG Consulting",
      description:
        "Consulting for the implementation and optimization of Inner State Retrieval Augmented Generation (RAG) systems to enhance AI applications by leveraging proprietary knowledge bases with our unique inner state methodology.",
      provider: {
        "@type": "Organization",
        name: "Inner State RAG Consulting",
      },
    },
    {
      "@type": "Service",
      serviceType: "RAG Implementation",
      description:
        "Professional implementation of Retrieval Augmented Generation systems customized for your organization's specific needs and knowledge base.",
      provider: {
        "@type": "Organization",
        name: "Inner State RAG Consulting",
      },
    },
    {
      "@type": "Service",
      serviceType: "Inner State AI Optimization",
      description:
        "Proprietary inner state methodology to enhance AI systems by improving context understanding and reducing hallucinations in generative AI applications.",
      provider: {
        "@type": "Organization",
        name: "Inner State RAG Consulting",
      },
    },
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://innerstaterag.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/innerstaterag",
    "https://twitter.com/innerstaterag",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Retrieval Augmented Generation (RAG)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Retrieval Augmented Generation (RAG) is a hybrid AI approach that combines information retrieval systems with generative AI models. It enhances LLM responses by retrieving relevant information from a knowledge base before generating content, resulting in more accurate and contextually appropriate outputs.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Inner State RAG different from standard RAG implementations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inner State RAG is our proprietary methodology that enhances standard RAG implementations by incorporating deeper contextual understanding of document semantics, improving retrieval relevance, and maintaining the internal state of conversations for more coherent AI interactions.",
      },
    },
    {
      "@type": "Question",
      name: "How does Inner State RAG reduce AI hallucinations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our Inner State RAG methodology reduces AI hallucinations by grounding AI responses in verified information from your knowledge base, implementing robust fact-checking mechanisms, and utilizing our proprietary context-awareness system that helps the AI model distinguish between known facts and generated content.",
      },
    },
    {
      "@type": "Question",
      name: "Is RAG better than fine-tuning for my AI application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your use case. RAG excels at incorporating external knowledge and reducing hallucinations without retraining models. Fine-tuning is better for adapting to specific styles or tasks. In many cases, combining both approaches yields the best results. Our consultants can help you determine the optimal solution for your needs.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you implement a RAG solution for my organization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementation timelines vary based on knowledge base complexity and requirements, but our proprietary framework typically accelerates deployment by 30-40% compared to starting from scratch. Most projects can be delivered within 4-12 weeks, with initial prototypes often available much sooner.",
      },
    },
  ],
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Inner State RAG Solution",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud-based",
  offers: {
    "@type": "Offer",
    price: "Custom pricing",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
  },
  featureList:
    "Reduced AI Hallucinations, Knowledge Base Integration, Proprietary Context Tracking, Enterprise Security",
  softwareVersion: "2024.3",
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Understanding RAG Technology and Its Impact on Enterprise AI",
  author: {
    "@type": "Organization",
    name: "Inner State RAG Consulting",
  },
  publisher: {
    "@type": "Organization",
    name: "Inner State RAG Consulting",
    logo: {
      "@type": "ImageObject",
      url: "https://innerstaterag.com/logo.png",
    },
  },
  datePublished: "2024-03-15",
  dateModified: "2024-07-20",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://innerstaterag.com/rag",
  },
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
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
