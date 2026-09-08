import React from 'react';
import Eyebrow from '../../components/common/Eyebrow';
import Reveal from '../../components/motion/Reveal';

export default function ProjectsHero() {
  return (
    <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-[var(--color-ivory-light)] to-[var(--color-ivory)] border-b border-black/5 hero-floor-bg">
      <div className="container-site">
        <div className="max-w-3xl">
          <Reveal direction="up" delay={0.1}>
            <Eyebrow className="mb-4">Delivered Across Madhya Pradesh</Eyebrow>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-espresso)] leading-[1.1] mb-6">
              Completed Kitchen Projects
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-[var(--color-espresso-mid)] leading-relaxed">
              Take a closer look at our finished installations across Indore, Bhopal, and surrounding regions.
              From modern compact city apartments to expansive luxury villas, see how our 100% site-accuracy
              approach transforms everyday kitchens into the heart of the home.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
