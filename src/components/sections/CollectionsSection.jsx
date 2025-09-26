import React from 'react';

const CollectionsSection = ({ collections, styles }) => {
  return (
    <div className="py-12 px-4 bg-white">
      <h2 
        className="text-3xl font-bold text-center mb-8"
        style={{ color: styles.textColor, fontFamily: styles.fontFamily }}
      >
        Collections
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {collections.map((collection) => (
          <div 
            key={collection.id}
            className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img 
                src={collection.image_url} 
                alt={collection.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium">
                {collection.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="#" className="text-blue-600 font-medium">Explore More →</a>
      </div>
    </div>
  );
};

export default CollectionsSection;