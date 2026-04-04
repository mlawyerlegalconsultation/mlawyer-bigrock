import Hero from './Sections/Hero';
import ProblemSolution from './Sections/ProblemSolution';
import HowItWorks from './Sections/HowItWorks';
import Services from './Sections/Services';
import Security from './Sections/Security';
import FAQ from './Sections/FAQ';
import CTA from './Sections/CTA';

import Seo from '../../components/Seo';
import Breadcrumb from '../../components/Breadcrumb';

const Customer = () => {
    return (
        <main className="flex flex-col min-h-screen">
            <Seo
                title="Find Top-Rated Lawyers | MLawyer for Clients"
                description="Connect with experienced attorneys for any legal matter. Browse profiles, read reviews, and book consultations instantly."
                keywords="hire a lawyer, find attorney, legal services, legal help for clients, lawyer near me, consultation, legal advice online"
            />
            <Breadcrumb items={[{ label: 'Customer Services' }]} />
            <Hero />
            <ProblemSolution />
            <HowItWorks />
            <Services />
            <Security />
            <FAQ />
            <CTA />
        </main>
    );
};

export default Customer;
