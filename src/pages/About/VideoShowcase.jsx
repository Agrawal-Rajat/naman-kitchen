import React from 'react';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

export default function VideoShowcase() {
  return (
    <section className="section-spacing bg-[var(--color-ivory-light)] border-t border-black/5">
      <div className="container-site max-w-5xl">
        <SectionHeading
          eyebrow="On-Site Execution"
          title="Craftsmanship in Real Motion"
          subtitle="Watch our modular assembly, laser alignment, and seamless finishing on active homeowner sites across Indore."
        />

        <Reveal direction="up" delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden shadow-lift border border-black/10 bg-black aspect-[16/9] max-w-4xl mx-auto">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
              poster="/images/kitchens/kitchen-island.webp"
            >
              <source src="/video/kitchen_walkthrough.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
