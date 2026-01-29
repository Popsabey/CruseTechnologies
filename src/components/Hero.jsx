import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ content }) => {
    const { headline, subheadline, supporting_text, actions } = content;

    return (
        <section id="hero" className="relative pt-48 pb-40 lg:pt-60 lg:pb-52 overflow-hidden clip-diagonal bg-slate-900 text-white">
            {/* Dynamic Mesh Gradient Background */}
            <div className="absolute inset-0 bg-mesh opacity-80 mix-blend-screen pointer-events-none"></div>

            {/* Diagonal Strip */}
            <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-bl from-accent-teal/20 via-blurple/20 to-transparent transform skew-y-12 translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white">
                        {headline}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        {subheadline}
                    </p>
                    <p className="text-sm font-semibold text-accent-teal uppercase tracking-widest mb-10">
                        {supporting_text}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {actions.map((action) => (
                            <a
                                key={action.label}
                                href={action.href}
                                className="inline-flex items-center px-8 py-4 text-base font-bold text-white bg-blurple hover:bg-blurple-light rounded-full transition-all hover:-translate-y-0.5 shadow-lg group"
                            >
                                {action.label}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
