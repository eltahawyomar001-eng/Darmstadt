'use client';

import Image from 'next/image';

interface LogoProps {
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export default function Logo({ variant = 'light', showText = true }: LogoProps) {
  return (
    <Image
      src="/image-1766422823019.png"
      alt="NB Motorsport Logo"
      width={220}
      height={60}
      style={{ 
        height: '60px', 
        width: 'auto',
        objectFit: 'contain'
      }}
      priority
    />
  );
}
