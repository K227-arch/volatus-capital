import React, { useState } from 'react';
import { 
  X, 
  Send, 
  ShieldCheck, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  Users 
} from 'lucide-react';
import { VolatusEmblem, VolatusLogo } from './VolatusLogo';

interface TelegramModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBrokerVerify: () => void;
}

export const TelegramModal: React.FC<TelegramModalProps> = ({
  isOpen,
  onClose,
  onOpenBrokerVerify,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  const publicChannelUrl = 'https://t.me/volatuscapital_fx';

  const handleCopy = () => {
    navigator.clipboard.writeText(publicChannelUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-gradient-to-b from-[#131726] to-[#0c0f18] border border-amber-500/30 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 via-amber-400 to-yellow-300" />

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <VolatusEmblem className="w-8 h-8" />
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  Volatus Telegram Channels
                </h3>
                <p className="text-xs text-slate-400">
                  Select your preferred community access
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Option A: VIP Signals Channel */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-b from-amber-500/10 to-purple-900/20 border border-amber-400/60 relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                VIP Members Only
              </span>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Live 24/7 Signals
              </span>
            </div>

            <h4 className="text-base font-bold text-slate-100">
              Private VIP Trading Room
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Full trade setups with Entry, SL, TP1-3, live trailing guidance, and funded account passing setups.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  onOpenBrokerVerify();
                }}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4 fill-slate-950/20" />
                <span>Get Free Access via Broker</span>
              </button>
            </div>
          </div>

          {/* Option B: Public Free Telegram Channel */}
          <div className="mt-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                Public Channel
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Users className="w-3 h-3 text-sky-400" />
                50,000+ Members
              </span>
            </div>

            <h4 className="text-base font-bold text-slate-100">
              Volatus Capital Free Telegram
            </h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Free market highlights, daily gold recaps, educational insights, and community announcements.
            </p>

            <div className="mt-4 flex items-center gap-2">
              <a
                href={publicChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-100 bg-sky-600 hover:bg-sky-500 shadow-[0_0_15px_rgba(2,132,199,0.3)] transition-all flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 fill-white" />
                <span>Open Free Telegram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopy}
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
                title="Copy Link"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-[11px] text-slate-500">
            Telegram app required on desktop or mobile device.
          </div>
        </div>
      </div>
    </div>
  );
};
