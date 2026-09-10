import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../../components/common/Icons';
import Button from '../../components/common/Button';
import Reveal from '../../components/motion/Reveal';
import ctaBg from '../../assets/cta.png';

export default function KitchenConsultationCta() {
  return (
    <section className="py-16 md:py-24 bg-[#1D201A] text-white text-center relative overflow-hidden">
      {/* Background CTA Kitchen Ambience Image with 10% Opacity */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none opacity-10 z-0"
        style={{ backgroundImage: `url(${ctaBg})` }}
        aria-hidden="true"
      />

      <div className="container-site max-w-3xl space-y-6 relative z-10">
        <Reveal direction="up" delay={0.1}>
          <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-brass)] inline-block">
            Zero-Obligation Estimate
          </span>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Bring Your Floor Plan. We’ll Bring the Vision.
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
            Send us your kitchen dimensions or arrange an in-person site visit anywhere in Indore and Madhya Pradesh.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button to="/contact" variant="accent" size="lg" icon={ArrowRight}>
              Book Design Consultation
            </Button>
            <Button
              href="https://wa.me/919826000000?text=Hi%20Naman%20Kitchen,%20I%20would%20like%20to%20consult%20about%20kitchen%20layouts."
              variant="outline"
              size="lg"
              className="text-white border-white/30 hover:border-white hover:text-white"
              icon={WhatsAppIcon}
            >
              WhatsApp Floor Plan
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
