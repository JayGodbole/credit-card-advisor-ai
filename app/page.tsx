"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-down">
            Smarter Credit Card Decisions, <span className="text-blue-600">Simplified.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-in-up">
            Get expert AI guidance to choose the best credit card for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/payment"
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in"
            >
              Start Membership ₹499/month
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Enter your details</h3>
              <p className="text-gray-600">Share your spending habits and financial goals</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI analyzes</h3>
              <p className="text-gray-600">Our AI evaluates hundreds of credit cards</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-blue-200 group-hover:scale-110">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get personalized card suggestions</h3>
              <p className="text-gray-600">Receive tailored recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Save on annual fees</h3>
              <p className="text-gray-600">Find cards with the lowest fees that match your spending</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Maximize cashback</h3>
              <p className="text-gray-600">Get the highest rewards on categories you spend the most</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-blue-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Avoid hidden charges</h3>
              <p className="text-gray-600">Understand all costs before you apply</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">What Our Members Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="text-yellow-400 mb-4">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600 mb-6 italic">"Saved ₹3,000 in annual fees in my first year. The AI recommendations were spot on!"</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-semibold">Priya Sharma</p>
                  <p className="text-gray-500">Delhi</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="text-yellow-400 mb-4">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600 mb-6 italic">"Found a card that gives 5% cashback on groceries. I was wasting money before!"</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-semibold">Rahul Mehta</p>
                  <p className="text-gray-500">Mumbai</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="text-yellow-400 mb-4">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600 mb-6 italic">"The detailed analysis helped me understand which card truly fits my lifestyle."</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="font-semibold">Anjali Patel</p>
                  <p className="text-gray-500">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Pro Membership</h2>
          <div className="text-5xl font-bold text-white mb-8">₹499<span className="text-2xl">/month</span></div>
          
          <div className="bg-white rounded-2xl p-8 mb-10 text-left max-w-2xl mx-auto transform transition-all duration-300 hover:scale-[1.02]">
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Personalized card recommendations
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Monthly credit insights
              </li>
              <li className="flex items-center">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Priority support
              </li>
            </ul>
            
            <Link 
              href="/payment"
              className="block w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-full text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Membership ₹499/month
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">Credit Card Advisor AI</h3>
              <p className="mt-2 text-gray-400">Smart decisions for smarter spending</p>
            </div>
            <div className="flex space-x-8">
              <Link href="/terms" className="hover:text-blue-400 transition-colors duration-300">Terms</Link>
              <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-300">Privacy</Link>
              <Link href="/support" className="hover:text-blue-400 transition-colors duration-300">Support</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Credit Card Advisor AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}