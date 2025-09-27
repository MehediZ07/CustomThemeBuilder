import React from 'react';

export const SellzzyBundleSection = ({ config, data }) => {
  return (
    <div 
      style={{
        backgroundColor: config.surfaceColor || '#ffffff',
        paddingTop: config.sectionSpacing || '64px',
        paddingBottom: config.sectionSpacing || '64px',
        paddingLeft: config.containerPadding || '24px',
        paddingRight: config.containerPadding || '24px'
      }}
    >
      <div className="mx-auto" style={{ maxWidth: config.maxWidth || '1260px' }}>
        <div className="text-center mb-12">
          <h2 
            className="font-bold mb-4"
            style={{ 
              color: config.textColor || '#0E0E1E', 
              fontFamily: config.displayFont || 'Poppins',
              fontSize: 'clamp(28px, 4vw, 48px)'
            }}
          >
            Bundle
          </h2>
        </div>
        
        {/* Bundle Grid - 2x2 on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.bundles.map((bundle) => (
            <div 
              key={bundle.id}
              className="group relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              style={{
                borderRadius: config.itemCardRadius || config.borderRadius || '16px',
                minHeight: '300px'
              }}
            >
              {/* Background Image */}
              <img 
                src={bundle.image_url} 
                alt={bundle.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Dark Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 
                  className="text-white font-bold mb-3 line-clamp-2"
                  style={{
                    fontFamily: config.displayFont || 'Poppins',
                    fontSize: 'clamp(18px, 3vw, 24px)',
                    lineHeight: '1.3'
                  }}
                >
                  {bundle.title}
                </h3>
                
                <div className="mb-4">
                  <span 
                    className="text-white font-bold text-2xl"
                    style={{ 
                      fontFamily: config.bodyFont || 'Inter'
                    }}
                  >
                    ${bundle.price}
                  </span>
                  {bundle.comparePrice && (
                    <span 
                      className="text-white/70 line-through ml-2 text-lg"
                      style={{ 
                        fontFamily: config.bodyFont || 'Inter'
                      }}
                    >
                      ${bundle.comparePrice}
                    </span>
                  )}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    className="px-4 py-2 font-medium transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      color: '#ffffff',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: config.buttonBorderRadius || '12px',
                      fontFamily: config.bodyFont || 'Inter',
                      fontSize: '14px'
                    }}
                  >
                    View Bundle
                  </button>
                  <button 
                    className="px-4 py-2 font-medium transition-all duration-200 hover:-translate-y-0.5"
                    style={{ 
                      backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#0E0E1E',
                      color: config.buttonPrimaryText || '#ffffff',
                      borderRadius: config.buttonBorderRadius || '12px',
                      fontFamily: config.bodyFont || 'Inter',
                      fontSize: '14px'
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            className="px-8 py-4 font-bold transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            style={{ 
              backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#0E0E1E',
              color: config.buttonPrimaryText || '#ffffff',
              borderRadius: config.buttonBorderRadius || config.borderRadius || '16px',
              fontFamily: config.bodyFont || 'Inter',
              fontSize: '16px'
            }}
          >
            View All Bundles
          </button>
        </div>
      </div>
    </div>
  );
};