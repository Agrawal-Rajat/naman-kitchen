import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import Button from '../../components/common/Button';
import Eyebrow from '../../components/common/Eyebrow';
import floorBg from '../../assets/floor.png';
import heroImage from '../../assets/kitchen-hero-image.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100svh-4rem)] flex items-center py-16 lg:py-24 bg-[#FAF8F5]">
      {/* 1. Floor Texture Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none opacity-10 mix-blend-multiply z-0"
        style={{ backgroundImage: `url(${floorBg})` }}
        aria-hidden="true"
      />

      {/* 2. Hero Background Image with Smooth Right-to-Left Gradient Fade */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* Kitchen Hero Image with subtle scale & opacity reveal */}
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src={heroImage}
          alt="Naman Kitchen Studio Modular Kitchen Showcase"
          className="absolute right-0 top-0 w-full lg:w-[68%] h-full object-cover object-right lg:object-center"
        />

        {/* Primary Gradient Overlay: Solid Ivory on Left -> Smooth Transparent on Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/95 via-45% sm:via-50% lg:via-52% to-transparent" />

        {/* Secondary Vertical Gradient for Top Nav and Bottom Edge Smoothness */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/60 via-transparent to-[#FAF8F5]/85" />
      </div>

      {/* Ambient Lighting Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[var(--color-naman-indigo)]/5 rounded-full blur-3xl pointer-events-none z-2" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[var(--color-brass)]/10 rounded-full blur-3xl pointer-events-none z-2" />

      {/* 3. Foreground Content */}
      <div className="container-site relative z-10 w-full">
        <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-7 sm:space-y-8 lg:space-y-9"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants}>
              <Eyebrow className="text-xs sm:text-sm py-1.5 px-4 bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-xs">
                Crafted in Indore & Madhya Pradesh
              </Eyebrow>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants} 
              className="text-3xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-[var(--color-espresso)] leading-[1.14] tracking-tight font-display"
            >
              Modular Kitchens Made for{' '}
              <span className="relative inline-block text-[var(--color-naman-indigo)] mt-1 sm:mt-0">
                Real Indian Homes.
                <svg
                  className="absolute -bottom-2 inset-x-0 w-full h-3.5 text-[var(--color-naman-red)]/35 pointer-events-none"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C50 3 150 3 197 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-[var(--color-espresso-mid)] max-w-2xl leading-relaxed font-normal"
            >
              Engineered with 100% site measurement accuracy, heavy-duty soft-close hardware, and moisture-proof HDMR cores. Built to withstand continuous Indian cooking while looking flawlessly modern.
            </motion.p>

            {/* Primary & Secondary Call to Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon={ArrowRight} className="shadow-xl shadow-[var(--color-naman-indigo)]/20 px-8 py-4 text-base">
                Book Free Consultation
              </Button>
              <Button to="/kitchens" variant="outline" size="lg" className="bg-white/80 backdrop-blur-md border-stone-300 hover:bg-white px-7 py-4 text-base">
                Explore Layouts
              </Button>
            </motion.div>

            {/* Trust Highlights Row */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-stone-300/80 w-full max-w-2xl grid grid-cols-3 gap-3 sm:gap-6 text-xs sm:text-sm text-[var(--color-espresso)] font-semibold">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/40 backdrop-blur-xs border border-white/60">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-naman-indigo)] shrink-0" />
                <span>100% Site Accuracy</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/40 backdrop-blur-xs border border-white/60">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-naman-red)] shrink-0" />
                <span>8–10 Yr Artisans</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/40 backdrop-blur-xs border border-white/60">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brass)] shrink-0" />
                <span>Since 2017</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}



