import React from 'react';
import { ShieldCheck, Ruler, Users, HeartHandshake, Lightbulb, Sparkles } from 'lucide-react';
import Reveal from '../../components/motion/Reveal';

import bgImg1 from '../../assets/work/project-kitchen-blue-02.jpeg';
import bgImg2 from '../../assets/work/project-kitchen-charcoal-01.jpeg';
import bgImg3 from '../../assets/work/project-kitchen-rustic-02.jpeg';
import bgImg4 from '../../assets/work/project-kitchen-teal-white-01.jpeg';

const containerBgImages = [bgImg1, bgImg2, bgImg3, bgImg4];

export default function CraftsmanshipStandards() {
  const standards = [
    {
      icon: Ruler,
      title: '100% Site Measurement Accuracy',
      desc: 'Precision laser templating ensures zero gaps between walls, plumbing points, and modular cabinetry before production begins.',
    },
    {
      icon: ShieldCheck,
      title: 'Premium CNC Finishing Standards',
      desc: 'Zero-joint edge-banding, perfect shutter alignment, and seamless soft-close adjustments on every door and drawer.',
    },
    {
      icon: Users,
      title: 'Veteran Artisans (8–10 Years Exp.)',
      desc: 'Installed exclusively by seasoned modular craftsmen with nearly a decade of precision joinery and cabinetry experience.',
    },
    {
      icon: HeartHandshake,
      title: 'Lifelong Partner Commitment',
      desc: 'We consider ourselves your lifelong partner — always reachable for prompt maintenance, realignment, and future expansions.',
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-[var(--color-ivory-light)] text-[var(--color-espresso)] relative overflow-hidden border-t border-black/5">
      {/* Subtle Ambient Radial Lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(161, 178, 143, 0.25) 0%, transparent 70%)'
        }}
      />

      <div className="container-site relative z-10">
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-espresso)] tracking-tight leading-tight font-display">
              Quality Is Our Identity
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] mt-3 leading-relaxed max-w-2xl mx-auto">
              Every cabinet that leaves our workshop carries our reputation. We measure twice, cut once,
              and inspect every joint so your kitchen functions flawlessly for decades.
            </p>
          </Reveal>
        </div>

        {/* Master Circlet Container (Olive & Warm Beige/Ivory Palette) */}
        <Reveal direction="up" delay={0.25}>
          <div className="relative max-w-5xl mx-auto rounded-[2.5rem] lg:rounded-[3.5rem] bg-gradient-to-b from-[#9CB08E] via-[#8FA581] to-[#829974] border-2 border-[var(--color-naman-indigo)]/60 shadow-[0_25px_60px_rgba(45,43,96,0.08)] p-4 sm:p-7 lg:p-9 overflow-hidden">
            
            {/* Outer Brass Perimeter Rim Studs */}
            <div className="absolute top-4 left-6 w-2.5 h-2.5 rounded-full bg-[var(--color-naman-indigo)] border border-black/20 shadow-xs opacity-90" />
            <div className="absolute top-4 right-6 w-2.5 h-2.5 rounded-full bg-[var(--color-naman-indigo)] border border-black/20 shadow-xs opacity-90" />
            <div className="absolute bottom-4 left-6 w-2.5 h-2.5 rounded-full bg-[var(--color-naman-indigo)] border border-black/20 shadow-xs opacity-90" />
            <div className="absolute bottom-4 right-6 w-2.5 h-2.5 rounded-full bg-[var(--color-naman-indigo)] border border-black/20 shadow-xs opacity-90" />

            {/* Central Axis Brass Separator Grid Lines (Desktop) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none z-10" />
            <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-10" />

            {/* Central Vintage-Modern Kitchen Lamp Emblem (Center Intersection Hub Circle) */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex-col items-center justify-center">
              {/* Radiating Warm Amber Glow */}
              <div className="absolute w-36 h-36 rounded-full bg-[#FFAE1A]/25 blur-2xl animate-pulse pointer-events-none" />
              
              {/* Outer Brass Fixture Ring */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-naman-indigo-light)] via-[var(--color-naman-indigo)] to-[#1a1e5a] p-[2.5px] shadow-[0_4px_20px_rgba(45,43,96,0.35)] flex items-center justify-center">
                {/* Inner Frosted Ivory Glass Lens */}
                <div className="w-full h-full rounded-full bg-[#FAF8F2] border border-white/60 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md shadow-inner">
                  <Lightbulb className="w-7 h-7 text-[var(--color-naman-indigo)] drop-shadow-sm" />
                </div>
              </div>
            </div>

            {/* 4 Quadrant Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative z-10">
              {standards.map((std, i) => {
                const Icon = std.icon;
                return (
                  <div
                    key={i}
                    className="relative group rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-md border border-white/80 p-5 sm:p-7 shadow-[0_8px_24px_rgba(45,43,96,0.04)] hover:shadow-[0_16px_36px_rgba(45,43,96,0.18)] hover:bg-white hover:border-[var(--color-naman-indigo)]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    {/* Background Image */}
                    <img
                      src={containerBgImages[i]}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                      aria-hidden="true"
                    />
                    <div className="relative z-10">
                      {/* Icon Box */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-naman-indigo)] to-[var(--color-naman-indigo-light)] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-[#FFEBB0]" />
                        </div>
                      </div>

                      {/* Main Title & Description */}
                      <h3 className="text-lg font-bold text-[var(--color-espresso)] mb-2 group-hover:text-[var(--color-naman-indigo)] transition-colors leading-snug font-display">
                        {std.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                        {std.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
