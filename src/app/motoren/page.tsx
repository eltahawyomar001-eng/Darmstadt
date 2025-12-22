import Link from 'next/link';

const ImagePlaceholder = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="48" height="40" rx="4"/>
    <circle cx="22" cy="26" r="4"/>
    <path d="M8 44L20 32L32 44L44 28L56 44"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 9L12 16L5 9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WrenchIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M38 10L28 20M20 28L10 38M38 10C38 10 42 14 38 18C34 22 30 18 30 18M10 38C10 38 6 34 10 30C14 26 18 30 18 30" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GaugeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 32C8 20 16 12 24 12C32 12 40 20 40 32M24 24L30 30M12 32H16M32 32H36M20 20L22 22M26 20L28 22" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CogIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="6"/>
    <path d="M24 8V12M24 36V40M40 24H36M12 24H8M35.3 12.7L32.5 15.5M15.5 32.5L12.7 35.3M35.3 35.3L32.5 32.5M15.5 15.5L12.7 12.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function MotorenPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Motoren</h1>
            <p className="page-hero-subtitle">
              Hochleistungsmotoren von Iame – zuverlässig, leistungsstark und auf Sieg programmiert. Wir bieten dir Verkauf, Wartung und Performance-Tuning aus einer Hand.
            </p>
          </div>
        </div>
      </section>

      {/* Unsere Motoren Carousel */}
      <section className="section-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Iame</span>
            <h2 className="section-heading">Unsere Motoren im Überblick</h2>
            <p className="section-text">
              Jeder Motor wird von uns geprüft, eingestellt und rennfertig ausgeliefert.
            </p>
          </div>
          <div className="engine-carousel">
            <div className="engine-cards">
              <div className="engine-card">
                <div className="engine-image">
                  <div className="image-placeholder">
                    <ImagePlaceholder />
                  </div>
                </div>
                <div className="engine-content">
                  <h3 className="engine-name">Iame X30</h3>
                  <p className="engine-desc">
                    Der meistgefahrene Motor im deutschen und internationalen Kartsport. Zuverlässig, kraftvoll und wartungsarm.
                  </p>
                  <ul className="engine-specs">
                    <li>Leistung: 30 PS</li>
                    <li>Hubraum: 125ccm</li>
                    <li>Gewicht: 11kg</li>
                  </ul>
                  <p className="engine-price">ab 3.490€</p>
                </div>
              </div>
              <div className="engine-card">
                <div className="engine-image">
                  <div className="image-placeholder">
                    <ImagePlaceholder />
                  </div>
                </div>
                <div className="engine-content">
                  <h3 className="engine-name">Iame KZ2</h3>
                  <p className="engine-desc">
                    Hochleistungsmotor mit Schaltgetriebe für Profis und ambitionierte Fahrer in der Schaltkart-Klasse.
                  </p>
                  <ul className="engine-specs">
                    <li>Leistung: 48 PS</li>
                    <li>Hubraum: 125ccm</li>
                    <li>Gewicht: 14kg</li>
                  </ul>
                  <p className="engine-price">ab 5.990€</p>
                </div>
              </div>
              <div className="engine-card">
                <div className="engine-image">
                  <div className="image-placeholder">
                    <ImagePlaceholder />
                  </div>
                </div>
                <div className="engine-content">
                  <h3 className="engine-name">Iame Leopard</h3>
                  <p className="engine-desc">
                    Einsteigermotor für Junioren – ideal für den Start in den Rennsport mit starker Performance.
                  </p>
                  <ul className="engine-specs">
                    <li>Leistung: 23 PS</li>
                    <li>Hubraum: 125ccm</li>
                    <li>Gewicht: 10kg</li>
                  </ul>
                  <p className="engine-price">ab 2.790€</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-light-blue">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Rundum-Service</span>
            <h2 className="section-heading">Was wir für dich tun</h2>
            <p className="section-text">
              Von der Auslieferung bis zum Rennwochenende – wir kümmern uns um deinen Motor.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <WrenchIcon />
              </div>
              <h3 className="service-title">Wartung & Service</h3>
              <p className="service-text">
                Regelmäßige Inspektionen, Ölwechsel und technische Checks halten deinen Motor in Topform.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <GaugeIcon />
              </div>
              <h3 className="service-title">Performance-Tuning</h3>
              <p className="service-text">
                Wir holen das Maximum aus deinem Motor heraus – legal, präzise und messbar.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <CogIcon />
              </div>
              <h3 className="service-title">Motorenbau nach Maß</h3>
              <p className="service-text">
                Individuelle Anpassungen für spezielle Anforderungen und höchste Ansprüche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drei Schritte Section */}
      <section className="section-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Einfach starten</span>
            <h2 className="section-heading">In drei Schritten zu deinem Motor</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">Beratung</h3>
              <p className="step-text">
                Wir analysieren deine Anforderungen und empfehlen dir den passenden Motor.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Abstimmung</h3>
              <p className="step-text">
                Dein Motor wird individuell auf dein Chassis und deinen Fahrstil eingestellt.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Rennstart</h3>
              <p className="step-text">
                Du erhältst einen rennfertigen Motor und unser Team steht dir zur Seite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-light-blue">
        <div className="container">
          <div className="faq-container">
            <div className="section-header-center">
              <span className="section-label">Häufige Fragen</span>
              <h2 className="section-heading">FAQ zu Motoren</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-question">
                  Welcher Motor ist für Anfänger geeignet?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Für Einsteiger empfehlen wir den Iame Leopard oder den X30. Beide sind zuverlässig, wartungsarm und bieten ein ausgewogenes Leistungsprofil für den Einstieg in den Rennsport.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Wie oft muss ein Motor gewartet werden?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Das hängt von der Nutzung ab. Bei regelmäßigen Renneinsätzen empfehlen wir alle 10-15 Betriebsstunden eine Inspektion. Wir erstellen dir gerne einen individuellen Wartungsplan.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Bietet ihr auch Tuning an?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Ja, wir bieten legales Performance-Tuning innerhalb der Reglement-Vorgaben an. Dadurch optimierst du das Leistungsprofil und die Langlebigkeit deines Motors.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Was ist im Kaufpreis enthalten?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Der Preis umfasst den Motor, eine Grundabstimmung und die Erstinspektion. Zusätzliche Leistungen wie individuelles Setup oder Trackside-Support können optional gebucht werden.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Motor anfragen CTA */}
      <section className="section-dark">
        <div className="container">
          <div className="cta-content-center">
            <h2 className="section-heading text-white">Dein Motor wartet auf dich</h2>
            <p className="section-text text-white">
              Bereit für den nächsten Schritt? Kontaktiere uns und wir finden gemeinsam den perfekten Motor für deine Ziele.
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
