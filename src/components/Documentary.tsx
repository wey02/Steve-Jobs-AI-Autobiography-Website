import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import documentaries from '../data/transcripts.json';
import { Play, Clock, FileText, X } from 'lucide-react';

export const Documentary: React.FC = () => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();
  const [selectedDoc, setSelectedDoc] = useState<typeof documentaries[0] | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <section id="documentary" className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light tracking-tight mb-4"
          >
            Inside the Mind of Steve Jobs
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`max-w-2xl mx-auto transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
          >
            A documentaries exploring the complexities, brilliance, and impact of Steve Jobs’ extraordinary life.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentaries.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedDoc(doc);
                setIsPlaying(false);
                playSFX('click');
              }}
            >
              <div className={`relative aspect-video rounded-2xl overflow-hidden mb-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                <img 
                  src={doc.thumbnail} 
                  alt={doc.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
                    <Play className={`w-6 h-6 fill-current transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-mono flex items-center gap-1 text-white">
                  <Clock className="w-3 h-3" />
                  {doc.duration}
                </div>
              </div>
              <h3 className={`text-xl font-medium mb-2 transition-all ${theme === 'dark' ? 'group-hover:text-white/80' : 'group-hover:text-black/70'}`}>{doc.title}</h3>
              <p className={`text-sm line-clamp-2 transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{doc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`max-w-5xl w-full h-[80vh] rounded-3xl overflow-hidden flex flex-col relative transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100'}`}
            >
              <button 
                onClick={() => {
                  setSelectedDoc(null);
                  setIsPlaying(false);
                }}
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-2/3 bg-black flex items-center justify-center relative">
                  {!isPlaying ? (
                    <>
                      <img 
                        src={selectedDoc.thumbnail} 
                        alt={selectedDoc.title} 
                        className="w-full h-full object-cover opacity-50"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button 
                          onClick={() => {
                            setIsPlaying(true);
                            playSFX('notification');
                          }}
                          className="group flex flex-col items-center gap-4"
                        >
                          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-black fill-current" />
                          </div>
                          <p className="text-white/60 text-sm font-mono uppercase tracking-widest">Click to Play Documentary</p>
                        </button>
                      </div>
                    </>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(selectedDoc.video)}?autoplay=1`}
                      title={selectedDoc.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
                <div className={`md:w-1/3 p-12 flex flex-col overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                  <div className={`flex items-center gap-2 mb-4 transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                    <FileText className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase tracking-widest">Transcript</span>
                  </div>
                  <h3 className={`text-2xl font-light mb-8 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{selectedDoc.title}</h3>
                  <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                    <p className={`leading-relaxed text-sm whitespace-pre-wrap transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {selectedDoc.transcript}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
