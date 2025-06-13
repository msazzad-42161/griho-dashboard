import React, { useState } from 'react';
import { SideBar } from '../stories/common/Navigation/SideBar/SideBar';
import { Header } from '@/stories/common/Header';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface LanguageFontProps {
  children: React.ReactNode;
  className?: string;
}


const Layout: React.FC<LanguageFontProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { i18n } = useTranslation();

  return (
    <div className={cn("flex flex-row bg-background h-screen w-screen overflow-hidden", i18n.language === 'bn' ? ['font-bn',
        'leading-relaxed',
        '[&_h1]:font-bold',
        '[&_h2]:font-semibold',
        '[&_p]:font-normal',] : ['font-en','leading-normal'])}>
      {/* Mobile sidebar overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />
      
      {/* Sidebar with responsive classes */}
      <div className={`fixed lg:static lg:translate-x-0 z-30 transition-transform duration-300 h-full ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <SideBar onClose={() => setIsSidebarOpen(false)} />
      </div>

      <div className="flex-grow flex flex-col h-screen overflow-hidden">
        <Header 
          user={{name:"Sazzadul Islam"}}
          onMenuClick={() => setIsSidebarOpen(true)}
        />
        <main className="flex-grow overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
