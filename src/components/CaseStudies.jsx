import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function CaseStudies({ onOpenAudit }) {
  const caseStudies = [
    {
      clientName: 'Apex Logistics & Fleet',
      industry: 'Freight & Supply Chain Operations',
      metric: '82% Drop in Dispatch Lag',
      problem: 'Manual dispatch emails, manual route confirmation, and delayed Proof of Delivery data entry caused 14+ hours of operational backlog each week.',
      whatWeBuilt: 'End-to-end automated dispatch system connecting TMS, Slack, and Google Sheets with instant status triggers and automated client notifications.',
      result: '82% reduction in manual dispatch overhead, 0 missed POD logs, and real-time delivery tracking across 120+ active routes.',
    },
    {
      clientName: 'Beacon Property Group',
      industry: 'Real Estate & Property Management',
      metric: '< 2 Min Lead Response',
      problem: 'Inbound tenant inquiries and viewing requests sat in unmanaged inboxes for up to 36 hours before being qualified and assigned.',
      whatWeBuilt: 'Multi-channel lead qualification engine that screens prospect criteria, schedules viewings on rep calendars, and synchronizes HubSpot records.',
      result: 'Under 2-minute average response time, 4.2x increase in qualified weekly viewings, and 18 hours saved per agent per month.',
    },
    {
      clientName: 'Solas Wealth Advisory',
      industry: 'Professional Services & Finance',
      metric: '9 Days to 24 Hours',
      problem: 'Client onboarding required manual document chasing, 6-step compliance checks, and duplicate data entry across 3 disconnected internal systems.',
      whatWeBuilt: 'Unified client intake workflow with automated KYC document verification, instant e-signature triggers, and secure database synchronization.',
      result: 'Client onboarding turnaround collapsed from 9 business days to under 24 hours with zero compliance data errors.',
    }
  ];

  return (
    <section id="work" className="py-24 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Less manual work. Better ways of working.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            See how we’ve helped businesses improve the way work moves through their organization.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl bg-slate-50/50 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    {cs.industry}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {cs.clientName}
                </h3>

                <div className="mt-3 text-xs font-mono font-bold text-emerald-700 bg-emerald-50/80 border border-emerald-200/60 p-2.5 rounded-lg flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{cs.metric}</span>
                </div>

                <div className="mt-6 space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">The problem</span>
                    <p className="text-slate-600 leading-relaxed">{cs.problem}</p>
                  </div>

                  <div>
                    <span className="font-bold text-slate-900 block mb-1">What we built</span>
                    <p className="text-slate-600 leading-relaxed">{cs.whatWeBuilt}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/70">
                    <span className="font-bold text-emerald-800 block mb-1">The result</span>
                    <p className="text-slate-700 leading-relaxed font-medium">{cs.result}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-200/70">
                <button
                  onClick={onOpenAudit}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
