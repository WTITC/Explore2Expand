import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } };

const faqs = [
  {
    q: 'Is the visa fee actually included?',
    a: "Yes — fully. The visa application cost is covered inside the Access Pass. No hidden extras. Our WTITC team handles the complete documentation process. You provide your documents; we do the backend work.",
  },
  {
    q: "What if my visa gets rejected?",
    a: "We do everything we can to maximize your approval chances. But visa decisions ultimately sit with the embassy. In the rare case of a rejection, reapplication is possible — but the costs and risks for that reapplication are borne by the applicant.",
  },
  {
    q: "Who is this actually built for?",
    a: "Businessmen, startup founders, entrepreneurs, and international exporters who are serious about global expansion. And students who want a real 1-month internship experience in Singapore via the T-Hub Initiative.",
  },
  {
    q: "What is the T-Hub Internship?",
    a: "It's a 1-month internship in Singapore for motivated, outgoing individuals. You'll organize international business events, work with HNIs and global leaders, and coordinate expansion tours — with a full WTITC certificate at the end. This is not observational. It's real work.",
  },
  {
    q: "Is this worth it for an early-stage business or student?",
    a: "Honestly — especially for early-stage businesses and students, yes. You gain access to the kind of frameworks, investors, and networks that normally take years to reach. The exposure alone changes the trajectory.",
  },
  {
    q: "Which industries does this apply to?",
    a: "All of them. The ASEAN & AI Summits and the business networking sessions are deliberately cross-industry. Technology, Manufacturing, Export, Healthcare, Education — the mix is intentional so the opportunities cross over.",
  },
  {
    q: "Who organizes Explore2Expand?",
    a: "The World Telugu IT Council (WTITC) — an organization with established, real ties to international chambers of commerce, embassies, and elite corporate networks around the world. This is not a travel agency. This is a delegation.",
  },
  {
    q: "How do I book?",
    a: "WhatsApp us directly at +91 80195 75775 or use the Book Access Pass button on the Pricing page. Seats are limited for the 21–24 May 2026 Singapore mission.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ paddingTop: '90px', background: 'var(--white)' }}>

      {/* Header */}
      <section style={{ borderBottom: '1px solid var(--panel-border)' }}>
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
              Questions
            </p>
            <h1 className="heading-xl" style={{ maxWidth: '720px', lineHeight: 1.1 }}>
              Things people usually ask us.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* FAQ list */}
      <section style={{ padding: '3rem 0 6rem' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeIn}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{ borderBottom: '1px solid var(--panel-border)' }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '1.75rem 0',
                    gap: '1.5rem',
                  }}
                >
                  <span style={{
                    fontFamily: 'Outfit',
                    fontWeight: 700,
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    color: openIndex === idx ? 'var(--primary)' : 'var(--text-dark)',
                    lineHeight: 1.3,
                    transition: 'color 0.2s',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    flexShrink: 0,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: openIndex === idx ? 'var(--primary)' : 'var(--bg-alt)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}>
                    {openIndex === idx
                      ? <Minus size={16} color="white" />
                      : <Plus size={16} color="var(--text-muted)" />
                    }
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        paddingBottom: '2rem',
                        fontSize: '1.05rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.8,
                        paddingLeft: '0',
                        maxWidth: '680px',
                      }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            style={{ marginTop: '5rem', padding: '3rem', background: 'var(--bg-alt)', borderRadius: '1.25rem', border: '1px solid var(--panel-border)' }}>
            <h3 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '0.75rem' }}>
              Still have a question?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              WhatsApp us directly — we respond fast and we'll give you a straight answer.
            </p>
            <a
              href="https://wa.me/918019577575?text=Hi,%20I%20have%20a%20question%20about%20the%20E2E%20Singapore%20Mission"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              Message Us on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
