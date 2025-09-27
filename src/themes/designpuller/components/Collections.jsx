import React from 'react';

const Collections = ({ data, config }) => {
  return (
    <section 
      className="py-16"
      style={{ backgroundColor: config.colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 
            className="text-3xl font-bold"
            style={{ color: config.colors.text }}
          >
            Hand Pick Collections
          </h2>
          <a 
            href="#" 
            className="hover:opacity-80 transition-opacity"
            style={{ color: config.colors.primary }}
          >
            View All
          </a>
        </div>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4" style={{ minWidth: 'max-content' }}>
            {data.collections.map((collection) => (
              <div 
                key={collection.id}
                className="flex-shrink-0 w-80 rounded-lg shadow-lg transition-transform hover:scale-105 hover:-translate-y-2 p-6"
                style={{ backgroundColor: config.colors.surface }}
              >
                <img 
                  src={collection.image_url} 
                  alt={collection.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ color: config.colors.text }}
                >
                  {collection.title}
                </h3>
                <p 
                  className="text-sm mb-4 line-clamp-3"
                  style={{ color: config.colors.textSecondary }}
                >
                  {collection.description}
                </p>
                <button 
                  className="w-full py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: config.colors.primary }}
                >
                  Explore Collection
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;