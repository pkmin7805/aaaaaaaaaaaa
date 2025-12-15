import React from 'react';
import { HardHat, Bell, User, LogOut } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onTabChange }) => {
  const tabs = [
    { id: 'dashboard', label: '대시보드' },
    { id: 'projects', label: '프로젝트 현황' },
    { id: 'safety', label: '안전 관리' },
    { id: 'schedule', label: '일정표' },
  ];

  return (
    <nav className="bg-primary-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onTabChange('dashboard')}>
            <div className="bg-white/10 p-2 rounded-lg">
              <HardHat size={24} className="text-accent-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-none">태림지반</span>
              <span className="text-[10px] text-slate-300 font-light tracking-widest">INTEGRATED SYSTEM</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden md:flex space-x-1 h-full items-end">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-3 text-sm font-medium rounded-t-lg transition-colors ${
                  currentTab === tab.id
                    ? 'bg-slate-100 text-primary-900'
                    : 'text-slate-300 hover:text-white hover:bg-primary-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-300 hover:text-white transition">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-primary-900"></span>
            </button>
            <div className="flex items-center gap-2 border-l border-primary-700 pl-4">
              <div className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center">
                <User size={16} />
              </div>
              <div className="hidden lg:block text-right">
                <div className="text-xs font-bold">김태림 소장</div>
                <div className="text-[10px] text-slate-400">현장관리팀</div>
              </div>
            </div>
            <button className="p-2 text-slate-300 hover:text-white transition">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Tab Fallback */}
      <div className="md:hidden flex overflow-x-auto bg-primary-800 px-2 py-2 gap-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap ${
              currentTab === tab.id
                ? 'bg-accent-600 text-white'
                : 'bg-primary-900 text-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};