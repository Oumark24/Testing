import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, ChevronRight } from 'lucide-react';

interface CarePackage {
  id: number;
  name: string;
  description: string;
  items: string[];
  image_url: string;
  requested_count: number;
  delivered_count: number;
}

export default function CarePackages() {
  const [packages, setPackages] = useState<CarePackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/care-packages')
      .then(res => res.json())
      .then(data => {
        setPackages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section id="packages" className="py-20 sm:py-32 bg-[#F2E8D9]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-[#7A9E7E] text-sm uppercase tracking-wider mb-4">
            <span>Care Packages</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Gifts of <em className="text-[#B85C38] not-italic">comfort</em>
          </h2>
          
          <p className="text-[#5A4E3E] text-lg max-w-2xl mx-auto">
            Each care package is thoughtfully curated with items that bring joy and comfort to nursing home residents.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-[#C8965A] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-[#2C2416]/5"
              >
                <div className="h-48 bg-gradient-to-br from-[#E8D5B7] to-[#F2E8D9] flex items-center justify-center">
                  <Package className="w-20 h-20 text-[#C8965A]/40" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-[#2C2416] mb-2">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-[#5A4E3E] text-sm mb-4">
                    {pkg.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.items?.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#F2E8D9] rounded-full text-xs text-[#8A7A68]"
                      >
                        {item}
                      </span>
                    ))}
                    {pkg.items?.length > 3 && (
                      <span className="px-3 py-1 bg-[#F2E8D9] rounded-full text-xs text-[#8A7A68]">
                        +{pkg.items.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#E8D5B7]">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#8A7A68]">Delivered</span>
                      <span className="font-bold text-[#7A9E7E]">{pkg.delivered_count} packages</span>
                    </div>
                    <div className="mt-2 h-2 bg-[#F2E8D9] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#7A9E7E] rounded-full transition-all"
                        style={{
                          width: `${Math.min((pkg.delivered_count / Math.max(pkg.requested_count, 1)) * 100, 100)}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
