import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HousingGuide() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/beach-sunset.jpg" 
            alt="Tropical Beach in Koh Phangan" 
            fill 
            style={{objectFit: 'cover'}}
            priority
            className="brightness-[0.85]"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl hero-text-animation">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Housing Guide
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Find your perfect home in paradise: from beachfront villas to jungle bungalows.
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
                Finding the right accommodation is one of the most important aspects of relocating to Koh Phangan. The island offers diverse housing options ranging from simple bungalows to luxury villas, each with its own charm and considerations. This guide will help you navigate the local housing market, understand rental practices, and find the perfect home that matches your lifestyle, budget, and preferences.
              </p>

              {/* Table of Contents */}
              <div className="bg-blue-50 p-6 rounded-xl mb-10 border border-blue-100">
                <h3 className="text-xl font-bold mb-4">In This Guide:</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#market" className="text-blue-600 hover:underline">Understanding Koh Phangan's Housing Market</a>
                  </li>
                  <li>
                    <a href="#housing-types" className="text-blue-600 hover:underline">Housing Types and Price Ranges</a>
                  </li>
                  <li>
                    <a href="#areas" className="text-blue-600 hover:underline">Popular Areas for Different Lifestyles</a>
                  </li>
                  <li>
                    <a href="#finding" className="text-blue-600 hover:underline">Finding Accommodation</a>
                  </li>
                  <li>
                    <a href="#rental" className="text-blue-600 hover:underline">Rental Process and Legal Considerations</a>
                  </li>
                  <li>
                    <a href="#setup" className="text-blue-600 hover:underline">Setting Up Your Home</a>
                  </li>
                  <li>
                    <a href="#challenges" className="text-blue-600 hover:underline">Common Challenges and Solutions</a>
                  </li>
                </ul>
              </div>

              {/* Housing Market Section */}
              <div id="market">
                <h2 className="text-3xl font-bold mb-6">Understanding Koh Phangan's Housing Market</h2>
                <p className="mb-6">
                  Unlike more developed areas of Thailand, Koh Phangan's housing market has its own unique characteristics:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                    <h3 className="text-xl font-bold mb-3">Seasonal Fluctuations</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>High Season</strong> (December-March): Prices increase by 20-50%, availability decreases</li>
                      <li><strong>Shoulder Season</strong> (April-May, October-November): Moderate prices, good availability</li>
                      <li><strong>Low Season</strong> (June-September): Best deals, highest availability, some businesses close</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold mb-3">Rental Terms</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Short-term</strong> (1-3 months): Higher monthly rates but more flexibility</li>
                      <li><strong>Medium-term</strong> (3-6 months): Moderate discounts, typically 10-20% off monthly rates</li>
                      <li><strong>Long-term</strong> (6+ months): Best value, often 30-40% cheaper than short-term rates</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold mb-3">Deposit and Payment</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Standard deposit: 1-2 months' rent</li>
                      <li>Utilities typically paid separately (electricity, water, internet)</li>
                      <li>Electricity costs vary significantly (government rate vs. private rate)</li>
                      <li>Advance payment of 1 month typically required</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Housing Types Section */}
              <div id="housing-types">
                <h2 className="text-3xl font-bold mb-6">Housing Types and Price Ranges</h2>
                
                {/* Housing Types Tabs */}
                <div className="mb-10">
                  <div className="border-b border-gray-200 mb-6">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="housingTabs" role="tablist">
                      <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 border-blue-500 rounded-t-lg active" id="bungalows-tab" type="button" role="tab" aria-controls="bungalows" aria-selected="true">Bungalows</button>
                      </li>
                      <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="apartments-tab" type="button" role="tab" aria-controls="apartments" aria-selected="false">Apartments/Condos</button>
                      </li>
                      <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="houses-tab" type="button" role="tab" aria-controls="houses" aria-selected="false">Houses</button>
                      </li>
                      <li role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="villas-tab" type="button" role="tab" aria-controls="villas" aria-selected="false">Luxury Villas</button>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Bungalows Tab Content */}
                  <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm" id="bungalows" role="tabpanel" aria-labelledby="bungalows-tab">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 relative h-64 md:h-auto rounded-lg overflow-hidden">
                          <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                            <p className="text-gray-600 text-center p-4">Bungalow Image</p>
                          </div>
                        </div>
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold mb-3">Bungalows</h3>
                        <p className="mb-4">Simple, often wooden structures, typically with basic amenities. Perfect for those seeking an authentic island experience on a budget.</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-bold mb-2">Price Range:</h4>
                            <p className="text-lg text-amber-600 font-medium">฿5,000-15,000/month</p>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2">Best For:</h4>
                            <p>Budget travelers, minimalists, short-term stays</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-bold mb-2">Pros:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Affordable</li>
                              <li>Often in beautiful locations</li>
                              <li>Community atmosphere</li>
                              <li>Authentic island experience</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-2">Cons:</h4>
                            <ul className="list-disc pl-5 space-y-1">
                              <li>Basic amenities</li>
                              <li>Limited privacy</li>
                              <li>Potential for insects/wildlife</li>
                              <li>May lack air conditioning</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Other tabs would be shown/hidden with JavaScript in a real implementation */}
                </div>
              </div>

              {/* Popular Areas Section */}
              <div id="areas">
                <h2 className="text-3xl font-bold mb-6">Popular Areas for Different Lifestyles</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {/* Thong Sala */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="relative h-48">
                      <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                        <p className="text-gray-600 text-center p-4">Thong Sala Image</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Thong Sala</h3>
                      <p className="text-gray-600 italic mb-4">Main town, commercial center</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <span className="font-bold">Housing Types:</span> Apartments, townhouses, some houses
                        </div>
                        <div>
                          <span className="font-bold">Price Range:</span> Moderate
                        </div>
                        <div>
                          <span className="font-bold">Ideal For:</span> Convenience seekers, those without vehicles, families needing amenities
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold mb-1">Pros:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Walking distance to markets, shops, services</li>
                            <li>Good transportation links</li>
                            <li>Convenient for daily needs</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Cons:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Less scenic</li>
                            <li>More traffic</li>
                            <li>Fewer beach options</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Baan Tai */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="relative h-48">
                      <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                        <p className="text-gray-600 text-center p-4">Baan Tai Image</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">Baan Tai</h3>
                      <p className="text-gray-600 italic mb-4">Long beach area, mix of development and nature</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <span className="font-bold">Housing Types:</span> Mix of all types, from bungalows to villas
                        </div>
                        <div>
                          <span className="font-bold">Price Range:</span> Moderate to high (beachfront)
                        </div>
                        <div>
                          <span className="font-bold">Ideal For:</span> Beach lovers, families, balanced lifestyle seekers
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold mb-1">Pros:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Beautiful beaches</li>
                            <li>Good restaurants</li>
                            <li>Central location</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">Cons:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Some areas can be noisy during parties</li>
                            <li>Higher prices for beachfront</li>
                            <li>Busy main road</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional areas would be added here */}
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-10">
                  <h3 className="text-xl font-bold mb-4">Area Selection Tips</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Visit before committing:</strong> Each area has a distinct vibe that's best experienced in person</li>
                    <li><strong>Consider transportation:</strong> Some areas require a vehicle for daily convenience</li>
                    <li><strong>Think about your priorities:</strong> Beach access, community, convenience, or seclusion?</li>
                    <li><strong>Seasonal factors:</strong> Some areas are affected by monsoon conditions more than others</li>
                    <li><strong>Visit at different times:</strong> Check noise levels during day and night</li>
                  </ul>
                </div>
              </div>

              {/* Finding Accommodation Section */}
              <div id="finding">
                <h2 className="text-3xl font-bold mb-6">Finding Accommodation</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Online Resources</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Facebook Groups:</strong> "Koh Phangan Housing," "Koh Phangan Conscious Community"</li>
                      <li><strong>Websites:</strong> Airbnb, Booking.com (for initial stays), phangan.info</li>
                      <li><strong>Local Agencies:</strong> Koh Phangan Real Estate, Phangan Property</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">On-the-Ground Search</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Advantages:</strong> Better prices, finding unadvertised gems, negotiation potential</li>
                      <li><strong>Method:</strong> Rent a scooter, explore areas, look for "For Rent" signs</li>
                      <li><strong>Timeline:</strong> Allow 1-2 weeks for searching upon arrival</li>
                      <li><strong>Initial Stay:</strong> Book 1-2 weeks in a guesthouse while searching</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Working with Agents</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Pros:</strong> Saves time, local knowledge, help with paperwork</li>
                      <li><strong>Cons:</strong> Limited to their portfolio, potential markup</li>
                      <li><strong>Fees:</strong> Typically paid by landlord, not tenant</li>
                      <li><strong>Recommendations:</strong> Koh Phangan Tropical Properties, Island Real Estate</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 mb-10">
                  <h3 className="text-xl font-bold mb-4">Pro Tip: The Best Approach</h3>
                  <p className="mb-4">
                    Most successful relocators use a combination of methods: research online before arrival, book temporary accommodation, then search on the ground with the help of both online listings and local connections.
                  </p>
                  <p>
                    This hybrid approach gives you the best chance of finding the perfect place at a fair price while avoiding common pitfalls.
                  </p>
                </div>
              </div>

              {/* Rental Process Section */}
              <div id="rental">
                <h2 className="text-3xl font-bold mb-6">Rental Process and Legal Considerations</h2>
                
                <div className="space-y-6 mb-10">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Rental Agreements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-2">Types:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Formal contracts vs. simple agreements</li>
                          <li>Monthly vs. fixed-term leases</li>
                          <li>Verbal agreements (not recommended)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Key Elements:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Duration, rent amount, deposit terms</li>
                          <li>Responsibilities for maintenance</li>
                          <li>Utilities payment structure</li>
                          <li>Termination conditions</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-bold mb-2">Negotiation Points:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Rent price (especially for longer terms)</li>
                        <li>Included utilities or services</li>
                        <li>Maintenance responsibilities</li>
                        <li>Flexibility for early termination</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Legal Considerations</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Foreigners cannot own land in Thailand (can own condos under certain conditions)</li>
                      <li>Long-term leases (3+ years) must be registered with the Land Office</li>
                      <li>Consider consulting with a local legal advisor for purchases or long-term commitments</li>
                      <li>Rental disputes are typically resolved informally rather than through courts</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Documentation Needed</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Passport copy</li>
                      <li>Visa information</li>
                      <li>Sometimes: proof of income or bank statements</li>
                      <li>Deposit in cash (typically)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Setting Up Home Section */}
              <div id="setup">
                <h2 className="text-3xl font-bold mb-6">Setting Up Your Home</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Utilities</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Electricity:</strong> Typically ฿7-12 per unit (higher in private developments)</li>
                      <li><strong>Water:</strong> Usually inexpensive (฿100-500/month)</li>
                      <li><strong>Internet:</strong> Fiber options available in many areas (฿600-1,000/month)</li>
                      <li><strong>Setup Process:</strong> Landlord typically handles connections, tenant pays usage</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Furnishings</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Most rentals come furnished (verify what's included)</li>
                      <li>Additional furniture available in Thong Sala and Chaweng (Koh Samui)</li>
                      <li>Second-hand options through Facebook groups and local markets</li>
                      <li>Custom furniture can be made by local carpenters (good value)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Home Services</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Cleaning services: ฿300-500 per session</li>
                      <li>Gardening: ฿500-1,500 per month depending on size</li>
                      <li>Pool maintenance: ฿2,000-4,000 per month</li>
                      <li>Handyman services available through local recommendations</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Special Considerations</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-bold">Families with Children:</h4>
                        <p className="text-sm">Consider proximity to schools, safety features, play areas</p>
                      </div>
                      <div>
                        <h4 className="font-bold">Digital Nomads:</h4>
                        <p className="text-sm">Verify internet reliability, workspace, noise levels</p>
                      </div>
                      <div>
                        <h4 className="font-bold">Retirees:</h4>
                        <p className="text-sm">Assess accessibility, proximity to medical facilities</p>
                      </div>
                      <div>
                        <h4 className="font-bold">Eco-Conscious Living:</h4>
                        <p className="text-sm">Look for solar power, water conservation systems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Challenges Section */}
              <div id="challenges">
                <h2 className="text-3xl font-bold mb-6">Common Challenges and Solutions</h2>
                
                <div className="space-y-4 mb-10">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Electricity Costs</h3>
                        <p className="mb-2"><strong>Challenge:</strong> Unexpectedly high electricity bills</p>
                        <p><strong>Solution:</strong> Clarify rate before signing, use fans instead of AC when possible, check meter readings</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Internet Reliability</h3>
                        <p className="mb-2"><strong>Challenge:</strong> Inconsistent connection, especially during storms</p>
                        <p><strong>Solution:</strong> Have 4G/5G backup, check reviews of local providers, test before committing</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Wildlife Encounters</h3>
                        <p className="mb-2"><strong>Challenge:</strong> Insects, geckos, occasional larger visitors</p>
                        <p><strong>Solution:</strong> Proper sealing of doors/windows, mosquito nets, regular cleaning</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <div className="flex items-start">
                      <div className="bg-red-100 p-2 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Noise Issues</h3>
                        <p className="mb-2"><strong>Challenge:</strong> Unexpected noise from bars, construction, or nature</p>
                        <p><strong>Solution:</strong> Visit property at different times before renting, check proximity to venues</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
              <p className="mb-4">
                Finding your ideal home on Koh Phangan is an adventure that requires balancing practical considerations with the island lifestyle you're seeking. While the process may differ from what you're accustomed to in your home country, the reward is living in a tropical paradise with a unique blend of natural beauty, community, and increasingly modern conveniences.
              </p>
              <p className="mb-4">
                Take your time with the search process, ask plenty of questions, and consider starting with a shorter commitment to ensure the area and property truly fit your needs. Many long-term residents report moving several times before finding their perfect island home.
              </p>
              <p className="mb-6">
                Remember that flexibility and patience are key virtues when relocating to island life. Embrace the journey of finding your new home as the first step in your Koh Phangan adventure.
              </p>
              
              <div className="bg-green-500 text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Find Your Perfect Area</h3>
                <p className="text-lg mb-6">
                  Not sure which part of the island is right for you? Take our interactive quiz to discover your ideal neighborhood.
                </p>
                <Link href="/area-chooser" className="btn btn-white text-green-600 text-lg px-8 py-4 hover:bg-opacity-90">
                  Try Our Area Chooser
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
                <h3 className="text-xl font-bold mb-3">How much should I budget for housing in Koh Phangan?</h3>
                <p className="text-gray-700">
                  Housing costs vary widely based on type, location, and season. Budget travelers can find basic bungalows from ฿5,000/month, mid-range apartments or houses range from ฿15,000-40,000/month, and luxury villas start at ฿40,000/month. We recommend budgeting 30-40% of your total monthly expenses for housing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Is it better to book accommodation before arriving or search when I get there?</h3>
                <p className="text-gray-700">
                  For your initial stay, it's best to book 1-2 weeks of temporary accommodation before arrival. Then, once on the island, you can search for longer-term options in person. This approach allows you to see properties firsthand, negotiate better rates, and discover unadvertised gems that aren't listed online.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">What's the best area for digital nomads?</h3>
                <p className="text-gray-700">
                  Srithanu and Haad Yao are popular with digital nomads due to their community atmosphere, reliable internet options, and balance of amenities and natural beauty. Thong Sala offers the most reliable infrastructure but less of the beach lifestyle. Your ideal area depends on whether you prioritize community, convenience, or scenery.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Do I need a car or motorbike to get around?</h3>
                <p className="text-gray-700">
                  Unless you're staying in the center of Thong Sala, having your own transportation is highly recommended. Most residents rent scooters (฿2,500-4,000/month) as they're perfect for navigating the island's hills and narrow roads. Cars are less common but useful for families or during rainy season. Always get proper insurance and an international driving permit.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Are there any hidden costs I should be aware of?</h3>
                <p className="text-gray-700">
                  Watch out for electricity charges (private rates can be 2-3 times government rates), tourist pricing on long-term rentals, and seasonal price increases. Also consider transportation costs, potential visa run expenses, and the cost of setting up your home with essentials not included in the rental. Always clarify all fees before signing any agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Island Home?</h2>
            <p className="text-xl mb-8">
              Explore our interactive tools or download our comprehensive housing guide to start your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/area-chooser" className="btn btn-white text-blue-600 text-lg px-8 py-4 hover:bg-opacity-90">
                Try Our Area Chooser
              </Link>
              <Link href="/guides/housing-guide-pdf" className="btn btn-outline btn-white text-lg px-8 py-4">
                Download PDF Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
