import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { kitchenLayouts } from '../../data/kitchenLayouts';
import ImageFrame from '../../components/common/ImageFrame';
import Button from '../../components/common/Button';
import Reveal from '../../components/motion/Reveal';

export default function KitchenLayoutsGrid({ onSelectLayout }) {
  return (
    <section className="section-spacing bg-[var(--color-ivory)]">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitchenLayouts.map((layout, idx) => (
            <Reveal key={layout.id} direction="up" delay={idx * 0.1}>
              <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-black/10 shadow-subtle hover:shadow-lift transition-all duration-300 group">
                <ImageFrame
                  src={layout.image}
                  alt={layout.title}
                  aspectRatio="aspect-[16/10]"
                  className="rounded-t-3xl rounded-b-none border-none"
                />

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-[var(--color-espresso)] group-hover:text-[var(--color-naman-indigo)] transition-colors">
                      {layout.title}
                    </h3>

                    <p className="text-sm text-[var(--color-espresso-mid)] mt-2 leading-relaxed">
                      {layout.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-black/5 space-y-1.5">
                      {layout.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[var(--color-espresso)]">
                          <Check className="w-3.5 h-3.5 text-[var(--color-naman-red)] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/5 flex items-center justify-between gap-3">
                    <Button
                      to={`/contact?layout=${layout.id}`}
                      variant="primary"
                      size="sm"
                      icon={ArrowRight}
                    >
                      Consult
                    </Button>
                    <button
                      type="button"
                      onClick={() => onSelectLayout(layout)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-naman-indigo)] hover:text-[var(--color-naman-red)] transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Specifications</span>
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
