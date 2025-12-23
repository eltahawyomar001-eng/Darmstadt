import Link from 'next/link';

const ImagePlaceholder = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="48" height="40" rx="4"/>
    <circle cx="22" cy="26" r="4"/>
    <path d="M8 44L20 32L32 44L44 28L56 44"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 9L12 16L5 9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WrenchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18.36 6.64a9 9 0 0 1 0 12.73l-5.66 5.66a4 4 0 0 1-5.66-5.66l5.66-5.66a9 9 0 0 1 12.73 0" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 13L25 7M22 4L28 10" strokeLinecap="round"/>
  </svg>
);

const GaugeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"/>
    <path d="M16 8v4M16 16l4 4"/>
  </svg>
);

const CogIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="4"/>
    <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83"/>
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

      {/* Unsere Motoren im Überblick - Carousel Section */}
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
              {/* Iame X30 */}
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

              {/* Iame KZ2 */}
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

              {/* Iame Leopard */}
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
            {/* Carousel Controls */}
            <div className="carousel-controls">
              <button className="carousel-btn" aria-label="Vorherige">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="carousel-btn" aria-label="Nächste">
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

      {/* Was wir für dich tun - Services Section */}
      <section className="section-light-blue">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Rundum-Service</span>
            <h2 className="section-heading">Was wir für dich tun</h2>
            <p className="section-text">
              Von der Auslieferung bis zum Rennwochenende – wir kümmern uns um deinen Motor.
            </p>
          </div>
          <div className="services-grid-three">
            <div className="service-item">
              <div className="service-icon">
                <WrenchIcon />
              </div>
              <h3 className="service-title">Wartung & Service</h3>
              <p className="service-desc">
                Regelmäßige Inspektionen, Ölwechsel und technische Checks halten deinen Motor in Topform.
              </p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <GaugeIcon />
              </div>
              <h3 className="service-title">Performance-Tuning</h3>
              <p className="service-desc">
                Wir holen das Maximum aus deinem Motor heraus – legal, präzise und messbar.
              </p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <CogIcon />
              </div>
              <h3 className="service-title">Motorenbau nach Maß</h3>
              <p className="service-desc">
                Individuelle Anpassungen für spezielle Anforderungen und höchste Ansprüche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In drei Schritten zu deinem Motor - Steps Section */}
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
              <p className="step-desc">
                Wir analysieren deine Anforderungen und empfehlen dir den passenden Motor.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">Abstimmung</h3>
              <p className="step-desc">
                Dein Motor wird individuell auf dein Chassis und deinen Fahrstil eingestellt.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">Rennstart</h3>
              <p className="step-desc">
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
                  Für Einsteiger empfehlen wir den Iame X30 oder den Iame Leopard. Beide Motoren sind zuverlässig, wartungsarm und bieten ein gutes Leistungsniveau für den Start in den Kartsport.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Wie oft muss ein Motor gewartet werden?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Eine Grundwartung empfehlen wir nach jedem Rennwochenende. Eine vollständige Revision sollte je nach Einsatzhäufigkeit alle 15-25 Betriebsstunden durchgeführt werden.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Bietet ihr auch Tuning an?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Ja, wir bieten professionelles Performance-Tuning an. Dabei bleiben wir immer innerhalb der Reglement-Grenzen und optimieren den Motor für maximale, legale Leistung.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Was ist im Kaufpreis enthalten?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Im Kaufpreis ist der rennfertig aufgebaute Motor inklusive erster Grundabstimmung enthalten. Zusätzliche Leistungen wie Tuning oder spezielle Anpassungen können optional dazu gebucht werden.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
