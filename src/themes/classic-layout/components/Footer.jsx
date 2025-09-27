import React from 'react';

export const SellzzyFooter = ({ config }) => {
  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1 relative"
          style={{ backgroundColor: config.primaryColor || '#0E0E1E' }}
        >
          <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {/* Unread Dot */}
          <div 
            className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
            style={{ backgroundColor: '#ef4444' }}
          />
        </button>
      </div>

      {/* Footer */}
      <footer 
        className="border-t"
        style={{ 
          borderColor: config.borderColor || '#e5e7eb',
          backgroundColor: config.surfaceColor || '#ffffff'
        }}
      >
        <div 
          className="mx-auto px-6 py-12"
          style={{ maxWidth: config.maxWidth || '1260px' }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="col-span-2 md:col-span-2">
              <img 
                src="/public/assets/logo.svg" 
                alt="Designpuller"
                className="h-8 w-auto mb-4"
              />
              <p 
                className="text-sm leading-relaxed"
                style={{
                  color: config.textSecondary || '#6b7280',
                  fontFamily: config.bodyFont || 'Inter',
                  lineHeight: config.lineHeight || '1.6'
                }}
              >
                Designpuller.com is home to the latest, quality premium bundles, SVG, Sublimations, Epics, Crafts and many other design resources.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 col-span-2 md:col-span-4 gap-8">
              <div>
                <h3 
                  className="font-semibold mb-4"
                  style={{ 
                    color: config.textColor || '#0E0E1E',
                    fontFamily: config.bodyFont || 'Inter'
                  }}
                >
                  Products
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>All Items</a></li>
                  <li><a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>New Arrivals</a></li>
                  <li><a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>Best Sellers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 
                  className="font-semibold mb-4"
                  style={{ 
                    color: config.textColor || '#0E0E1E',
                    fontFamily: config.bodyFont || 'Inter'
                  }}
                >
                  Categories
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>Bundles</a></li>
                  <li><a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>Collections</a></li>
                  <li><a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>Subscriptions</a></li>
                </ul>
              </div>
              
              <div>
                <h3 
                  className="font-semibold mb-4"
                  style={{ 
                    color: config.textColor || '#0E0E1E',
                    fontFamily: config.bodyFont || 'Inter'
                  }}
                >
                  Resources
                </h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>Freebie</a></li>
                  <li><a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>Help Center</a></li>
                  <li><a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 
                  className="font-semibold mb-4"
                  style={{ 
                    color: config.textColor || '#0E0E1E',
                    fontFamily: config.bodyFont || 'Inter'
                  }}
                >
                  Newsletter
                </h3>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 px-3 py-2 text-sm border rounded-l-full focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{ 
                      borderColor: config.borderColor || '#e5e7eb',
                      focusRingColor: config.primaryColor || '#0E0E1E'
                    }}
                  />
                  <button 
                    className="px-4 py-2 text-sm font-medium rounded-r-full transition-colors"
                    style={{
                      backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#0E0E1E',
                      color: config.buttonPrimaryText || '#ffffff'
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div 
            className="pt-8 border-t flex flex-col md:flex-row justify-between items-center"
            style={{ borderColor: config.borderColor || '#e5e7eb' }}
          >
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0 text-sm">
              <a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>Privacy Policy</a>
              <a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>Terms of Service</a>
              <a href="#" className="hover:underline" style={{ color: config.textSecondary || '#6b7280' }}>Returns & Exchanges</a>
            </div>

            {/* Social Icons and Copyright */}
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: config.textSecondary || '#6b7280' }}>
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: config.textSecondary || '#6b7280' }}>
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-75 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: config.textSecondary || '#6b7280' }}>
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017.001z"/>
                  </svg>
                </a>
              </div>
              
              <p 
                className="text-sm"
                style={{ 
                  color: config.textSecondary || '#6b7280',
                  fontFamily: config.bodyFont || 'Inter'
                }}
              >
                © 2024 Designpuller, all rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};