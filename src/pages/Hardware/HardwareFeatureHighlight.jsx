import React from 'react';
import { ShieldCheck, Weight, Flame, Sparkles } from 'lucide-react';
import Reveal from '../../components/motion/Reveal';

import bgImg1 from '../../assets/work/project-kitchen-blue-02.jpeg';
import bgImg2 from '../../assets/work/project-kitchen-charcoal-01.jpeg';
import bgImg3 from '../../assets/work/project-kitchen-rustic-02.jpeg';
import bgImg4 from '../../assets/work/project-kitchen-warm-wood-02.jpeg';

const containerBgImages = [bgImg1, bgImg2, bgImg3, bgImg4];

export default function HardwareFeatureHighlight() {
  const specs = [
    {
      icon: Weight,
      title: 'High Load Capacity (45kg+)',
      desc: 'Engineered specifically for heavy brass, cast iron, and large stainless steel Indian cookware without sagging.',
    },
    {
      icon: ShieldCheck,
      title: '100,000+ Cycle Reliability',
      desc: 'Precision hydraulic dampeners tested for over 25 years of daily smooth, silent, and whisper-quiet closure.',
    },
    {
      icon: Flame,
      title: 'Moisture & Oil Resilient',
      desc: 'Anti-corrosive multi-layer nickel-chrome electroplating resistant to turmeric, high steam, and Indian kitchen vapours.',
    },
    {
      icon: Sparkles,
      title: 'Ergonomic Full Extension',
      desc: '100% telescopic slide channels providing completely unobstructed access all the way to the deepest rear of each drawer.',
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-[#EFF4EC] text-[var(--color-espresso)] relative overflow-hidden border-t border-black/5">
      {/* Less Opaque Gridlines forming Squares */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(45, 60, 40, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(45, 60, 40, 0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px'
        }}
      />
      
      {/* Subtle Radial Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial from-white/60 to-transparent pointer-events-none blur-3xl" />

      <div className="container-site relative z-10">
        <div className="max-w-3xl mb-14">
          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#182017] tracking-tight leading-tight font-display">
              Why Hardware Quality Dictates Your Kitchen’s Lifetime
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={0.3}>
            <p className="text-sm sm:text-base text-[#404D3F] mt-4 leading-relaxed max-w-2xl font-normal">
              Many kitchens fail within two years because inferior hinges and thin sliders sag under everyday Indian weights.
              We specify only heavy-duty structural mechanisms designed for continuous, demanding use.
            </p>
          </Reveal>
        </div>

        {/* 4 Precision Hardware Engineering Spec Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <Reveal key={i} direction="up" delay={0.15 + i * 0.1}>
                <div className="relative group/spec h-full flex flex-col justify-between rounded-2xl bg-white border border-[#D5E0CF] p-6 sm:p-7 shadow-[0_6px_20px_rgba(45,60,40,0.06)] hover:shadow-[0_14px_32px_rgba(45,60,40,0.12)] hover:border-[#859581]/60 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                  
                  {/* Background Image with 10% opacity, turning to 20% on hover */}
                  <img
                    src={containerBgImages[i]}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-10 group-hover/spec:opacity-20 transition-opacity duration-300 z-0"
                    aria-hidden="true"
                  />

                  {/* Top Brass Hardware Corner Rivets */}
                  <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE7A3] to-[#A38634] border border-black/20 shadow-xs flex items-center justify-center z-10">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#3D3320]" />
                  </div>
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE7A3] to-[#A38634] border border-black/20 shadow-xs flex items-center justify-center z-10">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#3D3320]" />
                  </div>

                  {/* Header & Description */}
                  <div className="pt-2 relative z-10">
                    <div className="mb-5">
                      {/* Icon Box */}
                      <div className="w-12 h-12 rounded-xl bg-[#EDF3EA] border border-[#CAD8C5] flex items-center justify-center text-[#364634] shadow-2xs group-hover/spec:scale-105 group-hover/spec:bg-[var(--color-naman-indigo)] group-hover/spec:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-[#182017] mb-2.5 group-hover/spec:text-[var(--color-naman-indigo)] transition-colors leading-snug font-display">
                      {spec.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#404D3F] leading-relaxed font-normal">
                      {spec.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
