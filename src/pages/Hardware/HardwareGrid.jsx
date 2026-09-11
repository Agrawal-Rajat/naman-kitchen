import React from 'react';
import { ArrowRight } from 'lucide-react';
import { hardwareItems } from '../../data/hardwareItems';
import ImageFrame from '../../components/common/ImageFrame';
import Button from '../../components/common/Button';
import Reveal from '../../components/motion/Reveal';

export default function HardwareGrid({ activeCategory }) {
  const filtered = activeCategory === 'all'
    ? hardwareItems
    : hardwareItems.filter((item) => item.category === activeCategory);

  return (
    <section className="pb-16 md:pb-24 bg-[var(--color-ivory)]">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, idx) => (
            <Reveal key={item.id} direction="up" delay={idx * 0.08}>
              <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-black/10 shadow-subtle hover:shadow-card transition-all duration-300 group">
                <ImageFrame
                  src={item.image}
                  alt={item.title}
                  aspectRatio="aspect-[4/3]"
                  className="rounded-t-3xl rounded-b-none border-none"
                  badge={item.category.toUpperCase()}
                />

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-medium text-[var(--color-espresso)] group-hover:text-[var(--color-naman-indigo)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/5 flex items-center justify-end">
                    <Button
                      to={`/contact?hardware=${item.id}`}
                      variant="ghost"
                      size="sm"
                      className="text-xs font-semibold p-1 text-[var(--color-naman-indigo)]"
                      icon={ArrowRight}
                    >
                      Inquire
                    </Button>
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
