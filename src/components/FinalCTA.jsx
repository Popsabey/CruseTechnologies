import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function FinalCTA({ onOpenAudit }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Your team has better things to do.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Let’s find the repetitive work slowing your business down and build a better way to run it.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-lg transition-all active:scale-[0.99]"
              >
                <span>Book an Operations Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
              >
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Talk to Cruse</span>
              </button>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-slate-400 font-medium">
              No migrations. No unnecessary complexity. Just better workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
