import React from 'react';
import Eyebrow from '../../components/common/Eyebrow';
import Reveal from '../../components/motion/Reveal';

export default function HardwareHero() {
  return (
    <section className="relative pt-8 pb-10 md:pt-12 md:pb-14 bg-[var(--color-ivory-light)] border-b border-black/5 overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 pointer-events-none"
        style={{ backgroundImage: `url('/images/hardware/hardware-cutlery.webp')` }}
        aria-hidden="true"
      />
      {/* Soft Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ivory-light)] via-[var(--color-ivory-light)]/90 to-[var(--color-ivory-light)]/30 pointer-events-none z-0" />

      <div className="container-site relative z-10">
        <div className="max-w-3xl">
          <Reveal direction="up" delay={0.1}>
            <Eyebrow className="mb-4">Precision Engineering</Eyebrow>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-espresso)] leading-[1.1] mb-6">
              Hardware & Smart Storage Systems
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[var(--color-espresso-mid)] leading-relaxed">
              Quiet elegance meets rigorous everyday engineering. From tandem soft-close runners
              capable of holding heavy stainless steel vessels to blind corner carousels, discover
              the mechanisms that make your kitchen feel effortless.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
