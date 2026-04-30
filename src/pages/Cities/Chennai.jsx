import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Chennai = () => {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Advocates in Chennai — MLawyer</title>
        <meta name="description" content="Find verified advocates and book online legal consultations in Chennai. Expert lawyers across practice areas." />
        <link rel="canonical" href="https://www.mlawyer.in/cities/chennai" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Advocates in Chennai</h1>
      <p className="text-gray-600 mb-6">Find verified, experienced advocates in Chennai for consultations, documentation and case support.</p>

      <Link to="/waitlist" className="inline-block bg-secondary text-white py-2 px-4 rounded-md">Find Lawyers in Chennai</Link>
    </main>
  );
};

export default Chennai;
