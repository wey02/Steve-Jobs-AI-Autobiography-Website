import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { Story1974 } from '../components/Story1974';
import timelineEvents from '../data/timeline_events.json';

export const MilestoneDetail: React.FC = () => {
  const { year } = useParams<{ year: string }>();
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Use a slightly longer delay to ensure DOM is fully painted and layout is stable
    const timer = setTimeout(() => {
      if (heroRef.current) {
        // Scroll such that the hero content is centered in the viewport
        heroRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        heroRef.current.focus();
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [year]);
  
  const milestone = timelineEvents.find(e => e.year === year);

  if (!milestone) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="text-center">
          <h1 className="text-4xl font-light mb-8">Milestone Not Found</h1>
          <Link to="/journey" className="text-sm font-mono uppercase tracking-widest hover:underline">
            Back to Journey
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen pt-32 pb-20 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            to={`/journey#${milestone.year}`} 
            className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-colors ${theme === 'dark' ? 'text-white/50 hover:text-white' : 'text-black/50 hover:text-black'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Journey
          </Link>
        </motion.div>

        {year === '1974' ? (
          <Story1974 />
        ) : (
          <div 
            ref={heroRef}
            tabIndex={-1}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start outline-none"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={`text-sm font-mono uppercase tracking-[0.4em] mb-4 block ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                {milestone.year}
              </span>
              <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-tight mb-8">
                {milestone.title}
              </h1>
              <div className={`prose prose-lg ${theme === 'dark' ? 'prose-invert' : ''} max-w-none`}>
                <p className="text-xl font-light leading-relaxed mb-8 text-inherit opacity-80">
                  {milestone.description}
                </p>
                <p className="text-lg font-light leading-relaxed mb-8 opacity-60">
                  This milestone represents a pivotal moment in the history of innovation. It was during this time that the foundations for future breakthroughs were laid, driven by a relentless pursuit of excellence and a vision that challenged the status quo.
                </p>
                <div className="flex flex-wrap gap-4 mt-12">
                  <button className={`px-8 py-4 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${theme === 'dark' ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}>
                    Deep Dive Analysis
                  </button>
                  <button className={`px-8 py-4 rounded-full border text-xs font-mono uppercase tracking-widest transition-all ${theme === 'dark' ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/10'}`}>
                    View Archive
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl h-[60vh] md:h-auto"
            >
              <img 
                src={milestone.image} 
                alt={milestone.title}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: 'center' }}
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/60 to-transparent' : 'bg-gradient-to-t from-white/40 to-transparent'}`} />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
