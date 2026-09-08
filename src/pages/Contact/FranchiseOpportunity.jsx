import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../../components/common/Button';

export default function FranchiseOpportunity() {
  return (
    <section className="py-16 md:py-20 bg-[var(--color-ivory-light)] border-t border-black/5">
      <div className="container-site">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#2D2B60] to-[var(--color-espresso)] text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-brass)]" />
                <span>Partner & Franchise Network</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                Partner with Naman Kitchen: “No Franchise Fee – No Royalty Model”
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                Are you an interior designer, contractor, or entrepreneur looking to build a thriving modular kitchen studio
                in your district? We provide full design software support, direct wholesale hardware pricing, and complete manufacturing backup.
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-white/70 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brass)]" />
                  Zero Franchise Surcharges
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brass)]" />
                  Wholesale Material Pipeline
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-brass)]" />
                  Site Execution Guidance
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Button
                href="https://wa.me/919826000000?text=Hello%20Naman%20Kitchen,%20I%20am%20interested%20in%20a%20Franchise%20/%20Dealer%20opportunity."
                variant="accent"
                size="lg"
                icon={ArrowRight}
              >
                Inquire for Franchise
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
