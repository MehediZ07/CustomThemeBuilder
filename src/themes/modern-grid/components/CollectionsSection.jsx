import React from 'react';

export const ModernCollectionsSection = ({ config, data }) => {
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
          fontSize: `calc(${config.baseFontSize || '16px'} * 1.875)`,
          marginBottom: config.cardSpacing || '24px'
        }}
      >
        Collections
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto" style={{ gap: config.cardSpacing || '24px' }}>
        {data.collections.map((collection) => (
          <div 
            key={collection.id}
            className={`overflow-hidden cursor-pointer ${getShadowClass()} ${getTransitionClass()}`}
            style={{
              backgroundColor: config.itemCardBg || '#ffffff',
              borderRadius: config.itemCardRadius || config.borderRadius || '8px',
              border: `1px solid ${config.borderColor || '#e5e7eb'}`
            }}
          >
            <div className="relative">
              <img 
                src={collection.image_url} 
                alt={collection.title}
                className="w-full h-32 object-cover"
              />
              <div 
                className="absolute bottom-2 left-2 px-2 py-1 text-xs font-medium"
                style={{
                  backgroundColor: config.surfaceColor || '#ffffff',
                  color: config.textColor || '#1f2937',
                  borderRadius: config.borderRadius || '8px',
                  fontFamily: config.fontFamily || 'Inter'
                }}
              >
                {collection.title}
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
          Explore More →
        </a>
      </div>
    </div>
  );
};