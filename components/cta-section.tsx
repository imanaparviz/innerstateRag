import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform How You Interact With Your Data?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how a custom RAG AI solution can benefit your specific business. Schedule your complimentary
          discovery call today.
        </p>
        <Button size="lg" className="bg-white text-cyan-600 hover:bg-slate-100">
          Schedule Your Free Discovery Call
        </Button>
      </div>
    </section>
  )
}

