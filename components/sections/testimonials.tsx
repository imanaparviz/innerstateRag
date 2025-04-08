import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The RAG implementation transformed how our customer support team accesses information. Response times are down, and accuracy is way up.",
      author: "Sarah Johnson",
      title: "CTO, Enterprise Solutions Inc.",
      avatar: "/placeholder.svg?height=80&width=80",
      stars: 5,
    },
    {
      quote:
        "We tried implementing RAG in-house for months with limited success. This team delivered a working solution in weeks that exceeded our expectations.",
      author: "Michael Chen",
      title: "VP of AI, TechGrowth",
      avatar: "/placeholder.svg?height=80&width=80",
      stars: 5,
    },
    {
      quote:
        "The ROI on our RAG implementation was evident within the first quarter. Our research team is now 60% more efficient at generating insights.",
      author: "Jessica Williams",
      title: "Director of Research, MarketInsight",
      avatar: "/placeholder.svg?height=80&width=80",
      stars: 5,
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl max-w-3xl mx-auto">
            Hear from organizations that have transformed their AI capabilities
            with our RAG consulting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-500 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
