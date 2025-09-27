import React from 'react';

export const ClassicHeader = ({ config }) => {
  return (
    <header className="bg-blue-600 shadow-lg border-b-4 border-blue-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">DP</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide">DESIGNPULLER</h1>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-blue-100 hover:text-white font-medium transition-colors">Home</a>
            <a href="#" className="text-blue-100 hover:text-white font-medium transition-colors">Products</a>
            <a href="#" className="text-blue-100 hover:text-white font-medium transition-colors">Collections</a>
            <a href="#" className="text-blue-100 hover:text-white font-medium transition-colors">Bundles</a>
            <a href="#" className="text-blue-100 hover:text-white font-medium transition-colors">Subscription</a>
            <a href="#" className="text-blue-100 hover:text-white font-medium transition-colors">Freebies</a>
          </nav>

          <div className="flex items-center space-x-6">
            <button className="text-blue-100 hover:text-white transition-colors p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-blue-100 hover:text-white transition-colors p-2 relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l-1.1 5m0 0h9.1" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </button>
            <button className="text-blue-100 hover:text-white font-medium transition-colors">Sign Up</button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};