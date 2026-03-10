import React from 'react';
import { motion } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import { ArrowRight, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();

  return (
    <section className={`relative h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      {/* Background Image with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&q=80&w=1920" 
          alt="Apple Garage Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className={`absolute inset-0 transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-b from-black/60 via-black/40 to-black' : 'bg-gradient-to-b from-white/60 via-white/40 to-white'}`}></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-edit.jpg" 
            alt="Steve Jobs" 
            className={`w-48 h-48 md:w-64 md:h-64 rounded-full border-2 object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ${theme === 'dark' ? 'border-white/20' : 'border-black/10'}`}
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={`text-5xl md:text-7xl font-light tracking-tighter mb-4 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
        >
          Steve Jobs <span className={theme === 'dark' ? 'text-white/50' : 'text-black/50'}>—</span> AI Autobiography
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className={`text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
        >
          Explore the life, ideas, and philosophy of one of the world's most influential innovators.
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button 
            onClick={() => {
              playSFX('click');
              document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`group flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
          >
            Explore the Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => {
              playSFX('click');
              document.getElementById('mentor')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`group flex items-center gap-2 px-8 py-4 bg-transparent border rounded-full font-medium transition-all duration-300 ${theme === 'dark' ? 'border-white/30 text-white hover:bg-white/10' : 'border-black/30 text-black hover:bg-black/5'}`}
          >
            Ask the AI Mentor
            <MessageSquare className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}
      >
        <div className={`w-px h-12 bg-gradient-to-b to-transparent transition-colors duration-500 ${theme === 'dark' ? 'from-white/50' : 'from-black/50'}`}></div>
      </motion.div>
    </section>
  );
};
