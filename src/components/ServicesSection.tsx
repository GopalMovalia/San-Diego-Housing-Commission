import React from 'react';
import './ServicesSection.css';

const services = [
  {
    icon: '🏠',
    title: 'Rental Assistance',
    description: 'Housing Choice Vouchers help qualifying residents pay for safe, privately-owned rental housing throughout San Diego County.',
    link: '#rental',
    badge: 'Most Popular',
    badgeType: 'accent',
  },
  {
    icon: '🔑',
    title: 'Section 8 Vouchers',
    description: 'Federally funded vouchers that subsidize rent for low-income families, elderly, and disabled individuals.',
    link: '#section8',
    badge: null,
    badgeType: null,
  },
  {
    icon: '🏡',
    title: 'First-Time Homebuyers',
    description: 'Programs and down payment assistance to help qualified buyers achieve their dream of homeownership in San Diego.',
    link: '#homebuyers',
    badge: 'New Funds',
    badgeType: 'gold',
  },
  {
    icon: '🎖️',
    title: 'Veterans Housing',
    description: 'Dedicated programs to prevent and end homelessness among Veterans, partnering with VA and community organizations.',
    link: '#veterans',
    badge: null,
    badgeType: null,
  },
  {
    icon: '👴',
    title: 'Senior Housing',
    description: 'Affordable housing options and services specifically designed to support the independence and well-being of seniors.',
    link: '#senior',
    badge: null,
    badgeType: null,
  },
  {
    icon: '🤖',
    title: 'AI Digital Assistant',
    description: 'Our future-ready AI assistant will guide you to the right programs, answer questions, and complete multi-step tasks on your behalf.',
    link: '#ai',
    badge: 'Coming Soon',
    badgeType: 'primary',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services section" id="programs" aria-labelledby="services-heading">
      <div className="container">
        <div className="services__header">
          <span className="section-label">
            <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style={{width:12,height:12}}>
              <path d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z"/>
              <path d="M9 11H7v1h2v-1zm0-7H7v5h2V4z"/>
            </svg>
            Our Programs
          </span>
          <h2 id="services-heading" className="section-title">
            Housing Solutions for<br />Every Stage of Life
          </h2>
          <p className="section-subtitle">
            From rental assistance to homeownership, the Commission provides
            a comprehensive suite of programs to support San Diego's most vulnerable residents.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="services__card"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="services__card-icon" aria-hidden="true">
                {service.icon}
              </div>
              {service.badge && (
                <span className={`badge badge-${service.badgeType} services__badge`}>
                  {service.badge}
                </span>
              )}
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <a href={service.link} className="services__card-link" aria-label={`Learn more about ${service.title}`}>
                Learn more
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
