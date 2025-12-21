'use client';

import { motion } from 'framer-motion';

export default function DatenschutzPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="about-label">Rechtliches</p>
            <h1>Datenschutzerklärung</h1>
          </motion.div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
            <h2>2. Datenerfassung auf dieser Website</h2>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            <h2>3. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten.</p>
            <h2>4. Analyse-Tools</h2>
            <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen.</p>
          </div>
        </div>
      </section>
    </>
  );
}
