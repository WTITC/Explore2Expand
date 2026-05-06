import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };

const segments = [
  {
    id: 'business',
    tag: 'For You If',
    title: 'You run a business and you know the next move is global.',
    audience: 'Business Owners',
    benefits: [
      { label: 'Stop cold-emailing.', desc: 'Meet decision-makers face-to-face at curated networking sessions.' },
      { label: 'Test the market before you commit.', desc: 'Get a real, on-the-ground feel for Singapore before signing anything.' },
      { label: 'Build international brand presence.', desc: 'Show up as an official WTITC delegate — not a tourist.' },
      { label: 'Find customers you didn\'t know existed.', desc: 'New markets, new sectors, new revenue.' },
    ],
  },
  {
    id: 'startup',
    tag: 'For You If',
    title: 'You\'re building something and you need global backing.',
    audience: 'Startup Founders',
    benefits: [
      { label: 'Get in front of real investors.', desc: 'Connect with HNIs and angel investors in Singapore\'s ecosystem.' },
      { label: 'Understand what global investors actually look for.', desc: 'Not theory — real conversations with people who write cheques.' },
      { label: 'Test your pitch internationally.', desc: 'The feedback you get here is worth more than 6 months in a local incubator.' },
      { label: 'Walk away with real relationships.', desc: 'Not LinkedIn connections. Actual people who remember you.' },
    ],
  },
  {
    id: 'entrepreneur',
    tag: 'For You If',
    title: 'You know opportunities don\'t come to you — you go find them.',
    audience: 'Entrepreneurs',
    benefits: [
      { label: 'See how business actually works at the top.', desc: 'Get out of your local bubble and observe the global game firsthand.' },
      { label: 'Access summits that are normally invite-only.', desc: 'ASEAN & AI events with people who shape industries.' },
      { label: 'Build your global personal brand.', desc: 'Backed by WTITC credentials that carry weight internationally.' },
      { label: 'Come back with a real playbook.', desc: 'Not inspiration. Actionable frameworks for international growth.' },
    ],
  },
  {
    id: 'exporters',
    tag: 'For You If',
    title: 'Your products are ready for global markets. Are you?',
    audience: 'International Exporters',
    benefits: [
      { label: 'Stop guessing about international trade.', desc: 'Learn from the source — government bodies, chambers, and trade experts.' },
      { label: 'Cut out the middlemen.', desc: 'Shake hands with actual buyers and distributors.' },
      { label: 'See supply chains in motion.', desc: 'Understand how global trade is moving right now, not from a textbook.' },
      { label: 'Lock in cross-border partnerships.', desc: 'Deals that actually move product across borders.' },
    ],
  },
  {
    id: 'students',
    tag: 'Special Track',
    title: 'One month in Singapore. Real work. Real certificate.',
    audience: 'Students & Interns — T-Hub Initiative',
    note: true,
    benefits: [
      { label: 'Organize international business events.', desc: 'On the ground, in Singapore. Not simulated. Not theoretical.' },
      { label: 'Work directly with HNIs and leaders.', desc: 'Not shadowing. Contributing to real outcomes.' },
      { label: 'Coordinate expansion tours.', desc: 'You become the logistics backbone of the E2E mission.' },
      { label: 'Official WTITC certificate.', desc: 'A credential that actually means something on a global CV.' },
    ],
  },
];

export default function Segments() {
  return (
    <div style={{ paddingTop: '90px', background: 'var(--white)' }}>

      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--panel-border)' }}>
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
              Is This For Me?
            </p>
            <h1 className="heading-xl" style={{ maxWidth: '780px', lineHeight: 1.1 }}>
              Who this program was built for.
            </h1>
            <p style={{ marginTop: '1.5rem', fontSize: '1.15rem', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.7 }}>
              E2E isn't for everyone. If global growth is genuinely on your roadmap — read on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Segments */}
      {segments.map((seg, i) => (
        <motion.section
          key={seg.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          style={{
            borderBottom: '1px solid var(--panel-border)',
            background: i % 2 === 0 ? 'var(--white)' : 'var(--bg-alt)',
          }}
        >
          <div className="container" style={{ padding: '5rem 1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '4rem', alignItems: 'start' }}>

              {/* Left: Audience intro */}
              <div>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: seg.note ? '#e03131' : 'var(--accent)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  {seg.tag}
                </p>
                <h2 style={{ fontFamily: 'Outfit', fontSize: 'clamp(1.3rem, 3.5vw, 2rem)', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.25, marginBottom: '1.25rem' }}>
                  {seg.title}
                </h2>
                <div style={{ display: 'inline-block', background: seg.note ? 'rgba(224,49,49,0.08)' : 'rgba(212,175,55,0.1)', color: seg.note ? '#e03131' : 'var(--accent)', padding: '0.4rem 1rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 700 }}>
                  {seg.audience}
                </div>
                {seg.note && (
                  <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, fontStyle: 'italic' }}>
                    Ideal candidates: self-driven, motivated, and outgoing individuals ready to step into the real world.
                  </p>
                )}
              </div>

              {/* Right: Benefits */}
              <div>
                {seg.benefits.map((b, bi) => (
                  <div key={bi} style={{ paddingBottom: bi < seg.benefits.length - 1 ? '1.5rem' : 0, marginBottom: bi < seg.benefits.length - 1 ? '1.5rem' : 0, borderBottom: bi < seg.benefits.length - 1 ? '1px solid var(--panel-border)' : 'none' }}>
                    <p style={{ fontFamily: 'Outfit', fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.35rem' }}>{b.label}</p>
                    <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                ))}
                <a href="https://bit.ly/explore2expand" target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg" style={{ marginTop: '2rem' }}>
                  {seg.note ? 'Apply Now' : 'Book Access Pass'} <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* Footer CTA */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 style={{ fontFamily: 'Outfit', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
              Not sure which track fits you?
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Chat with us directly. We'll tell you honestly whether E2E is the right move for where you are right now.
            </p>
            <a href="https://wa.me/918019577575?text=Hi,%20I'd%20like%20to%20know%20more%20about%20the%20E2E%20Singapore%20Mission" target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">
              WhatsApp Us <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
