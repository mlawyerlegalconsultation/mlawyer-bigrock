import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import AllBlogs from './pages/Blog/AllBlogs';
import Blog from './pages/Blog/Blog';
import Customer from './pages/Customer/Customer';
import FamilyLaw from './pages/Services/FamilyLaw';
import PropertyLaw from './pages/Services/PropertyLaw';
import CriminalLaw from './pages/Services/CriminalLaw';
import CorporateLaw from './pages/Services/CorporateLaw';
import ConsumerRight from './pages/Services/ConsumerRight';
import LabourLaw from './pages/Services/LabourLaw';
import StartupLawyer from './pages/Services/StartupLawyer';
import NRILegalSupport from './pages/Services/NRILegalSupport';
import Lawyer from './pages/Lawyer/Lawyer';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Pricing from './pages/Pricing/Pricing';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Download from './pages/Download/Download';
import Waitlist from './pages/Waitlist/Waitlist';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import NotFound from './pages/NotFound';

import MoreCities from './pages/Cities/More';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<AllBlogs />} />
        <Route path="blog/:slug" element={<Blog />} />
        <Route path="customer">
          <Route index element={<Customer />} />
          <Route path="family-lawyer" element={<FamilyLaw />} />
          <Route path="legal-criminal-lawyer" element={<CriminalLaw />} />
          <Route path="best-corporate-lawyers" element={<CorporateLaw />} />
          <Route path="consumer-right-lawyer-app" element={<ConsumerRight />} />
          <Route path="labour-lawyer-advisor" element={<LabourLaw />} />
        </Route>
        <Route path="property-lawyers" element={<PropertyLaw />} />
        <Route path="services">
          <Route path="startup-lawyer" element={<StartupLawyer />} />
          <Route path="nri-legal-support" element={<NRILegalSupport />} />
        </Route>
        <Route path="lawyer" element={<Lawyer />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="about-us" element={<About />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="download" element={<Download />} />
        <Route path="waitlist" element={<Waitlist />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App
