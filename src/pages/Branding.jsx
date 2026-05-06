import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

export default function Branding() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '4rem', background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h1 variants={fadeIn} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Outfit', fontWeight: 800, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>
            Branding
          </motion.h1>
          <motion.div variants={fadeIn} style={{ width: '100%', height: '400px', borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }}>
            <img src="/assets/insights_banner.png" alt="Page Banner" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>
          <motion.div variants={fadeIn} style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p>Branding within Explore2Expand (E2E) is centered on helping participants build a strong, credible, and globally relevant identity. In international markets, a brand is not just a logo or a name but a complete representation of trust, value, and differentiation. E2E focuses on enabling businesses, startups, and professionals to position themselves effectively so they can stand out in competitive global environments.</p>
            <p>A key aspect of branding is global positioning, where participants learn how to align their offerings with international expectations. This involves understanding cultural nuances, customer behavior, and market trends in different regions. Participants are guided to refine their value proposition so that it clearly communicates what makes them unique and why global audiences should choose them. This clarity is essential when entering new markets where credibility and first impressions matter significantly.</p>
            <p>Another important element is identity development. This includes creating consistent messaging, visual identity, and communication strategies that reflect professionalism and global standards. Participants are encouraged to build a cohesive brand across all touchpoints, ensuring that their image remains strong and recognizable. Digital presence also plays a critical role, as global markets rely heavily on online platforms. E2E emphasizes the importance of maintaining a professional website, active social media presence, and strong digital communication.</p>
            <p>Storytelling is used as a powerful tool to connect with audiences. Participants are guided to present their journey, achievements, and vision in a compelling way that resonates with international stakeholders. Additionally, credibility is enhanced through participation in global missions, networking events, and collaborations, which strengthen the brand's reputation.</p>
            <p>Consistency remains a core principle, ensuring that the brand message is clear and uniform across different channels and markets. Overall, branding under E2E helps participants build trust, attract opportunities, and create a lasting impression, enabling them to establish a strong foothold in global markets.</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
