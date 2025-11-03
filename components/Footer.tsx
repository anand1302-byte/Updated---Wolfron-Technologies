import Link from 'next/link';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Products' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-secondary text-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="text-white font-bold text-xl">Wolfron</span>
            </div>
            <p className="text-sm text-gray-400">
              Organizing India's Mobility Ecosystem Through Technology
            </p>
            <div className="space-y-2 mt-4">
              <a
                href="https://taxiwalepartners.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors text-sm block"
              >
                TaxiWale Partners →
              </a>
              <a
                href="https://orionstechelite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors text-sm block"
              >
                Orions Tech Elite →
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  The Spire Office-314, 150 Ft Ring Road,<br />
                  Madhapar, Rajkot, Gujarat – 360006
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a
                  href="mailto:wolfrontechnologies@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  wolfrontechnologies@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-primary flex-shrink-0" />
                <a
                  href="tel:+919103774717"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  +91 9103774717
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/achievements"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="/journey"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Our Journey
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Wolfron Technologies LLP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

