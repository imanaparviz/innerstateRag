"use client";

import { useEffect, useState } from "react";

type SplineProps = {
  scene: string;
  className?: string;
};

export default function SplineWrapper({ scene, className = "" }: SplineProps) {
  const [SplineComponent, setSplineComponent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadSpline() {
      try {
        // Dynamically import the Spline component
        const splineModule = await import("@splinetool/react-spline");

        // If component is still mounted, set the Spline component
        if (isMounted) {
          setSplineComponent(() => splineModule.default);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Failed to load Spline:", error);
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
      }
    }

    loadSpline();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <div
        className={`bg-gradient-to-b from-slate-900 to-slate-800 animate-pulse ${className}`}
      />
    );
  }

  if (hasError || !SplineComponent) {
    return (
      <div
        className={`bg-gradient-to-b from-slate-900 to-slate-800 ${className}`}
      />
    );
  }

  return <SplineComponent scene={scene} className={className} />;
}
