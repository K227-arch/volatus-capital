import React from 'react';
import { VolatusLogo } from './VolatusLogo';
import { PageType } from '../types';
import { 
  Send, 
  ShieldAlert, 
  ExternalLink, 
  Globe, 
  Lock 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenVerifyModal,
  onOpenTelegramModal,
}) => {
  const handleNavClick = (page: PageType, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer id="main-footer" className="bg-[#08090d] border-t border-white/[0.06] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2">
            <button
              onClick={(e) => handleNavClick('home', e)}
              className="mb-4 text-left cursor-pointer focus:outline-none"
            >
              <VolatusLogo size="md" variant="horizontal" />
            </button>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Volatus Capital is a premier institutional forex collective and trading education desk. 
              Delivering verified setups, institutional smart money concepts, and daily market execution to 25,000+ traders worldwide.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={onOpenTelegramModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#151722] hover:bg-[#1f2232] border border-white/10 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-[#f5b842]" />
                <span>Join VIP Telegram</span>
              </button>

              <button
                onClick={onOpenVerifyModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#f5b842]/10 hover:bg-[#f5b842]/20 border border-[#f5b842]/30 text-[#f5b842] text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Verify Broker (Free)</span>
              </button>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Platform &amp; Signals
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={(e) => handleNavClick('signals', e)} 
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Live VIP Signals
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('broker', e)} 
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Free VIP via Broker
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('funding', e)} 
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Prop Firm ($200K)
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('performance', e)} 
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Audited Track Record
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('pricing', e)} 
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Direct VIP Pricing &amp; Classes
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('register', e)} 
                  className="hover:text-amber-400 text-[#f5b842] font-semibold transition-colors text-left cursor-pointer"
                >
                  Register (Signals, Copy, Classes, Invest)
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('login', e)} 
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Client Portal Log In
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Academy &amp; Partners
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button 
                  onClick={(e) => handleNavClick('academy', e)} 
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Smart Money Concepts (SMC)
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('reviews', e)} 
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Member Reviews &amp; Proof
                </button>
              </li>
              <li>
                <a 
                  href="https://one.exness-track.com/a/volatus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Exness Global Partner</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <a 
                  href="https://fundingpips.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center gap-1"
                >
                  <span>Funding Pips (Code: VOLATUS)</span>
                  <ExternalLink className="w-3 h-3 text-slate-600" />
                </a>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('faq', e)} 
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Common Questions (FAQ)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Security & Verification */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Security &amp; Compliance
            </h4>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300 font-semibold mb-1">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Client Fund Safety</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  We never hold or touch member trading deposits. All accounts remain with tier-1 regulated partner brokers.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300 font-semibold mb-1">
                  <Globe className="w-3.5 h-3.5 text-purple-400" />
                  <span>Global Availability</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Supporting traders in 140+ countries across Africa, Europe, Asia, and the Americas.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Risk Disclaimer */}
        <div className="py-8 border-b border-slate-800/80">
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-300 uppercase">Financial Risk &amp; Educational Disclosure: </strong>
              Trading leveraged products such as Foreign Exchange (Forex), Contracts for Difference (CFDs), Commodities (Gold), 
              Indices, and Cryptocurrencies carries an extremely high level of risk and may not be suitable for all investors. 
              The high degree of leverage can work against you as well as for you. Before deciding to trade, you should carefully consider 
              your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all 
              of your initial investment; do not invest money that you cannot afford to lose. All content, signals, trade setups, commentary, 
              and educational materials provided by Volatus Capital are strictly for educational and informational purposes only and do not constitute 
              financial, investment, tax, or trading advice. Volatus Capital is not an investment fund, broker, or financial advisor.
            </div>
          </div>
        </div>

        {/* Bottom copyright and attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Volatus Capital. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={(e) => handleNavClick('faq', e)} className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </button>
            <button onClick={(e) => handleNavClick('faq', e)} className="hover:text-slate-400 transition-colors">
              Terms of Service
            </button>
            <button onClick={(e) => handleNavClick('faq', e)} className="hover:text-slate-400 transition-colors">
              Risk Warning
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
