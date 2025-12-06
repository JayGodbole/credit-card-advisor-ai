"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function PremiumDashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Simulate fetching user data
    setTimeout(() => {
      // In a real app, this would come from your authentication system
      setUser({
        name: "John Doe",
        email: "john@example.com",
        memberSince: "January 2024",
        subscriptionActive: true
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  // Mock data for charts and recommendations
  const spendingData = [
    { category: 'Groceries', amount: 1200, percentage: 25 },
    { category: 'Dining', amount: 800, percentage: 17 },
    { category: 'Travel', amount: 1500, percentage: 31 },
    { category: 'Shopping', amount: 700, percentage: 15 },
    { category: 'Utilities', amount: 600, percentage: 12 }
  ];

  const cardRecommendations = [
    {
      name: "Platinum Rewards Card",
      annualFee: 500,
      cashback: "3% on travel, 2% on dining",
      rating: 4.8,
      bestFor: "Frequent travelers"
    },
    {
      name: "Cashback Mastercard",
      annualFee: 0,
      cashback: "1.5% on all purchases",
      rating: 4.5,
      bestFor: "General spending"
    },
    {
      name: "Premium Gold Card",
      annualFee: 250,
      cashback: "5% on groceries, 3% on gas",
      rating: 4.7,
      bestFor: "Family shoppers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Premium Dashboard
              </h1>
              <p className="text-gray-600">Your personalized credit card insights and recommendations</p>
            </div>
            
            {user && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mt-4 md:mt-0">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-blue-600">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-600">Pro Member</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Loading your premium dashboard...</p>
            </div>
          ) : (
            <>
              {/* AI Insights Section */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 mb-10 text-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">AI-Powered Insights</h2>
                    <p className="opacity-90">Personalized recommendations based on your spending patterns</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      Updated Today
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="bg-white bg-opacity-10 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold">Savings Potential</h3>
                    </div>
                    <p className="text-3xl font-bold">₹2,450/year</p>
                    <p className="text-sm opacity-80 mt-1">By switching cards</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold">Monthly Spending</h3>
                    </div>
                    <p className="text-3xl font-bold">₹4,800</p>
                    <p className="text-sm opacity-80 mt-1">This month</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold">Top Card Match</h3>
                    </div>
                    <p className="text-xl font-bold">Platinum Rewards</p>
                    <p className="text-sm opacity-80 mt-1">3% cashback</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Spending Analysis */}
                <div className="border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Spending Analysis</h2>
                    <Link href="/spending-charts" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Details →
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    {spendingData.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{item.category}</span>
                          <span>₹{item.amount.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold mb-3">Insights</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>You're spending 31% on travel - consider travel rewards cards</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Your grocery spending qualifies for premium cashback cards</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Card Recommendations */}
                <div className="border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Top Recommendations</h2>
                    <Link href="/ai-recommendations" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      See All →
                    </Link>
                  </div>
                  
                  <div className="space-y-6">
                    {cardRecommendations.map((card, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-lg">{card.name}</h3>
                          <div className="flex items-center bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-bold">{card.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between text-sm mb-3">
                          <span className="text-gray-600">Annual Fee:</span>
                          <span className="font-semibold">₹{card.annualFee}/year</span>
                        </div>
                        
                        <div className="flex justify-between text-sm mb-3">
                          <span className="text-gray-600">Cashback:</span>
                          <span className="font-semibold">{card.cashback}</span>
                        </div>
                        
                        <div className="text-sm mb-4">
                          <span className="text-gray-600">Best for: </span>
                          <span className="font-medium">{card.bestFor}</span>
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                          Apply Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/spending-charts"
                  className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 text-center"
                >
                  View Detailed Charts
                </Link>
                <Link 
                  href="/ai-recommendations"
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 text-center"
                >
                  Get More Recommendations
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}