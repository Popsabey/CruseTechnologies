import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ content }) => {
    const { headline, subheadline, supporting_text, actions } = content;

    return (
        <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 rounded-bl-full opacity-50 blur-3xl transform translate-x-32 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-50 rounded-tr-full opacity-50 blur-3xl transform -translate-x-32 translate-y-16"></div>
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
                    <span className="text-sm font-semibold text-accent uppercase tracking-wide">New</span>
                    <span className="text-sm text-gray-600 border-l border-gray-200 pl-2">{supporting_text}</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 max-w-5xl mx-auto leading-tight">
                    {headline.split(' ').map((word, i) => (
                        word.includes('Intelligent') || word.includes('Software') ?
                            <span key={i} className="text-primary">{word} </span> :
                            <span key={i}>{word} </span>
                    ))}
                </h1>

                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    {subheadline}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    {actions.map((action) => (
                        <a
                            key={action.label}
                            href={action.href}
                            className={`group inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl transition-all duration-200 ${action.type === 'primary'
                                    ? 'bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm'
                                }`}
                        >
                            {action.label}
                            {action.type === 'primary' && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </a>
                    ))}
                </div>

                {/* Dashboard Placeholder */}
                <div className="mt-20 relative rounded-2xl border border-gray-200 bg-white/50 backdrop-blur-xl shadow-2xl p-4 md:p-6 mx-auto max-w-6xl">
                    <div className="rounded-xl overflow-hidden bg-gray-100 aspect-[16/9] flex items-center justify-center relative group">
                        {/* Simulated Dashboard UI */}
                        <div className="absolute inset-0 bg-slate-900/5 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-4xl">📊</span>
                                </div>
                                <p className="text-gray-500 font-medium">Interactive Dashboard Preview</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
