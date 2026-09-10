import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Phone, MapPin, X } from 'lucide-react';
import { InstagramIcon as Instagram } from '../common/Icons';
import { navItems, ctaLabel, ctaPath } from '../../data/navigation';
import Button from '../common/Button';

export default function MobileNav({ isOpen, onClose }) {
  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] lg:hidden flex justify-end">
          {/* Solid Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Solid Architectural Olive Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative z-10 w-full max-w-xs sm:max-w-sm h-full bg-gradient-to-b from-[#8C9E7E] via-[#7E9170] to-[#718463] border-l-2 border-[#B8A04A]/60 shadow-[0_0_60px_rgba(0,0,0,0.6)] flex flex-col justify-between p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header with Logo & Close Button */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/25">
                <div className="bg-white/95 px-3 py-1.5 rounded-xl shadow-xs border border-white/40">
                  <img
                    src="/logo.png"
                    alt="Naman Kitchen Studio"
                    style={{ maxHeight: '60px', width: 'auto' }}
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors border border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links with Crisp Contrast */}
              <nav className="flex flex-col gap-2.5 mt-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 flex items-center justify-between shadow-xs ${
                        isActive
                          ? 'bg-[var(--color-naman-indigo)] text-white border-2 border-white/30 shadow-md translate-x-1'
                          : 'bg-black/15 hover:bg-black/25 text-white border border-white/15 hover:border-white/30'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFEAA8] opacity-80" />
                  </NavLink>
                ))}
              </nav>

              {/* Action CTA Button */}
              <div className="mt-7">
                <Button
                  to={ctaPath}
                  variant="accent"
                  size="lg"
                  className="w-full shadow-lg"
                  icon={ArrowRight}
                  onClick={onClose}
                >
                  {ctaLabel}
                </Button>
              </div>
            </div>

            {/* Bottom Contact & Community Pod */}
            <div className="mt-8 pt-5 border-t border-white/25 bg-black/20 p-4 rounded-2xl border border-white/15 text-xs text-white/90 space-y-2.5 shadow-inner">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FFD369] shrink-0" />
                <span className="font-medium">Indore & Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFEAA8] shrink-0" />
                <span className="font-medium">Life Long Partner</span>
              </div>
              <a
                href="https://www.instagram.com/kitchensnaman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#FFEAA8] underline-offset-2 hover:underline font-bold transition-colors pt-1"
              >
                <Instagram className="w-4 h-4 text-[#FF6B6B]" />
                <span>@kitchensnaman</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
