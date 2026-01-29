import React from 'react';
import { Code, Cpu, BarChart3, Users } from 'lucide-react';

const iconMap = {
    code_icon: Code,
    cpu_icon: Cpu,
    chart_icon: BarChart3,
    people_icon: Users
};

const Features = ({ content }) => {
    const { items } = content;

    return (
        <section id="features" className="py-32 bg-white relative">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Unified Platform</h2>
                        <p className="text-lg text-slate-500 mb-8">Everything you need to build and scale your software operations.</p>
                        <a href="mailto:crusehq@gmail.com" className="text-blurple font-bold hover:text-blurple-dark inline-flex items-center">
                            Contact Sales <span aria-hidden="true" className="ml-2">→</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
                        {items.map((feature, idx) => {
                            const Icon = iconMap[feature.icon] || Code;
                            return (
                                <div key={idx}>
                                    <div className="mb-4 text-blurple">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2">{feature.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
