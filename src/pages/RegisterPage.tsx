import React, { useState, useEffect } from 'react';
import { PageType, RegistrationTrack, ClassLevel, ClassDelivery, UserAccount } from '../types';
import { 
  Zap, 
  Copy, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Send, 
  Laptop, 
  Building, 
  DollarSign, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  HelpCircle,
  Sparkles,
  ChevronRight,
  Clock,
  Award
} from 'lucide-react';

interface RegisterPageProps {
  initialTrack?: RegistrationTrack;
  initialClassLevel?: ClassLevel;
  initialClassDelivery?: ClassDelivery;
  onNavigate: (page: PageType, track?: RegistrationTrack) => void;
  onRegisterSuccess: (user: UserAccount) => void;
}

export const RegisterPage: React.FC<RegisterPageProps> = ({
  initialTrack = 'signals',
  initialClassLevel = 'intermediate',
  initialClassDelivery = 'online',
  onNavigate,
  onRegisterSuccess,
}) => {
  const [selectedTrack, setSelectedTrack] = useState<RegistrationTrack>(initialTrack);
  const [classLevel, setClassLevel] = useState<ClassLevel>(initialClassLevel);
  const [classDelivery, setClassDelivery] = useState<ClassDelivery>(initialClassDelivery);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('United States');
  const [password, setPassword] = useState('');
  const [telegramUsername, setTelegramUsername] = useState('');
  
  // Track Specific fields
  // For Investing (Trade For You)
  const [investmentAmount, setInvestmentAmount] = useState('$10,000');
  const [payoutFrequency, setPayoutFrequency] = useState('monthly');
  // For Copy Trading
  const [copyTradingPlatform, setCopyTradingPlatform] = useState('MT5');
  const [copyBrokerName, setCopyBrokerName] = useState('Exness / IC Markets');
  const [riskPreference, setRiskPreference] = useState('balanced');
  // For Signals
  const [primaryAsset, setPrimaryAsset] = useState('Gold (XAU/USD)');
  const [brokerOption, setBrokerOption] = useState('partner_broker');

  const [submittedUser, setSubmittedUser] = useState<UserAccount | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTrack) setSelectedTrack(initialTrack);
    if (initialClassLevel) setClassLevel(initialClassLevel);
    if (initialClassDelivery) setClassDelivery(initialClassDelivery);
  }, [initialTrack, initialClassLevel, initialClassDelivery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `VC-${Math.floor(100000 + Math.random() * 900000)}`;
      const roleMap: Record<RegistrationTrack, 'member' | 'investor' | 'student' | 'vip'> = {
        signals: 'vip',
        copytrading: 'member',
        classes: 'student',
        investing: 'investor'
      };

      const newUser: UserAccount = {
        id: generatedId,
        name: fullName || 'Keith Twesigye',
        email: email || 'client@volatuscapital.com',
        track: selectedTrack,
        role: roleMap[selectedTrack],
        country,
        investmentAmount: selectedTrack === 'investing' ? investmentAmount : undefined,
        classLevel: selectedTrack === 'classes' ? classLevel : undefined,
        classDelivery: selectedTrack === 'classes' ? classDelivery : undefined,
        telegramUsername: telegramUsername || '@trader_volatus',
        createdAt: new Date().toISOString().split('T')[0]
      };

      setSubmittedUser(newUser);
      setIsSubmitting(false);
      onRegisterSuccess(newUser);
    }, 900);
  };

  const tracks = [
    {
      id: 'signals' as RegistrationTrack,
      title: 'Receive Signals',
      shortTitle: 'Signals VIP',
      badge: 'POPULAR',
      icon: Zap,
      desc: 'Real-time institutional trade alerts on Gold, FX, Indices & Crypto with strict SL & TP targets.'
    },
    {
      id: 'copytrading' as RegistrationTrack,
      title: 'Copy Trading',
      shortTitle: 'Copy Trading',
      badge: 'HANDS-OFF',
      icon: Copy,
      desc: 'Connect your MT4/MT5/cTrader to automatically replicate our institutional trades with zero delay.'
    },
    {
      id: 'classes' as RegistrationTrack,
      title: 'Forex Classes',
      shortTitle: 'Forex Classes',
      badge: 'ONLINE / PHYSICAL',
      icon: GraduationCap,
      desc: 'Beginner, Intermediate & Advanced training masterclasses. Choose Online Virtual or Physical Desk.'
    },
    {
      id: 'investing' as RegistrationTrack,
      title: 'Investing (Trade For You)',
      shortTitle: 'Managed Capital',
      badge: '80% PROFIT SHARE',
      icon: Briefcase,
      desc: 'Provide capital and let the Volatus institutional desk trade for you with regulated risk limits.'
    }
  ];

  if (submittedUser) {
    return (
      <div className="pt-28 pb-20 animate-fadeIn min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-[#0e1017] border border-[#f5b842]/30 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#f5b842]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-[#f5b842]/20 border border-[#f5b842]/40 text-[#f5b842] flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
              Registration Successful &bull; Client ID: {submittedUser.id}
            </span>

            <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-white mb-3">
              Welcome to Volatus Capital, {submittedUser.name}
            </h1>

            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
              Your registration for <strong className="text-[#f5b842] capitalize">{submittedUser.track.replace('classes', 'Forex Classes').replace('investing', 'Capital Investment (Trade For You)')}</strong> has been received by our institutional desk.
            </p>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-left max-w-xl mx-auto space-y-3 mb-8">
              <div className="flex justify-between items-center text-xs py-1 border-b border-white/[0.05]">
                <span className="text-slate-400">Account Type</span>
                <span className="font-bold text-white capitalize">{submittedUser.track}</span>
              </div>
              <div className="flex justify-between items-center text-xs py-1 border-b border-white/[0.05]">
                <span className="text-slate-400">Email Address</span>
                <span className="font-mono text-white">{submittedUser.email}</span>
              </div>

              {submittedUser.track === 'classes' && (
                <>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-white/[0.05]">
                    <span className="text-slate-400">Class Level</span>
                    <span className="font-bold text-[#f5b842] capitalize">{submittedUser.classLevel} Level</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1 border-b border-white/[0.05]">
                    <span className="text-slate-400">Delivery Format</span>
                    <span className="font-bold text-emerald-400 capitalize">{submittedUser.classDelivery} Format</span>
                  </div>
                </>
              )}

              {submittedUser.track === 'investing' && (
                <div className="flex justify-between items-center text-xs py-1 border-b border-white/[0.05]">
                  <span className="text-slate-400">Investment Capital Bracket</span>
                  <span className="font-mono text-[#f5b842] font-bold">{submittedUser.investmentAmount}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-xs py-1">
                <span className="text-slate-400">Assigned Desk Officer</span>
                <span className="font-bold text-purple-300">Marcus Sterling (Senior Portfolio Director)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('login')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Proceed to Client Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('pricing')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <span>Review Pricing &amp; Tuition</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 animate-fadeIn min-h-screen text-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5b842]/10 border border-[#f5b842]/30 text-[#f5b842] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Institutional Client Registration</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-editorial font-medium text-white tracking-tight leading-tight">
            Create Your <span className="italic text-[#f5b842]">Volatus Account.</span>
          </h1>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Select your preferred registration track below: Receive Daily Signals, Automated Copy Trading, Forex Classes (Online or Physical), or let our desk Trade For You with Capital Investment.
          </p>
        </div>

        {/* 4 Interactive Track Selection Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {tracks.map((track) => {
            const Icon = track.icon;
            const isSelected = selectedTrack === track.id;
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => setSelectedTrack(track.id)}
                className={`p-5 rounded-2xl text-left transition-all relative border flex flex-col justify-between cursor-pointer ${
                  isSelected 
                    ? 'bg-[#141724] border-[#f5b842] shadow-[0_0_25px_rgba(245,184,66,0.15)] ring-1 ring-[#f5b842]' 
                    : 'bg-[#0e1017] border-white/[0.08] hover:border-white/20 hover:bg-[#12141e]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-[#f5b842] text-black' : 'bg-white/5 text-[#f5b842]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/5 text-[#f5b842] border border-white/10">
                      {track.badge}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold mb-1.5 ${isSelected ? 'text-[#f5b842]' : 'text-white'}`}>
                    {track.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {track.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-[#f5b842] font-bold' : 'text-slate-500'}>
                    {isSelected ? '✓ Selected Pathway' : 'Select Track'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#f5b842]' : 'text-slate-600'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* The Detailed Registration Form */}
        <div className="rounded-3xl bg-[#0e1017] border border-white/[0.08] p-6 sm:p-10 shadow-2xl">
          
          {/* Track Banner Context */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#141624] to-[#0c0e16] border border-white/[0.08] mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f5b842]">
                Active Registration Track
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white capitalize mt-0.5">
                {selectedTrack === 'signals' && 'VIP Forex Signals Registration'}
                {selectedTrack === 'copytrading' && 'Institutional Copy Trading Mirror'}
                {selectedTrack === 'classes' && 'Volatus Forex Classes Enrollment (Online / Physical)'}
                {selectedTrack === 'investing' && 'Capital Investment &bull; Trade For Me (Managed Desk)'}
              </h2>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f5b842]/10 text-[#f5b842] border border-[#f5b842]/30 shrink-0">
              Regulated Institutional Protocols
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Base Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Full Legal Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Keith Twesigye"
                    className="w-full bg-[#141624] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-[#141624] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Phone / WhatsApp (with Country Code)
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 234-5678"
                    className="w-full bg-[#141624] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Country of Residence
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom, Uganda, USA, UAE"
                    className="w-full bg-[#141624] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* TRACK SPECIFIC OPTIONS */}

            {/* TRACK 1: SIGNALS */}
            {selectedTrack === 'signals' && (
              <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-4 animate-fadeIn">
                <div className="text-xs font-bold text-[#f5b842] uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>Signals Delivery Preferences</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5">Telegram Username (for instant VIP bot addition)</label>
                    <input
                      type="text"
                      value={telegramUsername}
                      onChange={(e) => setTelegramUsername(e.target.value)}
                      placeholder="@your_telegram_handle"
                      className="w-full bg-[#0d0f17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#f5b842]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5">Primary Trading Asset Focus</label>
                    <select
                      value={primaryAsset}
                      onChange={(e) => setPrimaryAsset(e.target.value)}
                      className="w-full bg-[#0d0f17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#f5b842]"
                    >
                      <option>Gold (XAU/USD) - Flagship Strategy</option>
                      <option>Forex Majors (EUR/USD, GBP/USD, USD/JPY)</option>
                      <option>Indices (NAS100, US30)</option>
                      <option>Crypto (BTC/USD, ETH/USD)</option>
                      <option>All Asset Classes Combined</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs text-slate-300 mb-1.5">Access Route Preference</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer ${
                      brokerOption === 'partner_broker' ? 'bg-[#f5b842]/10 border-[#f5b842]' : 'bg-[#0d0f17] border-white/10'
                    }`}>
                      <input
                        type="radio"
                        name="brokerOption"
                        checked={brokerOption === 'partner_broker'}
                        onChange={() => setBrokerOption('partner_broker')}
                        className="mt-1"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">100% Free VIP via Regulated Partner Broker</div>
                        <div className="text-[11px] text-slate-400">Deposit your own trading balance. Zero subscription fee.</div>
                      </div>
                    </label>

                    <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer ${
                      brokerOption === 'direct_subscription' ? 'bg-[#f5b842]/10 border-[#f5b842]' : 'bg-[#0d0f17] border-white/10'
                    }`}>
                      <input
                        type="radio"
                        name="brokerOption"
                        checked={brokerOption === 'direct_subscription'}
                        onChange={() => setBrokerOption('direct_subscription')}
                        className="mt-1"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">Direct VIP Subscription ($49/mo)</div>
                        <div className="text-[11px] text-slate-400">Trade on your own existing personal broker or prop firm.</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* TRACK 2: COPY TRADING */}
            {selectedTrack === 'copytrading' && (
              <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-4 animate-fadeIn">
                <div className="text-xs font-bold text-[#f5b842] uppercase tracking-wider flex items-center gap-2">
                  <Copy className="w-4 h-4" />
                  <span>Copy Trading Configuration</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5">Trading Platform</label>
                    <select
                      value={copyTradingPlatform}
                      onChange={(e) => setCopyTradingPlatform(e.target.value)}
                      className="w-full bg-[#0d0f17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#f5b842]"
                    >
                      <option>MetaTrader 5 (MT5) - Recommended</option>
                      <option>MetaTrader 4 (MT4)</option>
                      <option>cTrader</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5">Broker or Prop Firm</label>
                    <input
                      type="text"
                      value={copyBrokerName}
                      onChange={(e) => setCopyBrokerName(e.target.value)}
                      placeholder="e.g. Exness, FTMO, IC Markets"
                      className="w-full bg-[#0d0f17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#f5b842]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5">Risk Profile</label>
                    <select
                      value={riskPreference}
                      onChange={(e) => setRiskPreference(e.target.value)}
                      className="w-full bg-[#0d0f17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#f5b842]"
                    >
                      <option value="conservative">Conservative (0.5% max risk per trade)</option>
                      <option value="balanced">Balanced (1.0% risk per trade)</option>
                      <option value="aggressive">Aggressive (2.0% risk per trade)</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] text-xs text-slate-300 border border-white/5 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Your MT4/MT5 login credentials stay 100% in your custody. We use institutional bridge API connectors.</span>
                </div>
              </div>
            )}

            {/* TRACK 3: FOREX CLASSES (BEGINNER, INTERMEDIATE, ADVANCED & ONLINE / PHYSICAL) */}
            {selectedTrack === 'classes' && (
              <div className="p-5 rounded-2xl bg-[#141624] border border-white/10 space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="text-xs font-bold text-[#f5b842] uppercase tracking-wider flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>Forex Class Level &amp; Delivery Selection</span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Tuition rates adjust according to chosen format
                  </div>
                </div>

                {/* Class Level Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    1. Choose Your Class Level:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'beginner' as ClassLevel, title: 'Beginner Foundations', onlinePrice: '$199', physicalPrice: '$399', desc: 'Market basics, candlesticks, MT4/5, lot size & risk.' },
                      { id: 'intermediate' as ClassLevel, title: 'Intermediate SMC', onlinePrice: '$349', physicalPrice: '$699', desc: 'Order blocks, liquidity sweeps, Gold scalping.' },
                      { id: 'advanced' as ClassLevel, title: 'Advanced Institutional', onlinePrice: '$599', physicalPrice: '$1,199', desc: 'IPDA algorithmic delivery, central banks, $200k funding.' },
                    ].map((lvl) => (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setClassLevel(lvl.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          classLevel === lvl.id
                            ? 'bg-[#f5b842]/10 border-[#f5b842] ring-1 ring-[#f5b842]'
                            : 'bg-[#0d0f17] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className={`text-xs font-bold ${classLevel === lvl.id ? 'text-[#f5b842]' : 'text-white'}`}>
                            {lvl.title}
                          </span>
                          <span className="text-[11px] font-mono text-[#f5b842] font-bold">
                            {classDelivery === 'online' ? lvl.onlinePrice : lvl.physicalPrice}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">{lvl.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery Preference: Online vs Physical */}
                <div>
                  <label className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                    2. Choose Delivery Format (Online or Physical):
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setClassDelivery('online')}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                        classDelivery === 'online'
                          ? 'bg-[#f5b842]/10 border-[#f5b842] ring-1 ring-[#f5b842]'
                          : 'bg-[#0d0f17] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${classDelivery === 'online' ? 'bg-[#f5b842] text-black' : 'bg-white/5 text-slate-300'}`}>
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold ${classDelivery === 'online' ? 'text-[#f5b842]' : 'text-white'}`}>
                            Online Virtual Interactive
                          </span>
                          <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-mono">GLOBAL</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Attend live worldwide via Zoom, interactive live chart screens, lesson recordings vault, and student chat portal.
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setClassDelivery('physical')}
                      className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 cursor-pointer ${
                        classDelivery === 'physical'
                          ? 'bg-[#f5b842]/10 border-[#f5b842] ring-1 ring-[#f5b842]'
                          : 'bg-[#0d0f17] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${classDelivery === 'physical' ? 'bg-[#f5b842] text-black' : 'bg-white/5 text-slate-300'}`}>
                        <Building className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold ${classDelivery === 'physical' ? 'text-[#f5b842]' : 'text-white'}`}>
                            Physical In-Person Trading Floor
                          </span>
                          <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">ON-DESK</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1">
                          Attend in-person at our physical desk facility with dual-monitor terminal seating, printed materials, and direct live instructor mentorship.
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TRACK 4: INVESTING (TRADE FOR YOU) */}
            {selectedTrack === 'investing' && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#18152b] via-[#121422] to-[#0d0f17] border border-[#f5b842]/30 space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-[#f5b842] uppercase tracking-wider flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Provide Capital &bull; Volatus Trades For You</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                    80% Investor Profit Share
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Provide your desired investment capital amount below. The senior traders at Volatus Capital execute institutional trades on your behalf. All trading is conducted in segregated accounts under your legal name with strict automated risk limits.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5">Intended Investment Capital Allocation</label>
                    <select
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value)}
                      className="w-full bg-[#0d0f17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#f5b842]"
                    >
                      <option>$1,000 – $4,999 (Tier 1 Starter Portfolio)</option>
                      <option>$5,000 – $9,999 (Tier 2 Growth Portfolio)</option>
                      <option>$10,000 – $24,999 (Institutional Alpha Desk)</option>
                      <option>$25,000 – $49,999 (Private Wealth Desk)</option>
                      <option>$50,000 – $100,000+ (High Net Worth Managed Vault)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1.5">Profit Withdrawal Preference</label>
                    <select
                      value={payoutFrequency}
                      onChange={(e) => setPayoutFrequency(e.target.value)}
                      className="w-full bg-[#0d0f17] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#f5b842]"
                    >
                      <option value="monthly">Monthly Direct Bank/Crypto Payout (Standard)</option>
                      <option value="biweekly">Bi-Weekly Payout</option>
                      <option value="compound">Compound Auto-Reinvest (Maximize Yield)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <div className="text-[10px] text-slate-400">Zero Management Fee</div>
                    <div className="text-sm font-bold text-white mt-0.5">$0 Monthly</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <div className="text-[10px] text-slate-400">Capital Custody</div>
                    <div className="text-sm font-bold text-white mt-0.5">Segregated Account</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                    <div className="text-[10px] text-slate-400">Drawdown Circuit Breaker</div>
                    <div className="text-sm font-bold text-emerald-400 mt-0.5">Max 5% Hard Stop</div>
                  </div>
                </div>
              </div>
            )}

            {/* Password Field */}
            <div className="pt-2">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Create Secure Portal Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters with numbers and symbols"
                  className="w-full bg-[#141624] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842] transition-colors"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
              <input type="checkbox" required id="terms" className="mt-0.5 rounded border-white/20" />
              <label htmlFor="terms" className="cursor-pointer">
                I agree to the Volatus Capital Terms of Service, Risk Disclosure Protocol, and Client Privacy Agreement. I acknowledge that Forex and leveraged financial instruments carry risk.
              </label>
            </div>

            {/* Submit Action Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full text-xs sm:text-sm font-bold bg-[#f5b842] hover:bg-[#e6aa32] text-black shadow-[0_0_30px_rgba(245,184,66,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Securing Institutional Allocation...</span>
                ) : (
                  <>
                    <span>
                      Complete Registration for {selectedTrack === 'signals' && 'VIP Signals'}
                      {selectedTrack === 'copytrading' && 'Copy Trading Mirror'}
                      {selectedTrack === 'classes' && `Forex Classes (${classLevel.toUpperCase()} • ${classDelivery.toUpperCase()})`}
                      {selectedTrack === 'investing' && 'Capital Investment (Trade For Me)'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Link to Log in */}
            <div className="text-center text-xs text-slate-400 pt-2">
              Already have an account with Volatus Capital?{' '}
              <button
                type="button"
                onClick={() => onNavigate('login')}
                className="text-[#f5b842] hover:underline font-bold cursor-pointer"
              >
                Log In to Client Portal &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
