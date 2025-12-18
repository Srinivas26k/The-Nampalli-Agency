import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Velocity AI',
    category: 'RAG Infrastructure',
    outcome: '600% Query Speed Increase',
    image: 'https://picsum.photos/seed/velocity/1200/800'
  },
  {
    id: 'p2',
    title: 'Lumina Campaigns',
    category: 'Gen-AI Marketing',
    outcome: 'Zero-Touch Ad Generation',
    image: 'https://picsum.photos/seed/lumina/1200/800'
  },
  {
    id: 'p3',
    title: 'Aether Finance',
    category: 'Fintech Dashboard',
    outcome: 'Real-time Rust Backend',
    image: 'https://picsum.photos/seed/aether/1200/800'
  }
];

const cardTextVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={cardRef}
      style={{ opacity }}
      className="w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center py-12 md:py-24 sticky top-0 bg-charcoal"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Details with Staggered Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ staggerChildren: 0.15 }}
          className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} flex flex-col space-y-6`}
        >
           <motion.div variants={cardTextVariants} className="flex items-center space-x-4">
              <span className="text-champagne text-xs font-sans tracking-widest uppercase">0{index + 1}</span>
              <div className="h-[1px] w-12 bg-muted/20"></div>
              <span className="text-muted text-xs font-sans tracking-widest uppercase">{project.category}</span>
           </motion.div>
           
           <motion.h3 variants={cardTextVariants} className="font-serif text-5xl md:text-7xl text-offwhite leading-none">
             {project.title}
           </motion.h3>
           
           <motion.div variants={cardTextVariants} className="py-6">
             <p className="font-sans text-xl md:text-2xl text-offwhite font-light border-l-2 border-champagne pl-6 py-2">
               {project.outcome}
             </p>
           </motion.div>
           
           <motion.div variants={cardTextVariants} className="flex gap-2">
              <button className="text-muted text-sm font-sans uppercase hover:text-offwhite transition-colors tracking-wide underline decoration-muted/30 underline-offset-4">
                View Case Study
              </button>
           </motion.div>
        </motion.div>

        {/* Image Container with Parallax & Reveal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} h-[400px] md:h-[600px] w-full overflow-hidden relative rounded-sm`}
        >
          <motion.div 
            style={{ y }}
            className="absolute inset-0 w-full h-[120%] -top-[10%]"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* Overlay to darken image slightly */}
            <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply"></div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
};

const WorkGallery: React.FC = () => {
  return (
    <section className="relative w-full bg-charcoal px-6 md:px-12 py-32 z-0">
      <div className="mb-24 md:mb-32">
        <h2 className="font-serif text-4xl md:text-5xl text-offwhite text-center italic">Selected Works</h2>
      </div>
      
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;