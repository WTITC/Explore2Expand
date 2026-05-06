import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function MarketEntry() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Market Entry Corridors
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/pathways_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>Market Entry Corridors represent structured pathways designed to help individuals, startups, and businesses transition from local markets into global ecosystems with clarity and confidence. Within the Explore2Expand framework, these corridors act as guided routes that simplify the complexity of entering new markets by connecting users to the right regions, industries, and networks.</p>
            <p>Entering a global market often involves challenges such as understanding regulations, identifying demand, building trust, and establishing connections. Market Entry Corridors address these challenges by organizing opportunities into well-defined channels. These channels provide direction, reduce uncertainty, and ensure that expansion efforts are aligned with real-world market conditions. Instead of navigating unfamiliar environments alone, users are supported through a framework that highlights the most effective entry points.</p>
            <p>The concept also emphasizes strategic alignment. Each corridor is designed based on factors such as market demand, economic activity, and growth potential. This ensures that users are not just entering new markets, but entering the right markets at the right time. By focusing on relevance and timing, Explore2Expand enables users to maximize their impact and success.</p>
            <p>Another important aspect of Market Entry Corridors is accessibility. They are built to support a wide range of users—from students exploring international opportunities to startups seeking expansion and businesses aiming to scale globally. By making these pathways clear and structured, Explore2Expand ensures that global entry is no longer limited to large organizations but is accessible to anyone with the ambition to grow.</p>
            <p>Collaboration is also central to this concept. Market Entry Corridors connect users with local partners, networks, and ecosystems within target regions. This connectivity helps in building trust, understanding cultural dynamics, and accelerating integration into new markets. It transforms expansion from an isolated effort into a collaborative journey.</p>
            <p>Ultimately, Market Entry Corridors simplify global expansion by providing structured, strategic, and accessible routes into international markets. They turn complexity into clarity and enable users to move forward with confidence.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
