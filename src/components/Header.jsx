import React from 'react';

const Header = ({ theme = 'modern' }) => {
  const getHeaderStyle = () => {
    switch (theme) {
      case 'classic':
        return {
          backgroundColor: '#2563eb',
          borderBottom: '3px solid #1d4ed8'
        };
      default:
        return {
          backgroundColor: '#1f2937',
          borderBottom: '2px solid #374151'
        };
    }
  };

  return (
    <header className="bg-white shadow-sm" style={getHeaderStyle()}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-white">DESIGNPULLER</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">Products</a>
            <a href="#" className="text-white hover:text-gray-300">Collections</a>
            <a href="#" className="text-white hover:text-gray-300">Bundles</a>
            <a href="#" className="text-white hover:text-gray-300">Subscription</a>
            <a href="#" className="text-white hover:text-gray-300">Freebies</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-white hover:text-gray-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l-1.1 5m0 0h9.1" />
              </svg>
            </button>
            <button className="text-white hover:text-gray-300 text-sm">Sign Up</button>
            <button className="bg-white text-gray-900 px-4 py-2 rounded text-sm font-medium">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;