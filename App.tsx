
import React, { useState, useEffect } from 'react';
import CaseStudy from './components/Dashboard';
import Settings from './components/Settings';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white overflow-x-hidden selection:bg-purple-500/30 font-inter">
      {/* Dynamic Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-green-900/05 blur-[100px] rounded-full" />
      </div>
      
      {/* Minimalist Floating Header - Perfectly Centered */}
      <nav className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="glass-dark px-6 md:px-8 py-3 rounded-full flex items-center justify-center border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] bg-black/60 backdrop-blur-2xl transition-all hover:border-white/20 hover:scale-[1.02] duration-300">
             <span className="font-outfit font-bold text-xs md:text-sm tracking-[0.2em] text-gray-200 uppercase whitespace-nowrap">
               Case Study <span className="text-purple-500 mx-2">•</span> Body Utopia
             </span>
          </div>
        </div>
      </nav>

      {/* Main Content Stream */}
      <main className="pt-32 pb-20 space-y-24 md:space-y-32">
        
        {/* Section 1: Case Study Story */}
        <section id="case-study" className="max-w-7xl mx-auto px-4 md:px-6">
          <CaseStudy />
        </section>

        {/* Section 2: Tech Stack / Footer */}
        <section id="about" className="max-w-7xl mx-auto px-4 md:px-6">
          <Settings />
        </section>

      </main>

      <footer className="border-t border-white/5 py-10 text-center text-gray-600 text-xs tracking-wider uppercase">
        <p>&copy; 2024 NOSH AI Automation. All systems operational.</p>
      </footer>
    </div>
  );
};

export default App;
