import { Card, CardContent } from "@/components/ui/card"
import { CalendarCheck, FileText, Database, Settings, Server, Users } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: <CalendarCheck className="h-10 w-10 text-white" />,
      title: "Discovery & Assessment",
      description:
        "We analyze your current data infrastructure, knowledge bases, and AI implementation to identify opportunities for RAG integration.",
    },
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Strategy & Architecture",
      description:
        "Our team designs a custom RAG architecture tailored to your specific business needs and technical environment.",
    },
    {
      icon: <Database className="h-10 w-10 text-white" />,
      title: "Data Preparation",
      description:
        "We prepare your data for RAG implementation, including chunking, embedding, and vector database setup.",
    },
    {
      icon: <Settings className="h-10 w-10 text-white" />,
      title: "RAG Implementation",
      description: "Our engineers build and integrate the RAG system with your existing infrastructure and AI models.",
    },
    {
      icon: <Server className="h-10 w-10 text-white" />,
      title: "Testing & Optimization",
      description:
        "We rigorously test the system and optimize for accuracy, latency, and relevance of retrieved information.",
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Training & Handover",
      description:
        "We provide comprehensive training and documentation to ensure your team can maintain and evolve the RAG system.",
    },
  ]

  return (
    <section id="process" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our RAG Implementation Process</h2>
          <p className="mt-4 text-gray-500 md:text-xl max-w-3xl mx-auto">
            A proven methodology for successful Retrieval Augmented Generation implementation
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  <div className="md:w-1/2 p-4">
                    <Card className={`border-none shadow-md ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-500">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full p-4 shadow-lg z-10">
                      {step.icon}
                    </div>
                  </div>

                  <div className="md:w-1/2 p-4">
                    {/* Empty div for layout on desktop */}
                    <div className="hidden md:block"></div>

                    {/* Mobile version of the icon */}
                    <div className="md:hidden flex items-center mb-4">
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full p-3 shadow-lg mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

