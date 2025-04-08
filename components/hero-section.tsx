import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Unlock Your Data's Potential: Custom AI Solutions Powered by RAG
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
            We build bespoke Retrieval-Augmented Generation (RAG) systems that securely connect your company's databases
            to powerful Large Language Models (LLMs), enabling intuitive natural language querying and insightful
            answers based solely on your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
              Schedule a Free Discovery Call
            </Button>
            <Button variant="outline" size="lg" className="border-slate-500 text-white hover:bg-slate-700">
              Learn More About RAG
            </Button>
          </div>
          <div className="pt-6">
            <p className="text-sm text-slate-400">Secure & Confidential</p>
            <div className="flex gap-4 mt-2">
              <Image
                src="/placeholder.svg?height=30&width=80"
                alt="Python"
                width={80}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/placeholder.svg?height=30&width=80"
                alt="PostgreSQL"
                width={80}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/placeholder.svg?height=30&width=80"
                alt="OpenAI"
                width={80}
                height={30}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-cyan-500 rounded-full opacity-20 blur-3xl"></div>
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="AI Data Visualization"
              width={500}
              height={500}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

