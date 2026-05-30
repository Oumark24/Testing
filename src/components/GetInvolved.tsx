import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Mail, Send, CheckCircle } from 'lucide-react';

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState<'volunteer' | 'contact'>('volunteer');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    interests: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const endpoint = activeTab === 'volunteer' ? '/api/volunteers' : '/api/contact';
      const body = activeTab === 'volunteer'
        ? {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            availability: formData.availability,
            interests: formData.interests,
          }
        : {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          availability: '',
          interests: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      console.error('Submit error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="get-involved" className="py-20 sm:py-32 bg-gradient-to-b from-[#FAF6EF] to-[#F2E8D9]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-[#7A9E7E] text-sm uppercase tracking-wider mb-4">
            <span>Get Involved</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Be part of something <em className="text-[#B85C38] not-italic">kind</em>
          </h2>
          
          <p className="text-[#5A4E3E] text-lg max-w-2xl mx-auto">
            Whether you volunteer, donate, or simply share KindNest's story — you're helping make sure that someone out there feels a little less alone today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-[#2C2416]/5 flex gap-4">
              <div className="w-14 h-14 rounded-full bg-[#B85C38]/10 flex items-center justify-center flex-shrink-0">
                <Heart className="w-7 h-7 text-[#B85C38]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2C2416] mb-1">Make a Donation</h3>
                <p className="text-[#5A4E3E] text-sm">
                  Your contribution helps us create care packages and organize visits. Every amount makes a difference.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-[#2C2416]/5 flex gap-4">
              <div className="w-14 h-14 rounded-full bg-[#7A9E7E]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-[#7A9E7E]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2C2416] mb-1">Become a Volunteer</h3>
                <p className="text-[#5A4E3E] text-sm">
                  Join our community of caring individuals who visit nursing homes and assemble care packages.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-[#2C2416]/5 flex gap-4">
              <div className="w-14 h-14 rounded-full bg-[#C8965A]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-[#C8965A]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2C2416] mb-1">Partner With Us</h3>
                <p className="text-[#5A4E3E] text-sm">
                  Are you a nursing home or organization? Let's work together to bring joy to more residents.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl shadow-[#2C2416]/10"
          >
            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setActiveTab('volunteer')}
                className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'volunteer'
                    ? 'bg-[#B85C38] text-white'
                    : 'bg-[#F2E8D9] text-[#5A4E3E] hover:bg-[#E8D5B7]'
                }`}
              >
                Volunteer
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'contact'
                    ? 'bg-[#B85C38] text-white'
                    : 'bg-[#F2E8D9] text-[#5A4E3E] hover:bg-[#E8D5B7]'
                }`}
              >
                Contact Us
              </button>
            </div>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-[#7A9E7E]/10 rounded-lg flex items-center gap-3 text-[#7A9E7E]"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Thank you! We'll be in touch soon.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#2C2416] mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8D5B7] focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2C2416] mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#E8D5B7] focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              {activeTab === 'volunteer' ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#2C2416] mb-1">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8D5B7] focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20 outline-none transition-all"
                      placeholder="(optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C2416] mb-1">Availability</label>
                    <select
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8D5B7] focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20 outline-none transition-all bg-white"
                    >
                      <option value="">Select availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="evenings">Evenings</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C2416] mb-1">Interests</label>
                    <textarea
                      value={formData.interests}
                      onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8D5B7] focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20 outline-none transition-all resize-none"
                      placeholder="What would you like to help with?"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#2C2416] mb-1">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8D5B7] focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20 outline-none transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C2416] mb-1">Message *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#E8D5B7] focus:border-[#B85C38] focus:ring-2 focus:ring-[#B85C38]/20 outline-none transition-all resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                </>
              )}

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-[#B85C38] text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#2C2416] transition-colors disabled:opacity-50"
              >
                {submitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{activeTab === 'volunteer' ? 'Sign Up' : 'Send Message'}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
