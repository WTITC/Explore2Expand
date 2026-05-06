import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function Charter() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            The E2E Charter
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/discover_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              The E2E Charter serves as the foundation of the Explore2Expand initiative, defining its purpose, principles, and structured approach to global connectivity. It establishes a clear framework that connects individuals, businesses, and ideas across boundaries, enabling them to move from exploration to meaningful expansion. The Charter is designed to ensure that growth is not random but guided, structured, and aligned with real-world opportunities.
            </p>
            <p>
              At its core, the Charter promotes inclusivity and accessibility. It recognizes that potential exists everywhere, but access to opportunities is often limited. By creating a unified platform, Explore2Expand bridges this gap and allows users from different backgrounds to participate in a globally connected ecosystem. Whether it is a student seeking exposure, a startup looking to scale, or a business aiming to expand internationally, the Charter provides a common pathway for growth.
            </p>
            <p>
              The E2E Charter also emphasizes structured exploration. It encourages users to identify, evaluate, and connect opportunities in a systematic way rather than relying on uncertainty. This approach reduces risk and enhances decision-making, enabling users to progress with clarity and confidence. It ensures that every step taken is aligned with a broader strategy for expansion.
            </p>
            <p>
              Collaboration is another key pillar of the Charter. Explore2Expand fosters a network-driven ecosystem where users can connect, share knowledge, and build partnerships. This interconnected approach strengthens the platform and creates a supportive environment for growth. By enabling collaboration, the Charter ensures that users can leverage collective knowledge and resources.
            </p>
            <p>
              Ultimately, the E2E Charter is a guiding framework that transforms ideas into actionable pathways. It sets the direction for Explore2Expand and ensures that all activities contribute to a unified vision of global connectivity and sustainable growth.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
