"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Recommendation {
  id: number;
  name: string;
  issuer: string;
  annualFee: number;
  cashback: string;
  introOffer: string;
  rating: number;
  bestFor: string;
  estimatedSavings: number;
  features: string[];
  explanation: string;
}

interface AIInsights {
  summary: string;
  insights: string[];
  recommendations: string[];
}

export default function AIRecommendationsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('recommended');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [aiInsights, setAiInsights] = useState<AIInsights | null>(null);

  useEffect(() => {
    // Fetch AI recommendations from our API
    fetchAIRecommendations();
  }, []);

  const fetchAIRecommendations = async () => {
    try {
      // Mock user data and spending patterns
      // In a real app, this would come from user input or stored data
      const userData = {
        id: 1,
        name: "Premium Member"
      };
      
      const spendingPatterns = {
        travel: 31,
        groceries: 25,
        dining: 17,
        shopping: 15,
        utilities: 12
      };

      const response = await fetch('/api/ai-recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userData,
          spendingPatterns
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setRecommendations(data.recommendations);
        // Mock AI insights (would come from AI model in real implementation)
        setAiInsights({
          summary: "Mixed spending patterns with emphasis on travel and groceries",
          insights: [
            "Travel spending (31%) suggests a travel rewards card",
            "Grocery spending (25%) indicates a cashback card would be beneficial",
            "Overall pattern shows responsible spending habits"
          ],
          recommendations: [
            "Consider a travel rewards card for maximum travel savings",
            "A grocery-focused cashback card could save ₹1,200+ annually",
            "A no-annual-fee general cashback card provides flexibility"
          ]
        });
      } else {
        // Fallback to mock data if API fails
        setRecommendations(getMockRecommendations());
        setAiInsights(getMockAIInsights());
      }
    } catch (error) {
      console.error('Error fetching AI recommendations:', error);
      // Fallback to mock data if API fails
      setRecommendations(getMockRecommendations());
      setAiInsights(getMockAIInsights());
    } finally {
      setIsLoading(false);
    }
  };

  const getMockRecommendations = () => [
    {
      id: 1,
      name: "Platinum Travel Rewards Card",
      issuer: "Global Bank",
      annualFee: 500,
      cashback: "3% on travel, 2% on dining",
      introOffer: "50,000 bonus points",
      rating: 4.8,
      bestFor: "Frequent travelers",
      estimatedSavings: 2450,
      features: ["Airport lounge access", "No foreign transaction fees", "Travel insurance"],
      explanation: "Based on your travel spending, this card maximizes your rewards with 3% cashback on all travel purchases."
    },
    {
      id: 2,
      name: "Cashback Mastercard",
      issuer: "National Bank",
      annualFee: 0,
      cashback: "1.5% on all purchases",
      introOffer: "₹500 cashback on first purchase",
      rating: 4.5,
      bestFor: "General spending",
      estimatedSavings: 1200,
      features: ["No annual fee", "Zero liability protection", "Mobile wallet support"],
      explanation: "A solid all-around card with no annual fee and consistent cashback on all purchases."
    },
    {
      id: 3,
      name: "Premium Gold Card",
      issuer: "City Finance",
      annualFee: 250,
      cashback: "5% on groceries, 3% on gas",
      introOffer: "20% off first year",
      rating: 4.7,
      bestFor: "Family shoppers",
      estimatedSavings: 1800,
      features: ["Extended warranty", "Purchase protection", "Concierge service"],
      explanation: "With significant grocery spending, this card offers the highest cashback in that category."
    },
    {
      id: 4,
      name: "Business Elite Card",
      issuer: "Commercial Bank",
      annualFee: 750,
      cashback: "2% on business expenses",
      introOffer: "Free companion flight",
      rating: 4.6,
      bestFor: "Small business owners",
      estimatedSavings: 3200,
      features: ["Business expense tracking", "Employee cards", "Tax deduction reporting"],
      explanation: "Designed for business owners with expense tracking features."
    }
  ];

  const getMockAIInsights = () => ({
    summary: "Mixed spending patterns with emphasis on travel and groceries",
    insights: [
      "Travel spending (31%) suggests a travel rewards card",
      "Grocery spending (25%) indicates a cashback card would be beneficial",
      "Overall pattern shows responsible spending habits"
    ],
    recommendations: [
      "Consider a travel rewards card for maximum travel savings",
      "A grocery-focused cashback card could save ₹1,200+ annually",
      "A no-annual-fee general cashback card provides flexibility"
    ]
  });

  const sortedCards = [...recommendations].sort((a, b) => {
    if (sortBy === 'recommended') return b.rating - a.rating;
    if (sortBy === 'savings') return b.estimatedSavings - a.estimatedSavings;
    if (sortBy === 'fee') return a.annualFee - b.annualFee;
    return 0;
  });

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                AI Card Recommendations
              </h1>
              <p className="text-gray-600">Personalized credit card suggestions based on your spending patterns</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link 
                href="/premium-dashboard"
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                ← Back to Dashboard
              </Link>
            </div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Generating personalized recommendations...</p>
            </div>
          ) : (
            <>
              {/* Filters */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="mb-4 md:mb-0">
                  <h2 className="font-bold text-gray-900 mb-1">4 Cards Match Your Profile</h2>
                  <p className="text-sm text-gray-600">Sorted by AI recommendation score</p>
                </div>
                
                <div className="flex items-center">
                  <span className="mr-3 text-gray-700">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="recommended">Most Recommended</option>
                    <option value="savings">Highest Savings</option>
                    <option value="fee">Lowest Annual Fee</option>
                  </select>
                </div>
              </div>

              {/* Recommendations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {sortedCards.map((card) => (
                  <div key={card.id} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{card.name}</h3>
                          <p className="text-gray-600">{card.issuer}</p>
                        </div>
                        {renderStars(card.rating)}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600">Annual Fee</div>
                          <div className="font-bold">₹{card.annualFee}/year</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-sm text-gray-600">Estimated Savings</div>
                          <div className="font-bold text-green-600">₹{card.estimatedSavings}/year</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="font-medium mb-2">Cashback Rewards</div>
                        <div className="text-gray-700">{card.cashback}</div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="font-medium mb-2">Introductory Offer</div>
                        <div className="text-gray-700">{card.introOffer}</div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="font-medium mb-2">Best For</div>
                        <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {card.bestFor}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="font-medium mb-2">Key Features</div>
                        <ul className="space-y-1">
                          {card.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300">
                          Apply Now
                        </button>
                        <button className="px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Insights */}
              <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">AI Insights</h2>
                    <p className="opacity-90">Why these cards match your profile</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white bg-opacity-10 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold">Spending Match</h3>
                    </div>
                    <p className="text-sm opacity-90">
                      Your travel spending (31%) aligns perfectly with travel rewards cards
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold">Savings Potential</h3>
                    </div>
                    <p className="text-sm opacity-90">
                      Switching cards could save you up to ₹3,200 annually
                    </p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold">Risk Assessment</h3>
                    </div>
                    <p className="text-sm opacity-90">
                      Low risk recommendations based on your credit profile
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}