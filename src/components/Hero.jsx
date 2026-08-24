import React from 'react';

const Hero = ({ content }) => {
  if (!content) return null;

  return (
    <section className="hero">
      <div className="hero-bg-shapes">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{width: '100%', height: '100%', position: 'absolute', opacity: 0.1}}>
            <circle cx="20" cy="20" r="15" fill="var(--secondary)" />
            <circle cx="80" cy="80" r="25" fill="var(--accent)" />
        </svg>
      </div>
      <div className="container hero-content">
        <h1 className="heading-xl">{content.headline}</h1>
        <p className="subtitle" style={{marginBottom: '1rem'}}>{content.subheadline}</p>
        <p className="text-light" style={{marginBottom: '2.5rem'}}>{content.supporting_text}</p>
        <a href={content.cta.href} className="btn btn-primary" style={{padding: '1rem 2rem', fontSize: '1.125rem'}}>
          {content.cta.label}
        </a>
      </div>
    </section>
  );
};

export default Hero;
