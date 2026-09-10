import React, { useState } from 'react';
import { brokerPartners } from '../data/brokers';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  AlertCircle, 
  ArrowRight, 
  Lock, 
  HelpCircle,
  Clock,
  Send,
  UserCheck
} from 'lucide-react';

interface BrokerPageProps {
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
}

export const BrokerPage: React.FC<BrokerPageProps> = ({
  onOpenVerifyModal,
  onOpenTelegramModal,
}) => {
  const [selectedBroker, setSelectedBroker] = useState<string>('exness');
  const [accountNumber, setAccountNumber] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'success' | 'invalid' | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const activeBrokerData = brokerPartners.find((b) => b.id === selectedBroker) || brokerPartners[0];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountNumber.trim()) return;

    setIsVerifying(true);
    setVerificationResult(null);

    setTimeout(() => {
      setIsVerifying(false);
      // Validates numeric account IDs (6-10 digits)
      if (accountNumber.length >= 6 && /^\d+$/.test(accountNumber)) {
        setVerificationResult('success');
      } else {
        setVerificationResult('invalid');
      }
    }, 1200);
  };

  const copyPartnerLink = () => {
    navigator.clipboard.writeText(activeBrokerData.affiliateUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="pt-28 pb-20 animate-fadeIn">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#11162b] via-[#0d101c] to-[#161226] border border-amber-500/20 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Volatus Broker Model</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              100% Free VIP Signals Access
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Never pay monthly subscription fees. When you trade with our certified partner broker, the broker pays us a fraction of the raw spread rebate. You keep 100% of your trading deposits and receive lifetime VIP channel access for $0.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Subscription Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% Trader Capital Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Instant Bot Verification</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main 3-Step Flow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Broker Selection & Partner Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Broker */}
            <div className="rounded-2xl bg-[#0e111c] border border-slate-800 p-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs font-mono">
                    1
                  </div>
                  <h2 className="text-lg font-bold text-slate-100">
                    Step 1: Open Broker Account
                  </h2>
                </div>
                <span className="text-xs text-amber-400 font-semibold">Recommended: Exness</span>
              </div>

              {/* Broker Selector Tabs */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {brokerPartners.map((broker) => {
                  const isSelected = selectedBroker === broker.id;
                  return (
                    <button
                      key={broker.id}
                      onClick={() => {
                        setSelectedBroker(broker.id);
                        setVerificationResult(null);
                      }}
                      className={`p-4 rounded-xl border text-left transition-all relative ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                          : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-sm font-bold text-slate-100">{broker.name}</div>
                      <div className="text-[11px] text-amber-400 font-medium mt-0.5">{broker.badge}</div>
                      <div className="text-[10px] text-slate-400 mt-2">
                        Min. {broker.minDeposit} • {broker.leverage}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Broker Details Card */}
              <div className="mt-6 p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-100">{activeBrokerData.name} VIP Partnership</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{activeBrokerData.description}</p>
                  </div>
                  <a
                    href={activeBrokerData.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shrink-0"
                  >
                    <span>Open Live Account</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center">
                  <div className="p-2 rounded-lg bg-slate-900/60">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Min Deposit</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5">{activeBrokerData.minDeposit}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Raw Spread</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5">{activeBrokerData.spread}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Max Leverage</div>
                    <div className="text-xs font-bold text-slate-200 mt-0.5">{activeBrokerData.leverage}</div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  {activeBrokerData.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 2: Fund Account */}
            <div className="rounded-2xl bg-[#0e111c] border border-slate-800 p-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs font-mono">
                  2
                </div>
                <h2 className="text-lg font-bold text-slate-100">
                  Step 2: Deposit Minimum Capital ($50+)
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                Deposit minimum $50 into your new broker trading account using crypto (USDT), bank card, or local bank transfer. This deposit remains 100% under your control and is used for your personal trades.
              </p>
            </div>

          </div>

          {/* Right Column: Step 3 Verification Terminal (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-b from-[#111629] to-[#0c0f18] border border-amber-500/30 p-6 sticky top-28 shadow-2xl">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs font-mono">
                  3
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-100">
                    Step 3: Automated Bot Verification
                  </h2>
                  <div className="text-[11px] text-emerald-400 font-mono">API Connection Active</div>
                </div>
              </div>

              <form onSubmit={handleVerify} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Selected Broker
                  </label>
                  <div className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200">
                    {activeBrokerData.name}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your MT4 / MT5 Trading Account ID
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1928471"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-mono text-slate-100 placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    Found in your {activeBrokerData.name} dashboard or MT4/MT5 login credentials.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isVerifying || !accountNumber.trim()}
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isVerifying ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Checking Partner Database...</span>
                    </>
                  ) : (
                    <>
                      <UserCheck className="w-4 h-4 text-slate-950" />
                      <span>Verify &amp; Generate VIP Invite</span>
                    </>
                  )}
                </button>
              </form>

              {/* Verification Result Feedback */}
              {verificationResult === 'success' && (
                <div className="mt-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 animate-fadeIn">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Account #{accountNumber} Verified!</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5">
                    Your account is registered under the Volatus Capital partnership. Your VIP Telegram invite link is ready:
                  </p>
                  <button
                    onClick={onOpenTelegramModal}
                    className="mt-3 w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Send className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Join VIP Signals Telegram Now</span>
                  </button>
                </div>
              )}

              {verificationResult === 'invalid' && (
                <div className="mt-5 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 animate-fadeIn">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                    <AlertCircle className="w-4 h-4" />
                    <span>Account Not Found or Invalid</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5">
                    Please ensure your account was created using our official partner link, or try entering your 6-8 digit MT4/MT5 login number.
                  </p>
                  <a
                    href={activeBrokerData.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:underline"
                  >
                    <span>Click here to open a qualifying account</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {/* Fund Safety Guarantee */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 space-y-2">
                <div className="flex items-center gap-2 text-slate-300 font-semibold">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Capital Safety Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  Volatus Capital never requests your trading account password or touches your funds. Deposits and withdrawals are processed solely by the broker.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
