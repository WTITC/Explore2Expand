import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function DelegationPathways() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Delegation Pathways
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/pathways_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>Delegation Pathways within Explore2Expand focus on enabling efficient execution and management of global expansion activities through structured distribution of roles and responsibilities. They are designed to help users scale their efforts by leveraging networks, teams, and partnerships across different regions.</p>
            <p>As expansion grows, managing every aspect independently becomes challenging. Delegation Pathways address this by providing a framework for distributing tasks and responsibilities effectively. This allows users to focus on strategic decisions while ensuring that operations are carried out efficiently.</p>
            <p>The concept emphasizes clarity and coordination. Delegation Pathways define who is responsible for what, ensuring that all activities are aligned and executed smoothly. This clarity reduces confusion and enhances productivity, enabling users to manage complex operations with ease.</p>
            <p>Another important aspect is scalability. Delegation Pathways allow users to expand their operations without being limited by capacity. By leveraging networks and partnerships, they can extend their reach and capabilities. This makes it possible to handle larger opportunities and achieve greater impact.</p>
            <p>The pathways also promote trust and accountability. By establishing clear roles and expectations, they ensure that all participants are aligned and committed to achieving common goals. This creates a reliable and efficient system for managing global activities.</p>
            <p>Collaboration is again a key element. Delegation Pathways connect users with individuals and organizations that can support their efforts in different regions. This network-driven approach enhances efficiency and ensures that tasks are handled by those best equipped to do so.</p>
            <p>Ultimately, Delegation Pathways enable users to scale and manage their expansion effectively. They transform complexity into coordinated action, allowing users to focus on growth while ensuring that execution is handled seamlessly.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
