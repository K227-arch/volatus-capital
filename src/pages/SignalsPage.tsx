import React, { useState } from 'react';
import { Signal } from '../types';
import { initialSignals } from '../data/signals';
import { 
  Flame, 
  Search, 
  Filter, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Calculator,
  Bell,
  ArrowRight,
  BarChart2,
  Lock
} from 'lucide-react';
import { SignalDetailModal } from '../components/SignalDetailModal';

interface SignalsPageProps {
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
}

export const SignalsPage: React.FC<SignalsPageProps> = ({
  onOpenVerifyModal,
  onOpenTelegramModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'gold' | 'crypto' | 'indices' | 'forex'>('all');
  const [selectedSignal, setSelectedSignal] = useState<Signal | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Position Size Calculator State
  const [calcAccountSize, setCalcAccountSize] = useState<number>(10000);
  const [calcRiskPercent, setCalcRiskPercent] = useState<number>(1);
  const [calcStopLossPips, setCalcStopLossPips] = useState<number>(30);

  const filteredSignals = initialSignals.filter((signal) => {
    const matchesCategory = selectedCategory === 'all' || signal.category === selectedCategory;
    const matchesSearch = signal.pair.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          signal.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate position size: (AccountSize * (Risk / 100)) / (StopLossPips * 10)
  const riskAmount = (calcAccountSize * (calcRiskPercent / 100));
  const calculatedLotSize = Math.max(0.01, Number((riskAmount / (calcStopLossPips * 10)).toFixed(2)));

  return (
    <div className="pt-28 pb-20 animate-fadeIn">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#111524] via-[#0d101a] to-[#151224] border border-amber-500/20 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5" />
              <span>Real-Time Institutional Execution</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              Live VIP Trading Signals
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Every signal is generated using Smart Money Concepts (SMC), liquidity sweeps, and fair value gaps. Each trade is broadcast instantaneously to our private VIP Telegram community with exact entry, stop loss, and multiple take profit milestones.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-300">
                Avg R:R <span className="font-bold text-amber-400 font-mono ml-1">1:3.8</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-300">
                Historical Win Rate <span className="font-bold text-emerald-400 font-mono ml-1">87.4%</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-300">
                Delivery <span className="font-bold text-purple-400 ml-1">Instant Telegram Ping</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Signals Column (8 cols) */}
          <div className="lg:col-span-8">
            
            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
                {(['all', 'gold', 'crypto', 'indices', 'forex'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {cat === 'all' ? 'All Signals' : cat}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter pair (e.g. XAUUSD, BTC)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full sm:w-64 pl-9 pr-4 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-400 text-xs text-slate-200 placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Signals List */}
            <div className="space-y-4">
              {filteredSignals.map((signal) => {
                const isBuy = signal.type === 'BUY';
                return (
                  <div
                    key={signal.id}
                    onClick={() => setSelectedSignal(signal)}
                    className="group rounded-2xl bg-[#0e111c] border border-slate-800 hover:border-amber-500/40 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                      <div className="flex items-center gap-3">
                        <div className="text-xl font-black text-slate-100 font-mono tracking-tight group-hover:text-amber-300 transition-colors">
                          {signal.pair}
                        </div>
                        <span
                          className={`text-xs font-black px-2.5 py-0.5 rounded tracking-wide ${
                            isBuy
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                          }`}
                        >
                          {signal.type}
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {signal.session}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          {signal.timestamp}
                        </span>
                        <div className="text-sm font-black font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                          +{signal.pips} Pips
                        </div>
                      </div>
                    </div>

                    {/* Trade Levels Matrix */}
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] uppercase font-bold text-slate-400">Entry Price</div>
                        <div className="text-xs font-mono font-bold text-slate-200 mt-1">
                          {signal.entryPrice}
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/90 border border-rose-900/30">
                        <div className="text-[10px] uppercase font-bold text-rose-400">Stop Loss</div>
                        <div className="text-xs font-mono font-bold text-rose-300 mt-1">
                          {signal.stopLoss}
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-900/30">
                        <div className="text-[10px] uppercase font-bold text-emerald-400">TP 1 (Conservative)</div>
                        <div className="text-xs font-mono font-bold text-emerald-300 mt-1">
                          {signal.takeProfit1}
                        </div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/90 border border-emerald-900/30">
                        <div className="text-[10px] uppercase font-bold text-emerald-400">TP 2 (Runner)</div>
                        <div className="text-xs font-mono font-bold text-emerald-300 mt-1">
                          {signal.takeProfit2}
                        </div>
                      </div>
                    </div>

                    {/* Rationale & Action link */}
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-slate-800/80 text-xs">
                      <div className="text-slate-400 line-clamp-1 italic">
                        "{signal.rationale}"
                      </div>
                      <div className="text-amber-400 font-semibold flex items-center gap-1 shrink-0 self-end sm:self-auto group-hover:text-amber-300">
                        <span>Analysis &amp; Execution Guide</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Sidebar: Calculator & VIP Access Box (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Position Size Calculator */}
            <div className="rounded-2xl bg-[#0e111c] border border-slate-800 p-6">
              <div className="flex items-center gap-2 pb-4 border-b border-slate-800 text-slate-200">
                <Calculator className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold">Lot Size &amp; Risk Calculator</h3>
              </div>

              <div className="mt-4 space-y-4 text-xs">
                <div>
                  <label className="block text-slate-400 font-medium mb-1">
                    Account Balance ($)
                  </label>
                  <input
                    type="number"
                    value={calcAccountSize}
                    onChange={(e) => setCalcAccountSize(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-mono focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">
                    Risk Percentage (%)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[0.5, 1, 1.5, 2].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        onClick={() => setCalcRiskPercent(pct)}
                        className={`py-1.5 rounded-lg font-mono font-bold transition-all ${
                          calcRiskPercent === pct
                            ? 'bg-amber-400 text-slate-950'
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 font-medium mb-1">
                    Stop Loss Distance (Pips)
                  </label>
                  <input
                    type="number"
                    value={calcStopLossPips}
                    onChange={(e) => setCalcStopLossPips(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-mono focus:border-amber-400 focus:outline-none"
                  />
                </div>

                {/* Calculation Result */}
                <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-yellow-500/5 border border-amber-500/30">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Risk Amount:</span>
                    <span className="font-mono font-bold text-rose-400">
                      ${riskAmount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-slate-100 mt-2 text-sm font-bold">
                    <span>Recommended Lot:</span>
                    <span className="font-mono text-base text-amber-400 font-black">
                      {calculatedLotSize} Lots
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* VIP Signals Channel Card */}
            <div className="rounded-2xl bg-gradient-to-b from-[#161a29] to-[#0d101a] border border-amber-500/30 p-6 relative overflow-hidden">
              <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 mb-3">
                <Sparkles className="w-3 h-3" />
                <span>Instant Alerts</span>
              </div>
              <h4 className="text-lg font-black text-slate-100">
                Never Miss a New York or London Setup
              </h4>
              <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                Signals are published on Telegram within 0.4 seconds of algorithmic confirmation. Get live entry updates, risk alerts, and trade management alerts.
              </p>

              <div className="mt-6 space-y-2.5">
                <button
                  onClick={onOpenTelegramModal}
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <Bell className="w-4 h-4 fill-slate-950" />
                  <span>Join VIP Telegram Channel</span>
                </button>

                <button
                  onClick={onOpenVerifyModal}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Unlock Free VIP Via Broker</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Signal Detail Modal */}
      {selectedSignal && (
        <SignalDetailModal
          signal={selectedSignal}
          onClose={() => setSelectedSignal(null)}
          onOpenTelegramModal={onOpenTelegramModal}
        />
      )}
    </div>
  );
};
