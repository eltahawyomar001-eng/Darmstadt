'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Set the config path before loading CMS
    (window as unknown as { CMS_MANUAL_INIT: boolean }).CMS_MANUAL_INIT = true;
    
    // Dynamically load Decap CMS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
    script.async = true;
    script.onload = () => {
      // Initialize CMS with explicit config path
      const CMS = (window as unknown as { CMS: { init: (config: { config: { load_config_file: boolean; backend: object; media_folder: string; public_folder: string; locale: string; collections: object[] } }) => void } }).CMS;
      
      CMS.init({
        config: {
          load_config_file: false,
          backend: {
            name: 'github',
            repo: 'eltahawyomar001-eng/Darmstadt',
            branch: 'main',
            base_url: 'https://darmstadt.vercel.app',
            auth_endpoint: '/api/auth',
          },
          media_folder: 'public/uploads',
          public_folder: '/uploads',
          locale: 'de',
          collections: [
            {
              name: 'news',
              label: 'News Artikel',
              folder: 'content/news',
              create: true,
              slug: '{{slug}}',
              fields: [
                { label: 'Titel', name: 'title', widget: 'string' },
                { label: 'Kurzbeschreibung', name: 'excerpt', widget: 'text' },
                { label: 'Datum', name: 'date', widget: 'datetime', date_format: 'YYYY-MM-DD' },
                { label: 'Autor', name: 'author', widget: 'string', default: 'NB Motorsport Team' },
                { label: 'Kategorie', name: 'category', widget: 'select', options: ['Allgemein', 'Team', 'Rennen', 'Produkte'] },
                { label: 'Bild', name: 'image', widget: 'image' },
                { label: 'Inhalt', name: 'body', widget: 'markdown' },
              ],
            },
            {
              name: 'events',
              label: 'Rennkalender',
              folder: 'content/events',
              create: true,
              slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
              fields: [
                { label: 'Titel', name: 'title', widget: 'string' },
                { label: 'Datum Start', name: 'dateStart', widget: 'datetime', date_format: 'YYYY-MM-DD' },
                { label: 'Datum Ende', name: 'dateEnd', widget: 'datetime', date_format: 'YYYY-MM-DD', required: false },
                { label: 'Ort', name: 'location', widget: 'string' },
                { label: 'Serie', name: 'series', widget: 'select', options: ['ADAC Kart Masters', 'ADAC Kart Cup', 'DKM', 'Rotax Max', 'IAME X30', 'Training', 'Sonstige'] },
                { label: 'Status', name: 'status', widget: 'select', options: ['upcoming', 'completed'], default: 'upcoming' },
                { label: 'Beschreibung', name: 'description', widget: 'text', required: false },
              ],
            },
          ],
        },
      });
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        /* Hide the Next.js layout for admin */
        nav, footer, header {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
