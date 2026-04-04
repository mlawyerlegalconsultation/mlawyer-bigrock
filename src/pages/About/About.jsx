import React from 'react';
import Hero from './Sections/Hero';
import Features from './Sections/Features';
import Mission from './Sections/Mission';
import AboutCTA from './Sections/AboutCTA';

import Seo from '../../components/Seo';

const About = () => {
    return (
        <div className="flex flex-col">
            <Seo
                title="About MLawyer | Our Mission to Democratize Legal Access"
                description="We are on a mission to make legal help accessible, affordable, and transparent for everyone. Learn about our team and vision."
                keywords="about MLawyer, legal tech company, legal access mission, law startup, connect with lawyers, legal technology team"
            />
            <Hero />
            <Features />
            {/* <Mission /> */}
            <AboutCTA />
        </div>
    );
};

export default About;
