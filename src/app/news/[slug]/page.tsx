import Link from 'next/link';

const ImagePlaceholder = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke="#999" strokeWidth="1.5"/>
    <circle cx="16" cy="20" r="3" stroke="#999" strokeWidth="1.5"/>
    <path d="M6 32L16 22L24 30L32 20L42 32" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function NewsArticlePage() {
  const article = {
    title: 'Chassis und Motor einstellen',
    subtitle: 'Eine Anleitung für optimale Performance',
    category: 'Technik',
    date: '15. Dezember 2024',
    author: 'NB Motorsport Team',
    readTime: '5 Min. Lesezeit',
  };

  const relatedArticles = [
    { title: 'Motortuning Basics', category: 'Technik', date: '10. Dez 2024' },
    { title: 'Reifenwahl im Rennen', category: 'Technik', date: '8. Dez 2024' },
    { title: 'Setup-Guide 2025', category: 'Technik', date: '5. Dez 2024' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <Link href="/">NB Motorsport</Link>
            <span>/</span>
            <Link href="/news">News</Link>
            <span>/</span>
            <span>Artikel</span>
          </div>
          <h1 className="page-hero-title">{article.title}</h1>
          <p className="page-hero-subtitle">{article.subtitle}</p>
        </div>
      </section>

      {/* Article Hero Image */}
      <section className="page-hero-image">
        <div className="container">
          <div className="page-hero-image-wrapper">
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container">
          <div className="article-layout">
            {/* Sidebar */}
            <aside className="article-sidebar">
              <div className="article-meta-block">
                <div className="meta-item">
                  <span className="meta-label">Kategorie</span>
                  <span className="meta-value">{article.category}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Datum</span>
                  <span className="meta-value">{article.date}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Autor</span>
                  <span className="meta-value">{article.author}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Lesezeit</span>
                  <span className="meta-value">{article.readTime}</span>
                </div>
              </div>
              <div className="article-share">
                <span className="share-label">Teilen</span>
                <div className="share-buttons">
                  <button className="share-btn">FB</button>
                  <button className="share-btn">TW</button>
                  <button className="share-btn">LI</button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <article className="article-content">
              <h2>Einführung</h2>
              <p>
                Das richtige Setup von Chassis und Motor ist entscheidend für die Performance auf der Strecke. In diesem Artikel zeigen wir dir die wichtigsten Grundlagen und geben praktische Tipps für die optimale Einstellung.
              </p>

              <h2>Chassis-Einstellung</h2>
              <p>
                Die Chassis-Einstellung beeinflusst maßgeblich das Fahrverhalten deines Karts. Faktoren wie Spurweite, Sturzwinkel und Nachlauf müssen optimal aufeinander abgestimmt sein.
              </p>

              <div className="article-image">
                <ImagePlaceholder />
              </div>

              <h3>Spurweite</h3>
              <p>
                Die Spurweite bestimmt die Stabilität in Kurven. Eine breitere Spurweite bietet mehr Grip, während eine schmalere Spurweite das Einlenkverhalten verbessert.
              </p>

              <h3>Sturzwinkel</h3>
              <p>
                Der Sturzwinkel beeinflusst den Reifenverschleiß und die Kurvenhaftung. Ein leicht negativer Sturz optimiert die Auflagefläche in Kurven.
              </p>

              <h2>Motor-Einstellung</h2>
              <p>
                Die Motorabstimmung umfasst Vergasereinstellung, Zündung und Auspuffanlage. Jede Komponente muss auf die Streckenbedingungen angepasst werden.
              </p>

              <blockquote>
                "Ein perfekt abgestimmtes Kart macht den Unterschied zwischen Podium und Mittelfeld."
              </blockquote>

              <h2>Fazit</h2>
              <p>
                Die Kombination aus Chassis- und Motoreinstellung erfordert Erfahrung und systematisches Vorgehen. Dokumentiere deine Einstellungen und analysiere die Ergebnisse nach jeder Session.
              </p>

              <div className="article-tags">
                <span className="tag">Technik</span>
                <span className="tag">Setup</span>
                <span className="tag">Chassis</span>
                <span className="tag">Motor</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Weitere Artikel</h2>
          </div>
          <div className="three-col-grid">
            {relatedArticles.map((item, index) => (
              <Link href={`/news/${index}`} key={index} className="news-article-card">
                <div className="news-article-image">
                  <ImagePlaceholder />
                </div>
                <div className="news-article-content">
                  <div className="article-meta">
                    <span className="article-category">{item.category}</span>
                    <span className="article-date">{item.date}</span>
                  </div>
                  <h3 className="news-article-title">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-dark">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Mehr lernen als Kartfahrer</h2>
            <p className="cta-text">
              Kontaktiere uns für eine persönliche Beratung zu Setup und Technik.
            </p>
            <div className="cta-buttons">
              <Link href="/anfrage" className="btn-primary">Anfrage</Link>
              <Link href="/kontakt" className="btn-outline-white">Kontakt</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
