import React from 'react';
import { Bot, Headphones, Layers } from 'lucide-react';

const ProductShowcase = ({ content }) => {
  if (!content) return null;

  // Map icons
  const getIcon = (id) => {
    switch (id) {
      case 'hessie': return <Bot size={24} />;
      case 'tessa': return <Headphones size={24} />;
      case 'unified': return <Layers size={24} />;
      default: return <Bot size={24} />;
    }
  };

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="text-center" style={{marginBottom: '4rem'}}>
          <h2 className="heading-lg">{content.headline}</h2>
        </div>
        
        <div className="grid-3">
          {content.items.map((item, idx) => (
            <div key={idx} className="card">
              <div className="card-icon">
                {getIcon(item.id)}
              </div>
              <h3 className="heading-md">{item.title}</h3>
              <p className="text-light" style={{marginBottom: '2rem', flex: 1}}>
                {item.description}
              </p>
              <a href={item.cta.href} className="btn btn-secondary" style={{alignSelf: 'flex-start', padding: 0}}>
                {item.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
