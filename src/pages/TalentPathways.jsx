import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function TalentPathways() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Talent Pathways
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/programs_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Talent Pathways within Explore2Expand (E2E) are designed to create direct connections between individuals and global career opportunities. These pathways focus on enabling students and professionals to build the skills, exposure, and networks required to succeed in an increasingly interconnected world.
            </p>
            <p>
              The primary objective of Talent Pathways is to bridge the gap between talent and opportunity. Many individuals possess the skills and ambition to succeed globally but lack access to the right platforms and connections. E2E addresses this gap by creating structured pathways that link participants with international internships, mentorship programs, training opportunities, and employment prospects.
            </p>
            <p>
              A key component of Talent Pathways is international exposure. Through participation in global missions, individuals gain insights into different work cultures, industry practices, and professional expectations. This exposure helps them develop a global mindset and adaptability, which are essential for success in international environments.
            </p>
            <p>
              Mentorship is another important aspect. Participants are connected with industry experts, business leaders, and professionals who guide them in their career journeys. These mentors provide valuable insights, feedback, and support, helping participants make informed decisions about their careers.
            </p>
            <p>
              Skill development is also a major focus. Talent Pathways include workshops, training sessions, and hands-on experiences that enhance both technical and soft skills. Participants learn communication, leadership, problem-solving, and cross-cultural collaboration skills, which are highly valued in global workplaces.
            </p>
            <p>
              Additionally, Talent Pathways aim to create long-term impact. The relationships and experiences gained through these pathways extend beyond the duration of the program. Participants become part of a global network, opening doors to future opportunities and collaborations.
            </p>
            <p>
              In summary, Talent Pathways are a crucial element of E2E’s vision to empower individuals. They not only prepare participants for global careers but also enable them to actively contribute to international ecosystems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
