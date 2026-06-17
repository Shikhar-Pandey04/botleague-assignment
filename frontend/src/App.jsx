import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import Competitions from './components/sections/Competitions';
import PathToLeague from './components/sections/PathToLeague';
import AboutAndCategories from './components/sections/AboutAndCategories';
import SportsAndAdvantage from './components/sections/SportsAndAdvantage';
import JoinEcosystem from './components/sections/JoinEcosystem';
import Sponsors from './components/sections/Sponsors';
// Ye naya Footer import kiya (Dhayan dena ye layout folder se aayega)
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-darkBg text-white font-sans flex flex-col">
      <Navbar />
      
      {/* Page ka main content */}
      <main className="flex-grow">
        <HeroSection />
        <Competitions />
        <PathToLeague />
        <AboutAndCategories />
        <SportsAndAdvantage />
        <JoinEcosystem />
        <Sponsors />
      </main>
      
      {/* Page ka aakhiri Footer */}
      <Footer />
    </div>
  );
}

export default App;