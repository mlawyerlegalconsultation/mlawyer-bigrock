import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const CustomerWaitlist = () => {
  useEffect(() => {
    const loadTallyEmbeds = () => {
      if (window.Tally && typeof window.Tally.loadEmbeds === 'function') {
        window.Tally.loadEmbeds();
      }
    };

    if (!window.Tally) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = loadTallyEmbeds;
      document.head.appendChild(script);
      return;
    }

    loadTallyEmbeds();
  }, []);

  return (
    <section className="py-8 min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Helmet>
        <title>Customer Waitlist | MLawyer</title>
        <meta
          name="description"
          content="Join the MLawyer customer waitlist for quick access to trusted legal consultations online."
        />
        <link rel="canonical" href="https://www.mlawyer.in/waitlist/customer" />
        <script src="https://tally.so/widgets/embed.js"></script>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6">
        <iframe
          data-tally-src="https://tally.so/embed/WOYJev?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="763"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Join The Waitlist"
        ></iframe>
      </div>
    </section>
  );
};

export default CustomerWaitlist;
