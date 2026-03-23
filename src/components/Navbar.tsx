import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import { Search, Volume2, VolumeX, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const { isPlaying, togglePlay } = useAudio();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Listen for highlight-search event
  useEffect(() => {
    const handleHighlight = () => {
      setIsHighlighted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsHighlighted(false), 3000); // Highlight for 3 seconds
    };

    window.addEventListener('highlight-search', handleHighlight);
    return () => window.removeEventListener('highlight-search', handleHighlight);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Journey', path: '/journey' },
    { name: 'Wisdom', path: '/wisdom' },
    { name: 'Documentary', path: '/documentary' },
    { name: 'Talk to Steve', path: '/talk-to-steve' },
  ];

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 bg-black border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left Side: Apple Logo */}
        <div className="flex items-center">
          <Link 
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 transition-colors duration-500 hover:opacity-70 text-white"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M17.05 20.28c-.96.95-2.06 1.72-3.3 1.72-1.2 0-1.6-.74-3.1-.74-1.5 0-1.94.72-3.1.72-1.24 0-2.34-.77-3.3-1.72-2-1.98-3.05-5.1-3.05-8.1 0-3 1.88-4.6 3.7-4.6 1.02 0 1.8.54 2.5 1.04.5.36.9.72 1.25.72.35 0 .75-.36 1.25-.72.7-.5 1.48-1.04 2.5-1.04 1.82 0 3.7 1.6 3.7 4.6 0 3-1.05 6.12-3.05 8.12zM12 5.5c0-1.6 1.3-2.9 2.9-2.9.1 0 .2 0 .3 0-.1-1.6-1.4-2.9-3-2.9-1.6 0-2.9 1.3-2.9 2.9 0 .1 0 .2 0 .3 1.6-.1 2.9-1.3 2.9-2.9z" />
            </svg>
          </Link>
        </div>

        {/* Right Side: Navigation Items */}
        <div className="flex items-center gap-4 lg:gap-8">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-all hover:opacity-100 ${
                  location.pathname === item.path 
                    ? 'text-white' 
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Audio Toggle - Desktop & Mobile */}
            <button 
              onClick={togglePlay}
              className="p-2 transition-all hover:scale-110 text-white/50 hover:text-white"
              title={isPlaying ? "Mute Background Music" : "Play Background Music"}
            >
              {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>

            {/* Theme Toggle - Desktop & Mobile */}
            <button 
              onClick={toggleTheme}
              className="p-2 transition-all hover:scale-110 text-white/50 hover:text-white"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Search Bar (Trigger) - Desktop & Mobile */}
            <motion.button 
              onClick={onSearchClick}
              animate={isHighlighted ? {
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0 rgba(16, 185, 129, 0)",
                  "0 0 20px rgba(16, 185, 129, 0.5)",
                  "0 0 0 rgba(16, 185, 129, 0)"
                ],
                borderColor: [
                  "rgba(255, 255, 255, 0.1)",
                  "rgba(16, 185, 129, 0.8)",
                  "rgba(255, 255, 255, 0.1)"
                ]
              } : {}}
              transition={{ duration: 1, repeat: isHighlighted ? 3 : 0 }}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border transition-all group ${
                isHighlighted ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <Search className={`w-4 h-4 transition-transform group-hover:scale-110 ${isHighlighted ? 'text-emerald-500' : 'text-white/60'}`} />
              <span className={`text-[10px] font-mono uppercase tracking-widest hidden sm:inline ${isHighlighted ? 'text-emerald-500' : 'text-white/40'}`}>Search</span>
            </motion.button>

            {/* Hamburger Menu Toggle - Mobile Only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 lg:hidden transition-all hover:scale-110 text-white/50 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-black/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-6 py-12 flex flex-col gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`text-2xl font-light tracking-[0.1em] transition-all ${
                      location.pathname === item.path 
                        ? 'text-white' 
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-12 border-t border-white/10"
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-white/20">
                  Think Different
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
