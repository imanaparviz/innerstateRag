import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, HeadphonesIcon, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UseCases() {
  const cases = [
    {
      title: "Customer Support Enhancement",
      description:
        "Our RAG implementation helped a Fortune 500 company enhance their customer support by providing agents with instant access to relevant information.",
      stats: [
        { value: "30%", label: "Fewer Escalations" },
        { value: "25%", label: "Faster Resolution" },
        { value: "92%", label: "Agent Satisfaction" },
      ],
      image: "/three.png",
    },
    {
      title: "Employee Knowledge Hub",
      description:
        "We transformed an enterprise's fragmented knowledge base into a unified, AI-powered assistant that employees could query in natural language.",
      stats: [
        { value: "40%", label: "Faster Information Retrieval" },
        { value: "65%", label: "Increased Knowledge Sharing" },
        { value: "3.2h", label: "Weekly Time Saved Per Employee" },
      ],
      image: "/two.png",
    },
    {
      title: "Market Research Assistant",
      description:
        "Our RAG system helped a consulting firm analyze vast amounts of market reports and research papers to generate insights and recommendations.",
      stats: [
        { value: "60%", label: "Faster Report Generation" },
        { value: "45%", label: "More Sources Analyzed" },
        { value: "4.8/5", label: "Accuracy Rating" },
      ],
      image: "/one.png",
    },
  ];

  return (
    <section id="use-cases" className="w-full py-12 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            Real-World RAG Success Stories
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl max-w-3xl mx-auto">
            See how our RAG consulting services have transformed businesses
            across industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <Card
              key={index}
              className="border-none shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={case_.image || "/placeholder.svg"}
                  alt={case_.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{case_.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-500 mb-6">{case_.description}</p>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {case_.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <p className="text-2xl font-bold text-cyan-600">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button
                  variant="ghost"
                  className="w-full justify-between group"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
