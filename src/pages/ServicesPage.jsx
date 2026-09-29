import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white flex flex-col">
      {/* ── NAVIGATION ────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tight">
            CRUSE
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <Link to="/#work" className="hover:text-zinc-900 transition-colors">Work</Link>
            <Link to="/services" className="text-zinc-900 transition-colors">Services</Link>
            <Link to="/#about" className="hover:text-zinc-900 transition-colors">About</Link>
          </nav>
          <a
            href="mailto:abiodun@crusehq.com"
            className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Book an Operations Audit
          </a>
        </div>
      </header>

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col">
        <section className="px-6 py-24 md:py-32 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-8">
            We build the systems your business needs to move better.
          </h1>
          <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Operations automation is our primary focus. We also design and build the software, digital products and brand systems around it.
          </p>
        </section>

        {/* ── SERVICES LIST ─────────────────────────────────────────── */}
        <section className="px-6 pb-24 md:pb-32 max-w-5xl mx-auto space-y-24">
          
          {/* OPERATIONS AUTOMATION */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-16 shadow-sm">
            <h2 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-4">Operations Automation</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Eliminate repetitive work across your business.</h3>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-2xl">
              We redesign and automate workflows across sales, customer operations, finance, administration and internal teams.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                'Workflow automation', 'Process redesign', 'System integrations', 
                'Lead operations', 'Customer operations', 'Finance workflows', 
                'Internal operations', 'Reporting', 'Notifications', 'Onboarding'
              ].map(capability => (
                <div key={capability} className="flex items-center gap-3 text-zinc-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
                  {capability}
                </div>
              ))}
            </div>
            <a
              href="mailto:abiodun@crusehq.com"
              className="bg-zinc-900 hover:bg-zinc-800 text-white text-base font-medium px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Automate Your Workflow
            </a>
          </div>

          {/* INTERNAL TOOLS */}
          <div className="bg-zinc-900 text-white rounded-3xl p-8 md:p-16 shadow-sm">
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">Internal Tools</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Give your team better tools to get work done.</h3>
            <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-2xl">
              We build internal dashboards, workspaces, portals and business applications around the way your team actually operates.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                'Internal dashboards', 'Team workspaces', 'Admin systems', 
                'Operations portals', 'Custom CRM tools', 'Project management systems', 
                'Reporting systems', 'Internal business applications'
              ].map(capability => (
                <div key={capability} className="flex items-center gap-3 text-zinc-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  {capability}
                </div>
              ))}
            </div>
            <a
              href="mailto:abiodun@crusehq.com"
              className="bg-white hover:bg-zinc-200 text-zinc-900 text-base font-medium px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Build a Team Tool
            </a>
          </div>

          {/* CONNECTED SYSTEMS */}
          <div className="bg-zinc-100 rounded-3xl p-8 md:p-16">
            <h2 className="text-sm font-bold tracking-widest text-zinc-500 uppercase mb-4">Connected Systems</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Make your software work together.</h3>
            <p className="text-lg text-zinc-600 leading-relaxed mb-10 max-w-2xl">
              We connect the tools your business already uses so information can move between teams and systems without unnecessary manual work.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'System integrations', 'Data synchronization', 'Notifications', 
                'Workflow triggers', 'Cross-platform processes', 'Reporting pipelines'
              ].map(capability => (
                <div key={capability} className="flex items-center gap-3 text-zinc-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                  {capability}
                </div>
              ))}
            </div>
          </div>

          {/* SECONDARY SERVICES GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-zinc-200 rounded-3xl p-8 md:p-12 bg-white">
              <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4">Custom Software</h2>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Software built around the way your business works.</h3>
              <p className="text-zinc-600 leading-relaxed">
                When existing software doesn't fit, we build custom internal systems, dashboards, portals and business applications.
              </p>
            </div>

            <div className="border border-zinc-200 rounded-3xl p-8 md:p-12 bg-white">
              <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4">Websites & Digital Platforms</h2>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Digital experiences that work as hard as your business does.</h3>
              <p className="text-zinc-600 leading-relaxed">
                We design and build websites and digital platforms that communicate clearly, support growth and give customers a better experience.
              </p>
            </div>

            <div className="border border-zinc-200 rounded-3xl p-8 md:p-12 bg-white">
              <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4">Product Design</h2>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Make complex products easier to use.</h3>
              <p className="text-zinc-600 leading-relaxed">
                We design intuitive digital products from user flows and structure through to polished interfaces.
              </p>
            </div>

            <div className="border border-zinc-200 rounded-3xl p-8 md:p-12 bg-white">
              <h2 className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4">Brand Identity</h2>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Build a brand people recognize and trust.</h3>
              <p className="text-zinc-600 leading-relaxed">
                We create visual identity systems that give businesses a clear, consistent and distinctive presence.
              </p>
            </div>
          </div>

        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-zinc-50 border-t border-zinc-200 py-16 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1 space-y-6">
            <Link to="/" className="font-bold text-xl tracking-tight text-zinc-900">
              CRUSE
            </Link>
            <p className="text-sm font-medium text-zinc-600">
              We help businesses eliminate repetitive work.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-zinc-900 uppercase">Navigation</h4>
            <nav className="flex flex-col gap-3 text-sm text-zinc-500">
              <Link to="/#work" className="hover:text-zinc-900">Work</Link>
              <Link to="/services" className="hover:text-zinc-900">Services</Link>
              <Link to="/#about" className="hover:text-zinc-900">About</Link>
              <a href="mailto:abiodun@crusehq.com" className="hover:text-zinc-900">Contact</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-zinc-900 uppercase">Services</h4>
            <nav className="flex flex-col gap-3 text-sm text-zinc-500">
              <span className="hover:text-zinc-900">Operations Automation</span>
              <span className="hover:text-zinc-900">Internal Tools</span>
              <span className="hover:text-zinc-900">Custom Software</span>
              <span className="hover:text-zinc-900">Websites & Digital Platforms</span>
              <span className="hover:text-zinc-900">Product Design</span>
              <span className="hover:text-zinc-900">Brand Identity</span>
            </nav>
          </div>

          <div className="space-y-6">
            <a
              href="mailto:abiodun@crusehq.com"
              className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors inline-block"
            >
              Book an Operations Audit
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-200 text-sm text-zinc-400">
          © Cruse. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
