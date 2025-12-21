'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/team', label: 'Team' },
  { href: '/lenzo-chassis', label: 'Lenzo Chassis' },
  { href: '/motoren-service', label: 'Motoren & Service' },
  { href: '/news', label: 'News' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
            <Logo size="sm" />
          </Link>

          <div className="navbar-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || 
                (link.href !== '/' && pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navbar-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="navbar-cta">
            <Link href="/kontakt" className="btn btn-primary btn-sm">
              Kontakt
            </Link>
          </div>

          <button
            className="navbar-mobile-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-menu-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div style={{ marginTop: '1rem' }}>
              <Link href="/kontakt" className="btn btn-primary btn-md w-full">
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
