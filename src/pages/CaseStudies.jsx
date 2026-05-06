import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function CaseStudies() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Case Studies
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/insights_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>Case studies within Explore2Expand (E2E) serve as powerful tools to demonstrate the real impact of the initiative. They provide detailed insights into how participants have successfully utilized the platform to achieve their global ambitions. By showcasing real-world examples, case studies help new participants understand the practical application of strategies and the outcomes that can be achieved.</p>
            <p>These case studies cover a wide range of participants, including businesses, startups, students, and professionals. For businesses and exporters, they highlight success stories such as entering new markets, securing export deals, and forming international partnerships. These examples illustrate how structured exposure, networking, and strategic planning can lead to tangible business growth.</p>
            <p>For students and professionals, case studies focus on career-related achievements such as securing internships, gaining mentorship, and accessing global opportunities. They demonstrate how international exposure and skill development can enhance career prospects and open new pathways. Startup case studies highlight journeys of innovation, funding, and scaling, showing how connections with global ecosystems can accelerate growth.</p>
            <p>Each case study not only presents success but also includes the challenges faced and the solutions implemented. This provides valuable learning insights, helping participants understand potential obstacles and how to overcome them. The lessons derived from these experiences act as guidance for future participants.</p>
            <p>In addition to being educational, case studies also serve as a source of inspiration. They motivate participants by showing what is possible and encouraging them to aim higher. They also strengthen the credibility of E2E by providing proof of its effectiveness and impact.</p>
            <p>Overall, case studies act as both evidence and guidance, helping participants learn, adapt, and succeed in their journey toward global expansion.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
