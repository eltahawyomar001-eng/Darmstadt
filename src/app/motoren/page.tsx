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

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8L6 11L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function MotorenPage() {
  const motors = [
    { name: 'IAME X30', category: 'Senior', image: null },
    { name: 'Rotax Max', category: 'Senior', image: null },
    { name: 'IAME X30', category: 'Junior', image: null },
    { name: 'Rotax Mini', category: 'Mini', image: null },
  ];

  const services = [
    {
      title: 'Motortuning',
      description: 'Professionelles Tuning für maximale Performance.',
      features: ['Leistungsoptimierung', 'Abstimmung', 'Dokumentation'],
    },
    {
      title: 'Wartung & Service',
      description: 'Regelmäßige Wartung für Zuverlässigkeit.',
      features: ['Inspektion', 'Verschleißteile', 'Reinigung'],
    },
  ];

  const steps = [
    { number: '01', title: 'Kontaktaufnahme', description: 'Nimm Kontakt mit uns auf und schildere dein Anliegen.' },
    { number: '02', title: 'Beratungsgespräch', description: 'Wir besprechen deine Anforderungen und erstellen ein Angebot.' },
    { number: '03', title: 'Terminvereinbarung', description: 'Wir vereinbaren einen passenden Termin für den Service.' },
    { number: '04', title: 'Durchführung', description: 'Professionelle Durchführung mit Qualitätskontrolle.' },
  ];

  const faqs = [
    { question: 'Wie lange dauert ein Motorservice?', answer: 'Je nach Umfang 1-3 Tage.' },
    { question: 'Welche Motoren könnt ihr warten?', answer: 'IAME, Rotax, Vortex und weitere.' },
    { question: 'Bietet ihr auch Notfall-Service?', answer: 'Ja, auf Anfrage auch kurzfristig.' },
    { question: 'Kann ich Ersatzteile auch einzeln kaufen?', answer: 'Ja, wir haben ein breites Sortiment.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <Link href="/">Lenzokart</Link>
            <span>/</span>
            <span>Motoren und Service</span>
          </div>
          <h1 className="page-hero-title">Motoren und service</h1>
          <p className="page-hero-subtitle">
            Entdecke unser Angebot an Rennmotoren und professionellem Motorservice.
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

      {/* Motors Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">Motoren</span>
              <h2 className="section-title">Unsere Motoren</h2>
              <p className="section-text">Hochwertige Rennmotoren für alle Klassen.</p>
            </div>
          </div>
          <div className="four-col-grid">
            {motors.map((motor, index) => (
              <Link href={`/motoren/${index}`} key={index} className="product-card">
                <div className="product-card-image">
                  <ImagePlaceholder />
                </div>
                <div className="product-card-content">
                  <span className="product-card-category">{motor.category}</span>
                  <h3 className="product-card-title">{motor.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="two-col-grid">
            <div className="two-col-image large">
              <ImagePlaceholder />
            </div>
            <div className="two-col-content">
              <span className="section-label">Service</span>
              <h2 className="section-title">Lenzokart Chassis für Miniklasse</h2>
              <p className="section-text">
                Unser professioneller Motorservice bietet alles von der Wartung bis zum Tuning. Vertraue auf unsere langjährige Erfahrung.
              </p>
              <div className="section-buttons">
                <Link href="/service" className="btn-primary">Service anfragen</Link>
                <Link href="/kontakt" className="btn-outline-dark">Kontakt</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Ablauf</span>
            <h2 className="section-title">Drei Schritte zur Miete</h2>
            <p className="section-text">So einfach geht es zu deinem Motorservice.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.number} className="step-card">
                <span className="step-number">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Leistungen</span>
            <h2 className="section-title">Motorservice</h2>
          </div>
          <div className="two-col-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card-detailed">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-text">{service.description}</p>
                <ul className="service-card-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/anfrage" className="btn-outline-dark">Anfragen</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">FAQ</h2>
            <p className="section-text">Häufig gestellte Fragen zu unseren Services.</p>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-yellow">
        <div className="container">
          <div className="cta-inline">
            <div className="cta-inline-content">
              <h3 className="cta-inline-title">Motor anfragen oder Service buchen</h3>
              <p className="cta-inline-text">Kontaktiere uns für ein individuelles Angebot.</p>
            </div>
            <div className="cta-inline-buttons">
              <Link href="/anfrage" className="btn-dark">Anfrage</Link>
              <Link href="/kontakt" className="btn-outline-dark">Kontakt</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
