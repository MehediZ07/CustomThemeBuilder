import React from 'react';

const Hero = ({ config }) => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url(https://daujxgrs0jsvx.cloudfront.net/media/Background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4))'
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className="text-6xl md:text-8xl font-bold mb-6"
          style={{ color: config.colors.text }}
        >
          #1 DESIGN LIBRARY
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-8"
          style={{ color: config.colors.textSecondary }}
        >
          Perfect for POD, Craft & More
        </p>
        
        <button 
          className="px-8 py-4 text-lg font-bold rounded-lg text-white transition-transform hover:scale-105"
          style={{ 
            background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`
          }}
        >
          Pull. Create. Sell.
        </button>
      </div>
    </section>
  );
};

export default Hero;