import './navbar.css';

import React, {
  useEffect,
  useState,
} from 'react';

import logo from '../../assets/images/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Inicio", "Nosotros", "Servicios", "Productos", "Distribuidores", "Contacto"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : 'solid'}`}>
      <nav className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Hydromagic" />
        </div>

        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item} onClick={() => setIsMobileMenuOpen(false)}>{item}</li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="navbar-cta">Contáctanos ahora</button>
          
          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}