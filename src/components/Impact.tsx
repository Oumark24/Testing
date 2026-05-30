import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Package, Users, Calendar } from 'lucide-react';

interface ImpactStats {
  visits_count: number;
  packages_delivered: number;
  volunteers_count: number;
}

export default function Impact() {
  const [stats, setStats] = useState<ImpactStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/impact')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const statItems = [
    { icon: Calendar, label: 'Visits Made', value: stats?.visits_count || 0, color: '#B85C38' },
    { icon: Package, label: 'Packages Delivered', value: stats?.packages_delivered || 0, color: '#7A9E7E' },
    { icon: Users, label: 'Active Volunteers', value: stats?.volunteers_count || 0, color: '#C8965A' },
  ];

  return (
    <section id="impact" className="py-20 sm:py-32 bg-gradient-to-b from-[#F2E8D9]/30 to-[#FAF6EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-[#7A9E7E] text-sm uppercase tracking-wider mb-4">
            <span>Our Impact</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Making a <em className="text-[#B85C38] not-italic">difference</em> together
          </h2>
          
          <p className="text-[#5A4E3E] text-lg max-w-2xl mx-auto">
            Every number represents a moment of connection, a gesture of care, a life touched.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-[#C8965A] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid sm:grid-cols-3 gap-8">
            {statItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-xl shadow-[#2C2416]/5"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                
                <motion.p
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="text-5xl font-serif font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.value.toLocaleString()}
                </motion.p>
                
                <p className="text-[#8A7A68] uppercase tracking-wider text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-[#B85C38]">
            <Heart className="w-5 h-5" />
            <span className="text-lg italic font-serif">
              "Every act of kindness creates a ripple that reaches farther than we can see."
            </span>
            <Heart className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
