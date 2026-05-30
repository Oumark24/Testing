import { motion } from 'framer-motion';
import { Home, Gift, Users } from 'lucide-react';

const pillars = [
  {
    icon: Home,
    title: 'Personal Visits',
    description: 'We show up in person. Regular, consistent visits to nursing home residents — not just a wave from the door, but real time spent together. Listening. Talking. Being present.',
    color: '#B85C38',
  },
  {
    icon: Gift,
    title: 'Care Baskets',
    description: 'Thoughtfully assembled packages filled with items residents actually need and appreciate. Small things that say: someone thought of you. Someone remembered you.',
    color: '#7A9E7E',
  },
  {
    icon: Users,
    title: 'Community of Care',
    description: 'Building a network of volunteers, donors, and nursing home partners who share the belief that no person — regardless of age or health — should feel alone and forgotten.',
    color: '#C8965A',
  },
];

export default function Mission() {
  return (
    <section id="mission" className="py-20 sm:py-32 bg-[#2C2416] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#C8965A]/10 to-transparent blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-[#7A9E7E] text-sm uppercase tracking-wider mb-4">
            <span>What We Do</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF6EF] mb-4">
            Three pillars of <em className="text-[#C8965A] not-italic">kindness</em>
          </h2>
          
          <p className="text-[#FAF6EF]/50 text-lg max-w-2xl mx-auto">
            KindNest's work is built around three simple but powerful commitments to those who need it most.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#FAF6EF]/5 border border-[#FAF6EF]/10 rounded-xl p-8 transition-all hover:bg-[#FAF6EF]/10"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: `${pillar.color}20` }}
              >
                <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
              </div>
              
              <h3 className="text-xl font-serif font-bold text-[#FAF6EF] mb-4">
                {pillar.title}
              </h3>
              
              <p className="text-[#FAF6EF]/50 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
