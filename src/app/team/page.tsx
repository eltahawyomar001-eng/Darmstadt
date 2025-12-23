import Link from 'next/link';

const ImagePlaceholder = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="48" height="40" rx="4"/>
    <circle cx="22" cy="26" r="4"/>
    <path d="M8 44L20 32L32 44L44 28L56 44"/>
  </svg>
);

const HandshakeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 24L8 16L12 12L20 20M32 24L40 16L36 12L28 20M16 24L24 32L32 24M24 32L20 36L16 40M24 32L28 36L32 40" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 8C14 8 18 12 18 16C18 20 14 20 14 24C14 28 20 34 24 34C28 34 28 30 32 30C36 30 40 34 40 34M12 36L16 40M32 8L36 12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 8H36M12 8V16C12 20 16 24 24 24C32 24 36 20 36 16V8M12 8H8V16C8 18 10 20 12 20M36 8H40V16C40 18 38 20 36 20M24 24V32M20 32H28M18 40H30" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero-image">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Unser Rennteam</h1>
            <p className="page-hero-subtitle">
              Wir sind mit unserem Kart-Rennteam im deutschen und internationalen Kartsport vertreten.
            </p>
          </div>
        </div>
      </section>

      {/* Wer wir sind Section */}
      <section className="section-white">
        <div className="container">
          <div className="two-col-layout">
            <div className="image-side">
              <div className="image-placeholder">
                <ImagePlaceholder />
              </div>
            </div>
            <div className="content-side">
              <span className="section-label">Professional</span>
              <h2 className="section-heading">Wer wir sind und was wir tun</h2>
              <p className="section-text">
                NB Motorsport ist ein engagiertes und professionelles Kart-Rennteam mit Einsatz auf nationalem und internationalem Top-Niveau. Wir begleiten Nachwuchsfahrer und ambitionierte Kartfahrer durch alle Rennserien und führen sie an die Spitze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Das macht uns als Team besonders */}
      <section className="section-light-blue">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Charakter</span>
            <h2 className="section-heading">Das macht uns als Team besonders</h2>
            <p className="section-text">
              Wir sind klein, aber entschlossen. Jeder Fahrer erhält unsere volle Aufmerksamkeit und Unterstützung auf dem Weg nach oben.
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <HandshakeIcon />
              </div>
              <h3 className="value-title">Fairness und Integrität</h3>
              <p className="value-text">
                Wir fahren sauber und erweisen das gleiche von unseren Fahrern.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <PhoneIcon />
              </div>
              <h3 className="value-title">Kundenorientiert und erreichbar</h3>
              <p className="value-text">
                Deine Ziele sind unsere Ziele - wir arbeiten eng mit dir zusammen.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <TrophyIcon />
              </div>
              <h3 className="value-title">Hunger nach Erfolg</h3>
              <p className="value-text">
                Wir bringen deine Performance nach vorne, mit Leidenschaft und Präzision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Auf der Strecke Section */}
      <section className="section-white">
        <div className="container">
          <div className="carousel-section">
            <div className="carousel-content">
              <h2 className="section-heading">Auf der Strecke</h2>
              <p className="section-text">Momente, die zählen, von wer wir sind</p>
            </div>
            <div className="carousel-wrapper">
              <div className="carousel-images">
                <div className="carousel-image">
                  <div className="image-placeholder">
                    <ImagePlaceholder />
                  </div>
                </div>
                <div className="carousel-image">
                  <div className="image-placeholder">
                    <ImagePlaceholder />
                  </div>
                </div>
                <div className="carousel-image">
                  <div className="image-placeholder">
                    <ImagePlaceholder />
                  </div>
                </div>
              </div>
              <div className="carousel-controls">
                <button className="carousel-btn" aria-label="Previous">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="carousel-btn" aria-label="Next">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Werde Teil unseres Teams */}
      <section className="section-cta-image">
        <div className="container">
          <div className="cta-content-center">
            <h2 className="section-heading text-white">Werde Teil unseres Teams</h2>
            <p className="section-text text-white">
              Interessiert an einem Platz im Team oder Trackside Support? Kontaktiere uns jetzt.
            </p>
            <Link href="/kontakt" className="btn-white">
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
