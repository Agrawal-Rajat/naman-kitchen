import React from 'react';
import { Helmet } from '../../utils/Helmet';
import ContactHero from './ContactHero';
import ConsultationForm from './ConsultationForm';
import ContactInfoCards from './ContactInfoCards';
import FranchiseOpportunity from './FranchiseOpportunity';
import ContactFaq from './ContactFaq';

export default function Contact() {
  return (
    <>
      <Helmet
        title="Book a Kitchen Consultation | Naman Kitchen Studio"
        description="Schedule a modular kitchen design consultation in Indore and Madhya Pradesh. Free floor plan review, transparent cost estimates, and franchise partnership opportunities."
      />
      <ContactHero />
      <div className="section-spacing bg-[var(--color-ivory)]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
            <div className="lg:col-span-5">
              <ContactInfoCards />
            </div>
          </div>
        </div>
      </div>
      <ContactFaq />
      <FranchiseOpportunity />
    </>
  );
}
