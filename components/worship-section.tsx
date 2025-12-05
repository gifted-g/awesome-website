export default function WorshipSection() {
  const services = [
    {
      title: "Sunrise",
      time: "Early Service",
      description: "6am",
    },
    {
      title: "Main Service",
      time: "Morning Service",
      description: "9am",
    },
    {
      title: "Praise",
      time: "Afternoon Service",
      description: "3pm",
    },
    {
      title: "All worship of the Church",
      time: "Evening Service",
      description: "6pm",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-dark mb-4">Join Us for Worship</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gather with a vibrant gospel family, connect lovers, spend time in spirit.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-navy-dark mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.time}</p>
              <p className="text-2xl font-bold text-gold">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-navy-dark transition" />
          <button className="w-3 h-3 rounded-full bg-navy-dark" />
        </div>
      </div>
    </section>
  )
}
