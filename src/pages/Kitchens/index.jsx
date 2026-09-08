import React, { useState } from 'react';
import { Helmet } from '../../utils/Helmet';
import KitchensHero from './KitchensHero';
import KitchenLayoutsGrid from './KitchenLayoutsGrid';
import KitchenDetailModal from './KitchenDetailModal';
import CustomModularSection from './CustomModularSection';
import KitchenConsultationCta from './KitchenConsultationCta';

export default function Kitchens() {
  const [selectedLayout, setSelectedLayout] = useState(null);

  return (
    <>
      <Helmet
        title="Modular Kitchen Designs & Layouts | Naman Kitchen"
        description="Explore L-shaped, straight, parallel, U-shaped, and island modular kitchen designs in Indore. Custom engineered with Action Tesa boards and precision soft-close hardware."
      />
      <KitchensHero />
      <KitchenLayoutsGrid onSelectLayout={(layout) => setSelectedLayout(layout)} />
      <CustomModularSection />
      <KitchenConsultationCta />

      {selectedLayout && (
        <KitchenDetailModal
          layout={selectedLayout}
          onClose={() => setSelectedLayout(null)}
        />
      )}
    </>
  );
}
