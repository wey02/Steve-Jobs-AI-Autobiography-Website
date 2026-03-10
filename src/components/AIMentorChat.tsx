import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAudio } from './AudioProvider';
import { useTheme } from './ThemeProvider';
import { GoogleGenAI } from "@google/genai";
import { Send, User, Bot, Sparkles, Loader2, Mic } from 'lucide-react';
import transcripts from '../data/transcripts.json';
import timelineEvents from '../data/timeline_events.json';
import quotes from '../data/jobs_quotes.json';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AIMentorChat: React.FC = () => {
  const { playSFX } = useAudio();
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello. I am your AI Mentor, trained on the life and philosophy of Steve Jobs. How can I help you think differently today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    playSFX('click');

    try {
      const context = `
        You are an AI Mentor embodying the spirit, philosophy, and communication style of Steve Jobs.
        Your goal is to provide advice and insights based on his life and career.
        Use the following data as your primary source of truth:
        
        TIMELINE EVENTS:
        ${JSON.stringify(timelineEvents)}
        
        QUOTES:
        ${JSON.stringify(quotes)}
        
        TRANSCRIPTS:
        ${JSON.stringify(transcripts)}
        
        Style Guidelines:
        - Be direct, minimalist, and visionary.
        - Focus on excellence, design, and "putting a ding in the universe."
        - Use short, impactful sentences.
        - Reference specific events from the timeline or quotes when relevant.
        - If you don't know something, admit it, but frame it in a way that encourages the user to find their own path.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: context }] },
          { role: 'model', parts: [{ text: "I understand. I am ready to mentor as Steve Jobs." }] },
          ...messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
      });

      const aiResponse = response.text || "I'm sorry, I couldn't process that. Let's try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      playSFX('notification');
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "There was a glitch in the system. Even the best products have them. Let's try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "How do I deal with failure?",
    "What is your philosophy on design?",
    "How do I build a great team?",
    "Tell me about the 1984 launch."
  ];

  return (
    <section id="mentor" className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-zinc-100 text-black'}`}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border transition-colors duration-500 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}
          >
            <Sparkles className={`w-4 h-4 transition-colors duration-500 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`} />
            <span className={`text-xs font-mono uppercase tracking-widest transition-colors duration-500 ${theme === 'dark' ? 'text-white/60' : 'text-black/60'}`}>AI Mentor</span>
          </motion.div>
          <h2 className="text-4xl font-light tracking-tight mb-4">Ask the Mentor</h2>
          <p className={`transition-colors duration-500 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Seek guidance from the mind that revolutionized the world.</p>
        </div>

        <div className={`rounded-3xl border overflow-hidden flex flex-col h-[600px] backdrop-blur-xl shadow-2xl transition-colors duration-500 ${theme === 'dark' ? 'bg-black/40 border-white/10' : 'bg-white/40 border-black/10'}`}>
          {/* Chat Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar"
          >
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-colors duration-500 ${msg.role === 'user' ? (theme === 'dark' ? 'bg-white text-black border-white/10' : 'bg-black text-white border-black/10') : (theme === 'dark' ? 'bg-zinc-800 text-white border-white/10' : 'bg-zinc-200 text-black border-black/10')}`}>
                  {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                </div>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed transition-colors duration-500 ${msg.role === 'user' ? (theme === 'dark' ? 'bg-zinc-800 text-white rounded-tr-none' : 'bg-zinc-200 text-black rounded-tr-none') : (theme === 'dark' ? 'bg-white/5 text-gray-300 rounded-tl-none' : 'bg-black/5 text-gray-600 rounded-tl-none')}`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-800 border-white/10' : 'bg-zinc-200 border-black/10'}`}>
                  <Bot className="w-5 h-5" />
                </div>
                <div className={`p-4 rounded-2xl rounded-tl-none flex items-center gap-2 transition-colors duration-500 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                  <Loader2 className={`w-4 h-4 animate-spin transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`} />
                  <span className={`text-xs font-mono transition-colors duration-500 ${theme === 'dark' ? 'text-white/40' : 'text-black/40'}`}>Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className={`p-6 border-t transition-colors duration-500 ${theme === 'dark' ? 'bg-zinc-900/50 border-white/10' : 'bg-zinc-100/50 border-black/10'}`}>
            <div className="flex flex-wrap gap-2 mb-4">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => { setInput(q); playSFX('click'); }}
                  className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border transition-all ${theme === 'dark' ? 'bg-white/5 border-white/5 text-white/40 hover:text-white hover:bg-white/10' : 'bg-black/5 border-black/5 text-black/40 hover:text-black hover:bg-black/10'}`}
                >
                  {q}
                </button>
              ))}
            </div>
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about innovation, design, leadership..."
                className={`w-full border rounded-2xl px-6 py-4 pr-24 focus:outline-none transition-all text-sm ${theme === 'dark' ? 'bg-zinc-800/50 border-white/10 text-white focus:border-white/30' : 'bg-zinc-200/50 border-black/10 text-black focus:border-black/30'}`}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                <button 
                  className={`p-2 transition-all ${theme === 'dark' ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}
                  onClick={() => playSFX('click')}
                >
                  <Mic className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className={`p-2 rounded-xl transition-all disabled:opacity-50 ${theme === 'dark' ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
