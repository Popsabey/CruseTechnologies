import React from 'react';

const Navbar = ({ content }) => {
  if (!content) return null;

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="/" className="footer-logo text-primary" style={{color: 'var(--primary)'}}>
          {content.logo_text}
        </a>
        <nav className="nav-links">
          {content.links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              className={link.label === 'Contact Us' ? 'btn btn-primary' : 'nav-link'}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
