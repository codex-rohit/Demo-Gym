import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, MapPin, Zap, Shield } from 'lucide-react';
import { ClassSession, PricingPlan, Trainer } from '../types';
import { CITIES } from '../data/gymData';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose, initialPlan }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Bengaluru (Indiranagar)',
    plan: initialPlan || 'Free 7-Day Trial Pass',
    preferredDate: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#141414] border border-[#00D4FF]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#00D4FF]/20 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-black text-2xl text-white">
              7-Day Pass Activated!
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
              Welcome, <span className="text-[#00D4FF] font-bold">{formData.name}</span>! Your pass for{' '}
              <span className="text-white font-semibold">{formData.city}</span> has been confirmed. A concierge will send your QR check-in code to{' '}
              <span className="text-white font-mono">{formData.phone}</span> on WhatsApp.
            </p>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-gray-400">
              📍 Location: 100 Feet Road, Indiranagar • Bring clean indoor shoes and workout attire!
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-8 py-3 rounded-xl bg-[#00D4FF] text-black font-heading font-black text-xs uppercase tracking-wider hover:bg-[#38bdf8] transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D4FF] bg-[#00D4FF]/10 px-3 py-1 rounded-full border border-[#00D4FF]/20">
                Exclusive Trial Pass
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase mt-2">
                Start Your Free 7-Day Pass
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Full studio access, 1 complimentary InBody 570 scan, and unlimited class trials.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Phone (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-2.5 pl-9 pr-3 text-sm text-white placeholder-gray-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Preferred City / Studio
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-2.5 px-3 text-xs text-white outline-none"
                  >
                    {CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                    Plan / Interest
                  </label>
                  <input
                    type="text"
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-2.5 px-3 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0077FF] text-black font-heading font-extrabold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(0,212,255,0.6)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-black text-black" />
                  <span>Activate Free 7-Day Pass</span>
                </button>
                <div className="mt-2 text-center text-[10px] text-gray-400">
                  No credit card required. Zero spam guarantee.
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface ReserveModalProps {
  session: ClassSession | null;
  onClose: () => void;
}

export const ReserveClassModal: React.FC<ReserveModalProps> = ({ session, onClose }) => {
  const [reserved, setReserved] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  if (!session) return null;

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    setReserved(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#141414] border border-[#00D4FF]/40 rounded-3xl p-6 sm:p-7 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>

        {reserved ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-heading font-black text-xl text-white">
              Spot Reserved!
            </h3>
            <p className="text-xs text-gray-300">
              Great choice, <span className="text-white font-bold">{userName}</span>. You are locked in for{' '}
              <span className="text-[#00D4FF] font-bold">{session.name}</span> with Coach {session.trainer}.
            </p>
            <div className="p-3 bg-white/5 rounded-xl text-xs text-gray-300">
              ⏰ {session.day} at {session.time}
            </div>
            <button
              onClick={() => {
                setReserved(false);
                onClose();
              }}
              className="mt-3 px-6 py-2 rounded-xl bg-[#00D4FF] text-black font-heading font-bold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D4FF] bg-[#00D4FF]/10 px-2.5 py-0.5 rounded-full border border-[#00D4FF]/20">
                Reserve Studio Spot
              </span>
              <h3 className="font-heading font-black text-xl text-white mt-2">
                {session.name}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-300">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#00D4FF]" />
                  {session.day} • {session.time}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-gray-400" />
                  {session.trainer}
                </span>
              </div>
            </div>

            <form onSubmit={handleReserve} className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Arjun Menon"
                  className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-2 px-3 text-xs text-white placeholder-gray-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-300 uppercase tracking-wider mb-1">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#101010] border border-white/15 focus:border-[#00D4FF] rounded-xl py-2 px-3 text-xs text-white placeholder-gray-500 outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0077FF] text-black font-heading font-extrabold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all"
                >
                  Confirm Free Reservation ({session.spotsLeft} spots left)
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
