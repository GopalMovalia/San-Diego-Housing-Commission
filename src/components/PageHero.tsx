import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

interface PageHeroProps {
  image: string;
  label: string;
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumb?: { label: string; to: string }[];
}

const PageHero: React.FC<PageHeroProps> = ({ image, label, title, highlight, subtitle, breadcrumb }) => {
  const imgPath = image.startsWith('/') 
    ? `${import.meta.env.BASE_URL}${image.slice(1)}`
    : image;

  return (
    <section className="page-hero" style={{ backgroundImage: `url(${imgPath})` }}>
      <div className="page-hero__overlay" />
      <div className="container page-hero__inner">
        {breadcrumb && (
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <React.Fragment key={i}>
                <span aria-hidden="true"> / </span>
                {i === breadcrumb.length - 1 ? (
                  <span aria-current="page">{crumb.label}</span>
                ) : (
                  <Link to={crumb.to}>{crumb.label}</Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        <span className="page-hero__label">{label}</span>
        <h1 className="page-hero__title">
          {title}{' '}
          {highlight && <span className="page-hero__highlight">{highlight}</span>}
        </h1>
        <p className="page-hero__subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHero;
