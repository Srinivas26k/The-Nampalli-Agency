import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("mqezzopd");

    // Track form submission with Google Analytics
    useEffect(() => {
        if (state.submitting && typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'form_submit', {
                event_category: 'Contact',
                event_label: 'Formspree Submission'
            });
        }
    }, [state.submitting]);

    // Track successful submission
    useEffect(() => {
        if (state.succeeded && typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
                event_category: 'Contact',
                event_label: 'Form Submitted Successfully'
            });
        }
    }, [state.succeeded]);

    return (
        <section className="w-full py-24 px-6 md:px-12 bg-charcoal relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-champagne text-xs tracking-[0.3em] font-sans uppercase mb-4 block">
                        Let's Work Together
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-offwhite mb-6">
                        Start Your Project
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Tell me about your project and I'll get back to you within 24 hours with a custom proposal.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-muted font-sans text-sm uppercase tracking-wider mb-2">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                disabled={state.submitting}
                                className="w-full px-4 py-3 bg-velvet border border-muted/20 rounded-sm text-offwhite font-sans focus:border-champagne/50 focus:outline-none transition-colors disabled:opacity-50"
                                placeholder="John Doe"
                            />
                            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-muted font-sans text-sm uppercase tracking-wider mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                disabled={state.submitting}
                                className="w-full px-4 py-3 bg-velvet border border-muted/20 rounded-sm text-offwhite font-sans focus:border-champagne/50 focus:outline-none transition-colors disabled:opacity-50"
                                placeholder="john@company.com"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <label htmlFor="company" className="block text-muted font-sans text-sm uppercase tracking-wider mb-2">
                            Company / Project Name
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            disabled={state.submitting}
                            className="w-full px-4 py-3 bg-velvet border border-muted/20 rounded-sm text-offwhite font-sans focus:border-champagne/50 focus:outline-none transition-colors disabled:opacity-50"
                            placeholder="Acme Corp"
                        />
                    </div>

                    {/* Service */}
                    <div>
                        <label htmlFor="service" className="block text-muted font-sans text-sm uppercase tracking-wider mb-2">
                            Interested In *
                        </label>
                        <select
                            id="service"
                            name="service"
                            required
                            disabled={state.submitting}
                            className="w-full px-4 py-3 bg-velvet border border-muted/20 rounded-sm text-offwhite font-sans focus:border-champagne/50 focus:outline-none transition-colors cursor-pointer disabled:opacity-50"
                        >
                            <option value="ai-agents">AI Agents & Automations</option>
                            <option value="landing-pages">Landing Pages & Websites</option>
                            <option value="rapid-mvp">Rapid MVP Prototyping</option>
                            <option value="ai-marketing">AI Marketing Campaigns</option>
                            <option value="ai-design">AI Visual Design</option>
                            <option value="consulting">Consulting / Not Sure</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-muted font-sans text-sm uppercase tracking-wider mb-2">
                            Project Details *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            disabled={state.submitting}
                            rows={6}
                            className="w-full px-4 py-3 bg-velvet border border-muted/20 rounded-sm text-offwhite font-sans focus:border-champagne/50 focus:outline-none transition-colors resize-none disabled:opacity-50"
                            placeholder="Tell me about your project, goals, timeline, and budget..."
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <motion.button
                            type="submit"
                            disabled={state.submitting}
                            whileHover={!state.submitting ? { scale: 1.02 } : {}}
                            whileTap={!state.submitting ? { scale: 0.98 } : {}}
                            className="px-12 py-4 bg-champagne text-charcoal font-sans text-sm uppercase tracking-wider font-medium rounded-sm hover:bg-champagne/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {state.submitting ? 'Sending...' : 'Send Message'}
                        </motion.button>
                    </div>

                    {/* Status Messages */}
                    <AnimatePresence>
                        {state.succeeded && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-center p-4 bg-green-500/10 border border-green-500/30 rounded-sm"
                            >
                                <p className="text-green-400 font-sans text-sm">
                                    ✓ Message sent successfully! I'll reply within 24 hours.
                                </p>
                            </motion.div>
                        )}

                        {state.errors && Object.keys(state.errors).length > 0 && !state.submitting && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-center p-4 bg-red-500/10 border border-red-500/30 rounded-sm"
                            >
                                <p className="text-red-400 font-sans text-sm">
                                    Failed to send message. Please email directly at srinivasvarma764@gmail.com
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.form>

                {/* Alternative Contact */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 pt-12 border-t border-muted/10"
                >
                    <p className="text-muted font-sans text-sm mb-4">
                        Prefer email?
                    </p>
                    <a
                        href="mailto:srinivasvarma764@gmail.com"
                        onClick={() => {
                            if (typeof window !== 'undefined' && (window as any).gtag) {
                                (window as any).gtag('event', 'click', {
                                    event_category: 'Contact',
                                    event_label: 'Email Link Clicked'
                                });
                            }
                        }}
                        className="text-champagne font-sans text-lg hover:underline"
                    >
                        srinivasvarma764@gmail.com
                    </a>
                </motion.div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
                <div className="w-96 h-96 bg-champagne rounded-full blur-3xl" />
            </div>
        </section>
    );
};

export default ContactForm;
