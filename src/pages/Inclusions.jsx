import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };

const inclusions = [
  {
    number: '01',
    category: 'Logistics & Access',
    items: [
      { title: 'Visa Fee Covered', desc: 'No hidden charges. Your entire visa application cost is included in the Access Pass.' },
      { title: 'End-to-End Visa Support', desc: 'The WTITC team manages the full documentation process. You just bring your documents and show up.' },
      { title: 'VIP Summit Entry', desc: 'Guaranteed access to ASEAN & AI Summit conferences — passes that normally cost more on their own.' },
      { title: 'Official Delegate Badge', desc: 'Walk into every room as a recognized, credentialed delegate — not a visitor.' },
    ],
  },
  {
    number: '02',
    category: 'Business & Networking',
    items: [
      { title: 'Market Analysis Report', desc: 'A detailed, Singapore-specific trade and market dynamics report prepared for you.' },
      { title: 'Country Ecosystem Guide', desc: 'A breakdown of the business environment, key sectors, and local regulations.' },
      { title: 'E2E Delegate Network', desc: 'Permanent digital access to the full E2E global delegate community after the mission.' },
      { title: 'WTITC Membership', desc: 'You become part of the World Telugu IT Council network — with everything that comes with it.' },
    ],
  },
  {
    number: '03',
    category: 'Credentials & Recognition',
    items: [
      { title: 'International Participation Certificate', desc: 'An official WTITC-issued certificate that carries real credibility on any global stage.' },
      { title: 'T-Hub Internship Certificate', desc: 'For students — a 1-month equivalent WTITC internship certification via the T-Hub Initiative.' },
      { title: 'Priority Access to Future Missions', desc: 'First in line for every future WTITC international delegation before public release.' },
    ],
  },
];

export default function Inclusions() {
  return (
    <div style={{ paddingTop: '90px', background: 'var(--white)' }}>

      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--panel-border)', paddingBottom: '0' }}>
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
              What's Included
            </p>
            <h1 className="heading-xl" style={{ maxWidth: '720px', lineHeight: 1.1 }}>
              Everything inside your Access Pass.
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '640px', lineHeight: 1.7 }}>
              Not a list of vague promises. Here is exactly what you get — broken down, with no fine print.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Numbered inclusion categories */}
      {inclusions.map((cat, ci) => (
        <section key={ci} style={{ borderBottom: '1px solid var(--panel-border)', background: ci % 2 === 0 ? 'var(--white)' : 'var(--bg-alt)' }}>
          <div className="container" style={{ padding: '5rem 1.5rem' }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '3rem', alignItems: 'start' }}>

              {/* Category label */}
              <div className="inclusions-label-sticky">
                <span style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', fontFamily: 'Outfit', fontWeight: 900, color: 'var(--panel-border)', lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>
                  {cat.number}
                </span>
                <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.2 }}>
                  {cat.category}
                </h2>
              </div>

              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {cat.items.map((item, ii) => (
                  <div key={ii} style={{ padding: '1.75rem 0', borderBottom: ii < cat.items.length - 1 ? '1px solid var(--panel-border)' : 'none' }}>
                    <h3 style={{ fontFamily: 'Outfit', fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 style={{ fontFamily: 'Outfit', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>
              Ready to claim your pass?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Limited seats — 21–24 May 2026, Singapore.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Link to="/segments" className="btn btn-outline btn-lg" style={{ marginRight: '1rem' }}>Who Is This For?</Link>
            <a href="https://bit.ly/explore2expand" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">Book Access Pass <ArrowUpRight size={18} /></a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
