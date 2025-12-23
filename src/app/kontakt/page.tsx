'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from '@/components/icons/Icons';

export default function KontaktPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.div 
            className="page-hero-content"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="page-hero-title">Kontakt</h1>
            <p className="page-hero-subtitle">
              Wir freuen uns auf Ihre Nachricht und beraten Sie gerne persönlich.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-white">
        <div className="container">
          <div className="contact-wrapper">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="contact-card">
                <div className="contact-card-icon">
                  <MapPinIcon />
                </div>
                <div className="contact-card-content">
                  <h3>Adresse</h3>
                  <p>MR Motorsport<br/>Musterstraße 123<br/>64283 Darmstadt</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <PhoneIcon />
                </div>
                <div className="contact-card-content">
                  <h3>Telefon</h3>
                  <p>+49 6151 123456</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <MailIcon />
                </div>
                <div className="contact-card-content">
                  <h3>E-Mail</h3>
                  <p>info@mr-motorsport.de</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <ClockIcon />
                </div>
                <div className="contact-card-content">
                  <h3>Öffnungszeiten</h3>
                  <p>Mo–Fr: 9:00–18:00 Uhr<br/>Sa: 10:00–14:00 Uhr</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>Schreiben Sie uns</h2>
              <p>Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.</p>
              <form>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" placeholder="Ihr vollständiger Name" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">E-Mail</label>
                  <input type="email" placeholder="ihre.email@beispiel.de" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Betreff</label>
                  <input type="text" placeholder="Worum geht es?" className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">Nachricht</label>
                  <textarea placeholder="Ihre Nachricht an uns..." rows={5} className="form-input form-textarea"></textarea>
                </div>
                <button type="submit">Nachricht senden</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
