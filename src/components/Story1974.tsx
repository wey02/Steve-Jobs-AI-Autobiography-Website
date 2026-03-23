import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { Quote, Compass, Zap, Map, Sunrise, Sparkles, BookOpen, Layers, Target } from 'lucide-react';

export const Story1974: React.FC = () => {
  const { theme } = useTheme();

  const sections = [
    {
      id: 'hook',
      title: 'Opening Hook',
      subtitle: 'The Search Before the Revolution',
      icon: <Target className="w-6 h-6" />,
      content: (
        <>
          <p className="text-2xl font-light leading-relaxed mb-8">
            Before the black turtleneck, before the stage lights, before Apple became a symbol of innovation, there was a restless young man searching for something far less tangible.
          </p>
          <p className="text-xl font-light opacity-80 leading-relaxed mb-8">
            Steve Jobs was not chasing success in the beginning. He was chasing meaning.
          </p>
          <div className={`p-8 border-l-2 mb-8 ${theme === 'dark' ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'}`}>
            <p className="text-2xl italic font-serif">
              “Something is missing,” he seemed to feel, not in words spoken aloud, but in the quiet dissatisfaction that followed him through classrooms, jobs, and conversations.
            </p>
          </div>
          <p className="text-lg font-light opacity-70 leading-relaxed">
            Technology intrigued him, but it did not fulfill him. So he began a different kind of journey. One that would take him far from Silicon Valley and deep into himself.
          </p>
        </>
      ),
      image: "https://static.scientificamerican.com/sciam/cache/file/E5EEDC57-1AD1-428B-9A937538BD8526FE_source.jpg?w=600",
      accent: "from-blue-500/20 to-transparent"
    },
    {
      id: 'restlessness',
      title: 'Early Restlessness',
      subtitle: 'A Mind That Refused to Settle',
      icon: <Zap className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            Jobs’ early life was marked by contradiction. He was intensely curious, yet deeply dissatisfied with structure. College at Reed offered intellectual stimulation, but he dropped out after just six months. He continued attending classes that interested him, including calligraphy.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6 font-medium">
            He was not lost. He was selective.
          </p>
          <p className="text-lg font-light opacity-80 leading-relaxed mb-6">
            Friends described him as both brilliant and difficult. He questioned authority, systems, and expectations. There was always a sense that he was searching for a deeper truth beneath the surface.
          </p>
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
            <Quote className="w-8 h-8 text-indigo-400 shrink-0" />
            <p className="text-xl font-medium text-indigo-300">
              “I want to see things differently,” he seemed to be asking, not just about life, but about reality itself.
            </p>
          </div>
        </>
      ),
      image: "https://tse1.mm.bing.net/th/id/OIP.XX-bYYfLPGChCH6gdwal2QHaJk?rs=1&pid=ImgDetMain&o=7&rm=3",
      reverse: true
    },
    {
      id: 'atari',
      title: 'Life at Atari',
      subtitle: 'Chaos Meets Precision',
      icon: <Layers className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            In 1974, Jobs joined Atari, one of the most innovative tech companies of its time. The environment was raw, fast-paced, and unconventional, which suited his personality.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6 font-medium">
            But Jobs did not blend in. He stood out.
          </p>
          <p className="text-lg font-light opacity-70 leading-relaxed mb-6">
            He was known for his intensity, bluntness, and unusual habits. He often worked night shifts to avoid coworkers. His direct communication style and personal habits made collaboration difficult for some.
          </p>
          <p className="text-lg font-light leading-relaxed">
            Yet beneath the friction was undeniable talent. Jobs approached problems differently. Where others saw complexity, he sought simplicity. At Atari, he worked on circuit board design and partnered with Steve Wozniak to reduce the number of chips in a game design. This reduced costs and improved efficiency.
          </p>
        </>
      ),
      image: "https://tse3.mm.bing.net/th/id/OIP.P0-Y4niqBvFy0Dl-ClKUYAHaDH?rs=1&pid=ImgDetMain&o=7&rm=3",
      fullWidth: true
    },
    {
      id: 'india',
      title: 'The Journey to India',
      subtitle: 'A Search Beyond Logic',
      icon: <Map className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            That restlessness led Jobs to make a radical decision. He left Atari and traveled to India. Not for business or opportunity, but for enlightenment.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            Influenced by spiritual writings and the growing Western interest in Eastern philosophy, Jobs sought answers that could not be found in logic or code. He hoped to meet Neem Karoli Baba, a respected Hindu guru.
          </p>
          <p className="text-lg font-light opacity-80 leading-relaxed">
            Traveling across India with minimal possessions, Jobs immersed himself in ashrams, villages, and spiritual communities. He shaved his head, wore traditional clothing, and lived simply.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
              <p className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2">The Goal</p>
              <p className="text-sm">Neem Karoli Baba</p>
            </div>
            <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'}`}>
              <p className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2">The Reality</p>
              <p className="text-sm">Guru had passed away</p>
            </div>
          </div>
        </>
      ),
      image: "https://tse4.mm.bing.net/th/id/OIP.BPnaIGTp5BKt5O5cku2mEwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      id: 'awakening',
      title: 'Spiritual Awakening',
      subtitle: 'Learning to See Differently',
      icon: <Sunrise className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            India was not easy. Jobs encountered poverty, illness, and discomfort. The environment was harsh and unfamiliar. He suffered from dysentery, lost weight, and faced moments of doubt.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            But within that experience, something shifted. He began to absorb principles of Zen Buddhism and Eastern thought. These ideas emphasized intuition, mindfulness, and removing illusions.
          </p>
          <div className={`p-8 rounded-3xl mb-6 ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-black'}`}>
            <p className="text-2xl font-serif italic mb-4">
              “In the West, we believe logic is everything. In the East, intuition matters just as much.”
            </p>
            <p className="text-sm font-mono uppercase tracking-widest opacity-50">— Steve Jobs</p>
          </div>
          <p className="text-lg font-light opacity-80 leading-relaxed">
            This realization became a turning point. He learned that clarity does not come from adding more, but from removing what is unnecessary. This idea would later define his approach to design.
          </p>
        </>
      ),
      image: "https://www.oscension.com/wp-content/uploads/2023/12/Young_Steve_Jobs_India-1.jpg",
      reverse: true
    },
    {
      id: 'transformation',
      title: 'Return and Transformation',
      subtitle: 'A New Lens on the World',
      icon: <Sparkles className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            When Jobs returned to the United States, he was not the same person. He was thinner, quieter, and more focused. There was a sharper clarity in how he saw the world.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            He reconnected with Steve Wozniak. Together, they would begin building what became Apple.
          </p>
          <p className="text-lg font-light opacity-80 leading-relaxed">
            This time, Jobs brought more than technical ambition. He carried a philosophical perspective. He began to insist on elegance, simplicity, and purity, not just in function, but in experience. Products were not just tools. They were expressions.
          </p>
        </>
      ),
      image: "https://tse4.mm.bing.net/th/id/OIP.eBTQnfHkc8W7I0papNgN4QHaFh?w=819&h=611&rs=1&pid=ImgDetMain&o=7&rm=3",
      fullWidth: true
    },
    {
      id: 'philosophy',
      title: 'Lasting Influence',
      subtitle: 'Simplicity as Truth',
      icon: <Sunrise className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            The lessons from Jobs’ early explorations, especially his time in India, became central to Apple’s identity. His focus on simplicity was not just aesthetic. It was philosophical.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              'Clean interfaces',
              'Intuitive user experiences',
              'Removal of unnecessary complexity'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-lg font-light">{item}</span>
              </li>
            ))}
          </ul>
          <div className={`p-8 border-t border-b ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
            <p className="text-2xl font-serif italic mb-4">
              “Simple can be harder than complex. You have to work hard to make your thinking clear.”
            </p>
          </div>
          <p className="text-lg font-light opacity-70 mt-8">
            That mindset traces back to his time in India, to moments of reflection and a search for meaning beyond technology. In the end, Jobs did not just find answers. He changed the way questions were asked.
          </p>
        </>
      ),
      image: "https://storage.googleapis.com/webdesignledger.pub.network/WDL/maxresdefault.jpg"
    }
  ];

  return (
    <div className="space-y-32">
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`relative ${section.fullWidth ? 'max-w-none' : 'max-w-6xl mx-auto px-6'}`}
        >
          <div className={`grid grid-cols-1 ${section.fullWidth ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-16 items-center`}>
            
            {/* Content Side */}
            <div className={`${section.reverse ? 'lg:order-2' : ''} ${section.fullWidth ? 'max-w-4xl mx-auto text-center px-6' : ''}`}>
              <div className={`prose prose-lg ${theme === 'dark' ? 'prose-invert' : ''} max-w-none`}>
                {section.content}
              </div>
            </div>

            {/* Image Side */}
            <div className={`${section.reverse ? 'lg:order-1' : ''} ${section.fullWidth ? 'mt-16' : ''}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className={`relative rounded-3xl overflow-hidden shadow-2xl ${section.fullWidth ? 'aspect-[21/9]' : 'aspect-[4/5]'}`}
              >
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black/60' : 'from-white/20'} to-transparent`} />
              </motion.div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* References Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-20 border-t border-white/10"
      >
        <ul className="space-y-4 text-sm opacity-50 font-light">
          <li>Isaacson, Walter. <em>Steve Jobs</em>. Simon & Schuster, 2011.</li>
          <li>Schlender, Brent & Tetzeli, Rick. <em>Becoming Steve Jobs</em>. Crown Business, 2015.</li>
          <li>Jobs, Steve. Interviews and speeches (1980s–2000s), including Stanford Commencement Address (2005).</li>
          <li>Markoff, John. “The Return of the Steve Jobs.” <em>The New York Times</em>, 2005.</li>
          <li>Smithsonian Magazine. “What Made Steve Jobs So Visionary?”</li>
          <li>Various archived interviews from Apple and PBS documentaries (<em>Triumph of the Nerds</em>, 1996).</li>
        </ul>
      </motion.section>
    </div>
  );
};
