import React from 'react';

const JoinEcosystem = () => {
  // Code lamba na ho isliye ek chota sa function bana diya jo teeno card generate karega
  const FormCard = ({ title }) => (
    <div className="bg-[#0f0f11] border border-gray-800 rounded-xl p-6 md:p-8 flex flex-col hover:border-gray-600 transition-colors">
      <h3 className="text-white font-heading font-bold text-lg md:text-xl uppercase mb-8 text-center tracking-wider">
        {title}
      </h3>
      
      <div className="flex flex-col gap-5 mb-8">
        <input 
          type="text" 
          placeholder="Name" 
          className="w-full bg-[#18181b] border border-gray-700 rounded-md px-4 py-3 text-gray-300 text-sm focus:outline-none focus:border-red-500 transition-colors"
        />
        <input 
          type="text" 
          placeholder="Location" 
          className="w-full bg-[#18181b] border border-gray-700 rounded-md px-4 py-3 text-gray-300 text-sm focus:outline-none focus:border-red-500 transition-colors"
        />
        <input 
          type="text" 
          placeholder="Enroll" 
          className="w-full bg-[#18181b] border border-gray-700 rounded-md px-4 py-3 text-gray-300 text-sm focus:outline-none focus:border-red-500 transition-colors"
        />
      </div>
      
      {/* Sign Up Button (Figma jaisa light red/coral color) */}
      <button className="w-full bg-[#ff4d4d] hover:bg-red-500 text-white font-bold text-lg uppercase py-3 rounded-md transition-colors mt-auto">
        Sign Up
      </button>
    </div>
  );

  return (
    <section className="w-full px-8 md:px-16 py-20 bg-darkBg border-b border-gray-800">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 uppercase tracking-wide">
        Join The Ecosystem
      </h2>
      
      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Note: Figma mein "BECOME IN JUDGE" likha hai, toh maine wahi likh diya hai */}
        <FormCard title="Become In Judge" />
        <FormCard title="Volunteer" />
        <FormCard title="Community Member" />
      </div>
      
    </section>
  );
};

export default JoinEcosystem;