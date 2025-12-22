import Link from 'next/link';
import { getAllArticles } from '@/data/news';

const ImagePlaceholder = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="48" height="40" rx="4" />
    <circle cx="22" cy="26" r="4" />
    <path d="M8 44L20 32L32 44L44 28L56 44" />
  </svg>
);

export default function NewsPage() {
  const articles = getAllArticles();

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <h1 className="page-hero-title">News & Updates</h1>
            <p className="page-hero-subtitle">
              Aktuelle Neuigkeiten, Erfolge und Einblicke aus der Welt von NB Motorsport.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="section-white">
        <div className="container">
          <div className="news-grid">
            {articles.map((article) => (
              <Link href={`/news/${article.id}`} key={article.id} className="news-article-card">
                <div className="news-article-image">
                  <div className="image-placeholder">
                    <ImagePlaceholder />
                  </div>
                </div>
                <div className="news-article-content">
                  <div className="news-meta">
                    <span className="news-category">{article.category}</span>
                    <span className="news-date">
                      {new Date(article.date).toLocaleDateString('de-DE', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h2 className="news-article-title">{article.title}</h2>
                  <p className="news-article-excerpt">{article.excerpt}</p>
                  <span className="news-read-more">Weiterlesen →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bleib informiert CTA */}
      <section className="section-dark">
        <div className="container">
          <div className="cta-content-center">
            <h2 className="section-heading text-white">Bleib informiert</h2>
            <p className="section-text text-white">
              Kontakt aufnehmen und immer aktuell bleiben
            </p>
            <Link href="/kontakt" className="btn-white">
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
