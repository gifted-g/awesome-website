"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useAnimationControls } from "@/hooks/use-animation-controls"

export default function WorshipSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2, delay: 100 })
  const { getAnimationDuration, prefersReducedMotion } = useAnimationControls()

  const services = [
    { title: "Sunrise", time: "Early Service", description: "6am" },
    { title: "Main Service", time: "Morning Service", description: "9am" },
    { title: "Praise", time: "Afternoon Service", description: "3pm" },
    { title: "All worship of the Church", time: "Evening Service", description: "6pm" },
  ]

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: getAnimationDuration(0.5) },
    },
    whileHover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  }

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-background via-background to-secondary/5 dark:from-background dark:via-background dark:to-primary/5 overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: getAnimationDuration(0.6) }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4 leading-tight">
            Join Us for Worship
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Gather with a vibrant gospel family, connect lovers, spend time in spirit.
          </p>
        </motion.div>

        {/* Service Cards with glassmorphism */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="glass group relative p-6 sm:p-8 rounded-2xl overflow-hidden transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -12, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            >
              {/* Inner gradient glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground mb-2 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 font-light">{service.time}</p>
                <motion.p
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  animate={hoveredIndex === index ? { scale: 1.15 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <motion.div
          className="flex justify-center gap-2 mt-6 sm:mt-8"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: getAnimationDuration(0.6), delay: 0.4 }}
        >
          <motion.button
            className="w-3 h-3 rounded-full bg-gray-400 hover:bg-navy-dark transition-all duration-300"
            whileHover={{ scale: 1.5 }}
          />
          <motion.button
            className="w-3 h-3 rounded-full bg-navy-dark hover:scale-150 transition-all duration-300"
            whileHover={{ scale: 1.5 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
