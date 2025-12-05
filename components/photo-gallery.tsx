export default function PhotoGallery() {
  const galleryItems = [
    { color: "bg-red-500", span: "col-span-2 row-span-1" },
    { color: "bg-green-600", span: "col-span-1 row-span-1" },
    { color: "bg-green-800", span: "col-span-1 row-span-2" },
    { color: "bg-purple-600", span: "col-span-1 row-span-2" },
    { color: "bg-lime-600", span: "col-span-1 row-span-1" },
    { color: "bg-red-700", span: "col-span-2 row-span-1" },
    { color: "bg-gray-500", span: "col-span-1 row-span-1" },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">Photo Room</p>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-dark mb-4">
            Stay connected in fellowship, see all events and gatherings coming up
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`${item.color} ${item.span} rounded-lg opacity-90 hover:opacity-100 transition cursor-pointer`}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button className="bg-navy-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-navy-darker transition">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
