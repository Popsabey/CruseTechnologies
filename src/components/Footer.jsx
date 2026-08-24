import React from 'react';

const Footer = ({ content }) => {
  if (!content) return null;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="/" className="footer-logo">
            {content.logo_text}
          </a>
          <div>
            <a href={`mailto:${content.email}`} style={{color: 'white', fontWeight: 500}}>
              {content.email}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{content.copyright}</p>
          <div style={{display: 'flex', gap: '1rem'}}>
            <a href="#products">Products</a>
            <a href="#solutions">Solutions</a>
            <a href="#about">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
