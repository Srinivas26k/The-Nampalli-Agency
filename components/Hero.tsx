import React from 'react';
import { motion } from 'framer-motion';

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

  return (
    <section className="h-screen w-full flex flex-col justify-between px-6 py-8 md:px-12 md:py-12 relative overflow-hidden">
      {/* Top Label */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="flex justify-between items-start text-muted text-xs md:text-sm tracking-[0.2em] font-sans uppercase"
      >
        <span>Est. 2025 // Hyderabad</span>
        <span>The Nampalli Agency</span>
      </motion.div>

      {/* Main Headline */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center w-full z-10"
      >
        {/* Line 1 */}
        <div className="overflow-hidden">
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-[18vw] leading-[0.85] text-offwhite text-center font-normal tracking-tight"
          >
            Digital
          </motion.h1>
        </div>
        
        {/* Line 2 with Italic */}
        <div className="overflow-hidden">
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-[18vw] leading-[0.85] text-offwhite text-center font-light italic tracking-tight"
          >
            Alchemy.
          </motion.h1>
        </div>
      </motion.div>

      {/* Sub-headline & Scroll Indicator */}
      <div className="flex flex-col items-center space-y-12">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-muted text-sm md:text-lg font-sans tracking-wide text-center max-w-md"
        >
          Merging <span className="text-offwhite">Agentic AI</span> with <span className="text-offwhite">Visceral Design</span>.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="h-16 w-[1px] bg-muted/30 overflow-hidden relative"
        >
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-offwhite"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;