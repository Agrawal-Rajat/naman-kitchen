import React, { useState } from 'react';

/**
 * ImageFrame — architectural rounded frame with fallback handling,
 * loading state, and subtle hover sheen.
 */
export default function ImageFrame({
  src,
  alt = 'Naman Kitchen',
  aspectRatio = 'aspect-[16/10]',
  className = '',
  imageClassName = '',
  caption,
  badge,
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <figure className={`relative group overflow-hidden rounded-2xl bg-[var(--color-ivory-dark)] border border-black/5 shadow-subtle ${aspectRatio} ${className}`}>
      {/* Badge tag if provided */}
      {badge && (
        <span className="absolute top-3 left-3 z-20 px-2.5 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-md text-[var(--color-espresso)] shadow-sm">
          {badge}
        </span>
      )}

      {/* Actual Image or Fallback */}
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imageClassName}`}
        />
      ) : (
        /* Stylized Architectural Placeholder if image is missing */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#2D2B60]/10 via-[var(--color-ivory-dark)] to-[#E51D2A]/10 text-center select-none">
          <svg
            className="w-12 h-12 text-[var(--color-naman-indigo)]/40 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-espresso-mid)]">
            {alt}
          </span>
          <span className="text-[11px] text-[var(--color-warm-gray)] mt-1">
            Naman Kitchen Studio
          </span>
        </div>
      )}

      {/* Subtle overlay sheen */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {caption && (
        <figcaption className="sr-only">{caption}</figcaption>
      )}
    </figure>
  );
}
