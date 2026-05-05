import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };

const highlights = [
  'Meet Business Leaders & Entrepreneurs',
  'Connect with HNIs & Global Investors',
  'Visit Embassies & Trade Chambers',
  'Meet Singapore Government Bodies',
  'Attend ASEAN & AI Summits',
  'Explore Export Opportunities',
  'Discover Innovation Hubs & Top Companies',
  'Participate in Innovation Showcases',
];

const itinerary = [
  {
    day: 'Day 01',
    title: 'Arrival & Networking',
    desc: 'Check into your premium accommodation. The evening opens with a welcome dinner and ice-breaking session alongside fellow delegates, mentors, and international business leaders.',
  },
  {
    day: 'Day 02',
    title: 'Government & Business Visits',
    desc: 'Visit Singapore government bodies, embassies, and trade chambers. Structured face-to-face sessions with HNIs and investors designed to start real partnerships — not just exchange cards.',
  },
  {
    day: 'Day 03',
    title: 'Global Summits & Masterclasses',
    desc: 'VIP access to ASEAN & AI Summits. Closed-door masterclasses, curated business events, and innovation showcases led by global industry leaders.',
  },
  {
    day: 'Day 04',
    title: 'Innovation Hubs & Closing',
    desc: "Tour Singapore's top innovation campuses and R&D facilities. The mission wraps with an official certification ceremony and farewell gala.",
  },
];

export default function ProgramDetails() {
  return (
    <div style={{ paddingTop: '90px', background: 'var(--white)' }}>

      {/* Hero strip */}
      <section style={{ borderBottom: '1px solid var(--panel-border)', paddingBottom: '0' }}>
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
              World Telugu IT Council (WTITC) Presents
            </p>
            <h1 className="heading-xl" style={{ maxWidth: '820px' }}>
              The E2E Singapore<br />Business Mission
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', marginTop: '2.5rem', borderTop: '1px solid var(--panel-border)', paddingTop: '2rem' }}>
              {[
                { label: 'Dates', value: '21–24 May 2026' },
                { label: 'Location', value: 'Singapore' },
                { label: 'Duration', value: '4 Days' },
                { label: 'Format', value: 'Delegate Mission' },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{item.label}</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'Outfit', color: 'var(--primary)' }}>{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About para + highlights */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--panel-border)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '4rem', alignItems: 'start' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              What this mission<br />is actually about
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Explore2Expand is not a sightseeing tour. Every hour of the 4-day program is engineered to open doors — with government bodies, investors, trade organizations, and global business leaders — that normally take years to reach on your own.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              WTITC's network does the heavy lifting. You show up, engage, and leave with a real international footprint.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h3 style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Tour Highlights</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.85rem 0', borderBottom: '1px solid var(--panel-border)', fontSize: '1rem', color: 'var(--text-dark)' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }}></span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Day-by-day itinerary — timeline style */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-alt)', borderBottom: '1px solid var(--panel-border)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ marginBottom: '3.5rem' }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Day by Day</p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)' }}>What to expect</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '0', borderTop: '2px solid var(--primary)' }}>
            {itinerary.map((d, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                style={{ padding: '2.5rem 2rem', borderRight: i < itinerary.length - 1 ? '1px solid var(--panel-border)' : 'none', background: i % 2 === 0 ? 'var(--white)' : 'var(--bg-alt)' }}>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--accent)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>{d.day}</div>
                <h3 style={{ fontFamily: 'Outfit', fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>{d.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* T-Hub Internship */}
      <section style={{ padding: '5rem 0', borderBottom: '1px solid var(--panel-border)' }}>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 700, marginBottom: '1rem' }}>Special Opportunity</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
                1-Month Singapore<br />Internship — T-Hub
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                For self-driven, motivated individuals ready to work in the real world. Not shadowing. Not observing. Actually doing.
              </p>
            </div>
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  'Organize & manage international business events on the ground',
                  'Work directly with HNIs & global business leaders',
                  'Coordinate international business expansion tours',
                  'Full WTITC support + official internship certification',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ background: 'var(--primary)', color: 'var(--accent)', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0, marginTop: '0.1rem' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ fontSize: '1rem', color: 'var(--text-dark)', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '2rem', padding: '1rem 1.25rem', background: 'var(--bg-alt)', borderRadius: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)', borderLeft: '3px solid var(--accent)' }}>
                <strong style={{ color: 'var(--primary)' }}>Ideal for:</strong> Self-driven, motivated, outgoing individuals.
              </div>
              <Link to="/pricing" className="btn btn-gold btn-lg" style={{ marginTop: '2rem' }}>
                Apply Now <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who organizes */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <Globe size={36} className="accent-color" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
              Who is behind this?
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
              Explore2Expand is organized by the <strong style={{ color: 'var(--primary)' }}>World Telugu IT Council (WTITC)</strong> — with real, established ties to international chambers of commerce, embassies, and elite corporate networks globally.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              We open the doors. You walk through them.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
