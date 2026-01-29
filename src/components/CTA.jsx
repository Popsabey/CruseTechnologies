import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = ({ content }) => {
    const { headline, sub_text, actions } = content;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-stripe-gradient rounded-3xl p-10 md:p-16 relative overflow-hidden text-center">

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10 tracking-tight">{headline}</h2>
                    <p className="text-lg text-white/80 mb-10 relative z-10 max-w-2xl mx-auto">{sub_text}</p>

                    <div className="relative z-10">
                        {actions.map((action) => (
                            <a
                                key={action.label}
                                href={action.href}
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-blurple bg-white rounded-full transition-all hover:bg-slate-50 hover:shadow-lg"
                            >
                                {action.label}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
