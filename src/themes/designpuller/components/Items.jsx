import React from 'react';

const Items = ({ data, config }) => {
  return (
    <section 
      className="py-16"
      style={{ backgroundColor: config.colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: config.colors.text }}
        >
          Featured Designs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item) => (
            <div 
              key={item.id}
              className="rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 hover:-translate-y-2"
              style={{ backgroundColor: config.colors.surface }}
            >
              <img 
                src={item.image_url} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 
                  className="text-lg font-semibold mb-2 line-clamp-2"
                  style={{ color: config.colors.text }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm mb-4 line-clamp-2"
                  style={{ color: config.colors.textSecondary }}
                >
                  {item.description}
                </p>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    {item.comparePrice && (
                      <span 
                        className="text-sm line-through mr-2"
                        style={{ color: config.colors.textSecondary }}
                      >
                        ${item.comparePrice}
                      </span>
                    )}
                    <span 
                      className="text-xl font-bold"
                      style={{ color: config.colors.text }}
                    >
                      ${item.price}
                    </span>
                  </div>
                </div>
                <button 
                  className="w-full py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: config.colors.primary }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Items;