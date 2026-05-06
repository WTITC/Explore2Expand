import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Pages
import Home from './pages/Home';
import ProgramDetails from './pages/ProgramDetails';
import Inclusions from './pages/Inclusions';
import Segments from './pages/Segments';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import SuccessStories from './pages/SuccessStories';
import PartnerStory from './pages/PartnerStory';
import Media from './pages/Media';
import Contact from './pages/Contact';
import Leadership from './pages/Leadership';

// World Map Navbar Background — CSS + SVG approach (reliable)
function NavWorldMap() {
  // City positions as % of a standard equirectangular world map (lon+180)/360, (90-lat)/180
  const cities = [
    { name: 'Hyderabad', left: '71.8%', top: '40.3%', gold: true  },
    { name: 'Singapore', left: '78.8%', top: '49.3%', gold: true  },
    { name: 'Dubai',     left: '65.4%', top: '36.0%', gold: false },
    { name: 'Mumbai',    left: '69.7%', top: '39.4%', gold: false },
    { name: 'London',    left: '49.9%', top: '21.4%', gold: false },
    { name: 'Tokyo',     left: '88.8%', top: '30.2%', gold: false },
    { name: 'New York',  left: '29.4%', top: '27.4%', gold: false },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      {/* World map image as background */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/World_map_-_low_resolution.svg/2560px-World_map_-_low_resolution.svg.png"
        alt=""
        style={{
          position: 'absolute',
          top: '50%', left: 0,
          width: '100%', height: 'auto',
          transform: 'translateY(-50%)',
          opacity: 0.18,
          filter: 'sepia(30%) hue-rotate(200deg)',
          pointerEvents: 'none',
        }}
      />
      {/* Animated city pings */}
      {cities.map((city, i) => (
        <div key={i} style={{ position: 'absolute', left: city.left, top: city.top, transform: 'translate(-50%, -50%)' }}>
          {/* Pulse ring */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: city.gold ? '24px' : '16px', height: city.gold ? '24px' : '16px',
            borderRadius: '50%',
            border: `1.5px solid ${city.gold ? 'rgba(212,175,55,0.7)' : 'rgba(59,130,246,0.5)'}`,
            animation: `cityPing ${1.8 + i * 0.3}s ease-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }} />
          {/* Core dot */}
          <div style={{
            width: city.gold ? '8px' : '5px', height: city.gold ? '8px' : '5px',
            borderRadius: '50%',
            background: city.gold ? '#D4AF37' : '#3b82f6',
            boxShadow: city.gold ? '0 0 8px 3px rgba(212,175,55,0.6)' : '0 0 6px 2px rgba(59,130,246,0.5)',
          }} />
          {/* Label for gold cities */}
          {city.gold && (
            <div style={{
              position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)',
              fontSize: '9px', fontWeight: 700, color: '#D4AF37',
              whiteSpace: 'nowrap', letterSpacing: '0.5px',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)',
            }}>{city.name}</div>
          )}
        </div>
      ))}
    </div>
  );
}




function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Shared Navbar
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'var(--primary)' : '';

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <NavWorldMap />
      
      <div className="container nav-container" style={{ position: 'relative', zIndex: 5 }}>
        <Link to="/" className="logo-link" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="/logo.png"
            alt="Explore2Expand Desktop Logo"
            className="navbar-logo-img logo-desktop"
          />
          <img
            src="/logo-mobile.png"
            alt="Explore2Expand Mobile Logo"
            className="navbar-logo-img logo-mobile"
          />
        </Link>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-dropdown">
            <span className="nav-dropdown-toggle" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>1. Atlas ▾</span>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-header">Foundation & Global Perspective</div>
              <Link to="/" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>The E2E Charter</Link>
              <Link to="/about" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Vision & Mandate</Link>
              <Link to="/about" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Global Landscape</Link>
              <Link to="/about" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Opportunity Cartography</Link>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-dropdown-toggle" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>2. Nexus ▾</span>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-header">Where journeys begin</div>
              <Link to="/program" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Mission Series</Link>
              <Link to="/program" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Program Tracks</Link>
              <Link to="/services" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Talent Pathways</Link>
              <Link to="/program" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Upcoming Cohorts</Link>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-dropdown-toggle" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>3. Passage ▾</span>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-header">Entering global markets</div>
              <Link to="/services" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Market Entry Corridors</Link>
              <Link to="/services" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Export Gateways</Link>
              <Link to="/services" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Alliance Frameworks</Link>
              <Link to="/services" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Delegation Pathways</Link>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-dropdown-toggle" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>4. Vanguard ▾</span>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-header">Leadership & growth</div>
              <Link to="/services" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Expansion Strategy</Link>
              <Link to="/services" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Branding</Link>
              <Link to="/success-stories" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Partnerships</Link>
              <Link to="/success-stories" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-dropdown-toggle" style={{ color: 'var(--text-dark)', fontWeight: 600 }}>5. Converge ▾</span>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-header">Action & collaboration</div>
              <Link to="/pricing" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Apply</Link>
              <Link to="/program" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Join Missions</Link>
              <Link to="/contact" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Partner</Link>
              <Link to="/contact" className="nav-dropdown-item" onClick={() => setMobileMenuOpen(false)}>Connect</Link>
            </div>
          </div>

          <a href="https://bit.ly/explore2expand" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm" style={{ boxShadow: '0 4px 15px rgba(226, 180, 79, 0.4)', marginLeft: '0.5rem' }} onClick={() => setMobileMenuOpen(false)}>
            Book Pass
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

// Shared Footer
function Footer() {
  return (
    <>
      <footer className="modern-footer" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '3rem', justifyContent: 'space-between' }}>
            
            <div style={{ flex: '1 1 250px' }}>
              <img src="/logo.png" alt="Explore2Expand" style={{ height: '70px', width: 'auto', objectFit: 'contain', marginBottom: '1.5rem' }} />
              <p className="text-muted" style={{ lineHeight: 1.6, marginBottom: '1rem' }}>
                An initiative organized by <strong>WTITC</strong> (World Telugu IT Council). Creating bridges between local entrepreneurs and global opportunities.
              </p>
            </div>

            <div style={{ flex: '1 1 150px' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontFamily: 'Outfit', fontWeight: 700 }}>Quick Links</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <Link to="/" className="text-muted" style={{ textDecoration: 'none' }}>Home</Link>
                <Link to="/about" className="text-muted" style={{ textDecoration: 'none' }}>About Us</Link>
                <Link to="/leadership" className="text-muted" style={{ textDecoration: 'none' }}>Leadership</Link>
                <Link to="/services" className="text-muted" style={{ textDecoration: 'none' }}>Services</Link>
                <Link to="/program" className="text-muted" style={{ textDecoration: 'none' }}>Programs</Link>
              </div>
            </div>

            <div style={{ flex: '1 1 150px' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontFamily: 'Outfit', fontWeight: 700 }}>Resources</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <Link to="/success-stories" className="text-muted" style={{ textDecoration: 'none' }}>Success Stories</Link>
                <Link to="/media" className="text-muted" style={{ textDecoration: 'none' }}>Media & Recognition</Link>
                <Link to="/faq" className="text-muted" style={{ textDecoration: 'none' }}>FAQ</Link>
                <Link to="/contact" className="text-muted" style={{ textDecoration: 'none' }}>Contact Us</Link>
              </div>
            </div>

            <div style={{ flex: '1 1 150px' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1.2rem', fontFamily: 'Outfit', fontWeight: 700 }}>Legal</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <Link to="#" className="text-muted" style={{ textDecoration: 'none' }}>Privacy Policy</Link>
                <Link to="#" className="text-muted" style={{ textDecoration: 'none' }}>Terms & Conditions</Link>
                <Link to="#" className="text-muted" style={{ textDecoration: 'none' }}>Refund Policy</Link>
              </div>
            </div>

          </div>
          
          <div style={{ borderTop: '1px solid var(--panel-border)', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <div className="footer-terms text-xs text-muted" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span>Important: Pass fee is non-refundable.</span>
              <span>&bull;</span>
              <span>Visa rejections require reapplication at the applicant's risk.</span>
            </div>
            <div className="footer-copy text-xs text-muted">
              &copy; {new Date().getFullYear()} Explore2Expand. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Bubble */}
      <a href="https://wa.me/918019577575?text=Hi,%20I'm%20interested%20in%20the%20Explore2Expand%20Singapore%20Program" target="_blank" rel="noreferrer" className="whatsapp-float group" id="contact">
        <MessageCircle size={28} />
        <span className="tooltip">Chat with us</span>
      </a>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 200px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<ProgramDetails />} />
          <Route path="/inclusions" element={<Inclusions />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/partner/:id" element={<PartnerStory />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leadership" element={<Leadership />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
