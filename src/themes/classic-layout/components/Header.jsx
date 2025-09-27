import React, { useState } from 'react';

export const SellzzyHeader = ({ config }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto px-6" style={{ maxWidth: config.maxWidth || '1260px' }}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/public/assets/logo.svg" 
              alt="Designpuller"
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#0E0E1E',
                fontFamily: config.bodyFont || 'Inter'
              }}
            >
              Home
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#0E0E1E',
                fontFamily: config.bodyFont || 'Inter'
              }}
            >
              Products
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#0E0E1E',
                fontFamily: config.bodyFont || 'Inter'
              }}
            >
              Collections
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#0E0E1E',
                fontFamily: config.bodyFont || 'Inter'
              }}
            >
              Bundles
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#0E0E1E',
                fontFamily: config.bodyFont || 'Inter'
              }}
            >
              Subscription
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#0E0E1E',
                fontFamily: config.bodyFont || 'Inter'
              }}
            >
              Freebie
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Box */}
            <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2">
              <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none outline-none text-sm w-32"
                style={{ fontFamily: config.bodyFont || 'Inter' }}
              />
            </div>

            {/* Mobile Search Icon */}
            <button className="md:hidden p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Sign Up Button */}
            <button 
              className="hidden sm:block px-4 py-2 font-medium rounded-full border-2 transition-colors"
              style={{
                borderColor: config.buttonPrimaryBg || config.primaryColor || '#0E0E1E',
                color: config.buttonPrimaryBg || config.primaryColor || '#0E0E1E',
                fontFamily: config.bodyFont || 'Inter'
              }}
            >
              Sign Up
            </button>

            {/* Login Button */}
            <button 
              className="px-4 py-2 font-medium rounded-full transition-colors"
              style={{
                backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#0E0E1E',
                color: config.buttonPrimaryText || '#ffffff',
                fontFamily: config.bodyFont || 'Inter'
              }}
            >
              Login
            </button>

            {/* Cart Icon */}
            <button className="p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l-1.1 5m0 0h9.1" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="font-medium" style={{ color: config.textColor || '#0E0E1E' }}>Home</a>
              <a href="#" className="font-medium" style={{ color: config.textColor || '#0E0E1E' }}>Products</a>
              <a href="#" className="font-medium" style={{ color: config.textColor || '#0E0E1E' }}>Collections</a>
              <a href="#" className="font-medium" style={{ color: config.textColor || '#0E0E1E' }}>Bundles</a>
              <a href="#" className="font-medium" style={{ color: config.textColor || '#0E0E1E' }}>Subscription</a>
              <a href="#" className="font-medium" style={{ color: config.textColor || '#0E0E1E' }}>Freebie</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};