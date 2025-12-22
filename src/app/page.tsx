import Link from 'next/link';
import Image from 'next/image';

// Icons matching Figma exactly
const ChassisIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 8L4 16H28L24 8H8Z" stroke="#0C0800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 16V24H28V16" stroke="#0C0800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8" cy="24" r="2" stroke="#0C0800" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="2" stroke="#0C0800" strokeWidth="1.5" />
  </svg>
);

const TuningIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4V8M16 24V28M8 16H4M28 16H24" stroke="#0C0800" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="16" cy="16" r="6" stroke="#0C0800" strokeWidth="1.5" />
  </svg>
);

const RentalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="24" height="16" rx="2" stroke="#0C0800" strokeWidth="1.5" />
    <path d="M4 14H28" stroke="#0C0800" strokeWidth="1.5" />
    <circle cx="10" cy="20" r="2" fill="#0C0800" />
  </svg>
);

const SupportIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="#0C0800" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M16 14V18M16 22V22.01" stroke="#0C0800" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ImagePlaceholder = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke="#999" strokeWidth="1.5" />
    <circle cx="16" cy="20" r="3" stroke="#999" strokeWidth="1.5" />
    <path d="M6 32L16 22L24 30L32 20L42 32" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function HomePage() {
  const features = [
    {
      icon: <ChassisIcon />,
      title: 'Lenzokart Chassis',
      description: 'Hochwertige Rennfahrzeuge für alle Klassen und Leistungsstufen',
    },
    {
      icon: <TuningIcon />,
      title: 'Motor-Tuning',
      description: 'Optimierte Leistung für Renneinsätze',
    },
    {
      icon: <RentalIcon />,
      title: 'Vermietung',
      description: 'Flexible Lösungen für Fahrer ohne eigenes Equipment',
    },
    {
      icon: <SupportIcon />,
      title: 'Rennbetreuung',
      description: 'Professionelle Unterstützung an der Strecke',
    },
  ];

  const news = [
    {
      category: 'Rennsport',
      date: '15. Januar 2024',
      title: 'NB Motorsport beim Winterpokal erfolgreich',
      excerpt: 'Starke Leistungen unserer Fahrer in der K2-Klasse',
    },
    {
      category: 'Technik',
      date: '8. Januar 2024',
      title: 'Neue Lenzokart Chassis eingetroffen',
      excerpt: 'Frische Bestände für die kommende Saison verfügbar',
    },
    {
      category: 'Service',
      date: '2. Januar 2024',
      title: 'Motoren-Tuning für X30 optimiert',
      excerpt: 'Verbesserte Performance und Zuverlässigkeit erreicht',
    },
  ];

  const events = [
    {
      weekday: 'Sa',
      day: '24',
      month: 'Feb 2024',
      title: 'Süddeutsche Meisterschaft',
      badge: 'KZ',
      location: 'Ampfing',
      sublocation: 'Süddeutsche Meisterschaft, Ampfing',
    },
    {
      weekday: 'Sa',
      day: '09',
      month: 'Mär 2024',
      title: 'Deutsche Meisterschaft',
      badge: '',
      location: 'Wackersdorf',
      sublocation: 'Deutsche Meisterschaft, Wackersdorf',
    },
    {
      weekday: 'So',
      day: '03',
      month: 'Apr 2024',
      title: 'X30 Junior Europameisterschaft',
      badge: '',
      location: 'Genk',
      sublocation: 'X30 Junior Europameisterschaft, Genk',
    },
  ];

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              NB Motorsport -<br />
              Lenzokart Importeur<br />
              Deutschland
            </h1>
            <p className="hero-text">
              Wir sind der offizielle und einzige Lenzokart Importeur in Deutschland. Mit unseren Rennteam setzen wir auf Leistung, Technik und Professionalität auf jeder Strecke.
            </p>
            <div className="hero-buttons">
              <Link href="/chassis" className="btn-white">Chassis</Link>
              <Link href="/kontakt" className="btn-outline-white">Kontakt</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="features">
        <div className="container">
          <div className="features-layout">
            <div className="features-left">
              <div className="features-grid">
                {features.map((feature) => (
                  <div key={feature.title} className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-text">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="features-links">
                <Link href="/chassis" className="link-arrow">
                  Mehr erfahren <ArrowRight />
                </Link>
              </div>
            </div>
            <div className="features-image">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop"
                alt="Kart Racing"
                width={600}
                height={500}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NEWS SECTION ==================== */}
      <section className="news">
        <div className="container">
          <div className="news-header">
            <span className="section-label">News</span>
            <h2 className="section-title">Aus dem Rennbetrieb</h2>
            <p className="section-subtitle">Aktuelle Berichte und Meldungen</p>
          </div>
          <div className="news-grid">
            {news.map((item, index) => (
              <article key={item.title} className="news-card">
                <div className="news-image">
                  <Image
                    src={`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&q=${80 - index * 10}`}
                    alt={item.title}
                    width={400}
                    height={250}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-category">{item.category}</span>
                    <span className="news-date">{item.date}</span>
                  </div>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <Link href="#" className="link-arrow">
                    Mehr <ArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="news-footer">
            <Link href="/news" className="btn-outline-dark">Alle News</Link>
          </div>
        </div>
      </section>

      {/* ==================== EVENTS SECTION ==================== */}
      <section className="events">
        <div className="container">
          <div className="events-header">
            <span className="section-label">Rennkalender</span>
            <h2 className="section-title">Events</h2>
            <p className="section-subtitle">Unsere kommenden Rennveranstaltungen und Termine</p>
          </div>
          <div className="events-list">
            {/* Event calendar will be populated later */}
            <div className="events-empty">
              <p>Veranstaltungen werden bald bekannt gegeben.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Bereit für die Rennstrecke?</h2>
            <p className="cta-text">Kontaktieren Sie uns für Chassis, Motoren oder Rennbetreuung</p>
            <Link href="/kontakt" className="btn-yellow">Kontakt</Link>
          </div>
        </div>
      </section>
    </>
  );
}
