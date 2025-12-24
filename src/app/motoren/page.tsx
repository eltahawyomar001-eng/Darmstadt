import Link from 'next/link';
import Image from 'next/image';

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
  const engines = [
    {
      name: 'Iame X30',
      desc: 'Der meistgefahrene Motor im deutschen und internationalen Kartsport.',
      specs: ['Leistung: 30 PS', 'Hubraum: 125ccm', 'Gewicht: 11kg'],
      price: 'ab 3.490€',
      image: '/10.png'
    },
    {
      name: 'Iame KZ2',
      desc: 'Hochleistungsmotor mit Schaltgetriebe für Profis.',
      specs: ['Leistung: 48 PS', 'Hubraum: 125ccm', 'Gewicht: 14kg'],
      price: 'ab 5.990€',
      image: '/11.jpg'
    },
    {
      name: 'Iame Leopard',
      desc: 'Einsteigermotor für Junioren mit starker Performance.',
      specs: ['Leistung: 23 PS', 'Hubraum: 125ccm', 'Gewicht: 10kg'],
      price: 'ab 2.790€',
      image: '/12.png'
    },
    {
      name: 'Iame X30 Junior',
      desc: 'Speziell für Junior-Fahrer entwickelt.',
      specs: ['Leistung: 22 PS', 'Hubraum: 125ccm', 'Gewicht: 10.5kg'],
      price: 'ab 3.190€',
      image: '/13.jpg'
    },
    {
      name: 'Iame Mini Swift',
      desc: 'Der perfekte Motor für die Mini-Klasse.',
      specs: ['Leistung: 12 PS', 'Hubraum: 60ccm', 'Gewicht: 7kg'],
      price: 'ab 1.990€',
      image: '/14.png'
    },
    {
      name: 'Iame Screamer',
      desc: 'Kraftvoller Motor für erfahrene Fahrer.',
      specs: ['Leistung: 40 PS', 'Hubraum: 125ccm', 'Gewicht: 12kg'],
      price: 'ab 4.490€',
      image: '/15.png'
    }
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="page-hero-image">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">Motoren</h1>
            <p className="page-hero-subtitle">
              Hochleistungsmotoren von Iame – zuverlässig, leistungsstark und auf Sieg programmiert.
            </p>
          </div>
        </div>
      </section>

      {/* Engine Cards Section - 6 Engines */}
      <section className="section-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Iame</span>
            <h2 className="section-heading">Unsere Motoren im Überblick</h2>
            <p className="section-text">
              Jeder Motor wird von uns geprüft, eingestellt und rennfertig ausgeliefert.
            </p>
          </div>
          <div className="engine-grid">
            {engines.map((engine) => (
              <div key={engine.name} className="engine-card-static">
                <div className="engine-image">
                  <Image
                    src={engine.image}
                    alt={engine.name}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="engine-content">
                  <h3 className="engine-name">{engine.name}</h3>
                  <p className="engine-desc">{engine.desc}</p>
                  <ul className="engine-specs">
                    {engine.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                  <p className="engine-price">{engine.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-light-blue">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Rundum-Service</span>
            <h2 className="section-heading">Was wir für dich tun</h2>
          </div>
          <div className="services-grid-three">
            <div className="service-item">
              <div className="service-icon"><WrenchIcon /></div>
              <h3 className="service-title">Wartung & Service</h3>
              <p className="service-desc">Regelmäßige Inspektionen und technische Checks.</p>
            </div>
            <div className="service-item">
              <div className="service-icon"><GaugeIcon /></div>
              <h3 className="service-title">Performance-Tuning</h3>
              <p className="service-desc">Maximale Leistung – legal und messbar.</p>
            </div>
            <div className="service-item">
              <div className="service-icon"><CogIcon /></div>
              <h3 className="service-title">Motorenbau nach Maß</h3>
              <p className="service-desc">Individuelle Anpassungen für höchste Ansprüche.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-white">
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
                  Für Einsteiger empfehlen wir den Iame X30 oder den Iame Leopard.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Wie oft muss ein Motor gewartet werden?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Eine Grundwartung empfehlen wir nach jedem Rennwochenende.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  Bietet ihr auch Tuning an?
                  <ChevronIcon />
                </summary>
                <div className="faq-answer">
                  Ja, wir bieten professionelles Performance-Tuning an.
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="section-cta-image">
        <div className="container">
          <div className="cta-content-center">
            <h2 className="section-heading text-white">Dein Motor wartet auf dich</h2>
            <p className="section-text text-white">
              Kontaktiere uns und wir finden gemeinsam den perfekten Motor für deine Ziele.
            </p>
            <Link href="/kontakt" className="btn-white">Kontakt</Link>
          </div>
        </div>
      </section>
    </>
  );
}
