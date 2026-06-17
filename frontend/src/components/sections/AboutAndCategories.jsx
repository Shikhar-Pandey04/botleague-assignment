import React from 'react';
// Tumhari main graphic
import botleagueGraphic from '../../assets/botleague-graphic.png'; 
// Tumhare charo naye icons
import iconMini from '../../assets/icon-mini.png';
import iconJunior from '../../assets/icon-junior.png';
import iconYoung from '../../assets/icon-young.png';
import iconRobo from '../../assets/icon-robo.png';

const AboutAndCategories = () => {
  return (
    <section className="w-full px-8 md:px-16 py-16 bg-darkBg border-b border-gray-800">
      
      {/* --- WHAT IS BOTLEAGUE SECTION --- */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10 uppercase tracking-wide">
          What is Botleague?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Left Side Points */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            <div>
              <span className="text-brandRed font-bold text-xl block mb-2">1.</span>
              <h3 className="text-white font-bold text-lg uppercase mb-2">Structured Events</h3>
              <p className="text-gray-400 text-sm">"From one-off events to a year-round competitive season."</p>
            </div>
            <div>
              <span className="text-brandRed font-bold text-xl block mb-2">2.</span>
              <h3 className="text-white font-bold text-lg uppercase mb-2">Digital Identity</h3>
              <p className="text-gray-400 text-sm">"Your professional robotics legacy, tracked and verified."</p>
            </div>
            <div>
              <span className="text-brandRed font-bold text-xl block mb-2">3.</span>
              <h3 className="text-white font-bold text-lg uppercase mb-2">National Ranking</h3>
              <p className="text-gray-400 text-sm">"Benchmark your skills against the best engineers in India."</p>
            </div>
            <div>
              <span className="text-brandRed font-bold text-xl block mb-2">4.</span>
              <h3 className="text-white font-bold text-lg uppercase mb-2">Career Pathway</h3>
              <p className="text-gray-400 text-sm">"Turning arena victories into real-world industry opportunities."</p>
            </div>
          </div>
          
          {/* Right Side Graphic */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <img 
              src={botleagueGraphic} 
              alt="Botleague Concept Graphic" 
              className="w-full max-w-[300px] object-contain opacity-90"
            />
          </div>
        </div>
      </div>

      {/* --- CATEGORIES SECTION --- */}
      <div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10 uppercase tracking-wide">
          Categories
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Category 1 */}
          <div className="bg-cardBg border border-brandOrange rounded-md p-6 relative cursor-pointer hover:bg-gray-800 transition-colors">
            <div className="absolute top-0 right-0 border-t-[30px] border-l-[30px] border-t-brandOrange border-l-transparent"></div>
            <img src={iconMini} alt="Mini Makers" className="h-14 mb-6 object-contain" />
            <h3 className="text-white font-bold text-xl uppercase mb-2">Mini<br/>Makers</h3>
            <p className="text-gray-400 text-sm mb-6">Where Creativity Meets Logic.</p>
            <button className="text-brandRed font-bold text-sm hover:text-red-400 uppercase">Learn More →</button>
          </div>

          {/* Category 2 */}
          <div className="bg-cardBg border border-gray-800 rounded-md p-6 relative cursor-pointer hover:border-gray-600 transition-colors">
            <div className="absolute top-4 right-4 bg-brandRed text-white text-[10px] px-2 py-1 font-bold rounded">PremJagtap</div>
            <img src={iconJunior} alt="Junior Innovators" className="h-14 mb-6 object-contain" />
            <h3 className="text-white font-bold text-xl uppercase mb-2">Junior<br/>Innovators</h3>
            <p className="text-gray-400 text-sm mb-6">Engineering & Strategy Fundamentals.</p>
            <button className="text-brandRed font-bold text-sm hover:text-red-400 uppercase">Learn More →</button>
          </div>

          {/* Category 3 */}
          <div className="bg-cardBg border border-gray-800 rounded-md p-6 cursor-pointer hover:border-gray-600 transition-colors">
            <img src={iconYoung} alt="Young Engineers" className="h-14 mb-6 object-contain" />
            <h3 className="text-white font-bold text-xl uppercase mb-2">Young<br/>Engineers</h3>
            <p className="text-gray-400 text-sm mb-6">Advanced Wireless & Autonomous Control.</p>
            <button className="text-brandRed font-bold text-sm hover:text-red-400 uppercase">Learn More →</button>
          </div>

          {/* Category 4 */}
          <div className="bg-cardBg border border-gray-800 rounded-md p-6 cursor-pointer hover:border-gray-600 transition-colors">
            <img src={iconRobo} alt="Robo Minds" className="h-14 mb-6 object-contain" />
            <h3 className="text-white font-bold text-xl uppercase mb-2">Robo<br/>Minds</h3>
            <p className="text-gray-400 text-sm mb-6">Elite Professional Sports & Robotics.</p>
            <button className="text-brandRed font-bold text-sm hover:text-red-400 uppercase">Learn More →</button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutAndCategories;