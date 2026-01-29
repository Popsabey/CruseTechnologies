import React from 'react';
import { ArrowRight, Bot, MessageSquare, Zap } from 'lucide-react';

const iconMap = {
    hessie_icon: Bot,
    tessa_icon: MessageSquare,
    future_icon: Zap // fallback
};

const ProductShowcase = ({ content }) => {
    const { items } = content;

    return (
        <section id="products" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Products</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Tools built to enhance productivity and automate communication.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((product) => {
                        const Icon = iconMap[product.icon] || Zap;

                        return (
                            <div key={product.id} className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <Icon size={28} />
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed h-20">
                                    {product.description}
                                </p>

                                <a href={product.action.href} className="inline-flex items-center text-primary font-semibold group-hover:text-accent transition-colors">
                                    {product.action.label}
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>

                                {/* Decorative blob */}
                                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
