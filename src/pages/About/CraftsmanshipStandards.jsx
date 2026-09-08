import React from 'react';
import { ShieldCheck, Ruler, Users, HeartHandshake, Lightbulb, Sparkles } from 'lucide-react';
import Reveal from '../../components/motion/Reveal';

export default function CraftsmanshipStandards() {
  const standards = [
    {
      quadrant: '01',
      icon: Ruler,
      title: 'हर साइट पर 100% एक्यूरेसी',
      subtitle: '100% Site Accuracy',
      desc: 'Precision laser templating ensures zero gaps between walls, plumbing points, and modular cabinetry before production begins.',
      tag: 'Laser Measurement',
      position: 'top-left',
    },
    {
      quadrant: '02',
      icon: ShieldCheck,
      title: 'प्रीमियम फिनिशिंग स्टैंडर्ड्स',
      subtitle: 'Premium Finishing',
      desc: 'Zero-joint edge-banding, perfect shutter alignment, and seamless soft-close adjustments on every door and drawer.',
      tag: 'CNC Mill Precision',
      position: 'top-right',
    },
    {
      quadrant: '03',
      icon: Users,
      title: '8–10 वर्षों के अनुभवी कारीगर',
      subtitle: 'Veteran Artisans',
      desc: 'Installed exclusively by seasoned modular craftsmen with nearly a decade of precision joinery and cabinetry experience.',
      tag: 'Master Woodwork',
      position: 'bottom-left',
    },
    {
      quadrant: '04',
      icon: HeartHandshake,
      title: 'Life Long Partner Commitment',
      subtitle: 'Post-Handover Support',
      desc: 'We consider ourselves your lifelong partner — always reachable for prompt maintenance, realignment, and future expansions.',
      tag: 'Lifetime Trust',
      position: 'bottom-right',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[var(--color-ivory-light)] text-[var(--color-espresso)] relative overflow-hidden border-t border-black/5">
      {/* Subtle Ambient Radial Lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(161, 178, 143, 0.25) 0%, transparent 70%)'
        }}
      />

      <div className="container-site relative z-10">
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <Reveal direction="up" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5ECE0] border border-[#BACABA] text-[#43573A] text-xs uppercase font-bold tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-brass)]" />
              <span>क्वालिटी ही हमारी पहचान</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-espresso)] tracking-tight leading-tight font-display">
              Quality Is Our Identity
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] mt-3 leading-relaxed max-w-2xl mx-auto">
              Every cabinet that leaves our workshop carries our reputation. We measure twice, cut once,
              and inspect every joint so your kitchen functions flawlessly for decades.
            </p>
          </Reveal>
        </div>

        {/* Master Circlet Container (Olive & Warm Beige/Ivory Palette) */}
        <Reveal direction="up" delay={0.25}>
          <div className="relative max-w-5xl mx-auto rounded-[2.5rem] lg:rounded-[3.5rem] bg-gradient-to-b from-[#9CB08E] via-[#8FA581] to-[#829974] border-2 border-[#B8A04A]/60 shadow-[0_25px_60px_rgba(45,43,96,0.08)] p-4 sm:p-7 lg:p-9 overflow-hidden">
            
            {/* Outer Brass Perimeter Rim Studs */}
            <div className="absolute top-4 left-6 w-2.5 h-2.5 rounded-full bg-[#E5CA78] border border-black/20 shadow-xs opacity-90" />
            <div className="absolute top-4 right-6 w-2.5 h-2.5 rounded-full bg-[#E5CA78] border border-black/20 shadow-xs opacity-90" />
            <div className="absolute bottom-4 left-6 w-2.5 h-2.5 rounded-full bg-[#E5CA78] border border-black/20 shadow-xs opacity-90" />
            <div className="absolute bottom-4 right-6 w-2.5 h-2.5 rounded-full bg-[#E5CA78] border border-black/20 shadow-xs opacity-90" />

            {/* Central Axis Brass Separator Grid Lines (Desktop) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-transparent via-white/50 to-transparent pointer-events-none z-10" />
            <div className="hidden md:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none z-10" />

            {/* Central Vintage-Modern Kitchen Lamp Emblem (Center Intersection Hub) */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex-col items-center justify-center">
              {/* Radiating Warm Amber Glow */}
              <div className="absolute w-36 h-36 rounded-full bg-[#FFAE1A]/25 blur-2xl animate-pulse pointer-events-none" />
              
              {/* Outer Brass Fixture Ring */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FFEAA8] via-[#C2A34F] to-[#735614] p-[2.5px] shadow-[0_4px_20px_rgba(184,160,74,0.35)] flex items-center justify-center">
                {/* Inner Frosted Ivory Glass Lens */}
                <div className="w-full h-full rounded-full bg-[#FAF8F2] border border-white/60 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md shadow-inner">
                  {/* Glass Reflection Arc */}
                  <div className="absolute -top-1 inset-x-2 h-3.5 rounded-full bg-white/70 blur-[0.5px]" />
                  
                  {/* Glowing Amber Filament Lamp Bulb */}
                  <div className="relative flex items-center justify-center">
                    <Lightbulb className="w-7 h-7 text-[#D98A16] drop-shadow-[0_0_10px_#FFAE1A] animate-pulse" />
                    <div className="absolute w-2 h-2 rounded-full bg-[#FFF3D1] shadow-[0_0_6px_#FFEAA8]" />
                  </div>
                  
                  <span className="text-[8px] font-mono uppercase tracking-widest text-[#586D4E] font-bold mt-0.5">
                    Naman
                  </span>
                </div>
              </div>
            </div>

            {/* 4 Equal Division Quadrant Cards (Warm Porcelain Ivory & Beige) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 relative z-10">
              {standards.map((std, i) => {
                const Icon = std.icon;
                return (
                  <div
                    key={i}
                    className="relative group rounded-3xl bg-[#FCFBF8] hover:bg-white border border-[#D2DCD0] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-[0_10px_28px_rgba(45,43,96,0.08)] min-h-[220px]"
                  >
                    {/* Top Quadrant Header */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[var(--color-naman-indigo)] to-[var(--color-naman-indigo-light)] border border-white/20 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-300">
                            <Icon className="w-5 h-5 text-[#FFEBB0]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold tracking-widest text-[#586D4E] uppercase">
                              Standard // {std.quadrant}
                            </span>
                            <div className="text-xs text-[var(--color-espresso-mid)] font-medium">
                              {std.subtitle}
                            </div>
                          </div>
                        </div>

                        <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#EAF0E7] text-[#43573A] border border-[#C2D2BD] shadow-xs">
                          {std.tag}
                        </span>
                      </div>

                      {/* Main Title & Description */}
                      <h3 className="text-lg font-bold text-[var(--color-espresso)] mb-2 group-hover:text-[var(--color-naman-indigo)] transition-colors leading-snug font-display">
                        {std.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                        {std.desc}
                      </p>
                    </div>

                    {/* Bottom Status Indicator */}
                    <div className="pt-3 mt-4 border-t border-[#E5EDE2] flex items-center justify-between text-xs">
                      <span className="text-[11px] text-[var(--color-espresso-mid)] flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)] shadow-[0_0_4px_var(--color-brass)] animate-pulse" />
                        Guaranteed Benchmark
                      </span>
                      <span className="text-[10px] font-mono text-[var(--color-warm-gray)]">100% Quality Checked</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
