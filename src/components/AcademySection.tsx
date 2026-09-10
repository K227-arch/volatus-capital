import React, { useState } from 'react';
import { 
  BookOpen, 
  Layers, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  PlayCircle, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';

export const AcademySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      title: 'Institutional Smart Money Concepts (SMC)',
      duration: '4 Core Lessons • 3.5 Hours',
      badge: 'Foundation',
      description: 'Learn how major market makers, banks, and hedge funds engineer liquidity. Stop trading retail trendlines and understand order blocks, fair value gaps (FVG), and liquidity sweeps.',
      highlights: [
        'Identifying High-Probability Order Blocks & Breakers',
        'Validating Market Structure Shifts (MSS) vs Inducement',
        'Multi-timeframe Top-Down Confluence (D1 -> H4 -> M15 -> M1)',
        'Premium vs Discount Equilibrium Pricing',
      ],
    },
    {
      title: 'Gold (XAUUSD) Session Liquidity Blueprint',
      duration: '5 Lessons • 4 Hours',
      badge: 'Flagship Strategy',
      description: 'Our proprietary Gold trading methodology. Master London open manipulation, New York cash open volatility, and high-probability news event execution without getting slippage traps.',
      highlights: [
        'Asian Range High/Low Liquidity Sweep Protocols',
        'London 07:00 - 09:00 GMT Judas Swing Reversals',
        'US CPI & NFP News Trapping Frameworks',
        'Gold Daily Bias Prediction with DXY & Yield Correlations',
      ],
    },
    {
      title: 'Prop Firm Risk Architecture & Passing Rules',
      duration: '3 Lessons • 2 Hours',
      badge: 'Funding Mastery',
      description: 'The exact math required to protect your capital and pass 2-phase evaluations. Understand drawdown management, risk-per-trade formulas, and scaling parameters.',
      highlights: [
        'Fixed 0.5% - 1.0% Risk per Trade Calculation',
        'Preserving Daily 5% Drawdown Cushion',
        'Scaling Up Once Funded (Payout Cycle Maximization)',
        'Managing Psychological Drawdown & Overtrading',
      ],
    },
  ];

  return (
    <section id="academy" className="py-20 relative bg-[#090b14]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-bold text-purple-300 uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Volatus Trading Academy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Institutional Strategy &amp; Education
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            We do not just give you signals—we teach you the exact institutional logic behind every entry. 
            Included complimentary with all VIP memberships.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Module Selection Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {modules.map((mod, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`p-5 rounded-2xl text-left border transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-950/40 to-slate-900 border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {mod.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {mod.duration.split('•')[0]}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold transition-colors ${
                    isActive ? 'text-amber-300' : 'text-slate-200'
                  }`}>
                    {mod.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {mod.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Module Deep Dive Preview Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-[#131726] to-[#0c0f18] border border-amber-500/30 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Syllabus Overview
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-100 mt-1">
                    {modules[activeTab].title}
                  </h3>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-purple-300 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  VIP Included
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {modules[activeTab].description}
              </p>

              {/* Curriculum Bullet Points */}
              <div className="mt-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Masterclasses:
                </span>
                {modules[activeTab].highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Video Lessons Note */}
              <div className="mt-6 p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <PlayCircle className="w-6 h-6 text-amber-400" />
                  <div>
                    <div className="text-xs font-bold text-slate-200">
                      High-Definition Video Lessons &amp; PDF Trade Checklists
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Access immediately upon Telegram VIP account verification.
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
