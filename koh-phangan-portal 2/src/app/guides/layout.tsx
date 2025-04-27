import { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function GuidesLayout({ children }: LayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <div className="sticky top-24 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Relocation Guides</h3>
            <nav className="space-y-2">
              <Link href="/guides/visa-guide" className="block p-2 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-800">
                Visa Guide
              </Link>
              <Link href="/guides/housing-guide" className="block p-2 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-800">
                Housing Guide
              </Link>
              <Link href="/guides/cost-of-living" className="block p-2 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-800">
                Cost of Living
              </Link>
              <Link href="/guides/healthcare-wellness" className="block p-2 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-800">
                Healthcare & Wellness
              </Link>
              <Link href="/guides/transportation-guide" className="block p-2 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-800">
                Transportation Guide
              </Link>
              <Link href="/guides/thai-culture-etiquette" className="block p-2 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-800">
                Thai Culture & Etiquette
              </Link>
              <Link href="/guides/working-remotely" className="block p-2 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-800">
                Working Remotely
              </Link>
              <Link href="/guides/first-steps-guide" className="block p-2 rounded hover:bg-blue-50 text-blue-600 hover:text-blue-800">
                First Steps Guide
              </Link>
            </nav>
          </div>
        </aside>
        <main className="md:col-span-3">
          {children}
        </main>
      </div>
    </div>
  );
}
