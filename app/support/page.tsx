"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Need Help?
            </h1>
            <p className="text-gray-600">We're here to assist you with any questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
              
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 transition-all duration-300 animate-fade-in">
                  <p>Thank you for your message! We will get back to you soon.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Alternative Contact</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 transition-all duration-300 hover:shadow-md">
                <p className="text-gray-700 mb-4">
                  You can also reach us directly at:
                </p>
                <p className="font-medium text-blue-600">
                  support@creditcardadvisor.ai
                </p>
              </div>
              
              <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6 transition-all duration-300 hover:bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    Can I cancel anytime?
                  </h3>
                  <p className="text-gray-600">
                    Yes, you can cancel your subscription at any time by contacting our support team.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 pb-6 transition-all duration-300 hover:bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    What payment methods are supported?
                  </h3>
                  <p className="text-gray-600">
                    We support all major payment methods including UPI, GPay, Paytm, and all credit/debit cards.
                  </p>
                </div>
                
                <div className="transition-all duration-300 hover:bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">
                    How often are recommendations updated?
                  </h3>
                  <p className="text-gray-600">
                    Our AI updates your recommendations monthly based on your spending patterns and new card offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}