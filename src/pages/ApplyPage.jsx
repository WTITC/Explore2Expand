import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const steps = [
  { num: '01', title: 'Express Interest', desc: 'Fill out a brief application with your background, goals, and what you hope to achieve through E2E.' },
  { num: '02', title: 'Program Matching', desc: 'Based on your profile, you are matched with the right missions, tracks, and opportunities suited to your goals.' },
  { num: '03', title: 'Screening & Selection', desc: 'A quick evaluation to ensure your goals align with the program and that you are prepared to participate meaningfully.' },
  { num: '04', title: 'Onboarding & Preparation', desc: 'Receive full program details, timelines, and pre-departure orientation to prepare you for your global mission.' },
];

export default function Apply() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>

          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem', textAlign: 'center' }}>
            Apply to E2E
          </motion.h1>\n
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/engage_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.p variants={fadeIn} style={{ textAlign: 'center', fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
            Your first step toward a global mission begins here. Join hundreds of entrepreneurs, exporters, students, and professionals who have stepped onto the world stage through Explore2Expand.
          </motion.p>

          {/* Application Steps */}
          <motion.div variants={fadeIn} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ background: 'var(--bg-alt)', borderRadius: '1rem', padding: '1.75rem', borderTop: '3px solid var(--accent)' }}>
                <div style={{ fontSize: '2rem', fontFamily: 'Outfit', fontWeight: 900, color: 'var(--panel-border)', marginBottom: '0.5rem' }}>{s.num}</div>
                <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.05rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
            <p>The "Apply" component of Explore2Expand (E2E) serves as the entry point for individuals and organizations who wish to participate in global missions and opportunities. It is designed to be a simple, transparent, and structured process that allows businesses, students, exporters, startups, and professionals to express their interest and begin their journey toward global exposure.</p>
            <p>Applicants are required to provide details about their background, interests, and expectations from the program. This helps in understanding their goals, whether it is expanding a business internationally, gaining global work experience, or building professional networks. Based on this information, participants are matched with suitable missions, program tracks, and opportunities that best fit their needs.</p>
            <p>The Apply process also acts as a filtering mechanism to ensure that participants are genuinely motivated and ready to benefit from the program. This ensures that every cohort consists of individuals who are committed to learning, collaborating, and achieving outcomes. The application stage often includes guidance and support to help applicants prepare effectively.</p>
            <p>Overall, the Apply stage is designed to be the starting point of a structured journey. It ensures that the right participants are selected, aligned, and prepared for global exposure. By creating a smooth and organized entry process, E2E sets the foundation for a meaningful and impactful experience for all participants.</p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeIn} style={{ textAlign: 'center', background: 'var(--primary)', borderRadius: '1.5rem', padding: '3rem 2rem' }}>
            <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>
              Ready to Begin Your Global Journey?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Limited seats available — 21–24 May 2026, Singapore.
            </p>
            <a
              href="https://bit.ly/explore2expand"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.15rem', padding: '1rem 2.5rem' }}
            >
              Apply Now <ArrowUpRight size={22} />
            </a>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
              {['No hidden charges', 'Visa support included', 'Limited seats only'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
                  <CheckCircle size={16} color="var(--accent)" /> {item}
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
