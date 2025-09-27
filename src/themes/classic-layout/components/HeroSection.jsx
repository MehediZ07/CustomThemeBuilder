import React from 'react';

export const SellzzyHeroSection = ({ config, data }) => {
  return (
    <div 
      className="relative flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,${config.heroOverlayOpacity || 0.4}), rgba(0,0,0,${config.heroOverlayOpacity || 0.4})), url("${config.heroImage}")`,
        backgroundColor: config.heroOverlay || '#f8fafc',
        paddingTop: '120px',
        paddingBottom: '120px',
        paddingLeft: config.containerPadding || '24px',
        paddingRight: config.containerPadding || '24px',
        minHeight: '80vh'
      }}
    >
      {/* Soft Overlay Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: config.heroOverlay || 'linear-gradient(90deg, rgba(247,215,208,0.3) 0%, rgba(230,199,255,0.3) 100%)',
          opacity: config.heroOverlayOpacity || 0.8
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 text-center mx-auto px-6" style={{ maxWidth: config.maxWidth || '1260px' }}>
        <h1 
          className="font-black leading-tight mb-8"
          style={{ 
            fontFamily: config.displayFont || 'Poppins',
            fontSize: 'clamp(32px, 6vw, 80px)',
            color: config.textColor || '#0E0E1E',
            letterSpacing: '-0.02em',
            textShadow: '0 4px 8px rgba(0,0,0,0.1)',
            fontWeight: '900'
          }}
        >
          {config.heroTitle || 'UNLIMITED CREATIVITY AT YOUR FINGERTIPS!'}
        </h1>
        
        {config.heroSubtitle && (
          <p 
            className="mb-12 max-w-3xl mx-auto"
            style={{
              fontFamily: config.bodyFont || 'Inter',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              color: config.textColor || '#0E0E1E',
              lineHeight: config.lineHeight || '1.6',
              opacity: 0.85,
              fontWeight: '400'
            }}
          >
            {config.heroSubtitle}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            className="px-10 py-5 font-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transform"
            style={{
              backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#0E0E1E',
              color: config.buttonPrimaryText || '#ffffff',
              borderRadius: config.buttonBorderRadius || config.borderRadius || '16px',
              fontFamily: config.bodyFont || 'Inter',
              fontSize: '18px',
              minWidth: '200px'
            }}
          >
            Explore Designs
          </button>
          
          <button 
            className="px-10 py-5 font-bold border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl transform"
            style={{
              backgroundColor: config.buttonSecondaryBg || 'rgba(255,255,255,0.9)',
              color: config.buttonSecondaryText || config.primaryColor || '#0E0E1E',
              borderColor: config.buttonSecondaryText || config.primaryColor || '#0E0E1E',
              borderRadius: config.buttonBorderRadius || config.borderRadius || '16px',
              fontFamily: config.bodyFont || 'Inter',
              fontSize: '18px',
              minWidth: '200px'
            }}
          >
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};