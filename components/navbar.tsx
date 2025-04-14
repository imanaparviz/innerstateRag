"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, Languages } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Supported locales from configuration
import { locales } from "@/i18n"; // Assuming i18n.ts exports locales

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const pathname = usePathname(); // Get current path without locale
  const locale = useLocale(); // Get current locale

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const footer = document.getElementById("site-footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (footerRect.top < windowHeight / 2) {
          setIsNavbarVisible(false);
        } else {
          setIsNavbarVisible(true);
        }
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to get the path without the locale prefix
  const getPathWithoutLocale = (path: string, currentLocale: string) => {
    const segments = path.split("/");
    if (segments.length > 1 && locales.includes(segments[1])) {
      return segments.slice(2).join("/") || "/"; // Return base path or root
    }
    return path; // Path doesn't start with a known locale prefix
  };

  const pathWithoutLocale = getPathWithoutLocale(pathname, locale);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 transform ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40"
          : "bg-transparent"
      } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Link - always points to root for the current locale */}
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/logo.png"
              alt="RAG Consulting Logo"
              width={50}
              height={50}
              className="mr-3"
              style={{ filter: "brightness(1.1) contrast(1.1)" }}
            />
            <span
              className={`text-xl font-extrabold ${
                scrolled
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
                  : "text-white"
              }`}
            >
              RAG Consulting
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <ul className="flex space-x-6">
            <li>
              <Link
                href={`/${locale}/`}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-300"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/inner-state-rag`}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-300"
                }`}
              >
                Inner State RAG
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/inner-state`}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-300"
                }`}
              >
                Inner State
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/rag`}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-300"
                }`}
              >
                RAG
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/rag-glossary`}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-300"
                }`}
              >
                RAG Glossary
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/blog`}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900"
                    : "text-white hover:text-gray-300"
                }`}
              >
                Blog
              </Link>
            </li>
          </ul>

          {/* Language Switcher Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "" : "text-white hover:bg-white/10"}
              >
                <Languages className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {locales.map((loc) => (
                <DropdownMenuItem key={loc} asChild>
                  <Link href={`/${loc}/${pathWithoutLocale}`} locale={loc}>
                    {loc.toUpperCase()} {locale === loc ? "(Current)" : ""}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle for desktop */}
          <ThemeToggle />

          <Button
            asChild
            variant="default"
            size="sm"
            className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
          >
            <Link href="#contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button & Switcher */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Language Switcher Dropdown (Mobile) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={scrolled ? "" : "text-white hover:bg-white/10"}
              >
                <Languages className="h-5 w-5" />
                <span className="sr-only">Change language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {locales.map((loc) => (
                <DropdownMenuItem key={loc} asChild>
                  <Link href={`/${loc}/${pathWithoutLocale}`} locale={loc}>
                    {loc.toUpperCase()} {locale === loc ? "(Current)" : ""}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle for mobile */}
          <ThemeToggle />

          <button
            className={`p-2 rounded-md ${
              scrolled ? "hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col space-y-4">
            <ul className="flex flex-col space-y-4">
              {/* Mobile Nav Links - Updated hrefs */}
              <li>
                <Link
                  href={`/${locale}/`}
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/inner-state-rag`}
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  onClick={toggleMenu}
                >
                  Inner State RAG
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/inner-state`}
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  onClick={toggleMenu}
                >
                  Inner State
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/rag`}
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  onClick={toggleMenu}
                >
                  RAG
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/rag-glossary`}
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  onClick={toggleMenu}
                >
                  RAG Glossary
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </li>
            </ul>
            <Button
              asChild
              variant="default"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white w-full"
              onClick={toggleMenu} // Added onClick here too
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

// Add this style to your global CSS file or a layout component
export function NavbarSpacer() {
  return <div className="h-16 mb-8" aria-hidden="true"></div>;
}
