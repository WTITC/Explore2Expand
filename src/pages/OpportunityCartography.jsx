import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function OpportunityCartography() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Opportunity Cartography
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/discover_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              Opportunity Cartography is the process of identifying and mapping growth opportunities across regions and sectors. It transforms opportunities into clear, structured pathways, enabling users to understand where and how they can expand. This approach eliminates uncertainty and provides a strategic framework for growth.
            </p>
            <p>
              At its core, Opportunity Cartography focuses on clarity. With countless possibilities available, it can be difficult to determine the best direction. This section organizes opportunities into a structured format, making it easier for users to evaluate and prioritize them. It ensures that decisions are based on insight rather than guesswork.
            </p>
            <p>
              The process involves analyzing key factors such as market demand, resources, and connectivity. By considering these elements, Opportunity Cartography ensures that opportunities are not only identified but also viable and impactful. This comprehensive analysis helps users maximize their potential for success.
            </p>
            <p>
              Alignment is another critical aspect. Opportunities must match the user’s goals, capabilities, and resources. Opportunity Cartography helps users find opportunities that are relevant to their needs, ensuring that their efforts are focused and effective.
            </p>
            <p>
              The section also promotes exploration and collaboration. By presenting opportunities within a connected ecosystem, it encourages users to explore new areas and build partnerships. This collaborative approach enhances growth and creates a dynamic environment.
            </p>
            <p>
              Ultimately, Opportunity Cartography turns possibilities into actionable strategies. It provides the guidance needed to move from exploration to expansion, enabling users to achieve meaningful and sustainable growth within the Explore2Expand ecosystem.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
