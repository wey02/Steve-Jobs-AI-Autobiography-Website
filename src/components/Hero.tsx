import React from 'react';
import { motion } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();

  return (
    <section className={`relative min-h-screen w-full flex flex-col md:flex-row items-center transition-colors duration-500 overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left bg-current opacity-20"
        style={{ scaleX: useScrollProgress() }}
      />

      {/* Left Side: Iconic Image with Creative Mask */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/2 h-[60vh] md:h-screen relative group"
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className={`w-3/4 h-3/4 border transition-colors duration-500 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}
          />
        </div>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-edit.jpg" 
          alt="Steve Jobs" 
          className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 transition-colors duration-500 ${theme === 'dark' ? 'bg-black/40 group-hover:bg-black/10' : 'bg-white/20 group-hover:bg-white/0'}`}></div>
      </motion.div>

      {/* Right Side: Headline */}
      <div className="w-full md:w-1/2 px-8 md:px-20 py-16 md:py-0 flex flex-col justify-center relative z-20">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={`mb-6 text-[10px] font-mono uppercase tracking-[0.6em] transition-colors duration-500 ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>
            Legacy of a Visionary
          </div>
          <h1 className={`text-6xl lg:text-9xl font-light tracking-tighter leading-[0.85] mb-12 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            The <span className="font-medium italic">Visionary</span> <br />
            <span className="font-medium">Who <motion.span animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 4, repeat: Infinity }}>Changed</motion.span></span> <br />
            the Way <br />
            <span className={`italic font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} underline decoration-current/20 underline-offset-[12px]`}>WE LIVE</span>
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
              className={`group relative inline-flex items-center gap-6 text-xs font-mono uppercase tracking-[0.4em] transition-all ${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'}`}
            >
              <span className="relative z-10">Begin the Experience</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
              <div className={`absolute -bottom-2 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${theme === 'dark' ? 'bg-white/40' : 'bg-black/40'}`}></div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className={`absolute bottom-12 right-12 hidden md:flex items-center gap-4 ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest rotate-90 origin-right translate-y-8">Scroll</span>
        <div className={`w-px h-16 bg-gradient-to-b to-transparent transition-colors duration-500 ${theme === 'dark' ? 'from-white/40' : 'from-black/40'}`}></div>
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
