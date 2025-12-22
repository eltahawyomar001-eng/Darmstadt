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

export default function ChassisPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Chassis</h1>
            <p className="page-hero-subtitle">
              Wir bieten eine breite Auswahl an professionellen Lenzokart-Chassis für alle Rennklassen – vom Einsteigermodell bis zum Top-Wettbewerbskart.
            </p>
          </div>
        </div>
      </section>

      {/* Vier Chassis Section */}
      <section className="section-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Modelle</span>
            <h2 className="section-heading">Vier Chassis zur Auswahl</h2>
            <p className="section-text">
              Jedes Chassis wird auf höchstem Niveau gefertigt und bietet optimale Performance für deinen Einsatzbereich.
            </p>
          </div>
          <div className="chassis-grid">
            <div className="chassis-card">
              <div className="chassis-image">
                <div className="image-placeholder">
                  <ImagePlaceholder />
                </div>
              </div>
              <div className="chassis-content">
                <h3 className="chassis-name">Lenzokart GT</h3>
                <p className="chassis-desc">
                  Hochwertiges Einsteiger-Chassis mit exzellentem Handling und Stabilität.
                </p>
                <ul className="chassis-specs">
                  <li>Gewicht: 32kg</li>
                  <li>Achsabstand: 1040mm</li>
                  <li>Spurbreite: 1050mm</li>
                </ul>
                <p className="chassis-price">ab 2.990€</p>
              </div>
            </div>
            <div className="chassis-card">
              <div className="chassis-image">
                <div className="image-placeholder">
                  <ImagePlaceholder />
                </div>
              </div>
              <div className="chassis-content">
                <h3 className="chassis-name">Formula K (Exprit)</h3>
                <p className="chassis-desc">
                  Bewährtes Racing-Chassis für ambitionierte Fahrer in allen Klassen.
                </p>
                <ul className="chassis-specs">
                  <li>Gewicht: 31kg</li>
                  <li>Achsabstand: 1040mm</li>
                  <li>Spurbreite: 1050mm</li>
                </ul>
                <p className="chassis-price">ab 3.490€</p>
              </div>
            </div>
            <div className="chassis-card">
              <div className="chassis-image">
                <div className="image-placeholder">
                  <ImagePlaceholder />
                </div>
              </div>
              <div className="chassis-content">
                <h3 className="chassis-name">Cayman</h3>
                <p className="chassis-desc">
                  Speziell entwickelt für Mini- und Bambini-Klassen mit hoher Kippsicherheit.
                </p>
                <ul className="chassis-specs">
                  <li>Gewicht: 29kg</li>
                  <li>Achsabstand: 950mm</li>
                  <li>Spurbreite: 1000mm</li>
                </ul>
                <p className="chassis-price">ab 2.790€</p>
              </div>
            </div>
            <div className="chassis-card">
              <div className="chassis-image">
                <div className="image-placeholder">
                  <ImagePlaceholder />
                </div>
              </div>
              <div className="chassis-content">
                <h3 className="chassis-name">Tonykart</h3>
                <p className="chassis-desc">
                  High-End Profi-Chassis für internationale Wettbewerbe und Meisterschaften.
                </p>
                <ul className="chassis-specs">
                  <li>Gewicht: 31kg</li>
                  <li>Achsabstand: 1040mm</li>
                  <li>Spurbreite: 1050mm</li>
                </ul>
                <p className="chassis-price">ab 4.290€</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Für jeden Rennfahrer Section */}
      <section className="section-light-blue">
        <div className="container">
          <div className="two-col-layout">
            <div className="image-side">
              <div className="image-placeholder">
                <ImagePlaceholder />
              </div>
            </div>
            <div className="content-side">
              <span className="section-label">Vielfalt</span>
              <h2 className="section-heading">Für jeden Rennfahrer das passende Chassis</h2>
              <p className="section-text">
                Egal ob Bambini, Junior oder Senior – unsere Chassis sind auf jede Altersklasse und jedes Fahrkönnen abgestimmt. Wir beraten dich individuell und finden gemeinsam das perfekte Setup für deine Ziele auf der Rennstrecke.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cayman für Mini Section */}
      <section className="section-white">
        <div className="container">
          <div className="two-col-layout-reversed">
            <div className="content-side">
              <span className="section-label">Nachwuchs</span>
              <h2 className="section-heading">Cayman für Mini- und Bambini-Fahrer</h2>
              <p className="section-text">
                Das Cayman-Chassis wurde speziell für die jüngsten Rennfahrer entwickelt. Mit verbesserter Kippsicherheit, angepasstem Gewicht und optimaler Fahrstabilität bietet es den perfekten Einstieg in den Kartsport.
              </p>
            </div>
            <div className="image-side">
              <div className="image-placeholder">
                <ImagePlaceholder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Richtiges Chassis Section */}
      <section className="section-light-blue">
        <div className="container">
          <div className="two-col-layout">
            <div className="image-side">
              <div className="image-placeholder">
                <ImagePlaceholder />
              </div>
            </div>
            <div className="content-side">
              <span className="section-label">Performance</span>
              <h2 className="section-heading">Das richtige Chassis für deine Ziele</h2>
              <p className="section-text">
                Wir wählen jedes Chassis nach deinem Fahrstil, deiner Rennklasse und deinen sportlichen Ambitionen aus. Mit jahrelanger Erfahrung im Rennsport wissen wir, worauf es ankommt – und stellen sicher, dass du mit dem besten Material an den Start gehst.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Beraten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dein Chassis wartet CTA */}
      <section className="section-dark">
        <div className="container">
          <div className="cta-content-center">
            <h2 className="section-heading text-white">Dein Chassis wartet auf dich</h2>
            <p className="section-text text-white">
              Lass dich von uns beraten und finde das perfekte Chassis für deinen Rennerfolg. Wir sind für dich da.
            </p>
            <Link href="/kontakt" className="btn-white">
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-white">
        <div className="container">
          <div className="faq-container">
            <div className="section-header-center">
              <span className="section-label">Häufige Fragen</span>
              <h2 className="section-heading">FAQ zu Chassis</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-question">
                  Welches Chassis ist für Anfänger geeignet?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Für Einsteiger empfehlen wir das Lenzokart GT oder das Cayman (für jüngere Fahrer). Beide bieten eine ausgezeichnete Balance zwischen Performance und Handling und sind ideal, um erste Rennerfahrungen zu sammeln.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Wie lange dauert die Lieferung eines Chassis?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Die Lieferzeit beträgt in der Regel 2-4 Wochen, je nach Verfügbarkeit und individuellen Anpassungen. Auf Anfrage können wir auch eine Express-Lieferung organisieren.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Kann ich das Chassis individuell anpassen lassen?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Ja, wir bieten verschiedene Setup- und Anpassungsmöglichkeiten an. Von Sitzposition über Spurweite bis hin zu speziellen Lackierungen – sprich uns einfach an.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Sind die Preise inklusive Setup und Abstimmung?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Die angegebenen Preise verstehen sich als Grundpreise für das Chassis. Setup und Feinabstimmung können wir optional dazu buchen – gerne beraten wir dich hierzu persönlich.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Bietet ihr auch gebrauchte Chassis an?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Ja, gelegentlich haben wir auch geprüfte und gewartete Gebraucht-Chassis im Angebot. Kontaktiere uns für aktuelle Verfügbarkeit und Konditionen.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
