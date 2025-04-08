import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Lock, Users, Zap } from "lucide-react"

export function WhyChooseUs() {
  const advantages = [
    {
      icon: <Zap className="h-8 w-8 text-cyan-500" />,
      title: "Deep RAG Expertise",
      description:
        "We specialize specifically in Retrieval-Augmented Generation, ensuring best practices and optimal results.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-cyan-500" />,
      title: "Truly Custom Solutions",
      description:
        "No off-the-shelf products. Every system is built from the ground up for your unique data and needs.",
    },
    {
      icon: <Lock className="h-8 w-8 text-cyan-500" />,
      title: "Focus on Data Security",
      description: "We prioritize the confidentiality and integrity of your sensitive business information.",
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-500" />,
      title: "Collaborative Partnership",
      description: "We work closely with you throughout the process, ensuring transparency and alignment.",
    },
  ]

  return (
    <section className="w-full py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The InnaState RAG Advantage</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">What sets our RAG development services apart from the rest</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-slate-300 text-sm">{advantage.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

