import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navItems, ctaLabel, ctaPath } from '../../data/navigation';
import Button from '../common/Button';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navbar scroll listener

  // Track scroll for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-ivory)]/95 backdrop-blur-md shadow-card border-b border-[rgba(45,43,96,0.08)] py-1.5'
          : 'bg-[var(--color-ivory)] border-b border-black/5 py-2 sm:py-2.5'
      }`}
    >
      <div className="container-site flex items-center justify-between">
        {/* Brand Logo (Left Slot) */}
        <div className="flex-1 flex items-center justify-start">
          <Link
            to="/"
            className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[var(--color-naman-indigo)] rounded-lg p-0.5"
            aria-label="Naman Kitchen Studio Home"
          >
            <img
              src="/logo.png"
              alt="Naman Kitchen Studio Logo"
              style={{ maxHeight: '38px', width: 'auto' }}
              className="h-7 sm:h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </Link>
        </div>

        {/* Centered Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center justify-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `nav-link-item text-[15px] ${isActive ? 'active font-semibold text-[var(--color-naman-indigo)]' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Action CTA Button (Right Slot - Balances Left Logo for true center alignment) */}
        <div className="hidden lg:flex items-center justify-end flex-1">
          <Button to={ctaPath} variant="primary" size="sm" icon={ArrowRight}>
            {ctaLabel}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[var(--color-espresso)] hover:bg-[var(--color-ivory-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-naman-indigo)]"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
