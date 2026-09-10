import React, { useState } from 'react';
import { faqs } from '../data/faq';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  Send, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  MessageCircleQuestion
} from 'lucide-react';

interface FaqPageProps {
  onOpenVerifyModal: () => void;
  onOpenTelegramModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({
  onOpenVerifyModal,
  onOpenTelegramModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'broker' | 'signals' | 'funding'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 animate-fadeIn">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#141228] via-[#0d101a] to-[#12162a] border border-amber-500/20 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Knowledge Base &amp; FAQ</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-100 tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Everything you need to know about our VIP signals, partner broker verification, Funding Pips prop firm challenges, and Telegram access.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: FAQ Accordion (8 cols) */}
          <div className="lg:col-span-8">
            
            {/* Search and Category Filters */}
            <div className="space-y-4 mb-6">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. broker, drawdown, Telegram)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-amber-400 text-xs text-slate-200 placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {(['all', 'general', 'broker', 'signals', 'funding'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all whitespace-nowrap ${
                      activeCategory === cat
                        ? 'bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                    }`}
                  >
                    {cat === 'all' ? 'All Questions' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions Accordion */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0e111c] border border-slate-800 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-200 hover:text-amber-400 transition-colors"
                    >
                      <span className="text-sm font-bold">{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-amber-400' : 'text-slate-500'
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Direct Telegram Desk (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-[#141829] to-[#0c0f18] border border-slate-800 p-6">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold mb-4">
                <MessageCircleQuestion className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-black text-slate-100">
                Still Have Questions?
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Our support team and senior trading analysts are active on Telegram 24/7 during London and New York market hours.
              </p>

              <div className="mt-6 space-y-2.5">
                <button
                  onClick={onOpenTelegramModal}
                  className="w-full py-3 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Message Support on Telegram</span>
                </button>

                <button
                  onClick={onOpenVerifyModal}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Verify Broker Account</span>
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 text-xs text-slate-400 space-y-2">
              <div className="font-bold text-slate-300">Quick Response Guarantee</div>
              <p>
                VIP inquiries are responded to within 15 minutes. For broker account approvals, the automated bot operates 24/7.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
