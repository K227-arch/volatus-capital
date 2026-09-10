import React from 'react';
import { X } from 'lucide-react';
import { BrokerVerificationWidget } from './BrokerVerificationWidget';

interface BrokerVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrokerVerificationModal: React.FC<BrokerVerificationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#131726] to-[#0c0f18] border border-amber-500/30 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-purple-600 via-amber-400 to-yellow-300" />

        {/* Close button */}
        <div className="absolute top-5 right-5 z-10">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900/80 border border-slate-700/80 hover:border-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Render the core verification widget */}
        <div className="p-2 sm:p-4">
          <BrokerVerificationWidget />
        </div>
      </div>
    </div>
  );
};
