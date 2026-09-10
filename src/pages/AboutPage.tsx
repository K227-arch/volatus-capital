import React from 'react';
import { PageType } from '../types';
import { VolatusEmblem, VolatusLogo } from '../components/VolatusLogo';
import { 
  ShieldCheck, 
  Target, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Lock, 
  Send, 
  Users, 
  TrendingUp, 
  Clock, 
  Activity, 
  Compass, 
  Layers,
  ChevronRight
} from 'lucide-react';
import deskMacroImage from '../assets/images/volatus_trading_desk_1789075933658.jpg';
import chartImage from '../assets/images/volatus_chart_macro_1789075946232.jpg';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenVerifyModal,
  onOpenTelegramModal
}) => {
  const corePillars = [
    {
      icon: <Target className="w-5 h-5 text-[#f5b842]" />,
      title: 'Institutional Order Flow',
      desc: 'We do not trade retail indicators. Our algorithmic models and manual execution track bank liquidity pools, Fair Value Gaps (FVG), and institutional mitigation blocks.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Asymmetric Risk-to-Reward',
      desc: 'Capital preservation is non-negotiable. Every setup demands a minimum 1:3 RR with strict 0.5%–1.0% maximum portfolio risk per execution.'
    },
    {
      icon: <Clock className="w-5 h-5 text-purple-400" />,
      title: 'London & NY Killzone Convergence',
      desc: 'We operate exclusively during peak institutional volume windows: the London Open (07:00–10:00 GMT) and New York Morning Session (12:00–16:00 GMT).'
    },
    {
      icon: <Activity className="w-5 h-5 text-amber-400" />,
      title: '100% Transparent Auditing',
      desc: 'Every trade is journaled with verified entry stamps, stop loss, and multi-tier take-profits. No altered screenshots, no deleted losses, no marketing smoke.'
    }
  ];

  const deskLeadership = [
    {
      name: 'Julian Vance',
      role: 'Head of Macro & Institutional Strategy',
      badge: 'Ex-Tier 1 FX Desk',
      bio: '12 years steering institutional FX portfolios. Specializes in central bank interest rate differentials, swap dynamics, and G10 currencies.',
      experience: '12+ Years'
    },
    {
      name: 'Marcus K. Sterling',
      role: 'Senior Algorithmic & SMC Analyst',
      badge: 'Certified CMT & Quant',
      bio: 'Lead architect of the Volatus liquidity sweep detection engine. Masters inner-day order flow across Gold (XAU/USD) and US Indices.',
      experience: '9 Years'
    },
    {
      name: 'Elena Rostova',
      role: 'Chief Risk Officer & Prop Evaluator',
      badge: 'Risk Governance',
      bio: 'Overlooks risk architecture for over 25,000 active desk participants. Specializes in prop firm challenge rules, max daily drawdown, and sizing.',
      experience: '8 Years'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Private Trading Syndicate',
      desc: 'Volatus Capital originated as a closed proprietary desk in London and Nairobi, executing institutional block orders across Gold and G7 pairs.'
    },
    {
      year: '2023',
      title: 'The Open Collective',
      desc: 'Launched the free public community to educate retail traders trapped in retail indicator lag and emotional revenge trading.'
    },
    {
      year: '2024',
      title: 'Institutional Partnership Bridge',
      desc: 'Partnered with Tier-1 regulated brokers to unlock 100% free VIP execution access, removing costly membership subscription paywalls.'
    },
    {
      year: '2026',
      title: '25,000+ Global Traders Strong',
      desc: 'Now operating around the clock across 43 countries, supporting both private capitalization and 6-figure funded prop firm traders.'
    }
  ];

  return (
    <div className="pt-28 pb-20 animate-fadeIn text-slate-100">
      
      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#151722] to-[#0c0d12] border border-white/[0.08] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f5b842]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5b842]/10 border border-[#f5b842]/30 text-[#f5b842] text-xs font-bold uppercase tracking-wider mb-5">
              <VolatusEmblem className="w-4 h-4" />
              <span>About Volatus Capital</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-editorial font-medium text-white tracking-tight leading-[1.08]">
              Where institutional discipline meets <span className="italic text-[#f5b842]">market execution.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Volatus Capital was founded on a singular standard: institutional trading strategies shouldn't be locked behind closed hedge fund doors or extortionate monthly subscription fees. We deliver real-time Smart Money Concepts (SMC), live order blocks, and disciplined execution to twenty-five thousand traders worldwide.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs">
              <button
                onClick={onOpenTelegramModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-lg transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 fill-black" />
                <span>Join VIP Telegram Channel</span>
              </button>

              <button
                onClick={onOpenVerifyModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <span>Verify Broker Account (Free VIP)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase + Key Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Visual Desk Image (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-[#12141d] border border-white/[0.08] relative group">
            <img 
              src={deskMacroImage} 
              alt="Volatus Capital Institutional Trading Desk"
              className="w-full h-full object-cover object-center max-h-[460px] group-hover:scale-[1.02] transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d12] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0e1017]/85 backdrop-blur-md border border-white/10">
              <div className="text-xs font-bold text-white tracking-wide uppercase">Volatus Primary Execution Desk</div>
              <div className="text-[11px] text-slate-300 mt-1">Direct liquidity feed from tier-1 institutional prime brokers</div>
            </div>
          </div>

          {/* Right 4 Metric Tiles (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-6 flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl font-editorial font-bold text-[#f5b842]">25,000+</div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-2">Active Traders</div>
              <p className="text-[11px] text-slate-400 mt-1">Participating across London and New York sessions.</p>
            </div>

            <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-6 flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl font-editorial font-bold text-emerald-400">87.4%</div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-2">Win Rate Standard</div>
              <p className="text-[11px] text-slate-400 mt-1">Calculated across verified multi-target trade exits.</p>
            </div>

            <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-6 flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl font-editorial font-bold text-purple-400">1:3.8</div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-2">Average R:R</div>
              <p className="text-[11px] text-slate-400 mt-1">High expectancy trade management on Gold & Forex.</p>
            </div>

            <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-6 flex flex-col justify-center">
              <div className="text-3xl sm:text-4xl font-editorial font-bold text-cyan-400">$45M+</div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-2">Monthly Volume</div>
              <p className="text-[11px] text-slate-400 mt-1">Executed across our partnered broker accounts.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-2">
            The Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-white tracking-tight">
            The Four Pillars of Volatus Execution
          </h2>
          <p className="text-sm text-slate-400 mt-3">
            Why our desks consistently outperform standard retail strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-6 flex flex-col justify-between hover:border-white/20 transition-all hover:translate-y-[-2px]"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-bold text-[#f5b842] uppercase tracking-wider">
                <span>Pillar 0{idx + 1}</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desk Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-2">
              Leadership &amp; Analysts
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-white tracking-tight">
              The Minds Behind the Signals
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Decades of combined market experience across proprietary trading firms, tier-1 financial institutions, and algorithmic quant labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deskLeadership.map((leader, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-7 flex flex-col justify-between hover:border-white/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#161824] border border-white/10 flex items-center justify-center font-editorial font-bold text-lg text-[#f5b842]">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {leader.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                <div className="text-xs text-[#f5b842] font-medium mt-0.5 mb-3">{leader.role}</div>
                <p className="text-xs text-slate-400 leading-relaxed">{leader.bio}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span>Desk Experience</span>
                <span className="font-bold text-white font-mono">{leader.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chronological History / Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-3xl bg-[#0e1017] border border-white/[0.08] p-8 sm:p-14">
          <div className="max-w-xl mb-10">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-2">
              The Evolution
            </div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-white tracking-tight">
              From Private Syndicate to Global Desk
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-[#f5b842]/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0e1017] border-2 border-[#f5b842]" />
                <div className="text-xs font-mono font-bold text-[#f5b842] mb-1">{m.year}</div>
                <h3 className="text-base font-bold text-white mb-2">{m.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="rounded-3xl bg-gradient-to-r from-[#181a26] via-[#12141d] to-[#181a26] border border-white/[0.08] p-8 sm:p-12">
          <h2 className="text-2xl sm:text-4xl font-editorial font-medium text-white">
            Ready to trade with institutional clarity?
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mx-auto mt-3">
            Join over 25,000 traders receiving live trade execution, risk management notes, and weekly session prep.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenTelegramModal}
              className="px-6 py-3 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-lg cursor-pointer"
            >
              Join 25,000+ on Telegram
            </button>
            <button
              onClick={() => onNavigate('signals')}
              className="px-6 py-3 rounded-full text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer"
            >
              Inspect Live Signals
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
