import React from 'react';
import { monthlyStats } from '../data/faq';
import { 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  Target, 
  Award, 
  CheckCircle2, 
  Percent 
} from 'lucide-react';

export const TrackRecordSection: React.FC = () => {
  const maxPips = Math.max(...monthlyStats.map(s => s.pips));

  return (
    <section id="performance" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800/80 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Audited Historical Performance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-100 tracking-tight">
              Verified Track Record &amp; Pips
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              We believe in complete transparency. Every single signal sent to the VIP Telegram is logged, timestamped, and audited with exact pip gains.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center min-w-[120px]">
              <div className="text-xs text-slate-400">Total 2026 Pips</div>
              <div className="text-xl font-black text-emerald-400 font-mono mt-0.5">+15,200</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center min-w-[120px]">
              <div className="text-xs text-slate-400">Profit Factor</div>
              <div className="text-xl font-black text-amber-400 font-mono mt-0.5">3.47</div>
            </div>
          </div>
        </div>

        {/* Visual Monthly Performance Chart Bar Graph */}
        <div className="rounded-3xl bg-gradient-to-b from-[#121624] to-[#0c0f18] border border-amber-500/25 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs uppercase font-bold text-slate-400">Monthly Yield</div>
              <h3 className="text-lg font-black text-slate-100 mt-0.5">
                Cumulative Net Pips Captured Per Month
              </h3>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              100% Verified
            </span>
          </div>

          {/* Bar Chart Visualization */}
          <div className="mt-8 grid grid-cols-6 gap-3 sm:gap-6 items-end h-64 pt-6 pb-2">
            {monthlyStats.map((stat) => {
              const heightPercent = Math.round((stat.pips / maxPips) * 100);
              return (
                <div key={stat.month} className="flex flex-col items-center h-full justify-end group">
                  {/* Tooltip on hover */}
                  <div className="text-[11px] font-mono font-bold text-amber-400 mb-2 opacity-90 group-hover:scale-110 transition-transform">
                    +{stat.pips}
                  </div>

                  {/* Vertical Bar */}
                  <div className="w-full max-w-[48px] bg-slate-900 rounded-t-xl overflow-hidden p-1 flex items-end">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full rounded-t-lg bg-gradient-to-t from-purple-600 via-amber-500 to-amber-300 transition-all duration-500 group-hover:brightness-125 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                    />
                  </div>

                  {/* Month Label */}
                  <div className="mt-3 text-xs font-bold text-slate-300 group-hover:text-amber-400 transition-colors">
                    {stat.month}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">
                    {stat.winRate}% win
                  </div>
                </div>
              );
            })}
          </div>

          {/* Asset Class Breakdown Metrics */}
          <div className="mt-10 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Gold (XAUUSD) Accuracy</span>
                <span className="font-mono font-bold text-amber-400">89.2%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-400 h-full rounded-full" style={{ width: '89.2%' }} />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Indices (NAS100 / US30)</span>
                <span className="font-mono font-bold text-purple-400">86.5%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-400 h-full rounded-full" style={{ width: '86.5%' }} />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Crypto &amp; Forex Majors</span>
                <span className="font-mono font-bold text-emerald-400">87.1%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: '87.1%' }} />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
