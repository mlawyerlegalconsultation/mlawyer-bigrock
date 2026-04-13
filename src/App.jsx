import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy load components
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
const Lawyer = lazy(() => import('./pages/Lawyer/Lawyer'));
const HowItWorks = lazy(() => import('./pages/HowItWorks/HowItWorks'));
const Pricing = lazy(() => import('./pages/Pricing/Pricing'));
const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Download = lazy(() => import('./pages/Download/Download'));
const Waitlist = lazy(() => import('./pages/Waitlist/Waitlist'));
const NotFound = lazy(() => import('./pages/NotFound'));

import './App.css';

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
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
          <Route path="customer">
            <Route index element={<Customer />} />
            <Route path="family-lawyer" element={<FamilyLaw />} />
            <Route path="online-legal-consultation" element={<PropertyLaw />} />
            <Route path="legal-criminal-lawyer" element={<CriminalLaw />} />
            <Route path="best-corporate-lawyers" element={<CorporateLaw />} />
            <Route path="consumer-right-lawyer-app" element={<ConsumerRight />} />
            <Route path="labour-lawyer-advisor" element={<LabourLaw />} />
          </Route>
          <Route path="lawyer" element={<Lawyer />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="download" element={<Download />} />
          <Route path="waitlist" element={<Waitlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App
