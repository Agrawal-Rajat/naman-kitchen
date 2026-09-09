import React from 'react';
import { Helmet } from '../../utils/Helmet';
import Hero from './Hero';
import BrandStatement from './BrandStatement';
import KitchenLayoutExplorer from './KitchenLayoutExplorer';
import FeaturedProjects from './FeaturedProjects';
import HardwareStorage from './HardwareStorage';
import WhyNamanKitchen from './WhyNamanKitchen';
import ProcessTimeline from './ProcessTimeline';

import TestimonialsSection from './TestimonialsSection';
import ConsultationCta from './ConsultationCta';

export default function Home() {
  return (
    <>
      <Helmet
        title="Naman Kitchen Studio | Modular Kitchens in Indore & MP"
        description="Smart Designs. Quality Craftsmanship. Kitchens Made for Life. Founded in 2017 by Shri Akashdeep Gupta. Explore L-shaped, straight, parallel, U-shaped and island modular kitchens in Indore."
      />
      <Hero />
      <BrandStatement />
      <KitchenLayoutExplorer />
      <FeaturedProjects />
      <HardwareStorage />
      <WhyNamanKitchen />
      <ProcessTimeline />

      <TestimonialsSection />
      <ConsultationCta />
    </>
  );
}
