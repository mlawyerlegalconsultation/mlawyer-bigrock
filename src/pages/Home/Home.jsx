import Hero from './Sections/Hero';
import ChennaiLegalConsultation from './Sections/ChennaiLegalConsultation';
import YoutubeShorts from './Sections/YoutubeShorts';
import TwoPath from './Sections/TwoPath';
import WhyChoose from './Sections/WhyChoose';
import Testimonials from './Sections/Testimonials';
import FAQ from './Sections/FAQ';
import DownloadApp from './Sections/DownloadApp';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Online Lawyer consultation App | Advocate in Chennai | Coimbatore - MLawyer</title>
        <meta
          name="description"
          content="Find expert advocates in Chennai and Coimbatore with our online lawyer consulting app. Get legal consultations and trusted advice anytime, anywhere."
        />
        <meta
          name="keywords"
          content="online lawyer consultation booking,best advocate in coimbatore, best advocate in chennai, best app for lawyers,find a lawyer app"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="Daily" />
        <meta name="document-type" content="Public" />
        <meta name="audience" content="all" />
        <meta name="googlebot" content="index,follow" />
        <meta name="geo.region" content="chennai,Coimbatore" />
        <meta name="msnbot" content="index,follow" />
        <meta name="allow-search" content="yes" />
        <link rel="canonical" href="https://www.mlawyer.in/" />
        <meta httpEquiv="content-language" content="en-us" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online Lawyer Consulting App | Advocate in Chennai | Coimbatore - MLawyer"
        />
        <meta property="og:url" content="https://www.mlawyer.in/" />
        <meta property="og:image" content="https://www.mlawyer.in/Logo.png" />
        <meta
          property="og:description"
          content="Find expert advocates in Chennai and Coimbatore with our online lawyer consulting app. Get legal consultations and trusted advice anytime, anywhere"
        />
        <meta
          name="twitter:title"
          content="Online Lawyer Consulting App | Advocate in Chennai | Coimbatore - MLawyer"
        />
        <meta
          name="twitter:description"
          content="Find expert advocates in Chennai and Coimbatore with our online lawyer consulting app. Get legal consultations and trusted advice anytime, anywhere"
        />
        <meta name="twitter:image" content="https://www.mlawyer.in/Logo.png" />
        <meta name="twitter:image:alt" content="Online-Lawyer-consultation-App" />
      </Helmet>
      <Hero />
      <ChennaiLegalConsultation />
      {/* <YoutubeShorts /> */}
      <TwoPath />
      <WhyChoose />
      <Testimonials />
      <DownloadApp />
      <FAQ />
    </div>
  );
};

export default Home;
