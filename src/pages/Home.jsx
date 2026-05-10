import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Ship, Building, Award, Plane, Phone, ArrowUpRight, Globe, Target, TrendingUp, Handshake, Quote } from 'lucide-react';
import { partners } from '../data/partners';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

// ── Standalone video player component (hooks must live in a real component) ──
function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else          { v.pause(); setIsPlaying(false); }
  };

  return (
    <div
      onClick={togglePlay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative', flexShrink: 0, cursor: 'pointer',
        width: 'min(340px, 90vw)', aspectRatio: '9/16', maxHeight: '70vh',
        borderRadius: '1.5rem', overflow: 'hidden',
        boxShadow: '0 30px 70px rgba(0,0,0,0.55)',
        border: '2px solid rgba(226,180,79,0.3)',
        background: '#000',
      }}
    >
      <video
        ref={videoRef}
        src="/assets/cepa-video.mp4"
        loop playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(6,14,36,0.75) 0%, transparent 55%)',
        pointerEvents: 'none',
      }} />

      {/* Play / Pause button — visible when hovered or paused */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: (isHovered || !isPlaying) ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: '64px', height: '64px',
          background: 'rgba(226,180,79,0.92)', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(226,180,79,0.5)',
          transform: isHovered ? 'scale(1.12)' : 'scale(1)',
          transition: 'transform 0.25s ease',
        }}>
          {isPlaying
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="#060e24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="#060e24"><polygon points="5,3 19,12 5,21"/></svg>
          }
        </div>
      </div>

      {/* Instagram badge — ONLY this opens Instagram */}
      <a
        href="https://www.instagram.com/reel/DXWUYAkEzRU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
        target="_blank" rel="noopener noreferrer"
        onClick={e => e.stopPropagation()}
        style={{
          position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)', color: 'white',
          padding: '0.4rem 1rem', borderRadius: '999px',
          fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap',
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          textDecoration: 'none', zIndex: 10, transition: 'background 0.25s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(226,180,79,0.3)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.65)'; }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>
        View on Instagram
      </a>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const galleryImages = [
    '/assets/gallery1.jpeg',
    '/assets/gallery2.jpeg',
    '/assets/gallery3.jpeg',
    '/assets/gallery4.jpeg',
    '/assets/gallery5.jpeg',
    '/assets/gallery6.jpeg',
    '/assets/gallery7.jpeg',
    '/assets/moment4.jpg',
    '/assets/moment5.jpg',
    '/assets/moment6.jpg',
    '/assets/moment7.jpg',
    '/assets/moment8.jpg',
    '/assets/moment9.jpg',
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* High-Impact Hero Section */}
      <section className="hero-section" style={{ background: 'var(--white)', paddingBottom: '2rem' }}>
        <div className="hero-glow"></div>
        <div className="container hero-content" style={{ textAlign: 'center' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Auto-cycling Banner Carousel */}
            {(() => {
              const banners = [
                { src: '/assets/banner1.png', mobileSrc: '/assets/banner1-mobile.png', href: 'https://bit.ly/explore2expand', clickable: true },
                { src: '/assets/banner2.png', mobileSrc: '/assets/banner2-mobile.png', href: null, clickable: false },
              ];
              const [active, setActive] = React.useState(0);
              React.useEffect(() => {
                const timer = setInterval(() => setActive(prev => (prev + 1) % banners.length), 3000);
                return () => clearInterval(timer);
              }, []);
              return (
                <motion.div variants={fadeIn} style={{ position: 'relative', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', marginBottom: '3rem', width: '100%', aspectRatio: 'auto', background: '#fff' }}>
                  {banners.map((b, i) => (
                    b.clickable
                      ? <a key={i} href={b.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block', position: i === 0 ? 'relative' : 'absolute', inset: 0, opacity: active === i ? 1 : 0, transition: 'opacity 0.8s ease', zIndex: active === i ? 2 : 1 }}>
                          <picture>
                            <source media="(max-width: 768px)" srcSet={b.mobileSrc} />
                            <img src={b.src} alt={`Banner ${i+1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                          </picture>
                        </a>
                      : <div key={i} style={{ display: 'block', position: i === 0 ? 'relative' : 'absolute', inset: 0, opacity: active === i ? 1 : 0, transition: 'opacity 0.8s ease', zIndex: active === i ? 2 : 1 }}>
                          <picture>
                            <source media="(max-width: 768px)" srcSet={b.mobileSrc} />
                            <img src={b.src} alt={`Banner ${i+1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                          </picture>
                        </div>
                  ))}
                  {/* Dot indicators */}
                  <div style={{ position: 'absolute', bottom: '16px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
                    {banners.map((_, i) => (
                      <button key={i} onClick={() => setActive(i)} style={{ width: active === i ? '28px' : '10px', height: '8px', borderRadius: '4px', background: active === i ? 'var(--accent)' : 'rgba(255,255,255,0.6)', border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0 }} />
                    ))}
                  </div>
                </motion.div>
              );
            })()}

            <motion.div className="hero-ctas" variants={fadeIn} style={{ justifyContent: 'center' }}>
              <a href="https://bit.ly/explore2expand" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
                Book Access Pass <ArrowUpRight size={20} />
              </a>
              <Link to="/program" className="btn btn-outline btn-lg">
                See the Program
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers Bar */}
      <section style={{ background: 'var(--primary)', color: 'white', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            {[
              { number: '4', label: 'Action-Packed Days' },
              { number: '50+', label: 'Global Leaders & HNIs' },
              { number: '5+', label: 'Embassies & Trade Bodies' },
              { number: '1', label: 'World-Class Innovation Hub' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)', fontWeight: '800', fontFamily: 'Outfit', color: 'var(--accent)', lineHeight: 1 }}>{stat.number}</div>
                <div style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', fontWeight: '500', opacity: 0.85, marginTop: '0.5rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* What You Will Experience Grid */}
      <section className="section-padding bg-light-alt">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 className="heading-lg">What You Will <span className="gold-gradient-text">Experience</span></h2>
            <p className="text-lg text-muted" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
              This isn't a sightseeing trip. Every hour is designed to open doors that normally take years to unlock.
            </p>
          </motion.div>

          <motion.div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div className="bento-card" style={{ padding: '2.5rem', textAlign: 'left' }} variants={fadeIn}>
              <Users size={36} className="accent-color" style={{ marginBottom: '1.5rem' }} />
              <h3 className="heading-sm">Business & Networking</h3>
              <p className="text-muted" style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>Meet business leaders, connect with HNIs & investors, and get recognized globally through curated networking events.</p>
            </motion.div>
            <motion.div className="bento-card" style={{ padding: '2.5rem', textAlign: 'left' }} variants={fadeIn}>
              <Globe size={36} className="accent-color" style={{ marginBottom: '1.5rem' }} />
              <h3 className="heading-sm">Government & Global Access</h3>
              <p className="text-muted" style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>Visit embassies, chambers of commerce, and Singapore government bodies to build legitimate trade relationships.</p>
            </motion.div>
            <motion.div className="bento-card" style={{ padding: '2.5rem', textAlign: 'left' }} variants={fadeIn}>
              <Ship size={36} className="accent-color" style={{ marginBottom: '1.5rem' }} />
              <h3 className="heading-sm">Export & Market Expansion</h3>
              <p className="text-muted" style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>Explore export opportunities firsthand, gain market access insights, and build international partnerships that last.</p>
            </motion.div>
            <motion.div className="bento-card" style={{ padding: '2.5rem', textAlign: 'left' }} variants={fadeIn}>
              <Award size={36} className="accent-color" style={{ marginBottom: '1.5rem' }} />
              <h3 className="heading-sm">Events & Summits</h3>
              <p className="text-muted" style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>Attend ASEAN & AI Summits, join curated business & tech events, and participate in innovation showcases.</p>
            </motion.div>
            <motion.div className="bento-card" style={{ padding: '2.5rem', textAlign: 'left' }} variants={fadeIn}>
              <Building size={36} className="accent-color" style={{ marginBottom: '1.5rem' }} />
              <h3 className="heading-sm">Industry Exposure</h3>
              <p className="text-muted" style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>Discover top innovation hubs, visit cutting-edge tech campuses, and experience world-class R&D facilities up close.</p>
            </motion.div>
            <motion.div className="bento-card" style={{ padding: '2.5rem', textAlign: 'left' }} variants={fadeIn}>
              <Plane size={36} className="accent-color" style={{ marginBottom: '1.5rem' }} />
              <h3 className="heading-sm">Lifestyle Experience</h3>
              <p className="text-muted" style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>Combine business with culture. Singapore's vibrant lifestyle makes this a journey worth bringing the family along for.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── International Collaboration Video Section ── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #060e24 0%, #0d1b3e 100%)', overflow: 'hidden' }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <span style={{
              display: 'inline-block',
              background: 'rgba(226,180,79,0.15)',
              color: '#E2B44F',
              border: '1px solid rgba(226,180,79,0.35)',
              borderRadius: '999px',
              padding: '0.4rem 1.2rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>Featured</span>
            <h2 className="heading-lg" style={{ color: '#fff' }}>
              International <span className="gold-gradient-text">Collaboration</span>
            </h2>
            <p style={{ marginTop: '0.75rem', color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: '560px', margin: '0.75rem auto 0' }}>
              Watch how Explore2Expand is bridging borders and building global partnerships.
            </p>
          </motion.div>

          {/* Two-column: video + CTA text */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '3rem',
              justifyContent: 'center',
            }}
          >
            {/* ── Interactive Video Player ── */}
            <VideoPlayer />


            {/* CTA text panel */}
            <div style={{ maxWidth: '380px', color: '#fff', textAlign: 'left' }}>
              <div style={{
                width: '50px', height: '4px',
                background: 'linear-gradient(90deg, #E2B44F, #D4AF37)',
                borderRadius: '2px', marginBottom: '1.5rem',
              }} />
              <h3 style={{ fontFamily: 'Outfit', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, color: '#ffffff' }}>
                CEPA &amp; Global<br/>Partnership Video
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                Featuring <strong style={{ color: '#E2B44F' }}>Sundeep Kumar Makthala</strong> — see how E2E is driving CEPA-powered international trade and global business collaborations.
              </p>

              {/* Click prompt */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(226,180,79,0.12)',
                border: '1px dashed rgba(226,180,79,0.45)',
                borderRadius: '1rem',
                padding: '1rem 1.5rem',
                marginBottom: '1.75rem',
              }}>
                <span style={{ fontSize: '1.5rem' }}>👆</span>
                <div>
                <p style={{ color: '#E2B44F', fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>Click the video to play / pause</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', margin: 0 }}>tap the Instagram badge to open the reel</p>
                </div>
              </div>

              <a
                href="https://www.instagram.com/reel/DXWUYAkEzRU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  background: 'linear-gradient(135deg, #E2B44F, #D4AF37)',
                  color: '#060e24',
                  padding: '0.85rem 2rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 10px 30px rgba(226,180,79,0.35)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                Watch Full Reel
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Scrolling Photo Gallery */}
      <section style={{ padding: '3rem 0', background: 'var(--white)', overflow: 'hidden' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 className="heading-lg">Moments That <span className="gold-gradient-text">Matter</span></h2>
          <p className="text-muted" style={{ marginTop: '0.5rem' }}>Snapshots from our journey of global connections.</p>
        </motion.div>


        <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          {/* Fade edges */}
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(90deg, var(--white), transparent)', zIndex: 2, pointerEvents: 'none' }}></div>
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(270deg, var(--white), transparent)', zIndex: 2, pointerEvents: 'none' }}></div>

          {/* Scrolling track — duplicated for seamless loop */}
          <div className="gallery-track">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="gallery-set">
                {galleryImages.map((src, i) => (
                  <div
                    key={`${setIdx}-${i}`}
                    className="gallery-item"
                    onClick={() => navigate(`/photo/${i}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      src={src}
                      alt={`Event moment ${i + 1}`}
                      style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '1rem', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', flexShrink: 0, display: 'block', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(226,180,79,0.3)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Partners Say */}
      <section className="section-padding bg-light">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-xl">What Our Partners Say</h2>
            <p className="subtitle" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>Real success stories from our global network.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem 2rem', marginTop: '4rem' }}>
            {partners.map((partner, index) => {
              const shortText = partner.text.substring(0, 100) + '...';
              
              return (
                <Link to={`/partner/${index}`} key={index} style={{ textDecoration: 'none', display: 'block' }}>
                  <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                    style={{ background: 'var(--white)', borderRadius: '1.5rem', padding: '0 2rem 2rem 2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '2px solid #F3E5AB', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', cursor: 'pointer', transition: 'all 0.3s ease', height: '100%' }}
                    whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(212, 175, 55, 0.15)' }}
                  >
                    <img src={partner.image} alt={partner.name} style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #D4AF37', boxShadow: '0 8px 20px rgba(212, 175, 55, 0.25)', marginTop: '-45px', backgroundColor: 'white' }} />
                    
                    <div style={{ marginTop: '1rem', marginBottom: '1rem', color: '#D4AF37' }}>
                      <Quote size={30} fill="#D4AF37" strokeWidth={0} style={{ transform: 'rotateX(180deg) rotateY(180deg)', opacity: 0.8 }} />
                    </div>
                    
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-dark)', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1, fontStyle: 'italic' }}>
                      "{shortText}"
                      <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'block', marginTop: '0.5rem', fontStyle: 'normal' }}>
                        Read more
                      </span>
                    </p>
                    <div>
                      <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '0.2rem', fontFamily: 'Inter' }}>{partner.name}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>{partner.title}</p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="cta-grid-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="heading-xl" style={{ marginBottom: '1rem', letterSpacing: '-0.03em', color: 'white' }}>Unlock Global Growth & Opportunity</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.2rem', marginBottom: '3rem' }}>Expand your business on a global stage. 21–24 May 2026, Singapore.</p>
            <div className="cta-action-group" style={{ marginTop: '1rem' }}>
              <a href="https://bit.ly/explore2expand" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
                Book Access Pass <ArrowUpRight size={20} />
              </a>
              <a href="tel:+918019577575" className="contact-link" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
                <Phone size={22} className="accent-color" /> <strong>+91 80195 75775</strong>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
