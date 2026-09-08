import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Do you charge for the initial site visit in Indore?',
      a: 'No. Our initial site visit in Indore and preliminary floor-plan measurement consultation is completely complimentary with zero obligation.',
    },
    {
      q: 'How long does a modular kitchen take from order to installation?',
      a: 'Typically, manufacturing and precision edge-banding take 2 to 3 weeks, followed by 2 to 3 days of on-site assembly and installation by our 8–10 year experienced artisans.',
    },
    {
      q: 'Can you work directly with our architect or interior contractor?',
      a: 'Yes. A large part of our portfolio is architect-driven. We coordinate seamlessly with civil contractors, electricians, and plumbers to ensure electrical and plumbing cutouts align perfectly with your cabinetry.',
    },
    {
      q: 'What materials and boards do you use for moisture-heavy Indian cooking?',
      a: 'We use Action Tesa High-Density Moisture Resistant (HDMR) boards and waterproof boiling-grade cores, combined with Skydecor laminates/acrylics and Ozone heavy-duty hardware.',
    },
    {
      q: 'What is the "No Franchise Fee – No Royalty" partner model?',
      a: 'For entrepreneurs and dealers in Madhya Pradesh, we offer a transparent partnership where we supply wholesale materials, CAD design support, and manufacturing without charging any recurring royalties or exorbitant franchise entry fees.',
    },
  ];

  return (
    <section className="section-spacing bg-[var(--color-ivory)] border-t border-black/5">
      <div className="container-site max-w-4xl">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our consultation, manufacturing standards, and installation process."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={idx} direction="up" delay={idx * 0.08}>
                <div className="bg-white rounded-2xl border border-black/10 overflow-hidden shadow-subtle">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-black/[0.02] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-[var(--color-espresso)]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--color-naman-indigo)] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[var(--color-espresso-mid)] leading-relaxed border-t border-black/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
