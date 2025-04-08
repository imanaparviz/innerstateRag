"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span
              className={`text-xl font-bold ${scrolled ? "bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent" : "text-white"}`}
            >
              RAG Consulting
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#why-us"
            className={`text-sm font-medium ${scrolled ? "hover:text-cyan-600" : "text-white hover:text-cyan-300"} transition-colors`}
          >
            Why Choose Us
          </Link>
          <Link
            href="#use-cases"
            className={`text-sm font-medium ${scrolled ? "hover:text-cyan-600" : "text-white hover:text-cyan-300"} transition-colors`}
          >
            Use Cases
          </Link>
          <Link
            href="#process"
            className={`text-sm font-medium ${scrolled ? "hover:text-cyan-600" : "text-white hover:text-cyan-300"} transition-colors`}
          >
            Our Process
          </Link>
          <Link
            href="#testimonials"
            className={`text-sm font-medium ${scrolled ? "hover:text-cyan-600" : "text-white hover:text-cyan-300"} transition-colors`}
          >
            Testimonials
          </Link>
          <Button asChild variant="default" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
            <Link href="#contact">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-md ${scrolled ? "hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-b">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#why-us"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
              onClick={toggleMenu}
            >
              Why Choose Us
            </Link>
            <Link
              href="#use-cases"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
              onClick={toggleMenu}
            >
              Use Cases
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
              onClick={toggleMenu}
            >
              Our Process
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Button
              asChild
              variant="default"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white w-full"
              onClick={toggleMenu}
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

