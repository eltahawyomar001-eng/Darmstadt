import Link from 'next/link';
import Image from 'next/image';
import { getAllNews } from '@/lib/news';

export default function NewsPage() {
  const articles = getAllNews();

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero-image">
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
              <Link href={`/news/${article.slug}`} key={article.slug} className="news-article-card">
                <div className="news-article-image">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
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
      <section className="section-cta-image">
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
