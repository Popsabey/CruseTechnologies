import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function BeforeAfter() {
  const beforeSteps = [
    'Lead comes in.',
    'Someone checks the inbox.',
    'Information gets copied.',
    'CRM gets updated later.',
    'Someone remembers to follow up.',
    'Manager asks for an update.',
  ];

  const afterSteps = [
    'Lead comes in.',
    'The workflow starts.',
    'Information is organized.',
    'CRM updates automatically.',
    'Follow-up happens on schedule.',
    'The team sees what needs attention.',
  ];

  return (
    <section className="py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Same business. Less busywork.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-7 sm:p-9 rounded-2xl bg-white border border-rose-200/80 shadow-xs relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-50 text-rose-700 text-xs font-bold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>BEFORE</span>
            </div>

            <ul className="space-y-4">
              {beforeSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-base">
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <span className="line-through decoration-rose-300 text-slate-500">{step}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-rose-600 font-medium">
              High cognitive load • Unreliable data • Delayed response
            </div>
          </div>

          <div className="p-7 sm:p-9 rounded-2xl bg-white border border-emerald-300 shadow-md shadow-emerald-500/5 relative ring-1 ring-emerald-500/20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>AFTER</span>
            </div>

            <ul className="space-y-4">
              {afterSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-900 font-medium text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-emerald-700 font-semibold">
              Instant trigger • Clean sync • Team focuses on high-leverage work
            </div>
          </div>
        </div>

        <div className="mt-14 max-w-xl mx-auto text-center">
          <p className="text-base sm:text-lg font-semibold text-slate-900">
            We don’t just automate tasks. We improve how work moves.
          </p>
        </div>
      </div>
    </section>
  );
}
