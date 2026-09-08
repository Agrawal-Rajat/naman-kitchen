import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import Button from '../../components/common/Button';

export default function HardwareConsultationCta() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-ivory-light)] text-center border-t border-black/5">
      <div className="container-site max-w-3xl space-y-6">
        <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-naman-indigo)]">
          Hardware Upgrades & Wholesale
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-espresso)]">
          Need Hardware for an Ongoing Project or Renovation?
        </h2>
        <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] max-w-xl mx-auto leading-relaxed">
          Through our wholesale network, we supply individual hardware components, tandem drawers,
          and organizers directly to architects, contractors, and homeowners.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button to="/contact" variant="primary" size="lg" icon={ArrowRight}>
            Request Hardware Pricing
          </Button>
          <Button
            href="tel:+919826000000"
            variant="outline"
            size="lg"
            icon={PhoneCall}
          >
            Call Hardware Desk
          </Button>
        </div>
      </div>
    </section>
  );
}
