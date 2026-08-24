import React from 'react';

const AboutUs = ({ content }) => {
  if (!content) return null;

  return (
    <section id="about" className="section">
      <div className="container about-content">
        <h2 className="heading-lg">{content.headline}</h2>
        <p className="subtitle" style={{fontSize: '1.5rem', lineHeight: '1.8', color: 'var(--text-dark)'}}>
          {content.text}
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
