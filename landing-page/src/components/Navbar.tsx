import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../i18n/translations';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { label: t.navAbout, href: '#about' },
    { label: t.navSkills, href: '#skills' },
    { label: t.navProjects, href: '#projects' },
    { label: t.navPassions, href: '#passions' },
    { label: t.navContact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo">
        <span className="navbar__logo-bracket">&lt;</span>
        <span className="navbar__logo-name">lelo</span>
        <span className="navbar__logo-bracket">/&gt;</span>
      </a>

      <button
        className={`navbar__burger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="navbar__cta"
            onClick={() => setMenuOpen(false)}
          >
            {t.navLetsTalk}
          </a>
        </li>
        <li>
          <button className="navbar__lang-toggle" onClick={toggleLanguage}>
            {language === 'en' ? 'PT' : 'EN'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
