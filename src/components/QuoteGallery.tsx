import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import quotes from '../data/jobs_quotes.json';
import { Quote, RefreshCw } from 'lucide-react';

export const QuoteGallery: React.FC = () => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();
  const [filter, setFilter] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const topics = Array.from(new Set(quotes.map(q => q.topic)));
  const filteredQuotes = filter ? quotes.filter(q => q.topic === filter) : quotes;
  const currentQuote = filteredQuotes[currentIndex] || filteredQuotes[0];

  const handleNextQuote = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    playSFX('notification');
    
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredQuotes.length);
      setIsAnimating(false);
    }, 500);
  };

  const handleFilterChange = (newFilter: string | null) => {
    if (newFilter === filter) return;
    playSFX('click');
    setIsAnimating(true);
    
    setTimeout(() => {
      setFilter(newFilter);
      setCurrentIndex(0);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(handleNextQuote, 15000);
    return () => clearInterval(interval);
  }, [filter, currentIndex]);

  return (
    <section id="wisdom" className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-light tracking-tight mb-6"
            >
              Wisdom & Quotes
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-lg md:text-xl transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
            >
              Timeless insights from a life dedicated to excellence.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <button 
              onClick={() => handleFilterChange(null)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${!filter ? (theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white shadow-lg shadow-black/10') : (theme === 'dark' ? 'bg-white/5 text-white/60 hover:bg-white/10' : 'bg-black/5 text-black/60 hover:bg-black/10')}`}
            >
              All
            </button>
            {topics.map(topic => (
              <button 
                key={topic}
                onClick={() => handleFilterChange(topic)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${filter === topic ? (theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white shadow-lg shadow-black/10') : (theme === 'dark' ? 'bg-white/5 text-white/60 hover:bg-white/10' : 'bg-black/5 text-black/60 hover:bg-black/10')}`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${filter}-${currentIndex}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl text-center"
            >
              <Quote className={`w-12 h-12 mx-auto mb-8 transition-colors duration-500 ${theme === 'dark' ? 'text-white/10' : 'text-black/10'}`} />
              <h3 className={`text-3xl md:text-5xl font-light leading-tight mb-12 italic transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                "{currentQuote.text}"
              </h3>
              <div className="flex flex-col items-center">
                <span className={`uppercase tracking-widest text-xs mb-4 transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>— {currentQuote.author}</span>
                <div className={`h-px w-12 transition-colors duration-500 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}></div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={() => handleNextQuote()}
            disabled={isAnimating}
            className={`absolute bottom-0 right-0 p-4 rounded-full transition-all group ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'}`}
          >
            <RefreshCw className={`w-6 h-6 transition-all ${isAnimating ? 'animate-spin' : ''} ${theme === 'dark' ? 'text-white/60 group-hover:text-white' : 'text-black/60 group-hover:text-black'}`} />
          </button>
        </div>
      </div>
    </section>
  );
};
