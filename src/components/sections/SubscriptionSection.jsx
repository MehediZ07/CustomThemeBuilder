import React from 'react';

const SubscriptionSection = ({ styles }) => {
  return (
    <div className="py-16 px-4 text-center">
      <div 
        className="max-w-2xl mx-auto p-8 shadow-lg"
        style={{ 
          backgroundColor: styles.backgroundColor,
          borderRadius: styles.borderRadius
        }}
      >
        <h2 
          className="text-3xl font-bold mb-4"
          style={{ color: styles.textColor, fontFamily: styles.fontFamily }}
        >
          Lifetime Access
        </h2>
        <p className="text-gray-600 mb-6">
          Everything Forever! (All-in-One) - Instant Access to 15,000+ designs
        </p>
        <div className="mb-6">
          <span 
            className="text-4xl font-bold"
            style={{ color: styles.primaryColor }}
          >
            $499
          </span>
          <span className="text-gray-600 ml-2">/ One-Time Payment</span>
        </div>
        <ul className="text-left mb-8 space-y-2">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Unlimited downloads
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Commercial Use License
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Priority email support
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            Future Designs Free Forever
          </li>
        </ul>
        <button 
          className="w-full py-3 text-white font-semibold text-lg"
          style={{ 
            backgroundColor: styles.primaryColor,
            borderRadius: styles.borderRadius
          }}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSection;