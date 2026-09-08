import React from 'react';
import { ShieldCheck, Weight, Flame, Sparkles, Activity, CheckCircle2 } from 'lucide-react';
import Reveal from '../../components/motion/Reveal';

export default function HardwareFeatureHighlight() {
  const specs = [
    {
      icon: Weight,
      title: 'High Load Capacity (45kg+)',
      desc: 'Engineered specifically for heavy brass, cast iron, and large stainless steel Indian cookware without sagging.',
      specCode: 'TEST // 45KG-MAX',
      techBadge: 'Full-Load Deflection < 1mm',
      tag: 'Heavy Cookware',
    },
    {
      icon: ShieldCheck,
      title: '100,000+ Cycle Reliability',
      desc: 'Precision hydraulic dampeners tested for over 25 years of daily smooth, silent, and whisper-quiet closure.',
      specCode: 'TEST // 100K-CYCLES',
      techBadge: 'DIN EN 15338 Verified',
      tag: 'Lifelong Durability',
    },
    {
      icon: Flame,
      title: 'Moisture & Oil Resilient',
      desc: 'Anti-corrosive multi-layer nickel-chrome electroplating resistant to turmeric, high steam, and Indian kitchen vapours.',
      specCode: 'TEST // SALT-SPRAY-96H',
      techBadge: 'ISO 9227 Grade 5',
      tag: 'Anti-Corrosive',
    },
    {
      icon: Sparkles,
      title: 'Ergonomic Full Extension',
      desc: '100% telescopic slide channels providing completely unobstructed access all the way to the deepest rear of each drawer.',
      specCode: 'TEST // 100% OVERTRAVEL',
      techBadge: 'Zero Blind-Corner Reach',
      tag: 'Full Access',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#181613] text-white relative overflow-hidden border-t border-white/10">
      {/* Subtle Fluted Vertical Background Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(255,255,255,0.06) 38px, rgba(255,255,255,0.06) 40px)'
        }}
      />
      
      {/* Ambient Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial from-[#B8A04A]/10 to-transparent pointer-events-none blur-3xl" />

      <div className="container-site relative z-10">
        <div className="max-w-3xl mb-14">
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[var(--color-brass)]/30 text-[var(--color-brass)] text-xs uppercase font-bold tracking-widest mb-3">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Built For Indian Cooking & Heavy Utensils</span>
            </div>
          </Reveal>
          
          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Why Hardware Quality Dictates Your Kitchen’s Lifetime
            </h2>
          </Reveal>
          
          <Reveal direction="up" delay={0.3}>
            <p className="text-sm sm:text-base text-white/70 mt-4 leading-relaxed max-w-2xl">
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
                <div className="relative group/spec h-full flex flex-col justify-between rounded-2xl bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/15 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md hover:border-[var(--color-brass)]/80 hover:shadow-[0_16px_36px_rgba(184,160,74,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                  
                  {/* Top Brass Hardware Corner Rivets */}
                  <div className="absolute top-3 left-3 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE7A3] to-[#A38634] border border-black/40 shadow-xs flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#3D3320]" />
                  </div>
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE7A3] to-[#A38634] border border-black/40 shadow-xs flex items-center justify-center">
                    <div className="w-0.5 h-0.5 rounded-full bg-[#3D3320]" />
                  </div>

                  {/* Header: Spec Code & Tag */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-5">
                      {/* Icon Box with Dual-Tone Gradient */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-naman-indigo)] to-[var(--color-naman-indigo-light)] border border-white/20 flex items-center justify-center text-white shadow-md group-hover/spec:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-[#FFEBB0]" />
                      </div>
                      
                      <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/10 uppercase">
                        {spec.specCode}
                      </span>
                    </div>

                    <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-brass)] mb-1.5">
                      {spec.tag}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover/spec:text-[#FFEBB0] transition-colors leading-snug">
                      {spec.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                      {spec.desc}
                    </p>
                  </div>

                  {/* Bottom Technical Benchmark Plate */}
                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-white/90 font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#6EE7B7]" />
                      {spec.techBadge}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)] shadow-[0_0_6px_var(--color-brass)] animate-pulse" />
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
