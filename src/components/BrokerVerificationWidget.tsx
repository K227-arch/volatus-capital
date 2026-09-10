import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  ExternalLink, 
  AlertCircle, 
  ArrowRight, 
  Lock, 
  Sparkles,
  Loader2
} from 'lucide-react';
import { brokerPartners } from '../data/brokers';
import { VolatusEmblem } from './VolatusLogo';

interface BrokerVerificationWidgetProps {
  onSuccess?: () => void;
}

export const BrokerVerificationWidget: React.FC<BrokerVerificationWidgetProps> = ({ onSuccess }) => {
  const [selectedBroker, setSelectedBroker] = useState(brokerPartners[0].id);
  const [accountNumber, setAccountNumber] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  const [status, setStatus] = useState<'idle' | 'verifying' | 'verified' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const currentBroker = brokerPartners.find(b => b.id === selectedBroker) || brokerPartners[0];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountNumber || accountNumber.trim().length < 5) {
      setStatus('error');
      setErrorMessage('Please enter a valid MT4/MT5 trading account number (at least 6 digits).');
      return;
    }

    setStatus('verifying');
    setErrorMessage('');

    // Simulate real-time API call to broker database & telegram bot invite generation
    setTimeout(() => {
      setStatus('verified');
      if (onSuccess) onSuccess();
    }, 1400);
  };

  const handleReset = () => {
    setStatus('idle');
    setAccountNumber('');
    setTelegramUsername('');
    setErrorMessage('');
  };

  return (
    <div id="broker-access" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-bold text-amber-400 uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>100% Free VIP Access • Automated Verification</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Get Free VIP Signals Via Partner Broker
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            By signing up through our official broker partner link, your VIP signals membership is 
            <span className="text-amber-400 font-semibold"> 100% FREE for life</span>. No subscription fees. 
            Keep 100% of your trading profits.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl bg-gradient-to-b from-[#121624] to-[#0c0f18] border border-slate-800 p-6 relative group hover:border-amber-500/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold flex items-center justify-center font-mono text-base mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Create Broker Account
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Open a live trading account with our official partner broker (Exness) using our dedicated partner link.
            </p>
            <div className="mt-4">
              <a
                href={currentBroker.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Open {currentBroker.name} Account</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#121624] to-[#0c0f18] border border-slate-800 p-6 relative group hover:border-amber-500/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold flex items-center justify-center font-mono text-base mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Deposit Trading Capital
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Fund your own live MT4/MT5 account with minimum capital ($50+ recommended). The funds remain 100% yours to trade or withdraw anytime.
            </p>
            <div className="mt-4 text-xs text-slate-500">
              Min deposit: <span className="text-slate-300 font-bold">{currentBroker.minDeposit}</span> • Zero fees
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-b from-[#121624] to-[#0c0f18] border border-slate-800 p-6 relative group hover:border-amber-500/40 transition-all">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold flex items-center justify-center font-mono text-base mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">
              Instant Bot Verification
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Enter your MT4/MT5 trading account number below. Our automated system verifies your ID and generates your private VIP Telegram invite link.
            </p>
            <div className="mt-4 text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Automated Access</span>
            </div>
          </div>
        </div>

        {/* The Verification Form Card */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-gradient-to-b from-[#131726] to-[#0d101a] border border-amber-500/30 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          
          {status === 'verified' ? (
            /* Success State */
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-black text-slate-100">
                Account Verified Successfully!
              </h3>
              
              <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                Account <span className="font-mono text-amber-400 font-bold">{accountNumber}</span> on {currentBroker.name} is confirmed under Volatus Capital.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 max-w-md mx-auto text-left">
                <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">
                  Your VIP Telegram Invite Link:
                </div>
                <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-black/50 border border-slate-800">
                  <span className="text-xs font-mono text-amber-300 truncate">
                    https://t.me/+VolatusCapitalVIP_PrivatePass_8921
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 fill-slate-950" />
                  <span>Join VIP Telegram Channel Now</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700"
                >
                  Verify Another Account
                </button>
              </div>
            </div>
          ) : (
            /* Input Form State */
            <form onSubmit={handleVerify}>
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <VolatusEmblem className="w-7 h-7" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">
                      Broker Verification Portal
                    </h3>
                    <p className="text-xs text-slate-400">
                      Unlock instant VIP access with zero subscription costs
                    </p>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-400 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
                  $0 Free VIP
                </span>
              </div>

              {/* Step A: Select Broker Partner */}
              <div className="mt-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Select Your Broker
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {brokerPartners.map((broker) => (
                    <button
                      key={broker.id}
                      type="button"
                      onClick={() => setSelectedBroker(broker.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        selectedBroker === broker.id
                          ? 'bg-amber-500/10 border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-lg mb-1">{broker.logo}</div>
                      <div className="text-xs font-bold text-slate-200">{broker.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{broker.spread}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step B: Affiliate link reminder if user has no account */}
              <div className="mt-4 p-3 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Don't have an {currentBroker.name} account yet?
                </span>
                <a
                  href={currentBroker.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                >
                  <span>Sign up here first</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Step C: Enter Trading Account Number */}
              <div className="mt-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  MT4 / MT5 Trading Account Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. 14892019"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-slate-100 font-mono text-sm placeholder:text-slate-600 outline-none transition-all"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500">
                    Numeric ID
                  </div>
                </div>
                <span className="block text-[11px] text-slate-500 mt-1">
                  Found inside your {currentBroker.name} personal area / terminal overview.
                </span>
              </div>

              {/* Step D: Telegram Username (Optional) */}
              <div className="mt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Telegram Username (Optional for direct bot sync)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
                    @
                  </span>
                  <input
                    type="text"
                    placeholder="yourusername"
                    value={telegramUsername}
                    onChange={(e) => setTelegramUsername(e.target.value)}
                    className="w-full pl-8 pr-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-slate-100 text-sm placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="mt-4 p-3 rounded-xl bg-rose-950/40 border border-rose-900/60 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status === 'verifying'}
                  className="w-full py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2 disabled:opacity-75"
                >
                  {status === 'verifying' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Verifying with {currentBroker.name} Server...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5 fill-slate-950/20" />
                      <span>Verify &amp; Unlock Free VIP Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Security Guarantee */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <Lock className="w-3.5 h-3.5" />
                <span>256-bit encrypted verification. We never request trading passwords.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
