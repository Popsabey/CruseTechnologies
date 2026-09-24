import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExistingStack from './components/ExistingStack';
import Problem from './components/Problem';
import Approach from './components/Approach';
import WhatWeBuild from './components/WhatWeBuild';
import AutomationDemo from './components/AutomationDemo';
import BeforeAfter from './components/BeforeAfter';
import Outcomes from './components/Outcomes';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import WhyCruse from './components/WhyCruse';
import About from './components/About';
import OtherServices from './components/OtherServices';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const handleOpenAudit = () => setAuditModalOpen(true);
  const handleCloseAudit = () => setAuditModalOpen(false);

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar onOpenAudit={handleOpenAudit} />
      <main className="flex-1">
        <Hero onOpenAudit={handleOpenAudit} />
        <ExistingStack />
        <Problem />
        <Approach />
        <WhatWeBuild onOpenAudit={handleOpenAudit} />
        <AutomationDemo />
        <BeforeAfter />
        <Outcomes />
        <WhoWeWorkWith />
        <CaseStudies onOpenAudit={handleOpenAudit} />
        <Process onOpenAudit={handleOpenAudit} />
        <WhyCruse />
        <About onOpenAudit={handleOpenAudit} />
        <OtherServices onOpenAudit={handleOpenAudit} />
        <FAQ />
        <FinalCTA onOpenAudit={handleOpenAudit} />
      </main>
      <Footer onOpenAudit={handleOpenAudit} />
      <AuditModal isOpen={auditModalOpen} onClose={handleCloseAudit} />
    </div>
  );
}
