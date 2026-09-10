import React, { useState, useEffect } from 'react';
import { VolatusLogo } from './VolatusLogo';
import { PageType, UserAccount } from '../types';
import { 
  Menu, 
  X, 
  Send, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  ChevronRight,
  User,
  LogOut,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
  onScrollToSection?: (sectionId: string) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  user?: UserAccount | null;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage,
  onNavigate,
  onOpenVerifyModal, 
  onOpenTelegramModal,
  onScrollToSection,
  theme,
  onToggleTheme,
  user,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageTarget: PageType, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(pageTarget);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0b0c10]/95 backdrop-blur-xl border-b border-white/[0.06] py-3 shadow-[0_4px_24px_rgba(0,0,0,0.7)]'
          : 'bg-[#0b0c10]/80 backdrop-blur-md border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo - Volatus Capital matching icon.jpeg */}
          <button
            id="nav-logo-btn"
            onClick={(e) => handleLinkClick('home', e)}
            className="flex items-center gap-2 group transition-transform hover:scale-[1.02] text-left shrink-0 cursor-pointer focus:outline-none"
            aria-label="Volatus Capital Home"
          >
            <VolatusLogo size="md" variant="horizontal" />
          </button>

          {/* Center Pill Menu - changed Advertise to Pricing */}
          <nav 
            id="desktop-nav"
            className="hidden xl:flex items-center bg-[#151722]/90 border border-white/[0.08] backdrop-blur-md rounded-full px-1.5 py-1 shadow-lg text-xs"
          >
            {/* Home */}
            <button
              id="nav-home-btn"
              onClick={(e) => handleLinkClick('home', e)}
              className={`px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-white/[0.12] text-white font-semibold shadow-inner'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Home
            </button>

            {/* About */}
            <button
              id="nav-about-btn"
              onClick={(e) => handleLinkClick('about', e)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'bg-white/[0.12] text-white font-semibold shadow-inner'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              About
            </button>

            {/* Forex Signals */}
            <button
              id="nav-forex-btn"
              onClick={(e) => handleLinkClick('signals', e)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                currentPage === 'signals'
                  ? 'bg-white/[0.12] text-white font-semibold shadow-inner'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Forex
            </button>

            {/* Pricing (Replaced Advertise as requested) */}
            <button
              id="nav-pricing-btn"
              onClick={(e) => handleLinkClick('pricing', e)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                currentPage === 'pricing'
                  ? 'bg-white/[0.12] text-white font-semibold shadow-inner'
                  : 'text-[#f5b842] hover:text-[#e6aa32]'
              }`}
            >
              Pricing
            </button>

            {/* Telegram */}
            <button
              id="nav-telegram-link"
              onClick={(e) => handleLinkClick('telegram', e)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                currentPage === 'telegram'
                  ? 'bg-white/[0.12] text-white font-semibold shadow-inner'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Telegram
            </button>

            {/* Media Kit */}
            <button
              id="nav-mediakit-btn"
              onClick={(e) => handleLinkClick('mediakit', e)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                currentPage === 'mediakit'
                  ? 'bg-white/[0.12] text-white font-semibold shadow-inner'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Media Kit
            </button>

            {/* Blog */}
            <button
              id="nav-blog-btn"
              onClick={(e) => handleLinkClick('blog', e)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                currentPage === 'blog'
                  ? 'bg-white/[0.12] text-white font-semibold shadow-inner'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Blog
            </button>

            {/* Contact */}
            <button
              id="nav-contact-btn"
              onClick={(e) => handleLinkClick('contact', e)}
              className={`px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'bg-white/[0.12] text-white font-semibold shadow-inner'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Area: Log In, Register, Theme Toggle, Telegram */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Theme Toggle Icon */}
            <button
              id="nav-theme-toggle"
              type="button"
              onClick={onToggleTheme}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-all focus:outline-none cursor-pointer"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#f5b842] hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:scale-110 transition-transform" />
              )}
            </button>

            {/* Audio Toggle */}
            <button
              id="nav-sound-toggle"
              type="button"
              onClick={() => setIsSoundOn(!isSoundOn)}
              className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none cursor-pointer"
              title={isSoundOn ? "Mute audio" : "Unmute audio"}
              aria-label="Toggle Audio"
            >
              {isSoundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Auth Buttons: Log In & Register OR Logged-in Profile Badge */}
            {user ? (
              <div className="flex items-center gap-2 bg-[#151722] border border-white/10 rounded-full pl-3 pr-1 py-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white truncate max-w-[110px]">
                    {user.name.split(' ')[0]}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f5b842]/10 text-[#f5b842] border border-[#f5b842]/30 font-bold uppercase">
                    {user.role}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  title="Sign Out"
                  className="p-1.5 rounded-full text-slate-400 hover:text-rose-400 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {/* Log In Button */}
                <button
                  id="nav-login-btn"
                  onClick={(e) => handleLinkClick('login', e)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    currentPage === 'login'
                      ? 'bg-white/15 text-white border border-white/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Log In
                </button>

                {/* Register Button */}
                <button
                  id="nav-register-btn"
                  onClick={(e) => handleLinkClick('register', e)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer flex items-center gap-1.5 ${
                    currentPage === 'register'
                      ? 'bg-[#f5b842] text-black ring-2 ring-[#f5b842]/50'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-[#f5b842]" />
                  <span>Register</span>
                </button>
              </div>
            )}

            {/* Gold CTA: Join free Telegram */}
            <button
              id="nav-join-telegram-btn"
              onClick={onOpenTelegramModal}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-[0_2px_12px_rgba(245,184,66,0.25)] hover:shadow-[0_4px_18px_rgba(245,184,66,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-3 h-3 fill-black" />
              <span>Telegram</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {user ? (
              <button
                onClick={(e) => handleLinkClick('home', e)}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#f5b842]/15 text-[#f5b842] border border-[#f5b842]/30 font-bold"
              >
                {user.name.split(' ')[0]}
              </button>
            ) : (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={(e) => handleLinkClick('login', e)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-300 bg-white/5 border border-white/10"
                >
                  Log In
                </button>
                <button
                  onClick={(e) => handleLinkClick('register', e)}
                  className="px-2.5 py-1 rounded-full text-[11px] font-bold text-black bg-[#f5b842]"
                >
                  Register
                </button>
              </div>
            )}

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-300 hover:text-white bg-[#151722] border border-white/10 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden bg-[#0e1017]/98 border-b border-white/10 backdrop-blur-2xl px-5 pt-3 pb-6 transition-all shadow-2xl animate-fadeIn">
          
          {/* User status in mobile drawer */}
          {user ? (
            <div className="p-3 mb-3 rounded-2xl bg-[#141624] border border-[#f5b842]/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">{user.name}</div>
                <div className="text-[10px] text-slate-400 capitalize">{user.role} &bull; {user.track}</div>
              </div>
              <button
                onClick={() => {
                  if (onLogout) onLogout();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-rose-400 flex items-center gap-1 font-semibold"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 mb-3 pb-3 border-b border-white/10">
              <button
                onClick={(e) => handleLinkClick('login', e)}
                className="py-2.5 rounded-xl text-xs font-semibold text-center text-white bg-white/5 border border-white/10"
              >
                Log In
              </button>
              <button
                onClick={(e) => handleLinkClick('register', e)}
                className="py-2.5 rounded-xl text-xs font-bold text-center text-black bg-[#f5b842] shadow-md"
              >
                Sign Up / Register
              </button>
            </div>
          )}

          <div className="flex flex-col gap-1">
            {[
              { label: 'Home', page: 'home' as PageType },
              { label: 'About Volatus Capital', page: 'about' as PageType },
              { label: 'Forex Signals Terminal', page: 'signals' as PageType },
              { label: 'Pricing & Classes Tuition', page: 'pricing' as PageType },
              { label: 'Register (Signals, Copy, Classes, Invest)', page: 'register' as PageType },
              { label: 'Telegram Community', page: 'telegram' as PageType },
              { label: 'Media Kit & Deck', page: 'mediakit' as PageType },
              { label: 'Market Dispatches (Blog)', page: 'blog' as PageType },
              { label: 'Contact Trading Desk', page: 'contact' as PageType },
              { label: 'Partner Broker (Free VIP)', page: 'broker' as PageType },
              { label: 'Prop Firm Funding ($200K)', page: 'funding' as PageType },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={(e) => handleLinkClick(item.page, e)}
                className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl font-medium transition-all text-left ${
                  currentPage === item.page
                    ? 'bg-white/10 text-white font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onToggleTheme();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-xs font-semibold text-slate-300 bg-white/5 border border-white/10"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-[#f5b842]" /> : <Moon className="w-3.5 h-3.5" />}
                <span>Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVerifyModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold text-slate-200 bg-[#161824] border border-white/10 hover:border-[#f5b842]/50"
              >
                <span>Verify Broker Account (Free VIP)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTelegramModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold text-black bg-[#f5b842] shadow-lg"
              >
                <Send className="w-3.5 h-3.5 fill-black" />
                <span>Join VIP Telegram Channel</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


