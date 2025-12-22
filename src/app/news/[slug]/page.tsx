import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getAllArticles } from '@/data/news';

const ImagePlaceholder = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="48" height="40" rx="4"/>
    <circle cx="22" cy="26" r="4"/>
    <path d="M8 44L20 32L32 44L44 28L56 44"/>
  </svg>
);

export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.id,
  }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Article Hero */}
      <section className="article-hero">
        <div className="container">
          <div className="article-hero-breadcrumb">
            <Link href="/news" className="breadcrumb-link">← Zurück zu News</Link>
          </div>
          <div className="article-hero-content">
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
            <h1 className="article-hero-title">{article.title}</h1>
            <p className="article-hero-excerpt">{article.excerpt}</p>
            <div className="article-author">
              <span>Von {article.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="section-white">
        <div className="container">
          <div className="article-featured-image">
            <div className="image-placeholder">
              <ImagePlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-white">
        <div className="container">
          <div className="article-content-wrapper">
            <div className="article-intro">
              <p>{article.content.intro}</p>
            </div>
            
            {article.content.sections.map((section, index) => (
              <div key={index} className="article-section">
                {section.heading && <h2>{section.heading}</h2>}
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to News CTA */}
      <section className="section-light-blue">
        <div className="container">
          <div className="article-back-cta">
            <Link href="/news" className="btn-primary">
              ← Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
