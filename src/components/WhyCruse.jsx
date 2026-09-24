import React from 'react';
import { Layers, Workflow, Layers3, Users } from 'lucide-react';

export default function WhyCruse() {
  const pillars = [
    {
      title: 'NO MIGRATIONS',
      desc: 'We work with the software you already use whenever possible.',
      icon: Layers,
    },
    {
      title: 'BUILT FOR YOUR WORKFLOW',
      desc: 'Your processes, rules, and exceptions are different. Your system should reflect that.',
      icon: Workflow,
    },
    {
      title: 'FROM STRATEGY TO DEPLOYMENT',
      desc: 'We don’t just hand you a workflow diagram. We design, build, deploy, and refine it.',
      icon: Layers3,
    },
    {
      title: 'HUMANS STAY IN CONTROL',
      desc: 'We automate repetitive work while keeping important decisions with the people responsible for them.',
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Built around your business. Not the other way around.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-2xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
