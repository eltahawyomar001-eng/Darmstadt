import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Logo */}
        <div className="footer-logo">
          <Image 
            src="/image-1766422823019.png" 
            alt="NB Motorsport Logo" 
            width={200} 
            height={60}
            style={{ height: '48px', width: 'auto' }}
          />
        </div>
        
        {/* Links Grid */}
        <div className="footer-links-grid">
          <div className="footer-column">
            <Link href="/chassis" className="footer-link-title">Lenzokart Chassis</Link>
          </div>
          <div className="footer-column">
            <Link href="/motoren" className="footer-link-title">Motoren & Services</Link>
          </div>
          <div className="footer-column">
            <Link href="/events" className="footer-link-title">Rennkalender</Link>
          </div>
        </div>
        
        {/* Secondary Links */}
        <div className="footer-secondary">
          <Link href="/team">Team</Link>
          <Link href="/news">News</Link>
        </div>
        
        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <Link href="/datenschutz">Datenschutz</Link>
            <Link href="/nutzungsbedingungen">Nutzungsbedingungen</Link>
            <Link href="/cookie-einstellungen">Cookie-Einstellungen</Link>
          </div>
          <p className="footer-copyright">© 2025 NB Motorsport. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
