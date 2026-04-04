import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const AdvocateWaitlist = () => {
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
        <title>Advocate Waitlist | MLawyer</title>
        <meta
          name="description"
          content="Join the MLawyer advocate waitlist and grow your legal practice with verified online consultations."
        />
        <link rel="canonical" href="https://www.mlawyer.in/waitlist/advocate" />
        <script src="https://tally.so/widgets/embed.js"></script>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6">
        <iframe
          data-tally-src="https://tally.so/embed/q4W4x7?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="868"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Join The Waitlist"
        ></iframe>
      </div>
    </section>
  );
};

export default AdvocateWaitlist;
