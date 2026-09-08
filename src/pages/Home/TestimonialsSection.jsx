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
      highlight: '“Reference-Driven Growth Across Indore”',
      body: 'Our biggest source of new homeowners isn’t loud advertising — it’s word-of-mouth recommendations from satisfied families who experience our punctuality and precision firsthand.',
      tag: 'Customer Referral',
      author: 'Family in Vijay Nagar',
      location: 'Indore',
    },
    {
      highlight: '“Not Just Vendors — Life Long Partners”',
      body: 'From first site measurement to post-installation service, our relationship doesn’t end when the final drawer is installed. We remain available for maintenance and upgrades.',
      tag: 'Service Culture',
      author: 'Architect S. Mehta',
      location: 'South Tukoganj',
    },
    {
      highlight: '“Direct Site Consultation & Guidance”',
      body: 'Visiting client homes personally allows us to recommend solutions that fit actual family routines and budget limits, preventing unnecessary contractor expenses.',
      tag: 'Transparency',
      author: 'Homeowner in Nipania',
      location: 'Indore',
    },
    {
      highlight: '“Flawless Finish & Precision Alignment”',
      body: 'The German tandem soft-close tracks and shutter alignments were completed on the exact committed handover date with zero post-work mess left behind.',
      tag: 'Craftsmanship',
      author: 'Dr. V. Sharma',
      location: 'Bhopal',
    },
    {
      highlight: '“Complete Customization for Indian Cooking”',
      body: 'Heavy spice racks, boiling-water resistant plywood, and high-suction chimney clearances were planned perfectly for our traditional daily kitchen routine.',
      tag: 'Custom Engineered',
      author: 'The Agrawal Residence',
      location: 'Super Corridor',
    },
    {
      highlight: '“Transparent Pricing with No Hidden Costs”',
      body: 'Detailed itemized quotes with clear brand warranty cards for every single hinge and drawer runner. Unmatched honesty in the modular kitchen industry.',
      tag: 'Trusted Partner',
      author: 'Interior Consultant',
      location: 'Indore',
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
                  <div className="relative rounded-2xl bg-white border border-[#D5DDD0] shadow-[0_8px_24px_rgba(45,43,96,0.06)] p-6 sm:p-7 flex flex-col justify-between h-[300px] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(45,43,96,0.12)] hover:-translate-y-1 group">
                    
                    {/* Top Brass Fastener Rivets */}
                    <div className="absolute -top-2 left-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#FFE7A3] to-[#A38634] border border-black/20 shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#3D3320]" />
                    </div>
                    <div className="absolute -top-2 right-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#FFE7A3] to-[#A38634] border border-black/20 shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#3D3320]" />
                    </div>

                    {/* Content Header */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-[var(--color-brass)]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#B89B43] text-[#B89B43]" />
                          ))}
                        </div>
                        <Quote className="w-6 h-6 text-[#A1B28F]/40 group-hover:text-[var(--color-naman-indigo)]/40 transition-colors" />
                      </div>

                      <h3 className="text-base sm:text-lg font-normal text-[var(--color-espresso)] mb-2.5 font-display group-hover:text-[var(--color-naman-indigo)] transition-colors leading-snug">
                        {story.highlight}
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed line-clamp-4">
                        {story.body}
                      </p>
                    </div>

                    {/* Bottom Verification Footer */}
                    <div className="pt-3.5 mt-3 border-t border-[#E8EEE4] flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1.5 font-semibold text-[var(--color-naman-indigo)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-naman-red)] shrink-0" />
                        <span className="truncate max-w-[150px]">{story.tag}</span>
                      </span>
                      <span className="text-[11px] font-mono text-[var(--color-warm-gray)]">
                        {story.location}
                      </span>
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
