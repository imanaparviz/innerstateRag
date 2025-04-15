import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { Navbar } from "@/components/navbar";

// Define Metadata
export const metadata: Metadata = {
  title:
    "Inner State RAG | Advanced Contextual AI | Inner State RAG Consulting",
  description:
    "Explore Inner State RAG: Combining Retrieval Augmented Generation with proprietary Inner State methodology for superior AI context understanding, reduced hallucinations, and enhanced knowledge integration.",
  keywords: [
    "inner state RAG",
    "RAG",
    "inner state",
    "contextual AI",
    "knowledge integration",
    "AI hallucination reduction",
    "semantic AI",
  ],
  alternates: {
    canonical: "https://innerstaterag.com/inner-state-rag",
  },
  openGraph: {
    title: "Inner State RAG | Advanced Contextual AI Systems",
    description:
      "Learn how Inner State RAG enhances AI with superior context understanding and knowledge integration, reducing hallucinations.",
    url: "https://innerstaterag.com/inner-state-rag",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline:
    "Inner State RAG: The Next Evolution in Retrieval Augmented Generation",
  description:
    "A comprehensive overview of our proprietary Inner State RAG methodology and how it's revolutionizing AI systems with enhanced context understanding and knowledge retrieval.",
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
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://innerstaterag.com/inner-state-rag",
  },
  datePublished: "2024-03-01",
  dateModified: "2024-07-30",
  image: "https://innerstaterag.com/og-image-inner-state-rag.png",
  keywords:
    "inner state RAG, context understanding, knowledge retrieval, AI hallucination reduction",
};

export default function InnerStateRAGPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-background min-h-screen">
        <Navbar />

        {/* Hero Section with Gradient Background */}
        <section className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6 inline-block">
                <span className="bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                  Proprietary Technology
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Inner State RAG Technology
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                Discover how our proprietary methodology combines Retrieval
                Augmented Generation with Inner State understanding for
                unparalleled contextual awareness and reduced hallucinations.
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 bg-repeat"></div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-primary font-medium">Inner State RAG</span>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-12">
          {/* What is Inner State RAG Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What is Inner State RAG?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Inner State RAG is our revolutionary approach that combines the
                power of Retrieval Augmented Generation with our proprietary
                Inner State methodology. This integration creates AI systems
                with unprecedented contextual understanding, knowledge
                integration capabilities, and reduced hallucinations.
              </p>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden shadow-lg p-8 mb-10 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="aspect-video bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-lg flex items-center justify-center">
                      <div className="text-primary text-center p-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 mx-auto mb-4 opacity-80"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="font-semibold text-lg">
                          Inner State RAG Architecture
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Advanced Integration
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our proprietary Inner State RAG architecture enhances
                      standard RAG with contextual state tracking, creating a
                      more coherent and accurate AI experience that understands
                      the nuances of complex information.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/technology"
                        className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                      >
                        Explore our technology
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How Inner State RAG Surpasses Traditional RAG */}
          <section className="mb-16 bg-gray-50 dark:bg-gray-800 py-12 rounded-xl">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                How Inner State RAG Surpasses Traditional RAG
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="py-4 px-6 text-left text-gray-700 dark:text-gray-300 font-semibold">
                        Feature
                      </th>
                      <th className="py-4 px-6 text-left text-gray-700 dark:text-gray-300 font-semibold">
                        Traditional RAG
                      </th>
                      <th className="py-4 px-6 text-left text-primary font-semibold">
                        Inner State RAG
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-4 px-6 font-medium">
                        Context Understanding
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                        Basic
                      </td>
                      <td className="py-4 px-6 text-primary font-medium">
                        Advanced semantic modeling
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-4 px-6 font-medium">State Tracking</td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                        Limited
                      </td>
                      <td className="py-4 px-6 text-primary font-medium">
                        Comprehensive conversation memory
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-4 px-6 font-medium">
                        Query Understanding
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                        Literal matching
                      </td>
                      <td className="py-4 px-6 text-primary font-medium">
                        Intent and semantic analysis
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <td className="py-4 px-6 font-medium">
                        Multi-document Reasoning
                      </td>
                      <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                        Basic
                      </td>
                      <td className="py-4 px-6 text-primary font-medium">
                        Advanced cross-document synthesis
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="mb-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
                Key Benefits of Inner State RAG
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Superior Context Awareness
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our system maintains a sophisticated understanding of
                    conversation history and domain context, providing more
                    relevant responses even in complex scenarios.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Reduced Hallucinations
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    By integrating multiple contextual verification layers, our
                    system dramatically reduces AI hallucinations and improves
                    factual accuracy in all responses.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Knowledge Integration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Advanced techniques for synthesizing information across
                    multiple documents and knowledge sources create a cohesive
                    understanding beyond simple retrieval.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Evolving Understanding
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The system continuously refines its understanding of user
                    needs and context throughout interactions for improved
                    performance and personalized experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-12 rounded-xl">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Use Cases for Inner State RAG
              </h2>

              <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
                Our Inner State RAG technology is ideal for:
              </p>

              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        Complex Enterprise Knowledge Management
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Where multiple knowledge sources need to be integrated
                        coherently across departments and systems
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        High-Stakes Decision Support
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Where accuracy and reliable context understanding are
                        critical for making informed business decisions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        Long-form Conversation Applications
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">
                        Where maintaining context over extended interactions is
                        essential for customer support and engagement
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col items-center text-center">
                  <div className="flex mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="relative mb-6">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100 dark:text-gray-700"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.77621 12.86C3.84979 12.86 3.09047 12.5533 2.49825 11.94C1.90603 11.3266 1.6099 10.4467 1.6099 9.29999C1.6099 8.07332 1.9435 6.87332 2.6107 5.69999C3.2779 4.49999 4.24513 3.55332 5.51238 2.85999L6.53452 3.79999C6.07762 4.10666 5.68294 4.46666 5.35046 4.87999C5.01798 5.29332 4.79378 5.68666 4.67786 6.05999C4.56194 6.43332 4.5039 6.73332 4.50378 6.95999C5.28693 6.95999 5.97851 7.19999 6.57852 7.67999C7.1952 8.15999 7.39762 9.11999 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0663 12.86 10.307 12.5533 9.71481 11.94C9.12259 11.3266 8.82647 10.4467 8.82647 9.29999C8.82647 8.07332 9.16006 6.87332 9.82726 5.69999C10.4945 4.49999 11.4617 3.55332 12.729 2.85999L13.7511 3.79999C13.2942 4.10666 12.8995 4.46666 12.567 4.87999C12.2345 5.29332 12.0103 5.68666 11.8944 6.05999C11.7785 6.43332 11.7205 6.73332 11.7203 6.95999C12.5035 6.95999 13.195 7.19999 13.7951 7.67999C14.4117 8.15999 14.6242 9.11999 14.6242 10.3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <p className="text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
                      "Inner State RAG has transformed our knowledge management
                      system. The context awareness is unlike anything we've
                      seen before. It's like the system truly understands our
                      business context."
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-lg">SJ</span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Sarah Johnson
                      </p>
                      <p className="text-sm text-primary">
                        CTO at Enterprise Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
            <div className="container mx-auto px-6 py-12 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Experience Inner State RAG?
                </h2>
                <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Discover how our proprietary technology can transform your AI
                  applications and deliver unprecedented results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                  >
                    Get Started Today
                  </Link>
                  <Link
                    href="/request-demo"
                    className="bg-transparent text-white border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 bg-repeat"></div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
