import React from 'react';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import KitchenShapeContainer from '../../components/common/KitchenShapeContainer';
import Reveal from '../../components/motion/Reveal';

export default function TestimonialsSection() {
  const referenceStories = [
    {
      highlight: '“Reference-Driven Growth Across Indore”',
      body: 'Our biggest source of new homeowners isn’t loud advertising — it’s word-of-mouth recommendations from satisfied families who experience our punctuality and precision firsthand.',
      tag: 'Customer Referral',
    },
    {
      highlight: '“Not Just Vendors — Life Long Partners”',
      body: 'From first site measurement to post-installation service, our relationship doesn’t end when the final drawer is installed. We remain available for maintenance and upgrades.',
      tag: 'Service Culture',
    },
    {
      highlight: '“Direct Site Consultation & Guidance”',
      body: 'Visiting client homes personally allows us to recommend solutions that fit actual family routines and budget limits, preventing unnecessary contractor expenses.',
      tag: 'Transparency',
    },
  ];

  return (
    <section className="section-spacing bg-[var(--color-ivory-light)] border-t border-black/5">
      <div className="container-site">
        <SectionHeading
          eyebrow="Community Trust"
          title="Built on Reference-Driven Word of Mouth"
          subtitle="Since 2017, Naman Kitchen has grown across Madhya Pradesh through genuine customer trust and direct recommendations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {referenceStories.map((story, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.15}>
              <KitchenShapeContainer
                shape="cabinet"
                className="hover:shadow-card transition-all duration-300 h-full"
                bgClassName="bg-white p-8 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-1 text-[var(--color-brass)] mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <h3 className="text-lg font-normal text-[var(--color-espresso)] mb-3">
                    {story.highlight}
                  </h3>

                  <p className="text-sm text-[var(--color-espresso-mid)] leading-relaxed">
                    {story.body}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[var(--color-naman-indigo)]">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-naman-red)]" />
                    {story.tag}
                  </span>
                  <span>Indore & MP</span>
                </div>
              </KitchenShapeContainer>
            </Reveal>
          ))}
        </div>

        {/* Real Instagram Community Link */}
        <Reveal direction="up" delay={0.4}>
          <div className="text-center">
            <a
              href="https://www.instagram.com/kitchensnaman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-naman-indigo)] hover:text-[var(--color-naman-red)] transition-colors"
            >
              <span>See client installations on Instagram @kitchensnaman</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
