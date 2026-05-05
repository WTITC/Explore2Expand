import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Media() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }} className="section-padding bg-light-alt">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="heading-xl">Media & <span className="gold-gradient-text">Recognition</span></h1>
          <p className="text-lg text-muted" style={{ maxWidth: '700px', margin: '1rem auto' }}>
            Press coverage, awards, and launch events.
          </p>
        </motion.div>
        <div className="segments-grid">
          {[1, 2, 3, 4].map((item) => (
            <motion.div key={item} className="segment-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} transition={{ delay: item * 0.1 }}>
              <h3 className="heading-sm" style={{ marginBottom: '1rem' }}>Press Release 2026</h3>
              <p className="text-muted">Featured in top media outlets for enabling local entrepreneurs to scale globally.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
