import React, { useState } from 'react';
import {
  Dumbbell,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Send,
  ArrowUp,
  CheckCircle2
} from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070707] text-gray-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00D4FF] to-[#0077FF] flex items-center justify-center text-black shadow-lg shadow-[#00D4FF]/20">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading text-2xl font-black text-white tracking-wider">
                  DEMO
                </span>
                <span className="text-[10px] tracking-widest font-semibold text-[#00D4FF] block -mt-1 uppercase">
                  FITNESS STUDIO • INDIA
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              India’s high-performance athletic studio. Olympic weightlifting, biomechanical strength, HIIT metabolic conditioning, and recovery engineering.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-3">
                Follow The Community:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00D4FF] hover:text-black text-gray-300 flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00D4FF] hover:text-black text-gray-300 flex items-center justify-center transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#00D4FF] hover:text-black text-gray-300 flex items-center justify-center transition-all"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] hover:text-black text-[#25D366] flex items-center justify-center transition-all"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Quick Nav
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-[#00D4FF] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#00D4FF] transition-colors">Our Programs</a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-[#00D4FF] transition-colors">Meet Coaches</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-[#00D4FF] transition-colors">Class Schedule</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#00D4FF] transition-colors">Real Transformations</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#00D4FF] transition-colors">Pricing & Plans</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00D4FF] transition-colors">Book Consultation</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours (Mon-Sun) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00D4FF]" />
              <span>Studio Hours</span>
            </h4>
            <div className="space-y-2 text-sm">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <div className="flex justify-between text-gray-200 font-medium">
                  <span>Mon – Fri:</span>
                  <span className="text-[#00D4FF] font-semibold">{GYM_INFO.hours.weekdays}</span>
                </div>
                <div className="flex justify-between text-gray-200 font-medium">
                  <span>Saturday:</span>
                  <span className="text-[#00D4FF] font-semibold">6:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-200 font-medium">
                  <span>Sunday:</span>
                  <span className="text-white font-semibold">{GYM_INFO.hours.weekends}</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 italic">
                * Note: Studio batches start at 6:00 AM sharp. Last class commences at 7:00 PM.
              </p>
            </div>

            {/* Contact details */}
            <div className="pt-2 space-y-1.5 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00D4FF]" />
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#00D4FF]" />
                <a href="mailto:hello@demofitness.in" className="hover:text-white">
                  hello@demofitness.in
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#00D4FF] shrink-0 mt-0.5" />
                <span>100 Feet Road, Indiranagar, Bengaluru, KA 560038</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup: "Get fitness tips + exclusive offers" */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Weekly Newsletter
            </h4>
            <p className="text-xs text-gray-300">
              Get fitness tips + exclusive offers, biomechanics deep-dives, and nutrition protocols delivered to your inbox every Sunday.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-[#141414] border border-white/15 focus:border-[#00D4FF] rounded-xl py-2.5 pl-3 pr-10 text-xs text-white placeholder-gray-500 outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#00D4FF] hover:bg-[#38bdf8] text-black transition-colors flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5 fill-black text-black" />
                  </button>
                </div>
                <span className="text-[10px] text-gray-500 block">
                  Join 4,200+ athletes. Unsubscribe at any time.
                </span>
              </form>
            )}

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-[#00D4FF] transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} DEMO Fitness Studio India Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-200 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-200 transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-gray-200 transition-colors">Gym Rules & Etiquette</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
