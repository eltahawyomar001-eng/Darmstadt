'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from './GlassCard';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  category?: string;
  slug: string;
  className?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  image,
  date,
  category,
  slug,
  className = '',
}: ArticleCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <GlassCard className={`overflow-hidden group cursor-pointer ${className}`} padding="none">
        {image && (
          <div className="aspect-[16/10] w-full overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        )}
        {!image && (
          <div className="aspect-[16/10] w-full bg-[var(--surface-elevated)] flex items-center justify-center">
            <svg className="w-12 h-12 text-[var(--text-subtle)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            {category && (
              <span className="text-xs font-medium text-[var(--accent-light)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-full">
                {category}
              </span>
            )}
            <span className="text-sm text-[var(--text-subtle)]">{date}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--accent-light)] transition-colors">
            {title}
          </h3>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        </div>
      </GlassCard>
    </Link>
  );
}

interface ArticleLayoutProps {
  title: string;
  date: string;
  category?: string;
  image?: string;
  children: React.ReactNode;
}

export function ArticleLayout({
  title,
  date,
  category,
  image,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          {category && (
            <span className="text-sm font-medium text-[var(--accent-light)] bg-[var(--accent)]/10 px-3 py-1.5 rounded-full">
              {category}
            </span>
          )}
          <span className="text-sm text-[var(--text-subtle)]">{date}</span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          {title}
        </h1>
      </header>
      
      {image && (
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-8">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="prose prose-invert prose-lg max-w-none">
        {children}
      </div>
    </article>
  );
}
