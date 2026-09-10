import React, { useState } from 'react';
import { fundingPipsAccounts, PROMO_CODE, FUNDING_PIPS_URL } from '../data/propFirm';
import { 
  Award, 
  Copy, 
  Check, 
  ExternalLink, 
  CheckCircle2, 
  ShieldAlert, 
  Sparkles, 
  TrendingUp, 
  DollarSign,
  ArrowRight,
  Calculator
} from 'lucide-react';

interface FundingPageProps {
  onOpenTelegramModal: () => void;
  onOpenVerifyModal: () => void;
}

export const FundingPage: React.FC<FundingPageProps> = ({
  onOpenTelegramModal,
  onOpenVerifyModal,
}) => {
  const [selectedAccountSize, setSelectedAccountSize] = useState<number>(100000);
  const [copiedCode, setCopiedCode] = useState(false);

  const activeAccount = fundingPipsAccounts.find((acc) => acc.size === selectedAccountSize) || fundingPipsAccounts[4];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="pt-28 pb-20 animate-fadeIn">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#171329] via-[#0d101a] to-[#141829] border border-purple-500/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Official Prop Firm Partner • Funding Pips</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              Trade Up to $200,000 Funded Capital
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Don't risk your own life savings. Use Volatus VIP institutional signals to pass 2-phase evaluations on Funding Pips. Receive bi-weekly payouts and keep up to 90% of all profits.
            </p>

            {/* Promo Code Pill */}
            <div className="mt-6 inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 rounded-2xl bg-slate-900/90 border border-amber-500/30">
              <div className="px-4 py-2 text-xs font-bold text-slate-300">
                Exclusive Community Discount: <span className="text-amber-400 font-mono text-sm ml-1 font-black">{PROMO_CODE}</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center gap-1.5 transition-all shadow-md"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-950" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Code Copied!' : 'Copy Code & Get 5% Off'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Account Tier Selector & Evaluation Simulator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <h2 className="text-2xl font-black text-slate-100">
              Select Evaluation Account Size
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Choose your funded target and review exact profit milestones and rules.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {fundingPipsAccounts.map((acc) => (
              <button
                key={acc.size}
                onClick={() => setSelectedAccountSize(acc.size)}
                className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all whitespace-nowrap ${
                  selectedAccountSize === acc.size
                    ? 'bg-gradient-to-r from-purple-500 to-amber-500 text-slate-950 font-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {acc.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tier Breakdown Card */}
        <div className="mt-8 rounded-3xl bg-gradient-to-b from-[#111522] to-[#0c0f18] border border-purple-500/25 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-black text-slate-100 font-mono">
                  {activeAccount.label} Challenge
                </span>
                <span className="px-2.5 py-1 rounded-lg text-xs font-bold uppercase bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {activeAccount.payoutSplit} Payout
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Phase 1 Target (8%)</div>
                  <div className="text-lg font-black text-emerald-400 font-mono mt-1">
                    ${activeAccount.profitTargetPhase1.toLocaleString()}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase font-bold">Phase 2 Target (5%)</div>
                  <div className="text-lg font-black text-emerald-400 font-mono mt-1">
                    ${activeAccount.profitTargetPhase2.toLocaleString()}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-rose-900/30">
                  <div className="text-[10px] text-rose-400 uppercase font-bold">Max Drawdown (10%)</div>
                  <div className="text-lg font-black text-rose-300 font-mono mt-1">
                    ${activeAccount.maxDrawdown.toLocaleString()}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-900/30">
                  <div className="text-[10px] text-amber-400 uppercase font-bold">Daily Drawdown (5%)</div>
                  <div className="text-lg font-black text-amber-300 font-mono mt-1">
                    ${activeAccount.dailyDrawdown.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Rules Checklist */}
              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No minimum or maximum trading days on evaluation phases</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Weekend holding and news trading permitted with Volatus Gold signals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full evaluation fee refunded upon your very first funded payout</span>
                </div>
              </div>
            </div>

            {/* Pricing & Checkout Box */}
            <div className="lg:col-span-4 rounded-2xl bg-slate-950/80 border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Evaluation Fee</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-100 font-mono">
                    ${activeAccount.discountedPrice}
                  </span>
                  <span className="text-sm text-slate-500 line-through font-mono">
                    ${activeAccount.price}
                  </span>
                  <span className="text-xs text-amber-400 font-bold ml-1">
                    (With VOLATUS 5% OFF)
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  100% refundable upon passing both phases and requesting your first profit split.
                </p>
              </div>

              <div className="mt-6 space-y-2.5">
                <a
                  href={FUNDING_PIPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Start {activeAccount.label} Challenge</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenTelegramModal}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
                >
                  <span>Get VIP Prop Signals Pass</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Passing Prop Firm Strategy Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-[#090b14] border border-slate-800 p-8 sm:p-12">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-black text-slate-100">
              The Volatus Prop Firm Playbook
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Why our members consistently pass Funding Pips evaluations and secure regular payouts:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm mb-4">
                1
              </div>
              <h4 className="text-base font-bold text-slate-100">0.5% - 1% Fixed Risk</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                We never over-leverage. Every signal specifies exact pip stop losses, keeping daily drawdown under 1.5% maximum, preventing account breach.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm mb-4">
                2
              </div>
              <h4 className="text-base font-bold text-slate-100">1:3.8 Average Reward Ratio</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                With asymmetric reward-to-risk, 2 to 3 high-probability wins hit the entire 8% Phase 1 evaluation target without taking excessive trade counts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm mb-4">
                3
              </div>
              <h4 className="text-base font-bold text-slate-100">Zero Revenge Trading</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Disciplined institutional execution prevents emotional tilt. We trade strictly high-probability London and New York liquidity windows.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
