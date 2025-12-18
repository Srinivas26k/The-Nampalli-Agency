import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="min-h-[90vh] w-full px-6 py-24 md:px-12 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 bg-charcoal overflow-hidden">

      {/* Left Column - Profile Image with Hover Effect */}
      <motion.div
        style={{ opacity }}
        className="flex items-center justify-center md:justify-end"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-md aspect-square overflow-hidden rounded-sm group"
        >
          <img
            src="/Thub.jpeg"
            alt="Srinivas Nampalli"
            className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700 ease-out"
          />
          {/* Subtle overlay that fades on hover */}
          <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-transparent transition-all duration-700"></div>
        </motion.div>
      </motion.div>

      {/* Right Column - Editorial Text */}
      <motion.div
        style={{ opacity }}
        className="flex flex-col justify-center space-y-8 relative"
      >
        <span className="text-champagne text-xs tracking-[0.2em] font-sans uppercase mb-4 block">
          The Architect
        </span>

        <motion.div style={{ y: yHeading }}>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-offwhite font-light">
            I am Srinivas Nampalli. <br />
            <span className="italic text-muted opacity-80">Building systems that drive results.</span>
          </h2>
        </motion.div>

        <div className="h-[1px] w-24 bg-muted/20 my-8"></div>

        <motion.div style={{ y: yText }}>
          <p className="font-sans text-lg md:text-xl text-muted leading-relaxed max-w-xl font-light">
            I transform businesses with <span className="text-offwhite">AI-powered solutions</span> that work autonomously—
            from intelligent agents that handle customer queries 24/7, to landing pages that convert visitors into clients,
            to AI-generated campaigns that scale your brand.
          </p>
          <p className="font-sans text-lg md:text-xl text-muted leading-relaxed max-w-xl font-light mt-6">
            <span className="text-champagne">Self-taught. Battle-tested. Results-driven.</span>
            {' '}Every line of code I write serves one purpose: growing your business.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Introduction;