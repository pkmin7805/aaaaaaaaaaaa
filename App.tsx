import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Projects } from './components/Projects';
import { Safety } from './components/Safety';
import { AIChatWidget } from './components/AIChatWidget';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');

  const renderContent = () => {
    switch (currentTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <Projects />;
      case 'safety':
        return <Safety />;
      default:
        return (
          <div className="flex items-center justify-center h-full text-slate-400">
            준비 중인 기능입니다.
          </div>
        );
    }
  };

  return (
    <div className="h-screen flex flex-col bg-slate-100 overflow-hidden">
      <Navbar currentTab={currentTab} onTabChange={setCurrentTab} />
      
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
      
      <AIChatWidget />
    </div>
  );
}

export default App;