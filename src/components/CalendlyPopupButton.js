'use client';

import { useState, useEffect } from 'react';

export default function CalendlyPopupButton() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait until Calendly is defined
    const waitForCalendly = setInterval(() => {
      if (typeof window !== 'undefined' && window.Calendly) {
        setReady(true);
        clearInterval(waitForCalendly);
      }
    }, 200);

    return () => clearInterval(waitForCalendly);
  }, []);

  const handleClick = () => {
    if (window.Calendly) {
      // Close any existing Calendly widget just in case (prevents double)
      if (document.querySelector('.calendly-overlay')) {
        document.querySelector('.calendly-overlay').remove();
      }

      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/devtechfusion?hide_gdpr_banner=1',
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!ready}
      className={`px-6 py-3 rounded-lg font-semibold cursor-pointer transition hover:scale-105 ${
        ready
          ? 'bg-transparent backdrop-blur-sm border border-white text-white hover:bg-white hover:text-[#211951]'
          : 'bg-gray-400 text-gray-100 cursor-not-allowed'
      }`}
    >
      {ready ? 'Book Free Assessment' : 'Loading...'}
    </button>
  );
}
