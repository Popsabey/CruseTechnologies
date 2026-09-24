import React from 'react';
import { Search, Compass, Cpu, TrendingUp } from 'lucide-react';

export default function Approach() {
  const steps = [
    {
      num: '01',
      title: 'FIND',
      desc: 'Identify repetitive work, bottlenecks, and unnecessary handoffs.',
      icon: Search,
      tag: 'Audit & Discovery'
    },
    {
      num: '02',
      title: 'REDESIGN',
      desc: 'Create a simpler workflow around how your business actually operates.',
      icon: Compass,
      tag: 'Logic & Architecture'
    },
    {
      num: '03',
      title: 'AUTOMATE',
      desc: 'Build the system that handles the repetitive parts.',
      icon: Cpu,
      tag: 'Integrations & Execution'
    },
    {
      num: '04',
      title: 'IMPROVE',
      desc: 'Monitor, refine, and expand as your business grows.',
      icon: TrendingUp,
      tag: 'Optimization & Scale'
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            We automate the work between the work.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We find the repetitive processes slowing your business down, redesign how they work, and build systems that handle them automatically.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-50/50 hover:bg-white border border-slate-200/80 hover:border-blue-200 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold font-mono text-blue-600/80 group-hover:text-blue-600 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/70 text-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-2xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-medium text-slate-500">
                  {step.tag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
