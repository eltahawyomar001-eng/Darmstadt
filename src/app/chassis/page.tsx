import Link from 'next/link';

const ImagePlaceholder = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke="#999" strokeWidth="1.5"/>
    <circle cx="16" cy="20" r="3" stroke="#999" strokeWidth="1.5"/>
    <path d="M6 32L16 22L24 30L32 20L42 32" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export default function ChassisPage() {
  const chassisModels = [
    { name: 'LZ Cayman', category: 'für Miniklasse', image: null },
    { name: 'LZ Cayman', category: 'für Miniklasse', image: null },
    { name: 'LZ Cayman', category: 'für Miniklasse', image: null },
    { name: 'LZ Cayman', category: 'für Miniklasse', image: null },
  ];

  const categories = [
    'Alle anzeigen',
    'Bambini',
    'Miniklasse',
    'Juniorklasse',
    'Seniorklasse',
    'Shifter',
  ];

  const faqs = [
    {
      question: 'Welches Chassis passt am besten zu mir?',
      answer: 'Das hängt von deiner Erfahrung, deinem Gewicht und der Rennklasse ab. Kontaktiere uns für eine persönliche Beratung.',
    },
    {
      question: 'Kann ich ein Chassis vor dem Kauf testen?',
      answer: 'Ja, wir bieten Testfahrten auf ausgewählten Strecken an. Vereinbare einen Termin mit uns.',
    },
    {
      question: 'Wie lange dauert die Lieferung?',
      answer: 'In der Regel 2-4 Wochen je nach Modell und Verfügbarkeit.',
    },
    {
      question: 'Bietet ihr auch Finanzierung an?',
      answer: 'Ja, wir arbeiten mit verschiedenen Finanzierungspartnern zusammen. Sprich uns an.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <Link href="/">Lenzokart</Link>
            <span>/</span>
            <span>Chassis</span>
          </div>
          <h1 className="page-hero-title">Lenzokart Chassis Performanz</h1>
          <p className="page-hero-subtitle">
            Entdecke unsere Auswahl an Lenzokart Chassis für jede Rennklasse.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div className="two-col-grid">
            <div className="two-col-content">
              <span className="section-label">Lenzokart</span>
              <h2 className="section-title">Vier Lenzokart Chassis für jede Rennklasse</h2>
              <p className="section-text">
                Vom Bambini bis zum Shifter – wir haben das passende Chassis für deine Ambitionen. Alle Modelle sind auf höchste Performance und Zuverlässigkeit ausgelegt.
              </p>
              <div className="section-buttons">
                <Link href="/beratung" className="btn-outline-dark">Beratung anfragen</Link>
                <Link href="#" className="link-with-arrows">
                  <ArrowRight />
                  <ArrowRight />
                </Link>
              </div>
            </div>
            <div className="two-col-image">
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Chassis */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Bestseller</span>
              <h2 className="section-title">Das sagen wir als Rennteam</h2>
            </div>
          </div>
          <div className="two-col-grid">
            <div className="two-col-image large">
              <ImagePlaceholder />
            </div>
            <div className="two-col-content">
              <h3 className="product-title">Lenzokart Chassis für jeden Rennklasse</h3>
              <p className="section-text">
                Seit Jahren setzen wir auf Lenzokart und haben damit zahlreiche Erfolge gefeiert. Die Qualität und Verarbeitung sind unübertroffen.
              </p>
              <div className="product-specs">
                <div className="spec-item">
                  <span className="spec-label">Material</span>
                  <span className="spec-value">Ø30mm/Ø32mm</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Gewicht</span>
                  <span className="spec-value">ab 24kg</span>
                </div>
              </div>
              <div className="section-buttons">
                <Link href="/chassis/details" className="btn-primary">Details ansehen</Link>
                <Link href="/beratung" className="btn-outline-dark">Beratung</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Chassis Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Chassis</span>
            <h2 className="section-title">Das richtige Chassis für deine Klasse</h2>
          </div>
          <div className="filter-tabs">
            {categories.map((cat, index) => (
              <button key={cat} className={`filter-tab ${index === 0 ? 'active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="four-col-grid">
            {chassisModels.map((model, index) => (
              <Link href={`/chassis/${index}`} key={index} className="product-card">
                <div className="product-card-image">
                  <ImagePlaceholder />
                </div>
                <div className="product-card-content">
                  <span className="product-card-category">{model.category}</span>
                  <h3 className="product-card-title">{model.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-yellow">
        <div className="container">
          <div className="cta-inline">
            <div className="cta-inline-content">
              <h3 className="cta-inline-title">Dein Chassis wartet</h3>
              <p className="cta-inline-text">Jetzt Beratung anfragen und das perfekte Chassis finden.</p>
            </div>
            <div className="cta-inline-buttons">
              <Link href="/anfrage" className="btn-dark">Anfrage</Link>
              <Link href="/kontakt" className="btn-outline-dark">Kontakt</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">Fragen</h2>
            <p className="section-text">Häufig gestellte Fragen zu unseren Chassis.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <span>{faq.question}</span>
                  <PlusIcon />
                </div>
              </div>
            ))}
          </div>
          <div className="faq-contact">
            <h3>Noch Fragen offen?</h3>
            <p>Kontaktiere uns für eine persönliche Beratung.</p>
            <Link href="/kontakt" className="btn-outline-dark">Kontakt</Link>
          </div>
        </div>
      </section>
    </>
  );
}
