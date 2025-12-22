'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/chassis', label: 'Chassis' },
  { href: '/motoren', label: 'Motoren' },
  { href: '/team', label: 'Rennteam' },
  { href: '/mehr', label: 'Mehr', hasDropdown: true },
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
        <div className="navbar-container">
          <Link href="/" className="navbar-logo">
            <Image 
              src="/image-1766422823019.png" 
              alt="NB Motorsport" 
              width={120} 
              height={40}
              priority
              style={{ width: 'auto', height: '32px' }}
            />
          </Link>

          <nav className="navbar-nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navbar-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="navbar-buttons">
            <Link href="/anmelden" className="navbar-btn-anmelden">
              Anmelden
            </Link>
            <Link href="/anfrage" className="navbar-btn-anfrage">
              Anfrage
            </Link>
          </div>

          <button
            className="navbar-mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`mobile-menu-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="mobile-menu-buttons">
            <Link href="/anmelden" className="mobile-menu-anmelden" onClick={() => setIsOpen(false)}>
              Anmelden
            </Link>
            <Link href="/anfrage" className="mobile-menu-anfrage" onClick={() => setIsOpen(false)}>
              Anfrage
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
