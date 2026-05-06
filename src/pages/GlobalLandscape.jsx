import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function GlobalLandscape() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Global Landscape
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/discover_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              The Global Landscape offers a comprehensive view of interconnected regions, markets, and trends across the world. It helps users understand how different ecosystems operate and how opportunities are distributed globally. By providing this broader perspective, Explore2Expand enables users to make informed decisions and engage with global networks more effectively.
            </p>
            <p>
              In today’s interconnected world, opportunities are not confined to specific locations. The Global Landscape highlights this reality by showcasing how regions contribute to a unified global system. It allows users to identify emerging markets, understand demand patterns, and recognize growth potential in different areas.
            </p>
            <p>
              One of the key benefits of the Global Landscape is its ability to provide context. Instead of viewing opportunities in isolation, users can see how they fit into the larger global picture. This context is essential for strategic planning and ensures that decisions are aligned with global trends.
            </p>
            <p>
              The Global Landscape also emphasizes connectivity. By illustrating how regions and industries are linked, it encourages users to think beyond traditional boundaries. This interconnected approach opens up new possibilities for collaboration and expansion. Users can identify partnerships, access new resources, and engage with diverse networks.
            </p>
            <p>
              Adaptability is another important aspect. As global conditions evolve, staying informed is critical. The Global Landscape provides insights that help users respond to changes and adjust their strategies accordingly. This adaptability ensures that users remain competitive and resilient.
            </p>
            <p>
              Ultimately, the Global Landscape transforms complex global data into clear, actionable insights. It empowers users to navigate the global ecosystem with confidence and make decisions that support sustainable growth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
