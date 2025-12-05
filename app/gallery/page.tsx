import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "Gallery - Celestial Church of Christ",
  description: "View photos from our church events and activities",
}

export default function GalleryPage() {
  const galleryItems = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    size: ["tall", "wide", "small", "medium"][Math.floor(Math.random() * 4)],
  }))

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-navy-dark mb-2">Gallery</h1>
          <p className="text-lg text-gray-600">Moments from our church gatherings and activities</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`
                bg-gray-200 rounded-lg overflow-hidden cursor-pointer
                transition-transform hover:scale-105 duration-300
                ${item.size === "tall" ? "row-span-2" : ""}
                ${item.size === "wide" ? "col-span-2" : ""}
                ${item.size === "medium" ? "col-span-1 row-span-1" : ""}
              `}
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-gray-500 text-sm font-medium">Photo {item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
