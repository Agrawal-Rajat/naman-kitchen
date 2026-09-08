import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import SectionHeading from '../../components/common/SectionHeading';
import DrawerProjectCard from '../../components/common/DrawerProjectCard';
import Button from '../../components/common/Button';
import Reveal from '../../components/motion/Reveal';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="section-spacing bg-[var(--color-ivory-light)] border-t border-black/5">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            eyebrow="Crafted in Indore & MP"
            title="Real Homes. Delivered Excellence."
            subtitle="Explore our completed kitchen installations across Vijay Nagar, Palasia, AB Road, and surrounding regions. Smooth pull-out drawer showcases with real site images."
            align="left"
            className="mb-0"
          />
          <div className="mt-6 md:mt-0 shrink-0">
            <Button to="/projects" variant="outline" size="md" icon={ArrowRight}>
              View All Projects
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {featured.map((project, index) => (
            <Reveal key={project.id} direction="up" delay={index * 0.15}>
              <DrawerProjectCard
                project={project}
                autoOpenDelay={0.25 + index * 0.15}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

