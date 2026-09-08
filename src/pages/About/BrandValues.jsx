import React from 'react';
import { Target, Building2 } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

export default function BrandValues() {
  const milestones = [
    {
      year: '2017',
      title: '01 March 2017: Foundation',
      desc: 'Established as Naman Sales & Services, starting directly with on-site kitchen and hardware projects across Indore.',
    },
    {
      year: '2018–19',
      title: 'Balanced Dual Business Model',
      desc: 'Formed a strong wholesale hardware distribution wing alongside custom modular kitchen projects, creating cost stability.',
    },
    {
      year: '2020',
      title: 'Navigating Pandemic Challenges',
      desc: 'Overcame Covid-19 market disruptions through uncompromised customer trust, disciplined finances, and lasting relationships.',
    },
    {
      year: '2022+',
      title: 'Architect-Driven Scalable Expansion',
      desc: 'Rapidly expanded with leading architectural partnerships, premium acrylic laminates, and standardized modular manufacturing.',
    },
  ];

  return (
    <section className="section-spacing bg-[var(--color-ivory-light)] border-y border-black/5">
      <div className="container-site">
        <SectionHeading
          eyebrow="Milestones & Evolution"
          title="From Humble Ground Roots to a Trusted Brand"
          subtitle="How a customer-first philosophy propelled Naman Kitchen into a reference-driven modular force across Madhya Pradesh."
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {milestones.map((m, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-subtle flex flex-col justify-between h-full relative">
                <div>
                  <span className="text-2xl font-extrabold text-[var(--color-naman-red)] block mb-2">
                    {m.year}
                  </span>
                  <h3 className="text-base font-semibold text-[var(--color-espresso)] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal direction="up" delay={0.2}>
            <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-subtle h-full space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-naman-indigo)] text-white flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-naman-indigo)]">
                हमारा मिशन (Our Mission)
              </span>
              <h3 className="text-2xl font-normal text-[var(--color-espresso)]">
                100% Value for Money & Absolute Commitment
              </h3>
              <ul className="space-y-2.5 text-sm text-[var(--color-espresso-mid)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-naman-red)] font-bold">✓</span>
                  <span>Deliver 100% value for money tailored to the site, budget, and real family usage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-naman-red)] font-bold">✓</span>
                  <span>Give honest architectural guidance, protecting clients from unnecessary expenditure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-naman-red)] font-bold">✓</span>
                  <span>Zero compromise on hardware quality, panel durability, and installation precision.</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div className="p-8 rounded-3xl bg-[var(--color-espresso)] text-white shadow-card h-full space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-naman-red)] text-white flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-brass)]">
                हमारा विज़न (Our Vision)
              </span>
              <h3 className="text-2xl font-normal text-white">
                Empowering MP Entrepreneurs with Zero-Royalty Partnerships
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">
                To build an empowering modular kitchen network across Madhya Pradesh by offering a{' '}
                <strong className="text-[var(--color-brass)]">"No Franchise Fee – No Royalty"</strong> model,
                fostering self-reliant entrepreneurs and bringing dependable kitchen standards to every district.
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-white/90">
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
