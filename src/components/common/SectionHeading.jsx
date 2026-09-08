import React from 'react';
import Eyebrow from './Eyebrow';

/**
 * SectionHeading — standard architectural header block.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align] || 'text-center items-center mx-auto';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 md:mb-16 ${alignClasses} ${className}`}>
      {eyebrow && <Eyebrow dark={dark} className="mb-4">{eyebrow}</Eyebrow>}
      {title && (
        <h2 className={`text-3xl md:text-5xl font-bold tracking-tight ${dark ? 'text-white' : 'text-[var(--color-espresso)]'}`}>
          {title}
        </h2>
      )}
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-[var(--color-espresso-mid)]'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-[2px] w-16 rounded-full bg-gradient-to-r from-[var(--color-naman-indigo)] to-[var(--color-naman-red)] ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
