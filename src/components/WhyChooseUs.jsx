import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = ({ content }) => {
    const { items } = content;

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-light/20 rounded-full blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Why leading companies build with CT Solutions.
                        </h2>
                        <p className="text-lg text-slate-300 mb-10 max-w-lg">
                            We combine technical excellence with user-centric design to deliver software that drives real business results.
                        </p>
                        <a href="#contact" className="inline-block bg-accent px-8 py-4 rounded-xl font-semibold text-white hover:bg-accent-hover transition-colors">
                            Talk to an Expert
                        </a>
                    </div>

                    <div className="space-y-8">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-4">
                                    <CheckCircle2 className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
