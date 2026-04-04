import React from 'react';
import LawyerHero from './Sections/LawyerHero';
import WhyChooseLawyer from './Sections/WhyChooseLawyer';
import HowItWorksLawyer from './Sections/HowItWorksLawyer';
import Requirements from './Sections/Requirements';
import PracticeAreas from './Sections/PracticeAreas';
import LawyerFAQ from './Sections/LawyerFAQ';
import LawyerCTA from './Sections/LawyerCTA';

import Seo from '../../components/Seo';

const Lawyer = () => {
    return (
        <div className="flex flex-col w-full">
            <Seo
                title="Join MLawyer | Grow Your Legal Practice"
                description="Expand your client base and manage your practice effortlessly. Connect with clients seeking legal help and get paid securely."
                keywords="lawyer jobs, grow law practice, legal leads, attorney network, online legal practice, lawyer sign up, legal platform for lawyers"
            />
            <LawyerHero />
            <WhyChooseLawyer />
            <HowItWorksLawyer />
            {/* <Requirements /> */}
            <PracticeAreas />
            <LawyerFAQ />
            <LawyerCTA />
        </div>
    );
};

export default Lawyer;
