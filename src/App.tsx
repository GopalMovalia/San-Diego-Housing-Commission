import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIAssistantWidget from './components/AIAssistantWidget';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import About from './pages/About';
import News from './pages/News';
import ContactForm from './components/ContactForm';
import './App.css';

// Contact page wrapper
const ContactPage = () => (
  <div style={{ paddingTop: 'var(--header-height)' }}>
    <div style={{
      background: 'linear-gradient(135deg, var(--color-primary) 0%, hsl(196,78%,42%) 100%)',
      padding: 'var(--space-16) 0 var(--space-12)',
    }}>
      <div className="container" style={{ color: 'white' }}>
        <span style={{
          display: 'inline-block',
          background: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: 'var(--radius-full)',
          padding: '0.375rem 1rem',
          fontSize: 'var(--text-xs)',
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: 'var(--space-4)',
        }}>Contact Us</span>
        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          marginBottom: 'var(--space-3)',
          letterSpacing: '-0.03em',
        }}>
          Get in Touch with <span style={{ color: 'hsl(196,100%,75%)' }}>SDHC</span>
        </h1>
        <p style={{ fontSize: 'var(--text-lg)', opacity: 0.85, maxWidth: '55ch' }}>
          Our team is ready to help. Reach out about housing programs, applications, or general inquiries.
        </p>
      </div>
    </div>
    <ContactForm />
  </div>
);

// 404 Not Found
const NotFound = () => (
  <div style={{
    minHeight: '100svh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    textAlign: 'center',
    paddingTop: 'var(--header-height)',
    padding: '2rem',
  }}>
    <div style={{ fontSize: '5rem', lineHeight: 1 }}>🏠</div>
    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em' }}>
      Page Not Found
    </h1>
    <p style={{ color: 'var(--color-text-secondary)', maxWidth: '45ch', fontSize: '1.125rem' }}>
      The page you're looking for doesn't exist. Let's get you back home.
    </p>
    <Link to="/" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
      Return to Home
    </Link>
  </div>
);

const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/housing-assistance" element={<Programs />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/housing-assistance/:id" element={<ProgramDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <AIAssistantWidget />
    </BrowserRouter>
  );
}

export default App;
