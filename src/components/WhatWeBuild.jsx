import React, { useState } from 'react';
import { Check, ArrowRight, TrendingUp, Users, DollarSign, Workflow, Wrench } from 'lucide-react';

export default function WhatWeBuild({ onOpenAudit }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 'sales-ops',
      navTitle: 'Sales Operations',
      icon: TrendingUp,
      headline: 'Turn incoming leads into organized opportunities.',
      description: 'Capture, qualify, route, follow up, schedule, and update your sales pipeline without the manual back-and-forth.',
      workflows: [
        'Lead capture',
        'Lead qualification',
        'Lead routing',
        'Follow-ups',
        'Appointment scheduling',
        'CRM updates',
        'Proposal workflows'
      ]
    },
    {
      id: 'customer-ops',
      navTitle: 'Customer Operations',
      icon: Users,
      headline: 'Keep customer requests moving.',
      description: 'Route enquiries, collect information, send updates, manage handoffs, and keep customers moving through the right process.',
      workflows: [
        'Enquiry routing',
        'Customer updates',
        'Support workflows',
        'Escalations',
        'Feedback collection',
        'Customer onboarding'
      ]
    },
    {
      id: 'finance-admin',
      navTitle: 'Finance & Admin',
      icon: DollarSign,
      headline: 'Take repetitive back-office work off your team.',
      description: 'Automate the administrative processes that slow your business down and create unnecessary manual work.',
      workflows: [
        'Invoice workflows',
        'Payment reminders',
        'Approvals',
        'Document generation',
        'Data entry',
        'Recurring reports'
      ]
    },
    {
      id: 'internal-ops',
      navTitle: 'Internal Operations',
      icon: Workflow,
      headline: 'Make everyday team processes run themselves.',
      description: 'Standardize and automate the internal workflows your team repeats every week.',
      workflows: [
        'Employee onboarding',
        'Internal requests',
        'Approvals',
        'Task assignments',
        'Notifications',
        'Reporting'
      ]
    },
    {
      id: 'custom-systems',
      navTitle: 'Custom Systems',
      icon: Wrench,
      headline: 'If your workflow is unique, your system should be too.',
      description: 'We build custom internal tools, dashboards, portals, and business systems around the specific way your company works.',
      workflows: [
        'Custom client & vendor portals',
        'Unified operations dashboards',
        'Proprietary database connectors',
        'Bespoke rule engines',
        'Automated document sync',
        'Complex multi-app webhooks'
      ]
    }
  ];

  const current = categories[activeCategory];
  const CurrentIcon = current.icon;

  return (
    <section id="what-we-build" className="py-24 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Systems that take repetitive work off your team’s plate.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From sales and customer operations to finance and internal processes, we build around the work your business already does.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat, idx) => {
            const CatIcon = cat.icon;
            const isActive = idx === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={
                  isActive
                    ? 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 bg-blue-600 text-white shadow-sm shadow-blue-600/20'
                    : 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                }
              >
                <CatIcon className={isActive ? 'w-4 h-4 text-white' : 'w-4 h-4 text-slate-500'} />
                <span>{cat.navTitle}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-10 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                <CurrentIcon className="w-3.5 h-3.5" />
                <span>{current.navTitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
                {current.headline}
              </h3>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <button
                  onClick={onOpenAudit}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-5 sm:p-6 border border-slate-200/70">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-4">
                Common workflows
              </span>
              <ul className="space-y-3">
                {current.workflows.map((wf, wIdx) => (
                  <li key={wIdx} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{wf}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
