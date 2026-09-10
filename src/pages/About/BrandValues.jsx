import React from 'react';
import { Target, Building2, Award } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

export default function BrandValues() {
  const milestones = [
    {
      year: '2017',
      slot: '01',
      title: '01 March 2017: Foundation',
      desc: 'Established as Naman Sales & Services, starting directly with on-site kitchen and hardware projects across Indore.',
      badge: 'Ground Roots',
    },
    {
      year: '2018–19',
      slot: '02',
      title: 'Balanced Dual Business Model',
      desc: 'Formed a strong wholesale hardware distribution wing alongside custom modular kitchen projects, creating cost stability.',
      badge: 'Wholesale & Retail',
    },
    {
      year: '2020',
      slot: '03',
      title: 'Navigating Pandemic Challenges',
      desc: 'Overcame Covid-19 market disruptions through uncompromised customer trust, disciplined finances, and lasting relationships.',
      badge: 'Resilience',
    },
    {
      year: '2022+',
      slot: '04',
      title: 'Architect-Driven Scalable Expansion',
      desc: 'Rapidly expanded with leading architectural partnerships, premium acrylic laminates, and standardized modular manufacturing.',
      badge: 'State-Wide Scale',
    },
  ];

  return (
    <section className="section-spacing bg-[var(--color-ivory-light)] border-y border-black/5 relative overflow-hidden">
      <div className="container-site">
        <SectionHeading
          eyebrow="Milestones & Evolution"
          title="From Humble Ground Roots to a Trusted Brand"
          subtitle="How a customer-first philosophy propelled Naman Kitchen into a reference-driven modular force across Madhya Pradesh."
        />

        {/* Modern Clean Milestone Timeline Grid */}
        <Reveal direction="up" delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#FCFBF8] border border-[#D2DCD0] shadow-sm hover:shadow-md hover:border-[var(--color-naman-indigo)]/40 hover:bg-white flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-naman-indigo)] tracking-tight font-display group-hover:text-[var(--color-naman-red)] transition-colors">
                      {m.year}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#EAF0E7] text-[#43573A] border border-[#C2D2BD]">
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-espresso)] mb-2.5 leading-snug group-hover:text-[var(--color-naman-indigo)] transition-colors">
                    {m.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission Card */}
          <Reveal direction="up" delay={0.2}>
            <div className="rounded-2xl bg-[#FCFBF8] border border-[#D5DDD0] shadow-sm p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-naman-indigo)] to-[var(--color-naman-indigo-light)] text-white flex items-center justify-center shadow-sm mb-4">
                  <Target className="w-6 h-6 text-[#FFEBB0]" />
                </div>
                <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-naman-indigo)] block mb-1">
                  हमारा मिशन (Our Mission)
                </span>
                <h3 className="text-2xl font-normal text-[var(--color-espresso)] font-display mb-4">
                  100% Value for Money & Absolute Commitment
                </h3>
                <ul className="space-y-3 text-sm text-[var(--color-espresso-mid)]">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[var(--color-naman-red)] font-bold text-base leading-none">✓</span>
                    <span>Deliver 100% value for money tailored to the site, budget, and real family usage.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[var(--color-naman-red)] font-bold text-base leading-none">✓</span>
                    <span>Give honest architectural guidance, protecting clients from unnecessary expenditure.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[var(--color-naman-red)] font-bold text-base leading-none">✓</span>
                    <span>Zero compromise on hardware quality, panel durability, and installation precision.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E5EDE2] flex items-center justify-between text-xs text-[var(--color-warm-gray)]">
                <span className="font-semibold text-[var(--color-naman-indigo)]">Client-Centric Philosophy</span>
                <span>Indore & MP</span>
              </div>
            </div>
          </Reveal>

          {/* Vision Card (Olive Palette matching Craftsmanship Standards) */}
          <Reveal direction="up" delay={0.3}>
            <div className="rounded-2xl bg-gradient-to-b from-[#9CB08E] via-[#8FA581] to-[#829974] border-2 border-white/40 shadow-md p-6 sm:p-8 flex flex-col justify-between h-full space-y-6 text-white relative overflow-hidden">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xs mb-4">
                  <Building2 className="w-6 h-6 text-[var(--color-naman-indigo)]" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[var(--color-naman-indigo)] block mb-1">
                  हमारा विज़न (Our Vision)
                </span>
                <h3 className="text-2xl font-normal text-white font-display mb-4">
                  Empowering MP Entrepreneurs with Zero-Royalty Partnerships
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-4 font-normal">
                  To build an empowering modular kitchen network across Madhya Pradesh by offering a{' '}
                  <strong className="text-[var(--color-naman-indigo)] font-extrabold">"No Franchise Fee – No Royalty"</strong> model,
                  fostering self-reliant entrepreneurs and bringing dependable kitchen standards to every district.
                </p>
              </div>

              <div className="pt-4 border-t border-white/25 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/25 backdrop-blur-md text-xs text-white border border-white/30 font-medium">
                  <Award className="w-3.5 h-3.5 text-[var(--color-naman-indigo)]" />
                  Growth Platform for Local Business Owners
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
