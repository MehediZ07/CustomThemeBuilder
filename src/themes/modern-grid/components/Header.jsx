import React from 'react';

const Header = ({ config }) => {
  return (
    <header 
      className="shadow-lg"
      style={{ backgroundColor: config.colors.primary }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: config.colors.surface }}
              >
                <span 
                  className="font-bold text-lg"
                  style={{ color: config.colors.primary }}
                >
                  MG
                </span>
              </div>
              <h1 
                className="text-2xl font-bold tracking-wide"
                style={{ 
                  color: config.colors.text,
                  fontFamily: config.typography.headingFont
                }}
              >
                MODERN GRID
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a 
              href="#" 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: config.colors.textSecondary }}
            >
              Home
            </a>
            <a 
              href="#" 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: config.colors.textSecondary }}
            >
              Products
            </a>
            <a 
              href="#" 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: config.colors.textSecondary }}
            >
              Collections
            </a>
            <a 
              href="#" 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: config.colors.textSecondary }}
            >
              Bundles
            </a>
            <a 
              href="#" 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: config.colors.textSecondary }}
            >
              Subscription
            </a>
          </nav>

          <div className="flex items-center space-x-6">
            <button 
              className="transition-colors p-2 hover:opacity-80"
              style={{ color: config.colors.textSecondary }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              className="transition-colors p-2 relative hover:opacity-80"
              style={{ color: config.colors.textSecondary }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l-1.1 5m0 0h9.1" />
              </svg>
              <span 
                className="absolute -top-1 -right-1 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                style={{ backgroundColor: config.colors.accent }}
              >
                0
              </span>
            </button>
            <button 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: config.colors.textSecondary }}
            >
              Sign Up
            </button>
            <button 
              className="px-6 py-3 rounded-lg font-semibold transition-colors shadow-md hover:opacity-90"
              style={{ 
                backgroundColor: config.colors.surface,
                color: config.colors.primary
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