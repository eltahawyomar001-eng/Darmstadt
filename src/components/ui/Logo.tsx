'use client';

interface LogoProps {
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export default function Logo({ variant = 'light', showText = true }: LogoProps) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#0C0800';
  const accentColor = '#38B6FF';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <svg
        width="48"
        height="40"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 36L2 4L8 4L8 24L18 4L24 4L24 36L18 36L18 16L8 36L2 36Z"
          fill={textColor}
        />
        <path
          d="M28 4H40C44 4 46 6 46 10V14C46 16 45 18 43 19C45 20 46 22 46 24V30C46 34 44 36 40 36H28V4ZM34 16H38C40 16 40 14 40 12C40 10 40 8 38 8H34V16ZM34 32H38C40 32 40 30 40 28C40 26 40 24 38 24H34V32Z"
          fill={accentColor}
        />
      </svg>
      
      {showText && (
        <span style={{ 
          fontSize: '10px', 
          fontWeight: 400, 
          color: textColor,
          letterSpacing: '0.15em',
          textTransform: 'uppercase'
        }}>
          MOTORSPORT
        </span>
      )}
    </div>
  );
}
