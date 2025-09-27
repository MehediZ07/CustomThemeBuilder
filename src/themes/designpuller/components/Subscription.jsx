import React from 'react';

const Subscription = ({ data, config }) => {
  const subscription = data.subscriptions[0]; // Get the subscription data
  
  return (
    <section 
      className="py-16"
      style={{ backgroundColor: config.colors.background }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: config.colors.text }}
          >
            Unlock Full Library
          </h2>
          <p 
            className="text-xl"
            style={{ color: config.colors.textSecondary }}
          >
            Get lifetime access to everything
          </p>
        </div>

        <div 
          className="rounded-2xl p-8 relative transform scale-105"
          style={{ 
            backgroundColor: config.colors.surface,
            border: `2px solid ${config.colors.primary}`
          }}
        >
          <div 
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: config.colors.primary }}
          >
            Most Popular
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={subscription.image_url} 
                alt={subscription.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </div>
            
            <div>
              <h3 
                className="text-3xl font-bold mb-4"
                style={{ color: config.colors.text }}
              >
                {subscription.title}
              </h3>
              
              <p 
                className="text-lg mb-6"
                style={{ color: config.colors.textSecondary }}
              >
                {subscription.description}
              </p>
              
              <div className="mb-6">
                <span 
                  className="text-5xl font-bold"
                  style={{ color: config.colors.text }}
                >
                  ${subscription.price_for_lifetime}
                </span>
                <span 
                  className="text-lg ml-2"
                  style={{ color: config.colors.textSecondary }}
                >
                  / Lifetime
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg 
                      className="w-5 h-5 mr-3 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      style={{ color: config.colors.primary }}
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span style={{ color: config.colors.text }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className="w-full py-4 rounded-lg font-bold text-white text-lg transition-transform hover:scale-105"
                style={{ backgroundColor: config.colors.primary }}
              >
                Get Lifetime Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;