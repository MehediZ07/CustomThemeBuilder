import React from 'react';

export const ClassicItemsSection = ({ config, data }) => {
  const getGridCols = () => {
    const cols = config.itemsPerRow || '3';
    return {
      '2': 'grid-cols-1 md:grid-cols-2',
      '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      '5': 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
      '6': 'grid-cols-2 md:grid-cols-4 lg:grid-cols-6'
    }[cols] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

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
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 
              className="font-bold mb-2"
              style={{ 
                color: config.textColor || '#1e293b', 
                fontFamily: config.fontFamily || 'Georgia',
                fontSize: `calc(${config.baseFontSize || '16px'} * 2.25)`,
                lineHeight: config.lineHeight || '1.6'
              }}
            >
              Premium Items
            </h2>
            <p 
              style={{
                color: config.textSecondary || '#64748b',
                fontFamily: config.fontFamily || 'Georgia',
                fontSize: `calc(${config.baseFontSize || '16px'} * 1.25)`
              }}
            >
              Hand-picked designs for professionals
            </p>
          </div>
          <button 
            className={`px-6 py-3 border-2 font-semibold ${getTransitionClass()}`}
            style={{ 
              borderColor: config.primaryColor || '#2563eb', 
              color: config.primaryColor || '#2563eb',
              borderRadius: config.buttonBorderRadius || config.borderRadius || '4px',
              fontFamily: config.fontFamily || 'Georgia'
            }}
          >
            View All Items
          </button>
        </div>
        
        <div className={`grid ${getGridCols()}`} style={{ gap: config.cardSpacing || '28px' }}>
          {data.items.map((item) => (
            <div 
              key={item.id}
              className={`overflow-hidden ${getShadowClass()} ${getTransitionClass()}`}
              style={{
                backgroundColor: config.itemCardBg || '#ffffff',
                borderRadius: config.itemCardRadius || config.borderRadius || '4px',
                border: `1px solid ${config.borderColor || '#e2e8f0'}`
              }}
            >
              <img 
                src={item.image_url} 
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div style={{ padding: `calc(${config.containerPadding || '20px'} * 1.2)` }}>
                <h3 
                  className="font-bold mb-3 line-clamp-2"
                  style={{
                    color: config.textColor || '#1e293b',
                    fontFamily: config.fontFamily || 'Georgia',
                    fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`,
                    fontWeight: config.fontWeight || '700'
                  }}
                >
                  {item.title}
                </h3>
                <div className="mb-4">
                  <span 
                    className="font-bold" 
                    style={{ 
                      color: config.primaryColor || '#2563eb',
                      fontFamily: config.fontFamily || 'Georgia',
                      fontSize: `calc(${config.baseFontSize || '16px'} * 1.5)`
                    }}
                  >
                    ${item.price}
                  </span>
                  {item.comparePrice && (
                    <span 
                      className="line-through ml-3"
                      style={{ 
                        color: config.textSecondary || '#64748b',
                        fontFamily: config.fontFamily || 'Georgia',
                        fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`
                      }}
                    >
                      ${item.comparePrice}
                    </span>
                  )}
                </div>
                <div 
                  className="mb-4"
                  style={{
                    color: config.textSecondary || '#64748b',
                    fontFamily: config.fontFamily || 'Georgia',
                    fontSize: `calc(${config.baseFontSize || '16px'} * 0.875)`
                  }}
                >
                  By Designpuller
                </div>
                <div className="space-y-2">
                  <button 
                    className={`w-full py-3 font-semibold ${getTransitionClass()}`}
                    style={{ 
                      backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#2563eb',
                      color: config.buttonPrimaryText || '#ffffff',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '4px',
                      fontFamily: config.fontFamily || 'Georgia'
                    }}
                  >
                    Add to Cart
                  </button>
                  <button 
                    className={`w-full py-3 border-2 font-semibold ${getTransitionClass()}`}
                    style={{
                      backgroundColor: config.buttonSecondaryBg || '#f1f5f9',
                      color: config.buttonSecondaryText || '#334155',
                      borderColor: config.borderColor || '#e2e8f0',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '4px',
                      fontFamily: config.fontFamily || 'Georgia'
                    }}
                  >
                    View Details
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