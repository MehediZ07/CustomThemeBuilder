import React from 'react';

const Header = ({ config }) => {
  return (
    <header 
      className="shadow-sm border-b"
      style={{ 
        backgroundColor: config.colors.background,
        borderColor: config.colors.border
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                style={{ backgroundColor: config.colors.primary }}
              >
                DP
              </div>
              <h1 
                className="text-xl font-bold"
                style={{ 
                  color: config.colors.text,
                  fontFamily: config.typography.fontFamily
                }}
              >
                DESIGNPULLER
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.fontFamily
              }}
            >
              Home
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.fontFamily
              }}
            >
              Products
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.fontFamily
              }}
            >
              Collections
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.fontFamily
              }}
            >
              Bundles
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.fontFamily
              }}
            >
              Subscription
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.fontFamily
              }}
            >
              Freebies
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              className="p-2 hover:opacity-75 transition-opacity"
              style={{ color: config.colors.text }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              className="p-2 hover:opacity-75 transition-opacity relative"
              style={{ color: config.colors.text }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l-1.1 5m0 0h9.1" />
              </svg>
            </button>
            <button 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.fontFamily
              }}
            >
              Sign Up
            </button>
            <button 
              className="px-4 py-2 font-medium transition-colors"
              style={{
                backgroundColor: config.colors.primary,
                color: config.colors.text === '#FFFFFF' ? '#000000' : '#FFFFFF',
                borderRadius: '12px',
                fontFamily: config.typography.fontFamily
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;