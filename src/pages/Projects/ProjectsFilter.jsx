import React from 'react';

export default function ProjectsFilter({ activeFilter, onSelectFilter }) {
  const filters = [
    'All',
    'L-Shaped',
    'Straight',
    'Parallel',
    'U-Shaped',
    'Island',
    'Custom',
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 py-8">
      {filters.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onSelectFilter(filter)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              isActive
                ? 'bg-[var(--color-naman-indigo)] text-white shadow-md scale-105'
                : 'bg-[var(--color-ivory-dark)] text-[var(--color-espresso)] hover:bg-black/10'
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
