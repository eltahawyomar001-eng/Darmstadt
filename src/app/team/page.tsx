'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { UserIcon, WrenchIcon, HeadsetIcon, FlagIcon } from '@/components/icons/Icons';

const team = [
  { name: 'Michael Richter', role: 'Geschäftsführer', bio: 'Über 25 Jahre Erfahrung im Kartsport. Gründer und Inhaber von MR Motorsport.', icon: UserIcon },
  { name: 'Thomas Weber', role: 'Werkstattleiter', bio: 'Spezialist für Kart-Motoren und technische Optimierungen mit langjähriger Erfahrung.', icon: WrenchIcon },
  { name: 'Sarah Klein', role: 'Kundenbetreuung', bio: 'Ihre erste Ansprechpartnerin für alle Fragen rund um Produkte und Service.', icon: HeadsetIcon },
  { name: 'Markus Hoffmann', role: 'Rennteam Manager', bio: 'Koordiniert unser Rennteam und betreut unsere Fahrer bei allen Wettkämpfen.', icon: FlagIcon },
];

export default function TeamPage() {
  return (
    <>
      <section className='page-hero'>
        <div className='container'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className='about-label'>Unser Team</p>
            <h1>Die Menschen hinter MR Motorsport</h1>
            <p>Lernen Sie unser erfahrenes Team kennen, das mit Leidenschaft und Expertise für Sie da ist.</p>
          </motion.div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='team-grid'>
            {team.map((m, i) => (
              <motion.div 
                key={m.name} 
                className='team-card'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className='team-avatar'>
                  <m.icon />
                </div>
                <h3 className='team-name'>{m.name}</h3>
                <p className='team-role'>{m.role}</p>
                <p className='team-bio'>{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <div className='cta-section'>
            <h2>Kontaktieren Sie uns</h2>
            <p>Haben Sie Fragen? Unser Team freut sich darauf, Ihnen zu helfen.</p>
            <div className='cta-buttons'>
              <Link href='/kontakt' className='btn btn-md cta-btn-primary'>Kontakt aufnehmen</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
