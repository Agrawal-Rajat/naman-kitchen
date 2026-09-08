import React from 'react';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

export default function BrandPartners() {
  const partners = [
    {
      name: 'Action Tesa',
      category: 'HDMR Boards & Substrates',
      detail: 'India’s pioneer in high-density moisture-resistant engineered panels for termite-proof cabinetry.',
    },
    {
      name: 'Skydecor',
      category: 'Decorative Acrylic & PVC Laminates',
      detail: 'Premium surface finishes engineered for stain resistance, zero maintenance, and rich aesthetic textures.',
    },
    {
      name: 'Ozone',
      category: 'Architectural Hardware & Hinges',
      detail: 'Internationally benchmarked soft-close mechanisms, gas-struts, and high-load drawer channels.',
    },
    {
      name: 'Asian Paints Adhesives',
      category: 'Water-Resistant Adhesives & Sealants',
      detail: 'Durable adhesive bonds guaranteeing edge-banding and panel laminations stay permanently intact.',
    },
  ];

  return (
    <section className="section-spacing bg-[var(--color-ivory)]">
      <div className="container-site">
        <SectionHeading
          eyebrow="Associated Brands"
          title="आज Naman Kitchen इन प्रतिष्ठित ब्रांड्स के साथ कार्य करता है"
          subtitle="Our partnerships with India’s leading infrastructure material brands ensure your kitchen withstands decades of everyday use."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-subtle flex flex-col justify-between h-full hover:shadow-card transition-all">
                <div>
                  <div className="text-xl font-medium text-[var(--color-espresso)] mb-1">
                    {partner.name}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-naman-red)] mb-3">
                    {partner.category}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed">
                    {partner.detail}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-black/5 text-[11px] font-semibold text-[var(--color-naman-indigo)]">
                  ✓ Authorized Quality Standard
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
