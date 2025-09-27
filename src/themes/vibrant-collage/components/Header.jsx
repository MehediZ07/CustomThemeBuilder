import React from 'react';

export const VibrantHeader = ({ config }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-white text-sm"
                style={{ backgroundColor: config.primaryColor || '#8b5cf6' }}
              >
                DP
              </div>
              <h1 
                className="text-xl font-bold"
                style={{ 
                  color: config.textColor || '#1f2937',
                  fontFamily: config.fontFamily || 'Inter'
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
                color: config.textColor || '#1f2937',
                fontFamily: config.fontFamily || 'Inter'
              }}
            >
              Home
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#1f2937',
                fontFamily: config.fontFamily || 'Inter'
              }}
            >
              Products
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#1f2937',
                fontFamily: config.fontFamily || 'Inter'
              }}
            >
              Collections
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#1f2937',
                fontFamily: config.fontFamily || 'Inter'
              }}
            >
              Bundles
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#1f2937',
                fontFamily: config.fontFamily || 'Inter'
              }}
            >
              Subscription
            </a>
            <a 
              href="#" 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#1f2937',
                fontFamily: config.fontFamily || 'Inter'
              }}
            >
              Freebies
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              className="p-2 hover:opacity-75 transition-opacity"
              style={{ color: config.textColor || '#1f2937' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              className="p-2 hover:opacity-75 transition-opacity relative"
              style={{ color: config.textColor || '#1f2937' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l-1.1 5m0 0h9.1" />
              </svg>
            </button>
            <button 
              className="font-medium hover:opacity-75 transition-opacity"
              style={{ 
                color: config.textColor || '#1f2937',
                fontFamily: config.fontFamily || 'Inter'
              }}
            >
              Sign Up
            </button>
            <button 
              className="px-4 py-2 font-medium transition-colors"
              style={{
                backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#8b5cf6',
                color: config.buttonPrimaryText || '#ffffff',
                borderRadius: config.buttonBorderRadius || config.borderRadius || '12px',
                fontFamily: config.fontFamily || 'Inter'
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