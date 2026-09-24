import React from 'react';
import { Briefcase, Building2, ShoppingBag, HardHat, Stethoscope, Users } from 'lucide-react';

export default function WhoWeWorkWith() {
  const industries = [
    {
      title: 'PROFESSIONAL SERVICES',
      desc: 'Client workflows, administration, reporting, and follow-ups.',
      icon: Briefcase,
    },
    {
      title: 'REAL ESTATE',
      desc: 'Lead management, follow-ups, listings, and client processes.',
      icon: Building2,
    },
    {
      title: 'RETAIL & COMMERCE',
      desc: 'Orders, customer communication, operations, and reporting.',
      icon: ShoppingBag,
    },
    {
      title: 'CONSTRUCTION',
      desc: 'Approvals, project updates, documentation, and reporting.',
      icon: HardHat,
    },
    {
      title: 'HEALTHCARE ADMINISTRATION',
      desc: 'Scheduling, communication, records, and administrative processes.',
      icon: Stethoscope,
    },
    {
      title: 'AGENCIES & CONSULTANCIES',
      desc: 'Lead management, client onboarding, delivery, and reporting.',
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            For businesses where work keeps getting repeated.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            You don’t need to be a technology company. If your team spends time doing the same things over and over, there’s probably a better way to run them.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-700 flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-sm sm:text-base font-medium text-slate-600">
          We specialize in repetitive work, not one particular industry.
        </p>
      </div>
    </section>
  );
}
