import React, { useRef } from 'react';
import { motion, useSpring, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1] // Custom bezier for fluid motion
      }
    },
  };

  // Scroll Parallax Logic
  const { scrollY } = useScroll();
  const yHeadline = useTransform(scrollY, [0, 500], [0, 200]);
  const ySubheadline = useTransform(scrollY, [0, 500], [0, 100]);

  // Magnetic Scroll Logic
  const ref = useRef<HTMLDivElement>(null);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const x = clientX - centerX;
    const y = clientY - centerY;

    springX.set(x * 0.3);
    springY.set(y * 0.3);
  };

  const handleMouseLeave = () => {
    springX.set(0);
    springY.set(0);
  };

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 py-12 relative overflow-hidden bg-charcoal">

      {/* Top Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-8 left-0 w-full flex justify-center"
      >
        <span className="text-muted text-[10px] sm:text-xs tracking-[0.2em] font-sans uppercase">
          Est. 2025 // Hyderabad
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: yHeadline }}
        className="flex flex-col items-center justify-center w-full z-10 max-w-5xl mx-auto"
      >
        <div className="overflow-hidden">
          <motion.h1
            variants={itemVariants}
            className="font-serif text-[10vw] sm:text-[8vw] md:text-[6vw] leading-[1.1] text-center font-normal tracking-tight text-offwhite"
          >
            I Build AI Employees
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            variants={itemVariants}
            className="font-serif text-[10vw] sm:text-[8vw] md:text-[6vw] leading-[1.1] text-center font-light italic tracking-tight text-champagne"
          >
            That Work 24/7.
          </motion.h1>
        </div>
      </motion.div>

      {/* Sub-headline */}
      <motion.div
        style={{ y: ySubheadline }}
        className="mt-8 max-w-2xl text-center px-4"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-muted text-sm sm:text-base md:text-lg font-sans tracking-wide leading-relaxed"
        >
          Automate customer support, lead gen, and workflows. Stop paying for repetitive tasks.
          <span className="text-offwhite block mt-2">Scale your business without increasing headcount.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8 items-center"
        >
          {/* Primary CTA - Calendly */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://calendly.com/srinivasvarma764/30min', '_blank')}
            className="px-8 py-4 bg-champagne text-charcoal font-bold font-sans uppercase tracking-wider text-sm rounded-sm hover:bg-champagne/90 transition-colors w-full sm:w-auto"
          >
            Book Strategy Call
          </motion.button>

          {/* Secondary CTA - View Pricing */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-transparent border border-muted/30 text-offwhite font-medium font-sans uppercase tracking-wider text-sm rounded-sm hover:bg-white/5 transition-colors w-full sm:w-auto"
          >
            View Pricing
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Background Abstract Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-champagne blur-[150px] rounded-full animate-pulse" />
      </div>

    </section>
  );
};

export default Hero;