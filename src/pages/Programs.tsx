import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './Programs.css';

const programs = [
  {
    id: 'section8',
    icon: '🏠',
    image: '/hero-bg.png',
    badge: 'Most Requested',
    badgeType: 'accent',
    title: 'Housing Choice Vouchers (Section 8)',
    description:
      'Federal rental assistance that covers the difference between 30% of your income and the fair market rent. Accepted at thousands of private rentals across San Diego County.',
    features: ['Income-based payments', 'Wide landlord network', 'Portable county-wide'],
    link: '/housing-assistance/section-8',
  },
  {
    id: 'emergency',
    icon: '⚡',
    image: '/programs-bg.png',
    badge: 'Immediate Help',
    badgeType: 'gold',
    title: 'Emergency Rental Assistance',
    description:
      'Short-term financial aid for households facing eviction or utility shutoffs. Rapid response team available to protect at-risk families from losing their homes.',
    features: ['Fast-track review', 'Eviction prevention', 'Utility bill support'],
    link: '/housing-assistance/emergency-housing',
  },
  {
    id: 'homebuyers',
    icon: '🔑',
    image: '/homebuyers.png',
    badge: 'New Funds Available',
    badgeType: 'primary',
    title: 'First-Time Homebuyer Program',
    description:
      'Down payment assistance loans up to 22% of the purchase price for eligible first-time buyers. Partnered with major lenders across San Diego County.',
    features: ['Up to 22% down payment', '660+ credit score', 'Free counseling'],
    link: '/programs/first-time-homebuyers',
  },
  {
    id: 'veterans',
    icon: '🎖️',
    image: '/veterans.png',
    badge: null,
    badgeType: null,
    title: 'Veterans Housing (HUD-VASH)',
    description:
      'The HUD-VASH program combines housing vouchers from SDHC with supportive services from the VA San Diego Healthcare System to help Veterans end homelessness.',
    features: ['VA services included', 'Priority placement', 'Case management'],
    link: '/programs/veterans-housing',
  },
  {
    id: 'senior',
    icon: '👴',
    image: '/senior.png',
    badge: null,
    badgeType: null,
    title: 'Senior Affordable Housing',
    description:
      'Affordable housing communities designed for residents 62 and older. On-site services, accessibility features, and social programming promote independence and well-being.',
    features: ['62+ eligible', 'ADA accessible', 'On-site programs'],
    link: '/programs/senior-housing',
  },
  {
    id: 'landlords',
    icon: '🏢',
    image: '/about-team.png',
    badge: null,
    badgeType: null,
    title: 'Landlord Partner Program',
    description:
      'Partner with SDHC to receive reliable rent payments, free property inspections, and access to the Damage Mitigation Fund. Help expand affordable housing supply.',
    features: ['Reliable payments', 'Property support', 'Damage mitigation fund'],
    link: '/contact',
  },
];

const Programs: React.FC = () => {
  return (
    <div className="programs-page">
      <PageHero
        image="/programs-bg.png"
        label="Housing Programs"
        title="Comprehensive Housing"
        highlight="Solutions for All"
        subtitle="From emergency rental aid to veteran support and senior living — explore the full range of SDHC housing programs designed for every stage of life."
        breadcrumb={[{ label: 'Programs', to: '/programs' }]}
      />

      <section className="section programs-grid-section">
        <div className="container">
          <div className="section-label mb-label">
            Our Services
          </div>
          <h2 className="section-title">All Housing Programs</h2>
          <p className="section-subtitle">
            Click any program to learn how to apply. Our team is ready to guide you through every step.
          </p>

          <div className="programs-grid">
            {programs.map((prog) => (
              <article key={prog.id} className="program-card">
                <div className="program-card__img-wrap">
                  <img
                    src={prog.image.startsWith('/') ? `${import.meta.env.BASE_URL}${prog.image.slice(1)}` : prog.image}
                    alt={prog.title}
                    className="program-card__img"
                    loading="lazy"
                  />
                  <div className="program-card__img-overlay" />
                  {prog.badge && (
                    <span className={`badge badge-${prog.badgeType} program-card__badge`}>
                      {prog.badge}
                    </span>
                  )}
                  <div className="program-card__icon" aria-hidden="true">{prog.icon}</div>
                </div>
                <div className="program-card__body">
                  <h3 className="program-card__title">{prog.title}</h3>
                  <p className="program-card__desc">{prog.description}</p>
                  <ul className="program-card__features" aria-label="Key features">
                    {prog.features.map((f) => (
                      <li key={f}>
                        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                          <path d="M13.5 3.5L6 11 2.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={prog.link} className="btn btn-primary program-card__btn">
                    {prog.id === 'landlords' ? 'Contact Us' : 'Learn More & Apply'}
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{width:14,height:14}}>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="programs-cta section-sm" aria-labelledby="programs-cta-heading">
        <div className="container programs-cta__inner">
          <div>
            <h2 id="programs-cta-heading" className="programs-cta__title">
              Not sure which program fits your situation?
            </h2>
            <p className="programs-cta__sub">Our team will match you with the right resources — free of charge.</p>
          </div>
          <div className="programs-cta__actions">
            <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            <a href="tel:6192319400" className="btn btn-ghost">📞 (619) 231-9400</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
