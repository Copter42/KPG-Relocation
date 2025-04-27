import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CostOfLivingGuide() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/beach-sunset.jpg" 
            alt="Beach in Koh Phangan" 
            fill 
            style={{objectFit: 'cover'}}
            priority
            className="brightness-[0.85]"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl hero-text-animation">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Cost of Living Guide
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Plan your budget for paradise living: from basic to luxury lifestyles.
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
                Understanding the cost of living in Koh Phangan is essential for planning a successful relocation. This tropical paradise offers a wide range of lifestyle options, from ultra-budget backpacker living to luxury villa experiences. This guide breaks down typical expenses across different budget levels, helping you create a realistic financial plan for your island life.
              </p>
              <p className="mb-6">
                Unlike more developed parts of Thailand such as Bangkok or Phuket, Koh Phangan has its own unique economic ecosystem. While some items may cost more due to transportation to the island, the overall cost of living can be significantly lower than Western countries, especially when adopting local lifestyle habits.
              </p>

              {/* Table of Contents */}
              <div className="bg-blue-50 p-6 rounded-xl mb-10 border border-blue-100">
                <h3 className="text-xl font-bold mb-4">In This Guide:</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#budget-levels" className="text-blue-600 hover:underline">Budget Levels Overview</a>
                  </li>
                  <li>
                    <a href="#expenses" className="text-blue-600 hover:underline">Detailed Expense Breakdown</a>
                  </li>
                  <li>
                    <a href="#sample-budgets" className="text-blue-600 hover:underline">Sample Monthly Budgets</a>
                  </li>
                  <li>
                    <a href="#seasonal" className="text-blue-600 hover:underline">Seasonal Considerations</a>
                  </li>
                  <li>
                    <a href="#comparison" className="text-blue-600 hover:underline">Cost Comparison with Other Locations</a>
                  </li>
                  <li>
                    <a href="#saving-tips" className="text-blue-600 hover:underline">Money-Saving Tips</a>
                  </li>
                </ul>
              </div>

              {/* Budget Levels Section */}
              <div id="budget-levels">
                <h2 className="text-3xl font-bold mb-6">Budget Levels Overview</h2>
                <p className="mb-6">
                  We've categorized expenses into three main budget levels to help you visualize different lifestyle options:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold mb-3">Basic Budget</h3>
                    <p className="text-lg font-medium text-green-700 mb-4">฿15,000-25,000/month</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Simple accommodation</li>
                      <li>Primarily local Thai food</li>
                      <li>Limited luxuries</li>
                      <li>Local transportation only</li>
                      <li>Minimal entertainment expenses</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold mb-3">Comfortable Budget</h3>
                    <p className="text-lg font-medium text-blue-700 mb-4">฿25,000-50,000/month</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Mid-range accommodation with modern amenities</li>
                      <li>Mix of Thai and Western food</li>
                      <li>Regular activities and entertainment</li>
                      <li>Motorbike rental</li>
                      <li>Occasional splurges</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h3 className="text-xl font-bold mb-3">Luxury Budget</h3>
                    <p className="text-lg font-medium text-purple-700 mb-4">฿50,000-100,000+/month</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>High-end villa or premium accommodation</li>
                      <li>Frequent dining at upscale restaurants</li>
                      <li>Premium activities and services</li>
                      <li>Car rental or ownership</li>
                      <li>Regular travel and entertainment</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Expense Breakdown Section */}
              <div id="expenses">
                <h2 className="text-3xl font-bold mb-6">Detailed Expense Breakdown</h2>
                
                {/* Expense Categories Tabs */}
                <div className="mb-10">
                  <div className="border-b border-gray-200 mb-6">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="expenseTabs" role="tablist">
                      <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 border-blue-500 rounded-t-lg active" id="accommodation-tab" type="button" role="tab" aria-controls="accommodation" aria-selected="true">Accommodation</button>
                      </li>
                      <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="food-tab" type="button" role="tab" aria-controls="food" aria-selected="false">Food & Dining</button>
                      </li>
                      <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="transport-tab" type="button" role="tab" aria-controls="transport" aria-selected="false">Transportation</button>
                      </li>
                      <li className="mr-2" role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="healthcare-tab" type="button" role="tab" aria-controls="healthcare" aria-selected="false">Healthcare</button>
                      </li>
                      <li role="presentation">
                        <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300" id="entertainment-tab" type="button" role="tab" aria-controls="entertainment" aria-selected="false">Entertainment</button>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Accommodation Tab Content */}
                  <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm" id="accommodation" role="tabpanel" aria-labelledby="accommodation-tab">
                    <h3 className="text-2xl font-bold mb-6">Accommodation</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Basic</h4>
                        <p className="text-lg text-amber-600 font-medium mb-3">฿5,000-10,000/month</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Simple fan bungalow</li>
                          <li>Shared bathroom facilities in some cases</li>
                          <li>Basic furnishings</li>
                          <li>May be further from beaches</li>
                          <li>Limited amenities</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Comfortable</h4>
                        <p className="text-lg text-amber-600 font-medium mb-3">฿10,000-25,000/month</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>One-bedroom apartment or house</li>
                          <li>Air conditioning</li>
                          <li>Hot water</li>
                          <li>Western bathroom</li>
                          <li>Basic kitchen</li>
                          <li>Possibly shared pool</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Luxury</h4>
                        <p className="text-lg text-amber-600 font-medium mb-3">฿25,000-100,000+/month</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Villa with multiple bedrooms</li>
                          <li>Private pool</li>
                          <li>Sea views</li>
                          <li>Full kitchen</li>
                          <li>Modern furnishings</li>
                          <li>Possibly including cleaning service</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold mb-2">Location Factors:</h4>
                        <p className="text-gray-700">
                          Beachfront properties command premium prices, often 30-50% higher than similar properties just 5-10 minutes inland. Areas like Haad Rin and Thong Sala tend to be more expensive, while inland areas offer better value.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Utility Costs:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Electricity: ฿1,000-5,000/month (highly variable based on air conditioning usage)</li>
                          <li>Water: ฿100-500/month</li>
                          <li>Internet: ฿600-1,000/month for fiber connection</li>
                          <li>Mobile phone: ฿300-1,000/month depending on data needs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Other tabs would be shown/hidden with JavaScript in a real implementation */}
                </div>
              </div>

              {/* Sample Budgets Section */}
              <div id="sample-budgets">
                <h2 className="text-3xl font-bold mb-6">Sample Monthly Budgets</h2>
                
                <div className="space-y-6 mb-10">
                  {/* Digital Nomad Budget */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
                    <div className="bg-blue-50 px-6 py-4">
                      <h3 className="text-xl font-bold">Digital Nomad (Comfortable Budget)</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>Accommodation: Studio apartment with A/C</span>
                              <span className="font-medium">฿12,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Utilities & Internet</span>
                              <span className="font-medium">฿2,500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Food: Mix of eating out and cooking</span>
                              <span className="font-medium">฿15,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Transportation: Motorbike rental</span>
                              <span className="font-medium">฿3,000</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>Health Insurance: Basic international</span>
                              <span className="font-medium">฿3,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Entertainment & Activities</span>
                              <span className="font-medium">฿8,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Visa Expenses: Averaged monthly</span>
                              <span className="font-medium">฿2,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Miscellaneous</span>
                              <span className="font-medium">฿4,000</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border-t pt-4 flex justify-between items-center">
                        <span className="text-lg font-bold">Total:</span>
                        <div className="text-right">
                          <span className="block text-xl font-bold text-blue-600">฿49,500/month</span>
                          <span className="text-sm text-gray-500">approximately $1,400 USD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Retired Couple Budget */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
                    <div className="bg-purple-50 px-6 py-4">
                      <h3 className="text-xl font-bold">Retired Couple (Comfortable to Luxury)</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>Accommodation: Two-bedroom house</span>
                              <span className="font-medium">฿25,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Utilities & Internet</span>
                              <span className="font-medium">฿4,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Food: Mix of home cooking and dining out</span>
                              <span className="font-medium">฿25,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Transportation: Car rental</span>
                              <span className="font-medium">฿15,000</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>Health Insurance: Comprehensive coverage</span>
                              <span className="font-medium">฿12,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Entertainment & Activities</span>
                              <span className="font-medium">฿10,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Visa Expenses: Retirement visa costs</span>
                              <span className="font-medium">฿1,500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Miscellaneous</span>
                              <span className="font-medium">฿8,000</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border-t pt-4 flex justify-between items-center">
                        <span className="text-lg font-bold">Total:</span>
                        <div className="text-right">
                          <span className="block text-xl font-bold text-purple-600">฿100,500/month</span>
                          <span className="text-sm text-gray-500">approximately $2,800 USD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Family Budget */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
                    <div className="bg-green-50 px-6 py-4">
                      <h3 className="text-xl font-bold">Family with Children (Comfortable)</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>Accommodation: Three-bedroom house</span>
                              <span className="font-medium">฿30,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Utilities & Internet</span>
                              <span className="font-medium">฿5,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Food: Family meals at home and out</span>
                              <span className="font-medium">฿30,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Transportation: Car rental</span>
                              <span className="font-medium">฿15,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Health Insurance: Family coverage</span>
                              <span className="font-medium">฿15,000</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span>Education: International school or online</span>
                              <span className="font-medium">฿15,000-40,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Entertainment & Activities</span>
                              <span className="font-medium">฿10,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Visa Expenses: Family visas averaged</span>
                              <span className="font-medium">฿3,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Miscellaneous</span>
                              <span className="font-medium">฿10,000</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="border-t pt-4 flex justify-between items-center">
                        <span className="text-lg font-bold">Total:</span>
                        <div className="text-right">
                          <span className="block text-xl font-bold text-green-600">฿133,000-158,000/month</span>
                          <span className="text-sm text-gray-500">approximately $3,700-4,400 USD</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seasonal Considerations Section */}
              <div id="seasonal">
                <h2 className="text-3xl font-bold mb-6">Seasonal Considerations</h2>
                <p className="mb-6">
                  Koh Phangan's costs fluctuate seasonally, which can significantly impact your budget:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                    <h3 className="text-xl font-bold mb-3">High Season</h3>
                    <p className="text-sm text-gray-600 italic mb-3">December-March</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Accommodation prices increase 20-50%</li>
                      <li>Restaurant prices may increase slightly</li>
                      <li>Activities and tours charge premium rates</li>
                      <li>Transportation costs rise, especially taxis</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-xl font-bold mb-3">Shoulder Season</h3>
                    <p className="text-sm text-gray-600 italic mb-3">April-May, October-November</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Moderate pricing</li>
                      <li>Good balance of value and weather</li>
                      <li>Some businesses offer "shoulder season" discounts</li>
                      <li>Less crowded beaches and attractions</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-xl font-bold mb-3">Low Season</h3>
                    <p className="text-sm text-gray-600 italic mb-3">June-September</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Best accommodation deals (30-50% off high season prices)</li>
                      <li>Quieter beaches and attractions</li>
                      <li>Some businesses close temporarily</li>
                      <li>Occasional heavy rain may limit activities</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cost Comparison Section */}
              <div id="comparison">
                <h2 className="text-3xl font-bold mb-6">Cost Comparison with Other Locations</h2>
                <p className="mb-6">
                  To put Koh Phangan's cost of living in perspective:
                </p>
                
                <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 mb-10">
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-1/2 font-medium">Compared to Koh Samui:</div>
                        <div className="w-1/2 flex items-center">
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            30-40% cheaper
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-1/2 font-medium">Compared to Phuket:</div>
                        <div className="w-1/2 flex items-center">
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            20-30% cheaper
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-1/2 font-medium">Compared to Chiang Mai:</div>
                        <div className="w-1/2 flex items-center">
                          <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                            10-20% more expensive
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-1/2 font-medium">Compared to Western European cities:</div>
                        <div className="w-1/2 flex items-center">
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            60-70% cheaper
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-1/2 font-medium">Compared to major US cities:</div>
                        <div className="w-1/2 flex items-center">
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            70-80% cheaper
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Money-Saving Tips Section */}
              <div id="saving-tips">
                <h2 className="text-3xl font-bold mb-6">Money-Saving Tips</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Banking & Currency</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Use a multi-currency account like Wise or Revolut to avoid excessive conversion fees</li>
                      <li>Withdraw larger amounts less frequently to minimize ATM fees</li>
                      <li>Some Thai banks (like Bangkok Bank) offer accounts for foreigners with proper visa documentation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Shopping Strategies</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Shop at local markets rather than tourist-oriented shops</li>
                      <li>Buy fruits and vegetables in season</li>
                      <li>Visit Tesco Lotus or Makro for bulk purchases</li>
                      <li>Join Facebook groups for second-hand items</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold mb-4">Long-Term Savings</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Negotiate long-term accommodation rates (6+ months can yield 30-40% discounts)</li>
                      <li>Purchase a motorbike rather than renting for stays over 6 months</li>
                      <li>Cook at home using local ingredients</li>
                      <li>Limit air conditioning use (biggest factor in electricity bills)</li>
                      <li>Consider fan rooms instead of A/C for significant savings</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 mb-10">
                  <h3 className="text-xl font-bold mb-4">Pro Tip: Adapting to Local Lifestyle</h3>
                  <p className="mb-4">
                    Many newcomers find they naturally adapt to a more local lifestyle over time, finding a comfortable middle ground that balances Western comforts with Thai practicality. This evolution often results in decreasing monthly expenses after the initial settling-in period.
                  </p>
                  <p>
                    The key is to remain flexible and open to local ways of doing things, which not only saves money but often leads to a more authentic and rewarding experience.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
              <p className="mb-4">
                Koh Phangan offers remarkable value compared to Western countries, with the potential for a high quality of life at a fraction of the cost. Your actual expenses will depend greatly on your lifestyle choices, particularly regarding accommodation, dining habits, and transportation.
              </p>
              <p className="mb-6">
                Many newcomers find they naturally adapt to a more local lifestyle over time, finding a comfortable middle ground that balances Western comforts with Thai practicality. This evolution often results in decreasing monthly expenses after the initial settling-in period.
              </p>
              
              <div className="bg-blue-500 text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Calculate Your Personal Budget</h3>
                <p className="text-lg mb-6">
                  For a personalized estimate based on your specific lifestyle preferences, use our interactive Cost Estimator tool.
                </p>
                <Link href="/cost-estimator" className="btn btn-white text-blue-600 text-lg px-8 py-4 hover:bg-opacity-90">
                  Try Our Cost Estimator
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
                <h3 className="text-xl font-bold mb-3">How much money do I need to live comfortably in Koh Phangan?</h3>
                <p className="text-gray-700">
                  A comfortable lifestyle with modern amenities, regular dining out, and activities typically costs between ฿25,000-50,000 per month for a single person. Couples can live comfortably for ฿40,000-80,000, while families with children should budget ฿80,000-150,000 depending on education needs and lifestyle choices.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Is Koh Phangan more expensive than other parts of Thailand?</h3>
                <p className="text-gray-700">
                  Koh Phangan is generally more expensive than mainland destinations like Chiang Mai or less touristy provinces, but more affordable than Koh Samui or Phuket. The island premium exists because most goods must be imported, but it's still significantly cheaper than Western countries.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">What's the biggest expense for most expats?</h3>
                <p className="text-gray-700">
                  Accommodation is typically the largest expense, followed by food (especially if you prefer Western cuisine). Air conditioning usage can significantly impact electricity bills, and transportation costs can add up if you frequently travel around the island or to neighboring islands.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">How much should I budget for healthcare?</h3>
                <p className="text-gray-700">
                  Basic health insurance starts around ฿2,000-3,000 per month, while comprehensive international coverage can range from ฿5,000-15,000 monthly depending on age and pre-existing conditions. Budget an additional ฿1,000-2,000 monthly for routine medications, check-ups, and minor treatments not covered by insurance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-3">Can I use credit cards on Koh Phangan?</h3>
                <p className="text-gray-700">
                  Credit cards are accepted at larger establishments, hotels, and some restaurants, but many small businesses, local markets, and services operate on cash only. It's advisable to always have cash on hand. ATMs are widely available but charge foreign transaction fees of ฿220-250 per withdrawal, so plan accordingly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Budget?</h2>
            <p className="text-xl mb-8">
              Use our interactive tools or download our comprehensive guide to start planning your island life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cost-estimator" className="btn btn-white text-amber-600 text-lg px-8 py-4 hover:bg-opacity-90">
                Try Our Cost Estimator
              </Link>
              <Link href="/guides/cost-of-living-pdf" className="btn btn-outline btn-white text-lg px-8 py-4">
                Download PDF Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
