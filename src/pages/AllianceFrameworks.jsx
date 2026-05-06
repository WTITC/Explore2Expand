import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function AllianceFrameworks() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Alliance Frameworks
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/pathways_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>Alliance Frameworks within Explore2Expand are designed to build strong, strategic partnerships that support global expansion and collaboration. They provide a structured approach to forming connections between individuals, businesses, organizations, and ecosystems, enabling them to work together toward shared goals.</p>
            <p>In a global environment, success often depends on the ability to collaborate effectively. Alliance Frameworks recognize this and create systems that facilitate meaningful partnerships. These frameworks help users identify potential collaborators, establish relationships, and build networks that enhance their growth journey. By fostering collaboration, Explore2Expand ensures that users can leverage collective strengths and resources.</p>
            <p>The frameworks are built on trust, alignment, and mutual benefit. They ensure that partnerships are not just connections but are meaningful and productive. By focusing on shared objectives and complementary strengths, Alliance Frameworks create a foundation for long-term collaboration and success.</p>
            <p>Another key aspect is structure. Forming partnerships can be complex, especially across different regions and industries. Alliance Frameworks simplify this process by providing clear guidelines and pathways for collaboration. This structure reduces uncertainty and ensures that partnerships are effective and sustainable.</p>
            <p>The concept also emphasizes adaptability. As global conditions change, partnerships need to evolve. Alliance Frameworks are designed to be flexible, allowing users to adjust their collaborations based on new opportunities and challenges. This adaptability ensures that partnerships remain relevant and valuable over time.</p>
            <p>Additionally, these frameworks support innovation. By bringing together diverse perspectives and expertise, they create an environment where new ideas can emerge and grow. This collaborative innovation is essential for staying competitive in a dynamic global landscape.</p>
            <p>Ultimately, Alliance Frameworks transform collaboration into a strategic advantage. They enable users to build strong, meaningful connections that support their journey from exploration to expansion.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
