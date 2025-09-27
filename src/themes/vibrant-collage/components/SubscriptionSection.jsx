import React from 'react';

export const VibrantSubscriptionSection = ({ config, data }) => {
  const subscription = data.subscriptions[0];
  
  const getShadowClass = () => {
    const shadow = config.cardShadow || 'medium';
    return {
      'none': '',
      'small': 'shadow-sm',
      'medium': 'shadow-lg',
      'large': 'shadow-xl',
      'xl': 'shadow-2xl'
    }[shadow] || 'shadow-xl';
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        paddingTop: config.sectionSpacing || '48px',
        paddingBottom: config.sectionSpacing || '48px',
        paddingLeft: config.containerPadding || '16px',
        paddingRight: config.containerPadding || '16px'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="font-bold mb-4 text-white"
            style={{ 
              fontFamily: config.fontFamily || 'Inter',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.875)`,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Subscription
          </h2>
          <p 
            className="text-white opacity-90"
            style={{
              fontFamily: config.fontFamily || 'Inter',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`,
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
            }}
          >
            Unlimited access to premium designs
          </p>
        </div>
        
        <div 
          className={`${getShadowClass()} overflow-hidden hover:scale-105 ${getTransitionClass()}`}
          style={{ 
            backgroundColor: 'rgba(255,255,255,0.95)',
            borderRadius: config.borderRadius || '12px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <div className="flex flex-col md:flex-row">
            {subscription.image_url && (
              <div className="md:w-1/2 relative overflow-hidden">
                <img 
                  src={subscription.image_url} 
                  alt={subscription.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
              </div>
            )}
            
            <div className="md:w-1/2" style={{ padding: `calc(${config.containerPadding || '16px'} * 2)` }}>
              <div className="text-center md:text-left">
                <h3 
                  className="font-bold mb-4"
                  style={{ 
                    color: config.textColor || '#1f2937', 
                    fontFamily: config.fontFamily || 'Inter',
                    fontSize: `calc(${config.baseFontSize || '16px'} * 1.5)`
                  }}
                >
                  {subscription.title}
                </h3>
                <p 
                  className="mb-6"
                  style={{
                    color: config.textSecondary || '#6b7280',
                    fontFamily: config.fontFamily || 'Inter',
                    fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`,
                    lineHeight: config.lineHeight || '1.6'
                  }}
                >
                  {subscription.description}
                </p>
                
                <div className="mb-8 text-center md:text-left">
                  <span 
                    className="font-bold"
                    style={{ 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: config.fontFamily || 'Inter',
                      fontSize: `calc(${config.baseFontSize || '16px'} * 2.5)`
                    }}
                  >
                    ${subscription.price_for_lifetime}
                  </span>
                  <span 
                    className="ml-3"
                    style={{
                      color: config.textSecondary || '#6b7280',
                      fontFamily: config.fontFamily || 'Inter',
                      fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`
                    }}
                  >
                    One-Time Payment
                  </span>
                </div>
                
                <div className="grid grid-cols-1 gap-3 mb-8">
                  {subscription.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start"
                      style={{
                        color: config.textColor || '#1f2937',
                        fontFamily: config.fontFamily || 'Inter',
                        fontSize: config.baseFontSize || '16px'
                      }}
                    >
                      <span 
                        className="mr-3 mt-1 flex-shrink-0"
                        style={{ 
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          fontSize: `calc(${config.baseFontSize || '16px'} * 1.25)`,
                          fontWeight: 'bold'
                        }}
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center md:text-left">
                  <button 
                    className={`w-full md:w-auto px-8 py-4 font-bold ${getTransitionClass()} hover:scale-105`}
                    style={{ 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: '#ffffff',
                      borderRadius: config.buttonBorderRadius || config.borderRadius || '12px',
                      fontFamily: config.fontFamily || 'Inter',
                      fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`,
                      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
                    }}
                  >
                    Get Lifetime Access Now
                  </button>
                  
                  <p 
                    className="mt-4"
                    style={{
                      color: config.textSecondary || '#6b7280',
                      fontFamily: config.fontFamily || 'Inter',
                      fontSize: `calc(${config.baseFontSize || '16px'} * 0.875)`
                    }}
                  >
                    30-day money-back guarantee • Secure payment • Instant access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};