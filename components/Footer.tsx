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
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: '#f5f5f7' }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-muted"
          >
            <Twitter size={20} strokeWidth={1} />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: '#f5f5f7' }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-muted"
          >
            <Linkedin size={20} strokeWidth={1} />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.2, color: '#f5f5f7' }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-muted"
          >
            <Github size={20} strokeWidth={1} />
          </motion.a>
        </div>
      </div>

      {/* Center CTA */}
      <div className="flex flex-col items-center justify-center flex-grow py-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-muted font-sans text-sm md:text-base uppercase tracking-[0.3em] mb-4"
        >
          Ready to transform your business?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-champagne font-sans text-xs uppercase tracking-wider">Available for new projects</span>
        </motion.div>

        <motion.a
          href="mailto:srinivasvarma764[at]gmail[dot]com"
          className="group relative inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <span className="font-serif text-[5vw] md:text-[6vw] leading-none text-offwhite group-hover:text-champagne transition-colors duration-500">
            srinivasvarma764[at]gmail[dot]com
          </span>
          <motion.div
            className="h-[1px] w-0 bg-champagne absolute bottom-4 left-0"
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4 }}
          />
        </motion.a>
      </div>

      {/* Bottom Info */}
      <div className="w-full flex flex-col md:flex-row justify-between items-end md:items-center text-muted/40 text-[10px] md:text-xs font-sans uppercase tracking-widest space-y-4 md:space-y-0">
        <div className="flex flex-col space-y-1">
          <span>AI Systems Specialist</span>
          <span>Self-Taught • Hyderabad, India</span>
        </div>

        <div className="text-right">
          <span>&copy; 2025 The Nampalli Agency</span>
          <span className="block mt-1">Powered by AI • Built with Precision</span>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;