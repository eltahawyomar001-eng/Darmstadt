'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const sizeStyles = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
};

const springTransition = {
  type: 'spring' as const,
  stiffness: 400,
  damping: 30,
};

export function PrimaryButton({
  children,
  className = '',
  size = 'md',
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = `btn btn-primary ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={springTransition}
      >
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button 
      className={baseStyles}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      transition={springTransition}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

export function SecondaryButton({
  children,
  className = '',
  size = 'md',
  fullWidth = false,
  href,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = `btn btn-secondary ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={springTransition}
      >
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button 
      className={baseStyles}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      transition={springTransition}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export function IconButton({
  children,
  className = '',
  onClick,
  ariaLabel,
}: IconButtonProps) {
  return (
    <motion.button
      className={`icon-btn ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
