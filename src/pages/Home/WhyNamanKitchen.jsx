import React from 'react';
import { Target, Users, Shield, BadgePercent, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 relative">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;

            return (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white border border-[#D2DCD0] shadow-sm hover:shadow-md hover:border-[var(--color-naman-indigo)]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-ivory-light)] text-[var(--color-naman-indigo)] flex items-center justify-center border border-[#E0D8C8] group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[var(--color-naman-indigo)]" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#EAF0E7] text-[#43573A] border border-[#C2D2BD]">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-[var(--color-espresso)] font-display leading-snug mb-3 group-hover:text-[var(--color-naman-indigo)] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#EAE5D9] flex items-center gap-2 text-xs font-semibold text-[var(--color-naman-indigo)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-naman-red)]" />
                    <span>Verified Company Standard</span>
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
