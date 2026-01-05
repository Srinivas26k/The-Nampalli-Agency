import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const ComparisonTable: React.FC = () => {
    return (
        <section className="w-full py-24 px-6 md:px-12 bg-velvet border-t border-muted/10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-5xl text-offwhite mb-6">
                        Why Hiring Me Makes Financial Sense
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-6 bg-charcoal border-b-2 border-muted/20 text-muted font-sans text-sm uppercase tracking-wider w-1/3">
                                    Comparison
                                </th>
                                <th className="p-6 bg-charcoal border-b-2 border-red-500/20 text-muted font-sans text-sm uppercase tracking-wider w-1/3">
                                    Full-Time AI Hiring
                                </th>
                                <th className="p-6 bg-champagne/10 border-b-2 border-champagne text-champagne font-sans text-sm uppercase tracking-wider w-1/3">
                                    The Nampalli Agency
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-offwhite font-light">
                            {/* Row 1 */}
                            <tr className="border-b border-muted/10">
                                <td className="p-6 font-medium">Annual Cost</td>
                                <td className="p-6 text-red-400">$120,000 + Benefits</td>
                                <td className="p-6 text-green-400 font-medium">Fraction of the cost</td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="border-b border-muted/10">
                                <td className="p-6 font-medium">Time to Onboard</td>
                                <td className="p-6 text-muted">3-4 Months</td>
                                <td className="p-6 text-offwhite">Immediate (Start Today)</td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="border-b border-muted/10">
                                <td className="p-6 font-medium">Reliability</td>
                                <td className="p-6 text-muted">Sick days, vacation, burnout</td>
                                <td className="p-6 text-offwhite">24/7 Availability (It's Code)</td>
                            </tr>
                            {/* Row 4 */}
                            <tr className="border-b border-muted/10">
                                <td className="p-6 font-medium">Expertise</td>
                                <td className="p-6 text-muted">Limited to one person's skill</td>
                                <td className="p-6 text-offwhite">Full Stack + AI Specialist</td>
                            </tr>
                            {/* Row 5 */}
                            <tr className="border-b border-muted/10">
                                <td className="p-6 font-medium">Management</td>
                                <td className="p-6 text-muted">Requires oversight & training</td>
                                <td className="p-6 text-offwhite">Autonomous Delivery</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-muted text-sm italic">
                        *Source: Average AI Engineer salary in 2024 according to Glassdoor.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
