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

  // Function to format the AI response with better spacing and structure
  const formatResponse = (content: string) => {
    // Split content into paragraphs
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-3 last:mb-0">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="flex flex-col h-[500px] border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
        <h3 className="font-bold text-lg">Credit Card Advisor AI</h3>
        <p className="text-blue-100 text-sm">Ask me anything about credit cards and financial advice</p>
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