import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, LineChart, MessageCircle } from "lucide-react"

export function UseCases() {
  const cases = [
    {
      icon: <BookOpen className="h-10 w-10 text-cyan-500" />,
      title: "Internal Knowledge Base Search",
      description:
        "Allowed a tech company's support team to instantly find answers in technical documentation via a chat interface.",
      metric: "Reduced query time by 78%",
    },
    {
      icon: <LineChart className="h-10 w-10 text-cyan-500" />,
      title: "Financial Data Analysis",
      description:
        "Helped an investment firm query historical market reports using natural language for faster research.",
      metric: "Improved research efficiency by 65%",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-cyan-500" />,
      title: "Customer Support Enhancement",
      description:
        "Integrated a customer database with an LLM to provide support agents with instant, context-aware customer history during calls.",
      metric: "Reduced call handling time by 42%",
    },
  ]

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See RAG in Action</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Examples of how we've helped businesses like yours leverage their data
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <Card key={index} className="border-slate-200 transition-all hover:shadow-md overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <CardHeader>
                <div className="mb-4">{case_.icon}</div>
                <CardTitle>{case_.title}</CardTitle>
                <CardDescription className="text-slate-600">{case_.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-block bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                  {case_.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

