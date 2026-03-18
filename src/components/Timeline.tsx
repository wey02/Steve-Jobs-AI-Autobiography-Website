import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValueEvent } from 'motion/react';
import { useTheme } from './ThemeProvider';
import timelineEvents from '../data/timeline_events.json';
import { ArrowRight, ChevronUp } from 'lucide-react';

export const Timeline: React.FC = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(-1);
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const HEADER_IMAGE = "https://media.formapro.com/739/conversions/YPwfBGBqRFF50AGfUSqw_0_3-medium.jpg";

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const N = timelineEvents.length;
  
  // Precise mapping: each milestone's center (scrollYProgress) maps exactly to its dot position (0 to 1)
  const input = [0, ...timelineEvents.map((_, i) => (i + 0.5) / N), 1];
  const output = [0, ...timelineEvents.map((_, i) => N > 1 ? i / (N - 1) : 0), 1];
  
  const mappedProgress = useTransform(scrollYProgress, input, output);

  const scaleY = useSpring(mappedProgress, {
    stiffness: 800,
    damping: 50,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.1 / N) {
      setActiveIndex(-1);
    } else {
      // Switch active index exactly at the boundaries of the 70vh sections
      const index = Math.min(Math.floor(latest * N), N - 1);
      setActiveIndex(index);
    }
  });

  const scrollToStart = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isLastMilestone = activeIndex === timelineEvents.length - 1;
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Delay slightly to ensure layout is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="relative min-h-screen transition-colors duration-500">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-[100dvh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={activeIndex === -1 ? HEADER_IMAGE : timelineEvents[activeIndex]?.image}
              alt={activeIndex === -1 ? "Journey Intro" : timelineEvents[activeIndex]?.title}
              className="w-full h-full object-cover object-center opacity-50"
              style={{ objectPosition: 'center' }}
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/40' : 'bg-white/50'}`} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Page Header Section - Always visible first */}
      <div 
        ref={headerRef}
        className={`page-header-section pt-32 pb-48 text-center px-6 relative z-10 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className={`mb-6 text-[10px] font-mono uppercase tracking-[0.6em] transition-colors duration-500 ${theme === 'dark' ? 'text-white/50' : 'text-black/40'}`}>
            The Visionary's Path
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.85] mb-8">
            The Journey of <br />
            a <span className="font-medium italic">Visionary</span>
          </h1>
          <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed tracking-wide transition-colors duration-500 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
            Walk through the setbacks, breakthroughs, and revolutions that changed everything.
          </p>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div ref={timelineRef} className="relative">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-8 md:gap-[2rem]">
          {/* Left Column (Progress Rail) */}
          <div className="hidden md:block w-32 relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
              <div className={`w-px h-2/3 relative ${theme === 'dark' ? 'bg-white/20' : 'bg-black/20'}`}>
                <motion.div
                  className={`absolute left-0 w-full origin-top ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
                  style={{ 
                    scaleY, 
                    top: '12px', // Center of the first dot (py-2 is 8px, dot is 8px, so 8 + 4 = 12)
                    height: 'calc(100% - 24px)' // Distance between first and last dot centers
                  }}
                />
                
                {/* Year Markers */}
                <div className="absolute inset-0 flex flex-col justify-between py-2">
                  {timelineEvents.map((event, index) => (
                    <div key={event.id} className="relative flex items-center justify-center">
                      <div
                        style={{
                          transform: `scale(${activeIndex === index ? 1.5 : 1})`,
                          opacity: activeIndex === index ? 1 : 0.4,
                        }}
                        className={`absolute right-6 whitespace-nowrap text-sm font-mono transition-all duration-0 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                      >
                        {event.year}
                      </div>
                      <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-black'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Content) */}
          <div className="flex-1 relative">
            {/* Sticky Content Display Area */}
            <div className="sticky top-0 h-screen flex flex-col justify-center pointer-events-none z-10">
            <div className={`max-w-2xl mx-auto md:mx-0 text-center md:text-left pointer-events-auto transition-opacity duration-300 ${activeIndex === -1 ? 'opacity-0' : 'opacity-100'}`}>
                <span className={`text-[10px] font-mono uppercase tracking-[0.6em] mb-6 block transition-colors duration-500 ${theme === 'dark' ? 'text-white/50' : 'text-black/40'}`}>
                  {timelineEvents[activeIndex]?.year}
                </span>
                <h2 className={`text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter leading-tight mb-8 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {timelineEvents[activeIndex]?.title}
                </h2>
                <p className={`text-lg md:text-xl font-light mb-10 leading-relaxed tracking-wide transition-colors duration-500 ${theme === 'dark' ? 'text-white/80' : 'text-gray-200'}`}>
                  {timelineEvents[activeIndex]?.description}
                </p>
                <Link
                  to={`/journey/${timelineEvents[activeIndex]?.year}`}
                  className={`group relative inline-flex items-center gap-6 text-xs font-mono uppercase tracking-[0.4em] transition-all duration-500 ${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'}`}
                  aria-label={`Navigate to ${timelineEvents[activeIndex]?.title} milestone details`}
                >
                  <span className="relative z-10">{timelineEvents[activeIndex]?.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
                  <div className={`absolute -bottom-2 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${theme === 'dark' ? 'bg-white/40' : 'bg-black/40'}`}></div>
                </Link>
              </div>
            </div>

            {/* Scroll Trigger Sections */}
            <div className="relative z-0 pointer-events-none">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  id={event.year}
                  className="milestone-section h-[70vh] scroll-mt-[15vh]"
                  data-index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Arrow - Only at the end */}
      <AnimatePresence>
        {isLastMilestone && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={scrollToStart}
            aria-label="Scroll to 1974 milestone"
            className={`fixed bottom-24 right-6 md:right-12 z-50 p-4 rounded-full backdrop-blur-md border shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 ${
              theme === 'dark' 
                ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
                : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
            }`}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Mobile Year Indicator (Floating) */}
      <div className={`md:hidden fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${activeIndex === -1 ? 'opacity-0' : 'opacity-100'}`}>
        <div className={`px-4 py-2 rounded-full backdrop-blur-md border ${theme === 'dark' ? 'bg-black/50 border-white/20 text-white' : 'bg-white/50 border-black/20 text-black'}`}>
          <span className="text-sm font-mono font-bold">
            {timelineEvents[activeIndex]?.year}
          </span>
        </div>
      </div>
    </div>
  );
};
