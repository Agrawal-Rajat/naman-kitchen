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
    <section className="section-spacing bg-[var(--color-ivory-light)] text-[var(--color-espresso)] relative overflow-hidden border-t border-black/5">
      <div className="container-site relative z-10">
        <SectionHeading
          eyebrow="Storage Engineering"
          title="Hardware That Never Lets You Down"
          subtitle="A kitchen is only as good as the mechanics inside its cabinets. We partner with top-tier hardware manufacturers to guarantee effortless daily operation."
        />

        {/* Master Horizontal Hardware Drawer Chassis (Refined Light Sage-Olive & Ivory Palette) */}
        <Reveal direction="up" delay={0.15}>
          <div className="relative w-full max-w-7xl mx-auto rounded-3xl bg-gradient-to-b from-[#9CB08E] via-[#8FA581] to-[#829974] border-2 border-[#B8A04A]/60 shadow-[0_20px_45px_rgba(45,43,96,0.07)] p-3 sm:p-5 mb-12 overflow-hidden">
            
            {/* Top Drawer Face Rail with Polished Master Brass Handle */}
            <div className="relative w-full py-3.5 px-4 sm:px-6 mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r from-[#7B906D] via-[#91A683] to-[#7B906D] border border-white/40 flex items-center justify-between shadow-inner text-white">
              {/* Left Accent Plate */}
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5CA78] shadow-sm border border-black/20" />
                <span className="text-[10px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#FFF7DA] hidden sm:inline">
                  Tandem Soft-Close Drawer Organizer
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
                  Max 45kg Load
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-[#E5CA78] shadow-sm border border-black/20" />
              </div>
            </div>

            {/* Internal 4 Drawer Compartments with Vertical Divider Partitions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-[#FCFBF8] border border-[#D2DCD0] shadow-inner overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[#DCE5DA]">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 flex flex-col justify-between relative group/partition hover:bg-white transition-all duration-300"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-naman-indigo)] to-[var(--color-naman-indigo-light)] flex items-center justify-center text-white shadow-sm group-hover/partition:scale-105 transition-transform duration-300">
                          <Icon className="w-5 h-5 text-[#FFEBB0]" />
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-medium text-[var(--color-espresso)] mb-2.5 font-display group-hover/partition:text-[var(--color-naman-indigo)] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="text-center">
          <Button to="/hardware" variant="primary" size="md" icon={ArrowRight}>
            Explore Complete Hardware Catalog
          </Button>
        </div>
      </div>
    </section>

  );
}
