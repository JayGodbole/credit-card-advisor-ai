"use client";

import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Terms and Privacy Policy
            </h1>
            <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="prose prose-blue max-w-none">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold mt-4 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-6">
                Welcome to Credit Card Advisor AI. These terms and conditions outline the rules and regulations for the use of our services.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data Usage</h2>
              <p className="text-gray-600 mb-6">
                We collect personal information to provide better credit card recommendations. This includes spending patterns, financial goals, and preferences. All data is encrypted and stored securely.
              </p>
              <p className="text-gray-600 mb-6">
                We do not sell or rent your personal information to third parties. Data is used solely to improve our recommendation algorithms.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Refunds</h2>
              <p className="text-gray-600 mb-6">
                We offer a 7-day money-back guarantee for new subscribers. After this period, subscriptions are non-refundable. For refund requests, please contact our support team.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Secure Payments</h2>
              <p className="text-gray-600 mb-6">
                All payments are processed through secure third-party payment processors. We do not store any payment information on our servers.
              </p>
              <p className="text-gray-600 mb-6">
                We use industry-standard encryption protocols to protect your financial information during transactions.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Service Changes</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify or discontinue our services at any time without notice. We will strive to provide advance notice of any significant changes.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                Credit Card Advisor AI provides recommendations only. We are not responsible for any financial decisions you make based on our advice.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Information</h2>
              <p className="text-gray-600 mb-6">
                For any questions regarding these terms, please contact us at:
              </p>
              <p className="text-blue-600 font-medium mb-6">
                support@creditcardadvisor.ai
              </p>
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