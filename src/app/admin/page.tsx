'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Load Decap CMS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
    document.body.appendChild(script);
  }, []);

  return null;
}
