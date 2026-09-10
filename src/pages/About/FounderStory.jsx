import React from 'react';
import { Briefcase, GraduationCap, Quote } from 'lucide-react';
import Reveal from '../../components/motion/Reveal';

export default function FounderStory() {
  return (
    <section className="section-spacing bg-[var(--color-ivory-light)] relative overflow-hidden border-t border-black/5">
      {/* Background Accent Sheen */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--color-naman-indigo)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Founder Editorial Portrait Card */}
          <div className="lg:col-span-5">
            <Reveal direction="right" delay={0.2}>
              <div className="relative group">
                {/* Decorative Backdrop Plate */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[var(--color-naman-indigo)]/20 via-transparent to-[var(--color-naman-red)]/20 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative rounded-3xl overflow-hidden shadow-card border border-black/10 bg-white p-3 sm:p-4">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100">
                    <img
                      src="/images/about/founder.jpeg"
                      alt="Shri Akashdeep Gupta - Founder, Naman Kitchen Studio"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                    
                    {/* Bottom Image Overlay Title */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#FFEBB0] block mb-0.5">
                        Founder & Director
                      </span>
                      <h3 className="text-xl font-bold font-display leading-tight">
                        श्री आकाशदीप गुप्ता
                      </h3>
                      <p className="text-xs text-white/85 font-medium">
                        Shri Akashdeep Gupta (MBA)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7">
            <Reveal direction="left" delay={0.3}>
              <div className="space-y-6 sm:space-y-7">
                
                {/* Header Label & Heading */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-[var(--color-naman-indigo)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-naman-red)]" />
                    <span>Leadership Journey & Philosophy</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-espresso)] tracking-tight leading-tight font-display">
                    नेतृत्व से शुरू हुई एक उद्यमिता यात्रा
                  </h2>
                </div>

                {/* Luxury Editorial Quote Box */}
                <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[var(--color-naman-indigo)]/8 via-[var(--color-ivory)] to-white border-l-4 border-[var(--color-naman-red)] shadow-xs">
                  <Quote className="w-8 h-8 text-[var(--color-naman-red)]/30 absolute top-4 right-4 pointer-events-none" />
                  <blockquote className="text-sm sm:text-base italic text-[var(--color-espresso)] leading-relaxed font-serif relative z-10">
                    “किचन केवल फर्नीचर नहीं — यह जीवनशैली है। मॉड्यूलर किचन और हार्डवेयर का कार्य सिर्फ प्रोडक्ट इंस्टॉलेशन तक सीमित नहीं होता — यह डिज़ाइन, सुविधा, गुणवत्ता और भरोसे की जिम्मेदारी है।”
                  </blockquote>
                  <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs">
                    <span className="font-bold text-[var(--color-naman-indigo)] uppercase tracking-wider">
                      — श्री आकाशदीप गुप्ता (Founder)
                    </span>
                    <span className="text-[11px] text-[var(--color-warm-gray)]">Naman Kitchen Studio</span>
                  </div>
                </div>

                {/* Narrative Story Paragraph */}
                <p className="text-sm sm:text-base text-[var(--color-espresso-mid)] leading-relaxed font-normal">
                  After completing his MBA, Shri Akashdeep Gupta dedicated over 6 years as an Area Manager in the kitchen and hardware industry.
                  Through hands-on coordination with retailers, wholesalers, dealers, and manufacturing plants across Madhya Pradesh, he discovered that what homeowners
                  truly crave isn’t merely aggressive sales pitches, but <strong className="text-[var(--color-espresso)] font-semibold">honest guidance</strong>, <strong className="text-[var(--color-espresso)] font-semibold">site-level accuracy</strong>, and <strong className="text-[var(--color-espresso)] font-semibold">dependable after-sales companionship</strong>.
                </p>

                {/* Feature Pillar Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                  <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-subtle hover:shadow-card transition-all duration-300 flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-naman-indigo)]/10 text-[var(--color-naman-indigo)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-naman-indigo)] group-hover:text-white transition-colors duration-300">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-espresso)] group-hover:text-[var(--color-naman-indigo)] transition-colors">
                        MBA & Strategic Vision
                      </h4>
                      <p className="text-xs text-[var(--color-espresso-mid)] mt-1.5 leading-relaxed">
                        Professional business management married with practical Indian construction ground realities.
                      </p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-subtle hover:shadow-card transition-all duration-300 flex items-start gap-3.5 group">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-naman-red)]/10 text-[var(--color-naman-red)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-naman-red)] group-hover:text-white transition-colors duration-300">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-espresso)] group-hover:text-[var(--color-naman-red)] transition-colors">
                        Site-Level Execution
                      </h4>
                      <p className="text-xs text-[var(--color-espresso-mid)] mt-1.5 leading-relaxed">
                        Personal on-site inspections ensuring 100% measurement accuracy before cutting a single panel.
                      </p>
                    </div>
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
