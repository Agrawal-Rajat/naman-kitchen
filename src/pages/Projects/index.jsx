import React, { useState } from 'react';
import { Helmet } from '../../utils/Helmet';
import ProjectsHero from './ProjectsHero';
import ProjectsFilter from './ProjectsFilter';
import ProjectsGrid from './ProjectsGrid';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Helmet
        title="Modular Kitchen Projects in Indore & MP | Naman Kitchen"
        description="View our portfolio of modular kitchen projects completed across Indore, Bhopal, and Madhya Pradesh. Real homes with 100% site accuracy and artisan craftsmanship."
      />
      <ProjectsHero />
      <div className="container-site">
        <ProjectsFilter
          activeFilter={activeFilter}
          onSelectFilter={(f) => setActiveFilter(f)}
        />
      </div>
      <ProjectsGrid
        activeFilter={activeFilter}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
