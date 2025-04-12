import React from "react";
import { Metadata } from "next";
import { Navbar, NavbarSpacer } from "@/components/navbar";
import Footer from "@/components/footer";
import { CtaSection } from "@/components/sections/cta-section";
import {
  Database,
  Globe,
  BarChart,
  Server,
  Check,
  Shield,
  FileText,
  Rocket,
  Users,
} from "lucide-react";

// SEO Metadata for the API page
export const metadata: Metadata = {
  title:
    "RAG Development Services | Enterprise RAG API Solutions | Inner State RAG",
  description:
    "Leverage our RAG development services and API to deliver unmatched response quality for enterprise AI applications. Eliminate hallucinations, reduce costs, and build trust with fact-driven AI solutions. Available Q3 2024.",
  keywords:
    "RAG development services, RAG API, enterprise RAG solutions, retrieval augmented generation, LLM API, semantic search API, AI development, fact-driven AI, eliminate AI hallucinations, RAG consulting",
  alternates: {
    canonical: "https://innerstaterag.com/api",
  },
  openGraph: {
    title:
      "RAG Development Services | Enterprise RAG API Solutions | Inner State RAG",
    description:
      "Leverage RAG development services to deliver unmatched response quality and reliability even in high-stakes industries. Eliminate hallucinations and build confidence with fact-driven AI outputs.",
    url: "https://innerstaterag.com/api",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RAG Development Services & API Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG Development Services | Enterprise RAG API Solutions",
    description:
      "Leverage our RAG API to deliver unmatched response quality. Eliminate hallucinations and build confidence with fact-driven AI outputs. Coming Q3 2024.",
    images: ["/twitter-image.png"],
  },
};

// JSON-LD data for the API page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebAPI",
  name: "Inner State RAG Development Services & API",
  description:
    "Enterprise-grade RAG development services and API access. Eliminate AI hallucinations, reduce costs, and build trust with fact-driven AI solutions.",
  url: "https://innerstaterag.com/api",
  provider: {
    "@type": "Organization",
    name: "Inner State RAG Consulting",
    url: "https://innerstaterag.com",
  },
  offers: {
    "@type": "Offer",
    price: "Contact for pricing",
    priceCurrency: "USD",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://innerstaterag.com/api",
  },
  applicationCategory: "Business",
  programmingLanguage: "REST API",
  audience: {
    "@type": "Audience",
    audienceType: "Enterprise businesses, AI developers, Technical teams",
  },
};

export default function ApiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <NavbarSpacer />

        <section className="container mx-auto px-4 py-8 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            RAG Development Services & API
          </h1>

          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="lead text-center mb-8">
              Leverage our enterprise RAG development services to deliver
              unmatched response quality and reliability even in high-stakes
              industries like fintech and healthcare.
            </p>

            {/* Coming Soon Banner */}
            <div className="bg-primary text-white p-6 rounded-lg mb-8">
              <h2 className="text-white text-2xl font-semibold mb-2">
                API Access Coming Soon!
              </h2>
              <p>
                Our developer API is under construction and will soon allow you
                to integrate advanced RAG capabilities directly into your
                applications.
              </p>
              <div className="mt-4">
                <span className="inline-block px-4 py-1 border-2 border-white rounded-full font-bold">
                  Expected Launch: Q3 2024
                </span>
              </div>
            </div>

            {/* Key Benefits Section */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 flex items-center">
              <Check className="mr-2" size={24} />
              Key Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Eliminate AI Hallucinations
                </h3>
                <p>
                  Stop guesswork and build confidence in every interaction with
                  fact-driven outputs. Our RAG development ensures every
                  response is accurate by combining LLMs with verified external
                  knowledge sources.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Reduce Resource Waste
                </h3>
                <p>
                  Stop wasting resources on constant model updates. RAG
                  dynamically retrieves the latest information, policies, and
                  documents, delivering personalized, context-aware responses
                  without retraining.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Build User Trust</h3>
                <p>
                  Reduce the risk of AI hallucinations with RAG's verified data
                  approach. By grounding outputs in factual content, your AI
                  will deliver consistently accurate and reliable results,
                  earning user trust.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Lower Operational Costs
                </h3>
                <p>
                  Lower your operational expenses by reducing the need for
                  extensive fine-tuning. Our RAG development services make it
                  simple to update knowledge bases, keeping your AI effective
                  and adaptable.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Actionable Insights
                </h3>
                <p>
                  RAG doesn't just give answers — it provides actionable,
                  context-rich insights. Empower your teams and users to make
                  informed, confident decisions with AI that truly understands
                  their needs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Improve User Satisfaction
                </h3>
                <p>
                  With our RAG development services, your users get fast,
                  fact-based responses, boosting satisfaction, building trust,
                  and streamlining operations across your organization.
                </p>
              </div>
            </div>

            {/* API Features */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 flex items-center">
              <Database className="mr-2" size={24} />
              API Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Database className="mr-2" size={20} />
                  Document Indexing
                </h3>
                <p>
                  Programmatically upload, chunk, and index your proprietary
                  documents into a secure vector store with advanced filtering
                  capabilities.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Globe className="mr-2" size={20} />
                  Semantic Search
                </h3>
                <p>
                  Perform advanced semantic searches over your indexed knowledge
                  base to retrieve the most relevant context with configurable
                  relevance thresholds.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <Server className="mr-2" size={20} />
                  RAG Queries
                </h3>
                <p>
                  Send user queries with retrieved context to supported LLMs for
                  accurate, context-aware responses with citation references.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <BarChart className="mr-2" size={20} />
                  Usage Monitoring
                </h3>
                <p>
                  Track your API usage, costs, and performance metrics
                  programmatically via dashboards and exportable reports.
                </p>
              </div>
            </div>

            {/* Services Offered */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 flex items-center">
              <Rocket className="mr-2" size={24} />
              Services Offered
            </h2>

            <div className="space-y-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  1. RAG Development for Enterprise Applications
                </h3>
                <p>
                  Create RAG-powered applications for real-time, precise
                  interactions with clients or employees. Whether it's for
                  chatbots, knowledge hubs, or internal platforms, we align RAG
                  capabilities with your unique business needs and security
                  requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  2. Tailored RAG Integration
                </h3>
                <p>
                  Seamlessly integrate Retrieval-Augmented Generation into your
                  existing systems for accurate, context-aware, and real-time
                  insights. We clean, organize, and streamline your knowledge
                  base to keep your RAG system accurate and up-to-date without
                  constant retraining.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  3. Data Preparation & Management
                </h3>
                <p>
                  Optimize your data with expertly structured vector databases.
                  This data is fed directly into your RAG system, ensuring
                  precise and reliable knowledge retrieval with advanced
                  filtering and metadata management.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  4. Custom Data Retrieval Tools
                </h3>
                <p>
                  We develop scrapers and automated pipelines to extract data
                  from internal documents, APIs, websites, or unstructured
                  formats like PDFs. This data is fed directly into your RAG
                  system, ensuring precise and reliable knowledge retrieval.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  5. AI Monitoring & Governance
                </h3>
                <p>
                  Track and optimize your RAG system with tools that trace data
                  sources, flag inaccuracies, and ensure compliance with
                  industry standards. We'll help you maintain transparency,
                  reliability, and trust in your AI solutions.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 flex items-center">
              <Users className="mr-2" size={24} />
              Why Choose Inner State RAG As Your Development Partner
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Complete Technical Documentation
                </h3>
                <p>
                  We never compromise on quality. We ensure clean,
                  well-documented code and consider refactoring an essential
                  part of every development lifecycle, keeping your RAG
                  implementation scalable and future-proof.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
                <p>
                  Our team has deep expertise in both traditional and
                  cutting-edge RAG implementations across multiple industries,
                  ensuring your solution leverages best practices and innovative
                  approaches.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Long-term Partnerships
                </h3>
                <p>
                  While we love initial implementations, most of our client
                  partnerships are long-term and focus on continuous improvement
                  of your RAG systems as your business evolves.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Transparent Cooperation
                </h3>
                <p>
                  Clear project scope and requirement definitions, effective
                  communication channels, regular progress reports, risk and
                  change management, and open feedback are the pillars of our
                  development process.
                </p>
              </div>
            </div>

            {/* Success Stories */}
            <h2 className="text-2xl font-semibold mt-12 mb-6 flex items-center">
              <FileText className="mr-2" size={24} />
              Success Stories
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <h3 className="text-xl font-semibold mb-2">
                Financial Services Firm
              </h3>
              <p>
                A leading financial services company implemented our RAG
                solution to power their customer service portal, reducing
                response time by 67% while maintaining 99.8% accuracy on complex
                regulatory questions.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">67%</div>
                  <div className="text-sm">Faster Responses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.8%</div>
                  <div className="text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">43%</div>
                  <div className="text-sm">Cost Reduction</div>
                </div>
              </div>
              <p className="mt-4 text-sm italic">
                Full case studies will be available upon API launch.
              </p>
            </div>
          </div>
        </section>

        <CtaSection />
        <Footer />
      </main>
    </>
  );
}
