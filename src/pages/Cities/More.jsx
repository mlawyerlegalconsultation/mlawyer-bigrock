import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MoreCities = () => {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Advocates in Tamil Nadu Cities — MLawyer</title>
        <meta name="description" content="Explore advocates across multiple cities. Find local legal experts and book online consultations." />
        <link rel="canonical" href="https://www.mlawyer.in/cities" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Advocates in Other Cities</h1>
      <p className="text-gray-600 mb-6">We serve many cities. Select a city to find local advocates and book a consultation.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/cities/salem" className="block p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">Salem</Link>
        <Link to="/cities/erode" className="block p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">Erode</Link>
        <Link to="/cities/vellore" className="block p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">Vellore</Link>
      </div>
    </main>
  );
};

export default MoreCities;
