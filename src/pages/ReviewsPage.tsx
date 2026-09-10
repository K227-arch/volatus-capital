import React, { useState } from 'react';
import { reviews } from '../data/reviews';
import { 
  Star, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';

interface ReviewsPageProps {
  onOpenTelegramModal: () => void;
  onOpenVerifyModal: () => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({
  onOpenTelegramModal,
  onOpenVerifyModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'funded_trader' | 'vip_member'>('all');

  const filteredReviews = reviews.filter((rev) => {
    if (activeFilter === 'all') return true;
    return rev.type === activeFilter;
  });

  return (
    <div className="pt-28 pb-20 animate-fadeIn">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#141228] via-[#0d101a] to-[#12162a] border border-amber-500/20 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>Verified Member Feedback</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              Real Traders. Real Payouts.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Read how everyday traders and prop firm aspirants use Volatus signals to pass funded challenges, scale their accounts, and withdraw consistent trading profits.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-slate-200 font-mono text-sm ml-1">4.9 / 5.0</span>
              </div>
              <span className="text-slate-500">•</span>
              <span>1,200+ Active VIP Members</span>
              <span className="text-slate-500">•</span>
              <span>$1.8M+ Total Verified Member Payouts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center gap-2 pb-6 border-b border-slate-800">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            All Reviews ({reviews.length})
          </button>
          <button
            onClick={() => setActiveFilter('funded_trader')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'funded_trader'
                ? 'bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            Funded Traders
          </button>
          <button
            onClick={() => setActiveFilter('vip_member')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'vip_member'
                ? 'bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            VIP Signals Members
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-2xl bg-[#0e111c] border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between group hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-purple-600 flex items-center justify-center font-bold text-xs text-slate-950 font-mono">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-200 flex items-center gap-1.5">
                        <span>{review.name}</span>
                        {review.verified && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">{review.location}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-black font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {review.profit}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">{review.asset}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="capitalize text-slate-400 font-mono">{review.date}</span>
                <span className="font-bold text-amber-400/80">
                  {review.type === 'funded_trader' ? 'Funded Trader' : 'VIP Member'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Telegram Reviews Callout */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#12162a] via-[#0d101a] to-[#161224] border border-slate-800 p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-black text-slate-100">
            Want to Share Your Payout Proof?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2">
            Every week our VIP members share their MT4/MT5 withdrawals and Funding Pips certificates in our exclusive community lounge.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={onOpenTelegramModal}
              className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2"
            >
              <Send className="w-3.5 h-3.5 fill-slate-950" />
              <span>Join Community Proof Channel</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
