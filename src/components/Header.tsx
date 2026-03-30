import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Header.css';

const navLinks = [
  {
    label: 'Housing Assistance',
    href: '/housing-assistance',
    children: [
      { label: 'Rental Assistance', href: '/housing-assistance/rental-assistance' },
      { label: 'Section 8 Vouchers', href: '/housing-assistance/section-8' },
      { label: 'Emergency Housing', href: '/housing-assistance/emergency-housing' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'First-Time Homebuyers', href: '/programs/first-time-homebuyers' },
      { label: 'Veterans Housing', href: '/programs/veterans-housing' },
      { label: 'Senior Housing', href: '/programs/senior-housing' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleDropdown = (label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
      <div className="container header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="San Diego Housing Commission Home">
          <div className="header__logo-icon" aria-hidden="true">
            <span>SD</span>
          </div>
          <div className="header__logo-text">
            <span className="header__logo-title">San Diego</span>
            <span className="header__logo-sub">Housing Commission</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list" role="list">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={`header__nav-item${link.children ? ' has-dropdown' : ''}`}
                onMouseEnter={link.children ? () => handleMouseEnter(link.label) : undefined}
                onMouseLeave={link.children ? handleMouseLeave : undefined}
              >
                {link.children ? (
                  <>
                    <button
                      className={`header__nav-link header__nav-btn${activeDropdown === link.label ? ' is-active' : ''}`}
                      aria-expanded={activeDropdown === link.label}
                      aria-haspopup="true"
                      onClick={() => { handleDropdown(link.label); navigate(link.href); }}
                    >
                      {link.label}
                      <svg className="header__chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <div
                      className={`header__dropdown${activeDropdown === link.label ? ' is-open' : ''}`}
                      role="menu"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="header__dropdown-link"
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `header__nav-link${isActive ? ' is-active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="header__actions">
          <Link to="/contact" className="btn btn-primary header__cta">
            Apply Now
          </Link>
          <button
            className={`header__burger${menuOpen ? ' is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`header__mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          <ul role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.children ? (
                  <>
                    <button
                      className="header__mobile-link header__mobile-btn"
                      onClick={() => handleDropdown(link.label)}
                    >
                      {link.label}
                      <svg className={`header__chevron${activeDropdown === link.label ? ' rotated' : ''}`} viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {activeDropdown === link.label && (
                      <ul className="header__mobile-sub">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.href}
                              className="header__mobile-sub-link"
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `header__mobile-link${isActive ? ' is-active' : ''}`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}
                onClick={() => setMenuOpen(false)}
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
