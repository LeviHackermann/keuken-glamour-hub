
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/sections/HeroSection';
import CompanySection from '@/components/sections/CompanySection';
import ShowroomSection from '@/components/sections/ShowroomSection';
import EcoSection from '@/components/sections/EcoSection';
import CollectionSection from '@/components/sections/CollectionSection';
import ContactSection from '@/components/sections/ContactSection';

const Index: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash linking for smooth scrolling
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Keukenhelden - Uw Exclusieve Keukenspecialist</title>
        <meta name="description" content="Bij Keukenhelden vindt u hoogwaardige keukens in diverse kleuren en materialen, perfect afgestemd op uw wensen en interieur. Belgisch keukenassortiment van hoge kwaliteit." />
        <meta name="keywords" content="keukens, keuken, keukenhelden, duurzame keukens, CO2-neutraal, ECO keukens, Belgische keukens" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.dekeukenhelden.be" />
        <meta property="og:title" content="Keukenhelden - Uw Exclusieve Keukenspecialist" />
        <meta property="og:description" content="Bij Keukenhelden vindt u hoogwaardige keukens in diverse kleuren en materialen, perfect afgestemd op uw wensen en interieur." />
        <meta property="og:url" content="https://www.dekeukenhelden.be" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.dekeukenhelden.be/og-image.jpg" />
      </Helmet>

      <div className="pt-16">
        <HeroSection />
        
        <section id="company" className="py-16 scroll-mt-24">
          <CompanySection />
        </section>
        
        <section id="eco" className="py-16 bg-gray-50 scroll-mt-24">
          <EcoSection />
        </section>
        
        <section id="collection" className="py-16 scroll-mt-24">
          <CollectionSection />
        </section>
        
        <section id="showroom" className="py-16 bg-gray-50 scroll-mt-24">
          <ShowroomSection />
        </section>
        
        <section id="contact" className="py-16 scroll-mt-24">
          <ContactSection />
        </section>
      </div>
    </>
  );
};

export default Index;
