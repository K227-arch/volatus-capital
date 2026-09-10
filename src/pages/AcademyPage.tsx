import React, { useState } from 'react';
import { 
  BookOpen, 
  Play, 
  FileText, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Download,
  GraduationCap,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';

interface AcademyPageProps {
  onOpenTelegramModal: () => void;
  onOpenVerifyModal: () => void;
}

export const AcademyPage: React.FC<AcademyPageProps> = ({
  onOpenTelegramModal,
  onOpenVerifyModal,
}) => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      title: 'Module 1: Smart Money Concepts (SMC) & Liquidity',
      tag: 'Core Foundation',
      duration: '4h 15m • 6 Masterclasses',
      description: 'Understand how central banks and algorithmic liquidity providers deliver price. Stop getting trapped at retail support and resistance.',
      lessons: [
        { title: 'Identifying True Institutional Market Structure (BOS vs CHoCH)', duration: '42 mins', unlocked: true },
        { title: 'Order Blocks (OB) & Order Flow Refinement on 15m & 5m', duration: '38 mins', unlocked: true },
        { title: 'Fair Value Gaps (FVG) and Balanced Price Ranges', duration: '45 mins', unlocked: false },
        { title: 'Buy-Side & Sell-Side Liquidity Sweeps (BSL/SSL)', duration: '51 mins', unlocked: false },
        { title: 'Premium vs Discount Arrays for Precision Entries', duration: '39 mins', unlocked: false },
      ],
      pdf: 'Volatus_SMC_Institutional_Handbook.pdf'
    },
    {
      title: 'Module 2: Flagship Gold (XAUUSD) Strategy Blueprint',
      tag: 'High Volatility',
      duration: '5h 30m • 7 Masterclasses',
      description: 'The exact rules we use to bank 300+ pips per week trading Gold during the London open and New York session.',
      lessons: [
        { title: 'Asian Range High/Low Liquidity Sweep Model', duration: '48 mins', unlocked: false },
        { title: 'London 07:00-09:00 GMT Judas Swing Traps', duration: '55 mins', unlocked: false },
        { title: 'New York Cash Open (13:30 GMT) Volatility Expansion', duration: '44 mins', unlocked: false },
        { title: 'DXY & US10Y Correlation with Spot Gold', duration: '36 mins', unlocked: false },
        { title: 'The 15-Minute Gold Scalping Playbook', duration: '50 mins', unlocked: false },
      ],
      pdf: 'Gold_Session_Liquidity_CheatSheet.pdf'
    },
    {
      title: 'Module 3: Prop Firm Evaluation & Risk Architecture',
      tag: 'Capital Scaling',
      duration: '3h 45m • 5 Masterclasses',
      description: 'Mathematical rules and psychology systems engineered to pass $100K and $200K evaluations and maintain funded accounts.',
      lessons: [
        { title: 'Fixed Fractional Risk: Never Lose More than 0.5% Per Trade', duration: '35 mins', unlocked: false },
        { title: 'Daily Drawdown Buffer Math for Funding Pips & FTMO', duration: '40 mins', unlocked: false },
        { title: 'Asymmetric 1:3+ R:R Target Mathematics', duration: '38 mins', unlocked: false },
        { title: 'Handling Losing Streaks & Overcoming Tilt in Prop Trading', duration: '47 mins', unlocked: false },
      ],
      pdf: 'PropFirm_Risk_Mathematical_Matrix.pdf'
    }
  ];

  return (
    <div className="pt-28 pb-20 animate-fadeIn">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#171329] via-[#0e101a] to-[#12172a] border border-amber-500/20 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Volatus Trading Academy</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              Institutional Trading Curriculum
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              We do not believe in blind signal execution. In the Volatus Academy, we teach you the algorithmic mechanisms behind every entry, so you can think and trade with true institutional confidence.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTelegramModal}
                className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2"
              >
                <span>Unlock All Academy Modules in VIP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenVerifyModal}
                className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-600 transition-all"
              >
                Get Free Access via Broker
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Module Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.map((mod, idx) => (
            <button
              key={idx}
              onClick={() => setActiveModule(idx)}
              className={`p-5 rounded-2xl text-left border transition-all relative ${
                activeModule === idx
                  ? 'bg-gradient-to-b from-[#13172b] to-[#0c0f18] border-amber-500/50 shadow-[0_8px_25px_rgba(245,158,11,0.12)]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider mb-2">
                <span className="text-amber-400">{mod.tag}</span>
                <span className="text-slate-400">{mod.duration}</span>
              </div>
              <div className="text-base font-bold text-slate-100">{mod.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Module Detail */}
        <div className="mt-8 rounded-3xl bg-[#0e111c] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {modules[activeModule].tag}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mt-1">
                {modules[activeModule].title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl">
                {modules[activeModule].description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenTelegramModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700 hover:border-amber-400/50 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>{modules[activeModule].pdf}</span>
              </button>
            </div>
          </div>

          {/* Lessons List */}
          <div className="mt-6 space-y-3">
            {modules[activeModule].lessons.map((lesson, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-4 transition-all hover:border-slate-700"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                    lesson.unlocked
                      ? 'bg-amber-500/20 text-amber-400'
                      : 'bg-slate-900 text-slate-500'
                  }`}>
                    {lesson.unlocked ? <Play className="w-3.5 h-3.5 fill-amber-400" /> : <Lock className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-200">{lesson.title}</div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">{lesson.duration}</div>
                  </div>
                </div>

                <div>
                  {lesson.unlocked ? (
                    <button
                      onClick={onOpenTelegramModal}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all"
                    >
                      Watch Free Preview
                    </button>
                  ) : (
                    <button
                      onClick={onOpenTelegramModal}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-amber-400"
                    >
                      <Lock className="w-3 h-3" />
                      <span>VIP Member Access</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
