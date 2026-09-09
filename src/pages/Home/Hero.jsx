import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Clock, CheckCircle, Compass, Layers, Wrench, Sparkle } from 'lucide-react';
import Button from '../../components/common/Button';
import Eyebrow from '../../components/common/Eyebrow';
import floorBg from '../../assets/floor.png';

const KITCHEN_COMPONENTS = [
  {
    id: 'chimney',
    name: 'Overhead Chimney & Cabinets',
    src: '/images/hero/hero-chimney.png',
    icon: Layers,
    accent: 'var(--color-naman-indigo)',
  },
  {
    id: 'pantry',
    name: 'Smart Larder Unit',
    src: '/images/hero/hero-pantry.png',
    icon: Compass,
    accent: 'var(--color-naman-indigo)',
  },
  {
    id: 'countertop',
    name: 'Quartz Countertop & Undermount Sink',
    src: '/images/hero/hero-countertop.png',
    icon: Sparkle,
    accent: 'var(--color-naman-red)',
  },
  {
    id: 'drawer',
    name: 'Soft-Close Carousel',
    src: '/images/hero/hero-drawer.png',
    icon: Wrench,
    accent: 'var(--color-brass)',
  },
];

export default function Hero() {
  const [rotationStep, setRotationStep] = useState(0);

  // Clockwise shift: moves smoothly to the adjacent position, rests for 2.5s, then moves again
  useEffect(() => {
    const interval = setInterval(() => {
      setRotationStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Compute items at each position based on current clockwise rotation step
  const topItem = KITCHEN_COMPONENTS[(0 - rotationStep + 4) % 4];
  const rightItem = KITCHEN_COMPONENTS[(1 - rotationStep + 4) % 4];
  const bottomItem = KITCHEN_COMPONENTS[(2 - rotationStep + 4) % 4];
  const leftItem = KITCHEN_COMPONENTS[(3 - rotationStep + 4) % 4];

  return (
    <section className="relative overflow-hidden min-h-[calc(100svh-3.75rem)] lg:min-h-[calc(100svh-4rem)] flex flex-col justify-start lg:justify-center items-center py-1 sm:py-5 bg-gradient-to-b from-[#E7ECE3] via-[#DCE4D7] to-[#E7ECE3]">
      {/* Full-Cover Background Floor Texture with low opacity */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none opacity-15 mix-blend-multiply z-0"
        style={{ backgroundImage: `url(${floorBg})` }}
        aria-hidden="true"
      />

      {/* 1. Soft Ambient Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_50%,rgba(255,255,255,0.7)_0%,rgba(231,236,227,0.3)_65%,rgba(214,224,208,0.6)_100%)] pointer-events-none z-[1]" />

      {/* Decorative Brand Accent Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[var(--color-brass)]/8 rounded-full blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-6 right-8 w-72 h-72 bg-[var(--color-naman-red)]/8 rounded-full blur-3xl pointer-events-none z-[1]" />

      {/* ========================================================
          SCREEN-END HORIZONTAL CHIMNEY HOOD WINGS (Light Refined Shade)
          ======================================================== */}
      {/* Left Chimney Container (Flush to left screen edge) */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="hidden md:block absolute left-0 top-2 lg:top-4 z-30 pointer-events-auto"
      >
        <div className="chimney-wing-left py-2 px-4 sm:px-6 flex items-center gap-2.5 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-[var(--color-naman-red)] shrink-0 animate-pulse shadow-[0_0_6px_var(--color-naman-red)]" />
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm lg:text-base font-black text-[var(--color-espresso)] tracking-wider uppercase">
              Smart Designs
            </span>
            <span className="text-[10px] text-stone-500 font-semibold tracking-wide">
              Ergonomic & Spatial Layouts
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right Chimney Container (Flush to right screen edge) */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="hidden md:block absolute right-0 top-2 lg:top-4 z-30 pointer-events-auto"
      >
        <div className="chimney-wing-right py-2 px-4 sm:px-6 flex items-center justify-end gap-2.5 shadow-sm text-right">
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm lg:text-base font-black text-[var(--color-espresso)] tracking-wider uppercase">
              Quality Craftsmanship
            </span>
            <span className="text-[10px] text-stone-500 font-semibold tracking-wide">
              German Hardware & Precision Fit
            </span>
          </div>
          <div className="w-2 h-2 rounded-full bg-[var(--color-brass)] shrink-0 animate-pulse shadow-[0_0_6px_var(--color-brass)]" />
        </div>
      </motion.div>

      {/* Mobile-Only Chimney Wings Row (< md) */}
      <div className="flex md:hidden w-full items-center justify-between px-2 pt-0 z-30 gap-1.5">
        <div className="chimney-wing-left py-1.5 px-3 flex items-center gap-1.5 flex-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-naman-red)] shrink-0" />
          <span className="text-[11px] font-black text-[var(--color-espresso)] tracking-wide uppercase">
            Smart Designs
          </span>
        </div>
        <div className="chimney-wing-right py-1.5 px-3 flex items-center justify-end gap-1.5 flex-1 text-right">
          <span className="text-[11px] font-black text-[var(--color-espresso)] tracking-wide uppercase">
            Craftsmanship
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)] shrink-0" />
        </div>
      </div>

      {/* ========================================================
          MAIN FULL-WIDTH COMPOSITION CONTAINER
          ======================================================== */}
      {/* ========================================================
          MAIN FULL-WIDTH COMPOSITION CONTAINER
          ======================================================== */}
      <div className="w-full max-w-[98rem] mx-auto my-auto lg:my-0 relative z-10 px-2 sm:px-4 lg:px-6 flex flex-col items-center gap-1 sm:gap-2">
        
        {/* ========================================================
            TOP LEVEL: TOP ROTATING IMAGE (Desktop Only)
            ======================================================== */}
        <div className="hidden lg:flex w-full justify-center z-20 pt-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`top-${topItem.id}`}
              initial={{ opacity: 0, y: -25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 30, scale: 0.95 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="hero-panel-card group relative flex flex-col items-center max-w-[300px] sm:max-w-[460px] lg:max-w-[540px]"
            >
              {/* Clean Component Badge */}
              <div className="hero-item-badge mb-1 shadow-xs">
                <topItem.icon className="w-3 h-3 text-[var(--color-naman-indigo)]" />
                <span>{topItem.name}</span>
              </div>
              {/* Top Component Image */}
              <img
                src={topItem.src}
                alt={topItem.name}
                className="w-full h-auto max-h-20 sm:max-h-28 lg:max-h-32 xl:max-h-36 object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)] transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================
            MIDDLE ROW:
            Left Image (Desktop) | Center Content (Mobile Top / Desktop Center) | Right Image (Desktop)
            ======================================================== */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-center py-2">
          
          {/* LEFT ROTATING IMAGE (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 justify-start z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={`left-${leftItem.id}`}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.95 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="hero-panel-card group relative flex flex-col items-start max-w-[220px] xl:max-w-[270px]"
              >
                <div className="hero-item-badge mb-1.5 shadow-xs">
                  <leftItem.icon className="w-3 h-3 text-[var(--color-brass)]" />
                  <span>{leftItem.name}</span>
                </div>
                <img
                  src={leftItem.src}
                  alt={leftItem.name}
                  className="w-full h-auto max-h-38 sm:max-h-48 xl:max-h-56 object-contain filter drop-shadow-[0_14px_26px_rgba(0,0,0,0.14)] transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER CONTENT: Primary Focus on Mobile Top & Desktop Center */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 w-full z-30 flex flex-col items-center text-center px-2 sm:px-6 py-2"
          >
            {/* Centered Eyebrow (Slightly Smaller Text Size) */}
            <div className="flex justify-center mb-2.5 sm:mb-3">
              <Eyebrow className="text-[10px] sm:text-xs py-0.5 px-2.5 tracking-wide">
                Intelligent Modular Kitchens
              </Eyebrow>
            </div>

            {/* Prominent Middle Heading in Blue */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-black text-[var(--color-naman-indigo)] leading-[1.08] tracking-tight mb-3 sm:mb-4 font-display">
              Kitchens Made for Life.
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-[var(--color-espresso-mid)] max-w-md sm:max-w-lg mx-auto leading-relaxed mb-4 sm:mb-5 font-normal">
              Ergonomic modular kitchens engineered for Indian cooking with 100% site measurement accuracy and precision hardware.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-4 sm:mb-5">
              <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                Book a Free Consultation
              </Button>
              <Button to="/kitchens" variant="outline" size="md">
                Explore Kitchen Layouts
              </Button>
            </div>

            {/* Credibility Trust Highlights */}
            <div className="pt-3 border-t border-stone-300/60 w-full max-w-lg grid grid-cols-3 gap-2 text-[11px] sm:text-xs text-[var(--color-espresso-mid)] font-semibold">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-center sm:text-left">
                <CheckCircle className="w-4 h-4 text-[var(--color-naman-indigo)] shrink-0" />
                <span>100% Site Accuracy</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-center sm:text-left border-x border-stone-300/60 px-1">
                <Clock className="w-4 h-4 text-[var(--color-naman-red)] shrink-0" />
                <span>8–10 Yr Artisans</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-center sm:text-left">
                <Sparkles className="w-4 h-4 text-[var(--color-brass)] shrink-0" />
                <span>Since 2017</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT ROTATING IMAGE (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-3 justify-end z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={`right-${rightItem.id}`}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, y: 25, scale: 0.95 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="hero-panel-card group relative flex flex-col items-end max-w-[220px] xl:max-w-[270px]"
              >
                <div className="hero-item-badge mb-1.5 shadow-xs">
                  <rightItem.icon className="w-3 h-3 text-[var(--color-naman-indigo)]" />
                  <span>{rightItem.name}</span>
                </div>
                <img
                  src={rightItem.src}
                  alt={rightItem.name}
                  className="w-full h-auto max-h-38 sm:max-h-48 xl:max-h-56 object-contain filter drop-shadow-[0_14px_26px_rgba(0,0,0,0.14)] transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ========================================================
            BOTTOM LEVEL: BOTTOM ROTATING IMAGE (Desktop Only)
            ======================================================== */}
        <div className="hidden lg:flex w-full justify-center z-20 pb-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={`bottom-${bottomItem.id}`}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: -30, scale: 0.95 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="hero-panel-card group relative flex flex-col items-center max-w-[320px] sm:max-w-[480px] lg:max-w-[560px]"
            >
              {/* Component Image */}
              <img
                src={bottomItem.src}
                alt={bottomItem.name}
                className="w-full h-auto max-h-20 sm:max-h-28 lg:max-h-34 xl:max-h-38 object-contain filter drop-shadow-[0_14px_28px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-105"
              />
              {/* Clean Component Badge */}
              <div className="hero-item-badge mt-1 shadow-xs">
                <bottomItem.icon className="w-3 h-3 text-[var(--color-naman-red)]" />
                <span>{bottomItem.name}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>


      </div>

      {/* ========================================================
          MOBILE-ONLY SHOWCASE MARQUEE (< lg)
          Pinned to bottom of hero viewport on mobile
          ======================================================== */}
      <div className="flex lg:hidden w-full relative overflow-hidden py-3 mt-auto z-10">
        <div className="animate-marquee-chain flex items-center gap-3">
          {[...KITCHEN_COMPONENTS, ...KITCHEN_COMPONENTS, ...KITCHEN_COMPONENTS].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="w-[160px] sm:w-[190px] shrink-0 p-2.5 rounded-2xl bg-white/75 backdrop-blur-md border border-white/90 shadow-sm flex flex-col items-center text-center"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-full h-20 sm:h-24 object-contain mb-1.5 filter drop-shadow-sm"
                />
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[var(--color-espresso)] truncate max-w-full">
                  <Icon className="w-3 h-3 text-[var(--color-naman-indigo)] shrink-0" />
                  <span className="truncate">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
