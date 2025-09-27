import React from 'react';

export const ClassicSubscriptionSection = ({ config, data }) => {
  const subscription = data.subscriptions[0];
  
  const getShadowClass = () => {
    const shadow = config.cardShadow || 'large';
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
        backgroundColor: config.backgroundColor || '#f8fafc',
        paddingTop: config.sectionSpacing || '56px',
        paddingBottom: config.sectionSpacing || '56px',
        paddingLeft: config.containerPadding || '20px',
        paddingRight: config.containerPadding || '20px'
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            className="font-bold mb-4"
            style={{ 
              color: config.textColor || '#1e293b', 
              fontFamily: config.fontFamily || 'Georgia',
              fontSize: `calc(${config.baseFontSize || '16px'} * 2.25)`
            }}
          >
            Lifetime Membership
          </h2>
          <p 
            style={{
              color: config.textSecondary || '#64748b',
              fontFamily: config.fontFamily || 'Georgia',
              fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`
            }}
          >
            Join thousands of creators with unlimited access
          </p>
        </div>
        
        <div 
          className={`${getShadowClass()} overflow-hidden`}
          style={{ 
            backgroundColor: config.surfaceColor || '#ffffff',
            borderRadius: config.borderRadius || '4px',
            border: `1px solid ${config.borderColor || '#e2e8f0'}`
          }}
        >
          <div className="flex flex-col md:flex-row">
            {subscription.image_url && (
              <div className="md:w-1/2">
                <img 
                  src={subscription.image_url} 
                  alt={subscription.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
            )}
            
            <div className="md:w-1/2" style={{ padding: `calc(${config.containerPadding || '20px'} * 2)` }}>
            <div className="text-center mb-8">
              <h3 
                className="font-bold mb-4"
                style={{ 
                  color: config.textColor || '#1e293b', 
                  fontFamily: config.fontFamily || 'Georgia',
                  fontSize: `calc(${config.baseFontSize || '16px'} * 1.875)`
                }}
              >
                {subscription.title}
              </h3>
              <p 
                className="mb-6"
                style={{
                  color: config.textSecondary || '#64748b',
                  fontFamily: config.fontFamily || 'Georgia',
                  fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`,
                  lineHeight: config.lineHeight || '1.6'
                }}
              >
                {subscription.description}
              </p>
              
              <div className="mb-8">
                <span 
                  className="font-bold"
                  style={{ 
                    color: config.primaryColor || '#2563eb',
                    fontFamily: config.fontFamily || 'Georgia',
                    fontSize: `calc(${config.baseFontSize || '16px'} * 3)`
                  }}
                >
                  ${subscription.price_for_lifetime}
                </span>
                <span 
                  className="ml-3"
                  style={{
                    color: config.textSecondary || '#64748b',
                    fontFamily: config.fontFamily || 'Georgia',
                    fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`
                  }}
                >
                  One-Time Payment
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {subscription.features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start"
                  style={{
                    color: config.textColor || '#1e293b',
                    fontFamily: config.fontFamily || 'Georgia',
                    fontSize: config.baseFontSize || '16px'
                  }}
                >
                  <span 
                    className="mr-3 mt-1 flex-shrink-0"
                    style={{ 
                      color: config.primaryColor || '#2563eb',
                      fontSize: `calc(${config.baseFontSize || '16px'} * 1.25)`
                    }}
                  >
                    ✓
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button 
                className={`w-full py-4 font-bold ${getTransitionClass()}`}
                style={{ 
                  backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#2563eb',
                  color: config.buttonPrimaryText || '#ffffff',
                  borderRadius: config.buttonBorderRadius || config.borderRadius || '4px',
                  fontFamily: config.fontFamily || 'Georgia',
                  fontSize: `calc(${config.baseFontSize || '16px'} * 1.25)`
                }}
              >
                Get Lifetime Access Now
              </button>
              
              <p 
                className="mt-4"
                style={{
                  color: config.textSecondary || '#64748b',
                  fontFamily: config.fontFamily || 'Georgia',
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
  );
};