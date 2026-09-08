import React from 'react';
import { projects } from '../../data/projects';
import DrawerProjectCard from '../../components/common/DrawerProjectCard';
import Reveal from '../../components/motion/Reveal';

export default function ProjectsGrid({ activeFilter, onSelectProject }) {
  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.layout.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="pb-16 md:pb-24 bg-[var(--color-ivory)]">
      <div className="container-site">
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-black/10">
            <p className="text-base text-[var(--color-espresso-mid)]">
              No projects found matching the "{activeFilter}" filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {filtered.map((project, idx) => (
              <Reveal key={project.id} direction="up" delay={Math.min(idx * 0.1, 0.4)}>
                <DrawerProjectCard
                  project={project}
                  onSelectProject={onSelectProject}
                  autoOpenDelay={0.15 + (idx % 3) * 0.15}
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

