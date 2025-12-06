"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch user data from the server
    // For this demo, we'll just show a placeholder
    setTimeout(() => {
      setUser({
        name: "John Doe",
        email: "john@example.com",
        memberSince: "January 2024"
      });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your Dashboard
              </h1>
              <p className="text-gray-600">Welcome back! Here's your credit card insights.</p>
            </div>
            {user && (
              <div className="text-right">
                <p className="text-gray-600">Member since</p>
                <p className="font-semibold">{user.memberSince}</p>
              </div>
            )}
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Loading your dashboard...</p>
            </div>
          ) : (
            <>
              {user && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-blue-600">
                        {user.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10 transition-all duration-300 hover:shadow-md">
                <div className="text-center">
                  <div className="inline-block bg-white rounded-full p-4 mb-6 shadow-md">
                    <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">AI-based recommendations will appear here soon</h2>
                  <p className="text-gray-600 mb-6">We're analyzing your profile and matching you with the best credit cards.</p>
                  <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full animate-pulse">
                    Analysis in progress...
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Your Spending Patterns</h3>
                  </div>
                  <p className="text-gray-600 mb-4">We're analyzing your spending to recommend cards that maximize your rewards.</p>
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow">
                        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">Spending Chart</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-blue-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Top Recommendations</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Personalized suggestions based on your financial profile.</p>
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow">
                        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-sm">Recommended Cards</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/support"
                  className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Contact Support
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}