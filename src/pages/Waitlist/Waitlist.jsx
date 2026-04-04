import React from 'react';
import { Helmet } from 'react-helmet-async';
import WaitlistHero from './Sections/WaitlistHero';

const Waitlist = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Join MLawyer Waitlist | Online Legal Consultation Platform</title>
        <meta
          name="description"
          content="Join the MLawyer waitlist to be among the first to access our online legal consultation platform. Connect with verified advocates and qualified legal professionals."
        />
        <meta
          name="keywords"
          content="MLawyer waitlist, legal consultation platform, verified advocates, online lawyer"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.mlawyer.in/waitlist" />
      </Helmet>
      <WaitlistHero />
    </div>
  );
};

export default Waitlist;
