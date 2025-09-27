import React from 'react';

export const ClassicCollectionsSection = ({ config, data }) => {
  return (
    <div className="py-20 px-4" style={{ backgroundColor: config.backgroundColor }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ color: config.textColor, fontFamily: config.fontFamily }}
          >
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600">Curated design collections for every project</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: config.cardSpacing || '28px' }}>
          {data.collections.map((collection) => (
            <div 
              key={collection.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundColor: config.itemCardBg || '#ffffff',
                borderRadius: config.itemCardRadius || config.borderRadius || '4px',
                border: `1px solid ${config.borderColor || '#e2e8f0'}`
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={collection.image_url} 
                  alt={collection.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg">{collection.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            className="px-8 py-3 text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: config.primaryColor }}
          >
            View All Collections
          </button>
        </div>
      </div>
    </div>
  );
};