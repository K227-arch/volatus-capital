import React from 'react';
import { 
  Send, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Award, 
  Users, 
  ArrowUpRight, 
  Flame, 
  Lock, 
  Sparkles 
} from 'lucide-react';
import { VolatusLogo } from './VolatusLogo';

interface HeroSectionProps {
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
  onOpenPricing: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenVerifyModal,
  onOpenTelegramModal,
  onOpenPricing,
}) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambience & Radial Glows (Purple & Gold) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[400px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[350px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy, Trust Badges & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                VOLATUS CAPITAL VIP • SIGNALS ACTIVE
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 tracking-tight leading-[1.12]">
              Institutional Forex & Gold Signals.{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
                Trade With The Elite.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Experience the proven strategies behind thousands of successful traders. High-precision 
              trade setups on <span className="text-amber-400 font-semibold">XAUUSD, BTCUSD, and NAS100</span> with 
              strict institutional risk management and prop firm passing blueprints.
            </p>

            {/* Onboarding Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              {/* Primary Broker CTA */}
              <button
                onClick={onOpenVerifyModal}
                className="relative inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShieldCheck className="w-5 h-5 fill-slate-950/20 text-slate-950" />
                <span>Get Free VIP Access (Broker Method)</span>
                <Sparkles className="w-4 h-4 text-purple-900" />
              </button>

              {/* Secondary Direct Pass */}
              <button
                onClick={onOpenPricing}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 transition-all hover:-translate-y-0.5"
              >
                <span>Direct VIP Subscription</span>
                <span className="text-xs px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-mono">$49/mo</span>
              </button>
            </div>

            {/* Free Telegram Community Link */}
            <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
              <span>Or join our public community first:</span>
              <button
                onClick={onOpenTelegramModal}
                className="inline-flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4 decoration-amber-500/40 hover:decoration-amber-400"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Join Free Telegram (50,000+ Traders)</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">87.4%</div>
                <div className="text-xs font-medium text-slate-400 mt-0.5">Historical Win Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-100 font-mono">+15,200</div>
                <div className="text-xs font-medium text-slate-400 mt-0.5">Pips Captured YTD</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">14,000+</div>
                <div className="text-xs font-medium text-slate-400 mt-0.5">Active VIP Members</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">$2.8M+</div>
                <div className="text-xs font-medium text-slate-400 mt-0.5">Funded Payouts</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Live Signal Preview Card with Volatus Branding */}
          <div className="lg:col-span-5 relative">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-amber-500/30 rounded-3xl blur-xl opacity-70" />

            <div className="relative rounded-2xl bg-gradient-to-b from-[#121624] to-[#0d101b] border border-amber-500/25 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              
              {/* Card Header with Brand Emblem */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <VolatusLogo variant="icon" size="sm" />
                  <div>
                    <div className="text-xs uppercase font-bold tracking-widest text-amber-400">
                      VOLATUS VIP SIGNAL
                    </div>
                    <div className="text-lg font-black text-slate-100 flex items-center gap-2">
                      <span>XAUUSD (Gold)</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        BUY
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-semibold text-slate-400">Timeframe</div>
                  <div className="text-xs font-bold text-slate-200 font-mono">M15 • London/NY</div>
                </div>
              </div>

              {/* Live Signal Prices Table */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Entry Price</div>
                  <div className="text-base font-black text-slate-100 font-mono mt-0.5">2,884.50</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-rose-900/40">
                  <div className="text-[10px] uppercase font-bold text-rose-400">Stop Loss</div>
                  <div className="text-base font-black text-rose-300 font-mono mt-0.5">2,877.00</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-900/40">
                  <div className="text-[10px] uppercase font-bold text-emerald-400">Target 2 (Hit)</div>
                  <div className="text-base font-black text-emerald-300 font-mono mt-0.5">2,902.00</div>
                </div>
              </div>

              {/* Live Gain Counter */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-purple-950/30 to-amber-950/30 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Realized Profit (1 Lot)</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-400 font-mono mt-0.5">
                    +$1,430.00 <span className="text-sm font-semibold text-emerald-300">(+143 pips)</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>TP2 SECURED</span>
                  </span>
                </div>
              </div>

              {/* Trade Blueprint Rationale */}
              <div className="mt-4 text-xs text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                <span className="text-amber-400 font-semibold">Institutional Blueprint: </span>
                Asian low swept at 2,878 with clean reversal displacement into 15m bullish order block.
                Partial profits secured at TP1 &amp; TP2; stop loss trailed to break-even (+65 pips).
              </div>

              {/* Bot Broadcast Details */}
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Send className="w-3.5 h-3.5 text-sky-400" />
                  <span>Broadcasted via Volatus VIP Bot</span>
                </div>
                <span className="text-slate-500 font-mono">14 mins ago</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
