import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, HeartHandshake, Phone, ArrowUpRight } from 'lucide-react';
import { InstagramIcon as Instagram } from '../common/Icons';
import { navItems } from '../../data/navigation';
import Button from '../common/Button';

export default function Footer() {
  const partnerBrands = [
    'Action Tesa',
    'Skydecor',
    'Ozone',
    'Asian Paints Adhesives',
  ];

  const kitchenLinks = [
    { label: 'L-Shaped Kitchens', path: '/kitchens' },
    { label: 'Straight Kitchens', path: '/kitchens' },
    { label: 'Parallel Kitchens', path: '/kitchens' },
    { label: 'U-Shaped Kitchens', path: '/kitchens' },
    { label: 'Island Kitchens', path: '/kitchens' },
    { label: 'Custom Modular Solutions', path: '/kitchens' },
  ];

  return (
    <footer className="bg-[#263324] text-white/80 pt-16 md:pt-20 pb-12 border-t border-white/10">
      <div className="container-site">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Col 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block p-2.5 sm:p-3 bg-white rounded-xl shadow-xs transition-transform duration-300 hover:scale-102">
              <img
                src="/logo.png"
                alt="Naman Kitchen Studio"
                style={{ maxHeight: '80px', width: 'auto' }}
                className="h-16 sm:h-18 md:h-20 w-auto object-contain"
              />
            </Link>

            <p className="text-sm md:text-base text-white/70 max-w-md leading-relaxed">
              Smart Designs. Quality Craftsmanship. Kitchens Made for Life.
              Founded in 2017 by Shri Akashdeep Gupta, providing trusted modular kitchens
              and precision hardware across Indore and Madhya Pradesh.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs tracking-wider text-white/60">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <HeartHandshake className="w-3.5 h-3.5 text-[var(--color-naman-red)]" />
                Life Long Partner
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-brass)]" />
                100% Accuracy Standard
              </span>
            </div>

            <div className="pt-2">
              <Button to="/contact" variant="accent" size="sm" icon={ArrowUpRight}>
                Book Consultation
              </Button>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="text-white text-base font-medium tracking-wider uppercase mb-5">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Kitchen Layouts */}
          <div>
            <h3 className="text-white text-base font-medium tracking-wider uppercase mb-5">
              Kitchen Layouts
            </h3>
            <ul className="space-y-3 text-sm">
              {kitchenLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Studio Info & Social */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-medium tracking-wider uppercase mb-5">
              Studio & Connect
            </h3>
            <p className="text-xs text-white/70 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[var(--color-naman-red)] shrink-0 mt-0.5" />
              <span>Indore & Madhya Pradesh, India</span>
            </p>
            <p className="text-xs text-white/70 flex items-center gap-2">
              <Phone className="w-4 h-4 text-[var(--color-brass)] shrink-0" />
              <span>Wholesale & Project Site Execution</span>
            </p>
            <div className="pt-2">
              <a
                href="https://www.instagram.com/kitchensnaman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide transition-colors"
              >
                <Instagram className="w-4 h-4 text-[var(--color-naman-red)]" />
                <span>Follow @kitchensnaman</span>
              </a>
            </div>
          </div>
        </div>

        {/* Middle: Brand Partners (From client info) */}
        <div className="py-8 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs uppercase tracking-widest text-white/50">
            Trusted Component & Material Partners
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-white/80">
            {partnerBrands.map((brand, i) => (
              <span key={i} className="px-3 py-1 rounded bg-white/5 border border-white/5 text-xs text-white/70">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: '#E8DFD0' }}>
          <p style={{ color: '#E8DFD0' }}>© {new Date().getFullYear()} Naman Kitchen Studio. All rights reserved. Life Long Partner.</p>
          <div className="flex items-center gap-6">
            <span>Intelligent Design for Modern Homes</span>
            <span className="hidden sm:inline">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Franchise & Partner Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
