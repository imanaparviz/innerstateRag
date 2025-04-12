import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Optimierte FAQs mit mehr RAG-bezogenen Inhalten und abbr-Tags
const faqs = [
  {
    question: "What is Retrieval Augmented Generation (RAG)?",
    answer:
      "<abbr title='Retrieval Augmented Generation'>RAG</abbr> is an advanced AI technique that enhances Large Language Models (LLMs) by connecting them to external knowledge sources during query time. This allows the LLM to generate more accurate, up-to-date, and contextually relevant answers based on retrieved information, significantly reducing hallucinations and improving factual accuracy.",
  },
  {
    question: "How does RAG consulting help my business?",
    answer:
      "Our <abbr title='Retrieval Augmented Generation'>RAG</abbr> consulting helps you leverage your proprietary enterprise knowledge effectively with AI. We design and implement custom <abbr title='Retrieval Augmented Generation'>RAG</abbr> systems to improve AI accuracy, reduce hallucinations by up to 78%, unlock internal data for AI use, and drive measurable business value with an average ROI of 3.5x in the first year of implementation.",
  },
  {
    question: "Is RAG better than fine-tuning an LLM?",
    answer:
      "<abbr title='Retrieval Augmented Generation'>RAG</abbr> and fine-tuning address different challenges. <abbr title='Retrieval Augmented Generation'>RAG</abbr> is excellent for incorporating factual, up-to-date knowledge and reducing hallucinations without altering the base model. Fine-tuning is better for adapting an LLM's style, tone, or acquiring new skills. Most enterprise implementations benefit from a hybrid approach that we can customize for your specific needs and knowledge base architecture.",
  },
  {
    question: "How do you ensure the privacy of our knowledge base with RAG?",
    answer:
      "Data privacy is paramount in <abbr title='Retrieval Augmented Generation'>RAG</abbr> implementations. We implement strict access controls, utilize secure vector database infrastructure, and adhere to confidentiality agreements (NDAs). Your proprietary data used in the <abbr title='Retrieval Augmented Generation'>RAG</abbr> system is handled according to industry best practices with SOC 2 compliance and is not used for training base models. Read our <a href='/privacy' class='text-blue-600 hover:underline'>Privacy Policy</a> for more details.",
  },
  {
    question: "How long does a typical RAG implementation take?",
    answer:
      "Implementation time for <abbr title='Retrieval Augmented Generation'>RAG</abbr> systems varies depending on the complexity of your knowledge base, desired features, and existing infrastructure. Our proprietary Inner State methodology typically accelerates implementation by 30-40%, with most projects completing in 4-12 weeks. We provide a specific timeline after the initial assessment and can deliver proof-of-concept implementations in as little as 2 weeks for urgent use cases.",
  },
  {
    question:
      "What makes Inner State RAG different from standard RAG solutions?",
    answer:
      "Our Inner State <abbr title='Retrieval Augmented Generation'>RAG</abbr> methodology enhances standard implementations in three key ways: (1) Advanced semantic context tracking that maintains the 'inner state' of conversations, (2) Proprietary chunking and embedding algorithms that improve retrieval accuracy by up to 45%, and (3) Multi-stage verification system that reduces hallucinations by comparing generated content against retrieved knowledge. This results in more coherent, accurate, and contextually aware AI systems.",
  },
  {
    question: "Which industries benefit most from RAG technology?",
    answer:
      "<abbr title='Retrieval Augmented Generation'>RAG</abbr> technology delivers significant value across multiple industries, with financial services, healthcare, legal, manufacturing, and technology sectors seeing the highest ROI. Any organization with substantial proprietary knowledge bases, complex documentation, or regulatory requirements will benefit from <abbr title='Retrieval Augmented Generation'>RAG</abbr> implementations. Our case studies demonstrate average efficiency improvements of 32% in knowledge worker productivity after implementing Inner State <abbr title='Retrieval Augmented Generation'>RAG</abbr> solutions.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 bg-slate-50">
      <div className="container max-w-3xl px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            Frequently Asked Questions about RAG Technology
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl">
            Find answers to common questions about our{" "}
            <abbr title="Retrieval Augmented Generation">RAG</abbr> consulting
            services and implementation methodology.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left text-gray-900 hover:text-blue-700">
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
