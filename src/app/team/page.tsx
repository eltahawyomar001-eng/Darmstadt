import Link from 'next/link';
import Image from 'next/image';
import { getTeamPageContent } from '@/lib/pages';
import { iconMap } from '@/components/icons/Icons';

export default function TeamPage() {
  const content = getTeamPageContent();

  return (
    <>
      {/* Hero Section */}
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

      {/* Wer wir sind Section - Image 16 */}
      <section className="section-white">
        <div className="container">
          <div className="two-col-layout">
            <div className="image-side">
              <Image
                src={content.aboutImage || "/16.jpg"}
                alt="Wer wir sind und was wir tun"
                width={600}
                height={450}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
            <div className="content-side">
              <span className="section-label">{content.aboutLabel}</span>
              <h2 className="section-heading">{content.aboutTitle}</h2>
              <p className="section-text">
                {content.aboutText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Das macht uns als Team besonders */}
      <section className="section-light-blue">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">{content.valuesLabel}</span>
            <h2 className="section-heading">{content.valuesTitle}</h2>
            <p className="section-text">
              {content.valuesText}
            </p>
          </div>
          <div className="values-grid">
            {content.values?.map((value, index) => {
              const IconComponent = iconMap[value.icon] || iconMap['trophy'];
              return (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <IconComponent />
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-text">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Auf der Strecke Section - Gallery Images */}
      <section className="section-white">
        <div className="container">
          <div className="carousel-section">
            <div className="carousel-content">
              <h2 className="section-heading">{content.galleryTitle}</h2>
              <p className="section-text">{content.galleryText}</p>
            </div>
            <div className="gallery-grid">
              {content.galleryImages?.map((image, index) => (
                <div key={index} className="gallery-image">
                  <Image src={image} alt={`Auf der Strecke ${index + 1}`} width={400} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Werde Teil unseres Teams */}
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
