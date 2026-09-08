import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { InstagramIcon as Instagram } from '../common/Icons';
import { navItems, ctaLabel, ctaPath } from '../../data/navigation';
import Button from '../common/Button';

export default function MobileNav({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-[var(--color-ivory)] border-l border-black/10 shadow-2xl flex flex-col justify-between p-6 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Header with Logo */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-black/10">
                <img
                  src="/logo.png"
                  alt="Naman Kitchen Studio"
                  style={{ maxHeight: '40px', width: 'auto' }}
                  className="h-10 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-md hover:bg-[var(--color-ivory-dark)] text-[var(--color-espresso)]"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col gap-3 mt-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                        isActive
                          ? 'bg-[var(--color-naman-indigo)] text-white'
                          : 'text-[var(--color-espresso)] hover:bg-[var(--color-ivory-dark)]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-8">
                <Button
                  to={ctaPath}
                  variant="accent"
                  size="lg"
                  className="w-full"
                  icon={ArrowRight}
                  onClick={onClose}
                >
                  {ctaLabel}
                </Button>
              </div>
            </div>

            {/* Bottom Real Info from naman_kitchen_info */}
            <div className="pt-6 border-t border-black/10 text-xs text-[var(--color-espresso-mid)] space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-naman-red)] shrink-0" />
                <span>Indore & Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--color-naman-indigo)] shrink-0" />
                <span>Life Long Partner</span>
              </div>
              <a
                href="https://www.instagram.com/kitchensnaman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[var(--color-naman-indigo)] hover:underline font-semibold"
              >
                <Instagram className="w-4 h-4 text-[var(--color-naman-red)]" />
                <span>@kitchensnaman</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
