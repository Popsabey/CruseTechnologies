import React from 'react';

export default function Footer({ onOpenAudit }) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                CRUSE
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              We help businesses eliminate repetitive work.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#work" className="hover:text-white transition-colors">Work</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <button onClick={onOpenAudit} className="hover:text-white transition-colors text-left">Contact</button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#what-we-build" className="hover:text-white transition-colors">Operations Automation</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Custom Software</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Websites & Digital Platforms</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Product Design</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Brand Identity</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-start">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Get Started
            </h4>
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-all"
            >
              <span>Book an Operations Audit</span>
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© Cruse. All rights reserved.</p>
          <p className="text-slate-400 font-mono">Designed for operational excellence</p>
        </div>
      </div>
    </footer>
  );
}
