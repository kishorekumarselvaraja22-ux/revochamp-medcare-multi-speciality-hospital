import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getThemeStyles } from '@/theme/themeStyles';
import { useTheme } from '@/contexts/ThemeContext';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';

function HeaderSection_0({ logoText, logoIcon, sticky }) {
  const theme = useTheme();
  const themeStyles = React.useMemo(() => getThemeStyles(theme), [theme]);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = links || ["Home","About","Services","Contact"];
  return (
    <>
      <section style={themeStyles} id="hospital_header" className={sticky ? 'navbar sticky' : 'navbar'}>
        <div className="container">
          <a href="#" className="navbar-logo">
            <Icon name={logoIcon} />
            <span>{logoText}</span>
          </a>
          <ul className="navbar-links">
            {navLinks.map((link, idx) => (
              <li key={idx}><a href={link.href || '#'}>{link.name || link}</a></li>
            ))}
          </ul>
          <div className="navbar-actions">
            <Button href="#" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>Get Started</Button>
            <button className="navbar-toggle" onClick={() => setIsOpen(true)} aria-label="Open Menu">
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </section>
      <div className={`drawer-overlay ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(false)}></div>
      <div className={`mobile-drawer ${isOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-header">
          <a href="#" className="navbar-logo">
            <Icon name={logoIcon} />
            <span>{logoText}</span>
          </a>
          <button className="navbar-toggle" onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <Icon name="close" />
          </button>
        </div>
        <ul className="mobile-drawer-links">
          {navLinks.map((link, idx) => (
            <li key={idx}><a href={link.href || '#'} onClick={() => setIsOpen(false)}>{link.name || link}</a></li>
          ))}
        </ul>
        <Button href="#" style={{ marginTop: '16px' }} onClick={() => setIsOpen(false)}>Get Started</Button>
      </div>
    </>
  );

}

HeaderSection_0.propTypes = {
  logoText: PropTypes.string,
  logoIcon: PropTypes.string,
  sticky: PropTypes.bool,
};

export default HeaderSection_0;