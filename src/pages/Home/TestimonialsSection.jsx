import React from 'react';
import { Star, CheckCircle, ExternalLink, Quote } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import Reveal from '../../components/motion/Reveal';

// Stylized Realistic Brass Chain Connector between Adjacent Cards
function ChainConnector() {
  return (
    <div className="flex items-center justify-center shrink-0 px-2 sm:px-3 select-none pointer-events-none" aria-hidden="true">
      <div className="flex items-center -space-x-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]">
        {/* Shackle / Eyelet Anchor */}
        <div className="w-3.5 h-3.5 rounded-full border-2 border-[#C5A85A] bg-[#2A241C] shadow-xs" />
        {/* Chain Link 1 */}
        <div className="w-5 h-2.5 rounded-full border border-[#B89B43] bg-gradient-to-r from-[#A38634] via-[#FFF0C2] to-[#8A6F26] shadow-xs transform -rotate-12" />
        {/* Chain Link 2 (Interlocking) */}
        <div className="w-5 h-2.5 rounded-full border border-[#9A7D2B] bg-gradient-to-r from-[#8A6F26] via-[#FFF0C2] to-[#A38634] shadow-xs transform rotate-12" />
        {/* Chain Link 3 */}
        <div className="w-5 h-2.5 rounded-full border border-[#B89B43] bg-gradient-to-r from-[#A38634] via-[#FFF0C2] to-[#8A6F26] shadow-xs transform -rotate-12" />
        {/* Shackle / Eyelet Anchor */}
        <div className="w-3.5 h-3.5 rounded-full border-2 border-[#C5A85A] bg-[#2A241C] shadow-xs" />
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const referenceStories = [
    {
      body: 'Our experience with Naman Kitchen was completely smooth. Their team maintained strict timelines, transparent pricing, and absolute precision from initial site measurements to final handover.',
      author: 'Vikram Sharma',
      designation: 'Homeowner',
    },
    {
      body: 'As an architect, I value partners who execute complex modular designs without constant oversight. Naman Kitchen handles hardware details and acrylic finishes with extreme precision.',
      author: 'Ar. Sunil Mehta',
      designation: 'Principal Architect',
    },
    {
      body: 'They personally inspected our kitchen layout and guided us on optimizing storage for daily Indian cooking. Their advice saved us from costly design mistakes and extra expenses.',
      author: 'Ananya Agrawal',
      designation: 'Homeowner',
    },
    {
      body: 'The German tandem drawer channels and acrylic shutters were delivered and installed right on schedule. Their post-installation service and cleanup was truly remarkable.',
      author: 'Dr. V. K. Sharma',
      designation: 'Consultant Surgeon',
    },
    {
      body: 'Heavy stainless steel baskets, boiling-water resistant plywood, and chimney clearances were planned thoughtfully. 3 years later, everything still functions like day one.',
      author: 'Priya & Rajesh Joshi',
      designation: 'Villa Owners',
    },
    {
      body: 'They provided itemized quotes upfront with official warranty certificates for every single hinge and runner. The most honest modular kitchen team we have worked with.',
      author: 'Sanjay Gupta',
      designation: 'Interior Consultant',
    },
  ];

  // Repeat stories twice to ensure a seamless infinite ticker loop
  const marqueeItems = [...referenceStories, ...referenceStories];

  return (
    <section className="section-spacing bg-[var(--color-ivory-light)] text-[var(--color-espresso)] border-t border-black/5 overflow-hidden relative">
      <div className="container-site mb-8">
        <SectionHeading
          eyebrow="Community Trust & Reputation"
          title="Built on Reference-Driven Word of Mouth"
          subtitle="Since 2017, Naman Kitchen has grown across Madhya Pradesh through genuine customer trust, architect references, and direct family recommendations."
        />
      </div>

      {/* Continuously Moving Chain Carousel Marquee */}
      <Reveal direction="up" delay={0.15}>
        <div className="relative w-full mask-edge-fade py-6 overflow-hidden">
          <div className="animate-marquee-chain flex items-center">
            {marqueeItems.map((story, idx) => (
              <React.Fragment key={idx}>
                {/* Individual Chained Review Pod */}
                <div className="w-[320px] sm:w-[380px] shrink-0 p-1">
                  <div className="relative rounded-2xl bg-white border border-[#D5DDD0] shadow-[0_8px_24px_rgba(45,43,96,0.06)] p-6 sm:p-7 flex flex-col justify-between min-h-[270px] h-full transition-all duration-300 hover:shadow-[0_12px_32px_rgba(45,43,96,0.12)] hover:-translate-y-1 group">
                    
                    {/* Top Brass Fastener Rivets */}
                    <div className="absolute -top-2 left-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#FFE7A3] to-[#A38634] border border-black/20 shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#3D3320]" />
                    </div>
                    <div className="absolute -top-2 right-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#FFE7A3] to-[#A38634] border border-black/20 shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#3D3320]" />
                    </div>

                    {/* Content Body */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-[var(--color-brass)]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#B89B43] text-[#B89B43]" />
                          ))}
                        </div>
                        <Quote className="w-5 h-5 text-[#A1B28F]/40 group-hover:text-[var(--color-naman-indigo)]/40 transition-colors" />
                      </div>

                      <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed line-clamp-5 font-normal italic">
                        “{story.body}”
                      </p>
                    </div>

                    {/* Bottom Reviewer Info */}
                    <div className="pt-3 mt-4 border-t border-[#E8EEE4] flex flex-col justify-center">
                      <h4 className="text-xs sm:text-sm font-bold text-[var(--color-naman-indigo)] group-hover:text-[var(--color-naman-red)] transition-colors">
                        {story.author}
                      </h4>
                      <p className="text-[11px] font-medium text-[var(--color-warm-gray)]">
                        {story.designation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connecting Brass Chain Link */}
                <ChainConnector />
              </React.Fragment>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Community Instagram Link */}
      <Reveal direction="up" delay={0.3}>
        <div className="text-center mt-6">
          <a
            href="https://www.instagram.com/kitchensnaman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[var(--color-naman-indigo)] hover:text-[var(--color-naman-red)] transition-colors py-2 px-4 rounded-full bg-white/60 hover:bg-white border border-[#D5DDD0] shadow-xs"
          >
            <span>See client installations on Instagram @kitchensnaman</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
