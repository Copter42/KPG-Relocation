"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function AreaChooser() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    lifestyle: '',
    budget: '',
    proximity: '',
    environment: ''
  });

  const handleAnswer = (question, answer) => {
    setAnswers({...answers, [question]: answer});
    setStep(step + 1);
  };

  const getRecommendation = () => {
    // Simple logic to determine area recommendation based on answers
    if (answers.lifestyle === 'social' && answers.budget === 'mid' && answers.environment === 'beach') {
      return 'Haad Rin';
    } else if (answers.lifestyle === 'wellness' && answers.environment === 'jungle') {
      return 'Srithanu';
    } else if (answers.lifestyle === 'family' && answers.proximity === 'amenities') {
      return 'Thong Sala';
    } else if (answers.budget === 'high') {
      return 'Chaloklum';
    } else if (answers.budget === 'low') {
      return 'Ban Tai';
    } else {
      return 'Ban Kai';
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Area in Koh Phangan</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Answer a few questions to discover which neighborhood best matches your lifestyle and preferences
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {step === 1 && (
              <div className="quiz-step">
                <h2 className="text-2xl font-semibold mb-6">What's your preferred lifestyle?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <button 
                    onClick={() => handleAnswer('lifestyle', 'social')}
                    className="bg-white border-2 border-blue-500 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Social & Active</h3>
                    <p className="text-gray-600">Nightlife, events, and a bustling atmosphere</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('lifestyle', 'wellness')}
                    className="bg-white border-2 border-green-500 hover:bg-green-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Wellness & Spiritual</h3>
                    <p className="text-gray-600">Yoga, meditation, and holistic living</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('lifestyle', 'family')}
                    className="bg-white border-2 border-amber-500 hover:bg-amber-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Family-Oriented</h3>
                    <p className="text-gray-600">Kid-friendly with good schools nearby</p>
                  </button>
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={() => setStep(step + 1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="quiz-step">
                <h2 className="text-2xl font-semibold mb-6">What's your monthly accommodation budget?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <button 
                    onClick={() => handleAnswer('budget', 'low')}
                    className="bg-white border-2 border-blue-500 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Budget</h3>
                    <p className="text-gray-600">Under ฿10,000/month</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('budget', 'mid')}
                    className="bg-white border-2 border-green-500 hover:bg-green-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Mid-Range</h3>
                    <p className="text-gray-600">฿10,000-25,000/month</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('budget', 'high')}
                    className="bg-white border-2 border-amber-500 hover:bg-amber-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Luxury</h3>
                    <p className="text-gray-600">Over ฿25,000/month</p>
                  </button>
                </div>
                <div className="flex justify-between">
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => setStep(step + 1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="quiz-step">
                <h2 className="text-2xl font-semibold mb-6">How important is proximity to amenities?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <button 
                    onClick={() => handleAnswer('proximity', 'amenities')}
                    className="bg-white border-2 border-blue-500 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Very Important</h3>
                    <p className="text-gray-600">Need shops, restaurants, and services nearby</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('proximity', 'moderate')}
                    className="bg-white border-2 border-green-500 hover:bg-green-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Somewhat Important</h3>
                    <p className="text-gray-600">Happy with a 10-15 minute drive</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('proximity', 'remote')}
                    className="bg-white border-2 border-amber-500 hover:bg-amber-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Not Important</h3>
                    <p className="text-gray-600">Prefer seclusion and don't mind driving</p>
                  </button>
                </div>
                <div className="flex justify-between">
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => setStep(step + 1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="quiz-step">
                <h2 className="text-2xl font-semibold mb-6">What environment do you prefer?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <button 
                    onClick={() => handleAnswer('environment', 'beach')}
                    className="bg-white border-2 border-blue-500 hover:bg-blue-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Beachfront</h3>
                    <p className="text-gray-600">Direct access to the ocean</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('environment', 'jungle')}
                    className="bg-white border-2 border-green-500 hover:bg-green-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Jungle</h3>
                    <p className="text-gray-600">Lush greenery and nature</p>
                  </button>
                  <button 
                    onClick={() => handleAnswer('environment', 'town')}
                    className="bg-white border-2 border-amber-500 hover:bg-amber-50 rounded-lg p-6 text-center transition-colors"
                  >
                    <h3 className="text-xl font-medium mb-2">Town Center</h3>
                    <p className="text-gray-600">Urban convenience and community</p>
                  </button>
                </div>
                <div className="flex justify-between">
                  <button 
                    onClick={() => setStep(step - 1)}
                    className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => setStep(step + 1)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    See Results
                  </button>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="quiz-result text-center">
                <div className="mb-8 inline-block p-4 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4">Your Perfect Match: {getRecommendation()}</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Based on your preferences, we think you'd love living in {getRecommendation()}. This area aligns perfectly with your lifestyle, budget, and environmental preferences.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    href={`/areas/${getRecommendation().toLowerCase().replace(' ', '-')}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                  >
                    Learn More About {getRecommendation()}
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
            <Link href="/guides/housing-guide" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">Housing Guide</h3>
                <p className="text-gray-600">
                  Learn about housing options, rental processes, and typical prices in different areas of Koh Phangan.
                </p>
              </div>
            </Link>
            <Link href="/guides/transportation-guide" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">Transportation Guide</h3>
                <p className="text-gray-600">
                  Discover the best ways to get around the island, from motorbike rentals to songthaews and taxis.
                </p>
              </div>
            </Link>
            <Link href="/cost-estimator" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 group-hover:text-blue-700">Cost Estimator</h3>
                <p className="text-gray-600">
                  Calculate your monthly expenses based on your lifestyle choices and preferred area.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
