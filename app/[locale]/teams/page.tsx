import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import Image from "next/image"; // Import Image for team photos

// SEO Metadata for the Teams page
export const metadata: Metadata = {
  title: "Our Team | Expert RAG Consultants at RAG Consulting Services",
  description:
    "Meet the dedicated team of AI and RAG specialists at RAG Consulting Services. Learn about our expertise in building and optimizing Retrieval Augmented Generation solutions.",
  keywords:
    "RAG consulting team, AI experts, RAG specialists, LLM consultants, AI implementation team, enterprise AI team, data scientists AI, RAG engineers",
  openGraph: {
    title: "Our Team | Expert RAG Consultants at RAG Consulting Services",
    description:
      "Meet the experienced team driving innovation in RAG implementation at RAG Consulting Services.",
    url: "https://innerstaterag.com/teams", // Updated URL
    siteName: "RAG Consulting Services",
    images: [
      {
        url: "/images/team/team-og-image.png", // Placeholder - TODO: Create an appropriate OG image
        width: 1200,
        height: 630,
        alt: "The RAG Consulting Services Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Expert RAG Consultants at RAG Consulting Services",
    description:
      "Meet the AI and RAG specialists behind RAG Consulting Services.",
    images: ["/images/team/team-twitter-image.png"], // Placeholder - TODO: Create an appropriate Twitter image
  },
};

// --- Placeholder Team Data ---
// TODO: Replace with your actual team members
const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    role: "Chief AI Officer & RAG Lead",
    bio: "PhD in AI with 15+ years experience in NLP and machine learning. Evelyn spearheads our RAG methodology development and ensures cutting-edge solutions.",
    imageUrl: "/images/team/evelyn-reed.jpg", // Placeholder image path
    linkedinUrl: "#", // Placeholder LinkedIn URL
  },
  {
    name: "Marcus Chen",
    role: "Principal Solutions Architect",
    bio: "Expert in cloud infrastructure and AI system deployment. Marcus designs scalable and robust RAG architectures tailored to client needs.",
    imageUrl: "/images/team/marcus-chen.jpg", // Placeholder image path
    linkedinUrl: "#",
  },
  {
    name: "Aisha Khan",
    role: "Senior Data Scientist",
    bio: "Specializing in embedding models and vector databases. Aisha ensures optimal data preparation and retrieval performance for RAG systems.",
    imageUrl: "/images/team/aisha-khan.jpg", // Placeholder image path
    linkedinUrl: "#",
  },
  // Add more team members here...
];
// --- End Placeholder Team Data ---

export default function TeamsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Meet Our Expert Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The driving force behind our successful RAG implementations –
              dedicated specialists passionate about unlocking your AI's
              potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center p-6 flex flex-col"
              >
                <div className="mb-4">
                  <Image
                    src={member.imageUrl}
                    alt={`Photo of ${member.name}`}
                    width={120} // Adjust size as needed
                    height={120}
                    className="rounded-full mx-auto border-4 border-gray-200 dark:border-gray-700"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-700 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow mb-4">
                  {member.bio}
                </p>
                {member.linkedinUrl && member.linkedinUrl !== "#" && (
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    View LinkedIn Profile &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="#contact" // Link to contact section
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Work With Our Team
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
