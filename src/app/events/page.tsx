'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getAllEvents } from '@/data/events';

const CalendarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <>
      {/* Hero Section */}
      <section className="page-hero-image">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="page-hero-title">Events & Termine</h1>
            <p className="page-hero-subtitle">
              Alle kommenden Rennveranstaltungen und wichtige Termine der Saison 2025 im Überblick.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List Section */}
      <section className="section-white">
        <div className="container">
          <div className="events-page-grid">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="event-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="event-date-block">
                  <span className="event-weekday">{event.weekday}</span>
                  <span className="event-day">{event.day}</span>
                  <span className="event-month">{event.month}</span>
                </div>
                <div className="event-info">
                  <div className="event-header">
                    <h3 className="event-title">{event.title}</h3>
                    {event.badge && <span className="event-badge">{event.badge}</span>}
                  </div>
                  <p className="event-description">{event.description}</p>
                  <div className="event-location">
                    <MapPinIcon />
                    <span>{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-cta-image">
        <div className="container">
          <div className="cta-content-center">
            <h2 className="section-heading text-white">Interesse an Rennbetreuung?</h2>
            <p className="section-text text-white">
              Wir unterstützen Sie bei Rennen mit professioneller Betreuung und technischem Service.
            </p>
            <Link href="/kontakt" className="btn-white">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
