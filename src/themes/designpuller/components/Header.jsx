import React from 'react';

const Header = ({ config }) => {
  return (
    <header 
      className="sticky top-0 z-50 py-4"
      style={{ backgroundColor: config.colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span 
            className="text-2xl font-bold"
            style={{ color: config.colors.text }}
          >
            DESIGNPULLER
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Collections', 'Exclusive Bundles', 'VIP Access', 'Toy Deal'].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:opacity-80 transition-opacity"
              style={{ color: config.colors.text }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button 
            className="p-2 hover:opacity-80 transition-opacity"
            style={{ color: config.colors.text }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Member Area Button */}
          <button 
            className="hidden md:block px-6 py-2 rounded-lg font-medium text-white transition-transform hover:scale-105"
            style={{ 
              background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`
            }}
          >
            Member Area
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:opacity-80 transition-opacity"
            style={{ color: config.colors.text }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;