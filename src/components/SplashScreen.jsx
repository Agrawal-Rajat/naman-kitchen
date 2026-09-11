import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './SplashScreen.css';

export default function SplashScreen({ onComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Stage 1: Short hold (~1.0s) so user sees brand before doors open
    const timerOpen = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    // Stage 2: Finish transition and unmount after doors open (~1.75s total)
    const timerDone = setTimeout(() => {
      setIsDone(true);
      if (onComplete) {
        onComplete();
      }
    }, 1750);

    return () => {
      clearTimeout(timerOpen);
      clearTimeout(timerDone);
    };
  }, [onComplete]);

  // Click to open immediately if user wants
  const handleImmediateOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 650);
    }
  };

  if (isDone) return null;

  const easeCabinet = [0.22, 1, 0.36, 1]; // Smooth, responsive cabinet inertia easing

  return (
    <AnimatePresence>
      <motion.div 
        className="splash-overlay" 
        onClick={handleImmediateOpen}
        role="presentation"
        aria-label="Loading animation"
        initial={{ opacity: 1 }}
        animate={{ 
          backgroundColor: isOpen ? 'rgba(26, 22, 19, 0)' : 'rgba(26, 22, 19, 1)',
          pointerEvents: isOpen ? 'none' : 'auto'
        }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Ambient center back-glow */}
        <div className="center-glow-spot" />

        {/* ====================================================
            ROW 1: TOP CABINET DRAWER (Slides UP)
            ==================================================== */}
        <motion.div
          className="relative w-full h-[28%] cabinet-wood-texture cabinet-frame flex items-center justify-center p-3 sm:p-4 z-30"
          initial={{ y: 0 }}
          animate={{ y: isOpen ? '-102%' : '0%' }}
          transition={{ duration: 0.7, ease: easeCabinet }}
        >
          {/* Shaker Panel Inset */}
          <div className="w-full max-w-5xl h-full shaker-box rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-2 sm:inset-3 shaker-inner-bevel rounded-md sm:rounded-lg pointer-events-none" />
            
            {/* Top Brass Knob & Escutcheon */}
            <div className="brass-knob-base">
              <div className="brass-knob" />
            </div>

            {/* Decorative Corner Screws */}
            <div className="absolute top-3 left-4 w-2 h-2 rounded-full bg-[#8A7129] opacity-60 shadow-inner" />
            <div className="absolute top-3 right-4 w-2 h-2 rounded-full bg-[#8A7129] opacity-60 shadow-inner" />
            <div className="absolute bottom-3 left-4 w-2 h-2 rounded-full bg-[#8A7129] opacity-60 shadow-inner" />
            <div className="absolute bottom-3 right-4 w-2 h-2 rounded-full bg-[#8A7129] opacity-60 shadow-inner" />
          </div>
        </motion.div>

        {/* Architectural Horizontal Cabinet Groove */}
        <motion.div 
          className="cabinet-groove"
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        />

        {/* ====================================================
            ROW 2: MIDDLE ROW (Hero Cabinet with Company Name & Handle)
            Splits into Left & Right Doors on Open
            ==================================================== */}
        <div className="relative w-full h-[44%] flex z-40 overflow-hidden">
          {/* Left Door Half (Slides Left) */}
          <motion.div
            className="w-1/2 h-full cabinet-wood-texture cabinet-frame flex items-center justify-end p-2 sm:p-4 border-r border-black/80"
            initial={{ x: 0 }}
            animate={{ x: isOpen ? '-102%' : '0%' }}
            transition={{ duration: 0.72, ease: easeCabinet }}
          >
            <div className="w-full h-full shaker-box rounded-l-lg sm:rounded-l-xl relative overflow-hidden flex items-center justify-end">
              <div className="absolute inset-2 sm:inset-3 shaker-inner-bevel rounded-l-md sm:rounded-l-lg pointer-events-none" />
              <div className="shimmer-light" />
            </div>
          </motion.div>

          {/* Right Door Half (Slides Right) */}
          <motion.div
            className="w-1/2 h-full cabinet-wood-texture cabinet-frame flex items-center justify-start p-2 sm:p-4 border-l border-white/5"
            initial={{ x: 0 }}
            animate={{ x: isOpen ? '102%' : '0%' }}
            transition={{ duration: 0.72, ease: easeCabinet }}
          >
            <div className="w-full h-full shaker-box rounded-r-lg sm:rounded-r-xl relative overflow-hidden flex items-center justify-start">
              <div className="absolute inset-2 sm:inset-3 shaker-inner-bevel rounded-r-md sm:rounded-r-lg pointer-events-none" />
              <div className="shimmer-light" />
            </div>
          </motion.div>

          {/* Center Brand & Brass Handle Lockup */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-50 px-4"
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0.92 : 1,
            }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            {/* Decorative Top Brass Accent Line */}
            <div className="flex items-center gap-3 mb-2 sm:mb-3">
              <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-[#c4a74f]" />
              <span className="w-2 h-2 rounded-full bg-[#e6ca7e] shadow-sm" />
              <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-[#c4a74f]" />
            </div>

            {/* Company Name */}
            <h1 className="brand-name-gold text-3xl sm:text-5xl md:text-6xl font-normal tracking-[0.12em] text-center uppercase">
              Naman Kitchen
            </h1>

            {/* Subtitle */}
            <p className="text-[10px] sm:text-xs tracking-[0.28em] text-[#D0C29E]/90 uppercase mt-1 sm:mt-2 font-medium">
              Modular Kitchen & Living Studio
            </p>

            {/* Center Master Brass Handle Bar */}
            <div className="mt-4 sm:mt-6 relative flex items-center justify-center">
              {/* Left Mount Bracket */}
              <div className="w-3.5 sm:w-4 h-6 sm:h-7 brass-handle-mount rounded-sm" />

              {/* Polished Main Brass Rod with Shimmer */}
              <div className="w-36 sm:w-56 md:w-64 h-3 sm:h-3.5 brass-handle-rod rounded-full mx-[-2px] relative overflow-hidden flex items-center justify-center">
                <div className="shimmer-light" />
                <div className="w-2 h-2 rounded-full bg-[#523d0c] opacity-80" />
              </div>

              {/* Right Mount Bracket */}
              <div className="w-3.5 sm:w-4 h-6 sm:h-7 brass-handle-mount rounded-sm" />
            </div>

            {/* Subtle tap/click prompt */}
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#A69777]/60 mt-4 sm:mt-5 animate-pulse">
              Crafted in Indore • Tap to enter
            </span>
          </motion.div>
        </div>

        {/* Architectural Horizontal Cabinet Groove */}
        <motion.div 
          className="cabinet-groove"
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        />

        {/* ====================================================
            ROW 3: BOTTOM CABINET DRAWER (Slides DOWN)
            ==================================================== */}
        <motion.div
          className="relative w-full h-[28%] cabinet-wood-texture cabinet-frame flex items-center justify-center p-3 sm:p-4 z-30"
          initial={{ y: 0 }}
          animate={{ y: isOpen ? '102%' : '0%' }}
          transition={{ duration: 0.7, ease: easeCabinet }}
        >
          {/* Shaker Panel Inset */}
          <div className="w-full max-w-5xl h-full shaker-box rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-2 sm:inset-3 shaker-inner-bevel rounded-md sm:rounded-lg pointer-events-none" />

            {/* Bottom Brass Knob & Escutcheon */}
            <div className="brass-knob-base">
              <div className="brass-knob" />
            </div>

            {/* Decorative Corner Screws */}
            <div className="absolute top-3 left-4 w-2 h-2 rounded-full bg-[#8A7129] opacity-60 shadow-inner" />
            <div className="absolute top-3 right-4 w-2 h-2 rounded-full bg-[#8A7129] opacity-60 shadow-inner" />
            <div className="absolute bottom-3 left-4 w-2 h-2 rounded-full bg-[#8A7129] opacity-60 shadow-inner" />
            <div className="absolute bottom-3 right-4 w-2 h-2 rounded-full bg-[#8A7129] opacity-60 shadow-inner" />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

