import React from 'react';

/**
 * Eyebrow — architectural metadata badge/tag.
 */
export default function Eyebrow({ children, className = '', dark = false }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${
        dark
          ? 'bg-white/10 text-white/90 border border-white/15'
          : 'bg-[var(--color-ivory-dark)] text-[var(--color-naman-indigo)] border border-[rgba(45,43,96,0.12)]'
      } ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-naman-red)] shrink-0 animate-pulse" />
      <span>{children}</span>
    </div>
  );
}
