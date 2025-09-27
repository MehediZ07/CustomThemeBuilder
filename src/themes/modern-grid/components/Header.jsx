import React from 'react';

export const ModernHeader = ({ config }) => {
  return (
    <header className="bg-gray-900 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DP</span>
              </div>
              <h1 className="text-xl font-bold text-white">DESIGNPULLER</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-200 hover:text-white transition-colors font-medium">Home</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors font-medium">Products</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors font-medium">Collections</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors font-medium">Bundles</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors font-medium">Subscription</a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors font-medium">Freebies</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-200 hover:text-white transition-colors p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-200 hover:text-white transition-colors p-2 relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l-1.1 5m0 0h9.1" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
            </button>
            <button className="text-gray-200 hover:text-white transition-colors text-sm font-medium">Sign Up</button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};