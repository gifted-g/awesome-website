"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Send } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">Newsletter</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-dark">
            Stay connected in fellowship, see all events
          </h2>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-dark"
              />
            </div>
            <button
              type="submit"
              className="bg-navy-dark text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-darker transition flex items-center gap-2"
            >
              <Send size={18} />
              <span className="hidden sm:inline">Subscribe</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
