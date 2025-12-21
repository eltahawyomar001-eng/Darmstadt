'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import GlassCard from './GlassCard';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <GlassCard className={className} padding="lg">
      <div className="flex flex-col items-start gap-4">
        <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent-light)]">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
      </div>
    </GlassCard>
  );
}

interface FeatureGridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({
  children,
  columns = 3,
  className = '',
}: FeatureGridProps) {
  const colClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div
      className={`
        grid grid-cols-1 gap-6
        ${colClasses[columns]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface InfoCardProps {
  title: string;
  description: string;
  image?: string;
  children?: ReactNode;
  className?: string;
}

export function InfoCard({
  title,
  description,
  image,
  children,
  className = '',
}: InfoCardProps) {
  return (
    <GlassCard className={`overflow-hidden ${className}`} padding="none">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[var(--text-muted)] leading-relaxed">{description}</p>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </GlassCard>
  );
}
