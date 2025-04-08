import { Calendar, CheckSquare, FileText, Server, Users } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Discovery & Consultation",
      description:
        "We start with a free virtual meeting (Zoom) to understand your business challenges, data landscape, and objectives. We'll discuss feasibility and initial ideas.",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Proposal & Agreement",
      description:
        "Based on our discussion, we provide a detailed proposal outlining the project scope, deliverables, timeline, investment, and terms.",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "System Architecture & Development",
      description:
        "Our expert team designs the RAG architecture and begins development, integrating your data sources and configuring the LLM.",
    },
    {
      icon: <CheckSquare className="h-8 w-8 text-white" />,
      title: "Iterative Testing & Feedback",
      description:
        "We conduct rigorous testing and involve you in feedback loops to refine the system's accuracy and usability.",
    },
    {
      icon: <Server className="h-8 w-8 text-white" />,
      title: "Deployment & Integration",
      description:
        "We deploy the finalised RAG system into your environment (cloud or on-premise) and ensure smooth integration with your existing workflows.",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Training & Handover",
      description:
        "We provide necessary training for your team to effectively use the new system and offer ongoing support options.",
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey to AI-Powered Insights</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We follow a structured, transparent process to ensure your custom RAG solution meets your exact needs.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="md:flex items-center">
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 md:order-2"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 h-full">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 shadow-lg z-10">
                    {step.icon}
                  </div>
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-2" : "md:pr-16"}`}>
                  {/* Empty div for layout on desktop */}
                  <div className="hidden md:block"></div>

                  {/* Mobile version of the icon */}
                  <div className="md:hidden flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 shadow-lg mr-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
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

