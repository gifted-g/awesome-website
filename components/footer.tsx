import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-gray-900 text-sm font-bold">CC</span>
              </div>
              <span className="text-white font-semibold">CCCS FUTA</span>
            </div>
            <p className="text-sm">
              Celestial Church of Christ Students' Parish FUTA. Serving the community with faith and fellowship.
            </p>
          </div>

          {/* Units */}
          <div>
            <h3 className="text-white font-semibold mb-4">Units</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/units/brothers" className="hover:text-white transition">
                  Brothers' unit
                </Link>
              </li>
              <li>
                <Link href="/units/sisters" className="hover:text-white transition">
                  Sisters' unit
                </Link>
              </li>
              <li>
                <Link href="/units/evangelism" className="hover:text-white transition">
                  Evangelism unit
                </Link>
              </li>
              <li>
                <Link href="/units/choir" className="hover:text-white transition">
                  Choir unit
                </Link>
              </li>
              <li>
                <Link href="/units/drama" className="hover:text-white transition">
                  Drama unit
                </Link>
              </li>
              <li>
                <Link href="/units/academic" className="hover:text-white transition">
                  Academic unit
                </Link>
              </li>
              <li>
                <Link href="/units/welfare" className="hover:text-white transition">
                  Welfare unit
                </Link>
              </li>
              <li>
                <Link href="/units/ushering" className="hover:text-white transition">
                  Ushering unit
                </Link>
              </li>
              <li>
                <Link href="/units/publicity" className="hover:text-white transition">
                  Publicity unit
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">About us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Celefuta
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition">
                  Upcoming events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">
                  Outings and calls
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Social</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Facebook size={18} />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <Youtube size={18} />
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 flex-shrink-0" />
              <a href="mailto:info@ccfuta.org" className="hover:text-white transition">
                info@ccfuta.org
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 flex-shrink-0" />
              <a href="tel:+2348012345678" className="hover:text-white transition">
                +234 (0) 801-234-5678
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" />
              <span>Federal University of Technology, Akure, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 Celestial Church of Christ. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
