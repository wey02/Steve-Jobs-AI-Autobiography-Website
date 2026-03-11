import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { AISearch } from './AISearch';
import { useTheme } from './ThemeProvider';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white selection:bg-white selection:text-black' : 'bg-white text-black selection:bg-black selection:text-white'}`}>
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      <AISearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className={`py-24 border-t transition-colors duration-500 ${theme === 'dark' ? 'bg-black border-white/5' : 'bg-white border-black/5'}`}>
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          <div className={`w-12 h-12 mb-8 opacity-20 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M17.05 20.28c-.96.95-2.06 1.72-3.3 1.72-1.2 0-1.6-.74-3.1-.74-1.5 0-1.94.72-3.1.72-1.24 0-2.34-.77-3.3-1.72-2-1.98-3.05-5.1-3.05-8.1 0-3 1.88-4.6 3.7-4.6 1.02 0 1.8.54 2.5 1.04.5.36.9.72 1.25.72.35 0 .75-.36 1.25-.72.7-.5 1.48-1.04 2.5-1.04 1.82 0 3.7 1.6 3.7 4.6 0 3-1.05 6.12-3.05 8.12zM12 5.5c0-1.6 1.3-2.9 2.9-2.9.1 0 .2 0 .3 0-.1-1.6-1.4-2.9-3-2.9-1.6 0-2.9 1.3-2.9 2.9 0 .1 0 .2 0 .3 1.6-.1 2.9-1.3 2.9-2.9.1 0 .2 0 .3 0-.1 1.6-1.4 2.9-3 2.9-1.6 0-2.9 1.3-2.9 2.9 0 .1 0 .2 0 .3 1.6-.1 2.9-1.3 2.9-2.9z" />
            </svg>
          </div>
          <p className={`text-[10px] font-mono uppercase tracking-[0.5em] mb-4 ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}>Think Different</p>
          <p className={`text-[8px] font-mono uppercase tracking-[0.2em] ${theme === 'dark' ? 'text-white/10' : 'text-black/10'}`}>© 2026 AI Studio Build. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};
