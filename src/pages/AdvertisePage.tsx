import React, { useState } from 'react';
import { PageType } from '../types';
import { VolatusEmblem } from '../components/VolatusLogo';
import { 
  Briefcase, 
  CheckCircle2, 
  Send, 
  ArrowRight, 
  TrendingUp, 
  Globe2, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Building2, 
  Mail, 
  Sparkles,
  Check
} from 'lucide-react';

interface AdvertisePageProps {
  onNavigate: (page: PageType) => void;
  onOpenTelegramModal: () => void;
}

export const AdvertisePage: React.FC<AdvertisePageProps> = ({
  onNavigate,
  onOpenTelegramModal
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    workEmail: '',
    telegramHandle: '',
    partnershipType: 'broker',
    budgetRange: 'tier2',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockTicket = 'VOL-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(mockTicket);
    setIsSubmitted(true);
  };

  const packages = [
    {
      title: 'Regulated Broker Integration',
      badge: 'High Impact',
      desc: 'Position your brokerage as an official Volatus Capital recommended partner with an integrated client verification bridge.',
      features: [
        'Dedicated VIP Signal Verification Funnel',
        'Direct onboarding page featured on Volatus Portal',
        'Co-branded Telegram pinned broadcasts',
        'High conversion rate with capitalized active traders'
      ],
      idealFor: 'Tier-1 & ASIC/FCA/FSCA regulated brokers'
    },
    {
      title: 'Prop Firm Challenge Sponsorship',
      badge: 'Trader Favorite',
      desc: 'Put your funded accounts directly in front of thousands of disciplined traders looking for 5-figure and 6-figure evaluations.',
      features: [
        'Exclusive promo code distribution to 25K+ members',
        'Live challenge trading demonstrations using SMC',
        'Sponsored community challenge giveaways',
        'Dedicated prop firm review & rule teardown'
      ],
      idealFor: 'Proprietary trading firms & evaluations'
    },
    {
      title: 'Trading Software & Fintech',
      badge: 'Platform Review',
      desc: 'Showcase charting platforms, algorithmic tools, VPS providers, or risk analytics to a sophisticated trader demographic.',
      features: [
        'Video walkthroughs & chart integrations',
        'Sponsored feature in our weekly Market Dispatch',
        'Telegram technical review & banner spotlight',
        'Product feedback from high-volume traders'
      ],
      idealFor: 'Fintech, algorithmic tools, charting suites'
    }
  ];

  return (
    <div className="pt-28 pb-20 animate-fadeIn text-slate-100">
      
      {/* Hero Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#181528] via-[#10121d] to-[#161a29] border border-purple-500/20 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-5">
              <Briefcase className="w-4 h-4" />
              <span>Institutional Partnerships &amp; Advertising</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-editorial font-medium text-white tracking-tight leading-[1.08]">
              Reach an audience that <span className="italic text-[#f5b842]">actively executes.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Connect your brokerage, proprietary trading firm, or fintech software with over twenty-five thousand active, capitalized traders who trade the markets daily.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs">
              <a
                href="#inquiry-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-lg transition-all cursor-pointer"
              >
                <span>Submit Partnership Proposal</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </a>

              <button
                onClick={() => onNavigate('mediakit')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <span>Download Media Kit</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Demographics Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-6 text-center">
            <div className="text-3xl sm:text-4xl font-editorial font-bold text-white">25,400+</div>
            <div className="text-xs font-bold text-[#f5b842] uppercase tracking-wider mt-1">Active Community</div>
            <p className="text-[11px] text-slate-400 mt-2">Verified Telegram subscribers</p>
          </div>

          <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-6 text-center">
            <div className="text-3xl sm:text-4xl font-editorial font-bold text-emerald-400">$45M+</div>
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-1">Monthly Volume</div>
            <p className="text-[11px] text-slate-400 mt-2">Traded across partner accounts</p>
          </div>

          <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-6 text-center">
            <div className="text-3xl sm:text-4xl font-editorial font-bold text-purple-400">68%</div>
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-1">Funded Traders</div>
            <p className="text-[11px] text-slate-400 mt-2">Holding live prop or cash equity</p>
          </div>

          <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-6 text-center">
            <div className="text-3xl sm:text-4xl font-editorial font-bold text-cyan-400">94%</div>
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mt-1">Alert Open Rate</div>
            <p className="text-[11px] text-slate-400 mt-2">Within 15 mins of session start</p>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-2">
            Collaboration Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-white tracking-tight">
            Partnership Opportunities
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Tailored campaigns engineered for measurable conversions and long-term brand equity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className="rounded-3xl bg-[#12141d] border border-white/[0.08] p-7 flex flex-col justify-between hover:border-white/20 transition-all hover:translate-y-[-2px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f5b842]/10 border border-[#f5b842]/30 text-[#f5b842]">
                    {pkg.badge}
                  </span>
                  <Building2 className="w-5 h-5 text-slate-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">{pkg.desc}</p>

                <div className="text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-3">
                  Deliverables Include:
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] text-slate-400">
                <span className="font-semibold text-white">Ideal For:</span> {pkg.idealFor}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="rounded-3xl bg-[#0e1017] border border-white/[0.1] p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-2">
              Get in Touch
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
              Institutional Partnership Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Our partnerships desk reviews all proposals and responds within one business day.
            </p>
          </div>

          {isSubmitted ? (
            <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-8 text-center space-y-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Inquiry Received Successfully</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Thank you for your proposal. Our head of partnerships has assigned your ticket:
              </p>
              <div className="inline-block font-mono font-bold text-emerald-400 text-base bg-emerald-500/20 px-4 py-1.5 rounded-lg">
                {ticketId}
              </div>
              <p className="text-xs text-slate-400">
                We will contact you directly at <span className="text-white font-medium">{formData.workEmail}</span>.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full text-xs font-semibold text-slate-300 bg-white/10 hover:bg-white/15"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Company / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Markets / Alpha Prop"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141622] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. partnerships@yourfirm.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141622] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Partnership Category *
                  </label>
                  <select
                    value={formData.partnershipType}
                    onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141622] border border-white/10 text-white focus:outline-none focus:border-[#f5b842]"
                  >
                    <option value="broker">Regulated Broker Integration</option>
                    <option value="prop">Prop Firm Challenge Sponsorship</option>
                    <option value="software">Trading Tools / Fintech Platform</option>
                    <option value="media">Media &amp; Content Sponsorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Telegram Handle / Phone (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. @your_desk_lead"
                    value={formData.telegramHandle}
                    onChange={(e) => setFormData({ ...formData, telegramHandle: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141622] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Proposal Scope &amp; Target Timeline *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your product, regulation details, proposed integration model, and ideal launch window..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#141622] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-lg transition-all cursor-pointer"
                >
                  Submit Official Partnership Proposal
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-500">
                Direct desk contact: <span className="text-slate-300 font-mono">desk@volatuscapital.com</span> &bull; Telegram: <span className="text-slate-300 font-mono">@volatus_desk</span>
              </div>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};
