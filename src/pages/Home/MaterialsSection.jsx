import React from 'react';
import { Shield, Sparkles, Droplets, Wrench, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

export default function MaterialsSection() {
  const materials = [
    {
      title: 'Action Tesa HDMR Boards',
      description: 'Boiling waterproof and borer/termite resistant substrate engineered specifically for Indian moisture and spice-heavy cooking conditions.',
      tag: 'Carcass & Core',
      icon: Shield,
      spec: '100% Water Resistant',
    },
    {
      title: 'Skydecor Acrylic & Laminates',
      description: 'Zero-maintenance, scratch-resistant surfaces offering seamless matte, gloss, and authentic fluted architectural textures.',
      tag: 'Shutters & Panels',
      icon: Sparkles,
      spec: 'Anti-Scratch Coating',
    },
    {
      title: 'Engineered Quartz & Stone',
      description: 'Non-porous, stain-proof countertops designed to withstand turmeric, oil stains, and boiling cookware effortlessly.',
      tag: 'Countertop',
      icon: Droplets,
      spec: 'Stain & Heat Proof',
    },
    {
      title: 'Ozone Architectural Hardware',
      description: 'Heavy-duty soft-close hinges, gas springs, and profile handles tested for 100,000+ flawless open-close cycles.',
      tag: 'Mechanisms',
      icon: Wrench,
      spec: '100,000 Cycle Tested',
    },
  ];

  return (
    <section className="section-spacing bg-[var(--color-ivory)] shape-backsplash relative overflow-hidden">
      <div className="container-site relative z-10">
        <SectionHeading
          eyebrow="Material Integrity"
          title="Engineered to Resist Water, Spices & Time"
          subtitle="Indian cooking involves high heat, spices, and heavy usage. We never compromise on raw materials, using exclusively certified moisture-resistant grades."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="flex flex-col h-full p-6 rounded-2xl bg-white border border-[#D8CCB8] shadow-sm hover:shadow-md hover:border-[var(--color-naman-indigo)]/40 transition-all duration-300 group justify-between">
                  <div>
                    {/* Tag & Icon Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#2B231D] text-[#E8D49E] text-[10px] font-mono font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)]" />
                        {item.tag}
                      </span>

                      <div className="w-9 h-9 rounded-lg bg-[var(--color-ivory-light)] border border-[#D8CCB8] text-[var(--color-naman-indigo)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-4 h-4 text-[var(--color-naman-indigo)]" />
                      </div>
                    </div>

                    {/* Material Title */}
                    <h3 className="text-lg sm:text-xl font-medium text-[var(--color-espresso)] mb-2.5 font-display group-hover:text-[var(--color-naman-indigo)] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Material Description */}
                    <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#EAE5D9] flex items-center justify-between text-xs font-semibold text-[var(--color-espresso)]">
                    <span className="flex items-center gap-1 text-[var(--color-naman-indigo)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-brass)]" />
                      {item.spec}
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">Certified</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

