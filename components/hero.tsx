"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    "https://images.unsplash.com/photo-1552531881-e76b75601ba0?w=1200&h=400&fit=crop",
    "https://images.unsplash.com/photo-1516594915649-fe3e3eb8e7fe?w=1200&h=400&fit=crop",
    "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1200&h=400&fit=crop",
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Text */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">Welcome to</p>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-navy-dark mb-4">Celestial Church of Christ</h1>
          <h2 className="text-2xl lg:text-3xl font-serif font-bold text-navy-dark mb-6">Students' Parish FUTA.</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed mb-8">
            What are we doing right here today or our history and traditions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-navy-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-darker transition">
              About + Services
            </button>
            <button className="border-2 border-navy-dark text-navy-dark px-8 py-3 rounded-lg font-semibold hover:bg-navy-light hover:text-white transition">
              Upcoming Events
            </button>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={slides[activeSlide] || "/placeholder.svg"}
              alt="Church community"
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-navy-dark" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-navy-dark" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition ${
                  index === activeSlide ? "bg-navy-dark w-8" : "bg-gray-300 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
