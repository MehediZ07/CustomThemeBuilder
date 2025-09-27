import React from 'react';

export const ClassicHeroSection = ({ config, data }) => {
  return (
    <div 
      className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,${config.heroOverlayOpacity || 0.5}), rgba(0,0,0,${config.heroOverlayOpacity || 0.5})), url("${config.heroImage}")`,
        backgroundColor: config.heroOverlay || '#1e293b',
        paddingTop: `calc(${config.sectionSpacing || '56px'} * 1.5)`,
        paddingBottom: `calc(${config.sectionSpacing || '56px'} * 1.5)`,
        paddingLeft: config.containerPadding || '20px',
        paddingRight: config.containerPadding || '20px',
        minHeight: '400px'
      }}
    >
      <div className="text-center max-w-4xl">
        <h1 
          className="font-bold text-white mb-8 leading-tight"
          style={{ 
            fontFamily: config.fontFamily || 'Georgia',
            fontSize: `calc(${config.baseFontSize || '16px'} * 3)`,
            lineHeight: config.lineHeight || '1.6',
            fontWeight: config.fontWeight || '700'
          }}
        >
          {config.heroTitle || 'Premium Collections'}
        </h1>
        <p 
          className="text-white mb-8 opacity-90"
          style={{
            fontFamily: config.fontFamily || 'Georgia',
            fontSize: `calc(${config.baseFontSize || '16px'} * 1.25)`,
            lineHeight: config.lineHeight || '1.6'
          }}
        >
          {config.heroSubtitle || 'Discover premium design resources for your creative projects'}
        </p>
        <button 
          className="font-bold transition-colors"
          style={{
            backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#2563eb',
            color: config.buttonPrimaryText || '#ffffff',
            borderRadius: config.buttonBorderRadius || config.borderRadius || '4px',
            fontFamily: config.fontFamily || 'Georgia',
            fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`,
            padding: config.buttonSize === 'small' ? '12px 24px' : config.buttonSize === 'large' ? '20px 40px' : '16px 32px'
          }}
        >
          Explore Collection
        </button>
      </div>
    </div>
  );
};