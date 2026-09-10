import React from 'react';
import { Target, Users, Shield, BadgePercent } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

import bgImg1 from '../../assets/work/project-kitchen-champagne-01.jpeg';
import bgImg2 from '../../assets/work/project-kitchen-warm-wood-01.jpeg';
import bgImg3 from '../../assets/work/project-kitchen-white-gold-01.jpeg';
import bgImg4 from '../../assets/work/project-kitchen-emerald-01.jpeg';

const containerBgImages = [bgImg1, bgImg2, bgImg3, bgImg4];

export default function WhyNamanKitchen() {
  const pillars = [
    {
      icon: Target,
      title: '100% Site Accuracy & Personal Visits',
      description: 'We personally visit your home site to understand the exact architectural floor plan, preventing expensive measurement mistakes and misaligned cabinets.',
      badge: 'Zero Errors',
    },
    {
      icon: Users,
      title: '8–10 Years Veteran Artisans',
      description: 'Every kitchen is assembled and installed by seasoned master craftsmen with nearly a decade of modular joinery experience, not casual laborers.',
      badge: 'Craftsmanship',
    },
    {
      icon: BadgePercent,
      title: 'Wholesale-Direct Dual Model',
      description: 'Our strong wholesale hardware network combined with site execution eliminates unnecessary distributor margins, giving you direct factory value.',
      badge: 'Honest Pricing',
    },
    {
      icon: Shield,
      title: 'Trusted Material Partners',
      description: 'We build exclusively with certified industry leaders including Action Tesa boards, Skydecor laminates, Ozone hardware, and Asian Paints adhesives.',
      badge: 'Certified Quality',
    },
  ];

  return (
    <section className="section-spacing bg-[var(--color-ivory)]">
      <div className="container-site">
        <SectionHeading
          eyebrow="The Naman Kitchen Advantage"
          title="Why Homeowners & Architects Choose Us"
          subtitle="Built on honesty, personal attention, and meticulous engineering since 2017. Here is what sets Naman Kitchen apart in Indore and Madhya Pradesh."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12 relative">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isLeftColumn = idx % 2 === 0;

            return (
              <Reveal key={idx} direction="up" delay={idx * 0.15}>
                <div className="relative h-full">
                  {/* Horizontal Architectural Brass Pipe connecting left & right containers */}
                  {isLeftColumn && (
                    <div className="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 w-12 h-4 items-center justify-between z-30 pointer-events-none">
                      {/* Left Wall Mounting Collar */}
                      <div className="w-1.5 h-4 bg-[#B89B43] rounded-xs shadow-xs border border-black/30" />
                      
                      {/* Polished Brass Pipe Body with Specular Highlight */}
                      <div className="flex-1 h-2 bg-gradient-to-b from-[#FFF2C2] via-[#B89B43] to-[#5C450E] shadow-[0_2px_5px_rgba(0,0,0,0.35)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-75" />
                      </div>

                      {/* Right Wall Mounting Collar */}
                      <div className="w-1.5 h-4 bg-[#B89B43] rounded-xs shadow-xs border border-black/30" />
                    </div>
                  )}

                  {/* Fluted Olive Outer Border Container Frame */}
                  <div className="relative h-full rounded-[28px] overflow-hidden border-2 border-[var(--color-brass)]/45 bg-[#A1B28F] shadow-[0_16px_36px_rgba(45,43,96,0.08)] hover:shadow-[0_20px_48px_rgba(107,127,94,0.2)] transition-all duration-300 group/fluted p-1.5">
                    
                    {/* Top Ambient LED Glow Strip */}
                    <div className="absolute top-0 inset-x-6 h-[3px] bg-gradient-to-r from-transparent via-[#FFF4C7] to-transparent shadow-[0_2px_8px_#FFE48A] z-20" />

                    {/* Vintage Reeded / Fluted Slat Background Lines */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-90 z-0"
                      style={{
                        backgroundImage: `
                          repeating-linear-gradient(
                            90deg,
                            #829471 0px,
                            #829471 4px,
                            #687B57 5px,
                            rgba(255, 255, 255, 0.7) 6px,
                            #94A682 7px,
                            #A1B28F 7px,
                            #A1B28F 18px
                          )
                        `,
                      }}
                      aria-hidden="true"
                    />

                    {/* Inner White Card Pod with Exact Current Content */}
                    <div className="relative z-10 p-6 sm:p-7 rounded-2xl bg-white border border-[#D2DCD0] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden">
                      {/* Background Image with low opacity */}
                      <img
                        src={containerBgImages[idx]}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                        aria-hidden="true"
                      />
                      <div className="relative z-10">
                        {/* Header Row */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-12 h-12 rounded-xl bg-[var(--color-ivory-light)] text-[var(--color-naman-indigo)] flex items-center justify-center border border-[#E0D8C8] group-hover:scale-105 transition-transform duration-300">
                            <Icon className="w-6 h-6 text-[var(--color-naman-indigo)]" />
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl font-medium text-[var(--color-espresso)] font-display leading-snug mb-3 group-hover:text-[var(--color-naman-indigo)] transition-colors">
                          {pillar.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>



        {/* Client Partner Badges */}
        <Reveal direction="up" delay={0.4}>
          <div className="p-6 rounded-2xl bg-[var(--color-ivory-dark)] border border-black/5 flex flex-wrap items-center justify-around gap-6 text-center">
            <div className="text-xs uppercase tracking-widest font-bold text-[var(--color-espresso)]">
              Authorized Materials:
            </div>
            {['Action Tesa', 'Skydecor', 'Ozone Hardware', 'Asian Paints Adhesives'].map((brand, i) => (
              <div key={i} className="text-sm font-semibold text-[var(--color-espresso-mid)]">
                ✓ {brand}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
