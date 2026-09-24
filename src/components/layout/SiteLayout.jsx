import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../../hooks/useScrollToTop';
import { PhoneCall } from 'lucide-react';
import { WhatsAppIcon } from '../common/Icons';

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-ivory)] text-[var(--color-espresso)] selection:bg-[var(--color-naman-indigo)] selection:text-white">
      {/* Ensures every navigation and reload starts at top */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 w-full" id="main-content">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Quick-Connect Buttons */}
      <aside aria-label="Direct quick connect actions">
        {/* Sticky Call Button on the Bottom-Left */}
        <a
          href="tel:+919575511657"
          className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-naman-indigo)] text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-naman-indigo)]"
          title="Call Naman Kitchen Studio (+91 95755 11657)"
          aria-label="Call Naman Kitchen Studio at +91 95755 11657"
        >
          <PhoneCall className="w-5 h-5 text-white animate-pulse" />
        </a>

        {/* Floating Icon-Only WhatsApp Button on the Bottom-Right */}
        <a
          href="https://wa.me/919575511657?text=Hi%20Naman%20Kitchen,%20I%20would%20like%20to%20consult%20about%20a%20modular%20kitchen."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 border-2 border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          title="Chat on WhatsApp (+91 95755 11657)"
          aria-label="Chat on WhatsApp at +91 95755 11657"
        >
          <WhatsAppIcon className="w-6 h-6 text-white" />
        </a>
      </aside>
    </div>
  );
}
