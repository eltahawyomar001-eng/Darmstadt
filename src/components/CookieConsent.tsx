'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const necessary = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(necessary));
    setShowBanner(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="cookie-banner">
        <div className="cookie-banner-content">
          <div className="cookie-text">
            <h3>Cookie-Einstellungen</h3>
            <p>
              Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
              Sie können Ihre Einstellungen jederzeit anpassen.{' '}
              <Link href="/datenschutz">Mehr erfahren</Link>
            </p>
          </div>
          <div className="cookie-actions">
            <button onClick={() => setShowSettings(true)} className="cookie-btn-outline">
              Einstellungen
            </button>
            <button onClick={acceptNecessary} className="cookie-btn-outline">
              Nur notwendige
            </button>
            <button onClick={acceptAll} className="cookie-btn-primary">
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="cookie-modal-overlay" onClick={() => setShowSettings(false)}>
          <div className="cookie-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cookie-modal-header">
              <h2>Cookie-Einstellungen</h2>
              <button onClick={() => setShowSettings(false)} className="cookie-modal-close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="cookie-modal-body">
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div>
                    <h4>Notwendige Cookies</h4>
                    <p>Diese Cookies sind für das Funktionieren der Website erforderlich.</p>
                  </div>
                  <label className="cookie-toggle disabled">
                    <input type="checkbox" checked={true} disabled />
                    <span className="cookie-toggle-slider"></span>
                  </label>
                </div>
              </div>
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div>
                    <h4>Analyse Cookies</h4>
                    <p>Helfen uns zu verstehen, wie Besucher unsere Website nutzen.</p>
                  </div>
                  <label className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    />
                    <span className="cookie-toggle-slider"></span>
                  </label>
                </div>
              </div>
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div>
                    <h4>Marketing Cookies</h4>
                    <p>Werden verwendet, um relevante Werbung anzuzeigen.</p>
                  </div>
                  <label className="cookie-toggle">
                    <input 
                      type="checkbox" 
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    />
                    <span className="cookie-toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="cookie-modal-footer">
              <button onClick={savePreferences} className="cookie-btn-primary">
                Einstellungen speichern
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
