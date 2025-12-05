import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Us - Celestial Church of Christ",
  description: "Learn about our church, our mission, and our community",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-navy-dark mb-4">About Us</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-navy-dark mb-6">
            A Breeding Ground for Men, Where We Encounter <span className="text-blue-500">GOD.</span>
          </h1>
        </div>

        <div className="mb-16">
          <div className="relative h-96 md:h-96 rounded-2xl overflow-hidden border-4 border-blue-500">
            <img
              src="/modern-church-building-with-blue-and-white-archite.jpg"
              alt="Church Building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed">
                Boolean object reesizing pencil select arrow scrolling figma. Pen community rectangle mask strikethrough
                figma. Edit layout connection opacity group editor list share rectangle star. Component line bullet
                thumbnail variant star duplicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-navy-dark mb-12">Our History</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="h-72 rounded-lg overflow-hidden">
            <img
              src="/church-congregation-members-in-white-garments-wors.jpg"
              alt="Church Congregation"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-navy-dark mb-4">Our History</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Strikethrough link edit scrolling polygon pencil. Clip create reesizing frame slice union line. Comment
              opacity pixel content layer export outline. Plugin draft share thumbnail shadow blur follower. Invite
              connection stroke edit thumbnail pencil distribute flows union. Rectangle community asset hand lipsum.
              Opacity device mask arrange overflow slice line boolean lipsum layout.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Additional context about our church's journey and growth through the years.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-navy-dark mb-4">Our History</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Strikethrough link edit scrolling polygon pencil. Clip create reesizing frame slice union line. Comment
              opacity pixel content layer export outline. Plugin draft share thumbnail shadow blur follower. Invite
              connection stroke edit thumbnail pencil distribute flows union.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our commitment to serving the community and building faith continues to grow.
            </p>
          </div>
          <div className="h-72 rounded-lg overflow-hidden">
            <img
              src="/outdoor-gathering-of-church-members-in-nature.jpg"
              alt="Church Gathering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-72 rounded-lg overflow-hidden">
            <img
              src="/modern-church-building-entrance-with-community.jpg"
              alt="Church Building Entrance"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-navy-dark mb-4">Our History</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Strikethrough link edit scrolling polygon pencil. Clip create reesizing frame slice union line. Comment
              opacity pixel content layer export outline. Plugin draft share thumbnail shadow blur follower. Invite
              connection stroke edit thumbnail pencil distribute flows union.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Rectangle community asset hand lipsum. Opacity device mask arrange overflow slice line boolean lipsum
              layout.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
