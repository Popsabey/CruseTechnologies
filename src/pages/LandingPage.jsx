import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWorkflowStep((prev) => (prev + 1) % 6)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* ── NAVIGATION ────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tight">
            CRUSE
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
            <a href="#work" className="hover:text-zinc-900 transition-colors">Work</a>
            <Link to="/services" className="hover:text-zinc-900 transition-colors">Services</Link>
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          </nav>
          <a
            href="mailto:abiodun@crusehq.com"
            className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Book an Operations Audit
          </a>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1]">
            We help businesses eliminate repetitive work.
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-3xl">
            We automate the processes that slow teams down and build the tools they need to execute better. Designed around your business and existing software. No migrations.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <a
              href="mailto:abiodun@crusehq.com"
              className="bg-zinc-900 hover:bg-zinc-800 text-white text-base font-medium px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Book an Operations Audit
            </a>
            <a
              href="#work"
              className="bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 text-base font-medium px-8 py-4 rounded-lg transition-colors inline-flex items-center justify-center shadow-sm"
            >
              See What We Build
            </a>
          </div>
          <p className="text-sm text-zinc-500 font-medium pt-2">
            Built around your business. Not another software platform.
          </p>
        </div>

        {/* Hero Visual: Operational Workflow */}
        <div className="mt-20 border border-zinc-200 rounded-2xl bg-white p-8 md:p-12 shadow-sm overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
            {['Request Entered', 'Organized', 'Workflow Starts', 'Systems Update', 'Team Notified', 'Action Taken'].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className={`flex flex-col items-center gap-3 transition-opacity duration-500 ${activeWorkflowStep >= idx ? 'opacity-100' : 'opacity-40'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${activeWorkflowStep === idx ? 'border-zinc-900 bg-zinc-50' : 'border-zinc-200 bg-white'}`}>
                    <div className={`w-3 h-3 rounded-full ${activeWorkflowStep >= idx ? 'bg-zinc-900' : 'bg-zinc-300'}`} />
                  </div>
                  <span className="text-xs font-semibold text-zinc-600 uppercase tracking-wide text-center w-24">{step}</span>
                </div>
                {idx < 5 && (
                  <div className="hidden md:block flex-1 h-0.5 bg-zinc-100 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-zinc-900 transition-transform duration-500 ${activeWorkflowStep > idx ? 'translate-x-0' : '-translate-x-full'}`} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ────────────────────────────────────────────── */}
      <section className="bg-zinc-900 text-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mb-12 leading-tight">
            Your business doesn't need more software. It needs better systems.
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6 text-lg text-zinc-400">
              <p>Your team already has processes.</p>
              <p>They already have software.</p>
              <p>They already have people doing the work.</p>
              <p className="text-white font-medium text-xl mt-8">The problem is what happens between them.</p>
              <p>Cruse improves how work moves through your business by:</p>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Automating repetitive work.</h3>
                <p className="text-zinc-400">Make recurring processes run with less human intervention.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Building better tools for teams.</h3>
                <p className="text-zinc-400">Give people a focused environment for managing and executing their work.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Connecting the systems you already use.</h3>
                <p className="text-zinc-400">Make information move where it needs to go without people manually moving it.</p>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-zinc-800">
            <p className="text-2xl font-bold text-white">The goal isn't more technology. It's less friction.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              Too much of your team's time goes into work that repeats.
            </h2>
            <p className="text-xl text-zinc-600 max-w-xl">
              The work gets done. But it keeps taking people away from the work that actually moves the business forward.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Copying data', 'Sending follow-ups', 'Updating spreadsheets',
                'Creating reports', 'Chasing approvals', 'Moving information between tools',
                'Checking the same information repeatedly', 'Updating multiple systems'
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl text-sm font-medium text-zinc-700 flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 - TWO CORE CAPABILITIES ────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
            Two ways we make businesses work better.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* CARD 1 */}
            <div className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-zinc-900">Automate the work.</h3>
                <p className="text-lg font-medium text-zinc-900">Take repetitive processes off your team's plate.</p>
                <p className="text-zinc-600 leading-relaxed">
                  We connect the tools your team already uses and automate the work that happens between them.
                </p>
                <ul className="grid grid-cols-2 gap-3 pt-4">
                  {['Lead qualification', 'Customer follow-ups', 'Data entry', 'Reporting', 'Approvals', 'Invoice workflows'].map((item) => (
                    <li key={item} className="text-sm text-zinc-500 flex items-center gap-2">
                      <svg className="w-4 h-4 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-12 mt-auto">
                <a href="mailto:abiodun@crusehq.com" className="font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
                  Explore Automation
                </a>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-zinc-900 text-white rounded-3xl p-8 md:p-12 flex flex-col justify-between shadow-sm">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Equip the team.</h3>
                <p className="text-lg font-medium text-zinc-300">Give your people better tools to execute their work.</p>
                <p className="text-zinc-400 leading-relaxed">
                  When existing software isn't enough, we design and build custom internal tools around how your team actually works.
                </p>
                <ul className="grid grid-cols-2 gap-3 pt-4">
                  {['Internal dashboards', 'Team workspaces', 'Operations portals', 'Custom CRM tools', 'Project management', 'Client portals'].map((item) => (
                    <li key={item} className="text-sm text-zinc-500 flex items-center gap-2">
                      <svg className="w-4 h-4 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-12 mt-auto">
                <a href="mailto:abiodun@crusehq.com" className="font-semibold text-white hover:text-zinc-300 transition-colors">
                  Explore Team Tools
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              Sometimes the answer is automation. Sometimes it's a better tool.
            </h2>
            <p className="text-xl text-zinc-600">
              We don't force every problem into the same solution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-4">Automation</h3>
              <p className="text-zinc-900 font-medium">If your team repeatedly does the same thing, we make the process run itself.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-4">Team Tools</h3>
              <p className="text-zinc-900 font-medium">If your team needs to manage information, make decisions or execute complex work, we build the tools that make that easier.</p>
            </div>
            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
              <h3 className="text-sm font-bold tracking-widest text-zinc-400 uppercase mb-4">Connected Systems</h3>
              <p className="text-zinc-900 font-medium">If the work spans multiple tools, we connect them so information moves where it needs to go.</p>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 pt-8">
            The goal isn't more technology. It's less friction.
          </h3>
        </div>
      </section>

      {/* ── SECTION 6 - WORKFLOW SHOWCASE ────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              From manual process to automated workflow.
            </h2>
            <p className="text-xl text-zinc-400">
              Here's what happens when a repetitive sales process runs itself.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { title: 'NEW LEAD', desc: 'A prospect submits an enquiry.' },
              { title: 'QUALIFIED', desc: 'The system checks the information against criteria.' },
              { title: 'ROUTED', desc: 'The lead is assigned to the right person.' },
              { title: 'FOLLOW-UP', desc: 'The next message goes out automatically.' },
              { title: 'UPDATED', desc: 'Your CRM and internal records stay up to date.' },
              { title: 'READY', desc: 'Your team steps in when human input is needed.' }
            ].map((step, idx) => (
              <div key={idx} className={`p-6 rounded-2xl border transition-colors duration-500 ${activeWorkflowStep === idx ? 'bg-zinc-800 border-zinc-600' : 'bg-zinc-900/50 border-zinc-800'}`}>
                <div className="text-xs font-bold tracking-wider text-zinc-500 mb-3">STEP {idx + 1}</div>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xl font-medium text-white border-t border-zinc-800 pt-8">
            One workflow. Fewer handoffs. Less manual work.
          </p>
        </div>
      </section>

      {/* ── SECTION 7 - BEFORE / AFTER ───────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 text-center">
            Same business. Less busywork.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* BEFORE */}
            <div className="p-10 rounded-3xl bg-red-50/50 border border-red-100">
              <h3 className="text-sm font-bold tracking-widest text-red-400 uppercase mb-8">Before</h3>
              <ul className="space-y-6 text-zinc-700 font-medium">
                <li className="flex items-start gap-4"><span className="text-red-400">×</span> Lead comes in.</li>
                <li className="flex items-start gap-4"><span className="text-red-400">×</span> Someone checks the inbox.</li>
                <li className="flex items-start gap-4"><span className="text-red-400">×</span> Information gets copied.</li>
                <li className="flex items-start gap-4"><span className="text-red-400">×</span> CRM gets updated later.</li>
                <li className="flex items-start gap-4"><span className="text-red-400">×</span> Someone remembers to follow up.</li>
                <li className="flex items-start gap-4"><span className="text-red-400">×</span> Manager asks for an update.</li>
              </ul>
            </div>

            {/* AFTER */}
            <div className="p-10 rounded-3xl bg-zinc-900 text-white shadow-xl">
              <h3 className="text-sm font-bold tracking-widest text-emerald-400 uppercase mb-8">After</h3>
              <ul className="space-y-6 text-zinc-300 font-medium">
                <li className="flex items-start gap-4"><span className="text-emerald-400">✓</span> Lead comes in.</li>
                <li className="flex items-start gap-4"><span className="text-emerald-400">✓</span> The workflow starts.</li>
                <li className="flex items-start gap-4"><span className="text-emerald-400">✓</span> Information is organized.</li>
                <li className="flex items-start gap-4"><span className="text-emerald-400">✓</span> CRM updates automatically.</li>
                <li className="flex items-start gap-4"><span className="text-emerald-400">✓</span> Follow-up happens on schedule.</li>
                <li className="flex items-start gap-4 text-white"><span className="text-emerald-400">✓</span> The team sees what needs attention.</li>
              </ul>
            </div>
          </div>
          
          <p className="text-xl font-medium text-zinc-900 text-center pt-8">
            We don't just automate tasks. We improve how work moves.
          </p>
        </div>
      </section>

      {/* ── SECTION 8 - OUTCOMES ─────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
            Give your team time back.
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'LESS MANUAL WORK', desc: 'Spend less time on repetitive tasks and data entry.' },
              { title: 'FEWER HANDOFFS', desc: 'Stop chasing people and moving information between systems.' },
              { title: 'FASTER PROCESSES', desc: 'Keep work moving without waiting for someone to remember the next step.' },
              { title: 'BETTER VISIBILITY', desc: 'Know what\'s happening without constantly asking for updates.' }
            ].map((outcome, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                <h3 className="text-sm font-bold tracking-widest text-zinc-900 uppercase mb-4">{outcome.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 - WHO WE WORK WITH ─────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              For businesses where work keeps getting repeated.
            </h2>
            <p className="text-xl text-zinc-600">
              You don't need to be a technology company. If your team spends time doing the same things over and over, there's probably a better way to run them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'PROFESSIONAL SERVICES', desc: 'Client workflows, administration, reporting and follow-ups.' },
              { title: 'REAL ESTATE', desc: 'Lead management, follow-ups, listings and client processes.' },
              { title: 'RETAIL & COMMERCE', desc: 'Orders, customer communication, operations and reporting.' },
              { title: 'CONSTRUCTION', desc: 'Approvals, project updates, documentation and reporting.' },
              { title: 'HEALTHCARE ADMIN', desc: 'Scheduling, communication, records and administrative processes.' },
              { title: 'AGENCIES & CONSULTING', desc: 'Lead management, client onboarding, delivery and reporting.' }
            ].map((industry, idx) => (
              <div key={idx} className="p-6 border border-zinc-200 rounded-xl hover:border-zinc-300 transition-colors">
                <h3 className="text-xs font-bold tracking-widest text-zinc-900 uppercase mb-2">{industry.title}</h3>
                <p className="text-sm text-zinc-500">{industry.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-lg font-medium text-zinc-900 border-t border-zinc-100 pt-8">
            We specialize in repetitive work, not one particular industry.
          </p>
        </div>
      </section>

      {/* ── SECTION 10 - CASE STUDIES ────────────────────────────── */}
      <section id="work" className="py-24 md:py-32 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Less manual work. Better ways of working.
            </h2>
            <p className="text-xl text-zinc-400">
              Real workflows. Real businesses. Better ways of working.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="bg-zinc-800/50 border border-zinc-700/50 p-8 md:p-10 rounded-3xl flex flex-col justify-between min-h-[400px]">
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <span className="bg-zinc-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Client Name</span>
                    <span className="text-zinc-400 text-sm">Industry</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Problem</h4>
                    <p className="text-zinc-300 text-sm">Description of the manual work and bottlenecks slowing the team down.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">What Cruse Built</h4>
                    <p className="text-zinc-300 text-sm">The automated workflow or team tool implemented.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Result</h4>
                    <p className="text-white font-medium">Key operational outcome achieved.</p>
                  </div>
                </div>
                <div className="pt-8">
                  <a href="mailto:abiodun@crusehq.com" className="font-semibold text-white hover:text-zinc-300 transition-colors">
                    Read Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 11 - PROCESS ─────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-zinc-50">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 max-w-2xl">
            Find the work. Fix the workflow. Make it run.
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'DISCOVER', subtitle: 'We find where time is being lost.', desc: 'We look at how your team works today and identify repetitive processes, bottlenecks and unnecessary steps.' },
              { num: '02', title: 'DESIGN', subtitle: 'We redesign the workflow.', desc: 'We map the improved process, define the rules and decide where automation and human input belong.' },
              { num: '03', title: 'BUILD', subtitle: 'We build it around your existing tools.', desc: 'We connect the systems you already use and build the workflow or team tool from end to end.' },
              { num: '04', title: 'DEPLOY', subtitle: 'We put it into the business.', desc: 'We test it, get your team up to speed, monitor performance and improve where needed.' }
            ].map((step) => (
              <div key={step.num} className="space-y-4">
                <div className="text-3xl font-bold text-zinc-300 mb-6">{step.num}</div>
                <h3 className="text-sm font-bold tracking-widest text-zinc-900 uppercase">{step.title}</h3>
                <p className="font-medium text-zinc-900">{step.subtitle}</p>
                <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-zinc-200">
            <a
              href="mailto:abiodun@crusehq.com"
              className="bg-zinc-900 hover:bg-zinc-800 text-white text-base font-medium px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Book an Operations Audit
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 12 - WHY CRUSE ───────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 max-w-3xl">
            Built around your business. Not the other way around.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'NO MIGRATIONS', desc: 'We work with the software you already use whenever possible.' },
              { title: 'BUILT FOR YOUR WORKFLOW', desc: 'Your processes, rules and exceptions are different. Your system should reflect that.' },
              { title: 'FROM STRATEGY TO DEPLOYMENT', desc: 'We don\'t just hand you a workflow diagram. We design, build, deploy and refine it.' },
              { title: 'HUMANS STAY IN CONTROL', desc: 'We automate repetitive work while keeping important decisions with the people responsible for them.' }
            ].map((point, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-sm font-bold tracking-widest text-zinc-900 uppercase">{point.title}</h3>
                <p className="text-zinc-600 leading-relaxed text-lg">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 13 - ABOUT CRUSE ─────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 px-6 bg-zinc-100">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
            We build better ways for businesses to work.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Cruse is a technology and product studio helping businesses remove operational friction through better systems, software and design.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed">
            We look at how work actually gets done, find what slows it down and build practical systems that make the process simpler. We're not interested in adding technology for the sake of it.
          </p>
          <p className="text-xl font-bold text-zinc-900">
            We're interested in making the business run better.
          </p>
          <div className="pt-8">
            <a href="mailto:abiodun@crusehq.com" className="font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
              More About Cruse
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 14 - OTHER SERVICES ──────────────────────────── */}
      <section id="services" className="py-24 px-6 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              Automation is what we lead with. But it's not all we do.
            </h2>
            <p className="text-lg text-zinc-600">
              When your business needs more than workflow automation or team tools, we can design and build the digital products around them.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'CUSTOM SOFTWARE', desc: 'Internal tools, dashboards, portals and business applications.' },
              { title: 'WEBSITES & DIGITAL PLATFORMS', desc: 'Websites and digital experiences built around your business goals.' },
              { title: 'PRODUCT DESIGN', desc: 'UI/UX design for digital products and software.' },
              { title: 'BRAND IDENTITY', desc: 'Visual identities for businesses building something worth remembering.' }
            ].map((service, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-sm font-bold tracking-widest text-zinc-900 uppercase">{service.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="pt-12">
            <Link to="/services" className="font-semibold text-zinc-900 hover:text-zinc-600 transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 15 - FAQ ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-zinc-50">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 text-center mb-16">
            Questions, answered.
          </h2>
          
          <div className="space-y-8 divide-y divide-zinc-200">
            {[
              { q: 'What kind of work can you automate?', a: 'Any process with repeatable steps can be a candidate. Common examples include lead handling, follow-ups, customer enquiries, approvals, reporting, invoicing, onboarding, data entry and internal requests.' },
              { q: 'Do we need to replace our current software?', a: 'No. We build around the software you already use whenever possible. No unnecessary migrations.' },
              { q: 'What if we need a tool rather than automation?', a: 'That\'s exactly why we build internal tools and team systems. If your team needs a better way to manage information or execute work, we can design and build it around your workflow.' },
              { q: 'Do you only work with large companies?', a: 'No. We work with businesses at different stages. What matters is whether there is enough repetitive work or operational friction to make improving the process worthwhile.' },
              { q: 'Will our team still be involved?', a: 'Yes. We automate repetitive work, not accountability. Your team stays involved wherever judgment, approval, relationships or exceptions require a person.' },
              { q: 'How long does a project take?', a: 'It depends on the workflow or system and the number of tools involved. Smaller workflows can be deployed quickly, while larger operational systems require more planning and testing.' },
              { q: 'Can you work with our existing or custom software?', a: 'Yes. We assess the systems involved and determine the best way to connect them or work around their limitations.' },
              { q: 'What happens during an Operations Audit?', a: 'We look at how a specific part of your business works today, identify repetitive work and bottlenecks, and outline practical opportunities to improve the workflow.' }
            ].map((faq, idx) => (
              <div key={idx} className="pt-8">
                <h3 className="text-lg font-bold text-zinc-900 mb-3">{faq.q}</h3>
                <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 16 - FINAL CTA ───────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 bg-zinc-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Your team has better things to do.
          </h2>
          <p className="text-xl text-zinc-400">
            Let's find the repetitive work slowing your business down and build a better way to run it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="mailto:abiodun@crusehq.com"
              className="bg-white hover:bg-zinc-200 text-zinc-900 text-base font-medium px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Book an Operations Audit
            </a>
            <a
              href="mailto:abiodun@crusehq.com"
              className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 text-base font-medium px-8 py-4 rounded-lg transition-colors inline-block"
            >
              Talk to Cruse
            </a>
          </div>
          <p className="text-sm text-zinc-500 font-medium pt-4">
            No migrations. No unnecessary complexity. Just better workflows.
          </p>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-zinc-50 border-t border-zinc-200 py-16 px-6">
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
              <a href="#work" className="hover:text-zinc-900">Work</a>
              <Link to="/services" className="hover:text-zinc-900">Services</Link>
              <a href="#about" className="hover:text-zinc-900">About</a>
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
