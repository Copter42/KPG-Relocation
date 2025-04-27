import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/koh-phangan-viewpoint.jpeg" 
            alt="Koh Phangan Viewpoint" 
            fill 
            style={{objectFit: 'cover'}}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your New Life in Koh Phangan Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            The ultimate guide to relocating to Thailand's paradise island with confidence and ease
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/area-chooser" 
              className="bg-transparent hover:bg-blue-600 text-white font-semibold hover:text-white py-3 px-8 border-2 border-white hover:border-blue-600 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl text-shadow"
              style={{textShadow: '0px 0px 3px rgba(0,0,0,0.8)'}}
            >
              Find Your Perfect Area
            </Link>
            <Link 
              href="/visa-wizard" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 border-2 border-blue-600 hover:border-blue-700 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Visa Wizard
            </Link>
          </div>
        </div>
      </section>

      {/* Why Relocate Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Relocate to Koh Phangan?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Digital Nomad Paradise</h3>
              <p className="text-gray-700">
                Fast internet, affordable living, and a thriving community of remote workers make Koh Phangan an ideal destination for digital nomads.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Natural Beauty</h3>
              <p className="text-gray-700">
                Pristine beaches, lush jungles, and breathtaking viewpoints provide endless opportunities for exploration and adventure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-amber-600">Wellness & Community</h3>
              <p className="text-gray-700">
                A global hub for yoga, meditation, and holistic living with a welcoming international community that quickly feels like family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Path Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Find Your Path</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Select your profile to get personalized relocation guidance tailored to your specific needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60">
                <Image 
                  src="/images/digital-nomad.jpeg" 
                  alt="Digital Nomad" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Digital Nomad</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Fast internet locations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Coworking spaces</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Nomad community hubs</span>
                  </li>
                </ul>
                <Link 
                  href="/personas/digital-nomad" 
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  View Digital Nomad Guide
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60">
                <Image 
                  src="/images/family-beach.jpeg" 
                  alt="Family" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Family</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Family-friendly areas</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>School options</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Kid-friendly activities</span>
                  </li>
                </ul>
                <Link 
                  href="/personas/family" 
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  View Family Guide
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-60">
                <Image 
                  src="/images/senior-couple.jpeg" 
                  alt="Retiree" 
                  fill 
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Retiree</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Retirement visa guide</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Healthcare options</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Quiet neighborhoods</span>
                  </li>
                </ul>
                <Link 
                  href="/personas/retiree" 
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  View Retiree Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Essential Relocation Tools</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Interactive resources to make your move to Koh Phangan smooth and stress-free
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/area-chooser" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">Area Chooser</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Find your perfect neighborhood based on your lifestyle, budget, and preferences.
                </p>
                <span className="text-blue-600 group-hover:text-blue-700 font-medium inline-flex items-center">
                  Try it now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href="/visa-wizard" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">Visa Wizard</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Determine the best visa option for your situation with our interactive guide.
                </p>
                <span className="text-blue-600 group-hover:text-blue-700 font-medium inline-flex items-center">
                  Try it now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href="/cost-estimator" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">Cost Estimator</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Calculate your monthly expenses based on your lifestyle choices.
                </p>
                <span className="text-blue-600 group-hover:text-blue-700 font-medium inline-flex items-center">
                  Try it now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link href="/relocation-checklist" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">Relocation Checklist</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Step-by-step guide to planning your move from anywhere in the world.
                </p>
                <span className="text-blue-600 group-hover:text-blue-700 font-medium inline-flex items-center">
                  Try it now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                S
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah</h3>
              <p className="text-gray-600 text-sm mb-4">Digital Nomad from Canada</p>
              <p className="text-gray-700 italic">
                "This portal was my lifeline when planning my move. The area chooser helped me find the perfect spot in Srithanu that matched my vibe and budget."
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                M
              </div>
              <h3 className="text-xl font-semibold mb-2">The Millers</h3>
              <p className="text-gray-600 text-sm mb-4">Family of 4 from Australia</p>
              <p className="text-gray-700 italic">
                "Moving with kids seemed daunting until we found this resource. The school guide and family-friendly area recommendations were spot on!"
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                R
              </div>
              <h3 className="text-xl font-semibold mb-2">Robert & Jane</h3>
              <p className="text-gray-600 text-sm mb-4">Retirees from the UK</p>
              <p className="text-gray-700 italic">
                "The retirement visa guide saved us countless hours of research. We're now happily settled in a quiet part of Thong Sala with everything we need nearby."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Koh Phangan Journey?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Get our comprehensive Relocation Starter Kit with checklists, insider tips, and exclusive resources.
          </p>
          <Link 
            href="/starter-kit" 
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Free Starter Kit
          </Link>
        </div>
      </section>
    </div>
  );
}
