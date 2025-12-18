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

        {/* Glass Phone Button */}
        <motion.a
          href="tel:+919346780823"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-md bg-offwhite/5 border border-champagne/20 hover:border-champagne/40 hover:bg-offwhite/10 transition-all duration-300"
        >
          {/* Phone Icon */}
          <svg
            className="w-5 h-5 text-champagne group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>

          <span className="font-sans text-lg text-offwhite group-hover:text-champagne transition-colors">
            +91 93467 80823
          </span>

          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-champagne/10 to-transparent animate-shimmer"></div>
        </motion.a>

        <motion.a
          href="mailto:srinivasvarma764@gmail.com"
          className="group relative inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <span className="font-serif text-[5vw] md:text-[6vw] leading-none text-offwhite group-hover:text-champagne transition-colors duration-500">
            srinivasvarma764@gmail.com
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