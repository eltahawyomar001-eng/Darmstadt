import Link from 'next/link';
import Image from 'next/image';
import { getAllChassis } from '@/lib/chassis';
import { getChassisPageContent } from '@/lib/pages';

const ChevronIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 9L12 16L5 9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function ChassisPage() {
  const chassisList = getAllChassis();
  const content = getChassisPageContent();

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="page-hero-image">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">{content.heroTitle}</h1>
            <p className="page-hero-subtitle">{content.heroText}</p>
          </div>
        </div>
      </section>

      {/* Chassis Cards Section */}
      <section className="section-white">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">{content.chassisLabel}</span>
            <h2 className="section-heading">{content.chassisTitle}</h2>
            <p className="section-text">{content.chassisText}</p>
          </div>
          <div className="chassis-grid chassis-grid-3">
            {chassisList.map((item) => (
              <div key={item.slug} className="chassis-card">
                <div className="chassis-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="chassis-content">
                  <h3 className="chassis-name">{item.title}</h3>
                  <p className="chassis-desc">{item.description}</p>
                  <ul className="chassis-specs">
                    {item.specs.map((spec) => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                  <p className="chassis-price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section 1 */}
      <section className="section-light-blue">
        <div className="container">
          <div className="two-col-layout">
            <div className="image-side">
              <Image
                src={content.infoSection1Image}
                alt={content.infoSection1Title}
                width={600}
                height={450}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
            <div className="content-side">
              <span className="section-label">{content.infoSection1Label}</span>
              <h2 className="section-heading">{content.infoSection1Title}</h2>
              <p className="section-text">{content.infoSection1Text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section 2 */}
      <section className="section-white">
        <div className="container">
          <div className="two-col-layout-reversed">
            <div className="content-side">
              <span className="section-label">{content.infoSection2Label}</span>
              <h2 className="section-heading">{content.infoSection2Title}</h2>
              <p className="section-text">{content.infoSection2Text}</p>
            </div>
            <div className="image-side">
              <Image
                src={content.infoSection2Image}
                alt={content.infoSection2Title}
                width={600}
                height={450}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="section-cta-image">
        <div className="container">
          <div className="cta-content-center">
            <h2 className="section-heading text-white">{content.ctaTitle}</h2>
            <p className="section-text text-white">{content.ctaText}</p>
            <Link href="/kontakt" className="btn-white">{content.ctaButtonText}</Link>
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
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
