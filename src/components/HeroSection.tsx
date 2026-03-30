import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchKnowledge, type SearchResult } from '../data/knowledgeBase';
import './HeroSection.css';

const stats = [
  { value: '130K+', label: 'People Served Annually' },
  { value: '18K+', label: 'Housing Vouchers' },
  { value: '$1.2B', label: 'Annual Investment' },
  { value: '50+', label: 'Years of Service' },
];

const HeroSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearch = (q: string) => {
    setQuery(q);
    if (q.trim().length > 1) {
      setResults(searchKnowledge(q));
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const handleResultClick = (link: string) => {
    setShowResults(false);
    setQuery('');
    navigate(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) handleResultClick(results[0].link);
  };

  return (
    <section className="hero" aria-labelledby="hero-heading">
      {/* Background image + decorations */}
      <div className="hero__bg" aria-hidden="true">
        <img
          className="hero__bg-img"
          src={`${import.meta.env.BASE_URL}hero-bg.png`}
          alt="San Diego cityscape"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__bg-overlay" />
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          {/* Label Pill */}
          <div className="hero__label animate-fade-in-up">
            <span className="hero__label-dot" aria-hidden="true" />
            San Diego Housing Commission
          </div>

          {/* Heading */}
          <h1 id="hero-heading" className="hero__heading animate-fade-in-up delay-1">
            Affordable Housing<br />
            <span className="hero__heading-highlight">for Every San Diegan</span>
          </h1>

          {/* Subtext */}
          <p className="hero__subtext animate-fade-in-up delay-2">
            We connect residents with housing assistance, rental programs, and community
            resources to build a thriving, equitable San Diego for all.
          </p>

          {/* CTAs */}
          <div className="hero__ctas animate-fade-in-up delay-3">
            <Link to="/contact" className="btn btn-primary hero__cta-btn">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{width:18,height:18}}>
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Apply for Assistance
            </Link>
            <Link to="/programs" className="btn btn-secondary hero__cta-btn">
              Explore Programs
            </Link>
          </div>

          {/* AI-powered Search Bar */}
          <div className="hero__search animate-fade-in-up delay-4" role="search" ref={searchRef}>
            <label htmlFor="hero-search" className="sr-only">Search housing programs</label>
            <form className="hero__search-inner" onSubmit={handleSubmit}>
              <svg className="hero__search-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M19 19l-4-4m0 0A7 7 0 103 3a7 7 0 0012 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                id="hero-search"
                type="search"
                className="hero__search-input"
                placeholder="Search housing programs, eligibility, documents..."
                value={query}
                onChange={e => handleSearch(e.target.value)}
                aria-label="Search housing programs"
                aria-autocomplete="list"
                aria-expanded={showResults}
                autoComplete="off"
              />
              <button className="hero__search-btn btn btn-primary" type="submit">
                Search
              </button>
            </form>

            {/* Live Search Dropdown */}
            {showResults && (
              <div className="hero__results" role="listbox" aria-label="Search results">
                {results.length === 0 ? (
                  <div className="hero__result-empty">No results found for "{query}"</div>
                ) : (
                  results.map((r, i) => (
                    <button
                      key={i}
                      className="hero__result-item"
                      role="option"
                      onClick={() => handleResultClick(r.link)}
                    >
                      <span className="hero__result-cat">{r.category}</span>
                      <span className="hero__result-title">{r.title}</span>
                      <span className="hero__result-summary">{r.summary.slice(0, 80)}…</span>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Stats Card Panel */}
        <div className="hero__visual animate-fade-in-up delay-2" aria-label="Key statistics">
          <div className="hero__stats-card glass-card">
            <div className="hero__stats-header">
              <span className="badge badge-primary">Our Impact</span>
              <span className="hero__stats-year">2024 Annual Report</span>
            </div>
            <div className="hero__stats-grid">
              {stats.map((stat, i) => (
                <div key={stat.label} className="hero__stat" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="hero__stats-footer">
              <div className="hero__activity">
                <span className="hero__activity-dot" aria-hidden="true" />
                <span>Applications being processed today</span>
              </div>
              <span className="hero__activity-count">847</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
