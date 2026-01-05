import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How fast can you deliver?",
        answer: "For the MVP Sprint, I guarantee delivery within 48-72 hours. Larger systems typically take 1-2 weeks. I prioritize speed because I know time is money."
    },
    {
        question: "What if I'm not technical?",
        answer: "You don't need to be. I handle all the code, hosting, and setup. You just get a link that works."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. I use industry-standard encryption and secure APIs (OpenAI Enterprise/Claude). I never store your sensitive customer data."
    },
    {
        question: "Do you offer refunds?",
        answer: "For MVPs, payment is upfront to reserve the slot. If I fail to deliver the agreed scope, I refund 100%. No questions asked."
    },
    {
        question: "Why are you cheaper than an agency?",
        answer: "You are hiring a specialist directly, not a middleman with overheads. Low overhead for me = High ROI for you."
    }
];

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-muted/10">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`font-sans text-lg md:text-xl transition-colors duration-300 ${isOpen ? 'text-champagne' : 'text-offwhite group-hover:text-champagne/80'}`}>
                    {question}
                </span>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? <Minus className="text-champagne" /> : <Plus className="text-muted" />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-muted font-light leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="w-full py-24 px-6 md:px-12 bg-charcoal">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-offwhite">Frequently Asked Questions</h2>
                </div>

                <div className="flex flex-col">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
