import React from 'react';

export const VibrantItemsSection = ({ config, data }) => {
  const getGridCols = () => {
    const cols = config.itemsPerRow || '4';
    return {
      '2': 'grid-cols-1 md:grid-cols-2',
      '3': 'grid-cols-2 md:grid-cols-3',
      '4': 'grid-cols-2 md:grid-cols-4',
      '5': 'grid-cols-2 md:grid-cols-5',
      '6': 'grid-cols-3 md:grid-cols-6'
    }[cols] || 'grid-cols-2 md:grid-cols-4';
  };

  const getShadowClass = () => {
    const shadow = config.cardShadow || 'medium';
    return {
      'none': '',
      'small': 'shadow-sm hover:shadow-md',
      'medium': 'shadow-md hover:shadow-lg',
      'large': 'shadow-lg hover:shadow-xl',
      'xl': 'shadow-xl hover:shadow-2xl'
    }[shadow] || 'shadow-md hover:shadow-lg';
  };

  const getTransitionClass = () => {
    const speed = config.transitionSpeed || 'medium';
    return {
      'fast': 'transition-all duration-150',
      'medium': 'transition-all duration-300',
      'slow': 'transition-all duration-500'
    }[speed] || 'transition-all duration-300';
  };

  return (
    <div 
      style={{ 
        backgroundColor: config.itemsBackground || '#ffffff',
        paddingTop: config.sectionSpacing || '48px',
        paddingBottom: config.sectionSpacing || '48px',
        paddingLeft: config.containerPadding || '16px',
        paddingRight: config.containerPadding || '16px'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 
            className="font-bold"
            style={{ 
              color: config.textColor || '#1f2937', 
              fontFamily: config.fontFamily || 'Inter',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.875)`
            }}
          >
            All Items
          </h2>
          <a 
            href="#" 
            className="font-medium hover:underline"
            style={{ 
              color: config.primaryColor || '#8b5cf6',
              fontFamily: config.fontFamily || 'Inter',
              fontSize: config.baseFontSize || '16px'
            }}
          >
            View All
          </a>
        </div>
        
        <div className={`grid ${getGridCols()} max-w-6xl mx-auto`} style={{ gap: config.cardSpacing || '20px' }}>
          {data.items.map((item) => (
            <div 
              key={item.id}
              className={`overflow-hidden ${getShadowClass()} ${getTransitionClass()} hover:scale-105 group`}
              style={{
                backgroundColor: config.itemCardBg || '#ffffff',
                borderRadius: config.itemCardRadius || config.borderRadius || '12px',
                border: `1px solid ${config.borderColor || '#e5e7eb'}`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image_url} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Colorful overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div style={{ padding: config.containerPadding || '16px' }}>
                <h3 
                  className="font-semibold mb-2 line-clamp-2"
                  style={{
                    color: config.textColor || '#1f2937',
                    fontFamily: config.fontFamily || 'Inter',
                    fontSize: `calc(${config.baseFontSize || '16px'} * 0.875)`,
                    fontWeight: config.fontWeight || '600'
                  }}
                >
                  {item.title}
                </h3>
                
                <div className="mb-2">
                  <span 
                    className="text-lg font-bold" 
                    style={{ 
                      color: config.primaryColor || '#8b5cf6',
                      fontFamily: config.fontFamily || 'Inter'
                    }}
                  >
                    ${item.price}
                  </span>
                  {item.comparePrice && (
                    <span 
                      className="text-sm line-through ml-2"
                      style={{ 
                        color: config.textSecondary || '#6b7280',
                        fontFamily: config.fontFamily || 'Inter'
                      }}
                    >
                      ${item.comparePrice}
                    </span>
                  )}
                </div>
                
                <div 
                  className="text-xs mb-3"
                  style={{ 
                    color: config.textSecondary || '#6b7280',
                    fontFamily: config.fontFamily || 'Inter'
                  }}
                >
                  By Designpuller
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    className={`flex-1 py-2 px-3 text-xs font-medium ${getTransitionClass()} hover:scale-105`}
                    style={{
                      backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#8b5cf6',
                      color: config.buttonPrimaryText || '#ffffff',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '12px',
                      fontFamily: config.fontFamily || 'Inter'
                    }}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className={`px-3 py-2 text-xs font-medium ${getTransitionClass()} hover:scale-105`}
                    style={{
                      backgroundColor: config.buttonSecondaryBg || '#f3f4f6',
                      color: config.buttonSecondaryText || '#374151',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '12px',
                      border: `1px solid ${config.borderColor || '#e5e7eb'}`,
                      fontFamily: config.fontFamily || 'Inter'
                    }}
                  >
                    View
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