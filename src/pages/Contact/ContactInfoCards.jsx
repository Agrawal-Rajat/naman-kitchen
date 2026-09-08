import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { InstagramIcon as Instagram } from '../../components/common/Icons';
import Reveal from '../../components/motion/Reveal';

export default function ContactInfoCards() {
  return (
    <div className="space-y-6">
      <Reveal direction="up" delay={0.1}>
        <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-subtle flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-naman-indigo)] text-white flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-[var(--color-naman-red)]" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-warm-gray)]">
              Studio Location
            </span>
            <h3 className="text-lg font-medium text-[var(--color-espresso)] mt-0.5">
              Naman Kitchen Studio
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-espresso-mid)] mt-1 leading-relaxed">
              Serving Indore, Bhopal, Ujjain, Dewas, and across Madhya Pradesh.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-subtle flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-ivory-dark)] text-[var(--color-espresso)] flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 text-[var(--color-naman-indigo)]" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-warm-gray)]">
              Call & Consultation
            </span>
            <div className="text-base font-semibold text-[var(--color-espresso)] mt-0.5">
              <a href="tel:+919826000000" className="hover:text-[var(--color-naman-indigo)]">
                +91 98260 XXXXX
              </a>
            </div>
            <p className="text-xs text-[var(--color-espresso-mid)] mt-1">
              Direct consultation with our site execution engineers.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.3}>
        <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-subtle flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-warm-gray)]">
              Instant WhatsApp
            </span>
            <div className="text-base font-semibold text-[var(--color-espresso)] mt-0.5">
              <a
                href="https://wa.me/919826000000?text=Hello%20Naman%20Kitchen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline"
              >
                Chat Directly on WhatsApp
              </a>
            </div>
            <p className="text-xs text-[var(--color-espresso-mid)] mt-1">
              Send your floor plan photos or blueprints for immediate review.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.4}>
        <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-subtle flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[var(--color-naman-red)]/10 text-[var(--color-naman-red)] flex items-center justify-center shrink-0">
            <Instagram className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-warm-gray)]">
              Official Instagram
            </span>
            <div className="text-base font-semibold text-[var(--color-espresso)] mt-0.5">
              <a
                href="https://www.instagram.com/kitchensnaman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-naman-indigo)] hover:text-[var(--color-naman-red)] transition-colors"
              >
                @kitchensnaman
              </a>
            </div>
            <p className="text-xs text-[var(--color-espresso-mid)] mt-1">
              Follow real-time project video walkthroughs and customer sites.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.5}>
        <div className="p-6 rounded-3xl bg-[var(--color-espresso)] text-white shadow-card flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 text-[var(--color-brass)] flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-white/60">
              Studio Timings
            </span>
            <div className="text-sm font-semibold text-white mt-0.5">
              Monday – Saturday: 10:00 AM – 8:00 PM
            </div>
            <p className="text-xs text-white/70 mt-1">
              Sunday visits arranged by prior appointment.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
