import React, { useState } from 'react';
import { PageType } from '../types';
import { VolatusEmblem } from '../components/VolatusLogo';
import { 
  Mail, 
  Send, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2, 
  MapPin, 
  ArrowRight, 
  Globe2, 
  HelpCircle,
  Check
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenVerifyModal,
  onOpenTelegramModal
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    department: 'vip',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockTicket = 'DESK-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(mockTicket);
    setIsSubmitted(true);
  };

  const departments = [
    {
      title: 'VIP Signals & Verification Desk',
      email: 'vip@volatuscapital.com',
      turnaround: '< 1 Hour During Active Sessions',
      desc: 'Account verification for free VIP access, signal questions, and onboarding assistance.'
    },
    {
      title: 'Institutional Desk & Liquidity',
      email: 'desk@volatuscapital.com',
      turnaround: '< 4 Hours',
      desc: 'Brokerage integrations, prop firm sponsorships, and liquidity provider agreements.'
    },
    {
      title: 'Press & Media Relations',
      email: 'press@volatuscapital.com',
      turnaround: '< 6 Hours',
      desc: 'Executive interviews, market commentary quotes, and media kit inquiries.'
    },
    {
      title: 'General Support & Community',
      email: 'support@volatuscapital.com',
      turnaround: '< 2 Hours',
      desc: 'Telegram channel assistance, educational resource inquiries, and general feedback.'
    }
  ];

  return (
    <div className="pt-28 pb-20 animate-fadeIn text-slate-100">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#151724] via-[#0d101a] to-[#121626] border border-white/[0.08] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5b842]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5b842]/10 border border-[#f5b842]/30 text-[#f5b842] text-xs font-bold uppercase tracking-wider mb-5">
              <MessageSquare className="w-4 h-4" />
              <span>Contact Volatus Capital</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-editorial font-medium text-white tracking-tight leading-[1.08]">
              Connect with the <span className="italic text-[#f5b842]">desk.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether you need rapid broker verification for VIP signal access, institutional partnership inquiries, or technical support, our team is active across all market sessions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs">
              <button
                onClick={onOpenTelegramModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-lg transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 fill-black" />
                <span>Message Desk on Telegram (@volatus_desk)</span>
              </button>

              <button
                onClick={onOpenVerifyModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <span>Fast Broker VIP Verification</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Operational Market Hours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">Trading Desk Operations</div>
                <div className="text-[11px] text-slate-400">Monitoring order flow 24/5 across major financial centers</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-[#161824] border border-white/[0.06]">
                <div className="text-slate-400 text-[10px] uppercase">London Session</div>
                <div className="font-bold text-white font-mono">07:00 &mdash; 16:00 GMT</div>
                <div className="text-emerald-400 text-[10px] font-semibold mt-0.5">&bull; Active Execution</div>
              </div>

              <div className="p-3 rounded-xl bg-[#161824] border border-white/[0.06]">
                <div className="text-slate-400 text-[10px] uppercase">New York Session</div>
                <div className="font-bold text-white font-mono">12:00 &mdash; 21:00 GMT</div>
                <div className="text-emerald-400 text-[10px] font-semibold mt-0.5">&bull; Active Execution</div>
              </div>

              <div className="p-3 rounded-xl bg-[#161824] border border-white/[0.06]">
                <div className="text-slate-400 text-[10px] uppercase">Asian / Tokyo Session</div>
                <div className="font-bold text-white font-mono">00:00 &mdash; 08:00 GMT</div>
                <div className="text-cyan-400 text-[10px] font-semibold mt-0.5">&bull; Liquidity Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form (7 cols) + Department Tiles (5 cols) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0e1017] border border-white/[0.08] p-8 sm:p-10 shadow-xl">
            <div className="mb-6">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-1">
                Direct Dispatch
              </div>
              <h2 className="text-2xl font-editorial font-bold text-white">
                Send a Message to the Desk
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill in the details below and an analyst or support specialist will follow up immediately.
              </p>
            </div>

            {isSubmitted ? (
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-8 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Message Dispatched Successfully</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Your inquiry has been assigned to our live desk queue with ticket reference:
                </p>
                <div className="inline-block font-mono font-bold text-emerald-400 text-base bg-emerald-500/20 px-4 py-1.5 rounded-lg">
                  {ticketId}
                </div>
                <p className="text-xs text-slate-400">
                  A response will be sent to <span className="text-white font-medium">{formData.email}</span> within our stated response window.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full text-xs font-semibold text-slate-300 bg-white/10 hover:bg-white/15"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141622] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141622] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Target Department *
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141622] border border-white/10 text-white focus:outline-none focus:border-[#f5b842]"
                    >
                      <option value="vip">VIP Signals &amp; Verification</option>
                      <option value="broker">Broker Account Linking</option>
                      <option value="funding">Prop Firm &amp; Funding Support</option>
                      <option value="institutional">Institutional Partnership</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Telegram Username (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. @alex_trader"
                      value={formData.telegram}
                      onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141622] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    How Can We Assist You? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details about your query, broker account ID (if verifying), or proposal..."
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
                    Dispatch Inquiry to Desk
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Department Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {departments.map((dept, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-5 hover:border-white/20 transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-bold text-white">{dept.title}</h3>
                  <span className="text-[10px] font-mono text-[#f5b842]">{dept.turnaround}</span>
                </div>
                <p className="text-xs text-slate-400 mb-3">{dept.desc}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-300 hover:text-[#f5b842] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#f5b842]" />
                  <span>{dept.email}</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
