import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function ExportGateways() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Export Gateways
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/pathways_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>Export Gateways within Explore2Expand serve as enabling channels that facilitate the movement of products, services, and ideas from local markets to global destinations. They are designed to simplify the process of exporting by providing structured support, connectivity, and visibility for users looking to reach international audiences.</p>
            <p>Exporting is often seen as a complex process involving logistics, regulations, documentation, and market understanding. Export Gateways address these complexities by creating streamlined pathways that guide users through each stage of the export journey. By organizing the process into clear steps, Explore2Expand ensures that users can navigate global trade with ease and efficiency.</p>
            <p>A key feature of Export Gateways is their focus on visibility. For any product or service to succeed in a global market, it must be visible to the right audience. These gateways connect users with international platforms, networks, and markets, increasing their reach and exposure. This visibility is essential for building brand recognition and establishing a presence in new regions.</p>
            <p>The concept also emphasizes reliability and structure. Export Gateways provide users with access to information, resources, and networks that ensure smooth transactions and compliance with global standards. This reduces risks and enhances confidence, enabling users to engage in international trade more effectively.</p>
            <p>Another important aspect is scalability. Export Gateways are designed to support growth at every stage, from initial export attempts to large-scale operations. They allow users to start small and gradually expand their reach as they gain experience and build capacity. This flexibility makes global trade more approachable and sustainable.</p>
            <p>Collaboration plays a significant role here as well. By connecting exporters with distributors, partners, and support systems, Export Gateways create a network-driven environment that enhances efficiency and success. Users are not isolated but are part of a connected ecosystem that supports their growth.</p>
            <p>In essence, Export Gateways transform the export process into a structured, accessible, and scalable journey. They enable users to confidently take their offerings to global markets and achieve sustainable expansion.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
