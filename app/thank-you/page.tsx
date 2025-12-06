"use client";

import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-down">
            Payment Successful!
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 animate-fade-in-up">
            Welcome to Credit Card Advisor AI. Your account has been activated.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 animate-fade-in">
            <p className="text-gray-700 mb-4">
              Thank you for joining our community. You now have access to personalized credit card recommendations powered by our advanced AI algorithms.
            </p>
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full">
              Pro Membership Active
            </div>
          </div>
          
          <p className="text-gray-500 mb-10 animate-fade-in">
            Check your email for confirmation and next steps.
          </p>
          
          <Link 
            href="/dashboard"
            className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-block animate-fade-in-up"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}