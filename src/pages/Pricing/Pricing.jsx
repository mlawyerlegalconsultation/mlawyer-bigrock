import React from 'react';
import LawyerPricing from './LawyerPricing';
import ClientPricing from './ClientPricing';
import { useRole } from '../../context/RoleContext';

import Seo from '../../components/Seo';

const Pricing = () => {
    const { userRole } = useRole();
    return (
        <div className="flex flex-col w-full">
            <Seo
                title="MLawyer Pricing - Affordable Legal Plans"
                description="Transparent pricing for clients and lawyers. Choose the plan that fits your needs, from one-time consultations to subscription packages."
                keywords="lawyer fees, legal consultation cost, attorney pricing, MLawyer plans, legal subscription, affordable legal help"
            />
            {userRole === "lawyer" && <LawyerPricing />}
            {userRole !== "lawyer" && <ClientPricing />}
        </div>
    );
};

export default Pricing;
