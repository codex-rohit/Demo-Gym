import React, { useState } from 'react';
import {
  Calendar,
  MessageCircle,
  CheckCircle2,
  Send,
  Phone,
  User,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const CtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Fat Loss & Conditioning',
    preferredTime: 'Morning (6 AM - 10 AM)',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#12161A] to-[#0A0A0A] border-t border-white/10"
    >
      {/* Dynamic Background Accents */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00D4FF] bg-[#00D4FF]/10 px-3.5 py-1 rounded-full border border-[#00D4FF]/20">
            Take The Leap
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Ready to Start Your Fitness Journey?
          </h2>
          <div className="w-16 h-1 bg-[#00D4FF] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            No sales pressure. Come meet our head coach, test our equipment, and receive a free comprehensive InBody 570 body scan.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Column 1: Book Free Consultation (Left) */}
          <div className="lg:col-span-7 bg-[#171717] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <h3 className="font-heading font-black text-2xl text-white">
                    Book Free Consultation
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Meet with a Master Trainer for a 30-min Movement & Goal Assessment
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-black text-2xl text-white">
                    Consultation Confirmed!
                  </h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto">
                    Thanks <span className="text-[#00D4FF] font-bold">{formData.name}</span>! Our head coach will call you at{' '}
                    <span className="text-white font-mono">{formData.phone}</span> within 2 hours to confirm your slot.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-xl bg-white/10 text-xs font-bold text-gray-300 hover:text-white"
                  >
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                        WhatsApp / Mobile No. *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Primary Goal */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                        Primary Fitness Goal
                      </label>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-3 px-3.5 text-sm text-white outline-none"
                      >
                        <option value="Fat Loss & Conditioning">Fat Loss & Conditioning</option>
                        <option value="Hypertrophy & Muscle Gain">Hypertrophy & Muscle Gain</option>
                        <option value="Olympic Strength & Power">Olympic Strength & Power</option>
                        <option value="Boxing & Combat Fitness">Boxing & Combat Fitness</option>
                        <option value="Posture Rehab & Flexibility">Posture Rehab & Flexibility</option>
                      </select>
                    </div>

                    {/* Preferred Slot */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-3 px-3.5 text-sm text-white outline-none"
                      >
                        <option value="Morning (6 AM - 10 AM)">Morning (6:00 AM – 10:00 AM)</option>
                        <option value="Midday (11 AM - 3 PM)">Midday (11:00 AM – 3:00 PM)</option>
                        <option value="Evening (4 PM - 7 PM)">Evening (4:00 PM – 7:00 PM)</option>
                        <option value="Night (7 PM - 10 PM)">Night (7:00 PM – 10:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#00B4D8] to-[#0077FF] text-black font-heading font-black text-sm uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Send className="w-4 h-4 fill-black text-black" />
                      <span>Confirm Free Studio Consultation</span>
                    </button>
                    <p className="text-[11px] text-gray-500 text-center mt-2">
                      🔒 100% Privacy guaranteed. Zero spam calls.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Join Our Community (Right) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#182128] via-[#14181D] to-[#0E1216] p-8 sm:p-10 rounded-3xl border border-[#00D4FF]/30 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#00D4FF] uppercase tracking-wider">
                    <Flame className="w-4 h-4 text-[#00D4FF]" />
                    <span>The DEMO Tribe</span>
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white mt-1">
                    Join Our Community
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Fitness is 10x easier when surrounded by people who refuse to quit. Join over 2,500 athletes who train, connect, and celebrate progress together in India.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Free InBody 570 Composition Analysis
                    </h4>
                    <p className="text-xs text-gray-400">
                      Understand your skeletal muscle mass, visceral fat, and metabolic baseline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      WhatsApp Athletes Accountability Hub
                    </h4>
                    <p className="text-xs text-gray-400">
                      Daily coach workouts, meal prep ideas, and member milestone spotlights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Saturday Sunrise Run & Fight Club
                    </h4>
                    <p className="text-xs text-gray-400">
                      Free outdoor 5K / 10K endurance runs across Cubbon Park & Bandra Promenade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <a
                href="https://wa.me/919876543210?text=Hi%20DEMO%20Fitness!%20I%20would%20like%20to%20know%20more%20about%20your%20studio%20and%20claim%20my%20free%20trial."
                target="_blank"
                rel="noreferrer noopener"
                className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-heading font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_25px_rgba(37,211,102,0.4)]"
              >
                <MessageCircle className="w-4 h-4 fill-black text-black" />
                <span>Chat on WhatsApp (+91 98765 43210)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
