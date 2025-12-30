import { getDatenschutzPageContent } from '@/lib/pages';

export default function DatenschutzPage() {
  const content = getDatenschutzPageContent();

  return (
    <>
      <section className="page-hero-image">
        <div className="container">
          <div className="page-hero-content">
            <p className="section-label">{content.heroLabel || 'Rechtliches'}</p>
            <h1 className="page-hero-title">{content.heroTitle || 'Datenschutzerklärung'}</h1>
          </div>
        </div>
      </section>
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
                <em>Zuletzt aktualisiert: {new Date(content.lastUpdated).toLocaleDateString('de-DE')}</em>
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
