import React from 'react';

export const SellzzySubscriptionSection = ({ config, data }) => {
  const subscription = data.subscriptions[0];
  
  return (
    <div 
      style={{
        backgroundColor: config.surfaceColor || '#f8fafc',
        paddingTop: '100px',
        paddingBottom: '100px',
        paddingLeft: config.containerPadding || '24px',
        paddingRight: config.containerPadding || '24px'
      }}
    >
      <div className="mx-auto" style={{ maxWidth: config.maxWidth || '1260px' }}>
        <div className="text-center mb-16">
          <h2 
            className="font-bold mb-6"
            style={{ 
              color: config.textColor || '#0E0E1E', 
              fontFamily: config.displayFont || 'Poppins',
              fontSize: 'clamp(32px, 5vw, 56px)',
              letterSpacing: '-0.02em'
            }}
          >
            Choose Your Plan
          </h2>
          <p 
            className="max-w-2xl mx-auto"
            style={{
              color: config.textSecondary || '#6b7280',
              fontFamily: config.bodyFont || 'Inter',
              fontSize: 'clamp(16px, 2vw, 20px)',
              lineHeight: '1.6'
            }}
          >
            Get lifetime access to our entire design library with premium features
          </p>
        </div>
        
        {/* Subscription Card */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="bg-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative"
            style={{ 
              borderRadius: config.borderRadius || '24px',
              border: `2px solid ${config.borderColor || '#e5e7eb'}`
            }}
          >
            {/* Popular Badge */}
            <div 
              className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-bold text-white z-10"
              style={{ backgroundColor: config.primaryColor || '#0E0E1E' }}
            >
              Most Popular
            </div>
            
            <div className="flex flex-col lg:flex-row">
              {/* Left: Image */}
              <div className="lg:w-2/5">
                <img 
                  src={subscription.image_url || '/public/assets/subscription.jpg'} 
                  alt={subscription.title}
                  className="w-full h-80 lg:h-full object-cover"
                />
              </div>
              
              {/* Right: Content */}
              <div className="lg:w-3/5 p-10 lg:p-16">
                <h3 
                  className="font-bold mb-6"
                  style={{ 
                    color: config.textColor || '#0E0E1E', 
                    fontFamily: config.displayFont || 'Poppins',
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {subscription.title}
                </h3>
                
                <div className="mb-8 p-6 rounded-2xl" style={{ backgroundColor: config.surfaceColor || '#f8fafc' }}>
                  <div className="flex items-baseline">
                    <span 
                      className="font-black"
                      style={{ 
                        color: config.primaryColor || '#0E0E1E',
                        fontFamily: config.bodyFont || 'Inter',
                        fontSize: 'clamp(36px, 5vw, 48px)'
                      }}
                    >
                      ${subscription.price_for_lifetime}
                    </span>
                    <span 
                      className="ml-3"
                      style={{
                        color: config.textSecondary || '#6b7280',
                        fontFamily: config.bodyFont || 'Inter',
                        fontSize: '18px',
                        fontWeight: '500'
                      }}
                    >
                      for Lifetime
                    </span>
                  </div>
                  <p 
                    className="mt-2"
                    style={{
                      color: config.textSecondary || '#6b7280',
                      fontFamily: config.bodyFont || 'Inter',
                      fontSize: '14px'
                    }}
                  >
                    One-time payment • No recurring fees
                  </p>
                </div>
                
                <p 
                  className="mb-8"
                  style={{
                    color: config.textSecondary || '#6b7280',
                    fontFamily: config.bodyFont || 'Inter',
                    fontSize: '18px',
                    lineHeight: config.lineHeight || '1.7'
                  }}
                >
                  {subscription.description}
                </p>
                
                {/* Features Checklist */}
                <div className="mb-10 space-y-4">
                  {subscription.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start p-3 rounded-lg transition-colors hover:bg-gray-50"
                      style={{
                        fontFamily: config.bodyFont || 'Inter',
                        fontSize: '16px'
                      }}
                    >
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0"
                        style={{ backgroundColor: config.primaryColor || '#0E0E1E' }}
                      >
                        <svg 
                          className="w-4 h-4" 
                          fill="white" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </div>
                      <span style={{ color: config.textColor || '#0E0E1E', fontWeight: '500' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Subscribe Button */}
                <button 
                  className="w-full py-6 font-bold transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:ring-4 focus:ring-offset-2 transform"
                  style={{ 
                    backgroundColor: config.buttonPrimaryBg || config.primaryColor || '#0E0E1E',
                    color: config.buttonPrimaryText || '#ffffff',
                    borderRadius: config.buttonBorderRadius || config.borderRadius || '16px',
                    fontFamily: config.bodyFont || 'Inter',
                    fontSize: '20px',
                    focusRingColor: config.primaryColor || '#0E0E1E'
                  }}
                >
                  Get Lifetime Access Now
                </button>
                
                <div className="mt-6 text-center space-y-2">
                  <p 
                    style={{
                      color: config.textSecondary || '#6b7280',
                      fontFamily: config.bodyFont || 'Inter',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    ✓ 30-day money-back guarantee
                  </p>
                  <p 
                    style={{
                      color: config.textSecondary || '#6b7280',
                      fontFamily: config.bodyFont || 'Inter',
                      fontSize: '14px'
                    }}
                  >
                    Secure payment • Instant access • No hidden fees
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