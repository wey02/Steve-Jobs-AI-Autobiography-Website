import React, { useEffect } from 'react';
import { AudioProvider, useAudio } from './components/AudioProvider';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { QuoteGallery } from './components/QuoteGallery';
import { Documentary } from './components/Documentary';
import { AIMentorChat } from './components/AIMentorChat';
import { AISearch } from './components/AISearch';
import { Volume2, VolumeX, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';

const AppContent: React.FC = () => {
  const { isPlaying, togglePlay } = useAudio();
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={`min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white selection:bg-white selection:text-black' : 'bg-white text-black selection:bg-black selection:text-white'}`}>
      {/* Global Navigation / Controls */}
      <div className="fixed top-6 left-6 z-40 flex items-center gap-4">
        <button 
          onClick={togglePlay}
          className={`p-4 backdrop-blur-xl rounded-full border transition-all group ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/5'}`}
          title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        >
          {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className={`w-6 h-6 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`} />}
        </button>
        <button 
          onClick={toggleTheme}
          className={`p-4 backdrop-blur-xl rounded-full border transition-all group ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20 border-white/10' : 'bg-black/5 hover:bg-black/10 border-black/5'}`}
          title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
        <div className="hidden md:block">
          <span className={`text-[10px] font-mono uppercase tracking-[0.3em] ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Steve Jobs AI Autobiography</span>
        </div>
      </div>

      <AISearch />

      <Hero />
      <Timeline />
      <QuoteGallery />
      <Documentary />
      <AIMentorChat />

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
    </main>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <AppContent />
      </AudioProvider>
    </ThemeProvider>
  );
}
