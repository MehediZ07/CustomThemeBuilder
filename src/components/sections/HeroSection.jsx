import React from 'react';

const HeroSection = ({ styles }) => {
  return (
    <div 
      className="relative py-32 px-2 min-h-[300px] h-full w-full flex items-center justify-center border-b overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("${styles.heroImage || 'https://daujxgrs0jsvx.cloudfront.net/media/Banner (1)_25XIYcj.jpg'}")`
      }}
    >
      <div className="z-10 flex flex-col items-center justify-center h-full w-full">
        <h1 
          className="text-4xl font-semibold text-center mb-6 max-w-[900px] leading-tight text-white"
          style={{ fontFamily: styles.fontFamily }}
        >
          {styles.heroTitle || 'UNLIMITED CREATIVITY AT YOUR FINGERTIPS!'}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;