import React from 'react';

export const ModernHeroSection = ({ config, data }) => {
  return (
    <div 
      className="relative flex items-center justify-center border-b overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,${config.heroOverlayOpacity || 0.4}), rgba(0,0,0,${config.heroOverlayOpacity || 0.4})), url("${config.heroImage}")`,
        backgroundColor: config.heroOverlay || '#000000',
        paddingTop: config.sectionSpacing || '48px',
        paddingBottom: config.sectionSpacing || '48px',
        paddingLeft: config.containerPadding || '16px',
        paddingRight: config.containerPadding || '16px',
        minHeight: '300px'
      }}
    >
      <div className="z-10 flex flex-col items-center justify-center h-full w-full text-center max-w-4xl">
        <h1 
          className="font-semibold mb-6 leading-tight text-white"
          style={{ 
            fontFamily: config.fontFamily || 'Inter',
            fontSize: `calc(${config.baseFontSize || '16px'} * 2.5)`,
            lineHeight: config.lineHeight || '1.5',
            fontWeight: config.fontWeight || '600'
          }}
        >
          {config.heroTitle || 'Welcome to Our Store'}
        </h1>
        {config.heroSubtitle && (
          <p 
            className="text-white mb-8 opacity-90"
            style={{
              fontFamily: config.fontFamily || 'Inter',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.25)`,
              lineHeight: config.lineHeight || '1.5'
            }}
          >
            {config.heroSubtitle}
          </p>
        )}
        <button 
          className="font-semibold transition-colors"
          style={{
            backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#3b82f6',
            color: config.buttonPrimaryText || '#ffffff',
            borderRadius: config.buttonBorderRadius || config.borderRadius || '8px',
            fontFamily: config.fontFamily || 'Inter',
            fontSize: config.baseFontSize || '16px',
            padding: config.buttonSize === 'small' ? '8px 16px' : config.buttonSize === 'large' ? '16px 32px' : '12px 24px'
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};