import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { useAudio } from './AudioProvider';
import { ArrowRight, Sparkles, Zap, Globe, Eye, Lightbulb, Minimize2, History, MessageSquare, Quote, Play, Film, Search, Send, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const JourneySection: React.FC = () => {
  const { playSFX } = useAudio();
  
  return (
    <section id="journey-teaser" className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-20 lg:py-24 xl:py-32">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03)_0%,transparent_40%)]"></div>
        
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full opacity-10"
        >
          <img 
            src="https://picsum.photos/seed/steve-journey/1920/1080?grayscale&blur=10" 
            alt="Atmosphere" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
      
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Side: Visual Bento Composition */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 md:gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-2 relative rounded-[2.5rem] overflow-hidden aspect-[16/9] border border-white/10 group"
              >
                <img 
                  src="https://www.bizepic.com/wp-content/uploads/2014/08/Young-Steve-Jobs.png" 
                  alt="Early Years" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 mb-2">The Beginning</p>
                  <h4 className="text-2xl font-light">Early Exploration</h4>
                </div>
              </motion.div>
              
            </div>

            {/* Right Side: Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-8 inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Sparkles className="w-4 h-4 text-white/60" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">The Narrative Journey</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-light tracking-tighter leading-[0.9] mb-10">
                  The <span className="italic font-medium">Journey</span> <br />
                  Behind the <span className="font-medium">Ideas</span>
                </h2>
                
                <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed mb-16 max-w-xl">
                  Explore the experiences, milestones, and moments that shaped Steve’s thinking. Every step tells a story worth understanding.
                </p>

                <div className="relative group">
                  <Link 
                    to="/journey"
                    onClick={() => playSFX('click')}
                    className="inline-flex items-center gap-6 px-8 py-4 bg-white text-black rounded-full text-xs md:text-sm font-medium uppercase tracking-[0.2em] transition-all duration-500 hover:gap-8 hover:pr-10 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                  >
                    View the Journey
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  {/* Hover Microcopy */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-10 left-0 w-full text-center md:text-left opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  >
                    <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-white/40 italic">
                      “See how it all started”
                    </span>
                  </motion.div>
                </div>
                
                {/* Secondary Stats/Icons */}
                <div className="mt-24 grid grid-cols-3 sm:grid-cols-3 gap-12 w-full">
                  {[
                    { icon: History, label: "Milestones", value: "8+" },
                    { icon: Zap, label: "Innovations", value: "Infinite" },
                    { icon: MessageSquare, label: "Wisdom", value: "Timeless" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      className="flex flex-col gap-3"
                    >
                      <item.icon className="w-6 h-6 text-white/20" />
                      <div>
                        <p className="text-2xl font-light">{item.value}</p>
                        <p className="text-[9px] font-mono uppercase tracking-widest text-white/30">{item.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WisdomTeaser: React.FC = () => {
  const { playSFX } = useAudio();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-20 lg:py-24 xl:py-32">
      {/* Background Zen Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]"></div>
        <motion.div 
          animate={{ 
            rotate: 360,
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-10%] opacity-10"
        >
          <Quote className="w-[40vw] h-[40vw] text-white" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="w-10 h-px bg-white/30"></div>
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">The Mindset</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-light tracking-tighter leading-[0.9] mb-8">
                Timeless <span className="italic font-medium">Insights</span>, <br />
                One <span className="font-medium">Thought</span> at a Time
              </h2>
              
              <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed mb-12 max-w-lg">
                Dive into a curated collection of quotes and reflections—short, powerful ideas that stay with you long after you read them.
              </p>

              <div className="relative group">
                <Link 
                  to="/wisdom"
                  onClick={() => playSFX('click')}
                  className="inline-flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full text-xs md:text-sm font-medium uppercase tracking-[0.2em] transition-all duration-500 hover:gap-8 hover:pr-12"
                >
                  Read the Wisdom
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                {/* Hover Microcopy */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-10 left-0 w-full text-center md:text-left opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                >
                  <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-white/40 italic">
                    “Find your next insight”
                  </span>
                </motion.div>
              </div>
            </motion.div> 

          {/* Right Side: Visual Composition */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl"
            >
              <img 
                src="https://tse1.mm.bing.net/th/id/OIP.fD8iudNaG3ZRxkuVFOd0VwDPEt?w=481&h=700&rs=1&pid=ImgDetMain&o=7&rm=3" 
                alt="Steve Jobs Wisdom" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              
              {/* Floating Quote Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-4 md:top-12 md:-left-8 p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl max-w-[200px] md:max-w-[280px] z-20"
              >
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-white/20 mb-3 md:mb-4" />
                <p className="text-base md:text-lg font-light italic leading-relaxed">
                  "Stay hungry, stay foolish."
                </p>
              </motion.div>
            </motion.div>

            {/* Decorative Icons */}
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-zinc-900 rounded-full border border-white/10 flex items-center justify-center z-20"
            >
              <Lightbulb className="w-10 h-10 text-white/40" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export const DocumentaryTeaser: React.FC = () => {
  const { playSFX } = useAudio();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-20 lg:py-24 xl:py-32">
      {/* Cinematic Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img 
            src="https://picsum.photos/seed/steve-film/1920/1080?grayscale" 
            alt="Cinematic Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Side: Content */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <Film className="w-4 h-4 text-white/60" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/60">Visual Narrative</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-light tracking-tighter leading-[0.9] mb-8">
                  Stories That <br />
                  Bring <span className="italic font-medium">Ideas</span> <br />
                  to <span className="font-medium">Life</span>
                </h2>
                
                <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed mb-12 max-w-lg">
                  Watch the journey unfold through compelling visuals and narratives that reveal the depth behind the thinking.
                </p>

                <div className="relative group">
                  <Link 
                    to="/documentary"
                    onClick={() => playSFX('click')}
                    className="inline-flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full text-xs md:text-sm font-medium uppercase tracking-[0.2em] transition-all duration-500 hover:gap-8 hover:pr-12 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Watch the Documentary
                  </Link>
                  
                  {/* Hover Microcopy */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-10 left-0 w-full text-center md:text-left opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  >
                    <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-white/40 italic">
                      “Experience the story”
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Visual Preview */}
            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 group cursor-pointer"
              >
                <img 
                  src="https://media.cnn.com/api/v1/images/stellar/prod/210511042513-steve-jobs-stanford-speech-2005.jpg?q=x_3,y_75,h_1320,w_2347,c_crop/w_800" 
                  alt="Documentary Preview" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-10 h-10 text-white fill-current translate-x-1" />
                  </div>
                </div>
                
                {/* Cinematic Frame Labels */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/60">REC 00:42:15</span>
                </div>
                
              </motion.div>

              {/* Floating Decorative Element */}
              <motion.div 
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-4 md:-top-10 md:-right-10 p-4 md:p-6 bg-zinc-900 border border-white/10 rounded-2xl z-20"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/5 flex items-center justify-center">
                    <Film className="w-5 h-5 md:w-6 md:h-6 text-white/40" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-xs font-mono uppercase tracking-widest text-white/40 mb-1">Total Runtime</p>
                    <p className="text-base md:text-lg font-light">15:00</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ConversationTeaser: React.FC = () => {
  const { playSFX } = useAudio();
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "How do I deal with failure?",
    "How to start a startup company?",
    "How to pitch a product effectively?"
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  const handleType = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    setDisplayText(
      isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
    );

    setTypingSpeed(isDeleting ? 50 : 150);

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-20 lg:py-24 xl:py-32">
      {/* Background Abstract Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]"></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="w-10 h-px bg-white/30"></div>
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40">Interactive Experience</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-light tracking-tighter leading-[0.9] mb-8">
                Ask. <span className="italic font-medium">Learn</span>. <br />
                <span className="font-medium">Engage</span>.
              </h2>
              
              <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed mb-12 max-w-lg">
                Have a question or a thought? Start a conversation and explore ideas in a more personal, interactive way.
              </p>

              <div className="relative group">
                <Link 
                  to="/talk-to-steve"
                  onClick={() => playSFX('click')}
                  className="inline-flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full text-xs md:text-sm font-medium uppercase tracking-[0.2em] transition-all duration-500 hover:gap-8 hover:pr-12 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                {/* Hover Microcopy */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-12 left-0 w-full text-center md:text-left opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                >
                  <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-white/40 italic">
                    “Your questions, answered intelligently”
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side: Interactive UI Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Main Chat Interface Mockup */}
              <div className="relative z-10 bg-zinc-900/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                      <User className="w-6 h-6 text-white/60" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Steve Jobs AI</p>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-emerald-500/80">Online</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                  </div>
                </div>

                {/* Chat Bubbles Mockup */}
                <div className="space-y-6 mb-12">
                  <div className="flex justify-end">
                    <div className="bg-white/10 rounded-2xl rounded-tr-none px-6 py-4 max-w-[80%]">
                      <p className="text-sm font-light text-white/80">How do you stay focused on what matters?</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none px-6 py-4 max-w-[80%]">
                      <p className="text-sm font-light text-white/60 italic">
                        "Focusing is about saying no to the hundred other good ideas that there are. You have to pick carefully."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated Question Bar */}
                <div className="relative">
                  <div className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-4 group-hover:border-white/30 transition-colors duration-500">
                    <Search className="w-5 h-5 text-white/20" />
                    <div className="flex-1 text-sm font-light text-white/40 min-h-[1.25rem] flex items-center">
                      {displayText}
                      <motion.span 
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="w-[2px] h-4 bg-white/60 ml-1"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <Send className="w-4 h-4 text-white/20" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Icons */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-zinc-900 rounded-full border border-white/10 flex items-center justify-center z-20"
              >
                <MessageSquare className="w-8 h-8 text-white/20" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-zinc-900 rounded-full border border-white/10 flex items-center justify-center z-20"
              >
                <Zap className="w-10 h-10 text-white/20" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const InvitationSection: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 lg:py-24 xl:py-32 transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Bento Box 1: Large Featured */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`md:col-span-2 md:row-span-2 p-8 lg:p-10 xl:p-12 rounded-[2.5rem] flex flex-col justify-between transition-all duration-500 group cursor-pointer ${theme === 'dark' ? 'bg-black border border-white/5 hover:border-white/20' : 'bg-white border border-black/5 hover:border-black/20'}`}
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
              className={`md:col-span-2 p-6 lg:p-8 xl:p-10 rounded-[2.5rem] flex items-center gap-8 transition-all duration-500 group cursor-pointer ${theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'}`}
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
              className={`md:col-span-1 p-6 lg:p-7 xl:p-8 rounded-[2.5rem] flex flex-col justify-center text-center transition-all duration-500 group cursor-pointer ${theme === 'dark' ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-100 hover:bg-zinc-200'}`}
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
              className={`md:col-span-1 p-6 lg:p-7 xl:p-8 rounded-[2.5rem] flex flex-col items-center justify-center border border-dashed transition-all duration-500 ${theme === 'dark' ? 'border-white/10 text-white/20' : 'border-black/10 text-black/20'}`}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest">Stay Hungry</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SemanticSearchTeaser: React.FC = () => {
  const { playSFX } = useAudio();
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Steve's thoughts on simplicity",
    "How did he handle setbacks?",
    "The intersection of tech and arts"
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  const handleType = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    setDisplayText(
      isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
    );

    setTypingSpeed(isDeleting ? 50 : 150);

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden py-20 lg:py-24 xl:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-500/5 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-light tracking-tighter leading-[0.9] mb-6">
                Find What You <span className="italic font-medium">Mean</span>— <br />
                Not Just What You <span className="font-medium">Type</span>
              </h2>
              <p className="text-lg md:text-2xl font-light text-white/60 tracking-[0.4em] uppercase mb-8">
                Smarter search, deeper results.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Side: Copy & CTA */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="space-y-8 mb-12">
                  <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed">
                    Our semantic search understands intent, not just keywords. That means you can explore ideas naturally—just type what you're thinking, and discover content that truly matches your meaning.
                  </p>
                  <p className="text-lg md:text-2xl font-light text-white/50 leading-relaxed">
                    No guesswork. No exact phrasing needed. Just better results.
                  </p>
                </div>

                <div className="relative group">
                  <button 
                    onClick={() => {
                      playSFX('click');
                      window.dispatchEvent(new CustomEvent('highlight-search'));
                    }}
                    className="inline-flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full text-xs md:text-sm font-medium uppercase tracking-[0.2em] transition-all duration-500 hover:gap-8 hover:pr-12 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  >
                    Try Smart Search
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  
                  {/* Hover Microcopy */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-12 left-0 w-full text-center md:text-left opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                  >
                    <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-white/40 italic">
                      “Search like you think”
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Interactive Search Mockup & Comparison */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
              >
                {/* Search Bar Mockup */}
                <div className="bg-zinc-900/50 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                  <div className="relative mb-8">
                    <div className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-4 group-hover:border-white/30 transition-colors duration-500">
                      <Search className="w-5 h-5 text-emerald-500" />
                      <div className="flex-1 text-sm font-light text-white/80 min-h-[1.25rem] flex items-center">
                        {displayText}
                        <motion.span 
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="w-[2px] h-4 bg-emerald-500 ml-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Suggestion Results Animation */}
                  <div className="space-y-4">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/30 mb-4">Semantic Matches</p>
                    {[
                      { title: "The ultimate sophistication", tag: "Design Philosophy" },
                      { title: "Zen influence on Apple products", tag: "Mindset" },
                      { title: "Why simplicity is hard", tag: "Innovation" }
                    ].map((result, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + (i * 0.2) }}
                        className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-emerald-500" />
                          </div>
                          <span className="text-sm font-light">{result.title}</span>
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-widest text-white/20">{result.tag}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Before vs After Comparison */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl">
                    <p className="text-[9px] font-mono uppercase tracking-widest text-red-500/50 mb-4">Traditional Search</p>
                    <div className="space-y-2 opacity-40">
                      <div className="h-2 w-full bg-white/10 rounded"></div>
                      <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                      <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                      <p className="text-[10px] italic text-white/40 mt-4">"No exact matches found for your query."</p>
                    </div>
                  </div>
                  <div className="p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2">
                      <Zap className="w-4 h-4 text-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-emerald-500 mb-4">Semantic Search</p>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-emerald-500/20 rounded"></div>
                      <div className="h-2 w-full bg-emerald-500/20 rounded"></div>
                      <div className="h-2 w-full bg-emerald-500/20 rounded"></div>
                      <p className="text-[10px] text-emerald-500/60 mt-4">"Found 12 deep connections based on your intent."</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/journey"
              onClick={() => playSFX('click')}
              className={`inline-flex items-center gap-4 px-12 py-6 rounded-full text-lg font-medium transition-all duration-500 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200 shadow-2xl shadow-white/10' : 'bg-black text-white hover:bg-gray-800 shadow-2xl shadow-black/10'}`}
            >
              Explore his journey
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link 
              to="/talk-to-steve"
              onClick={() => playSFX('click')}
              className={`inline-flex items-center gap-4 px-12 py-6 rounded-full text-lg font-medium transition-all duration-500 border-2 ${theme === 'dark' ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
            >
              Talk to Steve Jobs
              <MessageSquare className="w-5 h-5" />
            </Link>
          </div>

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
