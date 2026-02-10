
import React from 'react';
import { Page } from '../types';

interface SidebarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate, isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: Page.Dashboard, icon: 'fa-layer-group', label: 'Hub' },
    { id: Page.Intelligence, icon: 'fa-brain', label: 'Intelligence' },
    { id: Page.Forge, icon: 'fa-fire-alt', label: 'The Forge' },
    { id: Page.Settings, icon: 'fa-cog', label: 'Systems' },
  ];

  return (
    <aside className={`h-screen glass-dark border-r border-white/5 flex flex-col transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-6 flex items-center justify-between">
        {isOpen && <span className="font-outfit font-bold text-xl">INE Hub</span>}
        <button onClick={toggleSidebar} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
          <i className={`fas ${isOpen ? 'fa-chevron-left' : 'fa-bars'} text-gray-400`}></i>
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-2 mt-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group ${
              activePage === item.id 
                ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10 text-white shadow-lg' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <i className={`fas ${item.icon} text-lg w-6 flex justify-center ${activePage === item.id ? 'text-purple-400' : 'group-hover:text-purple-300'}`}></i>
            {isOpen && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className={`glass p-4 rounded-2xl flex items-center gap-3 ${!isOpen && 'justify-center p-2'}`}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
            <i className="fas fa-rocket text-xs"></i>
          </div>
          {isOpen && (
            <div>
              <p className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Pro Account</p>
              <p className="text-sm font-semibold">Evolution Tier</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
