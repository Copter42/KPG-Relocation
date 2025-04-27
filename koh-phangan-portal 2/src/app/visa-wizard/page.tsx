"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function VisaWizard() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    duration: '',
    purpose: '',
    nationality: '',
    age: ''
  });

  const handleAnswer = (question, answer) => {
    setAnswers({...answers, [question]: answer});
    setStep(step + 1);
  };

  const getRecommendation = () => {
    // Simple logic to determine visa recommendation based on answers
    if (answers.duration === 'short' && answers.purpose === 'tourism') {
      return 'Visa Exemption (Visa-Free Entry)';
    } else if (answers.duration === 'medium' && answers.purpose === 'tourism') {
      return 'Tourist Visa (TR)';
    } else if (answers.duration === 'long' && answers.purpose === 'tourism') {
      return 'Special Tourist Visa (STV)';
    } else if (answers.purpose === 'retirement' && answers.age === 'over50') {
      return 'Non-Immigrant O-A Visa (Retirement)';
    } else if (answers.purpose === 'work') {
      return 'Non-Immigrant B Visa (Business)';
    } else if (answers.purpose === 'digital_nomad') {
      return 'Digital Nomad Visa (Long-Term Resident Visa)';
    } else {
      return 'Tourist Visa (TR)';
    }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Thailand Visa Wizard</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Find the perfect visa option for your stay in Koh Phangan
          </p>
        </div>
      </section>

      {/* Wizard Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-10">Visa Recommendation Wizard</h2>
            
            {step === 1 && (
              <div className="quiz-step">
                <h3 className="text-2xl font-semibold mb-6">How long do you plan to stay in Thailand?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    onClick={() => handleAnswer('duration', 'short')}
                    className="bg-white border-2 border-green-500 hover:bg-green-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">Less than 30 days</h4>
                    <p className="text-gray-600">Short vacation or brief visit</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('duration', 'medium')}
                    className="bg-white border-2 border-orange-500 hover:bg-orange-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">1-3 months</h4>
                    <p className="text-gray-600">Extended stay or seasonal visit</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('duration', 'long')}
                    className="bg-white border-2 border-blue-500 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">3-12 months</h4>
                    <p className="text-gray-600">Long-term stay or digital nomad lifestyle</p>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="quiz-step">
                <h3 className="text-2xl font-semibold mb-6">What's the primary purpose of your stay?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleAnswer('purpose', 'tourism')}
                    className="bg-white border-2 border-green-500 hover:bg-green-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">Tourism</h4>
                    <p className="text-gray-600">Vacation, exploration, or leisure</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('purpose', 'digital_nomad')}
                    className="bg-white border-2 border-blue-500 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">Digital Nomad</h4>
                    <p className="text-gray-600">Remote work while traveling</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('purpose', 'retirement')}
                    className="bg-white border-2 border-amber-500 hover:bg-amber-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">Retirement</h4>
                    <p className="text-gray-600">Long-term residence for retirees</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('purpose', 'work')}
                    className="bg-white border-2 border-purple-500 hover:bg-purple-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">Work/Business</h4>
                    <p className="text-gray-600">Employment or business activities</p>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="quiz-step">
                <h3 className="text-2xl font-semibold mb-6">What is your nationality?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleAnswer('nationality', 'visa_exempt')}
                    className="bg-white border-2 border-green-500 hover:bg-green-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">Visa-Exempt Country</h4>
                    <p className="text-gray-600">USA, UK, EU, Australia, etc.</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('nationality', 'visa_required')}
                    className="bg-white border-2 border-blue-500 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">Visa-Required Country</h4>
                    <p className="text-gray-600">Most African, some Asian countries</p>
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="quiz-step">
                <h3 className="text-2xl font-semibold mb-6">What is your age group?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleAnswer('age', 'under50')}
                    className="bg-white border-2 border-green-500 hover:bg-green-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">Under 50 years</h4>
                  </button>
                  <button 
                    onClick={() => handleAnswer('age', 'over50')}
                    className="bg-white border-2 border-blue-500 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h4 className="text-xl font-medium mb-2">50 years or older</h4>
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="quiz-result">
                <div className="mb-8 text-center">
                  <div className="inline-block p-4 bg-green-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center">Recommended Visa: {getRecommendation()}</h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h4 className="text-xl font-semibold mb-4">Key Information</h4>
                  {getRecommendation() === 'Visa Exemption (Visa-Free Entry)' && (
                    <div>
                      <p className="mb-2"><strong>Duration:</strong> 30-45 days (depending on nationality)</p>
                      <p className="mb-2"><strong>Application:</strong> No pre-arrival application needed</p>
                      <p className="mb-2"><strong>Extension:</strong> Can be extended once for 30 days (฿1,900 fee)</p>
                      <p className="mb-2"><strong>Ideal for:</strong> Short-term visitors and those testing the waters</p>
                    </div>
                  )}
                  
                  {getRecommendation() === 'Tourist Visa (TR)' && (
                    <div>
                      <p className="mb-2"><strong>Duration:</strong> 60 days initially</p>
                      <p className="mb-2"><strong>Application:</strong> Must apply at Thai embassy/consulate before arrival</p>
                      <p className="mb-2"><strong>Extension:</strong> Can be extended once for 30 days (฿1,900 fee)</p>
                      <p className="mb-2"><strong>Ideal for:</strong> Longer tourism stays, digital nomads without formal work permits</p>
                    </div>
                  )}
                  
                  {getRecommendation() === 'Special Tourist Visa (STV)' && (
                    <div>
                      <p className="mb-2"><strong>Duration:</strong> 90 days initially, extendable twice for 90 days each</p>
                      <p className="mb-2"><strong>Application:</strong> Must apply at Thai embassy/consulate before arrival</p>
                      <p className="mb-2"><strong>Extension:</strong> Can stay up to 9 months total with extensions</p>
                      <p className="mb-2"><strong>Ideal for:</strong> Long-term tourists, digital nomads, and those exploring retirement options</p>
                    </div>
                  )}
                  
                  {getRecommendation() === 'Non-Immigrant O-A Visa (Retirement)' && (
                    <div>
                      <p className="mb-2"><strong>Duration:</strong> 1 year, renewable</p>
                      <p className="mb-2"><strong>Application:</strong> Must apply at Thai embassy/consulate before arrival</p>
                      <p className="mb-2"><strong>Requirements:</strong> Age 50+, financial requirements (฿800,000 in Thai bank or monthly income of ฿65,000)</p>
                      <p className="mb-2"><strong>Ideal for:</strong> Retirees planning to settle in Thailand long-term</p>
                    </div>
                  )}
                  
                  {getRecommendation() === 'Non-Immigrant B Visa (Business)' && (
                    <div>
                      <p className="mb-2"><strong>Duration:</strong> 90 days initially, extendable to 1 year</p>
                      <p className="mb-2"><strong>Application:</strong> Must apply at Thai embassy/consulate before arrival</p>
                      <p className="mb-2"><strong>Requirements:</strong> Business registration or employment contract with a Thai company</p>
                      <p className="mb-2"><strong>Ideal for:</strong> Entrepreneurs, investors, and those employed by Thai companies</p>
                    </div>
                  )}
                  
                  {getRecommendation() === 'Digital Nomad Visa (Long-Term Resident Visa)' && (
                    <div>
                      <p className="mb-2"><strong>Duration:</strong> 5 years, renewable</p>
                      <p className="mb-2"><strong>Application:</strong> Must apply at Thai embassy/consulate before arrival</p>
                      <p className="mb-2"><strong>Requirements:</strong> Proof of employment/clients, income (minimum $80,000 over past 2 years)</p>
                      <p className="mb-2"><strong>Ideal for:</strong> Remote workers, digital professionals, and high-income freelancers</p>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href="/guides/visa-guide"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                  >
                    View Detailed Visa Guide
                  </Link>
                  <button 
                    onClick={() => setStep(1)}
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}

            {/* Progress Bar */}
            {step < 5 && (
              <div className="mt-10">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Question {step} of 4</span>
                  <span>{step * 25}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${step * 25}%` }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/guides/visa-guide" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">Comprehensive Visa Guide</h3>
                <p className="text-gray-600">
                  Detailed information on all visa types, application processes, extensions, and common pitfalls.
                </p>
              </div>
            </Link>
            <Link href="/guides/first-steps-guide" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">First Steps Guide</h3>
                <p className="text-gray-600">
                  Essential steps to take before and after arriving in Thailand, including visa preparation.
                </p>
              </div>
            </Link>
            <a href="https://www.thaiembassy.com" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">Official Thai Embassy Resources</h3>
                <p className="text-gray-600">
                  Links to official Thai embassy websites for the most up-to-date visa information and requirements.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
