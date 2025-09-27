import React from 'react';

const Bundle = ({ data, config }) => {
  const bundle = data.bundles[0]; // Get first bundle
  
  return (
    <section 
      className="py-16"
      style={{ backgroundColor: config.colors.background }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: config.colors.text }}
        >
          Special Deal Bundles
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.bundles.map((bundle) => (
            <div 
              key={bundle.id}
              className="rounded-2xl p-8 relative overflow-hidden"
              style={{ 
                background: `linear-gradient(135deg, ${config.colors.primary}, ${config.colors.secondary})`
              }}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
              </div>
              
              <div className="relative z-10">
                <img 
                  src={bundle.image_url} 
                  alt={bundle.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                
                <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2">
                  {bundle.title}
                </h3>
                
                <p className="text-white/90 mb-6 line-clamp-3">
                  {bundle.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-lg text-white/70 line-through mr-2">
                      ${bundle.comparePrice}
                    </span>
                    <span className="text-3xl font-bold text-white">
                      ${bundle.price}
                    </span>
                  </div>
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ 
                      backgroundColor: config.colors.accent,
                      color: config.colors.background
                    }}
                  >
                    {Math.round((1 - parseFloat(bundle.price) / parseFloat(bundle.comparePrice)) * 100)}% OFF
                  </span>
                </div>
                
                <button 
                  className="w-full py-3 text-lg font-bold rounded-lg transition-transform hover:scale-105"
                  style={{ 
                    backgroundColor: config.colors.accent,
                    color: config.colors.background
                  }}
                >
                  GET INSTANT ACCESS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bundle;