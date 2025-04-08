"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import SplineWrapper from "@/components/custom/SplineWrapper";

export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Spline 3D background */}
      <div className="absolute inset-0 w-full h-full z-0 translate-x-[10%]">
        <SplineWrapper
          scene="https://prod.spline.design/c4JvSdFpIBdb3M0t/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-start">
        <div className="flex flex-row items-center pl-16  mr-auto">
          <div className="max-w-3xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl pb-10 mb-20 lg:text-6xl font-bold tracking-tighter text-white">
                Unlock Your AI&apos;s Full Potential with{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  RAG Consulting
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl w-[70%]">
                Reduce AI hallucinations by up to 50% and transform your
                enterprise knowledge into a competitive advantage with our
                expert Retrieval Augmented Generation services.
              </p>
            </div>
            <div className="flex flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"
              >
                <Link href="#contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="#use-cases">See Our Results</Link>
              </Button>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200">Reduce Hallucinations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200">
                  Unlock Proprietary Knowledge
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200">Measurable ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
