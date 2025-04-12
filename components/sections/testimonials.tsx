import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The RAG implementation transformed how our customer support team accesses information. Response times are down, and accuracy is way up.",
      name: "David Miller",
      title: "CTO, Enterprise Solutions Inc.",
      image: "/acc.png", // Assuming acc.png is in the public folder
    },
    {
      quote:
        "We tried implementing RAG in-house for months with limited success. This team delivered a working solution in weeks that exceeded our expectations.",
      name: "Michael Chen",
      title: "VP of AI, TechGrowth",
      image: "/acc2.png", // Assuming acc2.png is in the public folder
    },
    {
      quote:
        "The ROI on our RAG implementation was evident within the first quarter. Our research team is now 60% more efficient at generating insights.",
      name: "Robert Brown",
      title: "Director of Research, MarketInsight",
      image: "/acc3.png", // Assuming acc3.png is in the public folder
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray-500 md:text-xl max-w-3xl mx-auto">
            Hear directly from businesses that have benefited from our RAG
            expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-md flex flex-col bg-gray-900"
            >
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center mt-auto">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-100">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
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
