import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

// In a real app, this might be loaded from an API or context
import contentData from './content/homepage.json';

function App() {
  const { sections } = contentData.homepage;

  // Helper to find section content by ID
  const getSection = (id) => sections.find(s => s.id === id)?.content;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-accent selection:text-white">
      <Navbar content={getSection('navbar')} />
      <main>
        <Hero content={getSection('hero')} />
        <ProductShowcase content={getSection('product_showcase')} />
        <Features content={getSection('features')} />
        <AboutUs content={getSection('about')} />
        <WhyChooseUs content={getSection('why_choose_us')} />
        <Testimonials content={getSection('testimonials')} />
        <CTA content={getSection('cta_footer')} />
      </main>
      <Footer content={getSection('footer')} />
    </div>
  );
}

export default App;
