import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe2, Network, ShieldCheck } from 'lucide-react';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function Leadership() {
  return (
    <div className="page-content" style={{ paddingTop: '100px', backgroundColor: 'var(--white)' }}>
      {/* Hero Header */}
      <section className="section-padding bg-light-alt" style={{ paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn}>
            <span style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Leadership</span>
            <h1 className="heading-xl" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>Sundeep Kumar <span className="gold-gradient-text">Makthala</span></h1>
            <p className="text-xl text-muted" style={{ maxWidth: '800px', margin: '0 auto', fontWeight: 500 }}>
              Globally recognized technology leader, entrepreneur, and innovation ecosystem architect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Image Side */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.1 }} 
              variants={fadeIn} 
              style={{ flex: '1 1 400px', position: 'sticky', top: '120px' }}
            >
              <div className="bento-card" style={{ padding: '0.5rem', background: 'var(--white)', border: '1px solid rgba(226, 180, 79, 0.3)', boxShadow: '0 25px 50px rgba(6, 14, 36, 0.08)' }}>
                <div style={{ overflow: 'hidden', borderRadius: '1rem', aspectRatio: '4/5' }}>
                  <img 
                    src="/assets/sundeep.jpg" 
                    alt="Sundeep Kumar Makthala" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="hover-zoom"
                  />
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                <div className="segment-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <Globe2 size={28} className="accent-color" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)' }}>60+ Countries</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Global Presence</p>
                </div>
                <div className="segment-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <Award size={28} className="accent-color" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-dark)' }}>UAE Golden Visa</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Palace-Endorsed</p>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, amount: 0.1 }} 
              variants={staggerContainer} 
              style={{ flex: '1.5 1 600px' }}
            >
              <motion.div variants={fadeIn} style={{ marginBottom: '2rem' }}>
                <p className="text-lg text-dark" style={{ lineHeight: 1.8, fontSize: '1.15rem' }}>
                  <strong>Sundeep Kumar Makthala</strong> is a globally recognized technology leader, entrepreneur, and innovation ecosystem architect from Telangana, India. He is known for building large-scale platforms that connect startups, enterprises, governments, and young talent across the world.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="bento-card" style={{ padding: '2rem', marginBottom: '2.5rem', background: 'var(--panel-bg)' }}>
                <h3 className="heading-sm" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Network size={20} className="accent-color" /> Founder & Chairman
                </h3>
                <p className="text-muted" style={{ lineHeight: 1.7 }}>
                  He is the Founder and Chairman of T-Consult, T-CHiP (Telangana Center for Human Innovation & Progress), WTITC (World Telugu IT Council), TITA (Telangana Information Technology Association), MSLV, Voice of Digithon, ROBOTHON, ExpandME, Explore2Expand, and MAKTHALA®️ (Global Personal Brand & Innovation Identity).
                </p>
              </motion.div>

              <motion.p variants={fadeIn} className="text-muted" style={{ lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                Sundeep Kumar Makthala has established a strong global presence across more than 60 countries, creating connections between thousands of companies, innovators, and leaders. He actively participates in international forums, global summits, and innovation platforms, representing Indian talent on the global stage and promoting cross-border collaboration in emerging technologies.
              </motion.p>

              <motion.p variants={fadeIn} className="text-muted" style={{ lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                His vision focuses on building ecosystems rather than just companies, with the core idea of connecting people, technology, and opportunities globally. His mission is to empower students with real-world skills, help startups scale internationally, create employment opportunities, and promote ethical and responsible use of technology.
              </motion.p>

              <motion.p variants={fadeIn} className="text-muted" style={{ lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                Through his initiatives, he has contributed significantly to startup development, workforce growth, innovation in emerging technologies, and youth empowerment. His work also includes leading global movements that promote digital peace and ethical technology practices.
              </motion.p>

              <motion.div variants={fadeIn} className="segment-card" style={{ padding: '2rem', marginBottom: '2.5rem', borderLeft: '4px solid var(--accent)' }}>
                <h3 className="heading-sm" style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} className="accent-color" /> Global Recognition
                </h3>
                <p className="text-dark" style={{ lineHeight: 1.6, fontWeight: 500 }}>
                  He has been honored with the prestigious UAE Golden Visa (Palace-endorsed) in recognition of his global contributions to technology, innovation, and leadership.
                </p>
              </motion.div>

              <motion.p variants={fadeIn} className="text-lg text-dark" style={{ lineHeight: 1.8, fontSize: '1.15rem', fontStyle: 'italic', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2rem' }}>
                Sundeep Kumar Makthala is widely regarded as a global connector, ecosystem builder, and visionary leader who continues to drive innovation, collaboration, and impact across industries and countries.
              </motion.p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
