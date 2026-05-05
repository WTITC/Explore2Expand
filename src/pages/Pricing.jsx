import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowUpRight } from 'lucide-react';

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };

export default function Pricing() {
  return (
    <div style={{ paddingTop: '90px', background: 'var(--white)' }}>

      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--panel-border)' }}>
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
              Pricing
            </p>
            <h1 className="heading-xl" style={{ maxWidth: '720px', lineHeight: 1.1 }}>
              One pass. Everything included.
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '580px', lineHeight: 1.7 }}>
              21–24 May 2026 &bull; Singapore &bull; Organized by WTITC
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing block */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--panel-border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '5rem', alignItems: 'start' }}>

            {/* Price */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div style={{ display: 'inline-block', background: '#e03131', color: 'white', padding: '0.35rem 1rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '2rem' }}>
                LIMITED LAUNCH OFFER
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontFamily: 'Outfit', fontSize: 'clamp(3.5rem, 10vw, 5rem)', fontWeight: 900, color: 'var(--primary)', lineHeight: 1 }}>&#8377;15,000</span>
                <span style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 500 }}>+ GST</span>
              </div>
              <p style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>&#8377;25,000 + GST</p>
              <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '2.5rem' }}>You save &#8377;10,000 on the launch price.</p>

              <div style={{ padding: '1rem 1.25rem', background: 'rgba(224,49,49,0.05)', borderLeft: '3px solid #e03131', borderRadius: '0 0.5rem 0.5rem 0', marginBottom: '2.5rem' }}>
                <strong style={{ color: '#e03131', display: 'block', marginBottom: '0.25rem' }}>Seats are limited.</strong>
                <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Once full, this price won't apply to the next batch.</span>
              </div>

              <a
                href="https://wa.me/918019577575?text=Hi,%20I'm%20interested%20in%20booking%20the%20E2E%20Access%20Pass"
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-lg btn-block"
              >
                Secure Your Seat — Chat With Us <ArrowUpRight size={20} />
              </a>
              <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Or call us: <a href="tel:+918019577575" style={{ color: 'var(--primary)', fontWeight: 700 }}>+91 80195 75775</a>
              </p>
            </motion.div>

            {/* What's included */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h3 style={{ fontFamily: 'Outfit', fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>
                What's Included
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  'Visa fee & complete visa documentation support',
                  'Entry to ASEAN & AI Summit conferences',
                  'Market analysis report for Singapore',
                  'Official WTITC participation certificate',
                  'Delegate badge & ecosystem guide',
                  'Access to E2E global delegate network',
                  'WTITC membership access',
                  'Priority access to future international missions',
                  'T-Hub internship certificate (students)',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.15rem' }} />
                    <span style={{ fontSize: '1rem', color: 'var(--text-dark)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ROI section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 style={{ fontFamily: 'Outfit', fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.75rem', lineHeight: 1.2 }}>
              Let's be straight about the money.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              If you tried to do this independently — sorting out visas, buying summit tickets separately, cold-calling your way into meetings with government offices — you'd easily be looking at <strong style={{ color: 'var(--primary)' }}>&#8377;50,000+</strong>. And that's before accounting for the months you'd waste trying.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              At <strong style={{ color: 'var(--primary)' }}>&#8377;15,000</strong>, you're not paying for a trip. You're buying access to a network that took WTITC years to build. The doors are already open — you just have to walk through them.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>
              Your only job? Show up ready to do business.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
