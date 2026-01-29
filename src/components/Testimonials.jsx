import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = ({ content }) => {
    const { items } = content;

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Loved by Innovators</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {items.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative">
                            <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12" />
                            <p className="text-lg text-gray-700 italic mb-6 relative z-10">"{item.quote}"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mr-4"></div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.author}</h4>
                                    <p className="text-sm text-gray-500">{item.title}, {item.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
