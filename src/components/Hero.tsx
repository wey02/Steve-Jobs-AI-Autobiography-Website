import React from 'react';
import { motion } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen w-full flex items-center transition-colors duration-500 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-white py-20 md:py-0">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-white opacity-20"
        style={{ scaleX: useScrollProgress() }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24 relative z-20">
        {/* Left Side: Headline */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 text-[10px] font-mono uppercase tracking-[0.6em] text-white/50">
              Legacy of a Visionary
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-[0.85] mb-12 text-white">
              The <span className="font-medium italic">Visionary</span> <br />
              who <span className="font-medium">changed</span> <br />
              the way <br />
              <span className="italic font-bold underline decoration-white/20 underline-offset-[12px]">WE LIVE</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <button 
                onClick={() => {
                  playSFX('click');
                  document.getElementById('animated-question')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center gap-6 text-xs font-mono uppercase tracking-[0.4em] text-white/60 hover:text-white transition-all"
              >
                <span className="relative z-10">Begin the Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
                <div className="absolute -bottom-2 left-0 w-0 h-px bg-white/40 transition-all duration-500 group-hover:w-full"></div>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Iconic Image */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full md:w-1/2 relative group"
        >
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[70vh] overflow-hidden rounded-2xl">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-edit.jpg" 
              alt="Steve Jobs" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
          </div>
          
          {/* Decorative Frame */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 border border-white/10 rounded-3xl pointer-events-none -z-10"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator (Simplified) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 text-white/20"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

// Helper hook for scroll progress
const useScrollProgress = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress(currentScroll / totalHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return progress;
};
