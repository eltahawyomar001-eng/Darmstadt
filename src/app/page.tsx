'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrophyIcon, WrenchIcon, StarIcon, UserIcon, ZapIcon, ShieldIcon, ChassisIcon, NewsIcon } from '@/components/icons/Icons';

export default function HomePage() {
  const features = [
    {
      Icon: TrophyIcon,
      title: 'Rennsporterfahrung',
      description: 'Jahrelange Erfahrung im professionellen Kartsport auf nationaler und internationaler Ebene.',
    },
    {
      Icon: WrenchIcon,
      title: 'Premium Service',
      description: 'Kompletter Service von der Beratung über den Verkauf bis hin zur Wartung und Reparatur.',
    },
    {
      Icon: StarIcon,
      title: 'Qualitätsprodukte',
      description: 'Nur die besten Produkte von Lenzokart - dem führenden Hersteller für Kart-Chassis.',
    },
    {
      Icon: UserIcon,
      title: 'Persönliche Betreuung',
      description: 'Individuelle Beratung und Betreuung für Einsteiger und Profis gleichermaßen.',
    },
  ];

  const newsArticles = [
    {
      title: 'Neues Chassis-Modell 2024 verfügbar',
      excerpt: 'Das brandneue Lenzokart LZ-24 ist ab sofort bei uns erhältlich. Entdecken Sie die neueste Generation.',
      date: '15. Dezember 2024',
      category: 'Produkte',
      slug: 'neues-chassis-2024',
      Icon: ChassisIcon,
    },
    {
      title: 'Erfolgreiches Rennwochenende in Kerpen',
      excerpt: 'Unser Team konnte beim Saisonfinale in Kerpen mehrere Podiumsplätze erzielen.',
      date: '10. Dezember 2024',
      category: 'Rennsport',
      slug: 'rennwochenende-kerpen',
      Icon: TrophyIcon,
    },
    {
      title: 'Winterservice jetzt buchen',
      excerpt: 'Bereiten Sie Ihr Kart optimal auf die neue Saison vor. Jetzt Servicetermin vereinbaren.',
      date: '1. Dezember 2024',
      category: 'Service',
      slug: 'winterservice-2024',
      Icon: WrenchIcon,
    },
  ];

  const events = [
    { day: '15', month: 'Jan', title: 'Saisonauftakt Training', location: 'Kartbahn Darmstadt' },
    { day: '22', month: 'Jan', title: 'Rookie Cup Runde 1', location: 'Kerpen' },
    { day: '5', month: 'Feb', title: 'Technik-Workshop', location: 'MR Motorsport Werkstatt' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="hero-badge">Offizieller Lenzokart Importeur</div>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                MR Motorsport – <span>Lenzokart Importeur</span> Deutschland
              </motion.h1>

              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ihr Partner für professionellen Kartsport. Wir bieten erstklassige 
                Lenzokart Chassis, Motoren, Zubehör und umfassenden Service aus einer Hand.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/lenzo-chassis" className="btn btn-primary btn-lg">
                  Chassis entdecken
                </Link>
                <Link href="/team" className="btn btn-secondary btn-lg">
                  Über uns
                </Link>
              </motion.div>

              <motion.div
                className="hero-stats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div>
                  <div className="hero-stat-value">20+</div>
                  <div className="hero-stat-label">Jahre Erfahrung</div>
                </div>
                <div>
                  <div className="hero-stat-value">500+</div>
                  <div className="hero-stat-label">Zufriedene Kunden</div>
                </div>
                <div>
                  <div className="hero-stat-value">50+</div>
                  <div className="hero-stat-label">Rennsiege</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="hero-card">
                <div className="hero-card-header">
                  <div className="hero-card-icon">
                    <ZapIcon />
                  </div>
                  <div className="hero-card-header-text">
                    <h3>Premium Equipment</h3>
                    <p>Lenzokart Deutschland</p>
                  </div>
                </div>
                <div className="hero-card-stats">
                  <div className="hero-card-stat">
                    <div className="hero-card-stat-value">20+</div>
                    <div className="hero-card-stat-label">Jahre</div>
                  </div>
                  <div className="hero-card-stat">
                    <div className="hero-card-stat-value">500+</div>
                    <div className="hero-card-stat-label">Kunden</div>
                  </div>
                  <div className="hero-card-stat">
                    <div className="hero-card-stat-value">50+</div>
                    <div className="hero-card-stat-label">Siege</div>
                  </div>
                  <div className="hero-card-stat">
                    <div className="hero-card-stat-value">100%</div>
                    <div className="hero-card-stat-label">Service</div>
                  </div>
                </div>
                <div className="hero-card-badge">
                  <ShieldIcon /> Autorisierter Händler
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Was uns auszeichnet</h2>
            <p>Profitieren Sie von unserer Expertise und unserem umfassenden Serviceangebot im Kartsport.</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon"><feature.Icon /></div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-visual"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="about-logo">MR</div>
              <p style={{ color: 'var(--text-muted)' }}>Seit über 20 Jahren</p>
            </motion.div>

            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="about-label">Über uns</p>
              <h2>Wer wir sind und was wir tun</h2>
              <p>
                MR Motorsport ist der offizielle Lenzokart Importeur für Deutschland. Mit 
                über 20 Jahren Erfahrung im Kartsport bieten wir unseren Kunden erstklassige 
                Produkte und einen umfassenden Service.
              </p>
              <p>
                Unser Team besteht aus erfahrenen Rennfahrern und Technikern, die ihre 
                Leidenschaft für den Kartsport mit Ihnen teilen möchten.
              </p>
              <div className="about-buttons">
                <Link href="/team" className="btn btn-primary btn-md">Mehr über uns</Link>
                <Link href="/kontakt" className="btn btn-secondary btn-md">Kontakt aufnehmen</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section">
        <div className="container">
          <div className="news-header">
            <div>
              <h2>Aus dem Newsbereich</h2>
              <p style={{ color: 'var(--text-muted)' }}>Aktuelle Neuigkeiten rund um MR Motorsport und den Kartsport.</p>
            </div>
            <Link href="/news" className="btn btn-secondary btn-sm">
              Alle News ansehen
            </Link>
          </div>

          <div className="news-grid">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/news/${article.slug}`}>
                  <div className="news-card">
                    <div className="news-card-image">
                      <article.Icon />
                    </div>
                    <div className="news-card-content">
                      <div className="news-card-meta">
                        <span className="news-card-category">{article.category}</span>
                        <span className="news-card-date">{article.date}</span>
                      </div>
                      <h3 className="news-card-title">{article.title}</h3>
                      <p className="news-card-excerpt">{article.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section">
        <div className="container">
          <div className="events-grid">
            <div className="events-intro">
              <p className="about-label">Events</p>
              <h2>Kommende Veranstaltungen</h2>
              <p style={{ color: 'var(--text-muted)' }}>Treffen Sie uns bei diesen Events und erleben Sie Kartsport hautnah. Wir freuen uns auf Sie!</p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link href="/kontakt" className="btn btn-primary btn-md">Event anfragen</Link>
              </div>
            </div>

            <div>
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  className="event-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="event-date">
                    <div className="event-date-day">{event.day}</div>
                    <div className="event-date-month">{event.month}</div>
                  </div>
                  <div className="event-info">
                    <div className="event-title">{event.title}</div>
                    <div className="event-location">{event.location}</div>
                  </div>
                  <div className="event-arrow">›</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="cta-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Bereit für die nächste Saison?</h2>
            <p>
              Kontaktieren Sie uns noch heute für eine persönliche Beratung. 
              Wir finden gemeinsam das perfekte Setup für Ihre Ansprüche.
            </p>
            <div className="cta-buttons">
              <Link href="/kontakt" className="btn btn-md cta-btn-primary">
                Jetzt Kontakt aufnehmen
              </Link>
              <Link href="/lenzo-chassis" className="btn btn-md cta-btn-secondary">
                Produkte ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
