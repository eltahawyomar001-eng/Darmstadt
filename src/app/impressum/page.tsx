import { getImpressumPageContent } from '@/lib/pages';

export default function ImpressumPage() {
  const content = getImpressumPageContent();

  return (
    <>
      <section className="page-hero-image">
        <div className="container">
          <div className="page-hero-content">
            <p className="section-label">{content.heroLabel || 'Rechtliches'}</p>
            <h1 className="page-hero-title">{content.heroTitle || 'Impressum'}</h1>
          </div>
        </div>
      </section>
      <section className="section-white">
        <div className="container">
          <div className="legal-content">
            <h2>Angaben gem. § 5 TMG</h2>
            <p>
              {content.companyName}<br/>
              {content.street}<br/>
              {content.city}<br/>
              {content.country}
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: {content.phone}<br/>
              E-Mail: {content.email}
            </p>

            <h2>Vertretungsberechtigter</h2>
            <p>
              {content.representative}<br/>
              {content.representativeRole}
            </p>

            {content.ustIdNr && (
              <>
                <h2>Umsatzsteuer-ID</h2>
                <p>{content.ustIdNr}</p>
              </>
            )}

            {content.handelsregister && (
              <>
                <h2>Handelsregister</h2>
                <p>{content.handelsregister}</p>
              </>
            )}

            <h2>Haftungsausschluss</h2>
            <p>{content.section6Content}</p>

            <h2>Haftung für Links</h2>
            <p>{content.section7Content}</p>
          </div>
        </div>
      </section>
    </>
  );
}
