import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '01',
    title: 'AI Agents & Automations',
    description: '24/7 autonomous systems that handle customer queries, qualify leads, and automate workflows—saving 80+ hours monthly',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80'
  },
  {
    id: '02',
    title: 'Landing Pages & Websites',
    description: 'High-converting web experiences with minimal backend—optimized for speed, SEO, and client acquisition',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80'
  },
  {
    id: '03',
    title: 'Rapid MVP Prototyping',
    description: 'Transform your idea into a working prototype in days, not months—validate fast, iterate faster, launch with confidence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80'
  },
  {
    id: '04',
    title: 'AI Marketing Campaigns',
    description: 'AI-generated ad copy, campaign strategies, and content that performs—scaling your brand at AI speed',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop&q=80'
  },
  {
    id: '05',
    title: 'AI Visual Design',
    description: 'Product photography, promotional videos, and brand visuals created in hours, not weeks—with AI precision',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&h=400&fit=crop&q=80'
  }
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mouseX, setMouseX] = useState(0);
  const [activeRowBounds, setActiveRowBounds] = useState<DOMRect | null>(null);
  const rowRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activeService = services.find(s => s.id === activeId);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
  };

  const handleServiceEnter = (serviceId: string) => {
    setActiveId(serviceId);
    const rowElement = rowRefs.current[serviceId];
    if (rowElement) {
      setActiveRowBounds(rowElement.getBoundingClientRect());
    }
  };

  const handleServiceLeave = () => {
    setActiveId(null);
    setActiveRowBounds(null);
  };

  return (
    <section
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
            ref={(el) => rowRefs.current[service.id] = el}
            onMouseEnter={() => handleServiceEnter(service.id)}
            onMouseLeave={handleServiceLeave}
            className="group relative border-t border-muted/20 py-12 md:py-16 transition-all duration-500 ease-out hover:bg-white/5"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between z-10 relative">
              <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-offwhite transition-all duration-500 ease-out origin-left group-hover:text-champagne group-hover:scale-105 group-hover:italic">
                <span className="text-xl md:text-2xl text-muted font-sans mr-4 md:mr-8 align-top opacity-50 block md:inline mb-2 md:mb-0 group-hover:text-champagne/70 group-hover:no-underline not-italic">
                  ({service.id})
                </span>
                {service.title}
              </h3>
              <p className="font-sans text-muted mt-4 md:mt-0 md:max-w-xs text-sm md:text-base opacity-60 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {service.description}
              </p>
            </div>
          </div>
        ))}
        <div className="border-t border-muted/20"></div>
      </div>

      {/* Floating Image - Locked to Row */}
      <AnimatePresence>
        {activeId && activeService && activeRowBounds && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="pointer-events-none fixed z-20 hidden md:block w-[400px] h-[250px] overflow-hidden rounded-sm shadow-2xl"
            style={(() => {
              // X position follows cursor horizontally
              let xPos = mouseX + 40;

              // Keep image on screen horizontally
              if (xPos + 400 > window.innerWidth - 20) {
                xPos = mouseX - 440; // Show on left side of cursor instead
              }
              if (xPos < 20) {
                xPos = 20;
              }

              // Y position LOCKED to vertical center of the active row
              const rowCenterY = activeRowBounds.top + (activeRowBounds.height / 2);
              const yPos = rowCenterY - 125; // Center the 250px tall image

              return {
                left: `${xPos}px`,
                top: `${yPos}px`,
              };
            })()}
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