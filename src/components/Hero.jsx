import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ content }) => {
    const { headline, subheadline, supporting_text, actions } = content;

    return (
        <section id="hero" className="relative pt-40 pb-32 lg:pt-48 lg:pb-40 overflow-hidden clip-diagonal bg-slate-900 text-white">
            {/* Dynamic Mesh Gradient Background */}
            <div className="absolute inset-0 bg-mesh opacity-80 mix-blend-screen pointer-events-none"></div>

            {/* Diagonal Strip */}
            <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-bl from-accent-teal/20 via-blurple/20 to-transparent transform skew-y-12 translate-x-1/2 -translate-y-1/2 blur-3xl"></div>

            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    <div className="flex-1 text-left">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                            {headline}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-xl leading-relaxed font-light">
                            {subheadline}
                        </p>
                        <p className="text-sm font-semibold text-accent-teal uppercase tracking-widest mb-8">
                            {supporting_text}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {actions.map((action) => (
                                <a
                                    key={action.label}
                                    href={action.href}
                                    className="inline-flex items-center px-6 py-3 text-sm font-bold text-white bg-blurple hover:bg-blurple-light rounded-full transition-all hover:-translate-y-0.5 shadow-lg group"
                                >
                                    {action.label}
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Visuals - Abstract Representation instead of Dashboard */}
                    <div className="flex-1 w-full max-w-lg lg:max-w-xl">
                        <div className="relative aspect-square">
                            <div className="absolute inset-0 bg-gradient-to-tr from-accent-pink to-blurple rounded-full blur-[80px] opacity-40 animate-pulse"></div>
                            <div className="relative z-10 grid grid-cols-2 gap-4 transform -rotate-6 hover:rotate-0 transition-transform duration-700 ease-out">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl h-48 w-full flex flex-col justify-end">
                                    <div className="w-12 h-12 bg-accent-teal rounded-full mb-4"></div>
                                    <div className="h-2 w-20 bg-white/30 rounded-full mb-2"></div>
                                    <div className="h-2 w-12 bg-white/30 rounded-full"></div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl h-48 w-full translate-y-12 flex flex-col justify-end">
                                    <div className="w-12 h-12 bg-accent-pink rounded-full mb-4"></div>
                                    <div className="h-2 w-20 bg-white/30 rounded-full mb-2"></div>
                                    <div className="h-2 w-12 bg-white/30 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
