import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = ({ content }) => {
  if (!content) return null;

  return (
    <section className="section" style={{background: 'white'}}>
      <div className="container">
        <div className="grid-2" style={{alignItems: 'center'}}>
          <div>
            <h2 className="heading-lg">{content.headline}</h2>
            <p className="subtitle" style={{marginLeft: 0, textAlign: 'left', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 600}}>
              {content.subheadline}
            </p>
            <p className="text-light" style={{marginBottom: '2rem'}}>
              {content.description}
            </p>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {content.items.map((item, idx) => (
              <div key={idx} style={{display: 'flex', gap: '1rem'}}>
                <div style={{color: 'var(--accent)', flexShrink: 0, marginTop: '0.25rem'}}>
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h3 className="heading-md" style={{fontSize: '1.25rem', marginBottom: '0.25rem'}}>{item.title}</h3>
                  <p className="text-light">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
