import React from 'react';
import { Copy, Send, FileSpreadsheet, FileText, CheckSquare, ArrowLeftRight } from 'lucide-react';

export default function Problem() {
  const frictionTasks = [
    { text: 'Copying data.', icon: Copy, desc: 'Moving entries between forms, emails, and internal records.' },
    { text: 'Sending follow-ups.', icon: Send, desc: 'Manually drafting routine messages and appointment reminders.' },
    { text: 'Updating spreadsheets.', icon: FileSpreadsheet, desc: 'Keeping multiple disparate sheets aligned across teams.' },
    { text: 'Creating reports.', icon: FileText, desc: 'Collating weekly metrics and status updates by hand.' },
    { text: 'Chasing approvals.', icon: CheckSquare, desc: 'Waiting on managers across Slack and inboxes to sign off.' },
    { text: 'Moving information between tools.', icon: ArrowLeftRight, desc: 'Re-typing the same customer details into 3 different tabs.' },
  ];

  return (
    <section className="py-24 bg-slate-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2]">
            Your team is doing work that shouldn’t need a person.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {frictionTasks.map((task, idx) => {
            const IconComponent = task.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {task.text}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    {task.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
          <p className="text-base font-semibold text-slate-800">
            The work gets done.
          </p>
          <p className="mt-2 text-base sm:text-lg text-slate-600 font-normal">
            But it keeps taking time away from the work that <span className="font-semibold text-slate-900 underline decoration-blue-500/50 underline-offset-4">actually moves the business forward</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
