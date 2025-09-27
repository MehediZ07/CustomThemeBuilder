import React from 'react';

export const VibrantHeroSection = ({ config, data }) => {
  // Create a vibrant collage-style background with multiple design elements
  const collageElements = [
    { id: 1, image: 'https://cdn.shopify.com/s/files/1/0617/2596/6487/products/StPatrick_sDaySublimationBundle_39e7f9f7-31a3-408b-bbb3-2e3fe6d93595.jpg?v=1685297154', top: '10%', left: '5%', rotation: '-12deg', size: '120px' },
    { id: 2, image: 'https://cdn.shopify.com/s/files/1/0617/2596/6487/products/01CatSublimationBundle2_67b6f90c-3fcd-4f6f-bd67-1f38d358f344.jpg?v=1685297414', top: '15%', right: '8%', rotation: '8deg', size: '100px' },
    { id: 3, image: 'https://cdn.shopify.com/s/files/1/0617/2596/6487/products/ReligiouspngSublimationBundles_134654cc-6c4e-4784-84df-9323e2358684.png?v=1685297459', bottom: '20%', left: '3%', rotation: '15deg', size: '110px' },
    { id: 4, image: 'https://cdn.shopify.com/s/files/1/0617/2596/6487/products/ValentineDayPNGSublimationBundle_9_b5c74f59-44c6-4411-aa86-1d3591718569.png?v=1687435577', bottom: '15%', right: '5%', rotation: '-8deg', size: '130px' },
    { id: 5, image: 'https://daujxgrs0jsvx.cloudfront.net/media/Background.png', top: '25%', left: '15%', rotation: '5deg', size: '90px' },
    { id: 6, image: 'https://daujxgrs0jsvx.cloudfront.net/media/Clipart Design.png', top: '35%', right: '20%', rotation: '-15deg', size: '95px' }
  ];

  return (
    <div 
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        paddingTop: config.sectionSpacing || '48px',
        paddingBottom: config.sectionSpacing || '48px',
        paddingLeft: config.containerPadding || '16px',
        paddingRight: config.containerPadding || '16px',
        minHeight: '400px'
      }}
    >
      {/* Animated Background Elements */}
      {collageElements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-20 hover:opacity-30 transition-opacity duration-500"
          style={{
            top: element.top,
            bottom: element.bottom,
            left: element.left,
            right: element.right,
            transform: `rotate(${element.rotation})`,
            width: element.size,
            height: element.size
          }}
        >
          <img 
            src={element.image} 
            alt=""
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}

      {/* Overlay for better text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: `rgba(0,0,0,${config.heroOverlayOpacity || 0.3})`
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 
          className="font-bold mb-6 text-white leading-tight"
          style={{ 
            fontFamily: config.fontFamily || 'Inter',
            fontSize: `calc(${config.baseFontSize || '16px'} * 3)`,
            lineHeight: config.lineHeight || '1.2',
            fontWeight: '800',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          {config.heroTitle || 'UNLIMITED CREATIVITY AT YOUR FINGERTIPS!'}
        </h1>
        
        {config.heroSubtitle && (
          <p 
            className="text-white mb-8 opacity-95"
            style={{
              fontFamily: config.fontFamily || 'Inter',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.25)`,
              lineHeight: config.lineHeight || '1.5',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            {config.heroSubtitle}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#8b5cf6',
              color: config.buttonPrimaryText || '#ffffff',
              borderRadius: config.buttonBorderRadius || config.borderRadius || '12px',
              fontFamily: config.fontFamily || 'Inter',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`,
              padding: config.buttonSize === 'small' ? '10px 20px' : config.buttonSize === 'large' ? '16px 32px' : '12px 24px'
            }}
          >
            Explore Designs
          </button>
          
          <button 
            className="font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: '#ffffff',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: config.buttonBorderRadius || config.borderRadius || '12px',
              fontFamily: config.fontFamily || 'Inter',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`,
              padding: config.buttonSize === 'small' ? '8px 18px' : config.buttonSize === 'large' ? '14px 30px' : '10px 22px',
              backdropFilter: 'blur(10px)'
            }}
          >
            Watch Demo
          </button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-20 right-16 w-3 h-3 bg-pink-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-16 left-20 w-5 h-5 bg-blue-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  );
};