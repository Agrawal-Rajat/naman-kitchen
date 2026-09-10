import React from 'react';
import { X, MapPin, ArrowRight } from 'lucide-react';
import Button from '../../components/common/Button';

export default function ProjectDetailModal({ project, onClose }) {
  const [selectedImgIndex, setSelectedImgIndex] = React.useState(0);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [project.image];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-black/10 p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[var(--color-espresso)] transition-colors z-20"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-naman-red)] mb-1">
          <MapPin className="w-4 h-4" />
          <span>{project.location}</span>
        </div>

        <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-[var(--color-espresso)] mb-4">
          {project.title}
        </h2>

        {/* Main Active Image Frame */}
        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-3 shadow-subtle bg-stone-900">
          <img
            src={images[selectedImgIndex]}
            alt={`${project.title} view ${selectedImgIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Thumbnail Selector Strip if multiple images */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImgIndex(idx)}
                className={`relative w-16 h-12 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                  idx === selectedImgIndex
                    ? 'border-[var(--color-naman-red)] ring-2 ring-[var(--color-naman-red)]/20 scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[var(--color-ivory-light)] mb-6 text-xs text-[var(--color-espresso)]">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-warm-gray)]">
              Layout Type
            </span>
            <div className="font-semibold text-sm mt-0.5">{project.layout}</div>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-warm-gray)]">
              Finish Style
            </span>
            <div className="font-semibold text-sm mt-0.5">{project.style}</div>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-warm-gray)]">
              Core Substrate
            </span>
            <div className="font-semibold text-sm mt-0.5">Action Tesa HDMR</div>
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-warm-gray)]">
              Artisan Installation
            </span>
            <div className="font-semibold text-sm mt-0.5">Naman Kitchen Team</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/10">
          <Button
            to={`/contact?inspiredBy=${project.id}`}
            variant="primary"
            size="md"
            icon={ArrowRight}
            onClick={onClose}
          >
            I Want a Kitchen Like This
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
