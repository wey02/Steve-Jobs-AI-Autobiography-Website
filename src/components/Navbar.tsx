import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import { Search, Volume2, VolumeX, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const { isPlaying, togglePlay } = useAudio();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Homepage', path: '/' },
    { name: 'The Journey', path: '/journey' },
    { name: 'Wisdom', path: '/wisdom' },
    { name: 'Documentary', path: '/documentary' },
    { name: 'Talk to Steve', path: '/talk-to-steve' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-500 ${theme === 'dark' ? 'bg-black/70 border-white/10' : 'bg-white/70 border-black/10'}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Apple Logo */}
        <div className="flex items-center">
          <Link 
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`w-8 h-8 transition-colors duration-500 hover:opacity-70 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M17.05 20.28c-.96.95-2.06 1.72-3.3 1.72-1.2 0-1.6-.74-3.1-.74-1.5 0-1.94.72-3.1.72-1.24 0-2.34-.77-3.3-1.72-2-1.98-3.05-5.1-3.05-8.1 0-3 1.88-4.6 3.7-4.6 1.02 0 1.8.54 2.5 1.04.5.36.9.72 1.25.72.35 0 .75-.36 1.25-.72.7-.5 1.48-1.04 2.5-1.04 1.82 0 3.7 1.6 3.7 4.6 0 3-1.05 6.12-3.05 8.12zM12 5.5c0-1.6 1.3-2.9 2.9-2.9.1 0 .2 0 .3 0-.1-1.6-1.4-2.9-3-2.9-1.6 0-2.9 1.3-2.9 2.9 0 .1 0 .2 0 .3 1.6-.1 2.9-1.3 2.9-2.9z" />
            </svg>
          </Link>
        </div>

        {/* Right Side: Navigation Items */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-all hover:opacity-100 ${
                  location.pathname === item.path 
                    ? (theme === 'dark' ? 'text-white' : 'text-black') 
                    : (theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black')
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Audio Toggle */}
            <button 
              onClick={togglePlay}
              className={`p-2 transition-all hover:scale-110 ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
              title={isPlaying ? "Mute Background Music" : "Play Background Music"}
            >
              {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2 transition-all hover:scale-110 ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Search Bar (Trigger) */}
            <button 
              onClick={onSearchClick}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all group ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/10 hover:bg-black/10'}`}
            >
              <Search className={`w-4 h-4 transition-transform group-hover:scale-110 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} />
              <span className={`text-[10px] font-mono uppercase tracking-widest hidden sm:inline ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Search</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
