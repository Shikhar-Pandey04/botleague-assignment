import React from 'react';

const Competitions = () => {
  return (
    <section className="w-full px-8 md:px-16 py-16 bg-darkBg border-b border-gray-800">
      
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10 uppercase tracking-wide">
        Competitions & Events
      </h2>

      {/* Grid Layout for the 3 columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 1. LIVE NOW - Bracket Section */}
        <div className="col-span-1 border border-brandOrange rounded-md bg-cardBg p-6 relative shadow-[0_0_15px_rgba(245,166,35,0.1)]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-brandRed font-bold text-lg uppercase tracking-wider">Live Now</h3>
            <span className="bg-brandRed text-white text-[10px] px-2 py-1 rounded uppercase font-bold">Ongoing</span>
          </div>
          <h4 className="text-xl font-bold text-white mb-1">Bengaluru Regionals</h4>
          <p className="text-gray-400 text-sm mb-8">Lorem Ipsum</p>

          {/* Simplified Bracket UI using Tailwind Flexbox */}
          <div className="flex items-center gap-2 mt-4 opacity-80">
            {/* Round 1 (4 boxes) */}
            <div className="flex flex-col gap-3 w-16">
              <div className="h-5 bg-gray-600 rounded"></div>
              <div className="h-5 bg-gray-600 rounded"></div>
              <div className="h-5 bg-gray-600 rounded mt-4"></div>
              <div className="h-5 bg-gray-600 rounded"></div>
            </div>
            {/* Connecting Lines 1 */}
            <div className="flex flex-col gap-12 w-6">
               <div className="border-t-2 border-r-2 border-b-2 border-brandRed h-10 w-full mt-2"></div>
               <div className="border-t-2 border-r-2 border-b-2 border-gray-600 h-10 w-full mb-2"></div>
            </div>
            {/* Round 2 (2 boxes) */}
            <div className="flex flex-col gap-10 w-16">
              <div className="h-5 bg-gray-500 rounded"></div>
              <div className="h-5 bg-gray-600 rounded"></div>
            </div>
             {/* Connecting Lines 2 */}
            <div className="flex flex-col w-6">
               <div className="border-t-2 border-r-2 border-b-2 border-brandRed h-16 w-full"></div>
            </div>
            {/* Final (1 box) */}
            <div className="flex flex-col w-16">
              <div className="h-5 bg-gray-400 rounded"></div>
            </div>
          </div>
        </div>

        {/* 2. UPCOMING - Cards Section */}
        <div className="col-span-1 flex flex-col gap-4">
          <h3 className="text-white font-bold text-lg uppercase mb-2 tracking-wider">Upcoming</h3>
          
          <div className="bg-cardBg border border-gray-800 rounded-md p-5 hover:border-gray-600 transition-colors">
            <h4 className="text-lg font-bold text-white mb-4">Event in Mumbai</h4>
            <div className="flex justify-between text-sm text-gray-400 mb-6">
              <div><span className="block text-xs text-gray-500 mb-1">Date</span><span className="text-white font-medium">11/11/25</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Location</span><span className="text-white font-medium">BKC</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Category</span><span className="text-white font-medium">Lorem</span></div>
            </div>
            <button className="w-full py-2 bg-brandRed hover:bg-red-600 text-white font-bold rounded uppercase transition-colors text-sm">Register</button>
          </div>
          
          <div className="bg-cardBg border border-gray-800 rounded-md p-5 hover:border-gray-600 transition-colors">
            <h4 className="text-lg font-bold text-white mb-4">Event in Delhi</h4>
            <div className="flex justify-between text-sm text-gray-400 mb-6">
              <div><span className="block text-xs text-gray-500 mb-1">Date</span><span className="text-white font-medium">11/11/25</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Location</span><span className="text-white font-medium">BKC</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Category</span><span className="text-white font-medium">Lorem</span></div>
            </div>
            <button className="w-full py-2 bg-brandRed hover:bg-red-600 text-white font-bold rounded uppercase transition-colors text-sm">Register</button>
          </div>
        </div>

        {/* 3. PAST RESULTS - List Section */}
        <div className="col-span-1 bg-cardBg border border-gray-800 rounded-md p-6">
          <h3 className="text-white font-bold text-lg uppercase mb-6 tracking-wider">Past Results</h3>
          <div className="flex flex-col gap-5">
            <div className="border-b border-gray-800 pb-4">
              <h4 className="text-white font-bold text-md mb-1">Bengaluru Regionals</h4>
              <p className="text-gray-500 text-sm">Lorem Ipsum</p>
            </div>
            <div className="border-b border-gray-800 pb-4">
              <h4 className="text-white font-bold text-md mb-1">Bengaluru Regionals</h4>
              <p className="text-gray-500 text-sm">Lorem Ipsum</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-md mb-1">Bengaluru Regionals</h4>
              <p className="text-gray-500 text-sm">Lorem Ipsum</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Competitions;