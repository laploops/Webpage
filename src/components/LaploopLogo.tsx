import React from 'react';

interface LaploopLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'mono';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
}

export const LaploopLogo: React.FC<LaploopLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showWordmark = true,
}) => {
  // Height sizing mapped to standard Tailwind heights
  const sizeClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-10 sm:h-11',
    xl: 'h-12 sm:h-14',
  }[size];

  // Symbol-only height sizing
  const symbolSizeClasses = {
    sm: 'h-6 w-auto',
    md: 'h-8 w-auto',
    lg: 'h-10 w-auto',
    xl: 'h-12 w-auto',
  }[size];

  if (!showWordmark) {
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img
          src="/laploop-symbol.png"
          alt="LAPLOOP Symbol"
          className={`${symbolSizeClasses} object-contain transition-transform duration-200 hover:scale-105`}
          loading="eager"
        />
      </div>
    );
  }

  // Choose appropriate official logo variant:
  // variant='light' is used on dark backgrounds like #0B1220 (white wordmark + gradient ribbon)
  // variant='dark' is used on white/light backgrounds (dark wordmark + gradient ribbon)
  const logoSrc = variant === 'light' ? '/laploop-logo-white.png' : '/laploop-logo.png';

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="LAPLOOP — Engineering What's Next"
        className={`${sizeClasses} w-auto object-contain transition-opacity duration-200`}
        loading="eager"
      />
    </div>
  );
};
