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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-6">
          {materials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="flex flex-col h-full relative group">
                  
                  {/* Top Wall Mounting Brass Bracket Braces */}
                  <div className="flex justify-between px-6 mb-[-2px] relative z-20">
                    <div className="w-3.5 h-3 bg-gradient-to-b from-[#FFEAA8] to-[#B89B43] rounded-t-xs border border-black/30 shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#523F10]" />
                    </div>
                    <div className="w-3.5 h-3 bg-gradient-to-b from-[#FFEAA8] to-[#B89B43] rounded-t-xs border border-black/30 shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#523F10]" />
                    </div>
                  </div>

                  {/* Open Kitchen Shelf Body (Wood/Stone Backplate with Recessed Depth) */}
                  <div className="flex-1 flex flex-col justify-between p-6 pt-5 rounded-t-2xl bg-gradient-to-b from-[#FAF7F0] via-[#F4EFE6] to-[#EAE2D5] border-x-2 border-t-2 border-[#D8CCB8] shadow-[0_10px_25px_rgba(45,43,96,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)] relative group-hover:border-[var(--color-brass)]/60 transition-colors">
                    
                    {/* Background Subtle Shelf Shiplap/Wood Grain Grooves */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-20"
                      style={{
                        backgroundImage: `repeating-linear-gradient(0deg, rgba(92, 64, 51, 0.2) 0px, rgba(92, 64, 51, 0.2) 1px, transparent 1px, transparent 24px)`,
                      }}
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      {/* Brass Plaque Tag & Icon Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gradient-to-r from-[#2B231D] to-[#3B3028] text-[#E8D49E] text-[10px] font-mono font-bold uppercase tracking-wider border border-[#8C742D]/40 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)]" />
                          {item.tag}
                        </div>

                        <div className="w-8 h-8 rounded-lg bg-white/90 border border-[#D8CCB8] text-[var(--color-naman-indigo)] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-4 h-4 text-[var(--color-naman-indigo)]" />
                        </div>
                      </div>

                      {/* Material Title */}
                      <h3 className="text-lg sm:text-xl font-normal text-[var(--color-espresso)] mb-2.5 font-display group-hover:text-[var(--color-naman-indigo)] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {/* Material Description */}
                      <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Vintage Brass Guard / Gallery Fiddler Rail */}
                    <div className="relative z-10 mt-5 pt-3">
                      <div className="w-full h-[2.5px] bg-gradient-to-r from-[#B89B43] via-[#FFE8A3] to-[#B89B43] rounded-full shadow-xs mb-2.5 relative">
                        <div className="w-1.5 h-2 bg-[#6E5618] rounded-xs absolute -top-[3px] left-1 border border-black/20" />
                        <div className="w-1.5 h-2 bg-[#6E5618] rounded-xs absolute -top-[3px] right-1 border border-black/20" />
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--color-espresso)]">
                        <span className="flex items-center gap-1 text-[var(--color-naman-indigo)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-brass)]" />
                          {item.spec}
                        </span>
                        <span className="text-[10px] font-mono text-stone-500">Tier-1</span>
                      </div>
                    </div>
                  </div>

                  {/* Thick Solid Walnut Floating Shelf Plank (Bottom Base Ledge) */}
                  <div className="h-6 w-full rounded-b-2xl bg-gradient-to-b from-[#52392E] via-[#3E2B23] to-[#251A15] border-t-2 border-[#8D6B55] shadow-[0_8px_18px_rgba(0,0,0,0.35)] flex items-center justify-between px-4 text-[10px] font-mono font-bold text-[#D7C4A5] relative z-20">
                    <span className="tracking-widest">SHELF // 0{idx + 1}</span>
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8A04A] shadow-[0_0_4px_#B8A04A]" />
                      <span className="text-[9px] uppercase tracking-wider text-[#A69376]">Verified</span>
                    </div>
                  </div>

                  {/* Bottom Wall Mount Brass L-Bracket Supports */}
                  <div className="flex justify-between px-6 mt-[-1px] relative z-10">
                    <div className="w-3.5 h-3.5 bg-gradient-to-b from-[#B89B43] to-[#6E5618] rounded-b-xs border border-black/40 shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#2E2207]" />
                    </div>
                    <div className="w-3.5 h-3.5 bg-gradient-to-b from-[#B89B43] to-[#6E5618] rounded-b-xs border border-black/40 shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#2E2207]" />
                    </div>
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

