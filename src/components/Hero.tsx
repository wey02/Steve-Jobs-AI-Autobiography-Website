import React from 'react';
import { motion } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import { ArrowRight } from 'lucide-react';
import iconic from '../images/Steve.png';
import heroBg from '../images/heroBg.png'
import mobileHeroBg from '../images/mobileHeroBg.png'

export const Hero: React.FC = () => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      className="relative h-screen w-full flex items-center transition-colors duration-500 overflow-hidden"
    >
      {/* Background Image (Full Bleed) */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          key="desktop-bg"
          src={heroBg}
          alt="Hero Background Desktop" 
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobile ? 0 : 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-88"
        />
        <motion.img 
          key="mobile-bg"
          src={mobileHeroBg}
          alt="Hero Background Mobile" 
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobile ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-70"
        />
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-white opacity-20"
        style={{ scaleX: useScrollProgress() }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-20 flex flex-col justify-center h-full max-h-screen py-20">
        {/* Headline Content */}
        <div className="w-full md:w-2/3 lg:w-3/5 flex flex-col justify-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4 text-[10px] font-mono uppercase tracking-[0.4em] text-white/50">
              Legacy of a Visionary
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-6xl xl:text-8xl font-light tracking-tighter leading-[0.9] mb-6 text-white">
              The <span className="font-medium italic">Visionary</span> <br />
              who <span className="font-medium">changed</span> <br />
              the way <br />
              <span className="italic font-bold underline underline-offset-[12px] decoration-white/20">WE LIVE</span>
            </h1>

            <p className="text-lg md:text-2xl font-light mb-8 max-w-md leading-relaxed tracking-wide text-white/60">
              Explore the life of Steve Jobs through an AI-powered biographical experience.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <button 
                onClick={() => {
                  playSFX('click');
                  const target = document.getElementById('journey-teaser');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center gap-6 text-xs md:text-sm font-mono uppercase tracking-[0.2em] transition-all duration-500 text-white/60 hover:text-white"
              >
                <span className="relative z-10">Begin the Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
                <div className="absolute -bottom-2 left-0 w-0 h-px transition-all duration-500 group-hover:w-full bg-white/40"></div>
              </button>
            </motion.div>
          </motion.div>
        </div>
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
