import React from 'react';
import { ShieldCheck, Ruler, Users, HeartHandshake } from 'lucide-react';
import Reveal from '../../components/motion/Reveal';

export default function CraftsmanshipStandards() {
  const standards = [
    {
      icon: Ruler,
      title: 'हर साइट पर 100% एक्यूरेसी (100% Site Accuracy)',
      desc: 'Precision laser templating ensures zero gaps between walls, plumbing points, and modular cabinetry.',
    },
    {
      icon: ShieldCheck,
      title: 'प्रीमियम फिनिशिंग स्टैंडर्ड्स (Premium Finishing)',
      desc: 'Zero-joint edge-banding, perfect alignment, seamless hardware soft-close adjustments on every door.',
    },
    {
      icon: Users,
      title: '8–10 वर्षों के अनुभवी कारीगर (Veteran Artisans)',
      desc: 'Installed exclusively by seasoned modular craftsmen with nearly a decade of precision woodwork experience.',
    },
    {
      icon: HeartHandshake,
      title: 'Life Long Partner Commitment',
      desc: 'We consider ourselves your lifelong partner — always reachable for maintenance, realignment, and expansions.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[var(--color-espresso)] text-white">
      <div className="container-site">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-brass)]">
            क्वालिटी ही हमारी पहचान
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Quality Is Our Identity
          </h2>
          <p className="text-sm sm:text-base text-white/70 mt-3 leading-relaxed">
            Every cabinet that leaves our workshop carries our reputation. We measure twice, cut once,
            and inspect every joint so your kitchen functions flawlessly for decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((std, i) => {
            const Icon = std.icon;
            return (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full flex flex-col justify-between hover:bg-white/[0.08] transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-naman-red)] flex items-center justify-center text-white mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-medium text-white mb-2">{std.title}</h3>
                    <p className="text-xs text-white/70 leading-relaxed">{std.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
