import React from 'react';

export default function ExistingStack() {
  const tools = [
    { name: 'Google Workspace', category: 'Productivity' },
    { name: 'Microsoft 365', category: 'Enterprise' },
    { name: 'Slack', category: 'Communication' },
    { name: 'HubSpot', category: 'CRM & Marketing' },
    { name: 'Salesforce', category: 'Sales Cloud' },
    { name: 'QuickBooks', category: 'Accounting' },
    { name: 'WhatsApp', category: 'Messaging' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'your existing tools', category: 'Custom APIs & DBs', isSpecial: true },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Keep the software. Lose the busywork.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We build around the tools your team already uses, connecting them into workflows that run with less manual effort.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className={
                tool.isSpecial
                  ? 'p-4 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center text-center group bg-blue-50/70 border-blue-200/80 shadow-xs hover:border-blue-300 col-span-2 sm:col-span-1'
                  : 'p-4 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center text-center group bg-slate-50/50 hover:bg-white border-slate-200/70 hover:border-slate-300 shadow-2xs hover:shadow-sm'
              }
            >
              <span className={tool.isSpecial ? 'text-sm font-semibold tracking-tight text-blue-700' : 'text-sm font-semibold tracking-tight text-slate-800'}>
                {tool.name}
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                {tool.category}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm text-slate-500 font-medium">
          No forced migrations. No rebuilding your business from scratch.
        </p>
      </div>
    </section>
  );
}
