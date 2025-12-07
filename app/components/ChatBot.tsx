"use client";

import { useState, useRef, useEffect } from 'react';

export default function ChatBot() {
  const [messages, setMessages] = useState<{role: string; content: string}[]>([
    { role: 'assistant', content: 'Hello! I\'m your Credit Card Advisor AI. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call the AI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Add AI response
        const aiMessage = { role: 'assistant', content: data.response };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        // Add error message
        const errorMessage = { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' };
        setMessages(prev => [...prev, errorMessage]);
      }
    } catch (error) {
      // Add error message
      const errorMessage = { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to detect if response contains chart data
  const extractChartData = (content: string) => {
    const chartRegex = /CHART_DATA_START:(.*?)CHART_DATA_END/;
    const match = content.match(chartRegex);
    if (match) {
      try {
        const chartData = JSON.parse(match[1]);
        const cleanContent = content.replace(chartRegex, '').trim();
        return { chartData, cleanContent };
      } catch (e) {
        return { chartData: null, cleanContent: content };
      }
    }
    return { chartData: null, cleanContent: content };
  };

  // Simple bar chart component
  const BarChart = ({ data }: { data: { labels: string[]; values: number[] } }) => {
    const maxValue = Math.max(...data.values);
    
    return (
      <div className="my-4 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-end justify-between h-40 gap-2">
          {data.labels.map((label, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="text-xs text-gray-600 mb-1">{data.values[index]}</div>
              <div 
                className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-all"
                style={{ height: `${(data.values[index] / maxValue) * 100}%` }}
              ></div>
              <div className="text-xs text-gray-600 mt-1 text-center">{label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Simple pie chart component
  const PieChart = ({ data }: { data: { labels: string[]; values: number[] } }) => {
    const total = data.values.reduce((sum, value) => sum + value, 0);
    let startAngle = 0;
    
    return (
      <div className="my-4 flex flex-col items-center">
        <div className="relative w-40 h-40 rounded-full">
          {data.labels.map((label, index) => {
            const percentage = (data.values[index] / total) * 100;
            const angle = (percentage / 100) * 360;
            const gradientId = `gradient-${index}`;
            
            // Inline styles for SVG segments
            const segmentStyle = {
              clipPath: `path('M 80,80 L ${80 + 80 * Math.cos((startAngle * Math.PI) / 180)},${80 + 80 * Math.sin((startAngle * Math.PI) / 180)} A 80,80 0 ${angle > 180 ? 1 : 0},1 ${80 + 80 * Math.cos(((startAngle + angle) * Math.PI) / 180)},${80 + 80 * Math.sin(((startAngle + angle) * Math.PI) / 180)} Z')`,
              backgroundColor: `hsl(${(index * 60) % 360}, 70%, 50%)`
            };
            
            startAngle += angle;
            
            return (
              <div 
                key={index}
                className="absolute inset-0 rounded-full"
                style={segmentStyle}
              ></div>
            );
          })}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {data.labels.map((label, index) => (
            <div key={index} className="flex items-center">
              <div 
                className="w-4 h-4 rounded mr-2"
                style={{ backgroundColor: `hsl(${(index * 60) % 360}, 70%, 50%)` }}
              ></div>
              <span className="text-sm">{label}: {data.values[index]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Function to render chart based on type
  const renderChart = (chartData: any) => {
    if (!chartData) return null;
    
    switch (chartData.type) {
      case 'bar':
        return <BarChart data={chartData.data} />;
      case 'pie':
        return <PieChart data={chartData.data} />;
      default:
        return null;
    }
  };

  // Function to format the AI response with better spacing and structure
  const formatResponse = (content: string) => {
    const { chartData, cleanContent } = extractChartData(content);
    
    // Split content into paragraphs
    const paragraphs = cleanContent.split('\n\n');
    
    return (
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-3 last:mb-0">
            {paragraph}
          </p>
        ))}
        {renderChart(chartData)}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[500px] border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
        <h3 className="font-bold text-lg">Credit Card Advisor AI</h3>
        <p className="text-blue-100 text-sm">Ask me anything about credit cards and financial advice</p>
        <p className="text-blue-200 text-xs mt-1">Note: AI provides general guidance. Ask specific questions like "Best card for dining" for card names.</p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div 
              className={`inline-block p-3 rounded-lg max-w-[80%] ${
                message.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-gray-100 text-gray-800 rounded-bl-none'
              }`}
            >
              {message.role === 'assistant' ? formatResponse(message.content) : message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-4">
            <div className="inline-block p-3 rounded-lg bg-gray-100 text-gray-800 rounded-bl-none">
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                Thinking...
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-white">
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about credit cards, rewards, or financial advice..."
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-lg font-medium transition-colors disabled:opacity-50"
            disabled={isLoading || !inputValue.trim()}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}