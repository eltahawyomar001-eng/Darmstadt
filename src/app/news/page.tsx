import Link from 'next/link';

const ImagePlaceholder = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="28" rx="2" stroke="#999" strokeWidth="1.5"/>
    <circle cx="16" cy="20" r="3" stroke="#999" strokeWidth="1.5"/>
    <path d="M6 32L16 22L24 30L32 20L42 32" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function NewsPage() {
  const categories = ['Alle Beiträge', 'Rennberichte', 'Technik', 'Team'];

  const featuredArticle = {
    title: 'Sieg in Lonato',
    excerpt: 'Unser Fahrer Max Mustermann gewinnt das Finale in Lonato und sichert sich wichtige Meisterschaftspunkte.',
    category: 'Rennbericht',
    date: '15. Dez 2024',
    image: null,
  };

  const articles = [
    { title: 'Neues Chassis für 2025', excerpt: 'Die neue Lenzokart-Generation ist da.', category: 'Technik', date: '12. Dez 2024' },
    { title: 'Wintertraining in Spanien', excerpt: 'Vorbereitung auf die kommende Saison.', category: 'Team', date: '10. Dez 2024' },
    { title: 'Deutscher Meistertitel!', excerpt: 'Erfolgreicher Saisonabschluss.', category: 'Rennbericht', date: '5. Dez 2024' },
    { title: 'Neue Partnerschaft', excerpt: 'Strategische Zusammenarbeit angekündigt.', category: 'Team', date: '1. Dez 2024' },
    { title: 'Motorenupdate X30', excerpt: 'Technische Verbesserungen für 2025.', category: 'Technik', date: '28. Nov 2024' },
    { title: 'Podium in Genk', excerpt: 'Starke Leistung auf belgischem Asphalt.', category: 'Rennbericht', date: '25. Nov 2024' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <Link href="/">NB Motorsport</Link>
            <span>/</span>
            <span>News</span>
          </div>
          <h1 className="page-hero-title">News und Updates</h1>
          <p className="page-hero-subtitle">
            Aktuelle Nachrichten, Rennberichte und Neuigkeiten aus dem Team.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section-sm">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((cat, index) => (
              <button key={cat} className={`filter-tab ${index === 0 ? 'active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section">
        <div className="container">
          <Link href="/news/sieg-in-lonato" className="featured-article">
            <div className="featured-article-image">
              <ImagePlaceholder />
            </div>
            <div className="featured-article-content">
              <div className="article-meta">
                <span className="article-category">{featuredArticle.category}</span>
                <span className="article-date">{featuredArticle.date}</span>
              </div>
              <h2 className="featured-article-title">{featuredArticle.title}</h2>
              <p className="featured-article-excerpt">{featuredArticle.excerpt}</p>
              <span className="read-more">
                Weiterlesen <ArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section">
        <div className="container">
          <div className="news-articles-grid">
            {articles.map((article, index) => (
              <Link href={`/news/${index}`} key={index} className="news-article-card">
                <div className="news-article-image">
                  <ImagePlaceholder />
                </div>
                <div className="news-article-content">
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    <span className="article-date">{article.date}</span>
                  </div>
                  <h3 className="news-article-title">{article.title}</h3>
                  <p className="news-article-excerpt">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="cta-dark">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Bleib informiert</h2>
            <p className="cta-text">
              Abonniere unseren Newsletter und verpasse keine Neuigkeiten.
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Deine E-Mail-Adresse" className="newsletter-input" />
              <button className="btn-primary">Abonnieren</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
