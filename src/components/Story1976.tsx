import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { Quote, Zap, Map, Sparkles, BookOpen, Layers, Target, Cpu, TrendingUp, Sunrise } from 'lucide-react';

export const Story1976: React.FC = () => {
  const { theme } = useTheme();

  const sections = [
    {
      id: 'garage',
      icon: <Target className="w-6 h-6" />,
      content: (
        <>
          <p className="text-2xl font-light leading-relaxed mb-8">
            In a quiet suburban garage in Los Altos, California, a revolution began.
          </p>
          <p className="text-xl font-light opacity-80 leading-relaxed mb-8">
            No grand office. No corporate funding. Just a wooden workbench, scattered components, and two young men who believed they could change the world.
          </p>
          <div className={`p-8 border-l-2 mb-8 ${theme === 'dark' ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'}`}>
            <p className="text-2xl italic font-serif">
              Steve Jobs saw possibility. Steve Wozniak saw how to build it.
            </p>
          </div>
          <p className="text-lg font-light opacity-70 leading-relaxed">
            Between vision and engineering, Apple was born.
          </p>
        </>
      ),
      image: "https://tse4.mm.bing.net/th/id/OIP.eBTQnfHkc8W7I0papNgN4QHaFh?w=819&h=611&rs=1&pid=ImgDetMain&o=7&rm=3",
      accent: "from-blue-500/20 to-transparent"
    },
    {
      id: 'partnership',
      icon: <Zap className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            Steve Jobs and Steve Wozniak were not an obvious match, but they were perfectly complementary.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            Wozniak was the technical mastermind. He loved building computers for the sake of elegance and efficiency. Circuits were his language. Precision was his instinct.
          </p>
          <p className="text-lg font-light opacity-80 leading-relaxed mb-6">
            Jobs was different. He was not an engineer, but he understood something deeper. He understood people, experience, and potential.
          </p>
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
            <Quote className="w-8 h-8 text-indigo-400 shrink-0" />
            <p className="text-xl font-medium text-indigo-300">
              “Why not sell it?” Jobs asked when Wozniak designed a personal computer for fun.
            </p>
          </div>
          <p className="text-lg font-light opacity-70 mt-6">
            That question changed everything. Wozniak saw a hobby. Jobs saw a product.
          </p>
        </>
      ),
      image: "https://tse1.mm.bing.net/th/id/OIP.XX-bYYfLPGChCH6gdwal2QHaJk?rs=1&pid=ImgDetMain&o=7&rm=3",
      reverse: true
    },
    {
      id: 'founding',
      icon: <Layers className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            In 1976, Apple Computer was officially founded in the Jobs family garage. The setup was simple. A small team. Limited resources. No safety net.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            To raise capital, Jobs sold his Volkswagen van. Wozniak sold his prized HP calculator. Together, they gathered enough to build their first product. They called it the Apple I.
          </p>
          <p className="text-lg font-light opacity-70 leading-relaxed mb-6">
            Unlike most computers at the time, the Apple I came as a fully assembled circuit board. Customers did not need to solder components themselves. This made it more accessible, though still far from user-friendly by modern standards.
          </p>
          <p className="text-lg font-light leading-relaxed">
            Their first major break came when a local retailer, The Byte Shop, agreed to buy 50 units. But there was a catch: they had to deliver fully assembled boards. The pressure was immediate. The risk was real. Yet they delivered.
          </p>
        </>
      ),
      image: "https://tse3.mm.bing.net/th/id/OIP.P0-Y4niqBvFy0Dl-ClKUYAHaDH?rs=1&pid=ImgDetMain&o=7&rm=3",
      fullWidth: true
    },
    {
      id: 'statement',
      icon: <Cpu className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            The Apple I was not just a machine. It was a statement. At a time when computers were seen as tools for hobbyists or large institutions, Apple introduced the idea that individuals could own and use them.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            Still, it was only the beginning. Jobs already wanted more.
          </p>
          <div className={`p-8 border-l-2 mb-8 ${theme === 'dark' ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'}`}>
            <p className="text-2xl italic font-serif">
              “This is not enough,” he pushed. “We can make it better. We can make it for everyone.”
            </p>
          </div>
          <p className="text-lg font-light opacity-80 leading-relaxed">
            Wozniak went back to work.
          </p>
        </>
      ),
      image: "https://picsum.photos/seed/apple-one/800/1000"
    },
    {
      id: 'apple-ii',
      icon: <Sparkles className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            The Apple II was where Apple truly came to life. Released in 1977, it was one of the first highly successful mass-produced personal computers. Unlike its predecessor, it was designed with the user in mind.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            It came in a plastic case. It supported color graphics. It was ready to use out of the box. This was Jobs’ influence.
          </p>
          <p className="text-lg font-light opacity-80 leading-relaxed mb-6">
            He believed that technology should not intimidate people. It should invite them in. Wozniak engineered the system with remarkable efficiency. Jobs shaped the experience, insisting on design, packaging, and simplicity.
          </p>
          <p className="text-lg font-light leading-relaxed">
            Together, they created something new. Not just a computer, but a product people wanted to own.
          </p>
        </>
      ),
      image: "https://picsum.photos/seed/apple-two/1200/800",
      reverse: true
    },
    {
      id: 'markkula',
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            As Apple gained traction, it needed more than talent. It needed structure and funding. Enter Mike Markkula.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            A former Intel executive, Markkula invested $250,000 into Apple and brought business discipline to the young company. He helped write Apple’s first business plan and defined its core philosophy.
          </p>
          <div className={`p-8 rounded-3xl mb-6 ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-zinc-100 text-black'}`}>
            <ul className="space-y-4 text-sm font-mono uppercase tracking-widest opacity-80">
              <li>• Focus on the customer experience</li>
              <li>• Make products accessible and appealing</li>
              <li>• Build a lasting brand, not just a device</li>
            </ul>
          </div>
          <p className="text-lg font-light opacity-80 leading-relaxed">
            Markkula believed Apple could become a Fortune 500 company. At the time, it sounded ambitious. Soon, it became reality.
          </p>
        </>
      ),
      image: "https://picsum.photos/seed/business-plan/1200/600",
      fullWidth: true
    },
    {
      id: 'philosophy',
      icon: <Sunrise className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            Even in its earliest days, Apple was not just about hardware. It was about how people interacted with technology.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            Jobs pushed relentlessly for simplicity. He challenged complexity at every level. If something felt confusing, it had to be redesigned.
          </p>
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Quote className="w-8 h-8 text-emerald-400 shrink-0" />
            <p className="text-xl font-medium text-emerald-300">
              “Make it simple,” he insisted. “Make it intuitive.”
            </p>
          </div>
          <p className="text-lg font-light opacity-80 leading-relaxed">
            This mindset reflected everything he had learned from his earlier experiences, including his exposure to minimalism and Eastern philosophy. The result was a new standard: technology that felt approachable, design that felt intentional.
          </p>
        </>
      ),
      image: "https://picsum.photos/seed/minimal-design/800/1000"
    },
    {
      id: 'growth',
      icon: <TrendingUp className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            Apple’s growth was rapid. By 1980, just four years after its founding, Apple went public. It became one of the most successful IPOs of its time.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            What started in a garage had become a company valued in the hundreds of millions. But beyond numbers, something more important had been established.
          </p>
          <p className="text-xl font-light opacity-80 leading-relaxed">
            A belief. That individuals could use technology to create, think, and express themselves.
          </p>
        </>
      ),
      image: "https://picsum.photos/seed/ipo-growth/1200/800",
      reverse: true
    },
    {
      id: 'conclusion',
      icon: <Sunrise className="w-6 h-6" />,
      content: (
        <>
          <p className="text-lg font-light leading-relaxed mb-6">
            The founding of Apple marked a turning point in history. It shifted computing from a specialized field into a personal experience. It introduced the idea that technology should serve people, not the other way around.
          </p>
          <p className="text-lg font-light leading-relaxed mb-6">
            And at the center of it all was a partnership built on contrast. Vision and engineering. Intuition and logic. Simplicity and complexity.
          </p>
          <p className="text-2xl font-light tracking-tight mt-8">
            Together, they created something that would not just succeed. It would redefine an industry.
          </p>
        </>
      ),
      image: "https://storage.googleapis.com/webdesignledger.pub.network/WDL/maxresdefault.jpg",
      fullWidth: true
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
                  alt="1976 Milestone"
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
          <li>Wozniak, Steve. <em>iWoz: Computer Geek to Cult Icon</em>. W. W. Norton & Company, 2006.</li>
          <li>Levy, Steven. <em>Hackers: Heroes of the Computer Revolution</em>. Doubleday, 1984.</li>
          <li>Apple Computer, Inc. Early business plans and marketing materials (1976-1980).</li>
          <li>Computer History Museum. "The Apple I and Apple II."</li>
        </ul>
      </motion.section>
    </div>
  );
};
