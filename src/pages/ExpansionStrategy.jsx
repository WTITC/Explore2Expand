import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function ExpansionStrategy() {
  return (
    <div className="page-wrapper" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Expansion Strategy
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/insights_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>The Expansion Strategy within Explore2Expand (E2E) is designed to provide a clear and structured pathway for businesses, startups, exporters, and professionals to enter and grow in international markets. It focuses on transforming global ambitions into actionable steps by combining market intelligence, strategic planning, and on-ground exposure. The process begins with identifying the most suitable global markets based on industry relevance, demand potential, ease of doing business, and growth opportunities. Instead of a one-size-fits-all approach, the strategy emphasizes careful selection of regions where participants can realistically succeed and scale.</p>
            <p>Once the target market is identified, participants are guided through entry strategies that include exporting, forming partnerships, or establishing a local presence. Understanding international regulations, compliance requirements, taxation systems, and cultural differences is a key part of this stage. E2E missions play a crucial role by providing direct exposure to these markets, allowing participants to interact with local businesses, trade bodies, and industry experts. This reduces uncertainty and builds confidence.</p>
            <p>The strategy also focuses on ecosystem integration, where participants connect with stakeholders such as distributors, investors, and collaborators. This helps in building a strong foundation for long-term operations. Beyond entry, scaling becomes the next priority. Participants are encouraged to expand their reach by strengthening supply chains, improving product-market fit, and adopting global best practices.</p>
            <p>Risk management is an essential component, addressing potential challenges like competition, regulatory barriers, and operational complexities. Participants are equipped with practical insights and solutions to navigate these risks effectively. Continuous support after the mission ensures that the expansion journey does not stop at exposure but translates into real outcomes. Overall, the Expansion Strategy enables participants to move from local operations to a sustainable global presence with clarity, confidence, and strategic direction.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
