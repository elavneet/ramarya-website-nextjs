import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img
              className="h-10 w-auto mb-4"
              src="/assets/logo-white.png"
              alt="Ramarya Consultancy"
            />
            <p className="text-gray-400 text-sm max-w-md">
              Ramarya Consultancy - Expert IT Services, Scalable Solutions & Data Confidentiality.
              Decade of expertise empowering $100M+ revenue generating companies.
            </p>
            <div className="mt-4">
              <p className="text-sm text-gray-400">
                Intuitive, Scalable Tech Solutions & Safeguarding Your Confidentiality
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>API Development</li>
              <li>ML/AI Solutions</li>
              <li>Tech Consultancy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Ramarya Consultancy. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">Last Updated: October 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
