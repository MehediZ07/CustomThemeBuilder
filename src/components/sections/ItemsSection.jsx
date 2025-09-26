import React from 'react';

const ItemsSection = ({ items, styles }) => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
        <h2 
          className="text-3xl font-bold"
          style={{ color: styles.textColor, fontFamily: styles.fontFamily }}
        >
          All Items
        </h2>
        <a href="#" className="text-blue-600 font-medium">View All</a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
          >
            <img 
              src={item.image_url} 
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                {item.title}
              </h3>
              <div className="mb-2">
                <span className="text-lg font-bold" style={{ color: styles.primaryColor }}>
                  Price {item.price}
                </span>
                {item.comparePrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {item.comparePrice}
                  </span>
                )}
              </div>
              <div className="text-xs text-gray-500 mb-3">By Designpuller</div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-800 text-white py-2 px-3 rounded text-xs">
                  Add to Cart
                </button>
                <button className="px-3 py-2 border rounded text-xs">
                  View Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsSection;