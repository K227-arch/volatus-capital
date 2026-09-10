import React, { useState } from 'react';
import { monthlyStats } from '../data/faq';
import { 
  BarChart3, 
  TrendingUp, 
  Award, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  FileSpreadsheet, 
  ArrowUpRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface TrackRecordPageProps {
  onOpenTelegramModal: () => void;
  onOpenVerifyModal: () => void;
}

export const TrackRecordPage: React.FC<TrackRecordPageProps> = ({
  onOpenTelegramModal,
  onOpenVerifyModal,
}) => {
  const [selectedAsset, setSelectedAsset] = useState<'all' | 'gold' | 'indices' | 'crypto'>('all');

  const assetMetrics = {
    all: { winRate: 87.4, pips: 15200, profitFactor: 3.47, count: 412 },
    gold: { winRate: 89.2, pips: 8640, profitFactor: 3.82, count: 210 },
    indices: { winRate: 86.5, pips: 4210, profitFactor: 3.25, count: 124 },
    crypto: { winRate: 85.8, pips: 2350, profitFactor: 3.10, count: 78 },
  };

  const maxPips = Math.max(...monthlyStats.map((m) => m.pips));

  return (
    <div className="pt-28 pb-20 animate-fadeIn">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#12172b] via-[#0d101a] to-[#171329] border border-amber-500/20 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Audited Historical Performance</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              Verified Track Record &amp; Net Pips
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              We stand by transparent, verifiable performance. Every trade executed in our private VIP room is logged with exact entry timestamps, real-time stop loss markers, and multiple take profit executions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenTelegramModal}
                className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2"
              >
                <span>Access Live Trade Broadcasts</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenVerifyModal}
                className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-600 transition-all"
              >
                Free VIP via Broker
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Performance Metrics Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-[#0e111c] border border-slate-800">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Net Pips</div>
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mt-2">+15,200</div>
            <p className="text-[11px] text-slate-500 mt-1">Cumulative audited gain</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e111c] border border-slate-800">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Historical Win Rate</div>
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono mt-2">87.4%</div>
            <p className="text-[11px] text-slate-500 mt-1">Across 412 verified setups</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e111c] border border-slate-800">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Profit Factor</div>
            <div className="text-3xl sm:text-4xl font-black text-purple-400 font-mono mt-2">3.47</div>
            <p className="text-[11px] text-slate-500 mt-1">Gross wins vs. gross losses</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e111c] border border-slate-800">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Average Risk:Reward</div>
            <div className="text-3xl sm:text-4xl font-black text-slate-100 font-mono mt-2">1:3.8</div>
            <p className="text-[11px] text-slate-500 mt-1">Asymmetric target models</p>
          </div>
        </div>
      </div>

      {/* Monthly Performance Chart */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl bg-[#0e111c] border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h2 className="text-2xl font-black text-slate-100">Monthly Pips Generation</h2>
              <p className="text-xs text-slate-400 mt-0.5">Verified month-by-month net pips</p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
              <span>Avg: +1,900 Pips / Month</span>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="mt-8 pt-4">
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4 items-end h-64 border-b border-slate-800 pb-2">
              {monthlyStats.map((stat, idx) => {
                const heightPercent = (stat.pips / maxPips) * 100;
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="text-[11px] font-mono font-bold text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      +{stat.pips}
                    </div>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full max-w-[40px] rounded-t-lg bg-gradient-to-t from-amber-500/30 via-amber-400 to-yellow-300 transition-all group-hover:brightness-125 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                    />
                    <div className="text-[11px] font-mono text-slate-400 mt-2 truncate w-full text-center">
                      {stat.month.split(' ')[0]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Table Breakdown */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono">
                  <th className="py-3 px-4">Month</th>
                  <th className="py-3 px-4">Signals Sent</th>
                  <th className="py-3 px-4">Win Rate</th>
                  <th className="py-3 px-4">Profit Factor</th>
                  <th className="py-3 px-4 text-right">Net Pips</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {monthlyStats.map((stat, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/50 transition-colors font-mono">
                    <td className="py-3.5 px-4 font-bold text-slate-200">{stat.month}</td>
                    <td className="py-3.5 px-4 text-slate-300">{stat.signalsCount} setups</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold">{stat.winRate}%</td>
                    <td className="py-3.5 px-4 text-purple-400 font-bold">{stat.profitFactor}</td>
                    <td className="py-3.5 px-4 text-right font-black text-amber-400">+{stat.pips} pips</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>
  );
};
