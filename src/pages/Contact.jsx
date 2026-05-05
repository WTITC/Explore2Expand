import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Contact() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '80vh' }} className="section-padding">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="heading-xl">Get in <span className="blue-gradient-text">Touch</span></h1>
          <p className="text-lg text-muted" style={{ maxWidth: '700px', margin: '1rem auto' }}>
            Join a program, partner with us, or send a corporate enquiry.
          </p>
        </motion.div>
        <motion.div className="bento-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn} style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Name</label>
              <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '0.8rem', border: '1px solid var(--panel-border)', background: 'var(--white)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
              <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '1rem', borderRadius: '0.8rem', border: '1px solid var(--panel-border)', background: 'var(--white)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
              <textarea placeholder="How can we help?" rows="4" style={{ width: '100%', padding: '1rem', borderRadius: '0.8rem', border: '1px solid var(--panel-border)', background: 'var(--white)' }}></textarea>
            </div>
            <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>Send Message</button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
