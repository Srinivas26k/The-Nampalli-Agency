import React from 'react';
import { motion } from 'framer-motion';

const TechBadge: React.FC<{ name: string }> = ({ name }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex-shrink-0 px-6 py-3 bg-black border border-green-500/30 rounded-sm hover:border-green-500/80 transition-all duration-300 group cursor-default"
    >
        <span className="font-mono text-sm text-green-500/70 group-hover:text-green-400 uppercase tracking-widest whitespace-nowrap flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500/50 rounded-full animate-pulse"></span>
            {name}
        </span>
    </motion.div>
);

const TechStack: React.FC = () => {
    const technologies = [
        'Python',
        'LangChain',
        'React',
        'Next.js',
        'TypeScript',
        'Figma',
        'Framer',
        'Make',
        'N8n',
        'Qiskit',
        'OpenAI',
        'Claude',
        'Supabase',
        'PostgreSQL',
        'TailwindCSS',
        'Node.js',
    ];

    // Duplicate for seamless infinite scroll
    const duplicatedTechs = [...technologies, ...technologies];

    return (
        <section className="w-full py-16 px-6 md:px-12 bg-velvet border-t border-b border-muted/10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-muted font-sans text-xs uppercase tracking-[0.3em] mb-12 text-center"
                >
                    Tech Stack & Tools
                </motion.p>

                {/* Auto-scrolling carousel - Desktop */}
                <div className="relative hidden md:block">
                    {/* Gradient overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-velvet to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-velvet to-transparent z-10 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="overflow-hidden"
                    >
                        <motion.div
                            animate={{
                                x: [0, -1920], // Adjust based on total width
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                            className="flex gap-4"
                        >
                            {duplicatedTechs.map((tech, index) => (
                                <TechBadge key={`${tech}-${index}`} name={tech} />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Static grid for mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-3 md:hidden"
                >
                    {technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
