import React from 'react';
import { ShieldCheck, Weight, Flame, Sparkles } from 'lucide-react';
import Reveal from '../../components/motion/Reveal';

export default function HardwareFeatureHighlight() {
  const specs = [
    {
      icon: Weight,
      title: 'High Load Capacity (45kg+)',
      desc: 'Engineered specifically for heavy brass, cast iron, and large stainless steel Indian cookware.',
    },
    {
      icon: ShieldCheck,
      title: '100,000+ Cycle Reliability',
      desc: 'Precision hydraulic dampeners tested for decades of daily smooth and silent operation.',
    },
    {
      icon: Flame,
      title: 'Moisture & Oil Resilient',
      desc: 'Anti-corrosive multi-layer plating resistant to turmeric, steam, and everyday Indian kitchen vapours.',
    },
    {
      icon: Sparkles,
      title: 'Ergonomic Full Extension',
      desc: '100% full-extension slide channels giving unobstructed access all the way to the back of each drawer.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--color-espresso)] text-white">
      <div className="container-site">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-brass)]">
            Built For Indian Cooking
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Why Hardware Quality Dictates Your Kitchen’s Lifetime
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Many kitchens fail within two years because inferior hinges and thin sliders sag under everyday Indian weights.
            We specify only heavy-duty structural mechanisms designed for continuous, demanding use.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-naman-indigo)] flex items-center justify-center text-white mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-medium text-white mb-2">{spec.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed">{spec.desc}</p>
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
