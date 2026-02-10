
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Intelligence from './components/Intelligence';
import Forge from './components/Forge';
import Settings from './components/Settings';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Dashboard);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (currentPage) {
      case Page.Dashboard:
        return <Dashboard />;
      case Page.Intelligence:
        return <Intelligence />;
      case Page.Forge:
        return <Forge />;
      case Page.Settings:
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#050505] text-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <Sidebar 
        activePage={currentPage} 
        onNavigate={setCurrentPage} 
        isOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
      />
      
      <main className={`flex-1 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'ml-0' : 'ml-0'}`}>
        <div className="max-w-7xl mx-auto p-6 lg:p-10">
          <header className="mb-10 flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-outfit font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                Ine<span className="text-purple-500">.</span>
              </h1>
              <p className="text-gray-400 mt-1 uppercase text-xs tracking-[0.2em] font-medium">Innovation & Evolution</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="glass p-2 px-4 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                System Active
              </button>
              <img src="https://picsum.photos/40" className="w-10 h-10 rounded-full border border-white/10" alt="Profile" />
            </div>
          </header>

          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
