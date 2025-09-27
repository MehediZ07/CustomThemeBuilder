import React from 'react';

export const VibrantFooter = ({ config }) => {
  return (
    <footer 
      className="mt-16 text-white relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
              style={{ backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}
            >
              DP
            </div>
            <h2 
              className="text-3xl font-bold"
              style={{ 
                fontFamily: config.fontFamily || 'Inter',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              DESIGNPULLER
            </h2>
          </div>
          <p 
            className="text-lg max-w-2xl mx-auto leading-relaxed opacity-90"
            style={{
              fontFamily: config.fontFamily || 'Inter',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Designpuller.com is home to the latest, quality premium bundles, SVG, Sublimations, Epics, Crafts and many other design 
            resources, including Premium New Items, Best Sellers, and Featured resources with our lifetime download guarantee and unlimited 
            support - we are sure you will love shopping with us.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 
              className="font-semibold mb-4 text-white"
              style={{ fontFamily: config.fontFamily || 'Inter' }}
            >
              All Items
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Featured</a></li>
            </ul>
          </div>
          <div>
            <h3 
              className="font-semibold mb-4 text-white"
              style={{ fontFamily: config.fontFamily || 'Inter' }}
            >
              Bundles
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Premium Bundles</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Design Packs</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Seasonal</a></li>
            </ul>
          </div>
          <div>
            <h3 
              className="font-semibold mb-4 text-white"
              style={{ fontFamily: config.fontFamily || 'Inter' }}
            >
              Collections
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">SVG Files</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sublimation</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Crafts</a></li>
            </ul>
          </div>
          <div>
            <h3 
              className="font-semibold mb-4 text-white"
              style={{ fontFamily: config.fontFamily || 'Inter' }}
            >
              Subscriptions
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Monthly Plans</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Annual Plans</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Free Trial</a></li>
            </ul>
          </div>
          <div>
            <h3 
              className="font-semibold mb-4 text-white"
              style={{ fontFamily: config.fontFamily || 'Inter' }}
            >
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Downloads</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h4 
                className="text-white font-semibold mb-3"
                style={{ fontFamily: config.fontFamily || 'Inter' }}
              >
                Stay Creative
              </h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="px-4 py-3 rounded-l-lg bg-white/20 text-white border border-white/30 focus:border-white focus:outline-none w-64 placeholder-white/70 backdrop-blur-sm"
                />
                <button 
                  className="px-6 py-3 bg-white text-purple-600 rounded-r-lg font-medium hover:bg-white/90 transition-colors"
                  style={{ fontFamily: config.fontFamily || 'Inter' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
                <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Returns & Exchanges</a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">Agreement</a>
              </div>
              <p className="text-white/80">© 2024 Designpuller, all rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};