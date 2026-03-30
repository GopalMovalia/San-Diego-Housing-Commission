import React from 'react';
import './Footer.css';

const footerLinks = {
  'Housing Programs': [
    { label: 'Rental Assistance', href: '#rental' },
    { label: 'Section 8 Vouchers', href: '#section8' },
    { label: 'First-Time Homebuyers', href: '#homebuyers' },
    { label: 'Veterans Housing', href: '#veterans' },
    { label: 'Senior Housing', href: '#senior' },
  ],
  'About SDHC': [
    { label: 'Our Mission', href: '#about' },
    { label: 'Board of Commissioners', href: '#board' },
    { label: 'News & Updates', href: '#news' },
    { label: 'Careers', href: '#careers' },
    { label: 'Annual Report', href: '#report' },
  ],
  'Resources': [
    { label: 'Apply Online', href: '#apply' },
    { label: 'Check Status', href: '#status' },
    { label: 'Find a Home', href: '#search' },
    { label: 'Landlord Portal', href: '#landlords' },
    { label: 'Section 3 Business', href: '#section3' },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="container footer__top-inner">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon" aria-hidden="true">SD</div>
              <div>
                <div className="footer__logo-title">San Diego</div>
                <div className="footer__logo-sub">Housing Commission</div>
              </div>
            </div>
            <p className="footer__tagline">
              Building stronger communities through affordable housing solutions across San Diego County since 1975.
            </p>
            <div className="footer__social" aria-label="Social media links">
              {['𝕏', 'f', 'in', '▶'].map((s, i) => (
                <a key={i} href="#" className="footer__social-btn" aria-label={`Follow us on social media ${i + 1}`}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="footer__col">
              <h3 className="footer__col-heading">{section}</h3>
              <ul role="list">
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Accessibility Banner */}
      <div className="footer__accessibility">
        <div className="container footer__accessibility-inner">
          <div className="footer__access-badges">
            <span className="badge badge-accent">♿ WCAG 2.1 AA</span>
            <span className="badge badge-primary">🔒 SSL Secured</span>
            <span className="badge badge-gold">📊 GDPR Ready</span>
          </div>
          <div className="footer__translate">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{width:16,height:16,flexShrink:0}}>
              <path d="M7 3a1 1 0 000 2h.01M7 7a1 1 0 011-1h5M4 12h.01M8 12h.01M12 12h.01M8 16h8M4 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>Translation available via Google Translate</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} San Diego Housing Commission. All rights reserved.</p>
          <nav className="footer__legal" aria-label="Legal links">
            {['Privacy Policy', 'Terms of Use', 'ADA Notice', 'Non-Discrimination Policy'].map(item => (
              <a key={item} href="#" className="footer__legal-link">{item}</a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
