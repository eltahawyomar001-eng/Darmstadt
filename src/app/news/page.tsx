'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarIcon, TrophyIcon, ChassisIcon } from '@/components/icons/Icons';

const news = [
  { slug: 'neue-saison-2024', title: 'Neue Saison 2024', date: '15. Januar 2024', excerpt: 'Die Kartsaison 2024 steht vor der Tür und wir freuen uns auf spannende Rennen und neue Herausforderungen für unser Team.', icon: CalendarIcon },
  { slug: 'meisterschaft-gewonnen', title: 'Meisterschaft gewonnen', date: '10. Dezember 2023', excerpt: 'Unser Fahrer Max Weber hat die regionale Meisterschaft gewonnen. Ein großer Erfolg für das gesamte MR Motorsport Team.', icon: TrophyIcon },
  { slug: 'neues-chassis-modell', title: 'Neues Chassis-Modell LK-05', date: '1. November 2023', excerpt: 'Wir stellen das neue LenzoKart LK-05 vor – unser innovativstes Chassis mit verbesserter Aerodynamik und Handling.', icon: ChassisIcon },
];

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="about-label">Aktuelles</p>
            <h1>Neuigkeiten & Updates</h1>
            <p>Bleiben Sie informiert über die neuesten Entwicklungen bei MR Motorsport.</p>
          </motion.div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="news-grid">
            {news.map((item, i) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/news/${item.slug}`} className="news-card">
                  <div className="news-image">
                    <item.icon />
                  </div>
                  <div className="news-content">
                    <span className="news-date">{item.date}</span>
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-excerpt">{item.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
