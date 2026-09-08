import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import ImageFrame from '../../components/common/ImageFrame';
import Button from '../../components/common/Button';

export default function KitchenDetailModal({ layout, onClose }) {
  if (!layout) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="layout-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-black/10 p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[var(--color-espresso)] transition-colors"
          aria-label="Close layout specifications"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-naman-red)]">
          Layout Specifications
        </span>
        <h2 id="layout-modal-title" className="text-2xl sm:text-3xl font-bold text-[var(--color-espresso)] mt-1 mb-4">
          {layout.title}
        </h2>

        <ImageFrame
          src={layout.image}
          alt={layout.title}
          aspectRatio="aspect-[16/9]"
          className="rounded-2xl mb-6 shadow-subtle"
        />

        <p className="text-sm text-[var(--color-espresso-mid)] leading-relaxed mb-6">
          {layout.description}
        </p>

        <div className="space-y-4 mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-espresso)]">
            Included Ergonomic Features:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[var(--color-espresso-mid)]">
            {layout.features.map((feat, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--color-ivory-light)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-naman-indigo)] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--color-ivory-light)]">
              <CheckCircle className="w-4 h-4 text-[var(--color-naman-indigo)] shrink-0" />
              <span>Action Tesa HDMR Core</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--color-ivory-light)]">
              <CheckCircle className="w-4 h-4 text-[var(--color-naman-indigo)] shrink-0" />
              <span>Soft-Close Tandem Hardware</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/10">
          <Button
            to={`/contact?layout=${layout.id}`}
            variant="primary"
            size="md"
            icon={ArrowRight}
            onClick={onClose}
          >
            Get Custom Quote for {layout.shortTitle}
          </Button>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-[var(--color-espresso-mid)] hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
