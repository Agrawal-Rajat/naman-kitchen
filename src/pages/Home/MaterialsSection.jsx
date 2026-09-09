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

        {/* Central Circular Rope / Chain Track (Background Layer) */}
        <div className="relative max-w-6xl mx-auto py-4">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] md:w-[580px] md:h-[580px] pointer-events-none z-0 flex items-center justify-center">
            {/* Outer Braided Rope Dashed Circle */}
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-[var(--color-brass)]/60 shadow-[0_0_24px_rgba(184,160,74,0.2)]" />
            
            {/* Inner Metallic Rope Track */}
            <div className="absolute inset-4 sm:inset-6 rounded-full border-[6px] border-[#B8A04A]/30 shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-white/60" />
            </div>
          </div>

          {/* 4 Smooth Containers (2 Upper, 2 Lower on Circular Ring) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto relative z-10">
            {materials.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="rounded-2xl border border-[#E8DFD0] bg-white/98 backdrop-blur-md p-6 sm:p-8 shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between h-full relative overflow-hidden">
                    {/* Subtle Top Ambient Glow Accent */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-naman-indigo)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                    <div>
                      {/* Tag & Icon Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EAF0E7] text-[#43573A] border border-[#C2D2BD] text-[10px] font-mono font-bold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#586D4E]" />
                          {item.tag}
                        </span>

                        <div className="w-10 h-10 rounded-xl bg-[var(--color-ivory-light)] border border-[#D8CCB8] text-[var(--color-naman-indigo)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xs">
                          <Icon className="w-5 h-5 text-[var(--color-naman-indigo)]" />
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
      </div>
    </section>
  );
}

