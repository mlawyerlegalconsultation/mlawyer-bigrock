import React from 'react';
import CustomerHowItWorks from './CustomerHowItWorks';

import Seo from '../../components/Seo';

const HowItWorks = () => {
    return (
        <div className="flex flex-col w-full">
            <Seo
                title="How MLawyer Works | Simple & Fast Legal Help"
                description="See how easy it is to find a lawyer, book a consultation, and get legal advice. Learn about the MLawyer process for clients and lawyers."
                keywords="how MLawyer works, legal process, book a lawyer guide, online legal consultation steps, finding an attorney"
            />
            <CustomerHowItWorks />
        </div>
    );
};

export default HowItWorks;
