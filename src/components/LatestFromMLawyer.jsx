import React, { useEffect } from 'react';
import PopIn from './animations/PopIn';

const LatestFromMLawyer = () => {
  useEffect(() => {
    // Inject the LightWidget responsive helper script
    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <PopIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Latest from <span className="text-secondary">MLawyer</span>
            </h2>
          </PopIn>
          <PopIn delay={0.1}>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
              Stay updated with our latest legal tips, interactive discussions, and client advice directly from our Instagram.
            </p>
          </PopIn>
        </div>

        <PopIn delay={0.2} className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-md">
          <iframe
            src="https://lightwidget.com/widgets/8c59861db41e57a6893d3150fe5940f2.html"
            scrolling="no"
            allowTransparency="true"
            className="lightwidget-widget w-full"
            style={{ width: '100%', border: 0, overflow: 'hidden' }}
            title="Instagram Feed"
          />
        </PopIn>
      </div>
    </section>
  );
};

export default LatestFromMLawyer;
