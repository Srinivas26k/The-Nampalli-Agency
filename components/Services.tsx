import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '01',
    title: 'Cognitive Infrastructure',
    description: 'Agentic Systems, RAG Pipelines, Custom LLMs',
    image: 'https://picsum.photos/seed/tech1/600/400'
  },
  {
    id: '02',
    title: 'Hyper-Performance Web',
    description: 'Rust/Python Backends, Next.js, High-Speed Automation',
    image: 'https://picsum.photos/seed/arch/600/400'
  },
  {
    id: '03',
    title: 'Generative Aesthetics',
    description: 'AI Ad Campaigns, Figma Mockups, Motion Design',
    image: 'https://picsum.photos/seed/art/600/400'
  },
  {
    id: '04',
    title: 'The Academy',
    description: 'MasterSessions, Bootcamps, Mentorship',
    image: 'https://picsum.photos/seed/edu/600/400'
  }
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const activeService = services.find(s => s.id === activeId);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Calculate relative position within the container
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-24 px-6 md:px-12 bg-charcoal overflow-hidden cursor-crosshair"
    >
       <div className="mb-16 md:mb-24">
         <span className="text-muted text-xs tracking-[0.2em] font-sans uppercase">Capabilities</span>
       </div>

      <div className="flex flex-col">
        {services.map((service) => (
          <div 
            key={service.id}
            onMouseEnter={() => setActiveId(service.id)}
            onMouseLeave={() => setActiveId(null)}
            className="group relative border-t border-muted/20 py-12 md:py-16 transition-all duration-300 hover:bg-white/5"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between z-10 relative">
              <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-offwhite group-hover:italic transition-all duration-300">
                <span className="text-xl md:text-2xl text-muted font-sans mr-4 md:mr-8 align-top opacity-50 block md:inline mb-2 md:mb-0">
                  ({service.id})
                </span>
                {service.title}
              </h3>
              <p className="font-sans text-muted mt-4 md:mt-0 md:max-w-xs text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
        <div className="border-t border-muted/20"></div>
      </div>

      {/* Floating Image Portal */}
      <AnimatePresence>
        {activeId && activeService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePosition.x + 20, // Offset from cursor
              y: mousePosition.y - 150
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="pointer-events-none fixed top-0 left-0 z-20 hidden md:block w-[400px] h-[250px] overflow-hidden rounded-sm shadow-2xl"
            style={{ 
                // We use fixed positioning but update transform based on relative mouse movement 
                // However, to make it truly follow the mouse globally, we need client coordinates.
                // Re-adjusting to fixed viewport coordinates for simplicity in this implementation
                left: 0,
                top: 0,
                x: mousePosition.x + (containerRef.current?.getBoundingClientRect().left || 0) + 40,
                y: mousePosition.y + (containerRef.current?.getBoundingClientRect().top || 0) - 125,
            }}
          >
            <img 
              src={activeService.image} 
              alt={activeService.title} 
              className="w-full h-full object-cover grayscale contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-champagne/10 mix-blend-overlay"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;