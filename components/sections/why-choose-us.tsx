import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeDollarSign, Brain, Database, LineChart, Shield, Zap } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      icon: <Brain className="h-10 w-10 text-cyan-600" />,
      title: "Deep RAG Specialization",
      description:
        "Our team specializes exclusively in RAG implementations with expertise across vector databases, embedding models, and LLM integration.",
    },
    {
      icon: <BadgeDollarSign className="h-10 w-10 text-cyan-600" />,
      title: "Measurable Business Value",
      description:
        "We focus on delivering quantifiable ROI through improved efficiency, accuracy, and knowledge utilization.",
    },
    {
      icon: <Shield className="h-10 w-10 text-cyan-600" />,
      title: "Reduced AI Hallucinations",
      description:
        "Our proprietary methodology reduces AI hallucinations by up to 50%, ensuring more reliable and trustworthy AI outputs.",
    },
    {
      icon: <Database className="h-10 w-10 text-cyan-600" />,
      title: "Proprietary Knowledge Unlocking",
      description:
        "Transform your internal documents, databases, and knowledge bases into valuable AI-accessible resources.",
    },
    {
      icon: <Zap className="h-10 w-10 text-cyan-600" />,
      title: "Accelerated Implementation",
      description: "Our proven framework reduces implementation time by 40% compared to in-house development efforts.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-cyan-600" />,
      title: "Continuous Optimization",
      description:
        "We don't just build and leave - our ongoing optimization ensures your RAG system improves over time.",
    },
  ]

  return (
    <section id="why-us" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why Choose Our RAG Consulting Services
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl max-w-3xl mx-auto">
            We deliver specialized expertise in Retrieval Augmented Generation with a focus on measurable business
            outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all">
              <CardHeader className="pb-2">
                <div className="mb-2">{reason.icon}</div>
                <CardTitle className="text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

