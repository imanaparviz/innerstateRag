"use client";

import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Always show the loading screen regardless of previous visits
    // Block scrolling while loading
    if (typeof window !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    // Start fade out after 1.8 seconds
    const loadingTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    // Remove component after fade animation completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scrolling
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
    }, 2100); // 1800ms + 300ms for fade animation

    return () => {
      // Make sure we re-enable scrolling when component unmounts
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
      }
      clearTimeout(loadingTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center p-10 rounded-2xl">
        <div className="mb-8 text-center">
          <img
            src="/logo.png"
            alt="Inner State RAG Consulting Logo"
            className="h-64 w-auto object-contain"
          />
        </div>
        <div className="flex space-x-5">
          <div className="h-6 w-6 bg-white rounded-full loading-dot loading-dot-1" />
          <div className="h-6 w-6 bg-white rounded-full loading-dot loading-dot-2" />
          <div className="h-6 w-6 bg-white rounded-full loading-dot loading-dot-3" />
        </div>
      </div>
    </div>
  );
}
