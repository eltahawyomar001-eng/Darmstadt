'use client';

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const sizeClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '2xl': 'max-w-7xl',
  full: 'max-w-full',
};

export default function Container({
  children,
  className = '',
  size = '2xl',
}: ContainerProps) {
  return (
    <div
      className={`
        w-full mx-auto px-4 sm:px-6 lg:px-8
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
