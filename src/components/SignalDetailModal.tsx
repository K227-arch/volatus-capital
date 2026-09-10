import React from 'react';
import { Signal } from '../types';
import { 
  X, 
  Target, 
  ShieldAlert, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  CheckCircle2, 
  Send, 
  Layers, 
  Info 
} from 'lucide-react';
import { VolatusEmblem } from './VolatusLogo';

interface SignalDetailModalProps {
  signal: Signal | null;
  onClose: () => void;
  onOpenTelegram: () => void;
}

export const SignalDetailModal: React.FC<SignalDetailModalProps> = ({
  signal,
  onClose,
  onOpenTelegram,
}) => {
  if (!signal) return null;

  const isBuy = signal.type === 'BUY';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-gradient-to-b from-[#121624] to-[#0d101b] border border-amber-500/30 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with Gradient Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 via-amber-400 to-yellow-300" />

        <div className="p-6 sm:p-7">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <VolatusEmblem className="w-8 h-8" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-slate-100 font-mono tracking-tight">
                    {signal.pair}
                  </h3>
                  <span
                    className={`px-2.5 py-0.5 rounded text-xs font-black uppercase tracking-wider ${
                      isBuy
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {signal.type}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Session: <span className="text-slate-200">{signal.session}</span> • Timeframe: <span className="text-slate-200">{signal.timeframe}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Current Status Pill */}
          <div className="mt-5 flex items-center justify-between p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/30">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold uppercase text-purple-300">
                Status: {signal.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            <div className="text-sm font-black text-emerald-400 font-mono">
              +{signal.pips} Pips Secured
            </div>
          </div>

          {/* Execution Matrix Grid */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
              <span className="text-[10px] uppercase font-bold text-slate-400">Entry</span>
              <div className="text-sm font-black text-slate-100 font-mono mt-1">
                {signal.entryPrice}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-rose-900/30">
              <span className="text-[10px] uppercase font-bold text-rose-400">Stop Loss</span>
              <div className="text-sm font-black text-rose-300 font-mono mt-1">
                {signal.stopLoss}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-900/30">
              <span className="text-[10px] uppercase font-bold text-emerald-400">TP 1</span>
              <div className="text-sm font-black text-emerald-300 font-mono mt-1">
                {signal.takeProfit1}
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-900/30">
              <span className="text-[10px] uppercase font-bold text-emerald-400">TP 2</span>
              <div className="text-sm font-black text-emerald-300 font-mono mt-1">
                {signal.takeProfit2}
              </div>
            </div>
          </div>

          {/* Institutional Analysis & Rationale */}
          <div className="mt-5 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>Institutional Strategy &amp; Order Flow</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {signal.rationale}
            </p>
          </div>

          {/* Risk Management Guidelines */}
          <div className="mt-4 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-amber-300">Volatus Capital Risk Protocol:</span> Risk no more than 1.0% of total capital on this setup. Once TP1 is tagged, automatically adjust Stop Loss to Entry (Break-even) to eliminate downside risk.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenTelegram();
              }}
              className="w-full sm:flex-1 py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all"
            >
              <Send className="w-4 h-4 fill-slate-950" />
              <span>Get Next Signal On Telegram</span>
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
