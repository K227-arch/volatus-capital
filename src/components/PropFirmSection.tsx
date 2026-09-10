import React, { useState } from 'react';
import { fundingPipsAccounts, PROMO_CODE, PROMO_DISCOUNT } from '../data/propFirm';
import { 
  Award, 
  Check, 
  Copy, 
  ExternalLink, 
  Flame, 
  Shield, 
  Sparkles, 
  TrendingUp, 
  Zap 
} from 'lucide-react';
import { VolatusEmblem } from './VolatusLogo';

export const PropFirmSection: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<number>(50000);
  const [copied, setCopied] = useState(false);

  const selectedAccount = fundingPipsAccounts.find(a => a.size === selectedSize) || fundingPipsAccounts[3];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="funding" className="py-20 relative bg-[#090b14]/60 border-t border-slate-800/80">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-purple-700/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[350px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-bold text-purple-300 uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Official Prop Firm Partnership • Funding Pips</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Get Funded Up To <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">$200,000</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Trade with institutional capital without risking your personal life savings. 
            Pass the evaluation with Volatus Capital VIP signals and keep up to <span className="text-amber-400 font-semibold">90% of your trading profits</span>.
          </p>
        </div>

        {/* Promo Code Callout Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-purple-900/20 to-amber-500/15 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Exclusive Community Discount
              </div>
              <div className="text-sm font-semibold text-slate-200">
                Get <span className="text-amber-400 font-bold">{PROMO_DISCOUNT}</span> on any Funding Pips challenge account
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="px-4 py-2.5 rounded-xl bg-slate-950/80 border border-amber-500/50 text-amber-400 font-mono font-black text-base tracking-widest">
              {PROMO_CODE}
            </div>
            <button
              onClick={handleCopyCode}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center gap-1.5 shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Interactive Challenge Account Calculator & Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Account Size Grid */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Select Capital Tier:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {fundingPipsAccounts.map((account) => {
                const isSelected = account.size === selectedSize;
                return (
                  <button
                    key={account.size}
                    type="button"
                    onClick={() => setSelectedSize(account.size)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      isSelected
                        ? 'bg-gradient-to-b from-amber-500/20 to-purple-900/30 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-semibold text-slate-400">Account Size</div>
                    <div className="text-xl font-black text-slate-100 font-mono mt-0.5">
                      {account.label}
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <span className="text-xs text-slate-500 line-through font-mono">
                        ${account.price}
                      </span>
                      <span className="text-xs font-bold text-amber-400 font-mono">
                        ${account.discountedPrice.toFixed(0)}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Benefit Highlights */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Minimum Trading Days (Pass Phase 1 & 2 as fast as you hit targets)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Refund of Challenge Fee on your first simulated profit split</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bi-Weekly Payouts straight to Crypto (USDT) or Bank Wire</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All Volatus VIP signals strictly comply with 5% max daily drawdown</span>
              </div>
            </div>
          </div>

          {/* Right Column: Challenge Rule Specs Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-gradient-to-b from-[#131726] to-[#0c0f18] border border-amber-500/30 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Challenge Specs
                  </span>
                  <div className="text-2xl font-black text-slate-100 font-mono mt-0.5">
                    {selectedAccount.label} Evaluation
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">With Code VOLATUS</div>
                  <div className="text-2xl font-black text-emerald-400 font-mono">
                    ${selectedAccount.discountedPrice.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Targets Breakdown */}
              <div className="mt-6 grid grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    Phase 1 Target (8%)
                  </span>
                  <div className="text-base font-black text-slate-100 font-mono mt-1">
                    ${selectedAccount.profitTargetPhase1.toLocaleString()}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    Phase 2 Target (5%)
                  </span>
                  <div className="text-base font-black text-slate-100 font-mono mt-1">
                    ${selectedAccount.profitTargetPhase2.toLocaleString()}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-rose-900/30">
                  <span className="text-[10px] uppercase font-bold text-rose-400">
                    Max Total Drawdown (10%)
                  </span>
                  <div className="text-base font-black text-rose-300 font-mono mt-1">
                    ${selectedAccount.maxDrawdown.toLocaleString()}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-amber-900/30">
                  <span className="text-[10px] uppercase font-bold text-amber-400">
                    Max Daily Loss (5%)
                  </span>
                  <div className="text-base font-black text-amber-300 font-mono mt-1">
                    ${selectedAccount.dailyDrawdown.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Profit Split Highlight */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-purple-900/20 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold">Trader Profit Split</div>
                  <div className="text-lg font-black text-amber-400">{selectedAccount.payoutSplit}</div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-bold">
                  High Payout
                </span>
              </div>

              {/* CTA to start challenge */}
              <div className="mt-6">
                <a
                  href="https://fundingpips.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2"
                >
                  <span>Start {selectedAccount.label} Challenge</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
