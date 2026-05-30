import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="py-20 sm:py-32 bg-gradient-to-b from-[#FAF6EF] to-[#F2E8D9]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24">
              <div className="flex items-center gap-3 text-[#7A9E7E] text-sm uppercase tracking-wider mb-4">
                <div className="w-8 h-px bg-[#7A9E7E]" />
                <span>The Heart Behind It</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6">
                A grandfather's <em className="text-[#B85C38] not-italic">love</em> became our mission
              </h2>

              <div className="bg-[#F2E8D9] p-6 rounded-lg border-l-4 border-[#C8965A]">
                <Quote className="w-8 h-8 text-[#C8965A]/40 mb-2" />
                <p className="font-serif italic text-[#5A4E3E]">
                  "He believed we didn't love him anymore. That broke me — and it changed everything."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 space-y-6 text-[#5A4E3E] text-lg leading-relaxed"
          >
            <p>
              KindNest was born from a deeply personal experience. My grandfather — a man I love deeply — has schizophrenia, a condition that shapes the way he thinks, feels, and connects with the world around him.
            </p>

            <p>
              During that time, <strong className="text-[#B85C38]">he came to believe that our family had stopped loving him.</strong> That pain — real to him, heartbreaking to witness — stayed with me. It made me ask: how many other people in nursing homes and care facilities feel exactly this way, right now?
            </p>

            <p>
              The answer was clear. Loneliness and isolation among the elderly is a quiet crisis. Many residents go days, weeks, or longer without a meaningful visit or a genuine moment of human warmth. Mental health challenges can intensify that sense of abandonment.
            </p>

            <p>
              KindNest exists to change that — one visit, one care basket, one conversation at a time. <strong className="text-[#B85C38]">We believe that presence is powerful.</strong> Showing up — sitting beside someone, looking them in the eye, asking how they're doing — is a profound act of kindness that costs nothing but means everything.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
