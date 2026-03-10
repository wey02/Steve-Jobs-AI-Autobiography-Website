import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import timelineEvents from '../data/timeline_events.json';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export const Timeline: React.FC = () => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();
  const [selectedEvent, setSelectedEvent] = useState<typeof timelineEvents[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      playSFX('transition');
    }
  };

  return (
    <section id="journey" className={`py-24 overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-6 mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-light tracking-tight mb-4"
        >
          The Journey
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`max-w-xl transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
        >
          A chronological exploration of the milestones that defined a legacy.
        </motion.p>
      </div>

      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-black/5 hover:bg-black/10'}`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto px-6 pb-12 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-80 snap-center cursor-pointer"
              onClick={() => {
                setSelectedEvent(event);
                playSFX('click');
              }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group/card mb-4">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-xs font-mono text-white/60 mb-1 block">{event.year}</span>
                  <h3 className="text-xl font-medium text-white">{event.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100'}`}
            >
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 aspect-square md:aspect-auto">
                  <img 
                    src={selectedEvent.image} 
                    alt={selectedEvent.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/2 p-12 flex flex-col justify-center">
                  <span className={`text-sm font-mono mb-2 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>{selectedEvent.year} • {selectedEvent.topic}</span>
                  <h3 className={`text-4xl font-light mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{selectedEvent.title}</h3>
                  <p className={`leading-relaxed text-lg mb-8 transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedEvent.description}
                  </p>
                  <div className={`h-px w-12 transition-colors duration-500 ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
