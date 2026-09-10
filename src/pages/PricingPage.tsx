import React, { useState } from 'react';
import { PageType, RegistrationTrack, ClassLevel, ClassDelivery } from '../types';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Send, 
  Zap, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  X,
  GraduationCap,
  MapPin,
  Laptop,
  Briefcase,
  TrendingUp,
  Award,
  Users,
  Building,
  HelpCircle
} from 'lucide-react';

interface PricingPageProps {
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
  onNavigate?: (page: PageType, track?: RegistrationTrack, options?: { classLevel?: ClassLevel; classDelivery?: ClassDelivery }) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onOpenVerifyModal,
  onOpenTelegramModal,
  onNavigate
}) => {
  const [classDeliveryMode, setClassDeliveryMode] = useState<ClassDelivery>('online');

  const handleRegisterClasses = (level: ClassLevel) => {
    if (onNavigate) {
      onNavigate('register', 'classes', { classLevel: level, classDelivery: classDeliveryMode });
    }
  };

  const handleRegisterInvestment = () => {
    if (onNavigate) {
      onNavigate('register', 'investing');
    }
  };

  const plans = [
    {
      id: 'broker',
      name: 'Free VIP Access',
      badge: 'RECOMMENDED • $0 COST',
      price: '$0',
      period: 'Forever',
      description: 'Zero subscription cost. Register with our regulated partner broker and fund your own trading balance.',
      highlight: true,
      buttonText: 'Verify Broker & Get Free VIP',
      buttonAction: onOpenVerifyModal,
      features: [
        'Full access to all Live VIP Signals (Gold, Crypto, Indices)',
        'Entry, Stop Loss & 3 Take Profit targets per setup',
        'Instant Telegram push alerts within 0.4 seconds',
        'Complete Volatus Trading Academy video curriculum',
        'Prop Firm risk calculator and passing playbook',
        'VIP community chat room and weekly market outlook',
        '100% of your deposit remains yours to trade',
      ],
      tagColor: 'amber',
    },
    {
      id: 'monthly',
      name: 'Direct VIP Pass',
      badge: 'NO BROKER REQUIRED',
      price: '$49',
      period: '/ month',
      description: 'Ideal for traders who prefer to trade on their existing personal brokerage or prop firm account.',
      highlight: false,
      buttonText: 'Get 1-Month Direct Access',
      buttonAction: onOpenTelegramModal,
      features: [
        'Full access to all Live VIP Signals',
        'Entry, Stop Loss & 3 Take Profit targets',
        'Instant Telegram alerts and notifications',
        'Prop firm compliance risk parameters',
        'Weekly video trade breakdowns',
        'Cancel or pause subscription anytime',
      ],
      tagColor: 'slate',
    },
    {
      id: 'lifetime',
      name: 'Annual VIP Pass',
      badge: 'BEST VALUE • SAVE 40%',
      price: '$349',
      period: '/ year',
      description: 'Full institutional suite for 12 months with exclusive private 1-on-1 strategy onboarding.',
      highlight: false,
      buttonText: 'Unlock 12-Month VIP Pass',
      buttonAction: onOpenTelegramModal,
      features: [
        'Everything in Direct VIP Pass for 1 full year',
        '1-on-1 private strategy onboarding call with senior analyst',
        'Exclusive institutional order flow indicators access',
        'Priority 24/7 dedicated desk support',
        'Free entry to all future academy masterclasses',
        'Save over $239 compared to monthly billing',
      ],
      tagColor: 'purple',
    },
  ];

  const classTiers = [
    {
      level: 'beginner' as ClassLevel,
      name: 'Beginner Foundations',
      badge: 'ZERO EXPERIENCE REQUIRED',
      duration: '2 Weeks • 8 Core Sessions',
      onlinePrice: '$199',
      physicalPrice: '$399',
      description: 'Master core market terminology, candlestick anatomy, MT4/MT5 setup, order types, and risk management.',
      curriculum: [
        'Forex Market Structure & Currency Pairs',
        'Pips, Lot Sizes & Leverage Calculations',
        'MT4, MT5 & TradingView Mastery',
        'Basic Candlestick Patterns & Trendlines',
        '1% Capital Preservation & Stop-Loss Placement',
        'Account Setup & Regulated Broker Onboarding'
      ],
      onlinePerks: ['Live Interactive Zoom Classes', 'Class Recordings & PDF Handbook', 'Student Community Telegram'],
      physicalPerks: ['Dedicated Physical Desk Seat', 'Printed Institutional Workbook', 'Direct Q&A with Lead Instructor', 'Complimentary Trading Floor Refreshments']
    },
    {
      level: 'intermediate' as ClassLevel,
      name: 'Intermediate SMC & Order Flow',
      badge: 'MOST POPULAR • TRADER FAVORITE',
      duration: '4 Weeks • 16 Intensive Sessions',
      onlinePrice: '$349',
      physicalPrice: '$699',
      popular: true,
      description: 'Transition from retail indicators to institutional Smart Money Concepts (SMC), liquidity grabs, and intraday gold scalping.',
      curriculum: [
        'Break of Structure (BOS) vs Change of Character (CHoCH)',
        'Identifying Order Blocks (OB) & Fair Value Gaps (FVG)',
        'Liquidity Sweeps (BSL/SSL) & Retail Traps',
        'Gold (XAU/USD) London & NY Open Blueprint',
        'Multi-Timeframe Top-Down Analysis (Daily to 1m)',
        'Developing Your Objective Mechanical Trade Plan'
      ],
      onlinePerks: ['Live Daily Market Analysis Sessions', 'Access to VIP Signals Channel for 1 Month', 'Prop Firm Risk Calculator Software'],
      physicalPerks: ['Full In-Person Floor Trading Desk', '1-on-1 Chart Audits by Senior Trader', 'Live London Session In-Person Trading', 'Prop Firm Challenge Evaluation Voucher']
    },
    {
      level: 'advanced' as ClassLevel,
      name: 'Advanced Institutional Masterclass',
      badge: 'INSTITUTIONAL • PROP TRADER',
      duration: '6 Weeks • 24 Deep-Dive Sessions',
      onlinePrice: '$599',
      physicalPrice: '$1,199',
      description: 'High-level algorithmic delivery, central bank macroeconomics, high-frequency news execution, and $200K prop firm funding mastery.',
      curriculum: [
        'Algorithmic Pricing Delivery Engine (IPDA)',
        'Central Bank Macroeconomics (FOMC, CPI, NFP Protocol)',
        'Correlations: DXY, US10Y, Gold & S&P 500',
        'Passing $100K & $200K Prop Firm Challenges',
        'Institutional Risk Management (0.5% Rule)',
        'Exclusive Volatus Proprietary Execution Templates'
      ],
      onlinePerks: ['Direct WhatsApp Line with Desk Officers', '3 Months VIP Signals & Weekly Mentorship', 'Proprietary Order Flow Indicator Suite'],
      physicalPerks: ['Desk Residency at Volatus Trading Floor', 'Direct Mentorship with Head of Macro & SMC Analysts', 'Guaranteed Funded Account Assessment', 'Alumni Desk Pass & Networking Dinners']
    }
  ];

  return (
    <div className="pt-28 pb-20 animate-fadeIn text-slate-100">
      
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#141228] via-[#0d101a] to-[#12162a] border border-white/[0.08] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5b842]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5b842]/10 border border-[#f5b842]/30 text-[#f5b842] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Transparent Pricing &amp; Tuition</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-editorial font-medium text-white tracking-tight leading-tight">
              Institutional Plans &amp; <span className="italic text-[#f5b842]">Academy Classes.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Whether you want daily institutional trade signals, comprehensive Beginner to Advanced Forex classes (available both Online and Physical), or our managed Capital Investment service, explore all transparent pathways below.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#forex-classes-pricing"
                className="px-5 py-2.5 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] transition-all shadow-md"
              >
                Jump to Forex Classes (Online / Physical)
              </a>
              <a
                href="#managed-investing-pricing"
                className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                Managed Capital / Trade For You
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: VIP SIGNALS MEMBERSHIPS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-1">
              Part 1: Daily Execution
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
              VIP Signals Memberships
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Real-time institutional trade alerts on Gold, Currencies, Indices, and Crypto.
            </p>
          </div>
          <div className="text-xs font-mono text-[#f5b842] bg-[#f5b842]/10 border border-[#f5b842]/30 px-3.5 py-1.5 rounded-full">
            Average Win Rate: 87.4%
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                plan.highlight
                  ? 'bg-gradient-to-b from-[#161a2e] to-[#0c0f18] border-2 border-[#f5b842]/60 shadow-[0_15px_40px_rgba(245,184,66,0.15)] lg:-translate-y-2'
                  : 'bg-[#0e111c] border border-white/[0.08]'
              }`}
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#f5b842]/15 text-[#f5b842] border border-[#f5b842]/30 mb-4">
                  {plan.badge}
                </div>

                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{plan.description}</p>

                <div className="mt-6 flex items-baseline gap-1.5 pb-6 border-b border-white/[0.08]">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{plan.period}</span>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    What's Included:
                  </div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={plan.buttonAction}
                  className={`w-full py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.highlight
                      ? 'bg-[#f5b842] hover:bg-[#e6aa32] text-black shadow-lg font-bold'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: FOREX CLASSES TUITION (BEGINNER, INTERMEDIATE, ADVANCED - ONLINE & PHYSICAL) */}
      <div id="forex-classes-pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-white/[0.08]">
        <div className="rounded-3xl bg-[#0e1017] border border-white/[0.08] p-8 sm:p-12 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5b842]/10 border border-[#f5b842]/30 text-[#f5b842] text-[11px] font-bold uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Volatus Academy Tuition</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-editorial font-bold text-white">
                Forex Classes: Beginner, Intermediate &amp; Advanced
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                Step-by-step masterclasses engineered by institutional traders. <strong className="text-[#f5b842]">You can choose either Online Virtual Training or In-Person Physical Classroom Sessions</strong> at our institutional trading floor desk.
              </p>
            </div>

            {/* Online vs Physical Interactive Switcher */}
            <div className="bg-[#141624] p-2 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-stretch gap-2 shrink-0">
              <button
                onClick={() => setClassDeliveryMode('online')}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  classDeliveryMode === 'online'
                    ? 'bg-[#f5b842] text-black shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Laptop className="w-4 h-4" />
                <div className="text-left">
                  <div>Online Virtual Class</div>
                  <div className="text-[10px] font-normal opacity-80">Global Live Zoom &amp; Portal</div>
                </div>
              </button>

              <button
                onClick={() => setClassDeliveryMode('physical')}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  classDeliveryMode === 'physical'
                    ? 'bg-[#f5b842] text-black shadow-lg'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building className="w-4 h-4" />
                <div className="text-left">
                  <div>Physical In-Person Class</div>
                  <div className="text-[10px] font-normal opacity-80">Trading Floor Desk &amp; Mentorship</div>
                </div>
              </button>
            </div>
          </div>

          {/* Delivery Format Clarification Strip */}
          <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                Currently Viewing: <strong className="text-white capitalize">{classDeliveryMode} Format Pricing</strong>
              </span>
              <span className="text-slate-500 hidden sm:inline">&bull;</span>
              <span className="text-slate-400">
                {classDeliveryMode === 'online' 
                  ? 'Attend live worldwide from anywhere with real-time audio Q&A and recorded archives.'
                  : 'Attend in-person at our physical trading desk facility with live screen monitoring and mentor desk side-by-side.'}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#f5b842] shrink-0 font-semibold">
              Flexible rescheduling between Online &amp; Physical
            </span>
          </div>
        </div>

        {/* 3 Classes Grid (Beginner, Intermediate, Advanced) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {classTiers.map((tier) => {
            const isOnline = classDeliveryMode === 'online';
            const price = isOnline ? tier.onlinePrice : tier.physicalPrice;

            return (
              <div
                key={tier.level}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative ${
                  tier.popular
                    ? 'bg-gradient-to-b from-[#161a29] to-[#0e1017] border-2 border-[#f5b842]/50 shadow-xl'
                    : 'bg-[#12141d] border border-white/[0.08]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#f5b842]/15 text-[#f5b842] border border-[#f5b842]/30">
                      {tier.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {tier.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 min-h-[48px] leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#f5b842] tracking-wider mb-0.5">
                        {isOnline ? 'Online Interactive' : 'Physical Classroom'}
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white font-mono">
                          {price}
                        </span>
                        <span className="text-xs text-slate-400">/ one-time tuition</span>
                      </div>
                    </div>
                    <div className="text-right text-[11px] text-slate-400">
                      {isOnline ? (
                        <span className="flex items-center gap-1 text-cyan-400">
                          <Laptop className="w-3.5 h-3.5" /> Virtual
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Building className="w-3.5 h-3.5" /> In-Person
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Alternate Format Price Hint */}
                  <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between px-1">
                    <span>Alternate format ({isOnline ? 'Physical Desk' : 'Online Virtual'}):</span>
                    <span className="font-mono text-slate-300 font-bold">
                      {isOnline ? tier.physicalPrice : tier.onlinePrice}
                    </span>
                  </div>

                  {/* Curriculum Bullet Points */}
                  <div className="mt-6 space-y-2.5">
                    <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                      Syllabus &amp; Modules:
                    </div>
                    {tier.curriculum.map((item, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#f5b842] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specific Perks based on format */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2">
                    <div className="text-[11px] font-bold text-[#f5b842] uppercase tracking-wider">
                      {isOnline ? 'Included in Online Format:' : 'Included in Physical Classroom:'}
                    </div>
                    {(isOnline ? tier.onlinePerks : tier.physicalPerks).map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => handleRegisterClasses(tier.level)}
                    className="w-full py-3.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 bg-[#f5b842] hover:bg-[#e6aa32] text-black shadow-lg cursor-pointer"
                  >
                    <span>Enroll in {tier.name.split(' ')[0]} ({isOnline ? 'Online' : 'Physical'})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    Certificate of completion &bull; Lifetime alumni network access
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 3: MANAGED CAPITAL / INVESTING (TRADE FOR YOU) */}
      <div id="managed-investing-pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-white/[0.08]">
        <div className="rounded-3xl bg-gradient-to-r from-[#171329] via-[#0f111c] to-[#12192a] border border-[#f5b842]/30 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5b842]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5b842]/10 border border-[#f5b842]/30 text-[#f5b842] text-xs font-bold uppercase tracking-wider mb-4">
                <Briefcase className="w-4 h-4" />
                <span>Capital Investment &bull; Managed Account Desk</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-editorial font-medium text-white tracking-tight leading-tight">
                Let Volatus Capital <span className="italic text-[#f5b842]">Trade For You.</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Don't have the time to sit at charts all day or learn complex technical analysis? Allocate capital to our institutional trading desk. Our senior algorithmic and SMC traders execute professional trades on your behalf using proven, risk-controlled institutional risk protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="p-4 rounded-2xl bg-[#141624] border border-white/10">
                  <div className="text-[11px] uppercase font-bold text-[#f5b842] tracking-wider">Investor Profit Share</div>
                  <div className="text-2xl font-black font-mono text-white mt-1">80% / 20%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">You keep 80% of all generated net profits</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#141624] border border-white/10">
                  <div className="text-[11px] uppercase font-bold text-emerald-400 tracking-wider">Management Fee</div>
                  <div className="text-2xl font-black font-mono text-white mt-1">$0.00</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">High-water mark: We only profit when you profit</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#141624] border border-white/10">
                  <div className="text-[11px] uppercase font-bold text-cyan-400 tracking-wider">Capital Custody</div>
                  <div className="text-2xl font-black font-mono text-white mt-1">Segregated</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Funds remain in your name with regulated broker</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl bg-[#0b0d14] border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Investor Onboarding</div>
                <h3 className="text-xl font-bold text-white mb-2">Invest With Volatus</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Provide capital starting from $1,000. Our desk executes automated and discretionary trades directly in your segregated trading account.
                </p>

                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Live daily auditable statement portal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Automated drawdown circuit breaker at 5%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Withdraw your capital anytime with no lock-up</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={handleRegisterInvestment}
                className="w-full py-3.5 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Register to Invest &bull; Trade For Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Comparison Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-[#0e111c] border border-white/[0.08] p-6 sm:p-10 shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-editorial font-bold text-white mb-6">
            Detailed VIP &amp; Execution Comparison
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/[0.08] text-slate-400">
                  <th className="py-3 px-4 font-bold">Feature</th>
                  <th className="py-3 px-4 text-center font-bold text-[#f5b842]">Free Broker VIP</th>
                  <th className="py-3 px-4 text-center font-bold text-slate-200">Direct Pass ($49/mo)</th>
                  <th className="py-3 px-4 text-center font-bold text-purple-400">Annual Pass ($349/yr)</th>
                  <th className="py-3 px-4 text-center font-bold text-emerald-400">Academy Classes</th>
                  <th className="py-3 px-4 text-center font-bold text-amber-300">Managed Capital</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-200">Daily Gold (XAUUSD) Setups</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ 3-5 daily</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ 3-5 daily</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ 3-5 daily</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Desk Executed</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-200">Indices (NAS100/US30) Signals</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Included</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Desk Executed</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-200">Forex Class Choice: Online / Physical</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">—</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">—</td>
                  <td className="py-3.5 px-4 text-center text-purple-400 font-bold">Core Modules</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Full Choice (Online/Desk)</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">—</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-200">Hands-Off Execution (Trade For Me)</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">—</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">—</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">—</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">—</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ 100% Automated by Desk</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-200">Private 1-on-1 Mentorship</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">—</td>
                  <td className="py-3.5 px-4 text-center text-slate-500">—</td>
                  <td className="py-3.5 px-4 text-center text-purple-400 font-bold">✓ 45-Min Session</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Physical / Live Desk</td>
                  <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Dedicated Portfolio Officer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};

