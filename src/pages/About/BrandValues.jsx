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

        {/* Master Unified Vintage-Modern Kitchen Drawer Milestone Chassis */}
        <Reveal direction="up" delay={0.15}>
          <div className="relative w-full max-w-7xl mx-auto rounded-3xl bg-gradient-to-b from-[#9CB08E] via-[#8FA581] to-[#829974] border-2 border-[#B8A04A]/60 shadow-[0_20px_45px_rgba(45,43,96,0.07)] p-3 sm:p-5 mb-16 overflow-hidden">
            
            {/* Top Drawer Face Rail with Polished Master Brass Handle */}
            <div className="relative w-full py-3.5 px-4 sm:px-6 mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r from-[#7B906D] via-[#91A683] to-[#7B906D] border border-white/40 flex items-center justify-between shadow-inner text-white">
              {/* Left Accent Plate */}
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5CA78] shadow-sm border border-black/20" />
                <span className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#FFF7DA] hidden sm:inline">
                  Milestone Archive // 2017 – Present
                </span>
              </div>

              {/* Central Master Brass Pull Handle */}
              <div className="flex items-center justify-center">
                <div className="w-2 sm:w-2.5 h-4 sm:h-5 rounded-sm bg-[#A88B38] border border-black/20 shadow-xs" />
                <div className="w-28 sm:w-44 md:w-56 h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#C2A34F] via-[#FFF3D1] to-[#C2A34F] shadow-[0_3px_8px_rgba(0,0,0,0.35)] mx-[-1px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80" />
                </div>
                <div className="w-2 sm:w-2.5 h-4 sm:h-5 rounded-sm bg-[#A88B38] border border-black/20 shadow-xs" />
              </div>

              {/* Right Technical Specification Accent */}
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-white/95 hidden sm:inline">
                  Evolution Track
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5CA78] shadow-sm border border-black/20" />
              </div>
            </div>

            {/* Internal 4 Drawer Compartments with Vertical Divider Partitions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-[#FCFBF8] border border-[#D2DCD0] shadow-inner overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#DCE5DA]">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 flex flex-col justify-between relative group/partition hover:bg-white transition-all duration-300"
                >
                  {/* Top Compartment Header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[var(--color-naman-indigo)] tracking-tight font-display group-hover/partition:text-[var(--color-naman-red)] transition-colors">
                        {m.year}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#EAF0E7] text-[#43573A] border border-[#C2D2BD] shadow-xs">
                        {m.badge}
                      </span>
                    </div>

                    {/* Compartment Slot Label */}
                    <div className="text-[10px] font-mono text-[#586D4E] font-bold tracking-widest mb-1.5 uppercase opacity-90">
                      Phase // 0{m.slot}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[var(--color-espresso)] mb-2.5 leading-snug group-hover/partition:text-[var(--color-naman-indigo)] transition-colors">
                      {m.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                      {m.desc}
                    </p>
                  </div>

                  {/* Bottom Milestone Track Status */}
                  <div className="pt-4 mt-6 border-t border-[#E5EDE2] flex items-center justify-between text-xs relative z-10">
                    <span className="text-[11px] text-[var(--color-espresso)] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)] shadow-[0_0_4px_var(--color-brass)] animate-pulse" />
                      Verified Milestone
                    </span>
                    <span className="text-[10px] font-mono text-[var(--color-warm-gray)]">MP Track</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mission & Vision Shelf Grid with Fluted Vertical Border Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Mission Shelf Card */}
          <Reveal direction="up" delay={0.2}>
            <div className="flex flex-col h-full relative group">
              
              {/* Top Wall Mounting Brass Bracket Braces */}
              <div className="flex justify-between px-8 mb-[-3px] relative z-20">
                <div className="w-4 h-3.5 bg-gradient-to-b from-[#FFEAA8] to-[#B89B43] rounded-t-xs border border-black/30 shadow-xs flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#523F10]" />
                </div>
                <div className="w-4 h-3.5 bg-gradient-to-b from-[#FFEAA8] to-[#B89B43] rounded-t-xs border border-black/30 shadow-xs flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#523F10]" />
                </div>
              </div>

              {/* Main Outer Shelf Container with Fluted Vertical Lines Border Frame */}
              <div className="relative rounded-3xl p-3 sm:p-3.5 bg-[#A1B28F] border-2 border-[#B8A04A]/60 shadow-[0_14px_36px_rgba(45,43,96,0.09)] overflow-hidden flex flex-col justify-between flex-1">
                
                {/* Vertical Reeded Fluted Lines in Border Area Only */}
                <div 
                  className="absolute inset-0 opacity-45 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(255,255,255,0.75) 7px, rgba(255,255,255,0.75) 8px, rgba(0,0,0,0.12) 8px, rgba(0,0,0,0.12) 9px)'
                  }}
                />

                {/* Inner Content Display Pod */}
                <div className="relative z-10 rounded-2xl bg-[#FCFBF8] border border-[#D5DDD0] shadow-sm p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-naman-indigo)] to-[var(--color-naman-indigo-light)] text-white flex items-center justify-center shadow-sm mb-4">
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

                {/* Bottom Brass Gallery Shelf Trim */}
                <div className="relative z-20 mt-2.5 h-1.5 rounded-full bg-gradient-to-r from-[#B89B43] via-[#FFEBB0] to-[#B89B43] shadow-xs" />
              </div>

              {/* Bottom Solid Hardwood Shelf Plank */}
              <div className="relative h-3.5 mx-2 mt-[-2px] rounded-b-lg bg-gradient-to-r from-[#503628] via-[#75523F] to-[#503628] border-t border-[#8A634E] shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-between px-6 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B89B43] opacity-80" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#B89B43] opacity-80" />
              </div>
            </div>
          </Reveal>

          {/* Vision Shelf Card */}
          <Reveal direction="up" delay={0.3}>
            <div className="flex flex-col h-full relative group">
              
              {/* Top Wall Mounting Brass Bracket Braces */}
              <div className="flex justify-between px-8 mb-[-3px] relative z-20">
                <div className="w-4 h-3.5 bg-gradient-to-b from-[#FFEAA8] to-[#B89B43] rounded-t-xs border border-black/30 shadow-xs flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#523F10]" />
                </div>
                <div className="w-4 h-3.5 bg-gradient-to-b from-[#FFEAA8] to-[#B89B43] rounded-t-xs border border-black/30 shadow-xs flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#523F10]" />
                </div>
              </div>

              {/* Main Outer Shelf Container with Fluted Vertical Lines Border Frame */}
              <div className="relative rounded-3xl p-3 sm:p-3.5 bg-[#A1B28F] border-2 border-[#B8A04A]/60 shadow-[0_14px_36px_rgba(45,43,96,0.09)] overflow-hidden flex flex-col justify-between flex-1">
                
                {/* Vertical Reeded Fluted Lines in Border Area Only */}
                <div 
                  className="absolute inset-0 opacity-45 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(255,255,255,0.75) 7px, rgba(255,255,255,0.75) 8px, rgba(0,0,0,0.12) 8px, rgba(0,0,0,0.12) 9px)'
                  }}
                />

                {/* Inner Content Display Pod (Rich Dark Theme for Vision) */}
                <div className="relative z-10 rounded-2xl bg-[#211D18] border border-black/40 shadow-sm p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4 text-white">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-naman-red)] to-[var(--color-naman-red-dark)] text-white flex items-center justify-center shadow-sm mb-4">
                      <Building2 className="w-6 h-6 text-[#FFF0C2]" />
                    </div>
                    <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-brass)] block mb-1">
                      हमारा विज़न (Our Vision)
                    </span>
                    <h3 className="text-2xl font-normal text-white font-display mb-4">
                      Empowering MP Entrepreneurs with Zero-Royalty Partnerships
                    </h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      To build an empowering modular kitchen network across Madhya Pradesh by offering a{' '}
                      <strong className="text-[var(--color-brass)]">"No Franchise Fee – No Royalty"</strong> model,
                      fostering self-reliant entrepreneurs and bringing dependable kitchen standards to every district.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs text-white/90 border border-white/10">
                      <Award className="w-3.5 h-3.5 text-[var(--color-brass)]" />
                      Growth Platform for Local Business Owners
                    </span>
                  </div>
                </div>

                {/* Bottom Brass Gallery Shelf Trim */}
                <div className="relative z-20 mt-2.5 h-1.5 rounded-full bg-gradient-to-r from-[#B89B43] via-[#FFEBB0] to-[#B89B43] shadow-xs" />
              </div>

              {/* Bottom Solid Hardwood Shelf Plank */}
              <div className="relative h-3.5 mx-2 mt-[-2px] rounded-b-lg bg-gradient-to-r from-[#503628] via-[#75523F] to-[#503628] border-t border-[#8A634E] shadow-[0_4px_10px_rgba(0,0,0,0.25)] flex items-center justify-between px-6 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B89B43] opacity-80" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#B89B43] opacity-80" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
