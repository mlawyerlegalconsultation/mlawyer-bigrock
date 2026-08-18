import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import MainLayout from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home/Home'));
const AllBlogs = lazy(() => import('./pages/Blog/AllBlogs'));
const Blog = lazy(() => import('./pages/Blog/Blog'));
const Customer = lazy(() => import('./pages/Customer/Customer'));
const FamilyLaw = lazy(() => import('./pages/Services/FamilyLaw'));
const PropertyLaw = lazy(() => import('./pages/Services/PropertyLaw'));
const CriminalLaw = lazy(() => import('./pages/Services/CriminalLaw'));
const CorporateLaw = lazy(() => import('./pages/Services/CorporateLaw'));
const ConsumerRight = lazy(() => import('./pages/Services/ConsumerRight'));
const LabourLaw = lazy(() => import('./pages/Services/LabourLaw'));
const StartupLawyer = lazy(() => import('./pages/Services/StartupLawyer'));
const NRILegalSupport = lazy(() => import('./pages/Services/NRILegalSupport'));
const Lawyer = lazy(() => import('./pages/Lawyer/Lawyer'));
const HowItWorks = lazy(() => import('./pages/HowItWorks/HowItWorks'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Download = lazy(() => import('./pages/Download/Download'));
const Waitlist = lazy(() => import('./pages/Waitlist/Waitlist'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const RegisterAdvocate = lazy(() => import('./pages/RegisterAdvocate/RegisterAdvocate'));
const NotFound = lazy(() => import('./pages/NotFound'));

import './App.css';

const PageLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] bg-teal-50/20 dark:bg-gray-950/20">
    <Loader2 className="w-12 h-12 animate-spin text-primary dark:text-teal-400 mb-4" />
    <p className="text-primary/70 dark:text-gray-400 font-medium">Loading page...</p>
  </div>
);

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<AllBlogs />} />
          <Route path="blog/:slug" element={<Blog />} />
          <Route path="customer" element={<Customer />} />
          <Route path="family-lawyers" element={<FamilyLaw />} />
          <Route path="property-lawyers" element={<PropertyLaw />} />
          <Route path="legal-criminal-lawyers" element={<CriminalLaw />} />
          <Route path="best-corporate-lawyers" element={<CorporateLaw />} />
          <Route path="consumer-right-lawyer-app" element={<ConsumerRight />} />
          <Route path="labour-lawyer-advisor" element={<LabourLaw />} />
          <Route path="services">
            <Route path="startup-lawyer" element={<StartupLawyer />} />
            <Route path="nri-legal-support" element={<NRILegalSupport />} />
          </Route>
          <Route path="lawyer" element={<Lawyer />} />
          <Route path="register-advocate" element={<RegisterAdvocate />} />
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
    </Suspense>
  );
}

export default App

