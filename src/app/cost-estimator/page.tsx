"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CostEstimator() {
  const [lifestyle, setLifestyle] = useState('moderate');
  const [accommodation, setAccommodation] = useState('apartment');
  const [location, setLocation] = useState('mid_island');
  const [transportation, setTransportation] = useState('motorbike');
  const [dining, setDining] = useState('mixed');
  const [showResults, setShowResults] = useState(false);

  const calculateCost = () => {
    let total = 0;
    
    // Accommodation costs
    if (accommodation === 'hostel') {
      total += location === 'beachfront' ? 9000 : (location === 'mid_island' ? 6000 : 4500);
    } else if (accommodation === 'apartment') {
      total += location === 'beachfront' ? 18000 : (location === 'mid_island' ? 12000 : 9000);
    } else if (accommodation === 'villa') {
      total += location === 'beachfront' ? 35000 : (location === 'mid_island' ? 25000 : 20000);
    }
    
    // Transportation costs
    if (transportation === 'public') {
      total += 3000;
    } else if (transportation === 'motorbike') {
      total += 4000;
    } else if (transportation === 'car') {
      total += 12000;
    }
    
    // Food costs
    if (dining === 'local') {
      total += 9000;
    } else if (dining === 'mixed') {
      total += 15000;
    } else if (dining === 'western') {
      total += 24000;
    }
    
    // Lifestyle multiplier
    if (lifestyle === 'budget') {
      total = total * 0.8;
    } else if (lifestyle === 'luxury') {
      total = total * 1.3;
    }
    
    // Add utilities and miscellaneous
    total += 3000;
    
    return Math.round(total);
  };

  const resetForm = () => {
    setLifestyle('moderate');
    setAccommodation('apartment');
    setLocation('mid_island');
    setTransportation('motorbike');
    setDining('mixed');
    setShowResults(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cost of Living Estimator</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Calculate your monthly expenses for living in Koh Phangan
          </p>
        </div>
      </section>

      {/* Estimator Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!showResults ? (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-10">Customize Your Lifestyle</h2>
                
                {/* Overall Lifestyle */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Overall Lifestyle</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button 
                      onClick={() => setLifestyle('budget')}
                      className={`p-4 rounded-lg border-2 transition-all ${lifestyle === 'budget' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Budget</h4>
                      <p className="text-gray-600 text-sm">Minimizing expenses, local lifestyle</p>
                    </button>
                    <button 
                      onClick={() => setLifestyle('moderate')}
                      className={`p-4 rounded-lg border-2 transition-all ${lifestyle === 'moderate' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Moderate</h4>
                      <p className="text-gray-600 text-sm">Comfortable balance of quality and cost</p>
                    </button>
                    <button 
                      onClick={() => setLifestyle('luxury')}
                      className={`p-4 rounded-lg border-2 transition-all ${lifestyle === 'luxury' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Luxury</h4>
                      <p className="text-gray-600 text-sm">Premium options, high-end amenities</p>
                    </button>
                  </div>
                </div>
                
                {/* Accommodation */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Accommodation Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button 
                      onClick={() => setAccommodation('hostel')}
                      className={`p-4 rounded-lg border-2 transition-all ${accommodation === 'hostel' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Hostel/Shared</h4>
                      <p className="text-gray-600 text-sm">Dormitory or shared room</p>
                    </button>
                    <button 
                      onClick={() => setAccommodation('apartment')}
                      className={`p-4 rounded-lg border-2 transition-all ${accommodation === 'apartment' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Apartment/Studio</h4>
                      <p className="text-gray-600 text-sm">Private apartment or bungalow</p>
                    </button>
                    <button 
                      onClick={() => setAccommodation('villa')}
                      className={`p-4 rounded-lg border-2 transition-all ${accommodation === 'villa' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Villa/House</h4>
                      <p className="text-gray-600 text-sm">Larger private home</p>
                    </button>
                  </div>
                </div>
                
                {/* Location */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button 
                      onClick={() => setLocation('beachfront')}
                      className={`p-4 rounded-lg border-2 transition-all ${location === 'beachfront' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Beachfront</h4>
                      <p className="text-gray-600 text-sm">Prime locations near the beach</p>
                    </button>
                    <button 
                      onClick={() => setLocation('mid_island')}
                      className={`p-4 rounded-lg border-2 transition-all ${location === 'mid_island' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Mid-Island</h4>
                      <p className="text-gray-600 text-sm">Convenient locations near amenities</p>
                    </button>
                    <button 
                      onClick={() => setLocation('remote')}
                      className={`p-4 rounded-lg border-2 transition-all ${location === 'remote' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Remote/Jungle</h4>
                      <p className="text-gray-600 text-sm">Secluded areas away from town</p>
                    </button>
                  </div>
                </div>
                
                {/* Transportation */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Transportation</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button 
                      onClick={() => setTransportation('public')}
                      className={`p-4 rounded-lg border-2 transition-all ${transportation === 'public' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Public/Taxi</h4>
                      <p className="text-gray-600 text-sm">Songthaews and occasional taxis</p>
                    </button>
                    <button 
                      onClick={() => setTransportation('motorbike')}
                      className={`p-4 rounded-lg border-2 transition-all ${transportation === 'motorbike' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Motorbike Rental</h4>
                      <p className="text-gray-600 text-sm">Monthly scooter rental</p>
                    </button>
                    <button 
                      onClick={() => setTransportation('car')}
                      className={`p-4 rounded-lg border-2 transition-all ${transportation === 'car' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Car Rental</h4>
                      <p className="text-gray-600 text-sm">Monthly car rental</p>
                    </button>
                  </div>
                </div>
                
                {/* Dining */}
                <div className="mb-10">
                  <h3 className="text-xl font-semibold mb-4">Dining Habits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button 
                      onClick={() => setDining('local')}
                      className={`p-4 rounded-lg border-2 transition-all ${dining === 'local' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Local Thai Food</h4>
                      <p className="text-gray-600 text-sm">Primarily street food and local restaurants</p>
                    </button>
                    <button 
                      onClick={() => setDining('mixed')}
                      className={`p-4 rounded-lg border-2 transition-all ${dining === 'mixed' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Mixed</h4>
                      <p className="text-gray-600 text-sm">Combination of local and western options</p>
                    </button>
                    <button 
                      onClick={() => setDining('western')}
                      className={`p-4 rounded-lg border-2 transition-all ${dining === 'western' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    >
                      <h4 className="font-medium text-lg mb-1">Primarily Western</h4>
                      <p className="text-gray-600 text-sm">Western restaurants and imported foods</p>
                    </button>
                  </div>
                </div>
                
                <div className="text-center mt-12">
                  <button 
                    onClick={() => setShowResults(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
                  >
                    Calculate Monthly Budget
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-center mb-10">
                  <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Your Estimated Monthly Budget</h2>
                  <p className="text-gray-600 mb-6">Based on your lifestyle choices in Koh Phangan</p>
                  <div className="text-5xl font-bold text-blue-600 mb-2">฿{calculateCost().toLocaleString()}</div>
                  <p className="text-gray-500">Approximately ${Math.round(calculateCost() / 35).toLocaleString()} USD</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Budget Breakdown</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="font-medium">Accommodation ({accommodation}, {location.replace('_', ' ')})</span>
                      <span className="font-semibold">
                        ฿{(accommodation === 'hostel' 
                          ? (location === 'beachfront' ? 9000 : (location === 'mid_island' ? 6000 : 4500))
                          : (accommodation === 'apartment' 
                            ? (location === 'beachfront' ? 18000 : (location === 'mid_island' ? 12000 : 9000))
                            : (location === 'beachfront' ? 35000 : (location === 'mid_island' ? 25000 : 20000))
                          )).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="font-medium">Transportation ({transportation.replace('_', ' ')})</span>
                      <span className="font-semibold">
                        ฿{(transportation === 'public' ? 3000 : (transportation === 'motorbike' ? 4000 : 12000)).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="font-medium">Food & Dining ({dining.replace('_', ' ')})</span>
                      <span className="font-semibold">
                        ฿{(dining === 'local' ? 9000 : (dining === 'mixed' ? 15000 : 24000)).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="font-medium">Utilities & Internet</span>
                      <span className="font-semibold">฿2,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="font-medium">Entertainment & Miscellaneous</span>
                      <span className="font-semibold">฿1,000</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-medium">Lifestyle Adjustment ({lifestyle})</span>
                      <span className="font-semibold">
                        {lifestyle === 'budget' ? '-20%' : (lifestyle === 'luxury' ? '+30%' : '0%')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>This estimate does not include visa runs or extension fees</li>
                    <li>Prices may vary by season (high season: December-March)</li>
                    <li>Healthcare, insurance, and personal expenses are not included</li>
                    <li>Initial setup costs (deposits, equipment) are not included</li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={resetForm}
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors"
                  >
                    Recalculate
                  </button>
                  <Link 
                    href="/guides/cost-of-living"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    View Detailed Cost Guide
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Cost Comparison</h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-4 px-6 text-left">Expense Category</th>
                    <th className="py-4 px-6 text-center">Budget</th>
                    <th className="py-4 px-6 text-center">Moderate</th>
                    <th className="py-4 px-6 text-center">Luxury</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Accommodation (monthly)</td>
                    <td className="py-4 px-6 text-center">฿4,500 - ฿9,000</td>
                    <td className="py-4 px-6 text-center">฿9,000 - ฿18,000</td>
                    <td className="py-4 px-6 text-center">฿18,000 - ฿40,000+</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Food (monthly)</td>
                    <td className="py-4 px-6 text-center">฿9,000</td>
                    <td className="py-4 px-6 text-center">฿15,000</td>
                    <td className="py-4 px-6 text-center">฿24,000+</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Transportation (monthly)</td>
                    <td className="py-4 px-6 text-center">฿3,000</td>
                    <td className="py-4 px-6 text-center">฿4,000</td>
                    <td className="py-4 px-6 text-center">฿12,000+</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-medium">Utilities & Internet</td>
                    <td className="py-4 px-6 text-center">฿1,500</td>
                    <td className="py-4 px-6 text-center">฿2,000</td>
                    <td className="py-4 px-6 text-center">฿3,500+</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Entertainment & Activities</td>
                    <td className="py-4 px-6 text-center">฿3,000</td>
                    <td className="py-4 px-6 text-center">฿6,000</td>
                    <td className="py-4 px-6 text-center">฿12,000+</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-gray-50 font-bold">
                    <td className="py-4 px-6">Total (Monthly)</td>
                    <td className="py-4 px-6 text-center">฿21,000 - ฿25,500</td>
                    <td className="py-4 px-6 text-center">฿36,000 - ฿45,000</td>
                    <td className="py-4 px-6 text-center">฿69,500+</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
