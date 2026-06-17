import React from 'react';
// Yahan tumhari downloaded image ka exact wahi lamba naam import kar diya hai!
import mainLogo from '../../assets/Screenshot_2026-04-25_234622-removebg-preview 1.png';

const Navbar = () => {
  return (
    <nav className="w-full px-8 md:px-16 py-4 bg-[#0a0a0c] border-b border-gray-800 flex justify-between items-center sticky top-0 z-50 shadow-md">
      
      {/* Left Side: Tumhari Downloaded Image */}
      <div className="flex items-center cursor-pointer">
        <img 
          src={mainLogo} 
          alt="BotLeague Logo" 
          className="h-8 md:h-12 object-contain" 
        />
      </div>

      {/* Middle: Navigation Links (Events, Programs, Community, Ranks) */}
      <div className="hidden lg:flex gap-10 text-lg md:text-xl font-heading text-white tracking-widest">
        <a href="#" className="hover:text-[#ff4d4d] transition-colors">Events</a>
        <a href="#" className="hover:text-[#ff4d4d] transition-colors">Programs</a>
        <a href="#" className="hover:text-[#ff4d4d] transition-colors">Community</a>
        <a href="#" className="hover:text-[#ff4d4d] transition-colors">Ranks</a>
      </div>

      {/* Right Side: Register Button */}
      <div>
        <button className="bg-[#ff4d4d] hover:bg-red-500 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-md uppercase tracking-wider transition-colors text-xs md:text-sm shadow-[0_0_15px_rgba(255,77,77,0.3)]">
          Register Now
        </button>
      </div>

    </nav>
  );
};

export default Navbar;