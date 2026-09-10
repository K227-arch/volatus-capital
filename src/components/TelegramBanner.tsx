import React from 'react';
import { Send, Sparkles, Users, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { VolatusEmblem } from './VolatusLogo';

interface TelegramBannerProps {
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
}

export const TelegramBanner: React.FC<TelegramBannerProps> = ({
  onOpenVerifyModal,
  onOpenTelegramModal,
}) => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-purple-950/60 via-[#101422] to-amber-950/50 border border-amber-500/30 p-8 sm:p-12 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">
                <Send className="w-3.5 h-3.5 fill-sky-400" />
                <span>Join Over 50,000+ Active Traders</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-100 tracking-tight">
                Ready to Trade With Institutional Precision?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect directly with our Telegram signal desk. Receive market setups, live chart markups, 
                and instant news alerts directly on your phone or desktop.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
              <button
                onClick={onOpenVerifyModal}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-[0_0_30px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 fill-slate-950/20" />
                <span>Verify Broker For Free VIP</span>
              </button>

              <button
                onClick={onOpenTelegramModal}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-sky-400" />
                <span>Free Telegram Channel</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
