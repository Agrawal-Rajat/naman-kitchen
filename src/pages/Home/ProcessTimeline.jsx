import React from 'react';
import { processSteps } from '../../data/processSteps';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

export default function ProcessTimeline() {
  return (
    <section className="section-spacing bg-[var(--color-ivory-light)] border-t border-black/5">
      <div className="container-site">
        <SectionHeading
          eyebrow="Execution Flow"
          title="From First Measurement to Final Installation"
          subtitle="We eliminate surprises with a structured 5-step journey that ensures every millimeter fits your lifestyle and budget."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {processSteps.map((step, idx) => (
            <Reveal key={step.step} direction="up" delay={idx * 0.1}>
              <div className="flex flex-col h-full bg-white p-6 rounded-2xl border border-black/10 shadow-subtle hover:shadow-card transition-all duration-300 relative group">
                <div className="text-3xl text-[var(--color-naman-red)] font-extrabold mb-3">
                  {step.step}
                </div>

                <h3 className="text-lg font-medium text-[var(--color-espresso)] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed flex-1">
                  {step.description}
                </p>

                <div className="mt-4 pt-3 border-t border-black/5 text-[11px] font-semibold text-[var(--color-naman-indigo)] flex items-center gap-1">
                  <span>Phase {step.step} Complete</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
