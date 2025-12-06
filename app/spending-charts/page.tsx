"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function SpendingChartsPage() {
  const [activeTab, setActiveTab] = useState('monthly');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // Mock data for charts
  const monthlyData = [
    { month: 'Jan', spending: 4200 },
    { month: 'Feb', spending: 3800 },
    { month: 'Mar', spending: 5100 },
    { month: 'Apr', spending: 4600 },
    { month: 'May', spending: 5300 },
    { month: 'Jun', spending: 4900 }
  ];

  const categoryData = [
    { category: 'Groceries', amount: 1200, percentage: 25, color: 'bg-blue-500' },
    { category: 'Dining', amount: 800, percentage: 17, color: 'bg-green-500' },
    { category: 'Travel', amount: 1500, percentage: 31, color: 'bg-purple-500' },
    { category: 'Shopping', amount: 700, percentage: 15, color: 'bg-yellow-500' },
    { category: 'Utilities', amount: 600, percentage: 12, color: 'bg-red-500' }
  ];

  const renderBarChart = (data: any[]) => (
    <div className="h-64 flex items-end space-x-2 mt-8">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div className="text-xs text-gray-600 mb-1">{item.spending}</div>
          <div 
            className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all duration-300 hover:opacity-75"
            style={{ height: `${(item.spending / 6000) * 100}%` }}
          ></div>
          <div className="text-xs text-gray-600 mt-1">{item.month}</div>
        </div>
      ))}
    </div>
  );

  const renderPieChart = (data: any[]) => (
    <div className="flex flex-col md:flex-row items-center">
      <div className="relative w-64 h-64">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {data.map((item, index) => {
            const startAngle = data.slice(0, index).reduce((sum, d) => sum + d.percentage, 0) * 3.6;
            const endAngle = startAngle + item.percentage * 3.6;
            const startRad = (startAngle - 90) * Math.PI / 180;
            const endRad = (endAngle - 90) * Math.PI / 180;
            const x1 = 50 + 40 * Math.cos(startRad);
            const y1 = 50 + 40 * Math.sin(startRad);
            const x2 = 50 + 40 * Math.cos(endRad);
            const y2 = 50 + 40 * Math.sin(endRad);
            const largeArcFlag = item.percentage > 50 ? 1 : 0;
            
            return (
              <path
                key={index}
                d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                className={`${item.color} opacity-80 hover:opacity-100 transition-opacity`}
              />
            );
          })}
        </svg>
      </div>
      
      <div className="mt-8 md:mt-0 md:ml-8">
        {data.map((item, index) => (
          <div key={index} className="flex items-center mb-3">
            <div className={`w-4 h-4 ${item.color} rounded mr-3`}></div>
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="font-medium">{item.category}</span>
                <span>₹{item.amount.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  className={`${item.color} h-2 rounded-full`} 
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Spending Analytics
              </h1>
              <p className="text-gray-600">Detailed insights into your spending patterns</p>
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
              <p className="text-gray-600">Loading spending analytics...</p>
            </div>
          ) : (
            <>
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('monthly')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'monthly'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Monthly Trends
                  </button>
                  <button
                    onClick={() => setActiveTab('categories')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'categories'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    By Category
                  </button>
                </nav>
              </div>

              {/* Chart Content */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {activeTab === 'monthly' ? 'Monthly Spending Trend' : 'Spending by Category'}
                  </h2>
                  <div className="text-sm text-gray-600">
                    Last 6 months
                  </div>
                </div>
                
                {activeTab === 'monthly' ? (
                  <>
                    {renderBarChart(monthlyData)}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-lg p-4 shadow">
                        <div className="text-gray-600 mb-1">Average Monthly</div>
                        <div className="text-2xl font-bold">₹4,800</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow">
                        <div className="text-gray-600 mb-1">Highest Month</div>
                        <div className="text-2xl font-bold">₹5,300</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow">
                        <div className="text-gray-600 mb-1">Savings Potential</div>
                        <div className="text-2xl font-bold text-green-600">₹1,200/mo</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {renderPieChart(categoryData)}
                    <div className="mt-8 bg-white rounded-lg p-4 shadow">
                      <h3 className="font-bold mb-3">Category Insights</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Travel spending is 31% of your budget - consider travel rewards cards</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Grocery spending qualifies for premium cashback cards</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>Dining spending is slightly above average - consider dining rewards</span>
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>

              {/* Recommendations */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Personalized Recommendations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                    <h3 className="font-bold text-blue-800 mb-2">Savings Opportunity</h3>
                    <p className="text-blue-700 mb-3">Switching to a travel rewards card could save you ₹1,200 annually on your current spending patterns.</p>
                    <Link href="/ai-recommendations" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Recommended Cards →
                    </Link>
                  </div>
                  
                  <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                    <h3 className="font-bold text-green-800 mb-2">Spending Pattern</h3>
                    <p className="text-green-700 mb-3">Your spending is well-balanced across categories. Consider a cashback card for maximum flexibility.</p>
                    <Link href="/ai-recommendations" className="text-green-600 hover:text-green-800 font-medium text-sm">
                      Explore Options →
                    </Link>
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