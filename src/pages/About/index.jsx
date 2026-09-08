import React from 'react';
import { Helmet } from '../../utils/Helmet';
import AboutHero from './AboutHero';
import FounderStory from './FounderStory';
import VideoShowcase from './VideoShowcase';
import BrandValues from './BrandValues';
import BrandPartners from './BrandPartners';
import CraftsmanshipStandards from './CraftsmanshipStandards';

export default function About() {
  return (
    <>
      <Helmet
        title="About Naman Kitchen | Founder Story & Craftsmanship"
        description="The story of Naman Kitchen — founded in Indore in 2017 by Shri Akashdeep Gupta. Life Long Partner commitment, 100% site accuracy, and master craftsmanship across Madhya Pradesh."
      />
      <AboutHero />
      <FounderStory />
      <VideoShowcase />
      <BrandValues />
      <BrandPartners />
      <CraftsmanshipStandards />
    </>
  );
}
