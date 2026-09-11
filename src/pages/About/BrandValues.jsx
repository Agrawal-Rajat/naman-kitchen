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
      desc: 'Navigated Covid-19 disruptions through uncompromised trust, disciplined finances, and strong vendor relationships.',
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
          <div className="relative mb-16">
            {/* Straight Horizontal Connecting Line / Chain (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-[2px] bg-[var(--color-naman-indigo)]/35 -translate-y-1/2 pointer-events-none z-0" />

            {/* Straight Horizontal Connecting Lines / Chain (Tablet: 2 rows) */}
            <div className="hidden md:block lg:hidden absolute top-[25%] left-6 right-6 h-[2px] bg-[var(--color-naman-indigo)]/35 -translate-y-1/2 pointer-events-none z-0" />
            <div className="hidden md:block lg:hidden absolute top-[75%] left-6 right-6 h-[2px] bg-[var(--color-naman-indigo)]/35 -translate-y-1/2 pointer-events-none z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#FCFBF8] border border-[#D2DCD0] shadow-sm hover:shadow-md hover:border-[var(--color-naman-indigo)]/40 hover:bg-white flex flex-col justify-between transition-all duration-300 group relative z-10"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-naman-indigo)] tracking-tight font-display group-hover:text-[var(--color-naman-red)] transition-colors">
                        {m.year}
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
            </div>
          </Reveal>

          {/* Vision Card (Naman Luxury Indigo & Metallic Gold Palette) */}
          <Reveal direction="up" delay={0.3}>
            <div className="rounded-2xl bg-gradient-to-br from-[#2D2B60] via-[#24224E] to-[#1A183B] border-2 border-[#FFE394]/30 shadow-card p-6 sm:p-8 flex flex-col justify-between h-full space-y-6 text-white relative overflow-hidden">
              {/* Subtle Background Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FFE394]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xs mb-4">
                  <Building2 className="w-6 h-6 text-[#FFE394]" />
                </div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#FFE394] block mb-1">
                  हमारा विज़न (Our Vision)
                </span>
                <h3 className="text-2xl font-bold text-white font-display mb-4 leading-snug">
                  Empowering MP Entrepreneurs with Zero-Royalty Partnerships
                </h3>
                <p className="text-sm text-white/90 leading-relaxed mb-4 font-normal">
                  To build an empowering modular kitchen network across Madhya Pradesh by offering a{' '}
                  <strong className="text-[#FFE394] font-extrabold">"No Franchise Fee – No Royalty"</strong> model,
                  fostering self-reliant entrepreneurs and bringing dependable kitchen standards to every district.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
