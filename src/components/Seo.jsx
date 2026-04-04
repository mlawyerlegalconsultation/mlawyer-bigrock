
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Seo = ({ title, description, keywords, canonical }) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  canonical: PropTypes.string,
};

export default Seo;
