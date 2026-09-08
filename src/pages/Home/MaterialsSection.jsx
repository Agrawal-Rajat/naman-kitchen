import React from 'react';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

export default function MaterialsSection() {
  const materials = [
    {
      title: 'Action Tesa HDMR Boards',
      description: 'Boiling waterproof and borer/termite resistant substrate engineered specifically for Indian moisture and spice-heavy cooking conditions.',
      tag: 'Carcass & Core',
      tone: 'bg-amber-900/10 text-amber-900',
    },
    {
      title: 'Skydecor Acrylic & Laminates',
      description: 'Zero-maintenance, scratch-resistant surfaces offering seamless matte, gloss, and authentic fluted architectural textures.',
      tag: 'Shutters & Panels',
      tone: 'bg-blue-900/10 text-blue-900',
    },
    {
      title: 'Engineered Quartz & Stone',
      description: 'Non-porous, stain-proof countertops designed to withstand turmeric, oil stains, and boiling cookware effortlessly.',
      tag: 'Countertop',
      tone: 'bg-stone-900/10 text-stone-900',
    },
    {
      title: 'Ozone Architectural Hardware',
      description: 'Heavy-duty soft-close hinges, gas springs, and profile handles tested for 100,000+ flawless open-close cycles.',
      tag: 'Mechanisms',
      tone: 'bg-red-900/10 text-red-900',
    },
  ];

  return (
    <section className="section-spacing bg-[var(--color-ivory)] shape-backsplash relative">
      <div className="container-site relative z-10">
        <SectionHeading
          eyebrow="Material Integrity"
          title="Engineered to Resist Water, Spices & Time"
          subtitle="Indian cooking involves high heat, spices, and heavy usage. We never compromise on raw materials, using exclusively certified moisture-resistant grades."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((item, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-subtle flex flex-col justify-between h-full hover:border-[var(--color-naman-indigo)]/40 transition-colors">
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-3 ${item.tone}`}>
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-medium text-[var(--color-espresso)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-black/5 text-[11px] font-semibold text-[var(--color-warm-gray)]">
                  Certified Safe & Durable
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
