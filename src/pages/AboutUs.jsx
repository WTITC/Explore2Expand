import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function AboutUs() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }} className="section-padding bg-light-alt">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="heading-xl">About <span className="gold-gradient-text">Us</span></h1>
          <p className="text-lg text-muted" style={{ maxWidth: '700px', margin: '1rem auto' }}>
            Our Story, Vision, and Leadership driving global business connectivity.
          </p>
        </motion.div>
        <motion.div className="bento-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '3rem' }}>
          <h2 className="heading-md" style={{ marginBottom: '1rem' }}>Empowering Global Growth</h2>
          <p className="text-muted" style={{ lineHeight: 1.8 }}>
            Explore2Expand is dedicated to creating bridges between local entrepreneurs and global opportunities. Through strategic support and curated missions, we unlock doors that accelerate your business expansion.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
