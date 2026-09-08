import React, { useState } from 'react';
import { Helmet } from '../../utils/Helmet';
import HardwareHero from './HardwareHero';
import HardwareCategoryNav from './HardwareCategoryNav';
import HardwareGrid from './HardwareGrid';
import HardwareFeatureHighlight from './HardwareFeatureHighlight';
import HardwareConsultationCta from './HardwareConsultationCta';

export default function Hardware() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <Helmet
        title="Kitchen Hardware & Storage Solutions | Naman Kitchen"
        description="Premium kitchen hardware in Indore — soft-close drawers, tandem systems, corner storage solutions, tall units, and cutlery organizers engineered for Indian kitchens."
      />
      <HardwareHero />
      <div className="container-site">
        <HardwareCategoryNav
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />
      </div>
      <HardwareGrid activeCategory={activeCategory} />
      <HardwareFeatureHighlight />
      <HardwareConsultationCta />
    </>
  );
}
