import React from 'react';

export const VibrantCollectionsSection = ({ config, data }) => {
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
        backgroundColor: config.surfaceColor || '#f8fafc',
        paddingTop: config.sectionSpacing || '48px',
        paddingBottom: config.sectionSpacing || '48px',
        paddingLeft: config.containerPadding || '16px',
        paddingRight: config.containerPadding || '16px'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className="text-center mb-8 font-bold"
          style={{ 
            color: config.textColor || '#1f2937', 
            fontFamily: config.fontFamily || 'Inter',
            fontSize: `calc(${config.baseFontSize || '16px'} * 1.875)`,
            marginBottom: config.cardSpacing || '20px'
          }}
        >
          Collections
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto" style={{ gap: config.cardSpacing || '20px' }}>
          {data.collections.map((collection, index) => {
            // Vibrant gradient colors for each collection
            const gradients = [
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
            ];
            
            return (
              <div 
                key={collection.id}
                className={`overflow-hidden cursor-pointer ${getShadowClass()} ${getTransitionClass()} hover:scale-105`}
                style={{
                  backgroundColor: config.itemCardBg || '#ffffff',
                  borderRadius: config.itemCardRadius || config.borderRadius || '12px',
                  border: `1px solid ${config.borderColor || '#e5e7eb'}`
                }}
              >
                <div className="relative">
                  <div 
                    className="w-full h-32 flex items-center justify-center"
                    style={{ background: gradients[index % gradients.length] }}
                  >
                    <img 
                      src={collection.image_url} 
                      alt={collection.title}
                      className="w-20 h-20 object-cover rounded-lg shadow-lg opacity-90"
                    />
                  </div>
                  <div 
                    className="absolute bottom-2 left-2 right-2 px-3 py-2 text-center"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      color: config.textColor || '#1f2937',
                      borderRadius: config.borderRadius || '12px',
                      fontFamily: config.fontFamily || 'Inter',
                      fontSize: `calc(${config.baseFontSize || '16px'} * 0.875)`,
                      fontWeight: '600',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {collection.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center" style={{ marginTop: config.cardSpacing || '20px' }}>
          <a 
            href="#" 
            className="font-medium hover:underline inline-flex items-center"
            style={{ 
              color: config.primaryColor || '#8b5cf6',
              fontFamily: config.fontFamily || 'Inter',
              fontSize: config.baseFontSize || '16px'
            }}
          >
            Explore More 
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};