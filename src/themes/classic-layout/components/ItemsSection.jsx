import React from 'react';

export const SellzzyItemsSection = ({ config, data }) => {
  const getGridCols = () => {
    const cols = config.itemsPerRow || '4';
    return {
      '2': 'grid-cols-2',
      '3': 'grid-cols-2 md:grid-cols-3',
      '4': 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
      '5': 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
      '6': 'grid-cols-3 md:grid-cols-4 lg:grid-cols-6'
    }[cols] || 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  };

  return (
    <div 
      style={{ 
        backgroundColor: config.itemsBackground || '#ffffff',
        paddingTop: config.sectionSpacing || '64px',
        paddingBottom: config.sectionSpacing || '64px',
        paddingLeft: config.containerPadding || '24px',
        paddingRight: config.containerPadding || '24px'
      }}
    >
      <div className="mx-auto" style={{ maxWidth: config.maxWidth || '1260px' }}>
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 
            className="font-bold"
            style={{ 
              color: config.textColor || '#0E0E1E', 
              fontFamily: config.displayFont || 'Poppins',
              fontSize: 'clamp(28px, 4vw, 48px)'
            }}
          >
            All Items
          </h2>
          <a 
            href="#" 
            className="font-medium hover:underline"
            style={{ 
              color: config.primaryColor || '#0E0E1E',
              fontFamily: config.bodyFont || 'Inter',
              fontSize: config.baseFontSize || '16px'
            }}
          >
            View All
          </a>
        </div>
        
        {/* Products Grid */}
        <div className={`grid ${getGridCols()}`} style={{ gap: config.cardSpacing || '24px' }}>
          {data.items.map((item) => (
            <div 
              key={item.id}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-offset-2"
              style={{
                borderRadius: config.itemCardRadius || config.borderRadius || '16px',
                focusRingColor: config.primaryColor || '#0E0E1E'
              }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={item.image_url} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Badge */}
                {item.comparePrice && (
                  <div 
                    className="absolute top-3 right-3 px-2 py-1 text-xs font-semibold text-white rounded-full"
                    style={{ backgroundColor: config.primaryColor || '#0E0E1E' }}
                  >
                    50%
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div style={{ padding: config.containerPadding || '24px' }}>
                <h3 
                  className="font-semibold mb-2 line-clamp-2"
                  style={{
                    color: config.textColor || '#0E0E1E',
                    fontFamily: config.bodyFont || 'Inter',
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}
                >
                  {item.title}
                </h3>
                
                <div className="mb-1">
                  <span 
                    className="font-bold" 
                    style={{ 
                      color: config.textColor || '#0E0E1E',
                      fontFamily: config.bodyFont || 'Inter',
                      fontSize: '16px'
                    }}
                  >
                    Price ${item.price}
                  </span>
                  {item.comparePrice && (
                    <span 
                      className="text-sm line-through ml-2"
                      style={{ 
                        color: config.textSecondary || '#6b7280',
                        fontFamily: config.bodyFont || 'Inter'
                      }}
                    >
                      ${item.comparePrice}
                    </span>
                  )}
                </div>
                
                <div 
                  className="text-xs mb-4"
                  style={{ 
                    color: config.textSecondary || '#6b7280',
                    fontFamily: config.bodyFont || 'Inter'
                  }}
                >
                  By Designpuller
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col space-y-2">
                  <button 
                    className="w-full py-2 px-4 font-medium transition-all duration-200 hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#0E0E1E',
                      color: config.buttonPrimaryText || '#ffffff',
                      borderRadius: config.buttonBorderRadius || '12px',
                      fontFamily: config.bodyFont || 'Inter',
                      fontSize: '14px',
                      focusRingColor: config.primaryColor || '#0E0E1E'
                    }}
                  >
                    Add To Cart
                  </button>
                  <button 
                    className="w-full py-2 px-4 font-medium border transition-all duration-200 hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2"
                    style={{
                      backgroundColor: config.buttonSecondaryBg || 'transparent',
                      color: config.buttonSecondaryText || config.primaryColor || '#0E0E1E',
                      borderColor: config.primaryColor || '#0E0E1E',
                      borderRadius: config.buttonBorderRadius || '12px',
                      fontFamily: config.bodyFont || 'Inter',
                      fontSize: '14px',
                      focusRingColor: config.primaryColor || '#0E0E1E'
                    }}
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};