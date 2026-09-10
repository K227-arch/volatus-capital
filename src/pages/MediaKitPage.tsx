import React, { useState } from 'react';
import { PageType } from '../types';
import { VolatusEmblem, VolatusLogo } from '../components/VolatusLogo';
import { 
  Download, 
  Copy, 
  Check, 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  Palette, 
  Type, 
  Layers, 
  Sparkles,
  ArrowRight,
  Mail
} from 'lucide-react';

interface MediaKitPageProps {
  onNavigate: (page: PageType) => void;
  onOpenTelegramModal: () => void;
}

export const MediaKitPage: React.FC<MediaKitPageProps> = ({
  onNavigate,
  onOpenTelegramModal
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [downloadingDeck, setDownloadingDeck] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHex(text);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleDownloadDeck = () => {
    setDownloadingDeck(true);
    setTimeout(() => {
      setDownloadingDeck(false);
      // Create and trigger simulated download
      const element = document.createElement('a');
      const file = new Blob([
        `VOLATUS CAPITAL - OFFICIAL DESK DECK & MEDIA KIT 2026\n\n` +
        `Brand: Volatus Capital\n` +
        `Ecosystem: Institutional Forex, Gold & Crypto Trading Desk\n` +
        `Community: 25,000+ Verified Telegram Subscribers\n` +
        `Monthly Traded Volume: $45M+\n` +
        `Average Win Rate: 87.4%\n` +
        `Primary Colors: #070912 (Obsidian), #F5B842 (Sovereign Gold)\n` +
        `Official Contact: desk@volatuscapital.com\n`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'Volatus_Capital_Media_Kit_2026.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
  };

  const colorPalette = [
    { name: 'Obsidian Canvas', hex: '#070912', rgb: 'rgb(7, 9, 18)', role: 'Primary Background' },
    { name: 'Deep Surface', hex: '#12141d', rgb: 'rgb(18, 20, 29)', role: 'Card & Container Surface' },
    { name: 'Sovereign Gold', hex: '#f5b842', rgb: 'rgb(245, 184, 66)', role: 'Signature Primary Accent' },
    { name: 'Deep Gold', hex: '#d49e35', rgb: 'rgb(212, 158, 53)', role: 'Micro Label & Eyebrows' },
    { name: 'Royal Violet', hex: '#4f46e5', rgb: 'rgb(79, 70, 229)', role: 'Emblem Gradient Accent' },
    { name: 'Pure White', hex: '#ffffff', rgb: 'rgb(255, 255, 255)', role: 'High-Contrast Typography' }
  ];

  return (
    <div className="pt-28 pb-20 animate-fadeIn text-slate-100">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#121626] via-[#0d101a] to-[#1a1728] border border-white/[0.08] p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5b842]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5b842]/10 border border-[#f5b842]/30 text-[#f5b842] text-xs font-bold uppercase tracking-wider mb-5">
              <FileText className="w-4 h-4" />
              <span>Official Press &amp; Brand Assets</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-editorial font-medium text-white tracking-tight leading-[1.08]">
              Volatus Capital <span className="italic text-[#f5b842]">Media Kit.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Official press materials, transparent brand vector assets, typography standards, audience statistics, and editorial guidelines for media and institutional partners.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs">
              <button
                onClick={handleDownloadDeck}
                disabled={downloadingDeck}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shadow-lg transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{downloadingDeck ? 'Generating Deck...' : 'Download Full Desk Deck'}</span>
              </button>

              <a
                href="mailto:press@volatuscapital.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Press Relations</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marks & Emblem Vectors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-8">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-1">
            Brand Assets
          </div>
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
            Official Logos &amp; Emblems
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Transparent, high-resolution SVG emblems and typography lockups matching icon.jpeg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Dark Background Emblem */}
          <div className="rounded-2xl bg-[#0e1017] border border-white/[0.08] p-8 flex flex-col items-center justify-between text-center min-h-[260px]">
            <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-6">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Primary Emblem</span>
              <span className="text-[10px] text-[#f5b842]">Transparent SVG</span>
            </div>
            <div className="py-4">
              <VolatusEmblem className="w-20 h-20" />
            </div>
            <div className="w-full pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-300">
              <span>Gold &amp; Violet Crest</span>
              <button 
                onClick={handleDownloadDeck}
                className="text-[#f5b842] hover:underline flex items-center gap-1 font-bold"
              >
                <Download className="w-3 h-3" />
                <span>Asset</span>
              </button>
            </div>
          </div>

          {/* Horizontal Brand Lockup */}
          <div className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-8 flex flex-col items-center justify-between text-center min-h-[260px]">
            <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-6">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Horizontal Wordmark</span>
              <span className="text-[10px] text-slate-300">Master Lockup</span>
            </div>
            <div className="py-6">
              <VolatusLogo size="lg" variant="horizontal" />
            </div>
            <div className="w-full pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-300">
              <span>Full Signature Mark</span>
              <button 
                onClick={handleDownloadDeck}
                className="text-[#f5b842] hover:underline flex items-center gap-1 font-bold"
              >
                <Download className="w-3 h-3" />
                <span>Asset</span>
              </button>
            </div>
          </div>

          {/* Light Mode Inverted Preview */}
          <div className="rounded-2xl bg-slate-100 border border-slate-300 p-8 flex flex-col items-center justify-between text-center min-h-[260px] text-slate-900">
            <div className="w-full flex items-center justify-between text-xs text-slate-600 mb-6">
              <span className="font-semibold uppercase tracking-wider text-[10px]">Light Mode Variant</span>
              <span className="text-[10px] text-amber-700 font-bold">Contrast Safe</span>
            </div>
            <div className="py-4">
              <div className="p-3 bg-slate-900 rounded-2xl inline-block">
                <VolatusEmblem className="w-16 h-16" />
              </div>
            </div>
            <div className="w-full pt-4 border-t border-slate-300 flex items-center justify-between text-xs text-slate-700">
              <span className="font-medium">Obsidian Pill Variant</span>
              <button 
                onClick={handleDownloadDeck}
                className="text-amber-800 hover:underline flex items-center gap-1 font-bold"
              >
                <Download className="w-3 h-3" />
                <span>Asset</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Color Palette Spec */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="mb-8">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-1">
            Visual Guidelines
          </div>
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
            Color Palette &amp; Contrast Specs
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Click any color swatch to copy its hexadecimal color code directly to your clipboard.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {colorPalette.map((c, idx) => (
            <div 
              key={idx}
              onClick={() => copyToClipboard(c.hex)}
              className="rounded-2xl bg-[#12141d] border border-white/[0.08] p-4 cursor-pointer hover:border-[#f5b842]/50 transition-all group"
            >
              <div 
                className="w-full h-16 rounded-xl mb-3 border border-white/10 group-hover:scale-[1.02] transition-transform flex items-end p-2"
                style={{ backgroundColor: c.hex }}
              />
              <div className="text-xs font-bold text-white mb-0.5">{c.name}</div>
              <div className="text-[10px] text-slate-400 mb-2">{c.role}</div>
              <div className="flex items-center justify-between text-[11px] font-mono text-[#f5b842] pt-2 border-t border-white/[0.06]">
                <span>{c.hex}</span>
                {copiedHex === c.hex ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography & Editorial Specs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-3xl bg-[#0e1017] border border-white/[0.08] p-8 sm:p-12">
          <div className="max-w-xl mb-8">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#d49e35] uppercase mb-1">
              Typography Hierarchy
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
              Type System &amp; Display Pairings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-[#f5b842] uppercase tracking-wider">Display &bull; Editorial</span>
              <div className="text-3xl font-editorial text-white">Newsreader / Playfair</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Used for primary display headlines, quotes, and brand stamps. Expresses institutional heritage and editorial prestige.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Interface &bull; Sans</span>
              <div className="text-2xl font-bold text-white">Inter / System Sans</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                High legibility body text, navigation elements, filters, and tooltips. Optimized for rapid information intake.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">Financial &bull; Monospace</span>
              <div className="text-2xl font-mono font-bold text-white">JetBrains / Monospace</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Used strictly for price quotes, pip counts, entry/SL numbers, timestamp stamps, and ticket IDs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Inquiries Contact Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-2xl bg-[#141624] border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#f5b842] mb-1">Press &amp; Media Desk</div>
            <div className="text-base font-bold text-white">Need an executive comment or institutional interview?</div>
            <div className="text-xs text-slate-400 mt-1">Our media relations desk responds to accredited journalists within 4 hours.</div>
          </div>
          <a
            href="mailto:press@volatuscapital.com"
            className="px-6 py-3 rounded-full text-xs font-bold text-black bg-[#f5b842] hover:bg-[#e6aa32] shrink-0"
          >
            press@volatuscapital.com
          </a>
        </div>
      </section>

    </div>
  );
};
