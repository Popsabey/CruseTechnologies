import React from 'react';

const CTA = ({ content }) => {
  if (!content) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="cta-box">
          <h2 className="heading-lg">{content.headline}</h2>
          <p style={{fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem'}}>
            {content.sub_text}
          </p>
          <a href={content.cta.href} className="btn" style={{background: 'white', color: 'var(--primary)', padding: '1rem 2rem', fontSize: '1.125rem'}}>
            {content.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
