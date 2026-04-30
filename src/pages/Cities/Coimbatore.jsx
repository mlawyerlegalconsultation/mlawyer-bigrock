import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Coimbatore = () => {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Advocates in Coimbatore — MLawyer</title>
        <meta name="description" content="Find verified advocates and book online legal consultations in Coimbatore." />
        <link rel="canonical" href="https://www.mlawyer.in/cities/coimbatore" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Advocates in Coimbatore</h1>
      <p className="text-gray-600 mb-6">Search verified advocates in Coimbatore for consultations and legal support.</p>

      <Link to="/waitlist" className="inline-block bg-secondary text-white py-2 px-4 rounded-md">Find Lawyers in Coimbatore</Link>
    </main>
  );
};

export default Coimbatore;
