import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function ConnectPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

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
          subject: `Message from ${form.name} — ${form.subject}`,
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
            Connect With Us
          </motion.h1>\n
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/engage_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.p variants={fadeIn} style={{ textAlign: 'center', fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Whether you have a question, want to explore opportunities, or simply want to know more — we're here. Reach out and let's start a conversation.
          </motion.p>

          {/* Quick contact options */}
          <motion.div variants={fadeIn} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            <a href="https://wa.me/918019577575?text=Hi,%20I'd%20like%20to%20connect%20about%20Explore2Expand" target="_blank" rel="noreferrer"
              style={{ background: '#25D366', borderRadius: '1rem', padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'white', transition: 'opacity 0.2s' }}>
              <MessageCircle size={32} />
              <div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1rem' }}>WhatsApp</div>
                <div style={{ fontSize: '0.85rem', opacity: 0.85 }}>Chat with us instantly</div>
              </div>
            </a>
            <a href="tel:+918019577575"
              style={{ background: 'var(--primary)', borderRadius: '1rem', padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'white', transition: 'opacity 0.2s' }}>
              <Phone size={32} />
              <div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1rem' }}>Call Us</div>
                <div style={{ fontSize: '0.85rem', opacity: 0.85 }}>+91 80195 77575</div>
              </div>
            </a>
            <a href="mailto:info@explore2expand.com"
              style={{ background: 'var(--bg-alt)', borderRadius: '1rem', padding: '1.75rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'var(--primary)', border: '1px solid var(--panel-border)', transition: 'opacity 0.2s' }}>
              <Mail size={32} color="var(--accent)" />
              <div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1rem' }}>Email Us</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>info@explore2expand.com</div>
              </div>
            </a>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeIn} style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}>
            <p>The "Connect" component of Explore2Expand (E2E) is centered on building meaningful relationships and networks that drive long-term growth and opportunities. Through missions, events, and digital platforms, participants are given multiple opportunities to connect with industry leaders, entrepreneurs, investors, educators, and peers from different parts of the world.</p>
            <p>Connections built through E2E can lead to various outcomes, including business partnerships, career opportunities, mentorship, and knowledge sharing. Participants benefit from being part of a global community where they can learn from others, seek guidance, and explore new directions.</p>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeIn} style={{ background: 'var(--bg-alt)', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid var(--panel-border)' }}>
            <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Send Us a Message</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>We'll respond within 24–48 hours.</p>

            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <CheckCircle size={48} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--primary)', fontSize: '1.5rem' }}>Message Received!</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Thank you for reaching out. Our team will be in touch shortly.</p>
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
                    <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--panel-border)', borderRadius: '0.6rem', background: 'var(--white)', color: 'var(--text)', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--panel-border)', borderRadius: '0.6rem', background: 'var(--white)', color: 'var(--text)', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Subject *</label>
                    <input name="subject" value={form.subject} onChange={handleChange} required placeholder="What's this about?"
                      style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--panel-border)', borderRadius: '0.6rem', background: 'var(--white)', color: 'var(--text)', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Tell us how we can help you..." rows={5}
                    style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--panel-border)', borderRadius: '0.6rem', background: 'var(--white)', color: 'var(--text)', fontSize: '1rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                </div>
                {status === 'error' && <p style={{ color: '#e03131', fontSize: '0.95rem' }}>Something went wrong. Please try WhatsApp or call us directly.</p>}
                <button type="submit" disabled={status === 'sending'} className="btn btn-gold btn-lg" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {status === 'sending' ? 'Sending...' : <><Send size={18} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
