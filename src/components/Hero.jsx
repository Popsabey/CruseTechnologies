import React from 'react';
import { ArrowRight, CheckCircle, Layers, Zap, ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenAudit }) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 opacity-70">
        <div className="absolute top-12 left-1/4 w-[450px] h-[350px] bg-blue-200/50 rounded-full blur-[100px]" />
        <div className="absolute top-28 right-1/4 w-[400px] h-[300px] bg-indigo-200/40 rounded-full blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 text-balance leading-[1.15]">
            We help businesses eliminate repetitive work.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We design and deploy operational systems that cut manual work, streamline everyday processes, and help teams move faster. Built on your existing software. No migrations.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenAudit}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all active:scale-[0.99]"
            >
              <span>Book an Operations Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#what-we-build"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-sm hover:border-slate-300 transition-all"
            >
              <span>See What We Build</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          <p className="mt-5 text-xs sm:text-sm text-slate-500 font-medium">
            Built around your business. Not another software platform.
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-white/80 backdrop-blur-md p-4 sm:p-7 border border-slate-200/90 shadow-xl shadow-slate-200/50">
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="ml-2 text-xs font-mono text-slate-400">cruse-automation-engine v2.4</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  Live Workflow Active
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500">TRIGGER</span>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded">0ms delay</span>
                </div>
                <div className="text-sm font-bold text-slate-900">Inbound Lead & Web Form</div>
                <p className="text-xs text-slate-500 mt-1">Form submission received via Website / Ads</p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50/70 p-2 rounded-lg border border-emerald-100">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Payload normalized & validated</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50/70 to-indigo-50/70 border border-blue-200/80 relative shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-700">AUTOMATION LOGIC</span>
                  <span className="text-[10px] font-mono text-blue-700 bg-blue-100 px-2 py-0.5 rounded font-bold">CRUSE RUNNER</span>
                </div>
                <div className="text-sm font-bold text-slate-900">Qualify, Route & Enrich</div>
                <p className="text-xs text-slate-600 mt-1">Evaluates deal value, territory & rep capacity</p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-blue-800 bg-white/90 p-2 rounded-lg border border-blue-100 shadow-2xs">
                  <Zap className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Assigned to Account Executive in Slack</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-slate-500">SYNCED ACTION</span>
                  <span className="text-[10px] font-mono text-slate-600 bg-slate-200/70 px-2 py-0.5 rounded">Real-time</span>
                </div>
                <div className="text-sm font-bold text-slate-900">CRM Updated & Meeting Sent</div>
                <p className="text-xs text-slate-500 mt-1">HubSpot synced, calendar invite generated</p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-indigo-800 bg-indigo-50/70 p-2 rounded-lg border border-indigo-100">
                  <Layers className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span>Zero manual data entry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
