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

const EngineIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="6" y="10" width="20" height="12" rx="2"/>
    <path d="M10 10V6M22 10V6M10 22v4M22 22v4"/>
    <circle cx="16" cy="16" r="3"/>
  </svg>
);

const WrenchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M18.36 6.64a9 9 0 0 1 0 12.73l-5.66 5.66a4 4 0 0 1-5.66-5.66l5.66-5.66a9 9 0 0 1 12.73 0"/>
    <path d="M19 13L25 7M22 4L28 10"/>
  </svg>
);

const EuroIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="12"/>
    <path d="M20 11c-1.5-1.5-3.5-2-5.5-2-4 0-7 3-7 7s3 7 7 7c2 0 4-.5 5.5-2M8 14h10M8 18h10"/>
  </svg>
);

export default function MotorenServicePage() {
  return (
    <>
      {/* Hero Section - Blue Background */}
      <section className="page-hero-blue">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title text-white">Motoren und service</h1>
            <p className="page-hero-subtitle text-white-muted">
              Premium-Rennmotoren, Tuning, Vermietung und Service für maximale Performance.
            </p>
          </div>
        </div>
      </section>

      {/* Unsere Motoren - Gallery Section */}
      <section className="section-white">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Unsere Motoren</h2>
            <p className="section-text">
              Hochleistungsmotoren von führenden Herstellern für jeden Wettbewerb.
            </p>
          </div>
          <div className="motor-gallery">
            <div className="gallery-main">
              <div className="image-placeholder-gallery">
                <ImagePlaceholder />
              </div>
            </div>
            <div className="gallery-thumbs">
              <div className="gallery-thumb active">
                <div className="image-placeholder-thumb">
                  <ImagePlaceholder />
                </div>
              </div>
              <div className="gallery-thumb">
                <div className="image-placeholder-thumb">
                  <ImagePlaceholder />
                </div>
              </div>
              <div className="gallery-thumb">
                <div className="image-placeholder-thumb">
                  <ImagePlaceholder />
                </div>
              </div>
              <div className="gallery-thumb">
                <div className="image-placeholder-thumb">
                  <ImagePlaceholder />
                </div>
              </div>
              <div className="gallery-thumb">
                <div className="image-placeholder-thumb">
                  <ImagePlaceholder />
                </div>
              </div>
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
      </section>

      {/* Services - Three Features */}
      <section className="section-white">
        <div className="container">
          <div className="service-features-row">
            <div className="two-col-layout">
              <div className="image-side">
                <div className="image-placeholder-large">
                  <ImagePlaceholder />
                </div>
              </div>
              <div className="content-side">
                <div className="service-feature-list">
                  <div className="service-feature-item">
                    <div className="service-feature-icon">
                      <EngineIcon />
                    </div>
                    <div className="service-feature-content">
                      <h3>Motoren mieten</h3>
                      <p>Hochleistungsmotoren für Rennveranstaltungen deutschlandweit verfügbar.</p>
                    </div>
                  </div>
                  <div className="service-feature-item">
                    <div className="service-feature-icon">
                      <WrenchIcon />
                    </div>
                    <div className="service-feature-content">
                      <h3>Wartung und Revision</h3>
                      <p>Professionelle Instandhaltung und Überholung von Rennmotoren.</p>
                    </div>
                  </div>
                  <div className="service-feature-item">
                    <div className="service-feature-icon">
                      <EuroIcon />
                    </div>
                    <div className="service-feature-content">
                      <h3>Motorenverkauf</h3>
                      <p>Wir verkaufen hochwertige Motoren mit optimaler Leistung und technischer Feinabstimmung.</p>
                    </div>
                  </div>
                </div>
                <Link href="/kontakt" className="link-arrow">
                  Kontakt →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drei Schritte zur Miete - Process Section */}
      <section className="section-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Prozess</span>
            <h2 className="section-heading">Drei Schritte zur Miete</h2>
          </div>
          <div className="rental-steps-grid">
            <div className="rental-step-card">
              <span className="rental-step-label">Schritt eins</span>
              <h3 className="rental-step-title">Motor auswählen und reservieren</h3>
              <p className="rental-step-desc">
                Finden Sie den passenden Motor für Ihre Klasse.
              </p>
              <div className="rental-step-image">
                <div className="image-placeholder">
                  <ImagePlaceholder />
                </div>
              </div>
            </div>
            <div className="rental-step-card">
              <span className="rental-step-label">Schritt zwei</span>
              <h3 className="rental-step-title">Vereinbarung treffen und bezahlen</h3>
              <p className="rental-step-desc">
                Klären Sie alle Details und Mietbedingungen ab.
              </p>
              <div className="rental-step-image">
                <div className="image-placeholder">
                  <ImagePlaceholder />
                </div>
              </div>
            </div>
            <div className="rental-step-card">
              <span className="rental-step-label">Schritt drei</span>
              <h3 className="rental-step-title">Motor abholen und fahren</h3>
              <p className="rental-step-desc">
                Übernehmen Sie den Motor und starten Sie.
              </p>
              <div className="rental-step-image">
                <div className="image-placeholder">
                  <ImagePlaceholder />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-light-blue">
        <div className="container">
          <div className="faq-layout-split">
            <div className="faq-header-side">
              <h2 className="section-heading">FAQ</h2>
              <p className="section-text">
                Antworten auf Ihre Fragen zu Motoren, Miete und Service.
              </p>
              <Link href="/kontakt" className="btn-outline-dark">
                Kontakt
              </Link>
            </div>
            <div className="faq-list-side">
              <details className="faq-item" open>
                <summary className="faq-question">
                  Welche Motoren stehen zur Miete?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Wir vermieten IAME X30 Junior und Senior, IAME KZ, TM KZ sowie LKE Motoren in verschiedenen Klassen. Alle Motoren sind wartungsgepflegt und rennfähig. Verfügbarkeit hängt von Termin und Veranstaltung ab.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Wie lange dauert eine Motormiete?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Die Mietdauer richtet sich nach Ihrer Veranstaltung. Wir bieten flexible Lösungen von einzelnen Renntagen bis zu mehrtägigen Events. Sprechen Sie uns an für Ihre spezifischen Anforderungen.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Sind Wartung und Revision enthalten?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Ja, alle Motoren werden vor der Miete vollständig überprüft. Nach Rückgabe führen wir notwendige Wartungsarbeiten durch. Verschleißteile sind bereits im Mietpreis enthalten.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Wie buche ich einen Motor?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Kontaktieren Sie uns direkt per Telefon oder Formular. Wir besprechen Ihre Wünsche, prüfen Verfügbarkeit und erstellen ein Angebot. Die Reservierung erfolgt nach Bestätigung.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-white">
        <div className="container">
          <div className="cta-content-center">
            <h2 className="section-heading">Motor anfragen oder Service buchen</h2>
            <p className="section-text">
              Kontaktieren Sie uns für Miete, Tuning oder Wartung Ihrer Rennmotoren.
            </p>
            <div className="cta-buttons-row">
              <Link href="/kontakt" className="btn-primary">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
