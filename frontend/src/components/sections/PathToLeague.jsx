import React from 'react';

const PathToLeague = () => {
  const steps = [
    { id: 1, title: 'BUILD YOUR\nTEAM', icon: '🛠️' },
    { id: 2, title: 'COMPETE ACROSS\nINDIA', icon: '🏛️' },
    { id: 3, title: 'EARN NATIONAL\nRANKING & VALUE', icon: '📊' },
    { id: 4, title: 'JOIN THE\nLEAGUE', icon: '👥' }
  ];

  return (
    <section className="w-full py-20 px-8 bg-darkBg flex flex-col items-center text-center border-b border-gray-800">
      
      {/* Headings */}
      <p className="text-brandRed font-bold text-sm tracking-widest uppercase mb-2">User Journey</p>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 uppercase tracking-wide">
        Your Path to the League
      </h2>
      <p className="text-gray-500 text-sm mb-16 max-w-lg">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </p>

      {/* 4 Steps Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl relative gap-12 md:gap-0">
        
        {/* Horizontal Blue Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[48px] left-[12%] right-[12%] h-[2px] bg-blue-700 z-0"></div>

        {steps.map((step) => (
          <div key={step.id} className="flex-1 flex flex-col items-center relative z-10 w-full">
            
            {/* Neon Blue Circle with Icon */}
            <div className="w-24 h-24 rounded-full border-[3px] border-blue-700 bg-[#0a0a0c] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(29,78,216,0.5)]">
              <span className="text-3xl">{step.icon}</span>
            </div>

            {/* Step Text */}
            <p className="text-brandRed font-bold text-sm mb-2 uppercase">Step {step.id}</p>
            <h3 className="text-white font-bold text-sm uppercase whitespace-pre-line leading-relaxed">
              {step.title}
            </h3>
          </div>
        ))}
      </div>

    </section>
  );
};

export default PathToLeague;