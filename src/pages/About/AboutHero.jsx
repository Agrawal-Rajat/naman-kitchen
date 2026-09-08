import React from 'react';
import Eyebrow from '../../components/common/Eyebrow';
import Reveal from '../../components/motion/Reveal';

export default function AboutHero() {
  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-[var(--color-ivory-light)] to-[var(--color-ivory)] border-b border-black/5 hero-floor-bg">
      <div className="container-site">
        <div className="max-w-3xl">
          <Reveal direction="up" delay={0.1}>
            <Eyebrow className="mb-4">Our Story & Heritage</Eyebrow>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-espresso)] leading-[1.1] mb-6">
              More Than Furniture — A Life Long Commitment
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[var(--color-espresso-mid)] leading-relaxed">
              Founded on 1 March 2017 in Indore by Shri Akashdeep Gupta, Naman Kitchen was born from a simple
              conviction: that modular kitchens should not merely be sold as catalogue boxes, but designed
              with honest guidance, architectural precision, and enduring personal trust.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
