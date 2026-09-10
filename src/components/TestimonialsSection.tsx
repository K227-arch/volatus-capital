import React from 'react';
import { reviews } from '../data/reviews';
import { Star, ShieldCheck, Award, MessageSquare, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Verified Results &amp; Community Payouts</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight">
            Hear From Our VIP Members
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Real feedback from traders who joined through our partner broker verification or VIP passes.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-gradient-to-b from-[#121624] to-[#0c0f18] border border-slate-800 hover:border-amber-500/40 p-6 sm:p-7 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                {/* Header with Avatar & Profit Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-amber-500/30"
                    />
                    <div>
                      <div className="text-base font-bold text-slate-100 flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        {rev.verified && (
                          <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        )}
                      </div>
                      <div className="text-xs text-slate-400">{rev.location}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-mono font-black text-emerald-400">
                      {rev.profit}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      {rev.type === 'funded_trader' ? 'Funded Trader' : 'VIP Member'}
                    </span>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-500 ml-2 font-mono">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Trade Pair Tag */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-slate-400">
                  Primary Market: <strong className="text-slate-200">{rev.asset}</strong>
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  Verified Payout
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
