import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import './News.css';

const newsItems = [
  {
    id: 1,
    date: 'March 15, 2026',
    category: 'Press Release',
    title: 'SDHC Launches $50M Emergency Rental Assistance Fund for 2026',
    excerpt: 'The San Diego Housing Commission announces a new $50 million emergency rental assistance program aimed at preventing evictions for low-income households across San Diego County.',
    image: '/news-bg.png',
    featured: true,
  },
  {
    id: 2,
    date: 'March 8, 2026',
    category: 'Program Update',
    title: 'Housing Choice Voucher Waitlist to Open April 2026',
    excerpt: 'SDHC will open its Housing Choice Voucher waitlist for the first time since 2019. Eligible applicants can pre-register online starting April 1.',
    image: '/about-team.png',
    featured: false,
  },
  {
    id: 3,
    date: 'February 28, 2026',
    category: 'Community',
    title: 'SDHC Partners with UCSD to Study Affordable Housing Impact',
    excerpt: 'A new multi-year research partnership will measure the long-term economic and social benefits of affordable housing in San Diego neighborhoods.',
    image: '/programs-bg.png',
    featured: false,
  },
  {
    id: 4,
    date: 'February 20, 2026',
    category: 'Veterans',
    title: 'New Veterans Housing Complex Opens in Mission Valley',
    excerpt: '120 units of permanent supportive housing for veterans opened this month, providing stable homes for chronically homeless veterans in the Mission Valley community.',
    image: '/veterans.png',
    featured: false,
  },
  {
    id: 5,
    date: 'February 10, 2026',
    category: 'Homeownership',
    title: 'First-Time Homebuyer Program Receives $5M State Grant',
    excerpt: 'A new California state grant will expand SDHC\'s down payment assistance capacity, helping an additional 100 families achieve homeownership in San Diego this year.',
    image: '/homebuyers.png',
    featured: false,
  },
  {
    id: 6,
    date: 'January 25, 2026',
    category: 'Senior Housing',
    title: 'SDHC Breaks Ground on New Senior Community in Chula Vista',
    excerpt: '200 affordable units for residents 62 and older will be located near transit lines in southern San Diego County, with a target opening date of early 2027.',
    image: '/senior.png',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  'Press Release': 'primary',
  'Program Update': 'accent',
  'Community': 'gold',
  'Veterans': 'primary',
  'Homeownership': 'accent',
  'Senior Housing': 'gold',
};

const News: React.FC = () => {
  const featured = newsItems[0];
  const rest = newsItems.slice(1);

  return (
    <div className="news-page">
      <PageHero
        image="/news-bg.png"
        label="News & Updates"
        title="Latest from"
        highlight="SDHC"
        subtitle="Stay informed about affordable housing programs, policy updates, community initiatives, and SDHC announcements in San Diego County."
        breadcrumb={[{ label: 'News', to: '/news' }]}
      />

      <section className="section">
        <div className="container">
          {/* Featured Article */}
          <div className="news-featured">
            <div className="news-featured__img-wrap">
              <img src={featured.image.startsWith('/') ? `${import.meta.env.BASE_URL}${featured.image.slice(1)}` : featured.image} alt={featured.title} className="news-featured__img" loading="eager" />
              <div className="news-featured__img-overlay" />
              <span className={`badge badge-${categoryColors[featured.category]} news-featured__cat`}>
                {featured.category}
              </span>
            </div>
            <div className="news-featured__body">
              <span className="news-featured__date">{featured.date}</span>
              <h2 className="news-featured__title">{featured.title}</h2>
              <p className="news-featured__excerpt">{featured.excerpt}</p>
              <Link to="#" className="btn btn-primary">
                Read Full Story
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{width:14,height:14}}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Article Grid */}
          <h3 className="news-section-heading">More Recent News</h3>
          <div className="news-grid">
            {rest.map((item) => (
              <article key={item.id} className="news-card">
                <div className="news-card__img-wrap">
                  <img src={item.image.startsWith('/') ? `${import.meta.env.BASE_URL}${item.image.slice(1)}` : item.image} alt={item.title} className="news-card__img" loading="lazy" />
                  <div className="news-card__img-overlay" />
                  <span className={`badge badge-${categoryColors[item.category]} news-card__cat`}>
                    {item.category}
                  </span>
                </div>
                <div className="news-card__body">
                  <span className="news-card__date">{item.date}</span>
                  <h3 className="news-card__title">{item.title}</h3>
                  <p className="news-card__excerpt">{item.excerpt}</p>
                  <Link to="#" className="news-card__link">
                    Read More
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
