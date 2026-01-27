import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About Journal</h3>
            <p className="text-sm leading-relaxed">
              Sanmati Spectrum of Knowledge & Emerging Discourse is a national multidisciplinary 
              quarterly research journal promoting original research and scholarly discourse.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/basic-info" className="hover:text-primary-400 transition-colors">
                  Basic Information
                </Link>
              </li>
              <li>
                <Link href="/editorial-team" className="hover:text-primary-400 transition-colors">
                  Editorial Team
                </Link>
              </li>
              <li>
                <Link href="/submission-guidelines" className="hover:text-primary-400 transition-colors">
                  Submission Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>sanmatijournal@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+91 9870713912<br />+91 8979782949</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Teerthanker Mahaveer University, Moradabad</span>
              </li>
            </ul>
          </div>

          {/* Publisher */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Publisher</h3>
            <p className="text-sm leading-relaxed">
              <strong>JTS Publications</strong><br />
              V-508 Gali No. 17<br />
              Vijay Park<br />
              Delhi – 110053
            </p>
            <div className="mt-4">
              <p className="text-sm">
                <strong>ISSN (Print):</strong> 3108-1819
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Sanmati Spectrum of Knowledge & Emerging Discourse. 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
