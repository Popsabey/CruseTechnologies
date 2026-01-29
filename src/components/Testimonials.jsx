import React from 'react';

const Testimonials = ({ content }) => {
    const { items } = content;

    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                            <div className="mb-6 text-blurple">
                                {/* Stripe-like quote icon */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                </svg>
                            </div>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">"{item.quote}"</p>
                            <div className="flex items-center border-t border-slate-100 pt-6">
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.author}</h4>
                                    <p className="text-sm text-slate-500">{item.title}, {item.company}</p>
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
