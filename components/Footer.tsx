import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="min-h-screen w-full bg-velvet text-offwhite flex flex-col justify-between px-6 py-12 md:px-12 md:py-16 relative overflow-hidden">
      
      {/* Top Section */}
      <div className="w-full flex justify-between items-start border-b border-muted/10 pb-8">
        <span className="font-serif text-xl md:text-2xl italic text-muted">The Nampalli Agency</span>
        <div className="flex space-x-6">
           <a href="#" className="text-muted hover:text-offwhite transition-colors"><Twitter size={20} strokeWidth={1} /></a>
           <a href="#" className="text-muted hover:text-offwhite transition-colors"><Linkedin size={20} strokeWidth={1} /></a>
           <a href="#" className="text-muted hover:text-offwhite transition-colors"><Github size={20} strokeWidth={1} /></a>
        </div>
      </div>

      {/* Center CTA */}
      <div className="flex flex-col items-center justify-center flex-grow py-20">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-muted font-sans text-sm md:text-base uppercase tracking-[0.3em] mb-8"
        >
          Let us engineer your future
        </motion.p>
        
        <motion.a 
          href="mailto:hello@srinivas.ai"
          className="group relative inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <span className="font-serif text-[10vw] md:text-[8vw] leading-none text-offwhite group-hover:text-champagne transition-colors duration-500">
            hello@srinivas.ai
          </span>
          <motion.div 
            className="h-[1px] w-0 bg-champagne absolute bottom-4 left-0"
            whileInView={{ w: "100%" }} // Wait... better to animate on hover? No, initial load is better style
            // Let's make it expand on hover
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4 }}
          />
        </motion.a>
      </div>

      {/* Bottom Info */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center text-muted/40 text-[10px] md:text-xs font-sans uppercase tracking-widest space-y-4 md:space-y-0">
        <div className="flex flex-col space-y-1">
           <span>Optimized for AI Search</span>
           <span>Built with Rust & React</span>
        </div>
        
        <div className="text-right">
          <span>&copy; 2025 Srinivas Nampalli</span>
          <span className="block mt-1">Hyderabad, India</span>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;