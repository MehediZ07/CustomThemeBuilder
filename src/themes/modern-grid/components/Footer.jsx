import React from 'react';

const Footer = ({ config }) => {
  return (
    <footer 
      className="mt-20"
      style={{ backgroundColor: config.colors.surface }}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: config.colors.primary }}
            >
              <span 
                className="font-bold text-xl"
                style={{ color: config.colors.text }}
              >
                MG
              </span>
            </div>
            <h2 
              className="text-3xl font-bold"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.headingFont
              }}
            >
              MODERN GRID
            </h2>
          </div>
          <p 
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ 
              color: config.colors.textSecondary,
              fontFamily: config.typography.fontFamily
            }}
          >
            Modern Grid is your destination for contemporary design resources, featuring clean layouts, premium collections, 
            and professional design assets. Build stunning projects with our curated selection of modern design elements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div>
            <h3 
              className="font-bold text-lg mb-6"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.headingFont
              }}
            >
              All Items
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Featured Items
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 
              className="font-bold text-lg mb-6"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.headingFont
              }}
            >
              Bundles
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Premium Bundles
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Design Packs
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Seasonal Offers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 
              className="font-bold text-lg mb-6"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.headingFont
              }}
            >
              Collections
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Modern Layouts
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Grid Systems
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  UI Components
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 
              className="font-bold text-lg mb-6"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.headingFont
              }}
            >
              Subscriptions
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Monthly Plans
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Annual Plans
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Free Trial
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 
              className="font-bold text-lg mb-6"
              style={{ 
                color: config.colors.text,
                fontFamily: config.typography.headingFont
              }}
            >
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Download Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className="border-t pt-12"
          style={{ borderColor: config.colors.border }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0">
              <h4 
                className="font-bold text-lg mb-3"
                style={{ 
                  color: config.colors.text,
                  fontFamily: config.typography.headingFont
                }}
              >
                Stay Updated
              </h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-6 py-4 rounded-l-lg border focus:outline-none w-80"
                  style={{
                    backgroundColor: config.colors.background,
                    color: config.colors.text,
                    borderColor: config.colors.border
                  }}
                />
                <button 
                  className="px-8 py-4 rounded-r-lg font-bold transition-colors shadow-lg hover:opacity-90"
                  style={{
                    backgroundColor: config.colors.primary,
                    color: config.colors.text
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
            
            <div className="flex space-x-8">
              <a 
                href="#" 
                className="transition-colors hover:opacity-80"
                style={{ color: config.colors.textSecondary }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="transition-colors hover:opacity-80"
                style={{ color: config.colors.textSecondary }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="transition-colors hover:opacity-80"
                style={{ color: config.colors.textSecondary }}
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div 
            className="text-center border-t pt-8"
            style={{ borderColor: config.colors.border }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
                <a 
                  href="#" 
                  className="font-medium transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Privacy Policy
                </a>
                <a 
                  href="#" 
                  className="font-medium transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Terms of Service
                </a>
                <a 
                  href="#" 
                  className="font-medium transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Returns & Exchanges
                </a>
                <a 
                  href="#" 
                  className="font-medium transition-colors hover:opacity-80"
                  style={{ color: config.colors.textSecondary }}
                >
                  Agreement
                </a>
              </div>
              <p 
                className="font-medium"
                style={{ color: config.colors.textSecondary }}
              >
                © 2024 Modern Grid, all rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;