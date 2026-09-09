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

        {/* Clean Modern Hardware Showcase Cards Grid */}
        <Reveal direction="up" delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#FCFBF8] border border-[#D2DCD0] shadow-sm hover:shadow-md hover:border-[var(--color-naman-indigo)]/40 hover:bg-white flex flex-col justify-between transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-naman-indigo)] to-[var(--color-naman-indigo-light)] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-[#FFEBB0]" />
                      </div>
                      <span className="text-[11px] uppercase font-semibold tracking-wider px-3 py-1 rounded-full bg-[#EAF0E7] text-[#43573A] border border-[#C2D2BD]">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-[var(--color-espresso)] mb-2.5 font-display group-hover:text-[var(--color-naman-indigo)] transition-colors leading-snug">
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
