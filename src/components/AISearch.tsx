import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import { GoogleGenAI } from "@google/genai";
import { Search, X, ArrowRight, Video, Quote as QuoteIcon, Calendar, FileText, Sparkles } from 'lucide-react';
import transcripts from '../data/transcripts.json';
import timelineEvents from '../data/timeline_events.json';
import quotes from '../data/jobs_quotes.json';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface AISearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AISearch: React.FC<AISearchProps> = ({ isOpen, onClose }) => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    playSFX('click');

    try {
      const context = `
        You are an intelligent search assistant for the Steve Jobs AI Autobiography.
        Based on the user's query, you should provide a summary and identify related content from the following data:
        
        TIMELINE: ${JSON.stringify(timelineEvents)}
        QUOTES: ${JSON.stringify(quotes)}
        TRANSCRIPTS: ${JSON.stringify(transcripts)}
        
        Return your response in JSON format with the following structure:
        {
          "summary": "A concise AI-generated summary answering the query",
          "relatedEvents": [ids of related timeline events],
          "relatedQuotes": [indices of related quotes],
          "relatedVideos": [ids of related transcripts]
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: context }] },
          { role: 'model', parts: [{ text: "I will provide search results in the requested JSON format." }] },
          { role: 'user', parts: [{ text: query }] }
        ],
        config: { responseMimeType: "application/json" }
      });

      const data = JSON.parse(response.text);
      setResults(data);
      playSFX('notification');
    } catch (error) {
      console.error("Search Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`fixed inset-0 z-50 backdrop-blur-3xl p-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-black/95' : 'bg-white/95'}`}
        >
          <div className={`container mx-auto max-w-4xl h-full flex flex-col transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-light tracking-widest uppercase">Intelligent Search</h2>
              <button 
                onClick={() => { onClose(); setResults(null); setQuery(''); playSFX('click'); }}
                className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="relative mb-12">
              <input 
                autoFocus
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Ask about failure, iPhone, design philosophy..."
                className={`w-full bg-transparent border-b-2 py-6 text-3xl md:text-5xl font-light focus:outline-none transition-all ${theme === 'dark' ? 'border-white/20 focus:border-white placeholder:text-white/10' : 'border-black/20 focus:border-black placeholder:text-black/10'}`}
              />
              <button 
                onClick={handleSearch}
                disabled={!query.trim() || isLoading}
                className={`absolute right-0 top-1/2 -translate-y-1/2 p-4 transition-all ${theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}
              >
                {isLoading ? <span className="animate-pulse">Searching...</span> : <ArrowRight className="w-10 h-10" />}
              </button>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-4">
              {results && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12 pb-12"
                >
                  <div>
                    <h3 className={`text-xs font-mono uppercase tracking-widest mb-6 flex items-center gap-2 transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                      <Sparkles className="w-4 h-4" /> AI Summary
                    </h3>
                    <p className={`text-2xl font-light leading-relaxed transition-colors duration-500 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {results.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {results.relatedEvents?.length > 0 && (
                      <div>
                        <h3 className={`text-xs font-mono uppercase tracking-widest mb-6 flex items-center gap-2 transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                          <Calendar className="w-4 h-4" /> Related Events
                        </h3>
                        <div className="space-y-4">
                          {results.relatedEvents.map((id: number) => {
                            const event = timelineEvents.find(e => e.id === id);
                            return event ? (
                              <div key={id} className={`p-4 rounded-xl border transition-colors duration-500 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                                <span className={`text-[10px] font-mono transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>{event.year}</span>
                                <h4 className="font-medium">{event.title}</h4>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    {results.relatedQuotes?.length > 0 && (
                      <div>
                        <h3 className={`text-xs font-mono uppercase tracking-widest mb-6 flex items-center gap-2 transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                          <QuoteIcon className="w-4 h-4" /> Related Wisdom
                        </h3>
                        <div className="space-y-4">
                          {results.relatedQuotes.map((index: number) => {
                            const quote = quotes[index];
                            return quote ? (
                              <div key={index} className={`p-4 rounded-xl border italic text-sm transition-colors duration-500 ${theme === 'dark' ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-black/5 border-black/10 text-gray-600'}`}>
                                "{quote.text}"
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {results.relatedVideos?.length > 0 && (
                    <div>
                      <h3 className={`text-xs font-mono uppercase tracking-widest mb-6 flex items-center gap-2 transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>
                        <Video className="w-4 h-4" /> Related Media
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {results.relatedVideos.map((id: string) => {
                          const doc = transcripts.find(d => d.id === id);
                          return doc ? (
                            <div key={id} className={`group relative aspect-video rounded-xl overflow-hidden border transition-colors duration-500 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
                              <img src={doc.thumbnail} alt={doc.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all" referrerPolicy="no-referrer" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <h4 className={`text-xs font-medium text-center px-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{doc.title}</h4>
                              </div>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
