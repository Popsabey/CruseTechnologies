import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'What kind of work can you automate?',
      a: 'Any process with repeatable steps can be a candidate. Common examples include lead handling, follow-ups, customer enquiries, approvals, reporting, invoicing, onboarding, data entry, and internal requests.'
    },
    {
      q: 'Do we need to replace our current software?',
      a: 'No. We build around the software you already use whenever possible. No unnecessary migrations.'
    },
    {
      q: 'Do you only work with large companies?',
      a: 'No. We work with businesses at different stages. What matters is whether there is enough repetitive work or operational friction to make improving the process worthwhile.'
    },
    {
      q: 'Will our team still be involved?',
      a: 'Yes. We automate repetitive work, not accountability. Your team stays involved wherever judgment, approval, relationships, or exceptions require a person.'
    },
    {
      q: 'How long does a project take?',
      a: 'It depends on the workflow and the systems involved. Smaller workflows can be deployed quickly, while larger operational systems require more planning and testing.'
    },
    {
      q: 'Can you work with our existing or custom software?',
      a: 'Yes. We assess the systems involved and determine the best way to connect them or work around their limitations.'
    },
    {
      q: 'What happens during an Operations Audit?',
      a: 'We look at how a specific part of your business works today, identify repetitive work and bottlenecks, and outline practical opportunities to improve the workflow.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-14 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div className={
                    isOpen
                      ? 'w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 transition-transform duration-200 rotate-180'
                      : 'w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center shrink-0 transition-transform duration-200'
                  }>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
