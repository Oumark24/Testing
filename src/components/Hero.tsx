import { motion } from 'framer-motion';
import { Heart, Users, Gift, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#E8D5B7]/40 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#7A9E7E]/20 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A9E7E]/10 text-[#7A9E7E] text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Compassion in Action</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6">
              No one should feel <em className="text-[#B85C38] not-italic">forgotten.</em>
            </h1>

            <p className="text-lg sm:text-xl text-[#5A4E3E] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              KindNest brings warmth, presence, and dignity to elderly residents in nursing homes — because every person deserves to feel seen, loved, and remembered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#get-involved')}
                className="px-8 py-4 bg-[#B85C38] text-white rounded-lg font-medium text-lg hover:bg-[#2C2416] transition-colors shadow-lg shadow-[#B85C38]/20"
              >
                Support KindNest
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo('#story')}
                className="px-8 py-4 border-2 border-[#B85C38] text-[#B85C38] rounded-lg font-medium text-lg hover:bg-[#B85C38] hover:text-white transition-colors"
              >
                Our Story
              </motion.button>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[500px] h-[500px] mx-auto">
              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-[#C8965A]/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full border border-[#C8965A]/15"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-16 rounded-full border border-[#C8965A]/10"
              />

              {/* Center card */}
              <div className="absolute inset-24 bg-[#F2E8D9] rounded-full flex flex-col items-center justify-center shadow-2xl">
                <Heart className="w-16 h-16 text-[#B85C38] mb-2" />
                <p className="text-2xl font-serif font-bold text-[#B85C38]">Every</p>
                <p className="text-sm uppercase tracking-wider text-[#8A7A68]">person matters</p>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 left-0 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-[#7A9E7E]" />
                <span className="text-sm font-medium">Community visits</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-16 left-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
              >
                <Gift className="w-4 h-4 text-[#C8965A]" />
                <span className="text-sm font-medium">Care packages</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-24 right-0 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-[#B85C38]" />
                <span className="text-sm font-medium">Real connection</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
