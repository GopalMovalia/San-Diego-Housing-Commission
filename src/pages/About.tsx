import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './About.css';

const timeline = [
  { year: '1979', event: 'SDHC established by the City of San Diego to address affordable housing needs.' },
  { year: '1985', event: 'Launched Housing Choice Voucher program, serving over 2,000 families in the first year.' },
  { year: '1998', event: 'Expanded to Veterans housing programs in partnership with the VA.' },
  { year: '2005', event: 'First-Time Homebuyer program launched, assisting 500+ families in year one.' },
  { year: '2015', event: 'Reached 100,000 residents served annually milestone.' },
  { year: '2024', event: 'Launched AI-ready digital platform redesign for the next generation of service.' },
];

const board = [
  { name: 'Michael McConnell', role: 'Chair, Board of Commissioners', img: null },
  { name: 'Sandra McBryde', role: 'Vice Chair', img: null },
  { name: 'April Hernandez', role: 'Commissioner', img: null },
  { name: 'Greg A. Dinkins', role: 'Commissioner', img: null },
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      <PageHero
        image="/about-team.png"
        label="About SDHC"
        title="50 Years of"
        highlight="Affordable Housing"
        subtitle="The San Diego Housing Commission has been the city's trusted partner for affordable housing since 1979 — connecting over 130,000 residents with the resources they need to thrive."
        breadcrumb={[{ label: 'About Us', to: '/about' }]}
      />

      {/* Mission Section */}
      <section className="section about-mission">
        <div className="container about-mission__inner">
          <div className="about-mission__content">
            <span className="section-label">Our Mission</span>
            <h2 className="section-title">Partnering to Build a<br />Stronger San Diego</h2>
            <p className="section-subtitle">
              SDHC's mission is to serve the residents and the City of San Diego by providing innovative and cost-effective affordable housing programs that support a diverse and economically prosperous community.
            </p>
            <div className="about-stats">
              {[
                { value: '130K+', label: 'Residents Served' },
                { value: '$1.2B', label: 'Annual Investment' },
                { value: '18K+', label: 'Active Vouchers' },
                { value: '50+', label: 'Years of Service' },
              ].map(s => (
                <div key={s.label} className="about-stat">
                  <span className="about-stat__value">{s.value}</span>
                  <span className="about-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
          <div className="about-mission__img-wrap">
            <img
              src={`${import.meta.env.BASE_URL}about-team.png`}
              alt="SDHC team members in a meeting"
              className="about-mission__img"
              loading="lazy"
            />
            <div className="about-mission__img-badge glass-card">
              <span className="about-mission__badge-icon">🏆</span>
              <div>
                <div className="about-mission__badge-value">Top Rated</div>
                <div className="about-mission__badge-sub">Housing Authority 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline-section" style={{ background: 'var(--color-bg-soft)' }}>
        <div className="container">
          <span className="section-label">Our History</span>
          <h2 className="section-title">Key Milestones</h2>
          <div className="about-timeline">
            {timeline.map((item, i) => (
              <div key={item.year} className={`about-timeline__item${i % 2 === 0 ? ' left' : ' right'}`}>
                <div className="about-timeline__dot" aria-hidden="true" />
                <div className="about-timeline__card glass-card">
                  <span className="about-timeline__year">{item.year}</span>
                  <p className="about-timeline__event">{item.event}</p>
                </div>
              </div>
            ))}
            <div className="about-timeline__line" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="section">
        <div className="container">
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Board of Commissioners</h2>
          <p className="section-subtitle">Appointed by the Mayor and City Council, our board guides SDHC's strategic direction and mission.</p>
          <div className="about-board">
            {board.map(member => (
              <div key={member.name} className="about-board__card glass-card">
                <div className="about-board__avatar" aria-hidden="true">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="about-board__name">{member.name}</div>
                <div className="about-board__role">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
