import React from 'react';
import PricingHero from './Sections/PricingHero';
import PricingComparison from './Sections/PricingComparison';
import PricingHowItWorks from './Sections/PricingHowItWorks';

const ClientPricing = () => {
    return (
        <div className="flex flex-col w-full">
            <PricingHero />
            <PricingComparison />
            {/* <PricingHowItWorks /> */}
        </div>
    );
};

export default ClientPricing;
