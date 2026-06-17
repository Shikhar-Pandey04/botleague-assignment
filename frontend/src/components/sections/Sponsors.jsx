import React from 'react';

// Ab humne ekdum simple naam import kiye hain, Vite confuse nahi hoga
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';

const Sponsors = () => {
  const sponsorsList = [
    { id: 1, name: 'NIT DELHI', logo: logo1 },
    { id: 2, name: 'INDIAN BIT', logo: logo2 },
    { id: 3, name: 'NIT SILCHAR', logo: logo3 },
    { id: 4, name: 'ROBO COMPANY', logo: logo4 },
    { id: 5, name: 'IIT BOMBAY', logo: logo5 },
    { id: 6, name: 'ROBO COMPANY', logo: logo6 },
  ];

  return (
    <section className="w-full px-8 md:px-16 py-16 bg-darkBg border-b border-gray-800">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-16 uppercase tracking-wide">
        Sponsors
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 max-w-6xl mx-auto">
        {sponsorsList.map((sponsor) => (
          <div key={sponsor.id} className="flex items-center gap-6 group cursor-pointer">
            
            {/* Logo Image Wrapper */}
            <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center bg-transparent">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0" 
              />
            </div>
            
            {/* Sponsor Name */}
            <h3 className="text-gray-400 group-hover:text-white font-bold text-lg md:text-xl uppercase tracking-wider transition-colors duration-300">
              {sponsor.name}
            </h3>
            
          </div>
        ))}
      </div>

    </section>
  );
};

export default Sponsors;