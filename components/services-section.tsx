import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, FileCode, MessageSquare, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <FileCode className="h-10 w-10 text-cyan-500" />,
      title: "Custom RAG System Design & Development",
      description:
        "We design and build RAG pipelines tailored precisely to your data structure, security requirements, and business goals. Flexible and scalable architecture.",
    },
    {
      icon: <Database className="h-10 w-10 text-cyan-500" />,
      title: "Secure Database & LLM Integration",
      description:
        "Seamlessly connect your existing databases (SQL, NoSQL, etc.) or document repositories with leading LLMs, ensuring data privacy and security throughout the process.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-cyan-500" />,
      title: "Natural Language Query Interface",
      description:
        "Develop intuitive interfaces (e.g., chatbots, search bars) allowing non-technical users to interact with your data easily using everyday language.",
    },
    {
      icon: <Zap className="h-10 w-10 text-cyan-500" />,
      title: "Ongoing Support & Optimisation",
      description:
        "Providing maintenance, performance tuning, and updates to keep your AI system running smoothly and effectively.",
    },
  ]

  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialised RAG Development Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide end-to-end solutions to connect your data with AI, creating powerful tools for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-slate-200 transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-sm">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

