import React, { useState } from 'react';
import { Check, Zap, Sparkles, Shield, Gift, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <section id="pricing" className="py-24 bg-[#0A0A0A] relative">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#00D4FF] bg-[#00D4FF]/10 px-3.5 py-1 rounded-full border border-[#00D4FF]/20">
            Investment in Yourself
          </span>
          <h2 className="mt-4 font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Flexible Membership Plans
          </h2>
          <div className="w-16 h-1 bg-[#00D4FF] mx-auto mt-4 rounded-full" />
          
          {/* Explicit requirement: "Free 1-week trial for new members" */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/15 to-[#00D4FF]/15 border border-[#00D4FF]/40 text-sm font-bold text-white shadow-lg">
            <Gift className="w-4 h-4 text-[#00D4FF]" />
            <span>Free 1-week trial for all new members • No lock-in contracts</span>
          </div>

          {/* Currency Toggle */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Currency:</span>
            <div className="inline-flex p-1 rounded-xl bg-[#171717] border border-white/10">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currency === 'INR'
                    ? 'bg-[#00D4FF] text-black shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                ₹ INR (India)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currency === 'USD'
                    ? 'bg-[#00D4FF] text-black shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>
        </div>

        {/* 4 Pricing Tier Cards (Side by side on lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const displayPrice =
              currency === 'INR'
                ? `₹${plan.priceINR.toLocaleString('en-IN')}`
                : `$${plan.priceUSD}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#1E252B] to-[#12161A] border-2 border-[#00D4FF] shadow-[0_0_35px_rgba(0,212,255,0.3)] lg:-translate-y-3'
                    : 'bg-[#141414] hover:bg-[#181818] border border-white/10 hover:border-white/20 shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.perksBadge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg ${
                        isPopular
                          ? 'bg-[#00D4FF] text-black shadow-[#00D4FF]/40'
                          : 'bg-gradient-to-r from-emerald-500 to-teal-400 text-black'
                      }`}
                    >
                      {plan.perksBadge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-black text-2xl text-white">
                      {plan.name}
                    </h3>
                    {isPopular && <Sparkles className="w-5 h-5 text-[#00D4FF]" />}
                  </div>

                  <p className="text-xs text-gray-400 min-h-[32px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="my-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
                        {displayPrice}
                      </span>
                      <span className="text-xs font-semibold text-gray-400">
                        /{plan.billingPeriod}
                      </span>
                    </div>
                    {currency === 'INR' && (
                      <span className="text-[11px] text-gray-500 block mt-1">
                        (approx. ${plan.priceUSD}/mo USD)
                      </span>
                    )}
                  </div>

                  {/* Bullet List of What's Included */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                      What's Included:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                        <div
                          className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center shrink-0 ${
                            isPopular
                              ? 'bg-[#00D4FF] text-black'
                              : 'bg-white/10 text-[#00D4FF]'
                          }`}
                        >
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Join Now Button per Tier */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-4 rounded-xl font-heading font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#00D4FF] to-[#0077FF] text-black hover:shadow-[0_0_25px_rgba(0,212,255,0.7)] hover:scale-[1.02] active:scale-95'
                        : 'bg-white/10 hover:bg-[#00D4FF] text-white hover:text-black hover:shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                    }`}
                  >
                    <Zap className={`w-3.5 h-3.5 ${isPopular ? 'fill-black' : ''}`} />
                    <span>{plan.ctaText}</span>
                  </button>

                  <div className="mt-3 text-center">
                    <span className="text-[10px] text-gray-400 font-medium">
                      ✓ Instant Activation • Cancel Anytime
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate / Custom Consultation Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-white">
                Looking for Corporate Fitness or Custom Athlete Training?
              </h4>
              <p className="text-xs text-gray-400">
                We partner with tech startups, founders, and corporate teams across Bengaluru, Mumbai & Delhi NCR.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-[#00D4FF] uppercase tracking-wider whitespace-nowrap"
          >
            Inquire for Teams
          </a>
        </div>
      </div>
    </section>
  );
};
