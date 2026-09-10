import React, { useState } from 'react';
import { PageType, RegistrationTrack, UserAccount } from '../types';
import { 
  Lock, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  User, 
  KeyRound,
  Zap,
  Briefcase,
  GraduationCap,
  Copy
} from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: PageType, track?: RegistrationTrack) => void;
  onLoginSuccess: (user: UserAccount) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onNavigate,
  onLoginSuccess,
}) => {
  const [emailOrId, setEmailOrId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      // Determine simulated user based on email or default
      const isInvestor = emailOrId.toLowerCase().includes('invest');
      const isStudent = emailOrId.toLowerCase().includes('student') || emailOrId.toLowerCase().includes('class');

      const user: UserAccount = {
        id: emailOrId.startsWith('VC-') ? emailOrId : 'VC-749201',
        name: emailOrId ? emailOrId.split('@')[0].replace('.', ' ') : 'Keith Twesigye',
        email: emailOrId.includes('@') ? emailOrId : 'keith.twesigye@volatuscapital.com',
        track: isInvestor ? 'investing' : isStudent ? 'classes' : 'signals',
        role: isInvestor ? 'investor' : isStudent ? 'student' : 'vip',
        country: 'United Kingdom',
        investmentAmount: isInvestor ? '$25,000' : undefined,
        createdAt: '2026-01-15'
      };

      setIsSubmitting(false);
      onLoginSuccess(user);
    }, 700);
  };

  const handleQuickDemoLogin = (track: RegistrationTrack) => {
    const demos: Record<RegistrationTrack, UserAccount> = {
      signals: {
        id: 'VC-302194',
        name: 'Keith Twesigye (VIP Trader)',
        email: 'keith.vip@volatuscapital.com',
        track: 'signals',
        role: 'vip',
        country: 'United Kingdom',
        createdAt: '2026-02-10'
      },
      investing: {
        id: 'VC-894120',
        name: 'Keith Twesigye (Capital Investor)',
        email: 'keith.investor@volatuscapital.com',
        track: 'investing',
        role: 'investor',
        investmentAmount: '$50,000',
        country: 'United States',
        createdAt: '2026-01-05'
      },
      classes: {
        id: 'VC-481902',
        name: 'Keith Twesigye (Forex Student)',
        email: 'keith.student@volatuscapital.com',
        track: 'classes',
        role: 'student',
        classLevel: 'intermediate',
        classDelivery: 'physical',
        country: 'Uganda',
        createdAt: '2026-03-01'
      },
      copytrading: {
        id: 'VC-193021',
        name: 'Keith Twesigye (Copy Trader)',
        email: 'keith.copy@volatuscapital.com',
        track: 'copytrading',
        role: 'member',
        country: 'United Arab Emirates',
        createdAt: '2026-02-20'
      }
    };

    onLoginSuccess(demos[track]);
  };

  return (
    <div className="pt-28 pb-20 animate-fadeIn min-h-screen text-slate-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6">
        
        {/* Container */}
        <div className="rounded-3xl bg-[#0e1017] border border-white/[0.08] p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f5b842]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Logo Brand Title */}
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#f5b842]/15 border border-[#f5b842]/30 text-[#f5b842] flex items-center justify-center mx-auto mb-4 shadow-md">
              <KeyRound className="w-6 h-6" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#f5b842] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Volatus Institutional Gateway</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-tight">
              Sign In to Your Account
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Access your signals terminal, classes portal, or investment portfolio.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address or Client ID
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={emailOrId}
                  onChange={(e) => setEmailOrId(e.target.value)}
                  placeholder="e.g. name@domain.com or VC-894120"
                  className="w-full bg-[#141624] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842] transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Password
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link has been dispatched to your email address."); }} className="text-[11px] text-[#f5b842] hover:underline">
                  Forgot Password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#141624] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#f5b842] transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-white/20 text-[#f5b842]"
                />
                <span>Remember this terminal</span>
              </label>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 256-Bit SSL
              </span>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#f5b842] hover:bg-[#e6aa32] text-black shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Authenticating Terminal...</span>
                ) : (
                  <>
                    <span>Log In to Client Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Quick Demo Access Bar for Instant Verification */}
          <div className="mt-8 pt-6 border-t border-white/[0.08]">
            <div className="text-[10px] uppercase font-bold text-slate-400 text-center tracking-wider mb-3">
              Fast Demo Logins
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('investing')}
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-left text-[11px] text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-2"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#f5b842] shrink-0" />
                <span className="truncate">Login as Investor</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('classes')}
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-left text-[11px] text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-2"
              >
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">Login as Student</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('signals')}
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-left text-[11px] text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-2"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">Login as VIP Signals</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('copytrading')}
                className="p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-left text-[11px] text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-2"
              >
                <Copy className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">Login as Copy Trader</span>
              </button>
            </div>
          </div>

          {/* Switch to Register */}
          <div className="text-center text-xs text-slate-400 mt-6 pt-4 border-t border-white/[0.08]">
            Don't have a Volatus account yet?{' '}
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="text-[#f5b842] hover:underline font-bold cursor-pointer"
            >
              Sign Up / Register &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
