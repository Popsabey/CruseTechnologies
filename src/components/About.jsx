import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function About({ onOpenAudit }) {
  return (
    <section id="about" className="py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-lg p-8 sm:p-12 lg:p-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            We build better ways for businesses to work.
          </h2>

          <div className="mt-8 space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            <p>
              Cruse is a technology and product studio helping businesses remove operational friction through better systems, software, and design.
            </p>
            <p>
              We look at how work actually gets done, find what slows it down, and build practical systems that make the process simpler.
            </p>
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-slate-800 space-y-2">
              <p className="font-semibold text-blue-900">
                We’re not interested in adding technology for the sake of it.
              </p>
              <p className="font-semibold text-slate-900">
                We’re interested in making the business run better.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-100">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 group"
            >
              <span>More About Cruse</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
