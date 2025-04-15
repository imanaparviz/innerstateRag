"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Import loading screen with no SSR to avoid hydration issues
const LoadingScreen = dynamic(
  () =>
    import("@/components/ui/loading-screen").then((mod) => ({
      default: mod.LoadingScreen,
    })),
  { ssr: false }
);

export function HomeLoadingWrapper() {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);

  // Show loading screen on every page load/navigation
  useEffect(() => {
    // Reset loading state on navigation/page load
    setShowLoader(true);

    console.log("Loading screen active on path:", pathname);

    // Force loading to be visible for debugging
    const timer = setTimeout(() => {
      setShowLoader(false);

      // Explizit das Scrollen aktivieren, wenn der Loader entfernt wird
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        document.body.style.height = "";
        document.documentElement.style.height = "";
      }

      console.log("Page loaded completely, scrolling enabled");
    }, 2000);

    return () => {
      // Sicherstellen, dass Scrollen beim Unmount aktiviert wird
      if (typeof window !== "undefined") {
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
      clearTimeout(timer);
    };
  }, [pathname]);

  // Return loader component or null
  return showLoader ? <LoadingScreen /> : null;
}
