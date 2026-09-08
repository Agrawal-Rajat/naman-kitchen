import React from 'react';
import { ArrowRight, Home as HomeIcon } from 'lucide-react';
import Button from '../../components/common/Button';

export default function NotFoundContent() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md text-center space-y-6">
        <span className="text-6xl sm:text-7xl font-extrabold text-[var(--color-naman-red)]">
          404
        </span>

        <h1 className="text-3xl font-bold text-[var(--color-espresso)]">
          This Recipe Seems Missing
        </h1>

        <p className="text-sm text-[var(--color-espresso-mid)] leading-relaxed">
          The kitchen blueprint or page you are searching for might have been moved, remodeled, or does not exist.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <Button to="/" variant="primary" size="md" icon={HomeIcon}>
            Back to Home
          </Button>
          <Button to="/kitchens" variant="outline" size="md" icon={ArrowRight}>
            Explore Kitchens
          </Button>
        </div>
      </div>
    </section>
  );
}
