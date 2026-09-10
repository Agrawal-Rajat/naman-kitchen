import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export default function DrawerProjectCard({
  project,
  onSelectProject,
  priority = false,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = project.images && project.images.length > 0 
    ? project.images 
    : [project.image];

  // Auto-advance image carousel every 4 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="drawer-card-box group flex flex-col h-full bg-white shadow-card">
      {/* ========================================================
          DRAWER HANDLE & TOP PANEL (Always Decorative Cabinet Trim)
          ======================================================== */}
      <div className="drawer-face-panel flex flex-col items-center justify-between gap-2.5">
        {/* Realistic Polished Brass Cabinet Handle */}
        <div className="drawer-handle-bar">
          <div className="drawer-handle-dot" />
          <div className="h-0.5 w-10 bg-white/40 rounded-full" />
          <div className="drawer-handle-dot" />
        </div>
      </div>

      {/* ========================================================
          DRAWER INTERIOR: ALWAYS OPEN
          ======================================================== */}
      <div className="flex flex-col flex-1">
        {/* Recessed Drawer Compartment with Shadow Edge */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[var(--color-ivory-light)] to-white">
          
          {/* Image Carousel Container */}
          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-stone-900 shadow-inner group/carousel mb-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${project.title} - View ${currentImageIndex + 1}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => onSelectProject && onSelectProject(project)}
                loading={priority ? 'eager' : 'lazy'}
              />
            </AnimatePresence>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

            {/* Carousel Navigation Arrows (Visible on hover if multiple images) */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}

            {/* Bottom Carousel Indicators & Badge */}
            <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-white z-10">
              <div className="flex items-center gap-1.5">
                {images.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(dotIdx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIdx === currentImageIndex
                        ? 'w-5 bg-[var(--color-naman-red)]'
                        : 'w-1.5 bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-xs">
                {currentImageIndex + 1} / {images.length}
              </span>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-2">
            <h3
              onClick={() => onSelectProject && onSelectProject(project)}
              className="text-lg sm:text-xl font-medium text-[var(--color-espresso)] hover:text-[var(--color-naman-indigo)] transition-colors cursor-pointer leading-snug"
            >
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-[var(--color-naman-red)] font-semibold pt-1">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{project.location}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
