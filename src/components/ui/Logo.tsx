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
      width={180}
      height={50}
      style={{ 
        height: '50px', 
        width: 'auto',
        objectFit: 'contain'
      }}
      priority
    />
  );
}
