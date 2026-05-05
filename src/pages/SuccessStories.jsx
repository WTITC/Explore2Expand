import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { partners } from '../data/partners';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function SuccessStories() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }} className="section-padding bg-light">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 className="heading-xl">What Our <span className="blue-gradient-text">Partners Say</span></h1>
          <p className="text-lg text-muted" style={{ maxWidth: '700px', margin: '1rem auto' }}>
            Hear directly from our partners about their experiences, achievements, and the global milestones reached through Explore2Expand.
          </p>
        </motion.div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', paddingBottom: '4rem' }}>
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} 
              style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--white)', borderRadius: '1.5rem', padding: '0 3rem 3rem 3rem', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '2px solid #F3E5AB', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}
            >
              <img src={partner.image} alt={partner.name} style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #D4AF37', boxShadow: '0 8px 20px rgba(212, 175, 55, 0.25)', marginTop: '-65px', backgroundColor: 'white' }} />
              
              <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem', color: '#D4AF37' }}>
                <Quote size={56} fill="#D4AF37" strokeWidth={0} style={{ transform: 'rotateX(180deg) rotateY(180deg)' }} />
              </div>
              
              <p style={{ fontSize: '1.2rem', color: 'var(--text-dark)', lineHeight: 1.8, fontStyle: 'italic', fontWeight: 500, marginBottom: '2.5rem' }}>
                "{partner.text}"
              </p>
              
              <div style={{ marginTop: 'auto' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Inter' }}>{partner.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '1.05rem', marginTop: '0.4rem' }}>{partner.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
