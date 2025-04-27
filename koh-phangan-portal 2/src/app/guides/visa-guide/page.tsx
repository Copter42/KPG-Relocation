import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function VisaGuide() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/beach-sunset.jpg" 
            alt="Thailand Beach Sunset" 
            fill 
            style={{objectFit: 'cover'}}
            priority
            className="brightness-[0.85]"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl hero-text-animation">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Thailand Visa Guide
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Everything you need to know about visa options for your relocation to Koh Phangan.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <p className="mb-6">
                Navigating Thailand's visa system is often the first challenge for anyone planning to relocate to Koh Phangan. The good news is that with the right information and preparation, securing the appropriate visa for your stay can be straightforward. This guide breaks down the most relevant visa options for different types of relocators, from digital nomads to retirees, with practical advice on applications, extensions, and common pitfalls.
              </p>

              {/* Table of Contents */}
              <div className="bg-blue-50 p-6 rounded-xl mb-10 border border-blue-100">
                <h3 className="text-xl font-bold mb-4">In This Guide:</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#visa-options" className="text-blue-600 hover:underline">Visa Options Overview</a>
                  </li>
                  <li>
                    <a href="#extensions" className="text-blue-600 hover:underline">Visa Extensions and Border Runs</a>
                  </li>
                  <li>
                    <a href="#pitfalls" className="text-blue-600 hover:underline">Common Pitfalls and Tips</a>
                  </li>
                  <li>
                    <a href="#services" className="text-blue-600 hover:underline">Visa Services on Koh Phangan</a>
                  </li>
                </ul>
              </div>

              {/* Visa Options Section */}
              <div id="visa-options">
                <h2 className="text-3xl font-bold mb-6">Visa Options Overview</h2>
                <p className="mb-6">
                  Thailand offers several visa categories that cater to different purposes and lengths of stay. The right option for you depends on your nationality, intended duration of stay, and primary purpose for being in Thailand.
                </p>

                {/* Visa Accordion */}
                <div className="space-y-4 mb-10">
                  {/* Visa Exemption */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer">
                      <div>
                        <h3 className="text-xl font-bold">Visa Exemption (Visa-Free Entry)</h3>
                        <p className="text-sm text-gray-600">30-45 days, no pre-arrival application</p>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Short Stays
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <p className="font-medium mb-2">Best for: Short-term visitors and those testing the waters before committing to a longer stay</p>
                      <p className="mb-2"><strong>Duration:</strong> 30-45 days (depending on nationality)</p>
                      <p className="mb-2"><strong>Eligibility:</strong> Citizens of 56 countries including the USA, UK, Australia, most EU countries, and other developed nations</p>
                      
                      <div className="mt-4">
                        <h4 className="font-bold mb-2">Key points:</h4>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>No application required before arrival</li>
                          <li>Free entry stamp at immigration</li>
                          <li>Can be extended once for 30 days at local immigration office (฿1,900 fee)</li>
                          <li>Maximum stay: 60-75 days total</li>
                          <li>Limited to 2 entries via land borders in a calendar year (air arrivals unrestricted)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Documentation needed:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Passport valid for at least 6 months</li>
                          <li>Proof of onward travel (flight ticket leaving Thailand)</li>
                          <li>Proof of accommodation</li>
                          <li>Proof of funds (฿20,000 per person or ฿40,000 per family) - rarely checked but officially required</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Tourist Visa */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer">
                      <div>
                        <h3 className="text-xl font-bold">Tourist Visa (TR)</h3>
                        <p className="text-sm text-gray-600">60 days, extendable to 90 days</p>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Popular Option
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <p className="font-medium mb-2">Best for: Longer tourism stays, digital nomads without formal work permits</p>
                      <p className="mb-2"><strong>Duration:</strong> 60 days initially</p>
                      <p className="mb-2"><strong>Eligibility:</strong> Most nationalities</p>
                      
                      <div className="mt-4">
                        <h4 className="font-bold mb-2">Key points:</h4>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>Must apply at Thai embassy/consulate before arrival</li>
                          <li>Can be extended once for 30 days at local immigration office (฿1,900 fee)</li>
                          <li>Maximum stay: 90 days total</li>
                          <li>Single and multiple entry options available</li>
                          <li>Application fee varies by country (typically $40-60)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Documentation needed:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Passport valid for at least 6 months</li>
                          <li>Completed application form</li>
                          <li>Recent passport photo</li>
                          <li>Proof of funds (฿20,000 per person)</li>
                          <li>Flight itinerary (entry and exit)</li>
                          <li>Proof of accommodation</li>
                          <li>Some consulates may require additional documents</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Special Tourist Visa */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer">
                      <div>
                        <h3 className="text-xl font-bold">Special Tourist Visa (STV)</h3>
                        <p className="text-sm text-gray-600">90 days, extendable up to 9 months</p>
                      </div>
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        Long-Term Tourism
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <p className="font-medium mb-2">Best for: Long-term tourists, digital nomads, and those exploring retirement options</p>
                      <p className="mb-2"><strong>Duration:</strong> 90 days initially, extendable twice for 90 days each</p>
                      <p className="mb-2"><strong>Eligibility:</strong> Most nationalities</p>
                      
                      <div className="mt-4">
                        <h4 className="font-bold mb-2">Key points:</h4>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>Introduced during COVID-19 but still available</li>
                          <li>Must apply at Thai embassy/consulate before arrival</li>
                          <li>Can stay up to 9 months total with extensions</li>
                          <li>Application fee: approximately ฿2,000</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Documentation needed:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Passport valid for at least 12 months</li>
                          <li>Completed application form</li>
                          <li>Recent passport photo</li>
                          <li>Proof of funds (฿500,000)</li>
                          <li>Health insurance with minimum coverage of $100,000</li>
                          <li>Confirmed accommodation for the entire stay (hotel booking or rental agreement)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Retirement Visa */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer">
                      <div>
                        <h3 className="text-xl font-bold">Non-Immigrant O-A Visa (Retirement)</h3>
                        <p className="text-sm text-gray-600">1 year, renewable</p>
                      </div>
                      <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                        For Retirees
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <p className="font-medium mb-2">Best for: Retirees planning to settle in Thailand long-term</p>
                      <p className="mb-2"><strong>Duration:</strong> 1 year, renewable</p>
                      <p className="mb-2"><strong>Eligibility:</strong> Individuals aged 50 or older</p>
                      
                      <div className="mt-4">
                        <h4 className="font-bold mb-2">Key points:</h4>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>Must apply at Thai embassy/consulate before arrival</li>
                          <li>Annual renewal possible without leaving Thailand</li>
                          <li>90-day reporting to immigration required</li>
                          <li>Health insurance with minimum coverage of ฿400,000 for inpatient and ฿40,000 for outpatient care required</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Documentation needed:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Passport valid for at least 18 months</li>
                          <li>Completed application form</li>
                          <li>Recent passport photo</li>
                          <li>Proof of financial status (฿800,000 in Thai bank account OR monthly income of at least ฿65,000)</li>
                          <li>Criminal background check from home country</li>
                          <li>Medical certificate</li>
                          <li>Proof of health insurance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Business Visa */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer">
                      <div>
                        <h3 className="text-xl font-bold">Non-Immigrant B Visa (Business)</h3>
                        <p className="text-sm text-gray-600">90 days initially, extendable to 1 year</p>
                      </div>
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        For Workers
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <p className="font-medium mb-2">Best for: Entrepreneurs, investors, and those employed by Thai companies</p>
                      <p className="mb-2"><strong>Duration:</strong> 90 days initially, extendable to 1 year</p>
                      <p className="mb-2"><strong>Eligibility:</strong> Business owners, investors, employees with work permits</p>
                      
                      <div className="mt-4">
                        <h4 className="font-bold mb-2">Key points:</h4>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>Must apply at Thai embassy/consulate before arrival</li>
                          <li>Requires business registration or employment contract with a Thai company</li>
                          <li>Work permit required for employment activities</li>
                          <li>90-day reporting to immigration required</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Documentation needed:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Passport valid for at least 6 months</li>
                          <li>Completed application form</li>
                          <li>Recent passport photo</li>
                          <li>Letter of invitation from Thai company</li>
                          <li>Company registration documents</li>
                          <li>For employees: employment contract and work permit documentation</li>
                          <li>For business owners: business registration, company financials</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Digital Nomad Visa */}
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 flex justify-between items-center cursor-pointer">
                      <div>
                        <h3 className="text-xl font-bold">Digital Nomad Visa (Long-Term Resident Visa)</h3>
                        <p className="text-sm text-gray-600">5 years, renewable</p>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        New Option
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-white">
                      <p className="font-medium mb-2">Best for: Remote workers, digital professionals, and high-income freelancers</p>
                      <p className="mb-2"><strong>Duration:</strong> 5 years, renewable</p>
                      <p className="mb-2"><strong>Eligibility:</strong> Digital professionals with high income or investments</p>
                      
                      <div className="mt-4">
                        <h4 className="font-bold mb-2">Key points:</h4>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                          <li>Thailand's newest visa category, specifically designed for digital nomads</li>
                          <li>Significant benefits including reduced tax rates and simplified reporting</li>
                          <li>No 90-day reporting required</li>
                          <li>Multiple entry privileges</li>
                          <li>Application fee: ฿50,000</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Documentation needed:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Passport valid for at least 6 months</li>
                          <li>Proof of employment or clients</li>
                          <li>Proof of income (minimum $80,000 over the past 2 years)</li>
                          <li>Health insurance with minimum coverage of $50,000</li>
                          <li>Background check</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visa Extensions Section */}
              <div id="extensions">
                <h2 className="text-3xl font-bold mb-6">Visa Extensions and Border Runs</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold mb-4">Local Extensions</h3>
                    <p className="mb-4">
                      Most visa types can be extended at the local immigration office in Koh Phangan or nearby Koh Samui:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li><strong>Visa exemption stamp:</strong> One-time 30-day extension (฿1,900)</li>
                      <li><strong>Tourist visa:</strong> One-time 30-day extension (฿1,900)</li>
                      <li><strong>Special Tourist Visa:</strong> Two 90-day extensions (฿1,900 each)</li>
                      <li><strong>Non-Immigrant visas:</strong> Various extension options depending on visa type</li>
                    </ul>
                    
                    <h4 className="font-bold mb-2">Required for extension:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>TM.7 application form (available at immigration office)</li>
                      <li>Passport with current visa</li>
                      <li>One 4x6cm photo</li>
                      <li>Copy of passport information page and current visa</li>
                      <li>Copy of departure card (TM.6)</li>
                      <li>Extension fee (฿1,900)</li>
                      <li>Proof of address in Thailand (TM.30 form)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                    <h3 className="text-xl font-bold mb-4">Border Runs and Visa Runs</h3>
                    <p className="mb-4">
                      When extensions are no longer possible, many residents opt for border runs or visa runs:
                    </p>
                    
                    <h4 className="font-bold mb-2">Border Run:</h4>
                    <p className="mb-2">Leaving Thailand briefly to get a new entry stamp</p>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li>Quickest option: day trip to a neighboring country</li>
                      <li>Results in new visa exemption entry (30-45 days)</li>
                      <li>Limited to 2 land border entries per calendar year</li>
                      <li>Common destinations: Malaysia, Laos, Cambodia</li>
                    </ul>
                    
                    <h4 className="font-bold mb-2">Visa Run:</h4>
                    <p className="mb-2">Leaving Thailand to apply for a new visa at a Thai embassy/consulate</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Takes 2-5 days depending on processing time</li>
                      <li>Results in fresh visa (typically 60 days for tourist visa)</li>
                      <li>No annual limit on proper visas</li>
                      <li>Popular visa run destinations: Penang (Malaysia), Vientiane (Laos), Savannakhet (Laos)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Common Pitfalls Section */}
              <div id="pitfalls">
                <h2 className="text-3xl font-bold mb-6">Common Pitfalls and Tips</h2>
                
                <div className="space-y-6 mb-10">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h3 className="text-xl font-bold mb-3">Overstay Penalties</h3>
                    <p className="mb-2">Staying beyond your permitted visa duration results in:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>฿500 per day overstay fine (capped at ฿20,000)</li>
                      <li>Potential ban from re-entering Thailand (6 months to lifetime depending on severity)</li>
                      <li>Risk of detention and deportation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold mb-3">90-Day Reporting</h3>
                    <p className="mb-2">Non-immigrant visa holders must report their address every 90 days:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Can be done in person at immigration</li>
                      <li>Online reporting available through immigration website (when system works)</li>
                      <li>Must be completed within 15 days before or 7 days after the due date</li>
                      <li>฿2,000 fine for late reporting</li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                    <h3 className="text-xl font-bold mb-3">TM.30 Reporting</h3>
                    <p className="mb-2">Foreigners must report their residence:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Technically required within 24 hours of arrival at any new accommodation</li>
                      <li>Hotels handle this automatically</li>
                      <li>For private rentals, landlord should file TM.30 form</li>
                      <li>Failure to have TM.30 can complicate visa extensions</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-10">
                  <h3 className="text-xl font-bold mb-4">Practical Tips</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li><strong>Never overstay your visa</strong> - even one day can cause complications</li>
                    <li><strong>Keep digital and physical copies</strong> of all immigration documents</li>
                    <li><strong>Start extension process a week before expiration</strong> to avoid last-minute issues</li>
                    <li><strong>Maintain required funds in your bank account</strong> for at least 2 months before retirement visa renewal</li>
                    <li><strong>Check the latest requirements</strong> before any visa application as rules change frequently</li>
                    <li><strong>Use a visa agent for complex cases</strong> - worth the fee for peace of mind</li>
                    <li><strong>Join local expat groups</strong> for current visa information specific to Koh Phangan</li>
                  </ol>
                </div>
              </div>

              {/* Visa Services Section */}
              <div id="services">
                <h2 className="text-3xl font-bold mb-6">Visa Services on Koh Phangan</h2>
                <p className="mb-6">
                  Several reputable visa agents on the island can assist with applications, extensions, and advice:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">Koh Phangan Immigration Office</h3>
                    <p className="mb-2"><strong>Location:</strong> Thong Sala</p>
                    <p><strong>Services:</strong> Visa extensions, 90-day reporting</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">Island Travel & Tour</h3>
                    <p className="mb-2"><strong>Location:</strong> Thong Sala</p>
                    <p><strong>Services:</strong> Visa applications, border run transportation, document preparation</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">Phangan Visa Run Service</h3>
                    <p className="mb-2"><strong>Location:</strong> Baan Tai</p>
                    <p><strong>Services:</strong> Organized visa runs to Malaysia and Laos, document assistance</p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
              <p className="mb-4">
                While Thailand's visa system may seem complex at first, most relocators find a suitable option that allows them to enjoy life on Koh Phangan. Digital nomads typically start with tourist visas while exploring longer-term options, families often secure education visas for children with guardian visas for parents, and retirees benefit from the straightforward retirement visa process.
              </p>
              <p className="mb-6">
                The key is planning ahead, maintaining proper documentation, and staying informed about immigration requirements. With the right approach, visa management becomes a manageable part of your new island lifestyle rather than a source of stress.
              </p>
              
              <div className="bg-blue-500 text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Need Personalized Visa Guidance?</h3>
                <p className="text-lg mb-6">
                  Use our interactive Visa Wizard to find the perfect visa option for your specific situation.
                </p>
                <Link href="/visa-wizard" className="btn btn-white text-blue-600 text-lg px-8 py-4 hover:bg-opacity-90">
                  Try Our Visa Wizard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Can I work remotely on a Tourist Visa?</h3>
                <p className="text-gray-700">
                  Technically, any form of work (including remote work for foreign companies) requires a proper work permit in Thailand. However, many digital nomads do work remotely on tourist visas. This exists in a legal gray area, and we recommend consulting with a visa specialist for your specific situation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">What is a visa run and is it recommended?</h3>
                <p className="text-gray-700">
                  A visa run involves leaving Thailand temporarily to renew your visa or get a new one. While this was common practice in the past, Thai immigration has become stricter about multiple back-to-back tourist visas. We recommend planning for a proper long-term visa rather than relying on visa runs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Do I need health insurance for a Thai visa?</h3>
                <p className="text-gray-700">
                  For certain visa types (like the Retirement Visa and Special Tourist Visa), health insurance with specific coverage amounts is mandatory. Even for visas that don't require it, we strongly recommend having comprehensive health insurance while in Thailand.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Can I convert my Tourist Visa to a long-term visa while in Thailand?</h3>
                <p className="text-gray-700">
                  In most cases, you cannot convert a Tourist Visa to a long-term visa within Thailand. You typically need to exit the country and apply for the new visa type at a Thai embassy or consulate abroad. There are some exceptions, so consult with immigration or a visa specialist.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">What is the 90-day reporting requirement?</h3>
                <p className="text-gray-700">
                  Foreigners staying in Thailand on long-term visas must report their address to immigration every 90 days. This can be done in person at immigration offices, by mail, or through the online system (though the online system can be unreliable).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Visa Journey?</h2>
            <p className="text-xl mb-8">
              Get personalized guidance with our interactive Visa Wizard tool or download our comprehensive guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/visa-wizard" className="btn btn-white text-green-600 text-lg px-8 py-4 hover:bg-opacity-90">
                Try Our Visa Wizard
              </Link>
              <Link href="/guides/visa-guide-pdf" className="btn btn-outline btn-white text-lg px-8 py-4">
                Download PDF Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
