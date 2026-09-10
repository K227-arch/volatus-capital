import React, { useState } from 'react';
import { Signal } from '../types';
import { initialSignals } from '../data/signals';
import { 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Clock, 
  ChevronRight, 
  Sparkles, 
  SlidersHorizontal,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { SignalDetailModal } from './SignalDetailModal';

interface LiveSignalsFeedProps {
  onOpenTelegramModal: () => void;
}

export const LiveSignalsFeed: React.FC<LiveSignalsFeedProps> = ({ onOpenTelegramModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'gold' | 'crypto' | 'indices' | 'forex'>('all');
  const [activeModalSignal, setActiveModalSignal] = useState<Signal | null>(null);

  const categories = [
    { id: 'all', label: 'All Signals' },
    { id: 'gold', label: 'Gold (XAUUSD)', badge: 'Hot' },
    { id: 'crypto', label: 'Crypto (BTC)' },
    { id: 'indices', label: 'Indices (NAS100)' },
    { id: 'forex', label: 'Forex Majors' },
  ];

  const filteredSignals = selectedCategory === 'all'
    ? initialSignals
    : initialSignals.filter(s => s.category === selectedCategory);

  return (
    <section id="signals" className="py-20 relative">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>Real-Time Institutional Setups</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
              Live VIP Signals Feed
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Transparent, verified setups executed by our trading desk. Sent straight to the private VIP Telegram channel with exact Entry, SL, and TP targets.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Average R:R</span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-400 font-mono font-bold text-sm">
              1 : 3.8
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)] font-bold'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <span>{cat.label}</span>
              {cat.badge && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold uppercase ${
                  selectedCategory === cat.id
                    ? 'bg-slate-950 text-amber-300'
                    : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {cat.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Signals Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSignals.map((signal) => {
            const isBuy = signal.type === 'BUY';
            return (
              <div
                key={signal.id}
                onClick={() => setActiveModalSignal(signal)}
                className="group relative rounded-2xl bg-gradient-to-b from-[#111522] to-[#0c0f18] border border-slate-800 hover:border-amber-500/40 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)] cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg font-black text-slate-100 font-mono tracking-tight group-hover:text-amber-300 transition-colors">
                        {signal.pair}
                      </span>
                      <span
                        className={`text-xs font-black px-2 py-0.5 rounded tracking-wide ${
                          isBuy
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                        }`}
                      >
                        {signal.type}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {signal.session}
                      </span>
                    </div>
                  </div>

                  {/* Pricing Matrix */}
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800/80">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Entry</div>
                      <div className="text-xs font-mono font-bold text-slate-200 mt-0.5">
                        {signal.entryPrice}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-rose-900/30">
                      <div className="text-[10px] font-bold text-rose-400 uppercase">Stop Loss</div>
                      <div className="text-xs font-mono font-bold text-rose-300 mt-0.5">
                        {signal.stopLoss}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900/90 border border-emerald-900/30">
                      <div className="text-[10px] font-bold text-emerald-400 uppercase">TP 1</div>
                      <div className="text-xs font-mono font-bold text-emerald-300 mt-0.5">
                        {signal.takeProfit1}
                      </div>
                    </div>
                  </div>

                  {/* Status Banner */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                        {signal.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-sm font-black font-mono text-emerald-400">
                      +{signal.pips} Pips
                    </div>
                  </div>

                  {/* Trade Rationale summary */}
                  <p className="mt-3.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {signal.rationale}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {signal.timestamp}
                  </span>
                  <span className="font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1">
                    <span>Full Breakdown</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Telegram Teaser Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-amber-950/30 border border-amber-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              Want Instant Trade Alerts Sent To Your Phone?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Never miss London or New York open breakout trades. All setups broadcast live 24/7 with zero lag.
            </p>
          </div>
          <button
            onClick={onOpenTelegramModal}
            className="shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center gap-2"
          >
            <span>Unlock VIP Telegram</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Modal View */}
      <SignalDetailModal
        signal={activeModalSignal}
        onClose={() => setActiveModalSignal(null)}
        onOpenTelegram={onOpenTelegramModal}
      />
    </section>
  );
};
