import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { useAudio } from './AudioProvider';
import { ArrowRight, Sparkles, Zap, Globe, Eye, Lightbulb, Minimize2, History } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnimatedQuestion: React.FC = () => {
  return (
    <section id="animated-question" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-40 bg-gradient-to-tr from-zinc-900 via-black to-zinc-900"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] blur-[160px] rounded-full bg-blue-500"
        ></motion.div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-7xl font-light leading-tight max-w-5xl mx-auto tracking-tighter text-white"
        >
          "What if one person’s <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="italic font-medium">ideas</motion.span> could <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }} className="italic font-medium">change</motion.span> the way the world <span className="font-medium underline decoration-white/20 underline-offset-8">communicates</span>, <span className="font-medium underline decoration-white/20 underline-offset-8">creates</span>, and <span className="font-medium underline decoration-white/20 underline-offset-8">connects</span>?"
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 text-[10px] font-mono uppercase tracking-[0.5em] text-white/30"
        >
          Scroll to discover
        </motion.div>
      </div>
    </section>
  );
};

export const LegacyIntro: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Subtle Parallax Visuals with Radial Mask */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"></div>
        <motion.div 
          style={{ y: "-10%" }}
          whileInView={{ y: "10%" }}
          transition={{ ease: "linear" }}
          className="absolute inset-0 opacity-[0.03] text-white"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-dark" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid-dark)" />
          </svg>
        </motion.div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20 max-w-5xl text-center">
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xl sm:text-2xl md:text-5xl font-light leading-snug mb-16 text-white">
            That question defines the <span className="font-medium italic">legacy</span> of Steve Jobs—the <span className="font-medium">visionary</span> co-founder of Apple who believed technology should not merely function, but <motion.span animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity }} className="font-medium">inspire</motion.span>.
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="h-px mx-auto bg-white/40"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const PhilosophySection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-32 md:py-48 transition-colors duration-500 overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Large Background Text for Editorial Feel */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 0.03, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className={`absolute -top-20 -right-20 text-[20vw] font-bold select-none pointer-events-none ${theme === 'dark' ? 'text-white' : 'text-black'}`}
          >
            DESIGN
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <h3 className={`text-xs font-mono uppercase tracking-[0.4em] mb-12 transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>The Philosophy</h3>
              <div className="space-y-12">
                <p className={`text-2xl md:text-4xl font-light leading-tight transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Steve Jobs was a <span className="font-medium italic">relentless thinker</span> who believed technology should be <span className="underline decoration-current/20 underline-offset-8">beautifully designed</span> and <span className="italic">deeply personal</span>.
                </p>
                <div className={`text-lg md:text-xl font-light leading-relaxed space-y-8 transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p>
                    He famously stood at the intersection of technology and the liberal arts, insisting that engineering alone was never enough to capture the <span className="italic font-medium text-current">human spirit</span>.
                  </p>
                  <p>
                    His vision pushed engineers and designers to pursue products that were not only functional but <span className="font-medium text-current">transformative</span>. From the colorful iMac G3 to the <span className="font-medium">revolutionary</span> iPhone, every detail was scrutinized.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:mt-24"
            >
              <div className={`p-12 rounded-[2rem] border transition-colors duration-500 relative overflow-hidden group ${theme === 'dark' ? 'bg-zinc-900 border-white/5' : 'bg-zinc-50 border-black/5'}`}>
                <div className={`absolute top-0 left-0 w-1 h-full transition-colors duration-500 ${theme === 'dark' ? 'bg-white/10 group-hover:bg-white/40' : 'bg-black/10 group-hover:bg-black/40'}`}></div>
                <p className={`text-xl md:text-2xl font-light leading-relaxed italic transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  "The real fascination lies beyond the devices. It’s a story of bold ideas, creative rebellion, and the pursuit of perfection."
                </p>
                <p className={`mt-12 text-sm font-mono uppercase tracking-widest transition-colors duration-500 ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}>
                  — Integrity in Design
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ThemeSection: React.FC = () => {
  const cards = [
    {
      icon: Eye,
      title: "Vision",
      desc: "Seeing the future before it exists and having the courage to build it."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Challenging conventions to redefine how we interact with the world."
    },
    {
      icon: Minimize2,
      title: "Simplicity",
      desc: "The ultimate sophistication. Stripping away the unnecessary."
    },
    {
      icon: History,
      title: "Legacy",
      desc: "A story of creative rebellion that continues to shape our digital age."
    }
  ];

  return (
    <section className="py-32 md:py-48 overflow-hidden relative bg-black">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] invert">
          <img 
            src="https://picsum.photos/seed/innovation-tech/1920/1080" 
            alt="Innovation Background" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-20 blur-[140px] rounded-full bg-blue-900/30"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-24">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-xs font-mono uppercase tracking-[0.4em] mb-8 text-white/40">The Theme</h3>
            <h2 className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-white">
              The <span className="italic font-medium">Autobiography of Steve Jobs</span> invites you to <span className="font-medium underline decoration-white/20 underline-offset-8">EXPLORE</span> the life, mindset, and defining moments of a man who challenged conventions and helped shape the digital age.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-10 rounded-[2.5rem] border transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl bg-zinc-900/40 border-white/5 hover:bg-zinc-900 hover:border-white/10 hover:shadow-white/5"
            >
              <div className="w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-all duration-500 bg-white/5 text-white group-hover:bg-white group-hover:text-black">
                <card.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-medium mb-4 text-white">{card.title}</h4>
              <p className="text-sm font-light leading-relaxed text-gray-400">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const InvitationSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-32 transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-50'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Bento Box 1: Large Featured */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`md:col-span-2 md:row-span-2 p-12 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 group cursor-pointer ${theme === 'dark' ? 'bg-black border border-white/5 hover:border-white/20' : 'bg-white border border-black/5 hover:border-black/20'}`}
          >
            <div>
              <Zap className={`w-10 h-10 mb-8 transition-transform duration-500 group-hover:scale-110 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
              <h4 className="text-3xl font-medium mb-4">His Life</h4>
              <p className={`text-lg font-light transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>From the garage to the global stage. A journey of relentless ambition.</p>
            </div>
            <Link to="/journey" className="mt-12 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest group-hover:gap-4 transition-all">
              Explore Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Bento Box 2: Mindset */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`md:col-span-2 p-10 rounded-[2.5rem] flex items-center gap-8 transition-all duration-500 group cursor-pointer ${theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'}`}
          >
            <Sparkles className="w-12 h-12 shrink-0 opacity-20" />
            <div>
              <h4 className="text-xl font-medium mb-2">His Mindset</h4>
              <p className={`text-sm font-light ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>The principles of Zen and design.</p>
              <Link to="/wisdom" className="mt-4 inline-block text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Wisdom</Link>
            </div>
          </motion.div>

          {/* Bento Box 3: Milestones */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={`md:col-span-1 p-8 rounded-[2.5rem] flex flex-col justify-center text-center transition-all duration-500 group cursor-pointer ${theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'}`}
          >
            <Globe className="w-8 h-8 mx-auto mb-4 opacity-20" />
            <h4 className="text-lg font-medium mb-2">Milestones</h4>
            <Link to="/documentary" className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Discover</Link>
          </motion.div>

          {/* Bento Box 4: Gallery Placeholder/Future */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`md:col-span-1 p-8 rounded-[2.5rem] flex flex-col items-center justify-center border border-dashed transition-all duration-500 ${theme === 'dark' ? 'border-white/10 text-white/20' : 'border-black/10 text-black/20'}`}
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Stay Hungry</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const CTASection: React.FC = () => {
  const { theme } = useTheme();
  const { playSFX } = useAudio();
  
  return (
    <section className={`py-48 transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className={`text-4xl md:text-6xl font-light tracking-tight mb-12 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Step inside the story—and discover how <br />
            one visionary helped <span className="font-medium italic">redefine the future</span>.
          </h2>
          <Link 
            to="/journey"
            onClick={() => playSFX('click')}
            className={`inline-flex items-center gap-4 px-12 py-6 rounded-full text-lg font-medium transition-all duration-500 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200 shadow-2xl shadow-white/10' : 'bg-black text-white hover:bg-gray-800 shadow-2xl shadow-black/10'}`}
          >
            Explore his journey
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* Signature Reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 2 }}
            className="mt-32"
          >
            <p className={`text-4xl md:text-6xl font-serif italic transition-colors duration-500 ${theme === 'dark' ? 'text-white/10' : 'text-black/10'}`}>
              Steve Jobs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
