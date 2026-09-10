import React, { useState } from 'react';
import { PageType } from '../types';
import { VolatusEmblem } from '../components/VolatusLogo';
import { 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Bell, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  TrendingUp, 
  Zap, 
  Users, 
  MessageSquare, 
  Radio, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';

interface TelegramPageProps {
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
  onNavigate: (page: PageType) => void;
}

export const TelegramPage: React.FC<TelegramPageProps> = ({
  onOpenVerifyModal,
  onOpenTelegramModal,
  onNavigate
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'signals' | 'voice' | 'updates'>('all');

  const handleCopy = () => {
    navigator.clipboard.writeText('https://t.me/volatuscapital');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const sampleAlerts = [
    {
      id: 'tg-1',
      category: 'signals',
      type: 'signal',
      time: '12:45 GMT &bull; NY Killzone',
      pair: 'XAU/USD (Gold)',
      direction: 'BUY',
      directionColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      entry: '2,382.40 - 2,384.00',
      stopLoss: '2,376.50 (59 pips)',
      tp1: '2,392.00 (+80 pips)',
      tp2: '2,404.50 (+205 pips)',
      tp3: '2,420.00 (+360 pips)',
      status: 'TP2 HIT (+205 pips secured)',
      statusColor: 'text-emerald-400',
      note: 'London liquidity sweep confirmed on 15m. Fair value gap filled with aggressive bullish momentum.'
    },
    {
      id: 'tg-2',
      category: 'voice',
      type: 'voice',
      time: '07:15 GMT &bull; London Pre-Market',
      title: 'London Open Audio Briefing & Order Flow Map',
      duration: '4 min 18 sec',
      speaker: 'Julian Vance &bull; Head of Macro',
      summary: 'DXY testing 104.20 resistance ahead of ECB rate decision. Watching EUR/USD for discount liquidity grabs below 1.0820.'
    },
    {
      id: 'tg-3',
      category: 'signals',
      type: 'signal',
      time: 'Yesterday 14:10 GMT',
      pair: 'BTC/USD (Bitcoin)',
      direction: 'SELL',
      directionColor: 'text-red-400 bg-red-500/10 border-red-500/30',
      entry: '64,850.00',
      stopLoss: '65,600.00',
      tp1: '63,900.00 (+950 pts)',
      tp2: '62,400.00 (+2,450 pts)',
      tp3: '60,800.00 (+4,050 pts)',
      status: 'CLOSED (+2,450 pts)',
      statusColor: 'text-cyan-400',
      note: 'Clean rejection off 4H institutional mitigation block. Open interest dropping sharply.'
    },
    {
      id: 'tg-4',
      category: 'updates',
      type: 'update',
      time: 'Yesterday 09:30 GMT',
      title: 'Risk Alert: Trailing Stop Loss on GBP/JPY',
      summary: 'Members holding GBP/JPY long from 198.40: Please shift your Stop Loss to Break Even (198.40). Risk is now 100% eliminated on this position. Banking 50% partial profits.'
    }
  ];

  const filteredAlerts = sampleAlerts.filter(a => activeTab === 'all' || a.category === activeTab);

  return (
    <div className="pt-28 pb-20 animate-fadeIn text-slate-100">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0c2a2b] via-[#0d1c24] to-[#12141d] border border-cyan-500/20 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-5">
              <Send className="w-4 h-4 fill-cyan-400" />
              <span>Volatus Telegram Ecosystem</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-editorial font-medium text-white tracking-tight leading-[1.08]">
              Twenty-five thousand traders <span className="italic text-cyan-400">in the room.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Direct institutional signal notifications, London and New York audio breakdowns, and real-time risk updates delivered straight to your phone. Zero lag. Instant execution.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs">
              <button
                onClick={onOpenTelegramModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-lg transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 fill-black" />
                <span>Join Official Telegram Channel</span>
              </button>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied t.me/volatuscapital' : 'Copy Channel Link'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Telegram Interactive Feed Preview + Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Feed Simulator (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0e1017] border border-white/[0.08] p-6 sm:p-8">
              
              {/* Feed Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#151722] border border-cyan-500/30 flex items-center justify-center p-2 shadow-sm">
                    <VolatusEmblem className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Volatus Capital &bull; VIP Terminal</span>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">VERIFIED</span>
                    </div>
                    <div className="text-xs text-slate-400">25,419 subscribers &bull; Live feed preview</div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1">
                  {(['all', 'signals', 'voice', 'updates'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition-colors ${
                        activeTab === tab 
                          ? 'bg-white/10 text-white font-bold' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Feed Cards */}
              <div className="space-y-4">
                {filteredAlerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className="rounded-2xl bg-[#141622] border border-white/[0.06] p-5 hover:border-white/15 transition-all text-xs sm:text-sm"
                  >
                    <div className="flex items-center justify-between text-slate-400 text-[11px] mb-3">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span dangerouslySetInnerHTML={{ __html: alert.time }} />
                      </span>
                      <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-300">
                        {alert.type}
                      </span>
                    </div>

                    {alert.type === 'signal' && (
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-base font-bold text-white font-mono">{alert.pair}</div>
                          <span className={`px-2.5 py-0.5 rounded-md font-bold text-xs border ${alert.directionColor}`}>
                            {alert.direction}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-[#0c0d12] p-3 rounded-xl font-mono text-[11px] mb-3 border border-white/[0.04]">
                          <div>
                            <div className="text-slate-500 text-[10px] uppercase">Entry</div>
                            <div className="text-slate-200 font-bold">{alert.entry}</div>
                          </div>
                          <div>
                            <div className="text-slate-500 text-[10px] uppercase">Stop Loss</div>
                            <div className="text-red-400 font-bold">{alert.stopLoss}</div>
                          </div>
                          <div>
                            <div className="text-slate-500 text-[10px] uppercase">TP 1</div>
                            <div className="text-emerald-400 font-bold">{alert.tp1}</div>
                          </div>
                          <div>
                            <div className="text-slate-500 text-[10px] uppercase">TP 2 / TP 3</div>
                            <div className="text-[#f5b842] font-bold">{alert.tp2}</div>
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed italic mb-2">
                          "{alert.note}"
                        </p>

                        <div className="flex items-center justify-between pt-2 border-t border-white/[0.04] text-[11px]">
                          <span className={`font-bold ${alert.statusColor}`}>
                            &bull; {alert.status}
                          </span>
                          <span className="text-slate-500">Volatus Signal ID #{alert.id}</span>
                        </div>
                      </div>
                    )}

                    {alert.type === 'voice' && (
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
                            <Radio className="w-5 h-5 animate-pulse" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white">{alert.title}</div>
                            <div className="text-[11px] text-slate-400">{alert.speaker} &bull; {alert.duration}</div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed bg-[#0c0d12] p-3 rounded-xl border border-white/[0.04]">
                          {alert.summary}
                        </p>
                      </div>
                    )}

                    {alert.type === 'update' && (
                      <div>
                        <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
                          <Bell className="w-4 h-4" />
                          <span>{alert.title}</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {alert.summary}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Simulation Disclaimer */}
              <div className="mt-4 text-center text-[11px] text-slate-500">
                Signals shown are historical representations of broadcasts in the Volatus Telegram Room.
              </div>

            </div>
          </div>

          {/* Right: Channel Breakdown & How to Join (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Free vs VIP Card */}
            <div className="rounded-3xl bg-[#12141d] border border-white/[0.08] p-6 sm:p-8">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-2">
                Channel Tiers
              </div>
              <h2 className="text-2xl font-editorial font-bold text-white mb-6">
                Choose Your Level of Access
              </h2>

              <div className="space-y-4">
                
                {/* Free Tier Box */}
                <div className="rounded-2xl bg-[#161824] border border-white/[0.06] p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">Free Community Channel</span>
                    <span className="text-xs font-bold text-cyan-400">100% Free</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Daily morning macro analysis and key levels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Weekly live trade breakdowns and lessons</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>Select public signal broadcasts (1-2 weekly)</span>
                    </li>
                  </ul>
                  <button
                    onClick={onOpenTelegramModal}
                    className="w-full py-2.5 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/10 cursor-pointer"
                  >
                    Join Free Channel
                  </button>
                </div>

                {/* VIP Tier Box */}
                <div className="rounded-2xl bg-gradient-to-b from-[#1c1d2e] to-[#12141d] border border-[#f5b842]/40 p-5 shadow-lg relative">
                  <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#f5b842] text-black text-[10px] font-black uppercase tracking-wider">
                    Recommended
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">VIP Institutional Signals</span>
                    <span className="text-xs font-bold text-[#f5b842]">Broker-Funded Free</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 mb-5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f5b842] shrink-0" />
                      <span>All 3 to 6 daily live institutional signals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f5b842] shrink-0" />
                      <span>Exact Stop Loss, Entry &amp; Multi-Tier TP targets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f5b842] shrink-0" />
                      <span>London &amp; NY audio sessions &amp; trailing stops</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f5b842] shrink-0" />
                      <span>Direct priority desk chat support</span>
                    </li>
                  </ul>
                  <button
                    onClick={onOpenVerifyModal}
                    className="w-full py-3 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-lg cursor-pointer"
                  >
                    Verify Broker for 100% Free VIP Access
                  </button>
                </div>

              </div>
            </div>

            {/* 3 Step Join Guide */}
            <div className="rounded-3xl bg-[#12141d] border border-white/[0.08] p-6 sm:p-8">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                3 Steps to Onboarding
              </div>
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f5b842]/20 text-[#f5b842] font-bold flex items-center justify-center shrink-0">1</div>
                  <div>
                    <strong className="text-white">Install or Open Telegram:</strong> Available on iOS, Android, macOS, Windows and Web.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f5b842]/20 text-[#f5b842] font-bold flex items-center justify-center shrink-0">2</div>
                  <div>
                    <strong className="text-white">Click Join:</strong> Tap our official invite link to enter the public channel or verify your partner broker account.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#f5b842]/20 text-[#f5b842] font-bold flex items-center justify-center shrink-0">3</div>
                  <div>
                    <strong className="text-white">Enable Push Notifications:</strong> Ensure notifications are unmuted so you never miss a real-time entry ping.
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
