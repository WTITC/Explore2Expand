import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Services() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }} className="section-padding">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="heading-xl">Our <span className="blue-gradient-text">Services</span></h1>
          <p className="text-lg text-muted" style={{ maxWidth: '700px', margin: '1rem auto' }}>
            Comprehensive support for your global expansion journey.
          </p>
        </motion.div>
        <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {['Business Expansion Abroad', 'Export Growth Support', 'Investor Connect', 'Student Global Exposure', 'International Internships', 'Delegation Programs', 'Branding & PR Support'].map((service, index) => (
            <motion.div key={index} className="bento-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} transition={{ delay: index * 0.1 }}>
              <h3 className="heading-sm">{service}</h3>
              <p className="text-muted" style={{ marginTop: '0.5rem' }}>Premium tailored solutions to help you achieve your goals in {service.toLowerCase()}.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
