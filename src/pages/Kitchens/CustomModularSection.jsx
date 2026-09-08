import React from 'react';
import { Compass, PenTool, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '../../components/common/Button';
import Reveal from '../../components/motion/Reveal';
import floorBg from '../../assets/floor.png';

export default function CustomModularSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-ivory-light)] border-t border-black/5">
      <div className="container-site">
        <Reveal direction="up">
          <div className="relative overflow-hidden bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-card">
            {/* Background Floor Texture with low opacity identical to hero section */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none opacity-15 mix-blend-multiply z-0"
              style={{ backgroundImage: `url(${floorBg})` }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-naman-indigo)]">
                  Bespoke Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-espresso)]">
                  Have a Complex Floor Plan or Working with an Architect?
                </h2>
                <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] leading-relaxed">
                  Not all Indian homes adhere to standard rectangular grids. We specialize in custom modular solutions
                  collaborating directly with civil contractors and interior architects. From curved walls to pillar concealments
                  and dedicated pooja corner alignments, we ensure flawless integration.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-semibold text-[var(--color-espresso)]">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[var(--color-naman-red)]" />
                    <span>On-Site Laser Measurement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-[var(--color-naman-indigo)]" />
                    <span>Architect CAD Coordination</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[var(--color-brass)]" />
                    <span>Custom Carcass Fabrication</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <Button to="/contact" variant="accent" size="lg" icon={ArrowRight}>
                  Discuss Custom Project
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
