"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-navy-dark rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">CC</span>
            </div>
            <span className="text-navy-dark font-semibold text-sm">CCCS FUTA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-navy-dark text-sm font-medium transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-navy-dark text-sm font-medium transition">
              About
            </Link>
            <Link href="/events" className="text-gray-700 hover:text-navy-dark text-sm font-medium transition">
              Events
            </Link>
            <Link href="/gallery" className="text-gray-700 hover:text-navy-dark text-sm font-medium transition">
              Gallery
            </Link>
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <button className="bg-navy-dark text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-navy-darker transition">
                Connect Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-navy-dark py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-navy-dark py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/events"
              className="block text-gray-700 hover:text-navy-dark py-2"
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/gallery"
              className="block text-gray-700 hover:text-navy-dark py-2"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-navy-dark text-white px-6 py-2 rounded-full text-sm font-semibold mt-4">
                Connect Us
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
