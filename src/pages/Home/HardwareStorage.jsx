import React from 'react';
import { ArrowRight, Layers, Sliders, Box, Archive } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import Reveal from '../../components/motion/Reveal';

export default function HardwareStorage() {
  const features = [
    {
      icon: Layers,
      title: 'Tandem Soft-Close Systems',
      description: 'Smooth, whisper-quiet motion engineered to support up to 45kg load without sagging.',
      tag: 'Drawers',
    },
    {
      icon: Sliders,
      title: 'Corner Carousel Units',
      description: 'Clever swing-out trays converting 100% of hard-to-reach L-corner space into organized storage.',
      tag: 'Corner Space',
    },
    {
      icon: Box,
      title: 'Floor-to-Ceiling Pantry Units',
      description: 'Integrated vertical pull-outs with adjustable racks for bulk Indian groceries and spices.',
      tag: 'Tall Units',
    },
    {
      icon: Archive,
      title: 'Lift-Up Bi-Fold Systems',
      description: 'Overhead cabinets open upward smoothly and stay suspended, leaving head clearance free.',
      tag: 'Overhead',
    },
  ];

  return (
    <section className="section-spacing bg-[var(--color-espresso)] text-white relative overflow-hidden">
      <div className="container-site relative z-10">
        <SectionHeading
          dark
          eyebrow="Storage Engineering"
          title="Hardware That Never Lets You Down"
          subtitle="A kitchen is only as good as the mechanics inside its cabinets. We partner with top-tier hardware manufacturers to guarantee effortless daily operation."
        />

        {/* Master Horizontal Vintage-Modern Hardware Drawer Chassis */}
        <Reveal direction="up" delay={0.15}>
          <div className="relative w-full max-w-7xl mx-auto rounded-3xl bg-gradient-to-b from-[#2E2620] via-[#241E19] to-[#181410] border-2 border-[var(--color-brass)]/30 shadow-[0_24px_60px_rgba(0,0,0,0.6),inset_0_2px_4px_rgba(255,255,255,0.08)] p-3 sm:p-5 mb-12 overflow-hidden">
            
            {/* Top Drawer Face Rail with Polished Master Brass Handle */}
            <div className="relative w-full py-3 px-4 sm:px-6 mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r from-[#3A3027] via-[#483C31] to-[#3A3027] border border-white/10 flex items-center justify-between shadow-inner">
              {/* Left Accent Plate */}
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-brass)] shadow-sm opacity-90 border border-black/40" />
                <span className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[var(--color-brass)]/90 hidden sm:inline">
                  Tandem Soft-Close Drawer Organizer
                </span>
              </div>

              {/* Central Master Brass Pull Handle */}
              <div className="flex items-center justify-center">
                <div className="w-2 sm:w-2.5 h-4 sm:h-5 rounded-sm bg-[#A88B38] border border-black/30 shadow-xs" />
                <div className="w-28 sm:w-44 md:w-56 h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-[#B89B43] via-[#FFF0C2] to-[#B89B43] shadow-[0_3px_8px_rgba(0,0,0,0.7)] mx-[-1px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70" />
                </div>
                <div className="w-2 sm:w-2.5 h-4 sm:h-5 rounded-sm bg-[#A88B38] border border-black/30 shadow-xs" />
              </div>

              {/* Right Technical Specification Accent */}
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] sm:text-xs uppercase font-mono tracking-wider text-white/60 hidden sm:inline">
                  Max 45kg Load
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-brass)] shadow-sm opacity-90 border border-black/40" />
              </div>
            </div>

            {/* Internal 4 Drawer Compartments with Vertical Divider Partitions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-[#171310] border border-black/60 shadow-inner overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 flex flex-col justify-between relative group/partition hover:bg-white/[0.04] transition-all duration-300"
                  >
                    {/* Top Compartment Header */}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-naman-indigo)] to-[var(--color-naman-indigo-light)] flex items-center justify-center text-white shadow-md group-hover/partition:scale-110 transition-transform duration-300 border border-white/10">
                          <Icon className="w-5 h-5 text-[#FFEBB0]" />
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-[var(--color-brass)] border border-[var(--color-brass)]/25 shadow-xs">
                          {item.tag}
                        </span>
                      </div>

                      {/* Compartment Label & Title */}
                      <div className="text-[10px] font-mono text-[var(--color-brass)]/70 tracking-widest mb-1.5 uppercase">
                        Slot // 0{idx + 1}
                      </div>
                      <h3 className="text-lg sm:text-xl font-normal text-white mb-2.5 font-display group-hover/partition:text-[#FFEBB0] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-300/85 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Compartment Track Spec */}
                    <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs relative z-10">
                      <span className="text-[11px] text-[var(--color-brass)] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)] animate-pulse" />
                        Precision Steel Track
                      </span>
                      <span className="text-[10px] font-mono text-white/40">100% Extension</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>


        <div className="text-center">
          <Button to="/hardware" variant="accent" size="md" icon={ArrowRight}>
            Explore Complete Hardware Catalog
          </Button>
        </div>
      </div>
    </section>
  );
}
