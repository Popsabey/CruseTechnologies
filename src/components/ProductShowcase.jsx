import React from 'react';
import { ArrowRight } from 'lucide-react';
import hessieLogo from '../assets/hessie.png';
import tessaLogo from '../assets/tessa.png';

const logoMap = {
    hessie_icon: hessieLogo,
    tessa_icon: tessaLogo
};

const ProductShowcase = ({ content }) => {
    const { items } = content;

    return (
        <section id="products" className="py-20 bg-slate-50">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Products</h2>
                    <div className="w-20 h-1 bg-blurple rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((product) => {
                        const ProductLogo = logoMap[product.icon];

                        return (
                            <div key={product.id} className="group relative bg-white rounded-2xl p-10 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-transparent flex items-center justify-start mb-8">
                                        {ProductLogo && <img src={ProductLogo} alt={`${product.title} logo`} className="w-full h-full object-contain" />}
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed">
                                        {product.description}
                                    </p>

                                    <a
                                        href={product.action.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blurple font-bold hover:text-blurple-dark transition-colors"
                                    >
                                        {product.action.label}
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
