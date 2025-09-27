import React from 'react';

export const ClassicBundleSection = ({ config, data }) => {
  const getShadowClass = () => {
    const shadow = config.cardShadow || 'large';
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
        backgroundColor: config.itemsBackground || '#f8fafc',
        paddingTop: config.sectionSpacing || '56px',
        paddingBottom: config.sectionSpacing || '56px',
        paddingLeft: config.containerPadding || '20px',
        paddingRight: config.containerPadding || '20px'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="font-bold mb-4"
            style={{ 
              color: config.textColor || '#1e293b', 
              fontFamily: config.fontFamily || 'Georgia',
              fontSize: `calc(${config.baseFontSize || '16px'} * 2.25)`
            }}
          >
            Premium Bundles
          </h2>
          <p 
            style={{
              color: config.textSecondary || '#64748b',
              fontFamily: config.fontFamily || 'Georgia',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`
            }}
          >
            Complete design collections at exceptional value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto" style={{ gap: config.cardSpacing || '28px' }}>
          {data.bundles.map((bundle) => (
            <div 
              key={bundle.id}
              className={`overflow-hidden ${getShadowClass()} ${getTransitionClass()}`}
              style={{
                backgroundColor: config.itemCardBg || '#ffffff',
                borderRadius: config.itemCardRadius || config.borderRadius || '4px',
                border: `1px solid ${config.borderColor || '#e2e8f0'}`
              }}
            >
              <div className="relative">
                <img 
                  src={bundle.image_url} 
                  alt={bundle.title}
                  className="w-full h-56 object-cover"
                />
                <div 
                  className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold"
                  style={{
                    backgroundColor: config.primaryColor || '#2563eb',
                    color: config.buttonPrimaryText || '#ffffff',
                    borderRadius: config.borderRadius || '4px'
                  }}
                >
                  Bundle
                </div>
              </div>
              
              <div style={{ padding: `calc(${config.containerPadding || '20px'} * 1.2)` }}>
                <h3 
                  className="font-bold mb-3 line-clamp-2"
                  style={{
                    color: config.textColor || '#1e293b',
                    fontFamily: config.fontFamily || 'Georgia',
                    fontSize: `calc(${config.baseFontSize || '16px'} * 1.25)`,
                    lineHeight: config.lineHeight || '1.6'
                  }}
                >
                  {bundle.title}
                </h3>
                
                <p 
                  className="mb-4 line-clamp-2"
                  style={{
                    color: config.textSecondary || '#64748b',
                    fontFamily: config.fontFamily || 'Georgia',
                    fontSize: `calc(${config.baseFontSize || '16px'} * 0.875)`
                  }}
                >
                  {bundle.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span 
                      className="font-bold" 
                      style={{ 
                        color: config.primaryColor || '#2563eb',
                        fontFamily: config.fontFamily || 'Georgia',
                        fontSize: `calc(${config.baseFontSize || '16px'} * 1.5)`
                      }}
                    >
                      ${bundle.price}
                    </span>
                    {bundle.comparePrice && (
                      <span 
                        className="line-through ml-2"
                        style={{ 
                          color: config.textSecondary || '#64748b',
                          fontFamily: config.fontFamily || 'Georgia',
                          fontSize: config.baseFontSize || '16px'
                        }}
                      >
                        ${bundle.comparePrice}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    className={`flex-1 py-3 font-semibold ${getTransitionClass()}`}
                    style={{
                      backgroundColor: config.buttonSecondaryBg || '#f1f5f9',
                      color: config.buttonSecondaryText || '#334155',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '4px',
                      border: `1px solid ${config.borderColor || '#e2e8f0'}`,
                      fontFamily: config.fontFamily || 'Georgia'
                    }}
                  >
                    Preview
                  </button>
                  <button 
                    className={`flex-1 py-3 font-semibold ${getTransitionClass()}`}
                    style={{ 
                      backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#2563eb',
                      color: config.buttonPrimaryText || '#ffffff',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '4px',
                      fontFamily: config.fontFamily || 'Georgia'
                    }}
                  >
                    Get Bundle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: `calc(${config.cardSpacing || '28px'} * 2)` }}>
          <button 
            className={`px-8 py-4 font-bold ${getTransitionClass()}`}
            style={{ 
              backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#2563eb',
              color: config.buttonPrimaryText || '#ffffff',
              borderRadius: config.buttonBorderRadius || config.borderRadius || '4px',
              fontFamily: config.fontFamily || 'Georgia',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`
            }}
          >
            View All Bundles
          </button>
        </div>
      </div>
    </div>
  );
};