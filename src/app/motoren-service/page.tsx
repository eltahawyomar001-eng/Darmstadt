import Link from 'next/link';
import { getMotorenServicePageContent } from '@/lib/pages';

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

// Map icon names to components
const iconMap: { [key: string]: React.FC } = {
  engine: EngineIcon,
  wrench: WrenchIcon,
  euro: EuroIcon,
};

export default function MotorenServicePage() {
  const content = getMotorenServicePageContent();

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

      {/* Unsere Motoren - Gallery Section */}
      <section className="section-white">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">{content.motorsTitle}</h2>
            <p className="section-text">
              {content.motorsText}
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
                  {content.services?.map((service, index) => {
                    const icons = ['engine', 'wrench', 'euro'];
                    const iconName = icons[index] || 'engine';
                    const IconComponent = iconMap[iconName] || EngineIcon;
                    return (
                      <div key={index} className="service-feature-item">
                        <div className="service-feature-icon">
                          <IconComponent />
                        </div>
                        <div className="service-feature-content">
                          <h3>{service.title}</h3>
                          <p>{service.description}</p>
                        </div>
                      </div>
                    );
                  })}
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
            <span className="section-label">{content.stepsLabel}</span>
            <h2 className="section-heading">{content.stepsTitle}</h2>
          </div>
          <div className="rental-steps-grid">
            {content.steps?.map((step, index) => (
              <div key={index} className="rental-step-card">
                <span className="rental-step-label">{step.label}</span>
                <h3 className="rental-step-title">{step.title}</h3>
                <p className="rental-step-desc">
                  {step.description}
                </p>
                <div className="rental-step-image">
                  <div className="image-placeholder">
                    <ImagePlaceholder />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-light-blue">
        <div className="container">
          <div className="faq-layout-split">
            <div className="faq-header-side">
              <h2 className="section-heading">{content.faqTitle}</h2>
              <p className="section-text">
                {content.faqText}
              </p>
              <Link href="/kontakt" className="btn-outline-dark">
                Kontakt
              </Link>
            </div>
            <div className="faq-list-side">
              {content.faqs?.map((faq, index) => (
                <details key={index} className="faq-item" open={index === 0}>
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

      {/* Final CTA Section */}
      <section className="section-cta-image">
        <div className="container">
          <div className="cta-content-center">
            <h2 className="section-heading text-white">{content.ctaTitle}</h2>
            <p className="section-text text-white">
              {content.ctaText}
            </p>
            <Link href="/kontakt" className="btn-white">
              {content.ctaButtonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
