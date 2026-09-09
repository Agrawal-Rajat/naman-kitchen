import React from 'react';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import Button from '../../components/common/Button';
import Reveal from '../../components/motion/Reveal';
import ctaBg from '../../assets/cta.png';

export default function ConsultationCta() {
  return (
    <section className="section-spacing bg-[#1D201A] text-white relative overflow-hidden shape-chimney mx-2 sm:mx-4 lg:mx-8 my-6 sm:my-10">
      {/* Background CTA Kitchen Ambience Image with Soft Opacity */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none opacity-20 z-0"
        style={{ backgroundImage: `url(${ctaBg})` }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-wider border border-white/15">
              <Calendar className="w-3.5 h-3.5 text-[var(--color-brass)]" />
              <span>Start Your Modular Kitchen Journey</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Design the Kitchen Your Home Deserves?
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Book a free consultation with our kitchen design specialists. We evaluate your floor plan,
              suggest layout optimizations, and prepare an honest cost estimate with zero pressure.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button to="/contact" variant="accent" size="lg" icon={ArrowRight}>
                Book a Free Consultation
              </Button>
              <Button
                href="https://wa.me/919826000000?text=Hello%20Naman%20Kitchen,%20I%20would%20like%20to%20consult%20about%20a%20modular%20kitchen."
                variant="outline"
                size="lg"
                className="text-white border-white/30 hover:border-white hover:text-white"
                icon={MessageCircle}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.5}>
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
              <span>✓ Free Floor Plan Review</span>
              <span>✓ Transparent Material Breakdown</span>
              <span>✓ Direct Guidance by Founder</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
