import React from 'react';
import Eyebrow from '../../components/common/Eyebrow';
import Reveal from '../../components/motion/Reveal';

export default function ContactHero() {
  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-[var(--color-ivory-light)] to-[var(--color-ivory)] border-b border-black/5 hero-floor-bg">
      <div className="container-site">
        <div className="max-w-3xl">
          <Reveal direction="up" delay={0.1}>
            <Eyebrow className="mb-4">Get in Touch</Eyebrow>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-espresso)] leading-[1.1] mb-6">
              Start Your Modular Kitchen Journey
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[var(--color-espresso-mid)] leading-relaxed">
              Have a floor plan to evaluate, need a site visit in Indore, or interested in a franchise partnership?
              Fill in our design worksheet below or connect directly with our studio team.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
