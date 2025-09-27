import React from 'react';

export const ModernSubscriptionSection = ({ config, data }) => {
  const subscription = data.subscriptions[0];
  
  const getShadowClass = () => {
    const shadow = config.cardShadow || 'medium';
    return {
      'none': '',
      'small': 'shadow-sm',
      'medium': 'shadow-lg',
      'large': 'shadow-xl',
      'xl': 'shadow-2xl'
    }[shadow] || 'shadow-lg';
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
      className="text-center"
      style={{
        backgroundColor: config.backgroundColor || '#ffffff',
        paddingTop: config.sectionSpacing || '48px',
        paddingBottom: config.sectionSpacing || '48px',
        paddingLeft: config.containerPadding || '16px',
        paddingRight: config.containerPadding || '16px'
      }}
    >
      <div 
        className={`max-w-2xl mx-auto ${getShadowClass()}`}
        style={{ 
          backgroundColor: config.surfaceColor || '#f9fafb',
          borderRadius: config.borderRadius || '8px',
          padding: `calc(${config.containerPadding || '16px'} * 2)`,
          border: `1px solid ${config.borderColor || '#e5e7eb'}`
        }}
      >
        {subscription.image_url && (
          <img 
            src={subscription.image_url} 
            alt={subscription.title}
            className="w-full h-32 object-cover mb-6"
            style={{ borderRadius: config.borderRadius || '8px' }}
          />
        )}
        <h2 
          className="font-bold mb-4"
          style={{ 
            color: config.textColor || '#1f2937', 
            fontFamily: config.fontFamily || 'Inter',
            fontSize: `calc(${config.baseFontSize || '16px'} * 1.875)`
          }}
        >
          {subscription.title}
        </h2>
        <p 
          className="mb-6"
          style={{
            color: config.textSecondary || '#6b7280',
            fontFamily: config.fontFamily || 'Inter',
            fontSize: config.baseFontSize || '16px'
          }}
        >
          {subscription.description}
        </p>
        <div className="mb-6">
          <span 
            className="font-bold"
            style={{ 
              color: config.primaryColor || '#3b82f6',
              fontFamily: config.fontFamily || 'Inter',
              fontSize: `calc(${config.baseFontSize || '16px'} * 2.25)`
            }}
          >
            ${subscription.price_for_lifetime}
          </span>
          <span 
            className="ml-2"
            style={{
              color: config.textSecondary || '#6b7280',
              fontFamily: config.fontFamily || 'Inter',
              fontSize: config.baseFontSize || '16px'
            }}
          >
            / One-Time Payment
          </span>
        </div>
        <ul className="text-left mb-8 space-y-2">
          {subscription.features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-center"
              style={{
                color: config.textColor || '#1f2937',
                fontFamily: config.fontFamily || 'Inter',
                fontSize: config.baseFontSize || '16px'
              }}
            >
              <span 
                className="mr-2"
                style={{ color: config.primaryColor || '#3b82f6' }}
              >
                ✓
              </span>
              {feature}
            </li>
          ))}
        </ul>
        <button 
          className={`w-full py-3 font-semibold ${getTransitionClass()}`}
          style={{ 
            backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#3b82f6',
            color: config.buttonPrimaryText || '#ffffff',
            borderRadius: config.buttonBorderRadius || config.borderRadius || '8px',
            fontFamily: config.fontFamily || 'Inter',
            fontSize: `calc(${config.baseFontSize || '16px'} * 1.125)`
          }}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};