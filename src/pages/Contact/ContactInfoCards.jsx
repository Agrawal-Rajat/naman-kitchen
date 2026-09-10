import { MapPin, Phone, Clock } from 'lucide-react';
import { InstagramIcon as Instagram, WhatsAppIcon } from '../../components/common/Icons';
import Reveal from '../../components/motion/Reveal';

export default function ContactInfoCards() {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* 4 Cards in 2 Rows x 2 Columns Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {/* Card 1: Studio Location */}
        <Reveal direction="up" delay={0.1}>
          <div className="h-full p-3.5 sm:p-5 rounded-2xl bg-white border border-black/10 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--color-naman-indigo)] text-white flex items-center justify-center shrink-0 mb-2.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-naman-red)]" />
              </div>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-[var(--color-warm-gray)] block">
                Studio Location
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-[var(--color-espresso)] mt-0.5 leading-snug">
                Naman Kitchen Studio
              </h3>
            </div>
            <p className="text-[11px] sm:text-xs text-[var(--color-espresso-mid)] mt-1.5 leading-tight line-clamp-2">
              Serving Indore, Bhopal, Ujjain, Dewas & MP.
            </p>
          </div>
        </Reveal>

        {/* Card 2: Call & Consultation */}
        <Reveal direction="up" delay={0.2}>
          <div className="h-full p-3.5 sm:p-5 rounded-2xl bg-white border border-black/10 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--color-ivory-dark)] text-[var(--color-espresso)] flex items-center justify-center shrink-0 mb-2.5">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-naman-indigo)]" />
              </div>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-[var(--color-warm-gray)] block">
                Call & Consultation
              </span>
              <div className="text-xs sm:text-sm font-bold text-[var(--color-espresso)] mt-0.5">
                <a href="tel:+919826000000" className="hover:text-[var(--color-naman-indigo)] transition-colors">
                  +91 98260 XXXXX
                </a>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-[var(--color-espresso-mid)] mt-1.5 leading-tight line-clamp-2">
              Direct consultation with site execution engineers.
            </p>
          </div>
        </Reveal>

        {/* Card 3: Instant WhatsApp */}
        <Reveal direction="up" delay={0.3}>
          <div className="h-full p-3.5 sm:p-5 rounded-2xl bg-white border border-black/10 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0 mb-2.5">
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-[var(--color-warm-gray)] block">
                Instant WhatsApp
              </span>
              <div className="text-xs sm:text-sm font-bold text-[#25D366] mt-0.5">
                <a
                  href="https://wa.me/919826000000?text=Hello%20Naman%20Kitchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-[var(--color-espresso-mid)] mt-1.5 leading-tight line-clamp-2">
              Send floor plan photos or blueprints.
            </p>
          </div>
        </Reveal>

        {/* Card 4: Official Instagram */}
        <Reveal direction="up" delay={0.4}>
          <div className="h-full p-3.5 sm:p-5 rounded-2xl bg-white border border-black/10 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[var(--color-naman-red)]/10 text-[var(--color-naman-red)] flex items-center justify-center shrink-0 mb-2.5">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-[var(--color-warm-gray)] block">
                Official Instagram
              </span>
              <div className="text-xs sm:text-sm font-bold text-[var(--color-espresso)] mt-0.5">
                <a
                  href="https://www.instagram.com/kitchensnaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-naman-indigo)] hover:text-[var(--color-naman-red)] transition-colors"
                >
                  @kitchensnaman
                </a>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-[var(--color-espresso-mid)] mt-1.5 leading-tight line-clamp-2">
              Real-time project walkthroughs & sites.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Studio Timings (Full Width Below 2x2 Grid) */}
      <Reveal direction="up" delay={0.5}>
        <div className="p-4 sm:p-5 rounded-2xl bg-[#EAF0E7] border border-[#C2D2BD] shadow-subtle flex items-center gap-3.5">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#43573A] text-[#FFEBB0] flex items-center justify-center shrink-0 shadow-xs">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-[#43573A] block">
              Studio Timings
            </span>
            <div className="text-xs sm:text-sm font-bold text-[var(--color-espresso)] mt-0.5">
              Monday – Saturday: 10:00 AM – 8:00 PM
            </div>
            <p className="text-[11px] sm:text-xs text-[var(--color-espresso-mid)] mt-0.5">
              Sunday visits arranged by prior appointment.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
