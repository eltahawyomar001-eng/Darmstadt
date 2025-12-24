import Link from 'next/link';
import Image from 'next/image';
import { getAllMotoren } from '@/lib/motoren';
import { getMotorenPageContent } from '@/lib/pages';

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

// Map icon names to components
const iconMap: { [key: string]: React.FC } = {
  wrench: WrenchIcon,
  gauge: GaugeIcon,
  cog: CogIcon,
};

export default function MotorenPage() {
  const engines = getAllMotoren();
  const content = getMotorenPageContent();

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="page-hero-image">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">{content.heroTitle}</h1>
            <p className="page-hero-subtitle">
              {content.heroText}
            </p>
          </div>
        </div>
      </section>

      {/* Engine Cards Section - 6 Engines */}
      <section className="section-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">{content.engineLabel}</span>
            <h2 className="section-heading">{content.engineTitle}</h2>
            <p className="section-text">
              {content.engineText}
            </p>
          </div>
          <div className="engine-grid">
            {engines.map((engine) => (
              <div key={engine.slug} className="engine-card-static">
                <div className="engine-image">
                  <Image
                    src={engine.image}
                    alt={engine.title}
                    width={400}
                    height={300}
                  />
                </div>
                <div className="engine-content">
                  <h3 className="engine-name">{engine.title}</h3>
                  <p className="engine-desc">{engine.description}</p>
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
            <span className="section-label">{content.servicesLabel}</span>
            <h2 className="section-heading">{content.servicesTitle}</h2>
          </div>
          <div className="services-grid-three">
            {content.services?.map((service, index) => {
              const IconComponent = iconMap[service.icon] || WrenchIcon;
              return (
                <div key={index} className="service-item">
                  <div className="service-icon"><IconComponent /></div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-white">
        <div className="container">
          <div className="faq-container">
            <div className="section-header-center">
              <span className="section-label">{content.faqLabel}</span>
              <h2 className="section-heading">{content.faqTitle}</h2>
            </div>
            <div className="faq-list">
              {content.faqs?.map((faq, index) => (
                <details key={index} className="faq-item">
                  <summary className="faq-question">
                    {faq.question}
                    <ChevronIcon />
                  </summary>
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="section-cta-image">
        <div className="container">
          <div className="cta-content-center">
            <h2 className="section-heading text-white">{content.ctaTitle}</h2>
            <p className="section-text text-white">
              {content.ctaText}
            </p>
            <Link href="/kontakt" className="btn-white">{content.ctaButton}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
