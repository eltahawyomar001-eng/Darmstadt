'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NewsDetailPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="about-label">News Artikel</p>
            <h1>Neue Saison 2024</h1>
            <p>15. Januar 2024</p>
          </motion.div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <p>Die Kartsaison 2024 steht vor der Tür und wir freuen uns auf spannende Rennen und neue Herausforderungen.</p>
            <p>Unser Team hat sich intensiv vorbereitet und wir sind bereit für die kommende Saison.</p>
            <p>Bleiben Sie gespannt auf weitere Updates!</p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/news" className="btn btn-md btn-secondary">Zurück zu News</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
