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

        <div className="relative pt-6">
          {/* Continuous Architectural Overhead Brass Lighting Track Rail (Desktop) */}
          <div className="hidden md:block absolute top-6 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-brass)]/50 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-5 relative z-10">
            {processSteps.map((step, idx) => (
              <Reveal key={step.step} direction="up" delay={idx * 0.1}>
                <div className="flex flex-col h-full relative group">
                  
                  {/* Top Suspension Cord & Brass Lamp Socket Fixture */}
                  <div className="flex flex-col items-center mb-[-1px] relative z-20">
                    {/* Vertical Brass Cord */}
                    <div className="w-[2px] h-6 bg-gradient-to-b from-[var(--color-brass)] via-[#A88B38] to-[#6E581F] shadow-xs" />
                    
                    {/* Polished Brass Socket Canopy Cap */}
                    <div className="w-8 h-3.5 rounded-t-md bg-gradient-to-r from-[#B89B43] via-[#FFE59E] to-[#B89B43] border border-black/30 shadow-[0_2px_4px_rgba(0,0,0,0.2)] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Translucent Glass Pendant Lamp Shade Container */}
                  <div className="flex flex-col justify-between h-full p-6 pt-5 rounded-t-[34px] rounded-b-[24px] bg-white/65 backdrop-blur-md border-2 border-white/90 shadow-[0_16px_36px_rgba(45,43,96,0.06),inset_0_2px_4px_rgba(255,255,255,0.9)] hover:shadow-[0_20px_44px_rgba(235,178,54,0.18)] hover:border-[var(--color-brass)]/60 hover:bg-white/80 transition-all duration-300 relative overflow-hidden">
                    
                    {/* Glass Specular Glare / Reflection Curve */}
                    <div className="absolute top-2 left-3 w-[2px] h-28 bg-gradient-to-b from-white/90 via-white/30 to-transparent pointer-events-none rounded-full" />
                    <div className="absolute top-2 right-3 w-[1.5px] h-16 bg-gradient-to-b from-white/60 via-white/10 to-transparent pointer-events-none rounded-full" />

                    {/* Top Interior: Glowing Warm Lamp Bulb / Filament */}
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFFCEB] via-[#FFE187] to-[#E5AC2E] shadow-[0_0_14px_rgba(229,172,46,0.45)] group-hover:shadow-[0_0_22px_rgba(229,172,46,0.75)] group-hover:scale-105 flex items-center justify-center text-[var(--color-espresso)] font-extrabold text-sm border border-white/80 transition-all duration-300">
                        {step.step}
                      </div>
                    </div>

                    {/* Lamp Body: Title & Description */}
                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="text-lg font-normal text-[var(--color-espresso)] mb-2 font-display group-hover:text-[var(--color-naman-indigo)] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed flex-1 font-normal">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Lamp Rim / Brass Fitting Edge */}
                    <div className="mt-4 pt-3 border-t border-[var(--color-brass)]/25 flex items-center justify-between text-[11px] font-semibold text-[var(--color-naman-indigo)] relative z-10">
                      <span>Phase {step.step} Active</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)] shadow-[0_0_5px_var(--color-brass)] animate-pulse" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
