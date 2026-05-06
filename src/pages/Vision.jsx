import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function Vision() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Vision & Mandate
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/discover_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>
              The Vision & Mandate of Explore2Expand define its long-term aspirations and the actions required to achieve them. The vision is to create a globally interconnected ecosystem where opportunities are accessible, and growth is not limited by geography. It aims to empower individuals and organizations to expand beyond local boundaries and engage with global networks.
            </p>
            <p>
              This vision is supported by a strong mandate that focuses on execution. Explore2Expand is not just about identifying opportunities but enabling users to act on them. It provides tools, insights, and connections that help users navigate the global landscape effectively. The mandate ensures that the platform delivers practical value and measurable outcomes.
            </p>
            <p>
              A central aspect of the Vision & Mandate is empowerment. Explore2Expand equips users with the resources needed to take control of their growth journeys. By providing access to global networks and opportunities, it encourages users to explore new possibilities and pursue them with confidence. This empowerment is essential for fostering innovation and progress.
            </p>
            <p>
              Innovation plays a crucial role in achieving the vision. Explore2Expand promotes a forward-thinking approach, encouraging users to adopt new ideas and strategies. This focus on innovation ensures that the platform remains dynamic and relevant in a rapidly changing world.
            </p>
            <p>
              The Vision & Mandate also emphasize responsibility and sustainability. Growth should be meaningful and contribute positively to the global ecosystem. Explore2Expand is committed to ensuring that its initiatives support long-term development and ethical practices.
            </p>
            <p>
              In essence, the Vision & Mandate provide direction and purpose. They guide the platform’s efforts and ensure that Explore2Expand remains focused on enabling global connectivity, collaboration, and sustainable expansion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
