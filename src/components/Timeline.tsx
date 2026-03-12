import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import timelineEvents from '../data/timeline_events.json';
import { ArrowRight } from 'lucide-react';

export const Timeline: React.FC = () => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax effect for content
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setActiveIndex(index);
          playSFX('transition');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    
    const sections = document.querySelectorAll('.timeline-section');
    sections.forEach((section) => observer.observe(section));
    
    return () => observer.disconnect();
  }, [playSFX]);

  return (
    <div className="relative">
      {/* Page Header Section */}
      <div className={`pt-32 pb-24 text-center px-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            The Journey of a Visionary
          </h1>
          <p className={`text-xl md:text-2xl font-light max-w-2xl mx-auto transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            Walk through the setbacks, breakthroughs, and revolutions that changed everything.
          </p>
        </motion.div>
      </div>

      <section id="journey" ref={containerRef} className="relative min-h-screen transition-colors duration-500">
        {/* Fixed Background Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={timelineEvents[activeIndex].image} 
                alt={timelineEvents[activeIndex].title}
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 transition-colors duration-500 ${theme === 'dark' ? 'bg-black/60' : 'bg-white/60'}`}></div>
            </motion.div>
          </AnimatePresence>
          
          {/* Gradient Overlays */}
          <div className={`absolute inset-0 bg-gradient-to-b transition-colors duration-500 ${theme === 'dark' ? 'from-black via-transparent to-black' : 'from-white via-transparent to-white'}`}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-12 lg:gap-24">
          {/* Left Rail: Sticky Progress Line */}
          <div className="hidden md:block w-32 lg:w-48 relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
              {/* Vertical Line */}
              <div className={`absolute h-3/4 w-px transition-colors duration-500 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}>
                <motion.div 
                  className={`absolute top-0 left-0 w-full origin-top transition-colors duration-500 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
                  style={{ scaleY }}
                />
              </div>

              {/* Year Markers */}
              <div className="relative h-3/4 flex flex-col justify-between py-4">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="relative flex items-center justify-center"
                    animate={{
                      scale: activeIndex === index ? 1.4 : 1,
                      opacity: activeIndex === index ? 1 : 0.3
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
                    <span className={`absolute right-8 text-xs font-mono transition-colors duration-500 whitespace-nowrap ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      {event.year}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Content */}
          <div className="flex-1">
            {timelineEvents.map((event, index) => (
              <div 
                key={event.id} 
                data-index={index}
                className="timeline-section min-h-screen flex flex-col justify-center py-24 md:py-0"
              >
                <motion.div
                  style={{ y: yContent }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-2xl mx-auto text-center"
                >
                  <span className={`text-sm font-mono uppercase tracking-[0.4em] mb-6 block transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                    {event.year}
                  </span>
                  <h2 className={`text-5xl md:text-8xl font-light tracking-tighter leading-none mb-8 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                    {event.title}
                  </h2>
                  <p className={`text-xl md:text-2xl font-light leading-relaxed mb-12 transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {event.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => playSFX('click')}
                    className={`group inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.3em] transition-colors duration-500 ${theme === 'dark' ? 'text-white hover:text-white/70' : 'text-black hover:text-black/70'}`}
                  >
                    {event.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </motion.button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Year Indicator */}
        <div className="md:hidden fixed bottom-8 right-8 z-30">
          <div className={`px-4 py-2 rounded-full backdrop-blur-md border transition-colors duration-500 ${theme === 'dark' ? 'bg-white/10 border-white/20 text-white' : 'bg-black/10 border-black/20 text-black'}`}>
            <span className="text-xs font-mono font-bold">{timelineEvents[activeIndex].year}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
