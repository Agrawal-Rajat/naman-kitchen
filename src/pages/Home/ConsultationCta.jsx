import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../../components/common/Icons';
import Button from '../../components/common/Button';
import Reveal from '../../components/motion/Reveal';
import ctaBg from '../../assets/cta.png';

export default function ConsultationCta() {
  return (
    <section className="section-spacing bg-[#1D201A] text-white relative overflow-hidden shape-chimney mx-2 sm:mx-4 lg:mx-8 my-6 sm:my-10">
      {/* Background CTA Kitchen Ambience Image with 10% Opacity */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none opacity-10 z-0"
        style={{ backgroundImage: `url(${ctaBg})` }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

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
                icon={WhatsAppIcon}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
