import React from 'react';
import { Clock, RefreshCw, Zap, Eye } from 'lucide-react';

export default function Outcomes() {
  const outcomes = [
    {
      title: 'LESS MANUAL WORK',
      desc: 'Spend less time on repetitive tasks and data entry.',
      icon: Clock,
      stat: '15+ hrs',
      sub: 'Saved per employee / week'
    },
    {
      title: 'FEWER HANDOFFS',
      desc: 'Stop chasing people and moving information between systems.',
      icon: RefreshCw,
      stat: '0',
      sub: 'Lost or dropped handoffs'
    },
    {
      title: 'FASTER PROCESSES',
      desc: 'Keep work moving without waiting for someone to remember the next step.',
      icon: Zap,
      stat: '< 2 min',
      sub: 'Lead & request turnaround'
    },
    {
      title: 'BETTER VISIBILITY',
      desc: 'Know what’s happening without constantly asking for updates.',
      icon: Eye,
      stat: '100%',
      sub: 'Real-time pipeline transparency'
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Give your team time back.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-blue-200 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-2xs">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <div className="text-xl font-bold font-mono text-slate-900">
                    {item.stat}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
