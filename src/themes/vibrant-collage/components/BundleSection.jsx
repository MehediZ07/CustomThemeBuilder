import React from 'react';

export const VibrantBundleSection = ({ config, data }) => {
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

  const bundleGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  ];

  return (
    <div 
      style={{
        backgroundColor: config.surfaceColor || '#f8fafc',
        paddingTop: config.sectionSpacing || '48px',
        paddingBottom: config.sectionSpacing || '48px',
        paddingLeft: config.containerPadding || '16px',
        paddingRight: config.containerPadding || '16px'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="font-bold mb-4"
            style={{ 
              color: config.textColor || '#1f2937', 
              fontFamily: config.fontFamily || 'Inter',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.875)`
            }}
          >
            Bundle
          </h2>
          <p 
            style={{
              color: config.textSecondary || '#6b7280',
              fontFamily: config.fontFamily || 'Inter',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`
            }}
          >
            Complete design collections at amazing prices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto" style={{ gap: config.cardSpacing || '20px' }}>
          {data.bundles.map((bundle, index) => (
            <div 
              key={bundle.id}
              className={`overflow-hidden ${getShadowClass()} ${getTransitionClass()} hover:scale-105 group`}
              style={{
                backgroundColor: config.itemCardBg || '#ffffff',
                borderRadius: config.itemCardRadius || config.borderRadius || '12px',
                border: `1px solid ${config.borderColor || '#e5e7eb'}`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={bundle.image_url} 
                  alt={bundle.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ background: bundleGradients[index % bundleGradients.length] }}
                />
                <div 
                  className="absolute top-4 right-4 px-3 py-1 text-sm font-semibold text-white"
                  style={{
                    background: bundleGradients[index % bundleGradients.length],
                    borderRadius: config.borderRadius || '12px'
                  }}
                >
                  Bundle
                </div>
              </div>
              
              <div style={{ padding: `calc(${config.containerPadding || '16px'} * 1.2)` }}>
                <h3 
                  className="font-bold mb-3 line-clamp-2"
                  style={{
                    color: config.textColor || '#1f2937',
                    fontFamily: config.fontFamily || 'Inter',
                    fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`,
                    lineHeight: config.lineHeight || '1.5'
                  }}
                >
                  {bundle.title}
                </h3>
                
                <p 
                  className="mb-4 line-clamp-2"
                  style={{
                    color: config.textSecondary || '#6b7280',
                    fontFamily: config.fontFamily || 'Inter',
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
                        color: config.primaryColor || '#8b5cf6',
                        fontFamily: config.fontFamily || 'Inter',
                        fontSize: `calc(${config.baseFontSize || '16px'} * 1.5)`
                      }}
                    >
                      ${bundle.price}
                    </span>
                    {bundle.comparePrice && (
                      <span 
                        className="line-through ml-2"
                        style={{ 
                          color: config.textSecondary || '#6b7280',
                          fontFamily: config.fontFamily || 'Inter',
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
                    className={`flex-1 py-3 font-semibold ${getTransitionClass()} hover:scale-105`}
                    style={{
                      backgroundColor: config.buttonSecondaryBg || '#f3f4f6',
                      color: config.buttonSecondaryText || '#374151',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '12px',
                      border: `1px solid ${config.borderColor || '#e5e7eb'}`,
                      fontFamily: config.fontFamily || 'Inter'
                    }}
                  >
                    Preview
                  </button>
                  <button 
                    className={`flex-1 py-3 font-semibold ${getTransitionClass()} hover:scale-105`}
                    style={{ 
                      background: bundleGradients[index % bundleGradients.length],
                      color: '#ffffff',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '12px',
                      fontFamily: config.fontFamily || 'Inter'
                    }}
                  >
                    Get Bundle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center" style={{ marginTop: `calc(${config.cardSpacing || '20px'} * 2)` }}>
          <button 
            className={`px-8 py-4 font-bold ${getTransitionClass()} hover:scale-105`}
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: '#ffffff',
              borderRadius: config.buttonBorderRadius || config.borderRadius || '12px',
              fontFamily: config.fontFamily || 'Inter',
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