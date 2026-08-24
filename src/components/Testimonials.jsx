import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = ({ content }) => {
  if (!content) return null;

  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <h2 className="heading-lg">{content.headline}</h2>
        </div>
        
        <div className="grid-2">
          {content.items.map((item, idx) => (
            <div key={idx} className="card" style={{position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: '-1rem', right: '-1rem', color: 'rgba(37, 99, 235, 0.05)'}}>
                <Quote size={120} />
              </div>
              
              <p style={{fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '2rem', position: 'relative', zIndex: 1, flex: 1}}>
                "{item.quote}"
              </p>
              
              <div style={{display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: 1}}>
                <div style={{width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.25rem'}}>
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="heading-md" style={{fontSize: '1.125rem', marginBottom: 0}}>{item.author}</h4>
                  <p className="text-light" style={{fontSize: '0.875rem'}}>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
