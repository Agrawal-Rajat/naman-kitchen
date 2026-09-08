import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { kitchenLayouts } from '../../data/kitchenLayouts';
import SectionHeading from '../../components/common/SectionHeading';
import ImageFrame from '../../components/common/ImageFrame';
import KitchenShapeContainer from '../../components/common/KitchenShapeContainer';
import Button from '../../components/common/Button';
import Reveal from '../../components/motion/Reveal';
import floorBg from '../../assets/floor.png';

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
        <KitchenShapeContainer shape="l-counter" className="p-6 sm:p-10 shadow-card bg-white relative overflow-hidden">
          {/* Full-Cover Background Floor Texture with low opacity */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none opacity-15 mix-blend-multiply z-0"
            style={{ backgroundImage: `url(${floorBg})` }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Visual Frame */}
            <div className="lg:col-span-7">
              <Reveal direction="up" key={activeItem.id}>
                <ImageFrame
                  src={activeItem.image}
                  alt={activeItem.title}
                  aspectRatio="aspect-[16/10]"
                  className="rounded-2xl shadow-subtle"
                  badge={`${activeItem.title}`}
                />
              </Reveal>
            </div>

            {/* Layout Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-naman-red)]">
                  Modular Configuration
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-espresso)] mt-1">
                  {activeItem.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] leading-relaxed">
                {activeItem.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-warm-gray)]">
                  Key Advantages
                </div>
                {activeItem.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-[var(--color-espresso)]">
                    <span className="w-5 h-5 rounded-full bg-[var(--color-naman-indigo)]/10 text-[var(--color-naman-indigo)] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                  Design This Layout
                </Button>
                <Link
                  to="/kitchens"
                  className="text-xs font-semibold uppercase tracking-wider text-[var(--color-naman-indigo)] hover:underline"
                >
                  View Full Layout Guide →
                </Link>
              </div>
            </div>
          </div>
        </KitchenShapeContainer>
      </div>
    </section>
  );
}
