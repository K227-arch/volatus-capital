import React from 'react';
import { TrendingUp, TrendingDown, Zap, Target } from 'lucide-react';

export const LiveTicker: React.FC = () => {
  const tickerItems = [
    { pair: 'XAUUSD (Gold)', price: '2,898.80', change: '+1.45%', isUp: true, status: 'TP2 HIT (+143 Pips)' },
    { pair: 'BTCUSD', price: '88,750.00', change: '+3.22%', isUp: true, status: 'TP1 HIT (+233 Pips)' },
    { pair: 'NAS100', price: '20,785.00', change: '-0.88%', isUp: false, status: 'TP2 HIT (+195 Pips)' },
    { pair: 'EURUSD', price: '1.0852', change: '+0.34%', isUp: true, status: 'ACTIVE (+37 Pips)' },
    { pair: 'GBPUSD', price: '1.2978', change: '-0.21%', isUp: false, status: 'NEW SIGNAL RUNNING' },
    { pair: 'US30', price: '43,890.00', change: '+0.65%', isUp: true, status: 'BREAKOUT READY' },
  ];

  return (
    <div className="w-full bg-[#0b0e18]/80 border-y border-amber-500/15 overflow-hidden backdrop-blur-md py-2.5">
      <div className="flex items-center">
        {/* Left fixed badge */}
        <div className="hidden sm:flex items-center gap-1.5 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border-r border-amber-500/20 whitespace-nowrap z-10 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>Live Ticker</span>
        </div>

        {/* Scrolling or Flex Items */}
        <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-4 whitespace-nowrap animate-none text-xs">
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 text-slate-300 shrink-0">
              <span className="font-bold text-slate-100">{item.pair}</span>
              <span className="font-mono text-slate-200">{item.price}</span>
              <span
                className={`flex items-center text-[11px] font-semibold ${
                  item.isUp ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {item.isUp ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                {item.change}
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-500/30">
                {item.status}
              </span>
              {idx < tickerItems.length - 1 && (
                <span className="text-slate-700 ml-2">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
