import Link from 'next/link';

// Icons
const ImagePlaceholder = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke="#999" strokeWidth="1.5"/>
    <circle cx="16" cy="20" r="3" stroke="#999" strokeWidth="1.5"/>
    <path d="M6 32L16 22L24 30L32 20L42 32" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FairnessIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L4 8V16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16V8L16 4Z" stroke="#0C0800" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M12 16L15 19L20 13" stroke="#0C0800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CustomerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12C8 8.68629 10.6863 6 14 6H18C21.3137 6 24 8.68629 24 12V14C24 17.3137 21.3137 20 18 20H14C10.6863 20 8 17.3137 8 14V12Z" stroke="#0C0800" strokeWidth="1.5"/>
    <path d="M12 26H20" stroke="#0C0800" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 20V26" stroke="#0C0800" strokeWidth="1.5"/>
  </svg>
);

const HungerIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 16L12 10L18 16L26 8" stroke="#0C0800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 8H26V14" stroke="#0C0800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TeamPage() {
  const values = [
    {
      icon: <FairnessIcon />,
      title: 'Fairness und Integrität',
      description: 'Wir fahren sauber und erwarten das gleiche von unseren Fahrern.',
    },
    {
      icon: <CustomerIcon />,
      title: 'Kundenorientiert und erreichbar',
      description: 'Deine Ziele sind unsere Ziele – wir arbeiten eng mit dir zusammen.',
    },
    {
      icon: <HungerIcon />,
      title: 'Hunger nach Erfolg',
      description: 'Wir bringen deine Performance nach vorne, mit Leidenschaft und Präzision.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <div className="team-hero-content">
            <h1 className="team-hero-title">Unser Rennteam</h1>
            <p className="team-hero-subtitle">
              Wir sind mit unserem Kart-Rennteam im deutschen und internationalen Kartsport vertreten.
            </p>
            <div className="team-hero-placeholder">
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="team-about">
        <div className="container">
          <div className="team-about-grid">
            <div className="team-about-image">
              <ImagePlaceholder />
            </div>
            <div className="team-about-content">
              <span className="team-label">Professionell</span>
              <h2 className="team-about-title">Wer wir sind und was wir tun</h2>
              <p className="team-about-text">
                NB Motorsport ist ein engagiertes und professionelles Kart-Rennteam mit Einsatz auf internationalem Top-Niveau. Wir begleiten Nachwuchsfahrer und ambitionierte Kartfahrer durch alle Rennserien und führen sie an die Spitze.
              </p>
              <div className="team-about-buttons">
                <Link href="/erfahren" className="btn-outline-dark">Erfahren</Link>
                <Link href="#" className="link-arrow">
                  <ArrowRight /> <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="team-values">
        <div className="container">
          <div className="team-values-header">
            <span className="team-label">Charakter</span>
            <h2 className="team-values-title">Das macht uns als Team besonders</h2>
            <p className="team-values-subtitle">
              Wir sind klein, aber entschlossen. Jeder Fahrer erhält unsere volle Aufmerksamkeit und Unterstützung auf dem Weg nach oben.
            </p>
          </div>
          <div className="team-values-grid">
            {values.map((value) => (
              <div key={value.title} className="team-value-card">
                <div className="team-value-icon">{value.icon}</div>
                <h3 className="team-value-title">{value.title}</h3>
                <p className="team-value-text">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="team-values-buttons">
            <Link href="/mehr" className="btn-outline-dark">Mehr erfahren</Link>
            <Link href="#" className="link-arrow">
              <ArrowRight /> <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="team-gallery">
        <div className="container">
          <div className="team-gallery-header">
            <div className="team-gallery-text">
              <h2 className="team-gallery-title">Auf der Strecke</h2>
              <p className="team-gallery-subtitle">Momente, die zeigen, wer wir sind.</p>
            </div>
          </div>
          <div className="team-gallery-grid">
            <div className="team-gallery-item">
              <ImagePlaceholder />
            </div>
            <div className="team-gallery-item">
              <ImagePlaceholder />
            </div>
            <div className="team-gallery-item">
              <ImagePlaceholder />
            </div>
          </div>
          <div className="team-gallery-nav">
            <button className="gallery-nav-btn">
              <ArrowLeft />
            </button>
            <button className="gallery-nav-btn">
              <ArrowRight />
            </button>
          </div>
          <div className="team-gallery-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta">
        <div className="container">
          <div className="team-cta-content">
            <h2 className="team-cta-title">Werde Teil unseres Teams</h2>
            <p className="team-cta-text">
              Interessiert an einem Platz im Team oder Trackside Support? Kontaktiere uns jetzt.
            </p>
            <div className="team-cta-buttons">
              <Link href="/rennbetreuung" className="btn-primary">Rennbetreuung anfragen</Link>
              <Link href="/kontakt" className="btn-outline-white">Kontakt</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
