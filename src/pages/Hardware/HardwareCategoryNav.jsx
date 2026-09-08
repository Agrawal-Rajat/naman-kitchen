import React from 'react';

export default function HardwareCategoryNav({ activeCategory, onSelectCategory }) {
  const categories = [
    { id: 'all', label: 'All Hardware' },
    { id: 'drawers', label: 'Drawers & Runners' },
    { id: 'storage', label: 'Storage & Pantries' },
    { id: 'mechanisms', label: 'Lift-Ups & Hinges' },
    { id: 'organizers', label: 'Organizers & Trays' },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 py-8">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              isActive
                ? 'bg-[var(--color-naman-indigo)] text-white shadow-md scale-105'
                : 'bg-[var(--color-ivory-dark)] text-[var(--color-espresso)] hover:bg-black/10'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
