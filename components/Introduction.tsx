import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  // Moving 'y' positively creates a "slower than scroll" effect (lag)
  const yHeading = useTransform(scrollYProgress, [0, 1], [0, 100]); 
  const yText = useTransform(scrollYProgress, [0, 1], [0, 40]); 
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="min-h-[80vh] w-full px-6 py-24 md:px-12 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 bg-charcoal overflow-hidden">
      {/* Empty Left Column (Negative Space) */}
      <div className="hidden md:block"></div>

      {/* Editorial Text Right Column */}
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
            <span className="italic text-muted opacity-80">An architect of intelligence.</span>
          </h2>
        </motion.div>
        
        <div className="h-[1px] w-24 bg-muted/20 my-8"></div>

        <motion.div style={{ y: yText }}>
          <p className="font-sans text-lg md:text-xl text-muted leading-relaxed max-w-xl font-light">
            I don't just build websites; I engineer <span className="text-offwhite">autonomous systems</span> and craft digital heirlooms using Rust, Python, and Generative AI. 
            In a world of noise, I create signals of clarity and power.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Introduction;