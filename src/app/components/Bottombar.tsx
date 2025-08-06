"use client";
import React, { useState, useEffect } from 'react';
import { FaUser, FaCode, FaBriefcase, FaFileAlt, FaDesktop, FaEnvelope } from 'react-icons/fa';
import { useTheme } from './theme/themeContext';

const Bottombar = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const tabs = [
    { id: 'about', name: 'About', icon: <FaUser />, section: 'About' },
    { id: 'skills', name: 'Skills', icon: <FaCode />, section: 'Skills' },
    { id: 'portfolio', name: 'Portfolio', icon: <FaBriefcase />, section: 'Portfolio' },
    { id: 'resume', name: 'Resume', icon: <FaFileAlt />, section: 'Resume' },
   
    { id: 'contact', name: 'Contact', icon: <FaEnvelope />, section: 'Contact' },
  ];

  // Auto-hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Smooth scroll to section
  interface Tab {
    id: string;
    name: string;
    icon: React.ReactNode;
    section: string;
  }

  const handleTabClick = (tab: Tab): void => {
    setActiveTab(tab.id);
    
    const element = document.getElementById(tab.section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Detect current section on scroll
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = tabs.map(tab => ({
        id: tab.id,
        element: document.getElementById(tab.section)
      }));

      let currentSection = tabs[0].id;

      sections.forEach(({ id, element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            currentSection = id;
          }
        }
      });

      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className={`
      fixed bottom-0 left-0 right-0 z-50 md:hidden
      transform transition-transform duration-300 ease-in-out
      ${isVisible ? 'translate-y-0' : 'translate-y-full'}
    `}>
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80"></div>
      
      {/* Navigation */}
      <nav className="relative theme-bg-card/90 backdrop-blur-md border-t theme-border shadow-2xl">
        {/* Active indicator line */}
        <div 
          className="absolute top-0 left-0 h-0.5 bg-[#78ABA8] transition-all duration-300 ease-out"
          style={{
            width: `${100 / tabs.length}%`,
            transform: `translateX(${tabs.findIndex(tab => tab.id === activeTab) * 100}%)`
          }}
        />
        
        <div className="flex justify-around items-center py-3 px-2 max-w-md mx-auto">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`
                  relative flex flex-col items-center justify-center p-2 rounded-xl 
                  transition-all duration-300 ease-out min-w-[56px] group
                  ${isActive
                    ? 'transform -translate-y-1'
                    : 'hover:transform hover:-translate-y-0.5'
                  }
                `}
              >
                {/* Icon container with background */}
                <div className={`
                  relative p-2 rounded-xl transition-all duration-300
                  ${isActive
                    ? 'bg-[#78ABA8] text-white shadow-lg shadow-[#78ABA8]/30'
                    : 'theme-text-secondary group-hover:theme-text-primary group-hover:bg-[#78ABA8]/10'
                  }
                `}>
                  <div className={`
                    text-lg transition-transform duration-200
                    ${isActive ? 'scale-110' : 'group-hover:scale-105'}
                  `}>
                    {tab.icon}
                  </div>
                  
                  {/* Active dot indicator */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                  )}
                </div>
                
                {/* Label */}
                <span className={`
                  text-xs font-medium mt-1 transition-all duration-200
                  ${isActive
                    ? 'text-[#78ABA8] font-semibold'
                    : 'theme-text-secondary group-hover:theme-text-primary'
                  }
                `}>
                  {tab.name}
                </span>

                {/* Ripple effect on tap */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className={`
                    absolute inset-0 bg-[#78ABA8]/20 rounded-xl transform scale-0 
                    group-active:scale-100 transition-transform duration-150
                  `} />
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Safe area for iPhone home indicator */}
        <div className="h-safe-area-inset-bottom" />
      </nav>
    </div>
  );
};

export default Bottombar;