import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { kitchenLayouts } from '../../data/kitchenLayouts';
import SectionHeading from '../../components/common/SectionHeading';
import ImageFrame from '../../components/common/ImageFrame';
import KitchenShapeContainer from '../../components/common/KitchenShapeContainer';
import Button from '../../components/common/Button';
import Reveal from '../../components/motion/Reveal';

export default function KitchenLayoutExplorer() {
  const [selectedLayout, setSelectedLayout] = useState(kitchenLayouts[0].id);
  const activeItem = kitchenLayouts.find((item) => item.id === selectedLayout) || kitchenLayouts[0];

  return (
    <section className="section-spacing bg-[var(--color-ivory)]">
      <div className="container-site">
        <SectionHeading
          eyebrow="Explore Layouts"
          title="Engineered for Every Floor Plan"
          subtitle="Whether your apartment needs space optimization or your villa demands a statement island, discover modular architectures crafted for seamless movement."
        />

        {/* Layout Tabs / Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {kitchenLayouts.map((layout) => {
            const isSelected = layout.id === selectedLayout;
            return (
              <button
                key={layout.id}
                type="button"
                onClick={() => setSelectedLayout(layout.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? 'bg-[var(--color-naman-indigo)] text-white shadow-md scale-105'
                    : 'bg-[var(--color-ivory-dark)] text-[var(--color-espresso)] hover:bg-black/10'
                }`}
              >
                {layout.shortTitle}
              </button>
            );
          })}
        </div>

        {/* Active Layout Showcase Card — Modular L-Counter Architectural Container */}
        <KitchenShapeContainer shape="l-counter" bgClassName="bg-[#F5EFE6]" className="p-6 sm:p-10 shadow-card relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Visual Frame */}
            <div className="lg:col-span-7">
              <Reveal direction="up" key={activeItem.id}>
                <ImageFrame
                  src={activeItem.image}
                  alt={activeItem.title}
                  aspectRatio="aspect-[16/10]"
                  className="rounded-2xl shadow-subtle"
                />
              </Reveal>
            </div>

            {/* Layout Details */}
            <div className="lg:col-span-5 space-y-3">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-espresso)]">
                  {activeItem.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] leading-relaxed">
                {activeItem.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-1.5 pt-2">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-warm-gray)]">
                  Key Advantages
                </div>
                {activeItem.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[var(--color-espresso)]">
                    <span className="w-4 h-4 rounded-full bg-[var(--color-naman-indigo)]/10 text-[var(--color-naman-indigo)] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                  Design This Layout
                </Button>
              </div>
            </div>
          </div>
        </KitchenShapeContainer>
      </div>
    </section>
  );
}
