import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = ({ content }) => {
    const { items } = content;

    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden clip-diagonal-reverse -mt-20 pt-40 pb-40">
            {/* Dynamic Mesh Gradient Background */}
            <div className="absolute inset-0 bg-mesh opacity-60 mix-blend-screen pointer-events-none"></div>

            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
                            A complete toolkit for the modern web.
                        </h2>
                        <p className="text-lg text-slate-300 mb-10 max-w-lg">
                            We handle the complexities of software so you can focus on your business logic and customer experience.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-4 text-accent-teal">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1 text-white">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
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
