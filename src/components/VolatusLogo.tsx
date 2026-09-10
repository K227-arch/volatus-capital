import React from 'react';

interface VolatusLogoProps {
  className?: string;
  variant?: 'vertical' | 'horizontal' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

/**
 * VolatusEmblem:
 * Faithfully vectorizes the uploaded icon.jpeg:
 * - Left wing: Deep royal plum/purple bar with rounded corner
 * - Right wing: Bright golden lightning bolt terminating in an upward breakout arrow
 * - 100% transparent background with subtle ambient illumination for dark theme
 */
export const VolatusEmblem: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => {
  return (
    <svg
      viewBox="0 0 540 440"
      className={`shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Brand Royal Purple Gradient */}
        <linearGradient id="volatusPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="35%" stopColor="#7E22CE" />
          <stop offset="70%" stopColor="#58145E" />
          <stop offset="100%" stopColor="#3E0B42" />
        </linearGradient>

        {/* Brand Golden-Yellow Lightning Gradient */}
        <linearGradient id="volatusGold" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D98A1B" />
          <stop offset="45%" stopColor="#F5A623" />
          <stop offset="100%" stopColor="#FFD043" />
        </linearGradient>

        {/* Subtle glow filter tailored for dark themes */}
        <filter id="volatusGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#F5A623" floodOpacity="0.3" />
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#9333EA" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#volatusGlow)">
        {/* Left Wing (Deep Purple Slanted Bar with Rounded Top-Left) */}
        <path
          d="M 236 386 
             L 104 104 
             C 100 95, 107 86, 118 86 
             L 190 86 
             L 248 226 
             L 204 316 
             Z"
          fill="url(#volatusPurple)"
        />

        {/* Right Wing (Golden Lightning Bolt Shooting Upwards with Arrowhead) */}
        <path
          d="M 236 386 
             L 204 316 
             L 294 176 
             L 262 186 
             L 312 92 
             L 370 120 
             L 352 134 
             L 446 22 
             L 394 158 
             L 376 138 
             L 326 230 
             L 352 230 
             Z"
          fill="url(#volatusGold)"
        />
      </g>
    </svg>
  );
};

export const VolatusLogo: React.FC<VolatusLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  showText = true,
}) => {
  const sizeConfig = {
    sm: {
      icon: 'w-7 h-7',
      title: 'text-sm sm:text-base tracking-[0.22em]',
      sub: 'text-[8px] sm:text-[9px] tracking-[0.32em]',
      line: 'w-3.5 sm:w-5',
    },
    md: {
      icon: 'w-9 h-9',
      title: 'text-lg sm:text-xl tracking-[0.24em]',
      sub: 'text-[9px] sm:text-[10px] tracking-[0.34em]',
      line: 'w-5 sm:w-7',
    },
    lg: {
      icon: 'w-14 h-14',
      title: 'text-2xl sm:text-3xl tracking-[0.26em]',
      sub: 'text-xs sm:text-sm tracking-[0.38em]',
      line: 'w-8 sm:w-12',
    },
    xl: {
      icon: 'w-20 h-20 sm:w-28 sm:h-28',
      title: 'text-3xl sm:text-5xl tracking-[0.28em]',
      sub: 'text-sm sm:text-lg tracking-[0.42em]',
      line: 'w-12 sm:w-20',
    },
  }[size];

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <VolatusEmblem className={sizeConfig.icon} />
      </div>
    );
  }

  if (variant === 'vertical') {
    return (
      <div className={`inline-flex flex-col items-center select-none text-center ${className}`}>
        <VolatusEmblem className={sizeConfig.icon} />
        {showText && (
          <div className="mt-3 flex flex-col items-center">
            <span
              className={`font-black font-sans uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-200 to-amber-200 ${sizeConfig.title}`}
            >
              VOLATUS
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className={`h-[1.5px] bg-[#f5b842] ${sizeConfig.line}`} />
              <span className={`font-serif font-bold text-[#f5b842] uppercase ${sizeConfig.sub}`}>
                CAPITAL
              </span>
              <span className={`h-[1.5px] bg-[#f5b842] ${sizeConfig.line}`} />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Horizontal variant (default)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <VolatusEmblem className={sizeConfig.icon} />
      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-black font-sans uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-amber-200 ${sizeConfig.title}`}
          >
            VOLATUS
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <span className={`h-[1.5px] bg-[#f5b842] ${sizeConfig.line}`} />
            <span className={`font-serif font-bold text-[#f5b842] leading-none uppercase ${sizeConfig.sub}`}>
              CAPITAL
            </span>
            <span className={`h-[1.5px] bg-[#f5b842] ${sizeConfig.line}`} />
          </div>
        </div>
      )}
    </div>
  );
};
