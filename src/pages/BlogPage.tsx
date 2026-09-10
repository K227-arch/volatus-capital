import React, { useState } from 'react';
import { PageType } from '../types';
import { VolatusEmblem } from '../components/VolatusLogo';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Tag, 
  ArrowRight, 
  ChevronRight, 
  X, 
  CheckCircle2, 
  Share2, 
  TrendingUp, 
  ShieldAlert, 
  Sparkles,
  Send
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageType) => void;
  onOpenTelegramModal: () => void;
}

interface Article {
  id: string;
  title: string;
  category: 'SMC & Order Flow' | 'Macroeconomics' | 'Gold & Commodities' | 'Risk & Psychology' | 'Prop Firm Guides';
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  authorRole: string;
  content: string[];
  keyTakeaways: string[];
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onOpenTelegramModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = ['All', 'SMC & Order Flow', 'Macroeconomics', 'Gold & Commodities', 'Risk & Psychology', 'Prop Firm Guides'];

  const articles: Article[] = [
    {
      id: 'liquidity-sweeps',
      title: 'The Liquidity Sweep Anatomy: How Banks Trap Retail Breakout Traders',
      category: 'SMC & Order Flow',
      date: 'April 18, 2026',
      readTime: '6 min read',
      author: 'Marcus K. Sterling',
      authorRole: 'Senior Algorithmic & SMC Analyst',
      excerpt: 'Retail technical analysis teaches traders to buy resistance breakouts. Here is why Tier-1 banks use those exact breakouts to engineer exit liquidity for their massive positions.',
      content: [
        'Every retail trader has experienced the classic heartbreak: price breaks above a multi-week resistance level, you enter long with a buy-stop, and within minutes an aggressive wick drives price 80 pips in the opposite direction, triggering your stop loss before reversing into profit.',
        'This is not random bad luck. It is liquidity engineering. Large institutional participants (central banks, sovereign wealth funds, commercial banks) cannot simply execute a 10,000-lot market order without driving price against themselves. To buy at discount, they need an immense pool of sell orders.',
        'Where do sell orders accumulate? Beneath obvious double-bottoms and equal lows. Where do buy stops accumulate? Above obvious resistance. By driving price temporarily above resistance, institutions fill retail breakout buy orders with their massive sell positions.',
        'At Volatus Capital, we never trade the initial breakout. We patiently wait for the sweep of equal highs, monitor lower timeframe market structure shifts (MSS), and enter on the return into the Fair Value Gap (FVG).'
      ],
      keyTakeaways: [
        'Equal highs and equal lows represent resting stop-loss liquidity pools.',
        'Wait for the liquidity grab wick and displacement candle before considering an entry.',
        'Never buy resistance or sell support; wait for institutional mitigation.'
      ]
    },
    {
      id: 'fomc-cpi-framework',
      title: 'Trading the FOMC & CPI: A Quantitative Guide to Volatility Surges',
      category: 'Macroeconomics',
      date: 'April 10, 2026',
      readTime: '8 min read',
      author: 'Julian Vance',
      authorRole: 'Head of Macro Strategy',
      excerpt: 'High-impact macroeconomic releases can wipe out an undisciplined account in seconds. Learn the three-phase protocol our desk uses to navigate CPI and central bank rate decisions.',
      content: [
        'Central bank interest rate decisions and CPI releases dictate currency trends for weeks. Yet most retail traders treat news releases like a casino roulette wheel, gambling on whether the number will come in hot or cold.',
        'Our desk operates with a strict Three-Phase News Protocol: Phase 1 (Pre-Release Lockdown), Phase 2 (Initial Spike Absorption), and Phase 3 (The Secondary Institutional Trend).',
        'In Phase 1, we close 80% of open intraday exposure 15 minutes before the release to avoid spread widening and slippage. In Phase 2, we let the initial manic algorithmic spike occur without touching the order book.',
        'In Phase 3 (usually 15 to 30 minutes after the release), price returns to an established institutional discount or premium order block. This is where real risk-to-reward setups emerge.'
      ],
      keyTakeaways: [
        'Never hold open market orders through high-impact red folder news without trailing stops at break-even.',
        'Broker spreads widen up to 10x during the first 60 seconds of CPI/NFP.',
        'Trade the post-news continuation, never the initial algorithmic spike.'
      ]
    },
    {
      id: 'gold-asymmetry',
      title: 'Gold (XAU/USD) Market Cycle: Why 1:3 Risk-to-Reward is Mathematically Superior',
      category: 'Gold & Commodities',
      date: 'March 28, 2026',
      readTime: '5 min read',
      author: 'Marcus K. Sterling',
      authorRole: 'Senior Algorithmic Analyst',
      excerpt: 'Gold is renowned for high volatility and rapid intraday swings. Discover why aiming for a 1:3 minimum risk-reward ratio makes you profitable even with a 40% win rate.',
      content: [
        'Many amateur traders fixate on having a 90% win rate. But in institutional prop trading, a trader with a 45% win rate and a 1:3.5 risk-to-reward ratio will vastly outperform a trader with an 80% win rate risking $300 to make $100.',
        'If you risk $100 to make $300 across 20 trades: Even if you lose 12 trades (-$1,200) and win only 8 trades (+$2,400), your net gain is +$1,200 profit. You were wrong 60% of the time, yet your account grew substantially.',
        'XAU/USD offers the cleanest intraday directional expansions of any traded asset, regularly moving 150 to 300 pips during the London and New York overlap. By keeping tight 35-50 pip stops behind structural swing points, 1:3 and 1:5 targets are standard.'
      ],
      keyTakeaways: [
        'Math will always trump ego. Prioritize risk-to-reward over artificial win-rate vanity.',
        'Cut losing trades ruthlessly when market structure shifts against your thesis.',
        'Gold moves with immense momentum; never trade without a hard stop-loss.'
      ]
    },
    {
      id: 'prop-firm-200k',
      title: 'Passing a $200,000 Prop Firm Challenge: The 0.5% Daily Risk Rule',
      category: 'Prop Firm Guides',
      date: 'March 15, 2026',
      readTime: '7 min read',
      author: 'Elena Rostova',
      authorRole: 'Chief Risk Officer',
      excerpt: '90% of traders fail prop firm challenges due to max daily drawdown violations. Here is the exact position sizing formula our funded members use to secure 6-figure allocations.',
      content: [
        'Proprietary trading firms do not look for traders who can double an account in two weeks. They look for capital managers who never violate drawdown parameters.',
        'Most prop firms enforce a 5% maximum daily trailing drawdown and a 10% total drawdown limit. If you risk 2% per trade, two consecutive losses and a small slippage will immediately breach your account.',
        'Our Volatus Golden Rule for funded accounts is 0.5% maximum risk per trade, with a daily loss limit of 1.5% (maximum 3 losses in a single day, after which terminal trading must cease until the next session).',
        'By adhering to this structure, a trader can withstand a 10-trade losing streak and still remain comfortably within safety limits.'
      ],
      keyTakeaways: [
        'Cap per-trade risk at 0.5% on all evaluation phases.',
        'Institute a hard 3-loss circuit breaker for every trading day.',
        'Treat prop firm capital with more respect than your own personal savings.'
      ]
    },
    {
      id: 'drawdown-psychology',
      title: 'The Psychology of Drawdown: How Institutional Desks Stay Cold',
      category: 'Risk & Psychology',
      date: 'March 04, 2026',
      readTime: '6 min read',
      author: 'Elena Rostova',
      authorRole: 'Chief Risk Officer',
      excerpt: 'Losing streaks are mathematically inevitable. Learn how institutional traders decouple their self-worth from red days and avoid destructive revenge trading cycles.',
      content: [
        'The primary difference between a retail amateur and an institutional trader is not their charting software. It is their physiological reaction to a loss.',
        'When an amateur loses three trades in a row, cortisol surges. They experience anger, frustration, and an urgent desire to "get their money back" from the market. They increase lot sizes, ignore their trading plan, and enter sloppy setups.',
        'Institutional capital treats losses as standard business operating expenses, akin to rent or electricity for a commercial store. If an order block setup satisfies all checklist rules and hits stop-loss, it is a good trade with an unfavorable statistical outcome.',
        'By accepting that the outcome of any individual trade is random, but the outcome of a 100-trade sample size is highly profitable, emotional attachment vanishes.'
      ],
      keyTakeaways: [
        'Losses are operating expenses, not personal failures.',
        'Never look at trading P&L in dollar terms; look exclusively in percentages and risk units (R).',
        'Step away from the screen immediately after your daily stop threshold is reached.'
      ]
    },
    {
      id: 'fvg-mitigation',
      title: 'Fair Value Gaps (FVG) vs. Mitigation Blocks: Identifying High-Probability Reversals',
      category: 'SMC & Order Flow',
      date: 'February 22, 2026',
      readTime: '9 min read',
      author: 'Marcus K. Sterling',
      authorRole: 'Senior Algorithmic Analyst',
      excerpt: 'A deep-dive tutorial comparing single-candle imbalances with multi-candle mitigation blocks to pinpoint institutional entries with sniper-level precision.',
      content: [
        'A Fair Value Gap (FVG) is a three-candle price pattern where the wick of candle 1 does not overlap with the wick of candle 3, leaving a vacuum of trading activity in candle 2. This represents an inefficient delivery of price.',
        'The market behaves like an auction mechanism. When price moves too fast in one direction, algorithmic liquidity providers eventually retrace to balance the book before continuing in the intended trend.',
        'However, trading every FVG will result in overtrading. You must filter FVGs by market narrative: Did the impulse candle create a Break of Structure (BOS)? Did it sweep prior session highs? Is the FVG situated in discount or premium territory?',
        'Combining a 15-minute FVG with a higher timeframe order block generates our highest probability execution triggers inside the Volatus VIP signals channel.'
      ],
      keyTakeaways: [
        'Only trade FVGs that formed with aggressive momentum and candle body displacement.',
        'Confirm that liquidity was swept prior to the gap creation.',
        'Use the 50% midpoint (consequent encroachment) of the FVG for optimal entry precision.'
      ]
    }
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesQuery = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         art.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-28 pb-20 animate-fadeIn text-slate-100">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#141824] via-[#0d101a] to-[#171424] border border-white/[0.08] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5b842]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5b842]/10 border border-[#f5b842]/30 text-[#f5b842] text-xs font-bold uppercase tracking-wider mb-5">
              <BookOpen className="w-4 h-4" />
              <span>Volatus Market Dispatches</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-editorial font-medium text-white tracking-tight leading-[1.08]">
              Institutional analysis. <span className="italic text-[#f5b842]">Zero retail noise.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Deep-dive breakdowns, Smart Money Concepts (SMC) tutorials, central bank macro commentary, and quantitative risk management lessons from our trading desk.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-lg relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles by topic, setup, or asset (e.g. FVG, Gold, CPI)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-[#161826] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#f5b842] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#f5b842] text-black shadow-md'
                  : 'bg-[#12141d] text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-20 bg-[#12141d] rounded-3xl border border-white/[0.08]">
            <p className="text-slate-400 text-sm">No articles matched your search query "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-full text-xs font-bold text-[#f5b842] bg-[#f5b842]/10"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="rounded-3xl bg-[#12141d] border border-white/[0.08] p-7 flex flex-col justify-between hover:border-white/20 transition-all hover:translate-y-[-3px] cursor-pointer group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#f5b842]">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#f5b842] transition-colors leading-snug mb-3">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  <div>
                    <div className="text-white font-medium">{art.author}</div>
                    <div className="text-[10px] text-slate-500">{art.date}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#f5b842] group-hover:text-black flex items-center justify-center text-slate-300 transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0e1017] border border-white/15 rounded-3xl p-6 sm:p-10 max-w-3xl w-full text-slate-200 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f5b842]">
                <VolatusEmblem className="w-4 h-4" />
                <span>{activeArticle.category}</span>
              </div>
              <button 
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Article Headline */}
            <h2 className="text-2xl sm:text-4xl font-editorial font-medium text-white tracking-tight leading-tight mb-4">
              {activeArticle.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-slate-400 mb-8 pb-4 border-b border-white/10">
              <div>By <strong className="text-white">{activeArticle.author}</strong> ({activeArticle.authorRole})</div>
              <div>&bull;</div>
              <div>{activeArticle.date}</div>
              <div>&bull;</div>
              <div className="text-[#f5b842] font-mono">{activeArticle.readTime}</div>
            </div>

            {/* Key Takeaways Box */}
            <div className="rounded-2xl bg-[#151826] border border-[#f5b842]/30 p-5 mb-8">
              <div className="text-xs font-bold text-[#f5b842] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Core Institutional Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {activeArticle.keyTakeaways.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Content Paragraphs */}
            <div className="space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {activeArticle.content.map((para, paraIdx) => (
                <p key={paraIdx}>{para}</p>
              ))}
            </div>

            {/* Modal Footer Call to Action */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 text-center sm:text-left">
                Trade setups based on this methodology are broadcast daily in our Telegram room.
              </div>
              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenTelegramModal();
                }}
                className="px-6 py-3 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-lg shrink-0 cursor-pointer"
              >
                Join VIP Telegram for Live Setups
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
