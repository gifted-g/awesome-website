export default function FeaturedArticle() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">Featured Us</p>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-navy-dark mb-4">
              Cefuota - A Breeding Ground for Men, Where
            </h2>
            <p className="text-lg font-semibold text-gray-800 mb-6">
              We Encounter God,{" "}
              <span className="text-gray-600">Where 'No-one is a Stranger' and Where Faith Grows Strong...</span>
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe strongly through prayer, worship, fellowship, and inspiration of the Holy Spirit that is as
              well and spirit companionship is vital component inside God's great spiritual kingdom through divine
              purpose and strong spiritual life and faith growth strong.
            </p>
            <button className="text-navy-dark font-semibold hover:text-gold transition inline-flex items-center gap-2">
              Read More →
            </button>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-300 h-60 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516594915649-fe3e3eb8e7fe?w=400&h=400&fit=crop"
                alt="Church gathering"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-300 h-28 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=200&fit=crop"
                  alt="Prayer moment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 h-28 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552531881-e76b75601ba0?w=400&h=200&fit=crop"
                  alt="Worship scene"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
