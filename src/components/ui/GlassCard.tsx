'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'strong';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const variantStyles = {
  default: `
    bg-[var(--surface-glass)]
    backdrop-blur-[16px]
    border border-[var(--border)]
  `,
  subtle: `
    bg-[var(--surface)]
    backdrop-blur-[12px]
    border border-[var(--border)]
  `,
  strong: `
    bg-[var(--surface-elevated)]
    backdrop-blur-[20px]
    border border-[var(--border-light)]
  `,
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10',
};

export default function GlassCard({
  children,
  className = '',
  variant = 'default',
  hover = true,
  padding = 'md',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`
        rounded-2xl
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        ${className}
      `}
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.01,
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
            }
          : undefined
      }
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 30,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
