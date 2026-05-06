import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle } from 'lucide-react';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const partnerTypes = [
  { title: 'Business & Trade Partners', desc: 'Distributors, buyers, chambers of commerce, and local companies that facilitate market entry.' },
  { title: 'Academic & Institutional Partners', desc: 'Universities, training institutes, and research bodies that support learning and exposure.' },
  { title: 'Investor & Startup Ecosystem', desc: 'Incubators, accelerators, angel networks, and venture funds for startups and innovators.' },
  { title: 'Government & Policy Partners', desc: 'Trade bodies, embassies, and government organizations that strengthen international credibility.' },
];

export default function PartnersPage() {
  const [form, setForm] = useState({ name: '', organization: '', email: '', type: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: `Partnership Inquiry from ${form.name} — ${form.organization}`,
          from_name: form.name,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>

          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem', textAlign: 'center' }}>
            Partner With E2E
          </motion.h1>\n
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/engage_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.p variants={fadeIn} style={{ textAlign: 'center', fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Build a meaningful global collaboration. We work with trade organizations, academic institutions, investor networks, and businesses to create opportunities for participants worldwide.
          </motion.p>

          {/* Partner Types */}
          <motion.div variants={fadeIn} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {partnerTypes.map((p, i) => (
              <div key={i} style={{ background: 'var(--bg-alt)', borderRadius: '1rem', padding: '1.75rem', borderLeft: '3px solid var(--accent)' }}>
                <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeIn} style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
            <p>Partnerships are a fundamental pillar of Explore2Expand (E2E), enabling participants to access opportunities that would otherwise be difficult to achieve independently. The initiative collaborates with businesses, trade organizations, academic institutions, and industry experts to create a powerful global ecosystem.</p>
            <p>The focus of E2E is not just on forming partnerships but on nurturing long-term, sustainable relationships built on trust, mutual benefit, and shared goals. Participants are encouraged to maintain and strengthen these connections beyond the program, turning initial interactions into meaningful collaborations.</p>
          </motion.div>

          {/* Partnership Inquiry Form */}
          <motion.div variants={fadeIn} style={{ background: 'var(--bg-alt)', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid var(--panel-border)' }}>
            <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Partnership Inquiry</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Fill in the form below and our team will get back to you within 48 hours.</p>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <CheckCircle size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--primary)', fontSize: '1.5rem' }}>Thank you!</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Your inquiry has been received. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--panel-border)', borderRadius: '0.6rem', background: 'var(--white)', color: 'var(--text)', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Organization *</label>
                    <input name="organization" value={form.organization} onChange={handleChange} required placeholder="Company / Institution name"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--panel-border)', borderRadius: '0.6rem', background: 'var(--white)', color: 'var(--text)', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--panel-border)', borderRadius: '0.6rem', background: 'var(--white)', color: 'var(--text)', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Partnership Type</label>
                    <select name="type" value={form.type} onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--panel-border)', borderRadius: '0.6rem', background: 'var(--white)', color: 'var(--text)', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}>
                      <option value="">Select a type</option>
                      <option value="Business & Trade">Business & Trade</option>
                      <option value="Academic & Institutional">Academic & Institutional</option>
                      <option value="Investor & Startup Ecosystem">Investor & Startup Ecosystem</option>
                      <option value="Government & Policy">Government & Policy</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell us about your organization and how you'd like to collaborate..." rows={5}
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--panel-border)', borderRadius: '0.6rem', background: 'var(--white)', color: 'var(--text)', fontSize: '1rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                </div>
                {status === 'error' && <p style={{ color: '#e03131', fontSize: '0.95rem' }}>Something went wrong. Please try again or reach us on WhatsApp.</p>}
                <button type="submit" disabled={status === 'sending'} className="btn btn-gold btn-lg" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {status === 'sending' ? 'Sending...' : <><Send size={18} /> Send Inquiry</>}
                </button>
              </form>
            )}
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
