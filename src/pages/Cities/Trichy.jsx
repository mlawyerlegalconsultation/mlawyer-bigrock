import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Trichy = () => {
  return (
    <main className="container mx-auto px-6 py-16">
      <Helmet>
        <title>Advocates in Trichy — MLawyer</title>
        <meta name="description" content="Find verified advocates and book online legal consultations in Trichy." />
        <link rel="canonical" href="https://www.mlawyer.in/cities/trichy" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Advocates in Trichy</h1>
      <p className="text-gray-600 mb-6">Trusted advocates serving clients in Trichy across practice areas.</p>

      <Link to="/waitlist" className="inline-block bg-secondary text-white py-2 px-4 rounded-md">Find Lawyers in Trichy</Link>
    </main>
  );
};

export default Trichy;
