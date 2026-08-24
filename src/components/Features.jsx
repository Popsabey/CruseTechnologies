import React from 'react';
import { Code2, Cpu, TrendingUp, Users } from 'lucide-react';

const Features = ({ content }) => {
  if (!content) return null;

  const getIcon = (idx) => {
    switch (idx) {
      case 0: return <Code2 size={24} />;
      case 1: return <Cpu size={24} />;
      case 2: return <TrendingUp size={24} />;
      case 3: return <Users size={24} />;
      default: return <Code2 size={24} />;
    }
  };

  return (
    <section id="solutions" className="section" style={{background: 'rgba(255,255,255,0.5)'}}>
      <div className="container">
        <div className="grid-4">
          {content.items.map((item, idx) => (
            <div key={idx} className="card" style={{border: 'none', background: 'transparent', boxShadow: 'none', padding: '1rem'}}>
              <div className="card-icon" style={{background: 'white', boxShadow: 'var(--shadow-soft)'}}>
                {getIcon(idx)}
              </div>
              <h3 className="heading-md" style={{fontSize: '1.25rem'}}>{item.title}</h3>
              <p className="text-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
