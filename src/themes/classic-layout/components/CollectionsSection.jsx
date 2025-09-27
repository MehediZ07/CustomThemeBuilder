import React, { useState } from 'react';

export const SellzzyCollectionsSection = ({ config, data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(data.collections.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const gradients = [
    'linear-gradient(135deg, #f7d7d0 0%, #e6c7ff 100%)',
    'linear-gradient(135deg, #e6c7ff 0%, #f7d7d0 100%)',
    'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)',
    'linear-gradient(135deg, #a8e6cf 0%, #88d8c0 100%)'
  ];

  return (
    <div 
      style={{
        backgroundColor: config.surfaceColor || '#ffffff',
        paddingTop: config.sectionSpacing || '64px',
        paddingBottom: config.sectionSpacing || '64px',
        paddingLeft: config.containerPadding || '24px',
        paddingRight: config.containerPadding || '24px'
      }}
    >
      <div className="mx-auto" style={{ maxWidth: config.maxWidth || '1260px' }}>
        <h2 
          className="text-center mb-12 font-bold"
          style={{ 
            color: config.textColor || '#0E0E1E', 
            fontFamily: config.displayFont || 'Poppins',
            fontSize: 'clamp(28px, 4vw, 48px)',
            marginBottom: config.cardSpacing || '24px'
          }}
        >
          Collections
        </h2>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            style={{ transform: 'translateY(-50%) translateX(-50%)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
            style={{ transform: 'translateY(-50%) translateX(50%)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden mx-8">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                gap: config.cardSpacing || '24px'
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="flex-none w-full">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data.collections
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((collection, index) => (
                        <div 
                          key={collection.id}
                          className="group cursor-pointer transition-all duration-200 hover:-translate-y-2 hover:shadow-xl"
                          style={{
                            borderRadius: config.itemCardRadius || config.borderRadius || '16px',
                            overflow: 'hidden'
                          }}
                        >
                          {/* Gradient Background */}
                          <div 
                            className="h-48 flex items-center justify-center relative overflow-hidden"
                            style={{ 
                              background: gradients[(slideIndex * itemsPerSlide + index) % gradients.length]
                            }}
                          >
                            {/* Polaroid-style Images */}
                            <div className="relative">
                              <img 
                                src={collection.image_url} 
                                alt={collection.title}
                                className="w-20 h-20 object-cover shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300"
                                style={{ borderRadius: '8px' }}
                              />
                              <img 
                                src={collection.image_url} 
                                alt={collection.title}
                                className="absolute top-2 left-2 w-16 h-16 object-cover shadow-md transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300 opacity-70"
                                style={{ borderRadius: '6px' }}
                              />
                            </div>
                          </div>
                          
                          {/* Title */}
                          <div 
                            className="p-4 bg-white"
                            style={{
                              fontFamily: config.bodyFont || 'Inter',
                              fontSize: '14px',
                              fontWeight: '600',
                              color: config.textColor || '#0E0E1E',
                              textAlign: 'center'
                            }}
                          >
                            {collection.title}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentSlide === index ? 'w-6' : ''
                }`}
                style={{
                  backgroundColor: currentSlide === index 
                    ? config.primaryColor || '#0E0E1E' 
                    : config.borderColor || '#e5e7eb'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};