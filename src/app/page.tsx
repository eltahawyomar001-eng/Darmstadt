import Link from 'next/link';
import Image from 'next/image';
import { getAllNews } from '@/lib/news';
import { getUpcomingEvents } from '@/lib/events';
import { getHomepageContent } from '@/lib/pages';

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function HomePage() {
  const content = getHomepageContent();

  // Get news from centralized data source
  const allNews = getAllNews();
  const latestNews = allNews.slice(0, 3);

  // Get events from centralized data source
  const upcomingEvents = getUpcomingEvents(3);

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" style={{ whiteSpace: 'pre-line' }}>
              {content.heroTitle}
            </h1>
            <p className="hero-text">
              {content.heroText}
            </p>
            <div className="hero-buttons">
              <Link href="/chassis" className="btn-white">{content.heroButtonPrimary}</Link>
              <Link href="/kontakt" className="btn-outline-white">{content.heroButtonSecondary}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="features">
        <div className="container">
          <div className="features-layout">
            <div className="features-left">
              <div className="features-grid">
                {content.features?.map((feature) => {
                  return (
                    <div key={feature.title} className="feature-card">
                      <div className="feature-icon">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={feature.iconImage} 
                          alt={feature.title}
                          width={48}
                          height={48}
                          style={{ width: '48px', height: '48px' }}
                        />
                      </div>
                      <h3 className="feature-title">{feature.title}</h3>
                      <p className="feature-text">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
              <div className="features-links">
                <Link href="/chassis" className="link-arrow">
                  Mehr erfahren <ArrowRight />
                </Link>
              </div>
            </div>
            <div className="features-image">
              <Image
                src="/2.jpeg"
                alt="Kart Racing"
                width={600}
                height={500}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NEWS SECTION ==================== */}
      <section className="news">
        <div className="container">
          <div className="news-header">
            <span className="section-label">{content.newsLabel}</span>
            <h2 className="section-title">{content.newsTitle}</h2>
            <p className="section-subtitle">{content.newsSubtitle}</p>
          </div>
          <div className="news-grid">
            {latestNews.map((article) => (
              <article key={article.slug} className="news-card">
                <div className="news-image">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-category">{article.category}</span>
                    <span className="news-date">
                      {new Date(article.date).toLocaleDateString('de-DE', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="news-title">{article.title}</h3>
                  <p className="news-excerpt">{article.excerpt}</p>
                  <Link href={`/news/${article.slug}`} className="link-arrow">
                    Mehr <ArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="news-footer">
            <Link href="/news" className="btn-outline-dark">{content.newsButtonText}</Link>
          </div>
        </div>
      </section>

      {/* ==================== EVENTS SECTION ==================== */}
      <section className="events">
        <div className="container">
          <div className="events-header">
            <span className="section-label">{content.eventsLabel}</span>
            <h2 className="section-title">{content.eventsTitle}</h2>
            <p className="section-subtitle">{content.eventsSubtitle}</p>
          </div>
          {upcomingEvents.length > 0 ? (
            <>
              <div className="events-list">
                {upcomingEvents.map((event) => (
                  <div key={event.slug} className="event-card-home">
                    <div className="event-date-box">
                      <span className="event-weekday">{event.weekday}</span>
                      <span className="event-day">{event.day}</span>
                      <span className="event-month">{event.month}</span>
                    </div>
                    <div className="event-info">
                      <div className="event-title-row">
                        <h3 className="event-title">{event.title}</h3>
                        {event.badge && <span className="event-badge">{event.badge}</span>}
                      </div>
                      <p className="event-location">
                        <MapPinIcon /> {event.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="events-footer">
                <Link href="/events" className="btn-outline-dark">{content.eventsButtonText}</Link>
              </div>
            </>
          ) : (
            <div className="events-empty">
              <p>Veranstaltungen werden bald bekannt gegeben.</p>
            </div>
          )}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Bereit für die Rennstrecke?</h2>
            <p className="cta-text">Kontaktieren Sie uns für Chassis, Motoren oder Rennbetreuung</p>
            <Link href="/kontakt" className="btn-yellow">Kontakt</Link>
          </div>
        </div>
      </section>
    </>
  );
}
