import React from 'react';
// Yahan humne tumhari nayi photo ko import kiya hai
import heroBg from '../../assets/hero-bg.jpg'; 

const HeroSection = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center px-8 md:px-16 border-b border-gray-800 overflow-hidden">
      
      {/* Background Image / Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // Yahan humne Unsplash link hata kar tumhari photo (heroBg) laga di hai
          backgroundImage: `linear-gradient(to right, rgba(15, 15, 17, 1) 10%, rgba(15, 15, 17, 0.4) 50%, rgba(15, 15, 17, 0.8) 100%), url(${heroBg})`,
        }}
      ></div>

      {/* Floating LIVE Badge (Top Right) */}
      <div className="absolute top-6 right-8 z-10 hidden md:flex items-center gap-4 bg-black/60 border border-gray-700 px-4 py-2 rounded-sm text-xs font-semibold backdrop-blur-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="w-2 h-2 bg-brandRed rounded-full animate-pulse"></span>
          LIVE : Episode 14 . Bengaluru Regionals
        </div>
        <a href="#" className="text-brandRed hover:text-red-400 transition-colors uppercase tracking-wider">Watch Live</a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-4 tracking-wide uppercase">
          India's Ultimate <br />
          Robotics Arena
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
          Build.Compete.Rank. The National Ecosystem for Robotics Arena
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-3 bg-brandRed hover:bg-red-600 text-white text-sm font-bold uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(249,57,67,0.4)]">
            Create Account
          </button>
          <button className="px-8 py-3 bg-transparent border border-gray-400 hover:border-white text-white text-sm font-bold uppercase tracking-wider rounded transition-all">
            Explore Events
          </button>
        </div>
      </div>
      
      {/* Decorative Left Orange Border */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brandOrange z-10"></div>
      
    </section>
  );
};

export default HeroSection;