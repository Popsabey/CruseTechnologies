import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import contentData from './content/homepage.json';

function App() {
  const { sections } = contentData.homepage;

  const getSection = (id) => sections.find((s) => s.id === id)?.content;

  return (
    <div className="app-container">
      <Navbar content={getSection('navbar')} />
      <main>
        <Hero content={getSection('hero')} />
        <ProductShowcase content={getSection('products')} />
        <Features content={getSection('solutions')} />
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
