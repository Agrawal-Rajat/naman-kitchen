import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
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

export default function BrandPartners() {
  const partners = [
    {
      name: 'Action Tesa',
      category: 'HDMR Boards & Substrates',
      detail: 'India’s pioneer in high-density moisture-resistant engineered panels for termite-proof and boiling-waterproof cabinetry.',
      tag: 'Carcass Core',
    },
    {
      name: 'Skydecor',
      category: 'Decorative Acrylic & PVC Laminates',
      detail: 'Premium surface finishes engineered for stain resistance, zero maintenance, and rich matte/fluted aesthetic textures.',
      tag: 'Surface Finish',
    },
    {
      name: 'Ozone',
      category: 'Architectural Hardware & Hinges',
      detail: 'Internationally benchmarked soft-close mechanisms, gas-struts, and high-load hydraulic drawer channels.',
      tag: 'Mechanisms',
    },
    {
      name: 'Asian Paints Adhesives',
      category: 'Water-Resistant Adhesives & Sealants',
      detail: 'Durable synthetic adhesive bonds guaranteeing edge-banding and panel laminations stay permanently intact under kitchen steam.',
      tag: 'Bonding Tech',
    },
    {
      name: 'Action Tesa HDMR',
      category: 'Borer & Termite Shield',
      detail: 'Precision CNC-routed core panels ensuring zero water swelling and maximum screw-holding strength for heavy Indian spices.',
      tag: 'Certified Grade',
    },
    {
      name: 'Ozone Soft-Close',
      category: 'Tested for 100,000+ Cycles',
      detail: 'Whisper-quiet hydraulic dampers engineered to prevent cabinet slam and protect shutter longevity for decades.',
      tag: 'Precision Hardware',
    },
  ];

  // Repeat items twice for seamless continuous infinite marquee ticker
  const marqueeItems = [...partners, ...partners];

  return (
    <section className="section-spacing bg-[var(--color-ivory)] border-t border-black/5 overflow-hidden relative">
      <div className="container-site mb-8">
        <SectionHeading
          eyebrow="Associated Brands"
          title="आज Naman Kitchen इन प्रतिष्ठित ब्रांड्स के साथ कार्य करता है"
          subtitle="Our partnerships with India’s leading infrastructure material brands ensure your kitchen withstands decades of everyday use."
        />
      </div>

      {/* Continuously Moving Chain Carousel Marquee */}
      <Reveal direction="up" delay={0.15}>
        <div className="relative w-full mask-edge-fade py-6 overflow-hidden">
          <div className="animate-marquee-chain flex items-center">
            {marqueeItems.map((partner, idx) => (
              <React.Fragment key={idx}>
                {/* Individual Chained Brand Card */}
                <div className="w-[300px] sm:w-[350px] shrink-0 p-1">
                  <div className="relative rounded-2xl bg-white border border-[#D5DDD0] shadow-[0_8px_24px_rgba(45,43,96,0.06)] p-6 sm:p-7 flex flex-col justify-between min-h-[210px] h-full transition-all duration-300 hover:shadow-[0_12px_32px_rgba(45,43,96,0.12)] hover:-translate-y-1 group">
                    
                    {/* Top Brass Hardware Corner Rivets */}
                    <div className="absolute -top-2 left-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#FFE7A3] to-[#A38634] border border-black/20 shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#3D3320]" />
                    </div>
                    <div className="absolute -top-2 right-6 w-3 h-3 rounded-full bg-gradient-to-br from-[#FFE7A3] to-[#A38634] border border-black/20 shadow-xs flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#3D3320]" />
                    </div>

                    {/* Card Content */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#EAF0E7] text-[#43573A] border border-[#C2D2BD] shadow-2xs">
                          {partner.tag}
                        </span>
                        <Award className="w-4 h-4 text-[var(--color-brass)]" />
                      </div>

                      <h3 className="text-xl font-bold text-[var(--color-espresso)] mb-2 font-display group-hover:text-[var(--color-naman-indigo)] transition-colors">
                        {partner.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                        {partner.detail}
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
    </section>
  );
}
