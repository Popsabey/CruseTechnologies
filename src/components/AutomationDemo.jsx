import React, { useState } from 'react';
import { UserCheck, Zap, UserPlus, Send, RefreshCw, CheckCircle } from 'lucide-react';

export default function AutomationDemo() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: 'STEP 01',
      title: 'NEW LEAD',
      desc: 'A prospect submits an enquiry.',
      icon: UserPlus,
      mockData: { status: 'Received', source: 'Web Form', time: '10:42 AM', payload: 'Jane Doe — 45 Seats' }
    },
    {
      step: 'STEP 02',
      title: 'QUALIFIED',
      desc: 'The system checks the information against your criteria.',
      icon: CheckCircle,
      mockData: { status: 'Score 94/100', match: 'ICP Match: Enterprise B2B', time: '10:42 AM (+0.2s)' }
    },
    {
      step: 'STEP 03',
      title: 'ROUTED',
      desc: 'The lead is assigned to the right person.',
      icon: Zap,
      mockData: { assignedTo: 'Sarah Jenkins (Enterprise Lead)', channel: 'Slack #sales-leads-vip' }
    },
    {
      step: 'STEP 04',
      title: 'FOLLOW-UP',
      desc: 'The next message goes out automatically.',
      icon: Send,
      mockData: { template: 'Personalized Intro + Calendar Link', status: 'Sent via Gmail/Domain' }
    },
    {
      step: 'STEP 05',
      title: 'UPDATED',
      desc: 'Your CRM and internal records stay up to date.',
      icon: RefreshCw,
      mockData: { hubspotStatus: 'Opportunity Created ( ARR)', sheetRow: 'Row #428 Synced' }
    },
    {
      step: 'STEP 06',
      title: 'READY',
      desc: 'Your team steps in when human input is actually needed.',
      icon: UserCheck,
      mockData: { alert: 'Sarah notified with full meeting prep & context package', action: 'Direct Call' }
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            From manual process to automated workflow.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Here’s what happens when a repetitive sales process runs itself.
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {steps.map((item, idx) => {
              const IconComp = item.icon;
              const isCurrent = idx === activeStep;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={
                    isCurrent
                      ? 'p-4 rounded-xl text-left border transition-all duration-150 flex flex-col justify-between bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                      : 'p-4 rounded-xl text-left border transition-all duration-150 flex flex-col justify-between bg-slate-50/60 hover:bg-slate-100/80 text-slate-700 border-slate-200/80'
                  }
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={isCurrent ? 'text-[10px] font-mono font-bold uppercase tracking-wider text-blue-100' : 'text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500'}>
                      {item.step}
                    </span>
                    <IconComp className={isCurrent ? 'w-4 h-4 text-white' : 'w-4 h-4 text-slate-400'} />
                  </div>
                  <div className="text-xs font-bold tracking-tight">
                    {item.title}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">
                  {steps[activeStep].step}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-white tracking-tight">
                  {steps[activeStep].title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300">
                  {steps[activeStep].desc}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/90 border border-slate-700 px-4 py-2 rounded-xl text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Zero Latency Execution</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                <div className="text-slate-500 uppercase tracking-wider text-[10px]">Action Details</div>
                {Object.entries(steps[activeStep].mockData).map(([k, v], i) => (
                  <div key={i} className="flex justify-between py-0.5 border-b border-slate-900/40">
                    <span className="text-slate-400">{k}:</span>
                    <span className="text-blue-300 font-semibold">{v}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="text-slate-500 uppercase tracking-wider text-[10px]">Workflow State</div>
                  <p className="mt-1 text-slate-300 font-sans text-xs leading-relaxed">
                    Automated event triggered. Pipeline rules validated and synchronized across connected platforms without manual intervention.
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-2 text-emerald-400 text-[11px] font-sans">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Audit log recorded & encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-sm sm:text-base font-semibold text-slate-700">
          One workflow. Fewer handoffs. Less manual work.
        </p>
      </div>
    </section>
  );
}
