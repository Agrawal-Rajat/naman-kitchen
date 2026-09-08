import React from 'react';
import { Award, Briefcase, GraduationCap, HeartHandshake } from 'lucide-react';
import Reveal from '../../components/motion/Reveal';

export default function FounderStory() {
  return (
    <section className="section-spacing bg-[var(--color-ivory)]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Image and Card */}
          <div className="lg:col-span-5">
            <Reveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-lift border border-black/10 bg-white p-3">
                  <img
                    src="/images/about/founder.jpeg"
                    alt="Shri Akashdeep Gupta - Founder, Naman Kitchen Company"
                    className="w-full h-auto rounded-2xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-medium text-[var(--color-espresso)]">
                      श्री आकाशदीप गुप्ता (Shri Akashdeep Gupta)
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[var(--color-naman-red)] mt-1">
                      संस्थापक (Founder) • Naman Kitchen Company
                    </p>
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute -bottom-5 -right-4 bg-[var(--color-espresso)] text-white p-4 rounded-2xl shadow-card hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-naman-indigo)] flex items-center justify-center text-white">
                    <Award className="w-5 h-5 text-[var(--color-brass)]" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold">6+ Years Industry Leadership</div>
                    <div className="text-white/60">Area Manager Prior to 2017</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Founder Story and Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="left" delay={0.3}>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[var(--color-naman-indigo)]">
                <HeartHandshake className="w-4 h-4 text-[var(--color-naman-red)]" />
                <span>Leadership Journey</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-espresso)] mt-2">
                नेतृत्व से शुरू हुई एक उद्यमिता यात्रा
              </h2>

              <blockquote className="p-4 rounded-2xl bg-[var(--color-ivory-light)] border-l-4 border-[var(--color-naman-red)] text-sm sm:text-base italic text-[var(--color-espresso)]">
                “किचन केवल फर्नीचर नहीं — यह जीवनशैली है। मॉड्यूलर किचन और हार्डवेयर का कार्य सिर्फ प्रोडक्ट इंस्टॉलेशन तक सीमित नहीं होता — यह डिज़ाइन, सुविधा, गुणवत्ता और भरोसे की जिम्मेदारी है।”
              </blockquote>

              <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] leading-relaxed">
                After completing his MBA, Shri Akashdeep Gupta dedicated over 6 years as an Area Manager in the kitchen and hardware industry.
                Through hands-on coordination with retailers, wholesalers, dealers, and manufacturing plants, he discovered that what homeowners
                truly crave isn’t merely aggressive sales pitches, but honest guidance, site-level accuracy, and dependable after-sales companionship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-subtle flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-[var(--color-naman-indigo)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-espresso)]">MBA & Strategic Vision</h4>
                    <p className="text-xs text-[var(--color-espresso-mid)] mt-0.5">
                      Professional business management married with practical Indian construction ground realities.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-subtle flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-[var(--color-naman-red)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--color-espresso)]">Site-Level Execution</h4>
                    <p className="text-xs text-[var(--color-espresso-mid)] mt-0.5">
                      Personal on-site inspections ensuring 100% measurement accuracy before cutting a single panel.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
