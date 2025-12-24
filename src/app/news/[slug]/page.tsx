import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getNewsBySlug, getAllNews } from '@/lib/news';

export function generateStaticParams() {
  const articles = getAllNews();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

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
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={600}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-white">
        <div className="container">
          <div className="article-content-wrapper">
            <div 
              className="article-content-markdown"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>').replace(/## (.*?)\n/g, '</p><h2>$1</h2><p>') }}
            />
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
