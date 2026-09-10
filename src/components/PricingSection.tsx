import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Send, 
  Sparkles, 
  Zap, 
  ExternalLink 
} from 'lucide-react';
import { VolatusEmblem } from './VolatusLogo';

interface PricingSectionProps {
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onOpenVerifyModal,
  onOpenTelegramModal,
}) => {
  return (
    <section id="pricing" className="py-20 relative bg-[#090b14]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Transparent Membership Options</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Choose Your VIP Access Pathway
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Get 100% free access through our partner broker, or purchase a direct pass if you already trade with your own preferred broker.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Tier 1: Free via Partner Broker (FEATURED) */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#181d30] to-[#0e1220] border-2 border-amber-400 p-7 sm:p-8 shadow-[0_0_40px_rgba(245,158,11,0.25)] flex flex-col justify-between transform md:-translate-y-2">
            {/* Best Value Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
              Most Popular • 100% Free
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-black text-slate-100">Broker VIP Access</h3>
                  <div className="text-xs text-slate-400 mt-0.5">Via Exness / Partner Broker</div>
                </div>
                <VolatusEmblem className="w-8 h-8" />
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-black text-amber-400 font-mono">$0</span>
                <span className="text-sm font-semibold text-slate-400">/ forever</span>
              </div>
              <p className="mt-2 text-xs text-slate-300">
                Deposit minimum $50 into your own trading account. Zero monthly fees.
              </p>

              {/* Features list */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Full VIP Telegram Channel access</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>All Gold, Crypto, and Index trade signals</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Volatus Academy video courses &amp; PDF guides</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Automated instant Telegram Bot invitation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Exclusive Funding Pips discount promo code</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onOpenVerifyModal}
                className="w-full py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 fill-slate-950/20" />
                <span>Get Free VIP Access</span>
              </button>
            </div>
          </div>

          {/* Tier 2: 1 Month Direct Pass */}
          <div className="rounded-3xl bg-gradient-to-b from-[#121624] to-[#0c0f18] border border-slate-800 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="pb-4 border-b border-slate-800">
                <h3 className="text-xl font-bold text-slate-100">1-Month Direct</h3>
                <div className="text-xs text-slate-400 mt-0.5">Keep your existing broker</div>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-black text-slate-100 font-mono">$49</span>
                <span className="text-sm font-semibold text-slate-400">/ month</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Cancel anytime. Ideal for testing our setups with any broker of your choice.
              </p>

              {/* Features list */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>30 Days full VIP Telegram access</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>2 to 5 institutional signals daily</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Real-time SL trailing &amp; TP updates</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Access to live weekly market outlook webinars</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onOpenTelegramModal}
                className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Purchase 1-Month Pass</span>
              </button>
            </div>
          </div>

          {/* Tier 3: 12-Month Lifetime Annual Pass */}
          <div className="rounded-3xl bg-gradient-to-b from-[#121624] to-[#0c0f18] border border-slate-800 p-7 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="pb-4 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-100">12-Month Annual</h3>
                  <div className="text-xs text-slate-400 mt-0.5">Maximum commitment &amp; savings</div>
                </div>
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Save 40%
                </span>
              </div>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-black text-slate-100 font-mono">$349</span>
                <span className="text-sm font-semibold text-slate-400">/ year</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Only ~$29/month. Includes 1-on-1 strategy onboarding session.
              </p>

              {/* Features list */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>365 Days VIP access with zero renewals</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Private 1-on-1 strategy call with lead analyst</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Automated copy-trading MT4/MT5 bridge</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Priority 24/7 dedicated support via Telegram</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onOpenTelegramModal}
                className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Purchase Annual Pass</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
