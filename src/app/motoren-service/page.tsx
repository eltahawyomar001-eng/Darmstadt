'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { EngineIcon, GaugeIcon, WrenchIcon, ToolsIcon } from '@/components/icons/Icons';

const services = [
  { name: 'Motorrevision', desc: 'Komplette Überholung Ihres Kart-Motors mit höchster Präzision. Wir bringen Ihren Motor zurück auf Werksleistung oder darüber hinaus.', icon: EngineIcon, category: 'Überholung' },
  { name: 'Tuning', desc: 'Professionelle Leistungsoptimierung für maximalen Speed. Individuelle Abstimmung auf Ihre Anforderungen und Streckenbedingungen.', icon: GaugeIcon, category: 'Performance' },
  { name: 'Wartung', desc: 'Regelmäßige Inspektionen und Pflege für langlebige Motorleistung. Vorbeugende Wartung spart Kosten und verhindert Ausfälle.', icon: WrenchIcon, category: 'Pflege' },
  { name: 'Reparatur', desc: 'Schnelle und zuverlässige Reparaturen bei Defekten oder Verschleiß. Kurze Durchlaufzeiten und faire Preise garantiert.', icon: ToolsIcon, category: 'Instandsetzung' },
];

export default function MotorenServicePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="about-label">Motoren & Service</p>
            <h1>Professioneller Kart-Motor Service</h1>
            <p>Wir bieten umfassende Dienstleistungen für Ihren Kart-Motor – von der Wartung bis zum Tuning.</p>
          </motion.div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="products-grid">
            {services.map((s, i) => (
              <motion.div 
                key={s.name} 
                className="product-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="product-image">
                  <s.icon />
                </div>
                <div className="product-content">
                  <span className="product-badge">{s.category}</span>
                  <h3 className="product-title">{s.name}</h3>
                  <p className="product-description">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <h2>Service anfragen</h2>
            <p>Kontaktieren Sie uns für einen Termin – wir beraten Sie gerne persönlich.</p>
            <div className="cta-buttons">
              <Link href="/kontakt" className="btn btn-md cta-btn-primary">Termin vereinbaren</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
