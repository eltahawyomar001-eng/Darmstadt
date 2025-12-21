'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const dimensions = {
    sm: { icon: 32, text: 14 },
    md: { icon: 40, text: 16 },
    lg: { icon: 56, text: 20 },
  };

  const { icon, text } = dimensions[size];

  return (
    <div className="logo-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-dark, #0f766e)" />
            <stop offset="100%" stopColor="var(--accent, #0d9488)" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-light, #14b8a6)" />
            <stop offset="100%" stopColor="var(--accent, #0d9488)" />
          </linearGradient>
        </defs>
        
        {/* Main shield/badge shape */}
        <path
          d="M24 2L42 10V24C42 35.046 34.046 44 24 46C13.954 44 6 35.046 6 24V10L24 2Z"
          fill="url(#logoGradient)"
        />
        
        {/* Inner highlight */}
        <path
          d="M24 6L38 12V24C38 32.837 31.837 40 24 42C16.163 40 10 32.837 10 24V12L24 6Z"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
        
        {/* M letter - stylized racing style */}
        <path
          d="M14 32V18L19.5 26L24 18L28.5 26L34 18V32H30V25L26 31H22L18 25V32H14Z"
          fill="white"
        />
        
        {/* Racing stripe accent */}
        <path
          d="M24 2L24 8"
          stroke="var(--accent-light, #14b8a6)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Speed lines */}
        <path
          d="M8 18L4 18"
          stroke="url(#accentGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M8 24L2 24"
          stroke="url(#accentGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M8 30L4 30"
          stroke="url(#accentGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      
      {showText && (
        <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ 
            fontSize: `${text}px`, 
            fontWeight: 700, 
            color: 'var(--text)',
            letterSpacing: '-0.02em'
          }}>
            MR Motorsport
          </span>
          <span style={{ 
            fontSize: `${text * 0.65}px`, 
            fontWeight: 500, 
            color: 'var(--accent)',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            Lenzokart Deutschland
          </span>
        </div>
      )}
    </div>
  );
}
