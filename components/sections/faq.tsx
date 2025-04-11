import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Retrieval Augmented Generation (RAG)?",
    answer:
      "RAG is an AI technique that enhances Large Language Models (LLMs) by connecting them to external knowledge sources during query time. This allows the LLM to generate more accurate, up-to-date, and contextually relevant answers based on retrieved information, significantly reducing hallucinations.",
  },
  {
    question: "How does RAG consulting help my business?",
    answer:
      "Our RAG consulting helps you leverage your proprietary enterprise knowledge effectively with AI. We design and implement custom RAG systems to improve AI accuracy, reduce hallucinations, unlock internal data for AI use, and ultimately drive measurable business value and ROI.",
  },
  {
    question: "Is RAG better than fine-tuning an LLM?",
    answer:
      "RAG and fine-tuning address different challenges. RAG is excellent for incorporating factual, up-to-date knowledge and reducing hallucinations without altering the base model. Fine-tuning is better for adapting an LLM's style, tone, or acquiring new skills/behaviors. Often, a combination of both yields the best results. We can help determine the right approach for you.",
  },
  {
    question: "How do you ensure the privacy of our knowledge base with RAG?",
    answer:
      "Data privacy is paramount. We implement strict access controls, utilize secure infrastructure, and adhere to confidentiality agreements (NDAs). Your proprietary data used in the RAG system is handled according to agreed-upon protocols and is not used for training base models. Read our <a href='/privacy' class='text-blue-600 hover:underline'>Privacy Policy</a> for more details.",
  },
  {
    question: "How long does a typical RAG implementation take?",
    answer:
      "Implementation time varies depending on the complexity of your knowledge base, desired features, and existing infrastructure. However, our proven framework often accelerates the process, potentially reducing implementation time by up to 40% compared to starting from scratch. We provide a specific timeline after the initial assessment.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 bg-slate-50">
      <div className="container max-w-3xl px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            Frequently Asked Questions about RAG
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Find answers to common questions about our RAG consulting services.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left text-gray-900 hover:text-blue-700">
                {" "}
                {/* Dark text color */}
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
