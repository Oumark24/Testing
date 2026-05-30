import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  content: string;
  author_name: string;
  author_role: string;
  created_at: string;
}

export default function Stories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('/api/stories')
      .then(res => res.json())
      .then(data => {
        setStories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const next = () => setActiveIndex((i) => (i + 1) % stories.length);
  const prev = () => setActiveIndex((i) => (i - 1 + stories.length) % stories.length);

  return (
    <section id="stories" className="py-20 sm:py-32 bg-[#2C2416] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#C8965A]/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-[#7A9E7E] text-sm uppercase tracking-wider mb-4">
            <span>Stories of Impact</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF6EF] mb-4">
            Voices from our <em className="text-[#C8965A] not-italic">community</em>
          </h2>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-[#C8965A] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : stories.length > 0 ? (
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-[#FAF6EF]/5 border border-[#FAF6EF]/10 rounded-2xl p-8 sm:p-12"
            >
              <Quote className="w-12 h-12 text-[#C8965A]/30 mb-6" />
              
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#FAF6EF] mb-4">
                {stories[activeIndex].title}
              </h3>
              
              <p className="text-[#FAF6EF]/70 text-lg leading-relaxed mb-8">
                {stories[activeIndex].content}
              </p>
              
              <div>
                <p className="text-[#C8965A] font-bold">{stories[activeIndex].author_name}</p>
                <p className="text-[#FAF6EF]/50 text-sm">{stories[activeIndex].author_role}</p>
              </div>
            </motion.div>

            {stories.length > 1 && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="p-3 rounded-full bg-[#FAF6EF]/10 text-[#FAF6EF] hover:bg-[#FAF6EF]/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex gap-2">
                  {stories.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === activeIndex ? 'w-8 bg-[#C8965A]' : 'bg-[#FAF6EF]/30'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={next}
                  className="p-3 rounded-full bg-[#FAF6EF]/10 text-[#FAF6EF] hover:bg-[#FAF6EF]/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-[#FAF6EF]/50">
            <p>No stories yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </section>
  );
}
