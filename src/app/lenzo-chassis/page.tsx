'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChassisIcon } from '@/components/icons/Icons';

const chassis = [
  { name: 'LenzoKart LK-01', category: 'Einsteiger', desc: 'Das perfekte Chassis für Anfänger und Hobby-Fahrer. Optimale Balance zwischen Stabilität und Fahrverhalten für den einfachen Einstieg in den Kartsport.' },
  { name: 'LenzoKart LK-02', category: 'Fortgeschritten', desc: 'Für ambitionierte Hobby-Fahrer, die mehr Leistung suchen. Verbesserte Aerodynamik und präziseres Handling für anspruchsvolle Strecken.' },
  { name: 'LenzoKart LK-03', category: 'Semi-Pro', desc: 'Entwickelt für regionale Meisterschaften. Hochwertige Materialien und optimierte Geometrie für maximale Performance auf der Rennstrecke.' },
  { name: 'LenzoKart LK-04', category: 'Profi', desc: 'Unser Top-Modell für nationale und internationale Wettkämpfe. Kompromisslose Qualität und Technologie für professionelle Fahrer.' },
];

export default function LenzoChassisPage() {
  return (
    <>
      <section className='page-hero'>
        <div className='container'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className='about-label'>Lenzo Chassis</p>
            <h1>Premium Kart-Chassis von Lenzokart</h1>
            <p>Entdecken Sie unsere Auswahl an hochwertigen Chassis für jeden Anspruch und jedes Fahrlevel.</p>
          </motion.div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='products-grid'>
            {chassis.map((c, i) => (
              <motion.div 
                key={c.name} 
                className='product-card'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className='product-image'>
                  <ChassisIcon />
                </div>
                <div className='product-content'>
                  <span className='product-badge'>{c.category}</span>
                  <h3 className='product-title'>{c.name}</h3>
                  <p className='product-description'>{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='cta-section'>
            <h2>Interesse an einem Chassis?</h2>
            <p>Kontaktieren Sie uns für eine persönliche Beratung und ein individuelles Angebot.</p>
            <div className='cta-buttons'>
              <Link href='/kontakt' className='btn btn-md cta-btn-primary'>Beratung anfragen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
