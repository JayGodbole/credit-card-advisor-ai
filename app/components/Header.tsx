"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // For demo purposes, we'll check if user is on dashboard to simulate login state
  useEffect(() => {
    setIsLoggedIn(pathname === '/dashboard');
  }, [pathname]);

  // Define navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
  ];

  // Show different buttons based on current page and login state
  const renderAuthButtons = () => {
    if (isLoggedIn) {
      return (
        <button
          onClick={() => {
            // In a real app, you would clear the session
            window.location.href = '/';
          }}
          className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Logout
        </button>
      );
    } else if (pathname === '/signup') {
      return (
        <Link
          href="/signin"
          className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
        >
          Sign In
        </Link>
      );
    } else if (pathname === '/signin') {
      return (
        <Link
          href="/signup"
          className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Sign Up
        </Link>
      );
    } else {
      return (
        <>
          <Link
            href="/signup"
            className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Sign In
          </Link>
        </>
      );
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Credit Card Advisor AI
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                  pathname === link.href
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center">
            {renderAuthButtons()}
          </div>
          
          <div className="flex md:hidden">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}