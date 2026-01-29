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
        <section id="features" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Capabilities</h2>
                    <p className="text-lg text-gray-600">Powering the next generation of business solutions.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((feature, idx) => {
                        const Icon = iconMap[feature.icon] || Code;
                        return (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gray-200 transition-colors">
                                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
