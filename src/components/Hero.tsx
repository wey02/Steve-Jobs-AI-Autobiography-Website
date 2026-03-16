import React from 'react';
import { motion } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();

  return (
    <section className={`relative min-h-screen w-full flex items-center transition-colors duration-500 overflow-hidden py-20 md:py-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 opacity-30 transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20' : 'bg-gradient-to-br from-blue-100/40 via-white to-purple-100/40'}`}></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-10 blur-3xl rounded-full ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'}`}
        ></motion.div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div 
        className={`fixed top-0 left-0 right-0 h-1 z-50 origin-left transition-colors duration-500 ${theme === 'dark' ? 'bg-white opacity-20' : 'bg-black opacity-10'}`}
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
            <div className={`mb-6 text-[10px] font-mono uppercase tracking-[0.6em] transition-colors duration-500 ${theme === 'dark' ? 'text-white/50' : 'text-black/40'}`}>
              Legacy of a Visionary
            </div>
            <h1 className={`text-5xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-[0.85] mb-8 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
              The <span className="font-medium italic">Visionary</span> <br />
              who <span className="font-medium">changed</span> <br />
              the way <br />
              <span className={`italic font-bold underline underline-offset-[12px] transition-colors duration-500 ${theme === 'dark' ? 'decoration-white/20' : 'decoration-black/10'}`}>WE LIVE</span>
            </h1>

            <p className={`text-lg md:text-xl font-light mb-12 max-w-lg leading-relaxed tracking-wide transition-colors duration-500 ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
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
                  document.getElementById('animated-question')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative inline-flex items-center gap-6 text-xs font-mono uppercase tracking-[0.4em] transition-all duration-500 ${theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-black/50 hover:text-black'}`}
              >
                <span className="relative z-10">Begin the Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
                <div className={`absolute -bottom-2 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${theme === 'dark' ? 'bg-white/40' : 'bg-black/40'}`}></div>
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
              src="https://www.thephoblographer.com/wp-content/uploads/2017/10/steve-jobs-by-albert-watson.jpg" 
              alt="Steve Jobs" 
              className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
              referrerPolicy="no-referrer"
            />
            <div className={`absolute inset-0 transition-colors duration-500 ${theme === 'dark' ? 'bg-black/40 group-hover:bg-black/10' : 'bg-white/10 group-hover:bg-transparent'}`}></div>
          </div>
          
          {/* Decorative Frame */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -inset-4 border rounded-3xl pointer-events-none -z-10 transition-colors duration-500 ${theme === 'dark' ? 'border-white/10' : 'border-black/5'}`}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator (Simplified) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 transition-colors duration-500 ${theme === 'dark' ? 'text-white/20' : 'text-black/20'}`}
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
