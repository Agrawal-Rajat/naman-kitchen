import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from '../../components/common/Button';

export default function KitchenConsultationCta() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-espresso)] text-white text-center">
      <div className="container-site max-w-3xl space-y-6">
        <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-brass)]">
          Zero-Obligation Estimate
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Bring Your Floor Plan. We’ll Bring the Vision.
        </h2>
        <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          Send us your kitchen dimensions or arrange an in-person site visit anywhere in Indore and Madhya Pradesh.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button to="/contact" variant="accent" size="lg" icon={ArrowRight}>
            Book Design Consultation
          </Button>
          <Button
            href="https://wa.me/919826000000?text=Hi%20Naman%20Kitchen,%20I%20would%20like%20to%20consult%20about%20kitchen%20layouts."
            variant="outline"
            size="lg"
            className="text-white border-white/30 hover:border-white hover:text-white"
            icon={MessageCircle}
          >
            WhatsApp Floor Plan
          </Button>
        </div>
      </div>
    </section>
  );
}
