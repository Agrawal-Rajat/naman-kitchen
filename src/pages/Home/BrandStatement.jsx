import React from 'react';
import Reveal from '../../components/motion/Reveal';

export default function BrandStatement() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-[var(--color-ivory-light)] border-y border-black/5">
      {/* Vintage Modular Kitchen Fluted / Reeded Vertical Lines Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 z-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(45, 43, 96, 0.25) 0px,
              rgba(45, 43, 96, 0.25) 1.5px,
              transparent 1.5px,
              transparent 28px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.85) 1.5px,
              rgba(255, 255, 255, 0.85) 2.5px,
              transparent 2.5px,
              transparent 28px
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Soft Center Radial Mask for Pristine Text Legibility */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(239,244,235,0.75)_0%,transparent_100%)] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Reveal direction="up" delay={0.1}>
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-[var(--color-naman-indigo)]">
              Brand Philosophy • Naman Kitchen Studio
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-medium text-[var(--color-espresso)] leading-snug">
              “किचन केवल फर्नीचर नहीं — यह जीवनशैली है। जब सही डिज़ाइन, सही मटेरियल और सही सलाह मिलती है, तभी एक किचन घर का दिल बनती है।”
            </blockquote>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] max-w-2xl mx-auto leading-relaxed">
              A modular kitchen is not just cabinet installation — it is a commitment of design,
              convenience, quality, and trust. We work not merely as vendors, but as your{' '}
              <strong className="text-[var(--color-naman-indigo)]">Life Long Partner</strong>.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <div className="pt-2 text-xs font-semibold tracking-wider text-[var(--color-warm-gray)] uppercase">
              Shri Akashdeep Gupta • Founder, Naman Kitchen Company
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
