import React from 'react';
import HIWHero from './Sections/HIWHero';
import StepByStep from './Sections/StepByStep';
import CustomerBenefits from './Sections/CustomerBenefits';
import TrustSafety from './Sections/TrustSafety';
import CustomerCTA from './Sections/CustomerCTA';

const CustomerHowItWorks = () => {
    return (
        <div className="flex flex-col w-full">
            <HIWHero />
            <StepByStep />
            <CustomerBenefits />
            {/* <TrustSafety /> */}
            <CustomerCTA />
        </div>
    );
};

export default CustomerHowItWorks;
