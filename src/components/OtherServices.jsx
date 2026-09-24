import React from 'react';
import { ArrowRight, Code2, Globe, Layout, Palette } from 'lucide-react';

export default function OtherServices({ onOpenAudit }) {
  const services = [
    {
      title: 'CUSTOM SOFTWARE',
      desc: 'Internal tools, dashboards, portals, and business applications.',
      icon: Code2,
    },
    {
      title: 'WEBSITES & DIGITAL PLATFORMS',
      desc: 'Websites and digital experiences built around your business goals.',
      icon: Globe,
    },
    {
      title: 'PRODUCT DESIGN',
      desc: 'UI/UX design for digital products and software.',
      icon: Layout,
    },
    {
      title: 'BRAND IDENTITY',
      desc: 'Visual identities for businesses building something worth remembering.',
      icon: Palette,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            Automation is what we lead with. But it’s not all we do.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            When your business needs more than workflow automation, we can design and build the digital products around it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50/60 hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/60 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 tracking-tight">
                    {svc.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 group"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
