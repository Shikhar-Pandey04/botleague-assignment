import React from 'react';

// --- SPORTS KI NAYI PHOTOS YAHAN IMPORT HO RAHI HAIN (Sirf 5) ---
import sport1 from '../../assets/sport1.png';
import sport2 from '../../assets/sport2.png';
import sport3 from '../../assets/sport3.png';
import sport4 from '../../assets/sport4.png';
import sport5 from '../../assets/sport5.png';

// --- WHY REGISTER KE LAAL ICONS ---
import iconMedal from '../../assets/Vector.png';
import iconScale from '../../assets/Vector (1).png';
import iconBriefcase from '../../assets/Vector (2).png';
import iconLightning from '../../assets/Vector (3).png';

const SportsAndAdvantage = () => {
  
  // Yahan sirf 5 items reh gaye hain ab
  const sports = [
    { id: 1, name: 'Robo Race', img: sport1 },
    { id: 2, name: 'Line Follower', img: sport2 },
    { id: 3, name: 'RC Racing', img: sport3 },
    { id: 4, name: 'FPV Drone Racing & Aeromodelling', img: sport4 },
    { id: 5, name: 'Robo Hockey', img: sport5 }
  ];

  return (
    <section className="w-full px-8 md:px-16 py-16 bg-darkBg border-b border-gray-800">
      
      {/* =========================================
          SPORTS / COMPETITION DISCIPLINES SECTION
          ========================================= */}
      <div className="mb-24">
        <p className="text-brandRed font-bold text-sm tracking-widest uppercase mb-2">Sports</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10 uppercase tracking-wide">
          Competition Disciplines
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {sports.map((sport) => (
            <div key={sport.id} className="bg-cardBg rounded-lg overflow-hidden border border-gray-800 hover:border-gray-500 transition-all cursor-pointer group">
              <div className="h-40 w-full overflow-hidden">
                <img 
                  src={sport.img} 
                  alt={sport.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-4 bg-gradient-to-t from-[#0f0f11] to-cardBg">
                <h3 className="text-white font-bold text-md text-center">{sport.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          WHY REGISTER / THE LEAGUE ADVANTAGE SECTION
          ========================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Advantages List */}
        <div>
          <p className="text-brandRed font-bold text-sm tracking-widest uppercase mb-2">Why Register ?</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10 uppercase tracking-wide">
            The League Advantage
          </h2>
          
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-start">
              <img src={iconMedal} alt="Medal Icon" className="w-8 h-8 object-contain mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg uppercase mb-1">National Recognition</h3>
                <p className="text-gray-400 text-sm">"Benchmark your skills on India's official robotics leaderboard."</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <img src={iconScale} alt="Scale Icon" className="w-8 h-8 object-contain mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg uppercase mb-1">Fair Judging</h3>
                <p className="text-gray-400 text-sm">"Compete with confidence under standardized, expert-led evaluation."</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start">
              <img src={iconBriefcase} alt="Briefcase Icon" className="w-8 h-8 object-contain mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg uppercase mb-1">Career Ops</h3>
                <p className="text-gray-400 text-sm">"Bridge the gap between arena victories and top-tier tech placements."</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <img src={iconLightning} alt="Lightning Icon" className="w-8 h-8 object-contain mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg uppercase mb-1">High - Energy Eco</h3>
                <p className="text-gray-400 text-sm">"Join a nationwide community of elite innovators and robotics athletes."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Leaderboard Graphic */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm bg-[#0a0f18] border border-blue-900 rounded-xl p-6 shadow-[0_0_40px_rgba(29,78,216,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.3) 25%, rgba(59, 130, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.3) 75%, rgba(59, 130, 246, 0.3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.3) 25%, rgba(59, 130, 246, 0.3) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.3) 75%, rgba(59, 130, 246, 0.3) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}></div>
            
            <h3 className="text-center text-white font-heading tracking-widest mb-6 relative z-10">LEADERBOARD</h3>
            
            <div className="flex flex-col items-center justify-center mb-8 relative z-10">
              <div className="w-16 h-16 bg-yellow-500 rounded-md flex items-center justify-center text-black text-2xl relative mb-3">
                👤
                <span className="absolute -top-2 -right-2 text-sm bg-black rounded-full">⭐</span>
              </div>
              <p className="text-gray-300 text-xs uppercase mb-1">#01 - Player Name</p>
              <p className="text-white text-2xl font-bold tracking-wider">508754</p>
            </div>

            <div className="flex flex-col gap-3 relative z-10">
              {[
                { rank: '02', score: '22000' },
                { rank: '03', score: '20030' },
                { rank: '04', score: '19500' },
                { rank: '05', score: '15060' },
                { rank: '06', score: '13865' }
              ].map((player, idx) => (
                <div key={idx} className="flex justify-between items-center bg-[#131b2b] border border-gray-700 rounded-full px-4 py-2">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-xs font-bold w-4">{player.rank}</span>
                    <span className="text-blue-400 text-sm">👤</span>
                    <span className="text-gray-300 text-xs">Player Name</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-sm">{player.score}</span>
                    <span className="text-pink-500 text-xs">🛡️</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default SportsAndAdvantage;