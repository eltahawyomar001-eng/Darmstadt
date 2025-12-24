import Link from 'next/link';
import Image from 'next/image';
import { getTeamPageContent } from '@/lib/pages';

const HandshakeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 24L8 16L12 12L20 20M32 24L40 16L36 12L28 20M16 24L24 32L32 24M24 32L20 36L16 40M24 32L28 36L32 40" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 8C14 8 18 12 18 16C18 20 14 20 14 24C14 28 20 34 24 34C28 34 28 30 32 30C36 30 40 34 40 34M12 36L16 40M32 8L36 12" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 8H36M12 8V16C12 20 16 24 24 24C32 24 36 20 36 16V8M12 8H8V16C8 18 10 20 12 20M36 8H40V16C40 18 38 20 36 20M24 24V32M20 32H28M18 40H30" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Map icon names to components
const iconMap: { [key: string]: React.FC } = {
  handshake: HandshakeIcon,
  phone: PhoneIcon,
  trophy: TrophyIcon,
};

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
              const icons = ['handshake', 'phone', 'trophy'];
              const iconName = icons[index] || 'trophy';
              const IconComponent = iconMap[iconName] || TrophyIcon;
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
