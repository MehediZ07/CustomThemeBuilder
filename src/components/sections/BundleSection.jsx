import React from 'react';

const BundleSection = ({ styles }) => {
  const bundles = [
    {
      id: 1,
      title: "1000+ Timeless Designs to Power Your POD Business",
      price: "$39.00",
      image: "https://cdn.shopify.com/s/files/1/0617/2596/6487/files/Evergreen_Design_Bundle.png?v=1736682371"
    },
    {
      id: 2,
      title: "Halloween Mega Craft Bundle",
      price: "$47.00",
      image: "https://cdn.shopify.com/s/files/1/0617/2596/6487/files/HalloweenCraftBundle_88e16dce-40a6-4c2d-acb2-b8deafed178e.png?v=1734262539"
    },
    {
      id: 3,
      title: "Christmas SVG & Sublimation Design Mega Bundle",
      price: "$47.00",
      image: "https://cdn.shopify.com/s/files/1/0617/2596/6487/files/Meery_Christmas_SVG_Sublimation_Design_Bundle.png?v=1737209788"
    },
    {
      id: 4,
      title: "The Mother's Day Craft Design Bundle",
      price: "$49.00",
      image: "https://cdn.shopify.com/s/files/1/0617/2596/6487/files/2_5dee667c-eb04-4b7b-b3c3-f3b8421a46c3.png?v=1735636842"
    }
  ];

  return (
    <div className="py-12 px-4 bg-white">
      <h2 
        className="text-3xl font-bold text-center mb-8"
        style={{ color: styles.textColor, fontFamily: styles.fontFamily }}
      >
        Bundle
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {bundles.map((bundle) => (
          <div 
            key={bundle.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <img 
              src={bundle.image} 
              alt={bundle.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                {bundle.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold" style={{ color: styles.primaryColor }}>
                  Price {bundle.price}
                </span>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 border rounded text-sm">
                    View Product
                  </button>
                  <button 
                    className="px-4 py-2 text-white rounded text-sm"
                    style={{ backgroundColor: styles.primaryColor }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-blue-600 font-medium">View All</a>
      </div>
    </div>
  );
};

export default BundleSection;