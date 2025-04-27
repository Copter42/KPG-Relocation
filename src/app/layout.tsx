import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800">
            Koh Phangan Relocation Portal
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/guides/visa-guide" className="text-gray-700 hover:text-blue-600">
              Guides
            </Link>
            <Link href="/area-chooser" className="text-gray-700 hover:text-blue-600">
              Area Chooser
            </Link>
            <Link href="/visa-wizard" className="text-gray-700 hover:text-blue-600">
              Visa Wizard
            </Link>
            <Link href="/cost-estimator" className="text-gray-700 hover:text-blue-600">
              Cost Estimator
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Updates & Resources</h3>
              <p className="mb-4">Subscribe to receive our latest guides, checklists, and exclusive relocation tips.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-2">We'll send you valuable insights about moving to Koh Phangan. No spam. Ever.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Related Guides</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/guides/visa-guide" className="text-blue-600 hover:text-blue-800">
                    Visa Guide
                  </Link>
                </li>
                <li>
                  <Link href="/guides/housing-guide" className="text-blue-600 hover:text-blue-800">
                    Housing Guide
                  </Link>
                </li>
                <li>
                  <Link href="/guides/cost-of-living" className="text-blue-600 hover:text-blue-800">
                    Cost of Living
                  </Link>
                </li>
                <li>
                  <Link href="/guides/healthcare-wellness" className="text-blue-600 hover:text-blue-800">
                    Healthcare & Wellness
                  </Link>
                </li>
                <li>
                  <Link href="/guides/transportation-guide" className="text-blue-600 hover:text-blue-800">
                    Transportation Guide
                  </Link>
                </li>
                <li>
                  <Link href="/guides/thai-culture-etiquette" className="text-blue-600 hover:text-blue-800">
                    Thai Culture & Etiquette
                  </Link>
                </li>
                <li>
                  <Link href="/guides/working-remotely" className="text-blue-600 hover:text-blue-800">
                    Working Remotely
                  </Link>
                </li>
                <li>
                  <Link href="/guides/first-steps-guide" className="text-blue-600 hover:text-blue-800">
                    First Steps Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">Have questions about relocating to Koh Phangan?</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-800">
                Get in touch with our team
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Koh Phangan Relocation Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
