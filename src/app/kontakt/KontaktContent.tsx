'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from '@/components/icons/Icons';
import { KontaktPageContent } from '@/lib/pages';

interface KontaktContentProps {
  content: KontaktPageContent;
}

export default function KontaktContent({ content }: KontaktContentProps) {
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
            <h1 className="page-hero-title">{content.heroTitle}</h1>
            <p className="page-hero-subtitle">
              {content.heroText}
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
                  <h3>{content.addressLabel}</h3>
                  <p>{content.companyName}<br/>{content.address}<br/>{content.city}</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <PhoneIcon />
                </div>
                <div className="contact-card-content">
                  <h3>{content.phoneLabel}</h3>
                  <p>{content.phone}</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <MailIcon />
                </div>
                <div className="contact-card-content">
                  <h3>{content.emailLabel}</h3>
                  <p>{content.email}</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <ClockIcon />
                </div>
                <div className="contact-card-content">
                  <h3>{content.hoursLabel}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{content.openingHours}</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>{content.formTitle}</h2>
              <p>{content.formText}</p>
              <form>
                <div className="form-group">
                  <label className="form-label">{content.formNameLabel}</label>
                  <input type="text" placeholder={content.formNamePlaceholder} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">{content.formEmailLabel}</label>
                  <input type="email" placeholder={content.formEmailPlaceholder} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">{content.formSubjectLabel}</label>
                  <input type="text" placeholder={content.formSubjectPlaceholder} className="form-input" />
                </div>
                <div className="form-group">
                  <label className="form-label">{content.formMessageLabel}</label>
                  <textarea placeholder={content.formMessagePlaceholder} rows={5} className="form-input form-textarea"></textarea>
                </div>
                <button type="submit">{content.formButtonText}</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
