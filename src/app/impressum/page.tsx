'use client';

import { motion } from 'framer-motion';

export default function ImpressumPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="about-label">Rechtliches</p>
            <h1>Impressum</h1>
          </motion.div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Angaben gem. § 5 TMG</h2>
            <p>MR Motorsport<br/>Musterstraße 123<br/>64283 Darmstadt</p>
            <h2>Kontakt</h2>
            <p>Telefon: +49 6151 123456<br/>E-Mail: info@mr-motorsport.de</p>
            <h2>Vertretungsberechtigter</h2>
            <p>Max Mustermann</p>
            <h2>Haftungsausschluss</h2>
            <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
          </div>
        </div>
      </section>
    </>
  );
}
