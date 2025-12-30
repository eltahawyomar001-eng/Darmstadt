import { getAGBPageContent } from '@/lib/pages';

export default function AGBPage() {
  const content = getAGBPageContent();

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero-image">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">{content.heroTitle || 'Allgemeine Geschäftsbedingungen'}</h1>
            <p className="page-hero-subtitle">
              {content.heroSubtitle || 'Unsere Geschäftsbedingungen für Produkte und Dienstleistungen.'}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-white">
        <div className="container">
          <div className="legal-content">
            {content.sections?.map((section, index) => (
              <div key={index}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            ))}
            {content.lastUpdated && (
              <p className="legal-updated">
                <em>Stand: {new Date(content.lastUpdated).toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</em>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
