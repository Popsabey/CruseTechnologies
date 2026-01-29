import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = ({ content }) => {
    const { headline, sub_text, actions } = content;

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">{headline}</h2>
                    <p className="text-lg text-blue-100 mb-10 relative z-10">{sub_text}</p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                        {actions.map((action) => (
                            <a
                                key={action.label}
                                href={action.href}
                                className={`inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-xl transition-all ${action.type === 'primary'
                                        ? 'bg-white text-primary hover:bg-gray-50'
                                        : 'bg-transparent text-white border border-white hover:bg-white/10'
                                    }`}
                            >
                                {action.label}
                                {action.type === 'primary' && <ArrowRight className="ml-2 w-4 h-4" />}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
