import React from 'react';
import DownloadCards from './Sections/DownloadCards';
import DownloadCTA from './Sections/DownloadCTA';

import Seo from '../../components/Seo';

const Download = () => {
    return (
        <div className="flex flex-col">
            <Seo
                title="Download MLawyer App | Legal Help on Mobile"
                description="Get the MLawyer app for iOS and Android. Find lawyers, book consultations, and manage legal matters from your phone."
                keywords="download legal app, MLawyer apk, ios lawyer app, android legal app, mobile attorney app, legal help app"
            />
            <DownloadCards />
            <DownloadCTA />
        </div>
    );
};

export default Download;
