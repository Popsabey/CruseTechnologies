import React from 'react';

const AboutUs = ({ content }) => {
    const { headline, text } = content;

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{headline}</h2>
                <div className="w-20 h-1 bg-blurple rounded-full mx-auto mb-8"></div>
                <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    {text}
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
