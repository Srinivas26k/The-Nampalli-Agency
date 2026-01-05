import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Discovery Call',
        description: 'We hop on a 15-minute Google Meet. You tell me your bottlenecks. I listen. No heavy sales pitch, just problem-solving.',
        delay: 0
    },
    {
        number: '02',
        title: 'The Build',
        description: 'I disappear into my lab. 48 hours later (for MVPs) or 1 week later (for Systems), I emerge with a working solution.',
        delay: 0.2
    },
    {
        number: '03',
        title: 'Launch & ROI',
        description: 'We flip the switch. Your AI agent starts working. You start saving money instantly. I hand over the keys.',
        delay: 0.4
    }
];

const ProcessSteps: React.FC = () => {
    return (
        <section className="w-full py-24 px-6 md:px-12 bg-charcoal border-t border-muted/10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24">
                    <span className="text-muted text-xs tracking-[0.2em] font-sans uppercase">How It Works</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-offwhite mt-4">Simple. Fast. Transparent.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-muted/30 to-transparent" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: step.delay }}
                            className="relative flex flex-col"
                        >
                            {/* Number Circle */}
                            <div className="w-24 h-24 bg-charcoal border border-muted/20 rounded-full flex items-center justify-center mb-8 relative z-10 transition-colors duration-500 hover:border-champagne">
                                <span className="font-serif text-3xl text-champagne">{step.number}</span>
                            </div>

                            <h3 className="font-serif text-2xl text-offwhite mb-4">{step.title}</h3>
                            <p className="font-sans text-muted text-lg font-light leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
