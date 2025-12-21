'use client';

import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const paddingStyles = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-20 md:py-32',
  xl: 'py-24 md:py-40',
};

export default function Section({
  children,
  className = '',
  containerSize = '2xl',
  padding = 'md',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${paddingStyles[padding]} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`
        mb-12 md:mb-16
        ${centered ? 'text-center' : ''}
        ${className}
      `}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
