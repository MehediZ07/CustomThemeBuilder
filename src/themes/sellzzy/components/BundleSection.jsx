import React from 'react';

export const ModernBundleSection = ({ config, data }) => {
  const getShadowClass = () => {
    const shadow = config.cardShadow || 'medium';
    return {
      'none': '',
      'small': 'shadow-sm hover:shadow-md',
      'medium': 'shadow-md hover:shadow-lg', 
      'large': 'shadow-lg hover:shadow-xl',
      'xl': 'shadow-xl hover:shadow-2xl'
    }[shadow] || 'shadow-lg hover:shadow-xl';
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
        backgroundColor: config.surfaceColor || '#ffffff',
        paddingTop: config.sectionSpacing || '48px',
        paddingBottom: config.sectionSpacing || '48px',
        paddingLeft: config.containerPadding || '16px',
        paddingRight: config.containerPadding || '16px'
      }}
    >
      <h2 
        className="text-center mb-8 font-bold"
        style={{ 
          color: config.textColor || '#1f2937', 
          fontFamily: config.fontFamily || 'Inter',
          fontSize: `calc(${config.baseFontSize || '16px'} * 1.875)`
        }}
      >
        Bundles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto" style={{ gap: config.cardSpacing || '24px' }}>
        {data.bundles.map((bundle) => (
          <div 
            key={bundle.id}
            className={`overflow-hidden ${getShadowClass()} ${getTransitionClass()}`}
            style={{
              backgroundColor: config.itemCardBg || '#ffffff',
              borderRadius: config.itemCardRadius || config.borderRadius || '8px',
              border: `1px solid ${config.borderColor || '#e5e7eb'}`
            }}
          >
            <img 
              src={bundle.image_url} 
              alt={bundle.title}
              className="w-full h-64 object-cover"
            />
            <div style={{ padding: config.containerPadding || '16px' }}>
              <h3 
                className="font-semibold mb-2 line-clamp-2"
                style={{
                  color: config.textColor || '#1f2937',
                  fontFamily: config.fontFamily || 'Inter',
                  fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`
                }}
              >
                {bundle.title}
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <span 
                    className="text-xl font-bold" 
                    style={{ 
                      color: config.primaryColor || '#3b82f6',
                      fontFamily: config.fontFamily || 'Inter'
                    }}
                  >
                    ${bundle.price}
                  </span>
                  {bundle.comparePrice && (
                    <span 
                      className="text-sm line-through ml-2"
                      style={{ 
                        color: config.textSecondary || '#6b7280',
                        fontFamily: config.fontFamily || 'Inter'
                      }}
                    >
                      ${bundle.comparePrice}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button 
                    className={`px-4 py-2 text-sm font-medium ${getTransitionClass()}`}
                    style={{
                      backgroundColor: config.buttonSecondaryBg || '#f3f4f6',
                      color: config.buttonSecondaryText || '#374151',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '8px',
                      border: `1px solid ${config.borderColor || '#e5e7eb'}`,
                      fontFamily: config.fontFamily || 'Inter'
                    }}
                  >
                    View Product
                  </button>
                  <button 
                    className={`px-4 py-2 text-sm font-medium ${getTransitionClass()}`}
                    style={{
                      backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#3b82f6',
                      color: config.buttonPrimaryText || '#ffffff',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '8px',
                      fontFamily: config.fontFamily || 'Inter'
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center" style={{ marginTop: config.cardSpacing || '24px' }}>
        <a 
          href="#" 
          className="font-medium hover:underline"
          style={{ 
            color: config.primaryColor || '#3b82f6',
            fontFamily: config.fontFamily || 'Inter',
            fontSize: config.baseFontSize || '16px'
          }}
        >
          View All
        </a>
      </div>
    </div>
  );
};