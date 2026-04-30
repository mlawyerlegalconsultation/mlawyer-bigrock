import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Tirunelveli = () => {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Advocates in Tirunelveli — MLawyer</title>
        <meta name="description" content="Find verified advocates and book online legal consultations in Tirunelveli." />
        <link rel="canonical" href="https://www.mlawyer.in/cities/tirunelveli" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Advocates in Tirunelveli</h1>
      <p className="text-gray-600 mb-6">Local legal support and consultations in Tirunelveli.</p>

      <Link to="/waitlist" className="inline-block bg-secondary text-white py-2 px-4 rounded-md">Find Lawyers in Tirunelveli</Link>
    </main>
  );
};

export default Tirunelveli;
