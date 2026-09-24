import React from 'react';
import { ArrowRight, Compass, Wrench, ShieldCheck, Rocket } from 'lucide-react';

export default function Process({ onOpenAudit }) {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      headline: 'We find where time is being lost.',
      desc: 'We look at how your team works today and identify repetitive processes, bottlenecks, and unnecessary steps.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'DESIGN',
      headline: 'We redesign the workflow.',
      desc: 'We map the improved process, define the rules, and decide where automation and human input belong.',
      icon: Wrench,
    },
    {
      num: '03',
      title: 'BUILD',
      headline: 'We build it around your existing tools.',
      desc: 'We connect the systems you already use and build the workflow from end to end.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'DEPLOY',
      headline: 'We put it into the business.',
      desc: 'We test it, get your team up to speed, monitor performance, and improve where needed.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Find the work. Fix the workflow. Make it run.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-bold font-mono text-blue-600">
                      {step.num}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {step.title}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {step.headline}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <span>Book an Operations Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
