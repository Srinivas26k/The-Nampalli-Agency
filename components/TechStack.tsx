import React from 'react';
import { motion } from 'framer-motion';

const TechBadge: React.FC<{ name: string; icon?: string }> = ({ name, icon }) => (
    <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="px-4 py-2 bg-velvet border border-muted/10 rounded-sm flex items-center gap-2"
    >
        {icon && <span className="text-champagne text-sm">{icon}</span>}
        <span className="font-sans text-xs text-muted uppercase tracking-wider">{name}</span>
    </motion.div>
);

const TechStack: React.FC = () => {
    const technologies = [
        { name: 'AI Agents', icon: '🤖' },
        { name: 'Python', icon: '🐍' },
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'OpenAI', icon: '✨' },
        { name: 'Claude', icon: '🧠' },
    ];

    return (
        <section className="w-full py-16 px-6 md:px-12 bg-velvet border-t border-b border-muted/10">
            <div className="max-w-6xl mx-auto">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-muted font-sans text-xs uppercase tracking-[0.3em] mb-8 text-center"
                >
                    Tech Stack & Tools
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {technologies.map((tech) => (
                        <TechBadge key={tech.name} name={tech.name} icon={tech.icon} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
