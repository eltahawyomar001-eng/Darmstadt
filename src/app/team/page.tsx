import Link from 'next/link';

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
      {/* Hero Section - Blue with breadcrumbs */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <Link href="/">NB Motorsport</Link>
            <span>/</span>
            <span>Rennteam</span>
          </div>
          <h1 className="page-hero-title">Unser Rennteam</h1>
          <p className="page-hero-subtitle">
            Wir sind mit unserem Kart-Rennteam im deutschen und internationalen Kartsport vertreten.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="page-hero-image">
        <div className="container">
          <div className="page-hero-image-wrapper">
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* About Section - Two columns */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid">
            <div className="two-col-image">
              <ImagePlaceholder />
            </div>
            <div className="two-col-content">
              <span className="section-label">Professionell</span>
              <h2 className="section-title">Wer wir sind und was wir tun</h2>
              <p className="section-text">
                NB Motorsport ist ein engagiertes und professionelles Kart-Rennteam mit Einsatz auf internationalem Top-Niveau. Wir begleiten Nachwuchsfahrer und ambitionierte Kartfahrer durch alle Rennserien und führen sie an die Spitze.
              </p>
              <div className="section-buttons">
                <Link href="/erfahren" className="btn-outline-dark">Erfahren</Link>
                <Link href="#" className="link-with-arrows">
                  <ArrowRight />
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - 3 cards */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Charakter</span>
            <h2 className="section-title">Das macht uns als Team besonders</h2>
            <p className="section-text">
              Wir sind klein, aber entschlossen. Jeder Fahrer erhält unsere volle Aufmerksamkeit und Unterstützung auf dem Weg nach oben.
            </p>
          </div>
          <div className="three-col-grid">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className="value-card-icon">{value.icon}</div>
                <h3 className="value-card-title">{value.title}</h3>
                <p className="value-card-text">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="section-buttons-center">
            <Link href="/mehr" className="btn-outline-dark">Mehr erfahren</Link>
            <Link href="#" className="link-with-arrows">
              <ArrowRight />
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <div className="gallery-header">
            <div>
              <h2 className="section-title">Auf der Strecke</h2>
              <p className="section-text">Momente, die zeigen, wer wir sind.</p>
            </div>
            <div className="gallery-nav">
              <button className="gallery-nav-btn">
                <ArrowLeft />
              </button>
              <button className="gallery-nav-btn">
                <ArrowRight />
              </button>
            </div>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <ImagePlaceholder />
            </div>
            <div className="gallery-item">
              <ImagePlaceholder />
            </div>
            <div className="gallery-item">
              <ImagePlaceholder />
            </div>
          </div>
          <div className="gallery-dots">
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

      {/* CTA Section - Dark with background image */}
      <section className="cta-dark">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Werde Teil unseres Teams</h2>
            <p className="cta-text">
              Interessiert an einem Platz im Team oder Trackside Support? Kontaktiere uns jetzt.
            </p>
            <div className="cta-buttons">
              <Link href="/rennbetreuung" className="btn-primary">Rennbetreuung anfragen</Link>
              <Link href="/kontakt" className="btn-outline-white">Kontakt</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
