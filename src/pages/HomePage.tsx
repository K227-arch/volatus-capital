import React, { useState } from 'react';
import { PageType } from '../types';
import { VolatusEmblem, VolatusLogo } from '../components/VolatusLogo';
import { 
  Send, 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Play, 
  ArrowUpRight, 
  Mail, 
  Globe, 
  ExternalLink,
  ChevronUp,
  Quote,
  Flame,
  ShieldCheck,
  TrendingUp,
  Sparkles
} from 'lucide-react';

import heroMainImage from '../assets/images/volatus_trading_desk_1789075933658.jpg';
import heroWarmImage from '../assets/images/volatus_chart_macro_1789075946232.jpg';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenVerifyModal,
  onOpenTelegramModal,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [footerEmail, setFooterEmail] = useState('');
  const [footerSubscribed, setFooterSubscribed] = useState(false);
  const [showCookieNotice, setShowCookieNotice] = useState(true);
  const [activeStoryModal, setActiveStoryModal] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  const handleFooterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail.trim()) {
      setFooterSubscribed(true);
      setTimeout(() => setFooterSubscribed(false), 5000);
      setFooterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0c0d12] text-[#e5e7eb] font-sans overflow-x-hidden selection:bg-[#f5b842]/30 selection:text-[#f5b842]">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION matching exact screenshot */}
      {/* ======================================================== */}
      <section id="hero-section" className="pt-32 sm:pt-40 pb-20 sm:pb-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Bio, Buttons, Stats */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Top Location Micro Tag */}
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] text-[#d49e35] uppercase select-none">
                <span>&bull;</span>
                <span>INSTITUTIONAL FOREX</span>
                <span>&bull;</span>
                <span>GOLD &amp; CRYPTO</span>
                <span>&bull;</span>
                <span>GLOBAL DESK</span>
              </div>

              {/* Main Headline in Editorial Serif Typography */}
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-editorial font-medium text-white tracking-tight leading-[1.04]">
                  Built with precision.
                </h1>
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-editorial font-medium italic text-[#f5b842] tracking-tight leading-[1.04]">
                  Shared with traders.
                </h2>
              </div>

              {/* Bio Paragraph */}
              <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl font-normal">
                Volatus Capital is an elite institutional forex collective and trading education desk. Over twenty-five thousand traders 
                sit in the room where real market execution, verified setups, and Smart Money Concepts happen.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  id="hero-join-vip-btn"
                  onClick={onOpenTelegramModal}
                  className="px-8 py-3.5 rounded-full text-sm font-bold text-black bg-[#f5b842] hover:bg-[#e8aa34] shadow-[0_4px_20px_rgba(245,184,66,0.3)] hover:shadow-[0_6px_25px_rgba(245,184,66,0.45)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Join VIP
                </button>

                <button
                  id="hero-broker-free-btn"
                  onClick={onOpenVerifyModal}
                  className="px-7 py-3.5 rounded-full text-sm font-medium text-white bg-[#151722]/80 hover:bg-[#1f2232] border border-white/15 hover:border-white/30 transition-all cursor-pointer"
                >
                  Get VIP free with a broker
                </button>
              </div>

              {/* Stats Row */}
              <div className="pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-tight">
                    25K+
                  </div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-semibold mt-0.5">
                    In the room
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-tight">
                    2M+
                  </div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-semibold mt-0.5">
                    Followers
                  </div>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-tight">
                    Free
                  </div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-slate-400 font-semibold mt-0.5">
                    To get started
                  </div>
                </div>
              </div>

              {/* Sub-ticker markets */}
              <div className="flex items-center gap-6 text-[11px] font-mono tracking-wider text-slate-400">
                <span>XAUUSD &mdash;</span>
                <span>BTCUSD &mdash;</span>
                <span>NAS100 &mdash;</span>
              </div>

            </div>

            {/* Right Column: Layered Creator Portraits matching screenshot */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              
              <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
                
                {/* Main Framed Photo */}
                <div className="relative rounded-3xl overflow-hidden bg-[#151722] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[4/5]">
                  <img
                    src={heroMainImage}
                    alt="Volatus Capital institutional trading desk"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Right "EST. 2019" Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase font-bold tracking-widest text-white/80 px-3 py-1 rounded-full">
                    EST. 2019
                  </div>
                </div>

                {/* Overlaid Polaroid Portrait (Bottom-Left) */}
                <div className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-10 w-[180px] sm:w-[210px] rounded-2xl overflow-hidden bg-[#181a24] border border-white/15 p-2.5 shadow-[0_25px_50px_rgba(0,0,0,0.85)] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="rounded-xl overflow-hidden aspect-square bg-[#0c0d12]">
                    <img
                      src={heroWarmImage}
                      alt="Volatus Capital live market charts"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-2 px-1 text-[11px] font-editorial italic text-slate-300 truncate">
                    ... institutional execution.
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. "INSIDE THE ROOM / This is what lands in your pocket." */}
      {/* ======================================================== */}
      <section id="room-section" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Mobile Phone Signal Mock matching screenshot */}
            <div className="lg:col-span-5 flex justify-center">
              
              <div className="w-full max-w-[360px] rounded-[32px] bg-[#11131a] border border-white/10 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative">
                
                {/* Top VIP Room Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#151722] border border-white/15 flex items-center justify-center p-1 shadow-sm">
                      <VolatusEmblem className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">
                        Volatus FX VIP
                      </div>
                      <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        ONLINE
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">15:42 GMT</span>
                </div>

                {/* 3 Live Signal Cards */}
                <div className="space-y-3">
                  
                  {/* Signal 1: XAUUSD BUY */}
                  <div className="rounded-xl bg-[#171923] border border-white/[0.06] p-3.5 hover:border-[#f5b842]/30 transition-all">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-bold text-sm text-white tracking-wide">XAUUSD</span>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        BUY
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] pb-2 border-b border-white/[0.05]">
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">Entry</div>
                        <div className="font-mono font-semibold text-slate-200">2350.20</div>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">Stop</div>
                        <div className="font-mono font-semibold text-rose-300">2344.00</div>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">Target</div>
                        <div className="font-mono font-semibold text-emerald-300">2362.00</div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <Check className="w-3 h-3" /> CONFIRMED &bull; 15M
                      </span>
                      <span className="text-slate-500 font-mono">+118 pips</span>
                    </div>
                  </div>

                  {/* Signal 2: BTCUSD SELL */}
                  <div className="rounded-xl bg-[#171923] border border-white/[0.06] p-3.5 hover:border-[#f5b842]/30 transition-all">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-bold text-sm text-white tracking-wide">BTCUSD</span>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        SELL
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] pb-2 border-b border-white/[0.05]">
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">Entry</div>
                        <div className="font-mono font-semibold text-slate-200">64,180</div>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">Stop</div>
                        <div className="font-mono font-semibold text-rose-300">64,900</div>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">Target</div>
                        <div className="font-mono font-semibold text-emerald-300">62,700</div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="text-rose-400 font-medium flex items-center gap-1">
                        <Check className="w-3 h-3" /> CONFIRMED &bull; 1H
                      </span>
                      <span className="text-slate-500 font-mono">+1,480 pts</span>
                    </div>
                  </div>

                  {/* Signal 3: NAS100 BUY */}
                  <div className="rounded-xl bg-[#171923] border border-white/[0.06] p-3.5 hover:border-[#f5b842]/30 transition-all">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="font-bold text-sm text-white tracking-wide">NAS100</span>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        BUY
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] pb-2 border-b border-white/[0.05]">
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">Entry</div>
                        <div className="font-mono font-semibold text-slate-200">20,412</div>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">Stop</div>
                        <div className="font-mono font-semibold text-rose-300">20,130</div>
                      </div>
                      <div>
                        <div className="text-[9px] uppercase tracking-wider text-slate-400">Target</div>
                        <div className="font-mono font-semibold text-emerald-300">20,610</div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <Check className="w-3 h-3" /> CONFIRMED &bull; 15M
                      </span>
                      <span className="text-slate-500 font-mono">+198 pts</span>
                    </div>
                  </div>

                </div>

                {/* Footer disclaimer tag on mock */}
                <div className="mt-4 text-center text-[9px] uppercase tracking-widest text-slate-500 font-semibold">
                  Sample Format, Not Live Calls
                </div>

              </div>

            </div>

            {/* Right: Copy & Bullet List matching screenshot */}
            <div className="lg:col-span-7 space-y-7">
              
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase">
                Inside the room
              </div>

              <div className="space-y-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-medium text-white tracking-tight leading-[1.08]">
                  This is what lands
                </h2>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-medium italic text-[#f5b842] tracking-tight leading-[1.08]">
                  in your pocket.
                </h3>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                No screenshots of wins after the fact. You get the pair, the direction, the entry, 
                the stop and the targets, sent the moment the setup confirms, with the reasoning behind it.
              </p>

              {/* Three Pillars */}
              <div className="space-y-5 pt-3">
                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-[2px] bg-[#f5b842] mt-3 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Confirmed, not guessed
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 leading-normal">
                      Checked against the live price before anything is sent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-[2px] bg-[#f5b842] mt-3 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Sent when it happens
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 leading-normal">
                      Straight to Telegram, not buried in a feed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2.5 h-[2px] bg-[#f5b842] mt-3 shrink-0" />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Three markets, done well
                    </h4>
                    <p className="text-sm text-slate-400 mt-1 leading-normal">
                      Gold, Bitcoin and the Nasdaq, instead of thirty pairs covered badly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Link CTA */}
              <div className="pt-4">
                <button
                  onClick={onOpenTelegramModal}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#f5b842] transition-colors cursor-pointer group"
                >
                  <span>See the community</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#f5b842]" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. "THREE WAYS IN / Pick the route that suits you." */}
      {/* ======================================================== */}
      <section id="routes-section" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#0c0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-3">
              Three ways in
            </div>
            <h2 className="text-3xl sm:text-5xl font-editorial font-medium text-white tracking-tight">
              Pick the route that suits you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Route 1: FREE */}
            <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-[#f5b842]/40 transition-all group">
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-[#f5b842] mb-5">
                  Free
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Verify a broker account
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Sign up with the partner broker through Volatus Capital and VIP access is on the house for as long as you trade.
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenVerifyModal}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#f5b842] transition-colors cursor-pointer"
                >
                  <span>Verify now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#f5b842] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Route 2: PAID */}
            <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-[#f5b842]/40 transition-all group">
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-5">
                  Paid
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Subscribe directly
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Prefer to keep your broker where it is? Pay monthly and get the same room, the same signals.
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('pricing')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#f5b842] transition-colors cursor-pointer"
                >
                  <span>See plans</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#f5b842] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Route 3: FUNDED */}
            <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-[#f5b842]/40 transition-all group">
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 mb-5">
                  Funded
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Trade someone else's capital
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Get funded through the Funding Pips partnership and keep the discount code on your first challenge.
                </p>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('funding')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#f5b842] transition-colors cursor-pointer"
                >
                  <span>Get funded</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#f5b842] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. "THE PHILOSOPHY / From discipline to market mastery." */}
      {/* ======================================================== */}
      <section id="story-section" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Story Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase">
                The Philosophy
              </div>

              <div className="space-y-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-medium text-white tracking-tight leading-[1.08]">
                  From discipline to
                </h2>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-medium italic text-[#f5b842] tracking-tight leading-[1.08]">
                  Market mastery.
                </h3>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                Volatus Capital was founded on a singular standard: institutional trading strategies shouldn't be locked behind closed doors. 
                We deliver real-time Smart Money Concepts (SMC), live order blocks, and disciplined execution to twenty-five thousand traders globally.
              </p>

              <div className="pt-3">
                <button
                  onClick={() => setActiveStoryModal('full-story')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#f5b842] transition-colors cursor-pointer group"
                >
                  <span>Read the full story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#f5b842] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Testimonials Column (2 Quote Cards) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Quote 1 */}
              <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-7 relative">
                <Quote className="w-6 h-6 text-[#f5b842]/50 mb-3" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  "Volatus keeps it completely transparent about risk while delivering top-tier institutional execution. That discipline is rare in forex."
                </p>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400">
                  <strong className="text-white font-semibold">Verified Member</strong> &bull; Gold Trader
                </div>
              </div>

              {/* Quote 2 */}
              <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-7 relative">
                <Quote className="w-6 h-6 text-[#f5b842]/50 mb-3" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  "The accuracy of the London and New York session setups inside the Volatus room transformed how I navigate liquidity grabs."
                </p>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400">
                  <strong className="text-white font-semibold">Funded Trader</strong> &bull; Funding Pips $100K
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. "OFF THE CHARTS / The rest of the work" */}
      {/* ======================================================== */}
      <section id="social-section" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#0c0d12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-3">
              Off the charts
            </div>
            <h2 className="text-3xl sm:text-5xl font-editorial font-medium text-white tracking-tight">
              Across the community
            </h2>
          </div>

          {/* 3 Main Social Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Telegram VIP Card */}
            <div
              onClick={onOpenTelegramModal}
              className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-8 aspect-[4/3] flex flex-col justify-between hover:border-[#f5b842]/40 transition-all group relative overflow-hidden cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#f5b842]/10 border border-[#f5b842]/30 flex items-center justify-center text-[#f5b842]">
                  <Send className="w-6 h-6 fill-[#f5b842]" />
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4 ml-0.5" />
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Volatus VIP Telegram
                </h3>
                <p className="text-xs text-slate-400">
                  25,000+ members &bull; Verified Setups
                </p>
              </div>
            </div>

            {/* YouTube / Analysis Card */}
            <a
              href="https://youtube.com/@volatuscapital"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-8 aspect-[4/3] flex flex-col justify-between hover:border-white/20 transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">
                  <svg className="w-6 h-6 fill-current text-red-500" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Watch Market Breakdowns
                </h3>
                <p className="text-xs text-slate-400">
                  Live Streams &bull; SMC Education
                </p>
              </div>
            </a>

            {/* Instagram / Twitter Card */}
            <a
              href="https://instagram.com/volatuscapital"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-8 aspect-[4/3] flex flex-col justify-between hover:border-white/20 transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Follow on Instagram
                </h3>
                <p className="text-xs text-slate-400">
                  @volatuscapital &bull; Institutional Desk
                </p>
              </div>
            </a>

          </div>

          {/* Social Banner Strip Row */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* Telegram Banner */}
            <div 
              onClick={onOpenTelegramModal}
              className="rounded-xl bg-gradient-to-br from-[#0c2a2b] via-[#0d1c24] to-[#12141d] border border-cyan-500/20 p-3.5 flex items-center justify-between group hover:border-cyan-400/50 transition-all cursor-pointer"
            >
              <div>
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Volatus on</div>
                <div className="text-xs font-black text-white">TELEGRAM</div>
                <div className="text-[9px] text-slate-400 mt-0.5">@volatuscapital</div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xs font-bold">
                TG
              </div>
            </div>

            {/* Instagram Banner */}
            <div className="rounded-xl bg-gradient-to-br from-[#2f1025] via-[#1b1022] to-[#12141d] border border-pink-500/20 p-3.5 flex items-center justify-between group hover:border-pink-400/50 transition-all cursor-pointer">
              <div>
                <div className="text-[10px] font-bold text-pink-400 uppercase tracking-wider">Volatus on</div>
                <div className="text-xs font-black text-white">INSTAGRAM</div>
                <div className="text-[9px] text-slate-400 mt-0.5">@volatuscapital</div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-300 flex items-center justify-center text-xs font-bold">
                IG
              </div>
            </div>

            {/* YouTube Banner */}
            <div className="rounded-xl bg-gradient-to-br from-[#2a0e0e] via-[#1c0f12] to-[#12141d] border border-red-500/20 p-3.5 flex items-center justify-between group hover:border-red-400/50 transition-all cursor-pointer">
              <div>
                <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider">Volatus on</div>
                <div className="text-xs font-black text-white">YOUTUBE</div>
                <div className="text-[9px] text-slate-400 mt-0.5">@volatuscapital</div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-300 flex items-center justify-center text-xs font-bold">
                YT
              </div>
            </div>

            {/* Facebook / Discord Banner */}
            <div className="rounded-xl bg-gradient-to-br from-[#0c1833] via-[#0d1424] to-[#12141d] border border-blue-500/20 p-3.5 flex items-center justify-between group hover:border-blue-400/50 transition-all cursor-pointer">
              <div>
                <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">Volatus on</div>
                <div className="text-xs font-black text-white">DISCORD</div>
                <div className="text-[9px] text-slate-400 mt-0.5">Volatus Capital</div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center text-xs font-bold">
                DC
              </div>
            </div>

            {/* X Banner */}
            <div className="col-span-2 sm:col-span-1 rounded-xl bg-gradient-to-br from-[#181a24] via-[#12141d] to-[#0b0c10] border border-slate-700/50 p-3.5 flex items-center justify-between group hover:border-slate-500 transition-all cursor-pointer">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Volatus on</div>
                <div className="text-xs font-black text-white">X</div>
                <div className="text-[9px] text-slate-400 mt-0.5">@volatuscapital</div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center text-xs font-bold">
                X
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. "WRITING / Lessons, not hype" */}
      {/* ======================================================== */}
      <section id="articles-section" className="py-24 sm:py-32 relative border-t border-white/[0.06] bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-3">
                Writing
              </div>
              <h2 className="text-3xl sm:text-5xl font-editorial font-medium text-white tracking-tight">
                Lessons, not hype
              </h2>
            </div>

            <button
              onClick={() => onNavigate('academy')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-[#f5b842] transition-colors cursor-pointer"
            >
              <span>All articles</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#f5b842]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Article 1 */}
            <div 
              onClick={() => setActiveStoryModal('nimule')}
              className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-7 flex flex-col justify-between hover:border-white/20 transition-all cursor-pointer group"
            >
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-4">
                  May 20, 2026
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#f5b842] transition-colors">
                  From Nimule to the For You page
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  The come-up wasn't overnight. A year of posting to almost no one, then everything changed. 
                  Here's the honest version of the story.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div 
              onClick={() => setActiveStoryModal('playbook')}
              className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-7 flex flex-col justify-between hover:border-white/20 transition-all cursor-pointer group"
            >
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-4">
                  April 18, 2026
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#f5b842] transition-colors">
                  A trader's playbook for institutional order flow
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  How banks engineer liquidity, why fair value gaps offer asymmetric reward-to-risk, 
                  and how to execute with clean risk models.
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div 
              onClick={() => setActiveStoryModal('risk')}
              className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-7 flex flex-col justify-between hover:border-white/20 transition-all cursor-pointer group"
            >
              <div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-4">
                  March 12, 2026
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#f5b842] transition-colors">
                  Risk first: how we protect trading capital
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  The community is about longevity, not get-rich-quick hype. Here's the institutional framing on capital preservation.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. STATEMENT BANNER: "The setups are free to read..." */}
      {/* ======================================================== */}
      <section className="py-28 sm:py-36 relative border-t border-white/[0.06] bg-gradient-to-b from-[#0c0d12] via-[#10121a] to-[#0c0d12] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-editorial font-medium text-white tracking-tight leading-[1.08]">
              The setups are free to read.
            </h2>
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-editorial font-medium italic text-[#f5b842] tracking-tight leading-[1.08]">
              The discipline is on you.
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenTelegramModal}
              className="px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-black bg-[#f5b842] hover:bg-[#e8aa34] shadow-[0_4px_20px_rgba(245,184,66,0.3)] transition-all hover:scale-105 cursor-pointer"
            >
              Join VIP
            </button>

            <button
              onClick={onOpenTelegramModal}
              className="px-8 py-3 rounded-full text-xs sm:text-sm font-medium text-white bg-[#151722] hover:bg-[#1d202e] border border-white/15 transition-all cursor-pointer"
            >
              Free channel
            </button>
          </div>

          <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-semibold pt-4">
            Educational only &bull; Trading carries real risk
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. SPLIT BOX: "THE NOTE" & "FOR PARTNERS" */}
      {/* ======================================================== */}
      <section id="newsletter-section" className="py-20 relative border-t border-white/[0.06] bg-[#0b0c10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Box 1: The Note */}
            <div className="space-y-4">
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#d49e35] uppercase">
                The note
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                One useful idea, no filler.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Institutional market notes, trade teardowns, and macro reviews straight to your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row gap-2 max-w-md">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-2.5 rounded-full bg-[#151722] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e8aa34] transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <div className="text-xs text-emerald-400 font-medium animate-fadeIn">
                  &check; You're on the list. Look out for the next dispatch.
                </div>
              )}
            </div>

            {/* Box 2: Institutional Partners */}
            <div id="brands-section" className="space-y-4">
              <div className="text-[10px] font-bold tracking-[0.2em] text-[#d49e35] uppercase">
                For partners
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Partner with an institutional desk.
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                Prop firm integrations, regulated broker partnerships, and institutional liquidity collaborations.
              </p>

              <div className="pt-3 flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
                <a
                  href="mailto:desk@volatuscapital.com"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-[#f5b842] transition-colors"
                >
                  <span>Contact Desk</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#f5b842]" />
                </a>

                <a
                  href="#brands-section"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveStoryModal('mediakit');
                  }}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-[#f5b842] transition-colors"
                >
                  <span>Desk Deck</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#f5b842]" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. GIANT WORDMARK STAMP & RICH FOOTER */}
      {/* ======================================================== */}
      <footer className="pt-24 pb-16 relative border-t border-white/[0.06] bg-[#08090d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Giant Wordmark Display Stamp */}
          <div className="text-center pb-20 border-b border-white/[0.06]">
            <div className="text-[11px] font-bold tracking-[0.3em] text-[#d49e35] uppercase mb-4">
              Capital &bull; Execution &bull; Discipline
            </div>
            <div className="text-[64px] sm:text-[100px] md:text-[150px] lg:text-[190px] font-editorial font-bold text-white/95 leading-none tracking-tight select-none">
              Volatus<span className="text-[#f5b842]">.</span>
            </div>
          </div>

          {/* Rich Multi-Column Navigation Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/[0.06]">
            
            {/* Column 1: Brand Info & Mini Newsletter (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <VolatusLogo size="md" variant="horizontal" />
              
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                Volatus Capital is an elite institutional forex collective and trading education desk delivering verified setups, order blocks, and disciplined risk models.
              </p>

              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-300 mb-2">
                  One useful idea in your inbox.
                </div>
                <form onSubmit={handleFooterSubscribe} className="flex gap-2 max-w-sm">
                  <input
                    type="email"
                    required
                    value={footerEmail}
                    onChange={(e) => setFooterEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-grow px-3.5 py-2 rounded-full bg-[#151722] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e8aa34] transition-all shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
                {footerSubscribed && (
                  <div className="text-xs text-emerald-400 font-medium mt-2 animate-fadeIn">
                    &check; Subscribed successfully.
                  </div>
                )}
              </div>
            </div>

            {/* Column 2: EXPLORE (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] uppercase font-bold tracking-widest text-[#f5b842] mb-4">
                Explore
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('signals')} className="hover:text-white transition-colors">
                    Forex
                  </button>
                </li>
                <li>
                  <a href="#brands-section" className="hover:text-white transition-colors">
                    Advertise
                  </a>
                </li>
                <li>
                  <button onClick={() => onNavigate('academy')} className="hover:text-white transition-colors">
                    Blog
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('funding')} className="hover:text-white transition-colors">
                    Funding
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                    All links
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: ABOUT (2 cols) */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] uppercase font-bold tracking-widest text-[#f5b842] mb-4">
                About
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#story-section" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <button onClick={onOpenTelegramModal} className="hover:text-white transition-colors">
                    Telegram
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveStoryModal('mediakit')} className="hover:text-white transition-colors">
                    Media Kit
                  </button>
                </li>
                <li>
                  <a href="#newsletter-section" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <button onClick={() => onNavigate('reviews')} className="hover:text-white transition-colors">
                    Press
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: LEGAL (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] uppercase font-bold tracking-widest text-[#f5b842] mb-4">
                Legal
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                    Membership Agreement
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                    Risk Disclaimer
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                    Affiliate Disclosure
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('pricing')} className="hover:text-white transition-colors">
                    Payments &amp; Refunds
                  </button>
                </li>
              </ul>

              {/* Social Icon Links */}
              <div className="pt-6">
                <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-3">
                  Follow
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://tiktok.com/@volatuscapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                    aria-label="TikTok"
                  >
                    <span className="text-[11px] font-bold">TT</span>
                  </a>

                  <a
                    href="https://instagram.com/volatuscapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                    aria-label="Instagram"
                  >
                    <span className="text-[11px] font-bold">IG</span>
                  </a>

                  <a
                    href="https://youtube.com/@volatuscapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                    aria-label="YouTube"
                  >
                    <span className="text-[11px] font-bold">YT</span>
                  </a>

                  <a
                    href="https://x.com/volatuscapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                    aria-label="X (Twitter)"
                  >
                    <span className="text-[11px] font-bold">X</span>
                  </a>

                  <a
                    href="https://facebook.com/volatuscapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                    aria-label="Facebook"
                  >
                    <span className="text-[11px] font-bold">FB</span>
                  </a>

                  <button
                    onClick={onOpenTelegramModal}
                    className="w-8 h-8 rounded-full bg-[#f5b842]/20 hover:bg-[#f5b842]/30 border border-[#f5b842]/40 flex items-center justify-center text-[#f5b842] transition-all cursor-pointer"
                    aria-label="Telegram"
                  >
                    <Send className="w-3.5 h-3.5 fill-[#f5b842]" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Disclosure Line */}
          <div className="pt-8 text-center text-slate-500 text-[11px] max-w-2xl mx-auto leading-relaxed">
            Volatus Capital may earn a commission when you sign up through partner broker links, at no extra cost to you.
          </div>

        </div>
      </footer>

      {/* ======================================================== */}
      {/* 10. COOKIE NOTICE BAR AT BOTTOM & SCROLL TO TOP BUTTON */}
      {/* ======================================================== */}
      {showCookieNotice && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-40 bg-[#141620]/95 backdrop-blur-md border border-white/15 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.8)] animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300">
            <p className="leading-normal">
              We use cookies for basic, privacy-friendly analytics and to make the site work. 
              See our <button onClick={() => onNavigate('faq')} className="text-[#f5b842] underline">Privacy Policy</button>.
            </p>
            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <button
                onClick={() => setShowCookieNotice(false)}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-white bg-white/5 border border-white/10"
              >
                Decline
              </button>
              <button
                onClick={() => setShowCookieNotice(false)}
                className="px-4 py-1.5 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e8aa34]"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-40 w-10 h-10 rounded-full bg-[#151722]/90 hover:bg-[#202334] border border-white/15 text-slate-300 hover:text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Story / Article Detail Modal */}
      {activeStoryModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#12141d] border border-white/15 rounded-3xl p-8 max-w-lg w-full text-slate-200 relative shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#f5b842]">
                {activeStoryModal === 'mediakit' ? 'Institutional Inquiries' : 'Volatus Dispatch'}
              </div>
              <button 
                onClick={() => setActiveStoryModal(null)}
                className="text-slate-400 hover:text-white text-sm font-bold p-1"
              >
                &times;
              </button>
            </div>

            {activeStoryModal === 'mediakit' ? (
              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <h3 className="text-xl font-bold text-white font-editorial">
                  Institutional Partnerships &amp; Desk Deck
                </h3>
                <p>
                  With 25,000+ active traders executing institutional volume across major FX pairs and commodities, 
                  Volatus Capital collaborates with leading liquidity providers, brokers, and prop firms.
                </p>
                <div className="bg-[#181a26] p-4 rounded-xl space-y-2 border border-white/10">
                  <div className="font-semibold text-white">Direct Desk Contact:</div>
                  <div className="text-xs text-[#f5b842] font-mono">desk@volatuscapital.com</div>
                  <div className="text-[11px] text-slate-400">Telegram: @volatus_desk</div>
                </div>
                <button
                  onClick={() => {
                    setActiveStoryModal(null);
                    onOpenTelegramModal();
                  }}
                  className="w-full py-2.5 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e8aa34]"
                >
                  Contact Desk on Telegram
                </button>
              </div>
            ) : (
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <h3 className="text-xl font-bold text-white font-editorial">
                  {activeStoryModal === 'nimule' && 'From discipline to market mastery'}
                  {activeStoryModal === 'playbook' && "A trader's playbook for institutional order flow"}
                  {activeStoryModal === 'risk' && 'Risk first: how we protect trading capital'}
                  {activeStoryModal === 'full-story' && 'The Philosophy of Volatus Capital'}
                </h3>
                <p>
                  "The heart of everything we build is transparent execution. Whether dissecting institutional order flow 
                  or breaking down liquidity grabs on Gold and Bitcoin, we never pretend trading is easy money. 
                  Discipline and risk control are non-negotiable."
                </p>
                <p>
                  Join twenty-five thousand traders in the VIP room where every signal is sent in real-time with verified entries, stops, and targets.
                </p>
                <button
                  onClick={() => {
                    setActiveStoryModal(null);
                    onOpenTelegramModal();
                  }}
                  className="w-full py-2.5 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e8aa34]"
                >
                  Join The Room on Telegram
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
