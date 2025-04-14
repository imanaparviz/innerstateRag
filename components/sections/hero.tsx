"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamisch importieren für bessere Performance
const SplineWrapper = dynamic(
  () => import("@/components/custom/SplineWrapper"),
  {
    loading: () => (
      <div className="w-full h-full bg-gradient-to-r from-blue-900 to-black flex items-center justify-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-cyan-500 rounded-full animate-spin"></div>
      </div>
    ),
    ssr: false,
  }
);

export function Hero() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    // Verzögertes Laden von Spline für bessere Core Web Vitals
    const timer = setTimeout(() => {
      setIsSplineLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Spline 3D background - Lazy geladen */}
      {isSplineLoaded && (
        <div className="absolute inset-0 w-full h-full z-0 translate-x-[10%]">
          <SplineWrapper
            scene="https://prod.spline.design/c4JvSdFpIBdb3M0t/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      )}

      {/* Fallback-Hintergrund, falls Spline noch nicht geladen ist */}
      {!isSplineLoaded && (
        <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-blue-900 to-black"></div>
      )}

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-start">
        <div className="flex flex-row items-center pl-8 md:pl-16 mr-auto">
          <div className="max-w-3xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl pb-10 mb-10 md:mb-20 lg:text-6xl font-bold tracking-tighter text-white">
                Unlock Your AI&apos;s Full Potential with{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  <abbr
                    title="Retrieval Augmented Generation"
                    className="no-underline"
                  >
                    RAG
                  </abbr>{" "}
                  Consulting
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl w-full md:w-[70%]">
                Reduce AI hallucinations by up to 78% and transform your
                enterprise knowledge into a competitive advantage with our
                expert{" "}
                <abbr
                  title="Retrieval Augmented Generation"
                  className="no-underline"
                >
                  RAG
                </abbr>{" "}
                technology and Inner State methodology.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-none"
              >
                <Link href="#contact">
                  Schedule a{" "}
                  <abbr
                    title="Retrieval Augmented Generation"
                    className="no-underline"
                  >
                    RAG
                  </abbr>{" "}
                  Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-gray-700 bg-gray-800/70"
              >
                <Link href="#use-cases">
                  See{" "}
                  <abbr
                    title="Retrieval Augmented Generation"
                    className="no-underline"
                  >
                    RAG
                  </abbr>{" "}
                  Results
                </Link>
              </Button>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200">
                  Reduce Hallucinations by 78%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200">
                  Unlock Proprietary Knowledge
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200">
                  3.5x{" "}
                  <abbr title="Return on Investment" className="no-underline">
                    ROI
                  </abbr>{" "}
                  on{" "}
                  <abbr
                    title="Retrieval Augmented Generation"
                    className="no-underline"
                  >
                    RAG
                  </abbr>{" "}
                  Implementation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
