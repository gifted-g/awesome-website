import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import WorshipSection from "@/components/worship-section"
import FeaturedArticle from "@/components/featured-article"
import PhotoGallery from "@/components/photo-gallery"
import NewsletterSection from "@/components/newsletter-section"
import MapSection from "@/components/map-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WorshipSection />
      <FeaturedArticle />
      <PhotoGallery />
      <NewsletterSection />
      <MapSection />
      <Footer />
    </main>
  )
}
