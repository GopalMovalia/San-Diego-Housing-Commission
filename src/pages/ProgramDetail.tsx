import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { programsInfo } from '../data/programDetails';
import './Programs.css'; // We will reuse the card CSS and grid styles if needed, or add local styles

const ProgramDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // If ID doesn't exist or isn't found in our data, redirect to programs overview
  if (!id || !programsInfo[id]) {
    return <Navigate to="/programs" replace />;
  }

  const program = programsInfo[id];

  // Set page title for SEO
  useEffect(() => {
    document.title = `${program.title} - SDHC`;
  }, [program.title]);

  return (
    <div className="page-wrapper">
      <PageHero
        label={program.category}
        title={program.title}
        subtitle={program.overview.split('. ')[0] + '.'}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: program.category, to: program.category === 'Housing Assistance' ? '/housing-assistance' : '/programs' },
          { label: program.title, to: `${program.category === 'Housing Assistance' ? '/housing-assistance' : '/programs'}/${id}` },
        ]}
        image={program.heroImage}
      />

      <section className="section bg-light" aria-labelledby="program-overview">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: 'var(--space-8)' }}>
          {/* Main Content */}
          <div className="program-content">
            <span className="badge badge-primary" style={{ marginBottom: 'var(--space-3)' }}>{program.category}</span>
            <h2 id="program-overview" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 800, marginBottom: 'var(--space-4)', letterSpacing: '-0.02em', color: 'var(--color-primary)' }}>
              Overview
            </h2>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: 1.6, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)' }}>
              {program.overview}
            </p>

            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text-primary)' }}>
              Eligibility Requirements
            </h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, marginBottom: 'var(--space-8)' }}>
              {program.eligibility.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-2)', fontSize: 'var(--text-md)', color: 'var(--color-text-secondary)' }}>
                  <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 24, height: 24, color: 'var(--color-primary)', flexShrink: 0 }}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text-primary)' }}>
              Steps to Apply
            </h3>
            <ol style={{ paddingLeft: '1.5rem', marginBottom: 'var(--space-8)', fontSize: 'var(--text-md)', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {program.stepsToApply.map((item, i) => (
                <li key={i} style={{ marginBottom: 'var(--space-2)' }}>{item}</li>
              ))}
            </ol>
          </div>

          {/* Sidebar CTA */}
          <aside>
            <div className="glass-card" style={{ padding: 'var(--space-6)', background: 'white', position: 'sticky', top: '120px' }}>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>Ready to Apply?</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                Begin your housing journey with the San Diego Housing Commission.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 'var(--space-3)' }}>
                Apply Now
              </Link>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                Questions? Call <a href="tel:6192319400" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>(619) 231-9400</a>
              </div>
            </div>
          </aside>
        </div>
      </section>
      
      <style>{`
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ProgramDetail;
