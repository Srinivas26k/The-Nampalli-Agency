import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular: boolean;
    cta: string;
}

const tiers: PricingTier[] = [
    {
        name: "MVP Sprint",
        price: "$499",
        description: "Perfect for startups and local businesses needing a quick, high-quality digital presence.",
        features: [
            "High-Converting Landing Page",
            "Basic Lead Capture Automation",
            "SEO & Performance Optimization",
            "48-Hour Delivery",
            "1 Month Support"
        ],
        isPopular: false,
        cta: "Start Sprint"
    },
    {
        name: "Growth System",
        price: "$2,499",
        description: "Complete AI automation suite for scaling businesses.",
        features: [
            "Everything in MVP Sprint",
            "Custom AI Customer Support Agent",
            "Email Marketing Automation",
            "Payment Gateway Integration",
            "CRM Integration",
            "3 Months Support"
        ],
        isPopular: true,
        cta: "Scale Now"
    },
    {
        name: "AI COO Retainer",
        price: "$1,500/mo",
        description: "Your fractional Chief Automation Officer. Ongoing optimization and new systems.",
        features: [
            "Weekly Strategy Calls",
            "Unlimited Workflow Automations",
            "Priority 24/7 Support",
            "Competitor Analysis",
            "Custom Internal Tools",
            "Cancel Anytime"
        ],
        isPopular: false,
        cta: "Hire AI COO"
    }
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="w-full py-24 px-6 md:px-12 bg-charcoal relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-champagne text-xs tracking-[0.3em] font-sans uppercase mb-4 block">
                        Investment
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-offwhite mb-6">
                        Stop Burning Cash on Manual Work.
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Choose a plan that pays for itself in weeks, not years.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {tiers.map((tier, index) => (
                        <PricingCard key={index} tier={tier} index={index} />
                    ))}
                </div>

                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-champagne/5 blur-[120px] rounded-full pointer-events-none" />
            </div>
        </section>
    );
};

const PricingCard: React.FC<{ tier: PricingTier; index: number }> = ({ tier, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`
                relative flex flex-col p-8 rounded-sm
                ${tier.isPopular
                    ? 'bg-velvet border-2 border-champagne/40 shadow-2xl shadow-champagne/10 scale-105 z-20'
                    : 'bg-velvet/50 border border-muted/10 hover:border-muted/30 z-10'
                }
                transition-all duration-300
            `}
        >
            {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-champagne text-charcoal text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                </div>
            )}

            <div className="mb-8">
                <h3 className="font-serif text-2xl text-offwhite mb-2">{tier.name}</h3>
                <p className="text-muted text-sm min-h-[40px]">{tier.description}</p>
            </div>

            <div className="mb-8">
                <span className="text-4xl md:text-5xl font-serif text-offwhite">{tier.price}</span>
            </div>

            <ul className="flex-grow space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-muted">
                        <Check className="w-5 h-5 text-champagne mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://calendly.com/srinivasvarma764/30min', '_blank')}
                className={`
                    w-full py-4 px-6 text-sm uppercase tracking-wider font-medium text-center transition-colors
                    ${tier.isPopular
                        ? 'bg-champagne text-charcoal hover:bg-champagne/90'
                        : 'bg-transparent border border-muted/30 text-offwhite hover:bg-muted/10'
                    }
                `}
            >
                {tier.cta}
            </motion.button>
        </motion.div>
    );
};

export default Pricing;
